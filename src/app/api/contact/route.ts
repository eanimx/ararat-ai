import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  business?: unknown;
  email?: unknown;
  phone?: unknown;
  notes?: unknown;
};

type FieldErrors = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  if (!/^[+()\-.\s\d]+$/.test(value)) return false;
  return value.replace(/\D/g, "").length >= 7;
}

function validate(payload: ContactPayload) {
  const name = asTrimmedString(payload.name);
  const business = asTrimmedString(payload.business);
  const email = asTrimmedString(payload.email);
  const phone = asTrimmedString(payload.phone);
  const notes = asTrimmedString(payload.notes);

  const errors: FieldErrors = {};
  if (!name) errors.name = "Your name is required.";
  else if (name.length > 200) errors.name = "That name is too long.";

  if (!business) errors.business = "Let us know what kind of business.";
  else if (business.length > 200) errors.business = "That's too long.";

  if (!email) errors.email = "An email is required.";
  else if (!isValidEmail(email) || email.length > 320) {
    errors.email = "That doesn't look like a valid email.";
  }

  if (!phone) errors.phone = "A phone number is required.";
  else if (!isValidPhone(phone) || phone.length > 40) {
    errors.phone = "That doesn't look like a valid phone number.";
  }

  return { values: { name, business, email, phone, notes: notes.slice(0, 2000) }, errors };
}

// n8n exposes a "test" webhook (only live while a workflow is open and
// listening in the n8n editor) and a "production" one (always on once the
// workflow is activated). Route to whichever matches how this app is running.
function webhookUrlForEnvironment(): string | undefined {
  return process.env.NODE_ENV === "production"
    ? process.env.N8N_WEBHOOK_URL_PROD
    : process.env.N8N_WEBHOOK_URL_DEV;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { values, errors } = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const webhookUrl = webhookUrlForEnvironment();
  if (!webhookUrl) {
    console.error(
      `Missing n8n webhook URL for NODE_ENV="${process.env.NODE_ENV}". Set N8N_WEBHOOK_URL_DEV / N8N_WEBHOOK_URL_PROD.`
    );
    return NextResponse.json(
      { ok: false, error: "Server isn't configured to accept submissions yet." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      console.error(`n8n webhook responded with ${res.status}`);
      return NextResponse.json(
        { ok: false, error: "The callback service rejected the submission." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to reach n8n webhook:", err);
    return NextResponse.json(
      { ok: false, error: "Couldn't reach the callback service." },
      { status: 502 }
    );
  }
}
