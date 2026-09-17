export type CallbackFormValues = {
  name: string;
  business: string;
  email: string;
  phone: string;
  notes: string;
};

// Posts to our own server route (src/app/api/contact/route.ts), which holds
// the real n8n webhook URL and forwards the submission — the webhook address
// itself never ships to the browser.
export async function submitCallbackForm(values: CallbackFormValues): Promise<boolean> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    return res.ok;
  } catch {
    return false;
  }
}
