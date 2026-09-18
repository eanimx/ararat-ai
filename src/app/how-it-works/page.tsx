import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal, { RevealStagger } from "@/components/Reveal";
import BookSetupCallButton from "@/components/BookSetupCallButton";
import BackToHomeLink from "@/components/BackToHomeLink";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `How it works — ${siteConfig.businessName}`,
  description:
    "What we ask on the setup call, how the agent gets built and tested, and how it goes live on your existing number.",
};

const STEPS = [
  {
    n: "01",
    title: "The setup call",
    body: "Twenty minutes, over the phone or video. We ask about your services, your prices, your hours, and your booking rules — plus anything the agent should never promise. That's everything we need to set it up around how your business actually runs.",
  },
  {
    n: "02",
    title: "We build and test it",
    body: "We train the agent on what you told us: your services, your prices, your calendar, your booking rules. Before anything goes live, you listen to a test call and tell us what to change. Nothing reaches a real caller until you've heard it and approved it.",
  },
  {
    n: "03",
    title: "It goes live on your existing number",
    body: "You keep your number — nothing to port, no new line, no reprinting your van or your cards. Calls you don't answer — busy, closed, after hours, whatever you choose — get forwarded to the agent instead of going to voicemail. Want it off? Dial a code and calls ring straight back to you, any time.",
  },
];

const AFTER = [
  {
    title: "Changes whenever you need",
    body: "Hours change, prices change, a service gets added. Tell us and it's updated in the agent the same day.",
    bg: "#C8DEB8",
  },
  {
    title: "One email a day",
    body: "Who called, what they wanted, and whether it was booked — a short summary every morning, nothing to log into.",
    bg: "#BBDAF2",
  },
  {
    title: "Month to month",
    body: "No annual contract, no lock-in. Cancel or pause whenever you want and calls ring straight back to you.",
    bg: "#F1D9B0",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="w-full bg-bg overflow-x-clip">
      <Header />

      <section className="max-w-[1180px] mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-10 sm:pb-14">
        <BackToHomeLink className="mb-6" />
        <Reveal>
          <h1 className="font-display text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.08] tracking-[-0.035em] font-bold mb-5 max-w-[18em]">
            From first call to answered calls.
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[16px] sm:text-[18px] leading-[1.65] text-muted2 max-w-[38em]">
            We learn how your business runs on one short call, then build and test the
            agent before it answers a single real caller.
          </p>
        </Reveal>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        <RevealStagger className="flex flex-col" step={100}>
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="border-t border-border-alt py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[0.22fr_0.78fr] gap-4 sm:gap-10"
            >
              <div>
                <div className="font-mono-ui text-[12px] tracking-[0.12em] text-accent mb-3">
                  STEP {s.n}
                </div>
                <div className="font-display text-[44px] sm:text-[56px] font-bold text-border-alt2 leading-none">
                  {s.n}
                </div>
              </div>
              <div>
                <h2 className="font-display text-[26px] sm:text-[32px] font-semibold tracking-[-0.02em] mb-3.5">
                  {s.title}
                </h2>
                <p className="m-0 text-[16px] sm:text-[17px] leading-[1.7] text-muted2 max-w-[42em]">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </RevealStagger>
        <div className="border-t border-border-alt" />
      </section>

      <section className="bg-bg-alt border-t border-b border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 sm:py-32">
          <Reveal className="mb-12 sm:mb-14">
            <span className="block font-mono-ui text-[12px] tracking-[0.12em] text-accent mb-3">
              AFTER SETUP
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] tracking-[-0.03em] font-bold m-0">
              Once it&apos;s live
            </h2>
          </Reveal>
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10" step={80}>
            {AFTER.map((a) => (
              <div
                key={a.title}
                style={{ backgroundColor: a.bg }}
                className="h-full rounded-xl p-9 sm:p-10 shadow-[0_16px_32px_-20px_rgba(16,20,24,0.25)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_40px_-18px_rgba(16,20,24,0.3)]"
              >
                <div className="font-display text-[20px] sm:text-[21px] font-semibold leading-[1.35] mb-3.5 tracking-[-0.015em] text-ink">
                  {a.title}
                </div>
                <p className="m-0 text-[15.5px] leading-[1.65] text-ink/70">{a.body}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-dark-bg text-bg">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 sm:py-32 text-center">
          <Reveal className="flex flex-col items-center">
            <h2 className="font-display text-[32px] sm:text-[42px] leading-[1.08] tracking-[-0.03em] font-bold mb-4 max-w-[18em]">
              Ready to see it running on your number?
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-muted-dark max-w-[30em] mb-8">
              Book a twenty-minute setup call and we&apos;ll get started.
            </p>
            <BookSetupCallButton className="bg-accent text-accent-ink text-[15.5px] font-bold px-6.5 py-4 rounded-full hover:bg-bg hover:text-ink transition-colors">
              Book a setup call
            </BookSetupCallButton>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
