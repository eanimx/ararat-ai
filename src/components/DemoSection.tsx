"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/config";

type Status = "idle" | "loading" | "success" | "error";

function isValidPhone(value: string) {
  const trimmed = value.trim();
  if (!/^[+()\-.\s\d]+$/.test(trimmed)) return false;
  return trimmed.replace(/\D/g, "").length >= 7;
}

export default function DemoSection() {
  const [values, setValues] = useState({ name: "", business: "", phone: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; phone?: string }>({});

  const handleChange =
    (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { name?: string; phone?: string } = {};
    if (!values.name.trim()) errors.name = "Your name is required.";
    if (!values.phone.trim()) errors.phone = "A phone number is required.";
    else if (!isValidPhone(values.phone)) {
      errors.phone = "That doesn't look like a valid phone number.";
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch(siteConfig.formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          business: values.business,
          phone: values.phone,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="demo" className="bg-dark-bg text-bg scroll-mt-[72px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-24 sm:py-40 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 sm:gap-18 items-center">
        <div>
          <Reveal>
            <h2 className="font-display text-[34px] sm:text-[42px] lg:text-[54px] leading-[1.05] tracking-[-0.035em] font-bold mb-5.5">
              Hear it answer your own questions.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="m-0 text-[16px] sm:text-[18px] leading-[1.6] text-muted-dark max-w-[32em]">
              Leave your number and we&apos;ll call you back with the agent set up for
              your industry.
            </p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          {status === "success" ? (
            <div className="bg-dark-card border border-dark-border rounded-2xl p-7 sm:p-8 flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-accent">
                <span className="w-4 h-4 rounded-[4px] bg-accent block shrink-0" />
                <span className="font-display text-[18px] sm:text-[19px] font-semibold">
                  Thanks — we&apos;ll call you back
                </span>
              </div>
              <p className="m-0 text-[14px] text-muted leading-[1.55]">
                We&apos;ll call back the same working day. No sales sequence, no
                newsletter.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-dark-card border border-dark-border rounded-2xl p-7 sm:p-8 flex flex-col gap-4"
            >
              <div className="font-display text-[18px] sm:text-[19px] font-semibold mb-1">
                Get a callback
              </div>

              <div>
                <input
                  value={values.name}
                  onChange={handleChange("name")}
                  placeholder="Your name"
                  aria-invalid={Boolean(fieldErrors.name)}
                  disabled={status === "loading"}
                  className={`w-full bg-ink border rounded-[7px] px-4 py-3.5 text-bg text-[15.5px] font-body outline-none transition-colors disabled:opacity-60 ${
                    fieldErrors.name
                      ? "border-[#E2836B] focus:border-[#E2836B]"
                      : "border-dark-border2 focus:border-accent"
                  }`}
                />
                {fieldErrors.name && (
                  <p className="m-0 mt-1.5 text-[12.5px] text-[#E2836B]">{fieldErrors.name}</p>
                )}
              </div>

              <input
                value={values.business}
                onChange={handleChange("business")}
                placeholder="Business type — e.g. dental clinic"
                disabled={status === "loading"}
                className="bg-ink border border-dark-border2 rounded-[7px] px-4 py-3.5 text-bg text-[15.5px] font-body outline-none focus:border-accent transition-colors disabled:opacity-60"
              />

              <div>
                <input
                  value={values.phone}
                  onChange={handleChange("phone")}
                  placeholder="Phone number"
                  aria-invalid={Boolean(fieldErrors.phone)}
                  disabled={status === "loading"}
                  className={`w-full bg-ink border rounded-[7px] px-4 py-3.5 text-bg text-[15.5px] font-body outline-none transition-colors disabled:opacity-60 ${
                    fieldErrors.phone
                      ? "border-[#E2836B] focus:border-[#E2836B]"
                      : "border-dark-border2 focus:border-accent"
                  }`}
                />
                {fieldErrors.phone && (
                  <p className="m-0 mt-1.5 text-[12.5px] text-[#E2836B]">{fieldErrors.phone}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-bg text-ink border-0 rounded-full py-3.5 text-[15.5px] font-bold font-body cursor-pointer mt-1 hover:bg-accent hover:text-accent-ink transition-colors disabled:opacity-70 disabled:cursor-wait"
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

              <p className="mt-1 mb-0 text-[13px] text-muted leading-[1.5]">
                We&apos;ll call back the same working day. No sales sequence, no
                newsletter.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
