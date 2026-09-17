const CAL_URL = "https://cal.com/nima45/setup-call";

export const siteConfig = {
  businessName: "Ararat AI",
  calUrl: CAL_URL,
  calLink: CAL_URL.replace(/^https?:\/\/(www\.)?cal\.com\//, ""),
  // The callback form posts to our own /api/contact route, which forwards to
  // the n8n webhook server-side (see src/app/api/contact/route.ts) — no
  // webhook URL is ever shipped to the browser.
  contactEmail: "hello@araratai.com",
  summaryEmail: "summary@araratai.com",
};
