"use client";

import { useId, useState } from "react";
import { siteConfig } from "@/lib/config";
import { submitCallbackForm, type CallbackFormValues } from "@/lib/submitCallbackForm";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<keyof CallbackFormValues, string>>;

const initialValues: CallbackFormValues = {
  name: "",
  business: "",
  email: "",
  phone: "",
  notes: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidPhone(value: string) {
  const trimmed = value.trim();
  if (!/^[+()\-.\s\d]+$/.test(trimmed)) return false;
  return trimmed.replace(/\D/g, "").length >= 7;
}

function inputClass(hasError: boolean) {
  return `w-full bg-ink border rounded-[7px] px-3.5 py-2.5 text-bg text-[14.5px] font-body outline-none transition-colors disabled:opacity-60 focus:ring-2 focus:ring-accent/30 ${
    hasError ? "border-[#E2836B] focus:border-[#E2836B]" : "border-dark-border2 focus:border-accent"
  }`;
}

const legibleClass = "text-[#E4EDFF] font-semibold [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]";
const labelClass = `font-mono-ui text-[11px] tracking-[0.12em] uppercase ${legibleClass}`;
const hintClass = `text-[11px] normal-case ${legibleClass}`;

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: (id: string) => React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        {hint && <span className={hintClass}>{hint}</span>}
      </div>
      {children(id)}
      {error && <p className="m-0 mt-1 text-[12px] text-[#E2836B]">{error}</p>}
    </div>
  );
}

export default function CallbackForm() {
  const uid = useId();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange =
    (field: keyof CallbackFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: FieldErrors = {};
    if (!values.name.trim()) errors.name = "Your name is required.";
    if (!values.business.trim()) errors.business = "Let us know what kind of business.";
    if (!values.email.trim()) errors.email = "An email is required.";
    else if (!isValidEmail(values.email)) errors.email = "That doesn't look like a valid email.";
    if (!values.phone.trim()) errors.phone = "A phone number is required.";
    else if (!isValidPhone(values.phone)) {
      errors.phone = "That doesn't look like a valid phone number.";
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("loading");
    const ok = await submitCallbackForm(values);
    setStatus(ok ? "success" : "error");
  };

  if (status === "success") {
    const firstName = values.name.trim().split(/\s+/)[0];
    return (
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5 text-accent">
          <span className="w-4 h-4 rounded-[4px] bg-accent block shrink-0" />
          <span className="font-display text-[18px] sm:text-[19px] font-semibold">
            Thanks, {firstName} — we&apos;re on it
          </span>
        </div>
        <p className="m-0 text-[14px] text-muted leading-[1.55]">
          We&apos;ll call you back the same working day, and a confirmation email is on
          its way to {values.email.trim()}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <div className="font-display text-[17px] sm:text-[18px] font-semibold mb-0.5">
        Get a callback
      </div>

      <Field id={`${uid}-name`} label="Name" error={fieldErrors.name}>
        {(id) => (
          <input
            id={id}
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Your name"
            aria-invalid={Boolean(fieldErrors.name)}
            disabled={status === "loading"}
            className={inputClass(Boolean(fieldErrors.name))}
          />
        )}
      </Field>

      <Field id={`${uid}-business`} label="Business type" error={fieldErrors.business}>
        {(id) => (
          <input
            id={id}
            value={values.business}
            onChange={handleChange("business")}
            placeholder="e.g. dental clinic"
            aria-invalid={Boolean(fieldErrors.business)}
            disabled={status === "loading"}
            className={inputClass(Boolean(fieldErrors.business))}
          />
        )}
      </Field>

      <Field id={`${uid}-email`} label="Email" error={fieldErrors.email}>
        {(id) => (
          <input
            id={id}
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="you@business.com"
            aria-invalid={Boolean(fieldErrors.email)}
            disabled={status === "loading"}
            className={inputClass(Boolean(fieldErrors.email))}
          />
        )}
      </Field>

      <Field id={`${uid}-phone`} label="Phone number" error={fieldErrors.phone}>
        {(id) => (
          <input
            id={id}
            type="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            placeholder="Phone number"
            aria-invalid={Boolean(fieldErrors.phone)}
            disabled={status === "loading"}
            className={inputClass(Boolean(fieldErrors.phone))}
          />
        )}
      </Field>

      <Field id={`${uid}-notes`} label="Anything you'd like us to know" hint="Optional">
        {(id) => (
          <textarea
            id={id}
            value={values.notes}
            onChange={handleChange("notes")}
            placeholder="How many calls do you miss in a week?"
            rows={2}
            disabled={status === "loading"}
            className={`${inputClass(false)} resize-none`}
          />
        )}
      </Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-bg text-ink border-0 rounded-full py-3 text-[14.5px] font-bold font-body cursor-pointer mt-0.5 hover:bg-accent hover:text-accent-ink transition-colors disabled:opacity-70 disabled:cursor-wait"
      >
        {status === "loading" ? "Sending…" : "Request a callback"}
      </button>

      {status === "error" && (
        <p className="m-0 text-[13px] text-[#E2836B] leading-[1.5]">
          Something went wrong sending that. Try again, or email us directly at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline hover:text-accent">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      )}

      <p className="mt-0.5 mb-0 text-[12px] text-muted leading-[1.5]">
        We&apos;ll call back the same working day. No sales sequence, no newsletter.
      </p>
    </form>
  );
}
