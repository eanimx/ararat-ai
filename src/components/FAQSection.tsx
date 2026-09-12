"use client";

import { useState } from "react";
import Reveal, { RevealStagger } from "./Reveal";
import BackToHomeLink from "./BackToHomeLink";

const FAQS = [
  {
    q: "Will callers know it’s AI?",
    a: "Most people hear a clear, polite voice that answers their question and books them in. The agent never pretends to be a person — if someone asks, it says it’s the business’s assistant and offers to pass them to you.",
  },
  {
    q: "What if the agent doesn’t know an answer?",
    a: "It says so, takes the caller’s name, number and question, and emails it to you straight away — rather than guessing. Anything it gets asked twice, we add to what it knows.",
  },
  {
    q: "Do I have to change my number?",
    a: "No. Your existing number stays exactly as it is. Calls are forwarded to the agent only in the situations you choose — after hours, when you’re on another call, or always.",
  },
  {
    q: "Can I turn it off whenever I want?",
    a: "Yes. One message and the agent is paused; calls ring straight to your phone again. The subscription is month to month, with no notice period.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg-alt">
      <div className="max-w-[900px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <BackToHomeLink className="mb-6" />
        <Reveal>
          <h2 className="font-display text-[30px] sm:text-[36px] lg:text-[42px] tracking-[-0.03em] font-bold mb-10 sm:mb-12">
            Questions people ask first.
          </h2>
        </Reveal>
        <RevealStagger className="flex flex-col" step={80}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-t border-border-faq">
                <button
                  type="button"
                  onClick={() => setOpen((s) => (s === i ? null : i))}
                  className="w-full bg-transparent border-0 py-7 flex items-center justify-between gap-6 cursor-pointer text-left font-display text-[18px] sm:text-[22px] font-semibold tracking-[-0.015em] text-ink hover:text-accent transition-colors"
                >
                  {item.q}
                  <span className="font-mono-ui text-[20px] text-muted shrink-0">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-[-6px] mb-7.5 text-[16px] sm:text-[17px] leading-[1.65] text-muted2 max-w-[46em]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealStagger>
        <div className="border-t border-border-faq" />
      </div>
    </section>
  );
}
