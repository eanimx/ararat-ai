import Reveal, { RevealStagger } from "./Reveal";
import { siteConfig } from "@/lib/config";

const STEPS = [
  {
    n: "01",
    title: "A quick call about your business",
    body: "Twenty minutes. What you do, what you charge, when you're open, what the agent should never promise.",
    bg: "#C8DEB8",
  },
  {
    n: "02",
    title: "We set everything up",
    body: "Voice agent, website assistant, calendar and reminders. You listen to a test call and tell us what to change.",
    bg: "#BBDAF2",
  },
  {
    n: "03",
    title: "Calls get answered from day one",
    body: "Your number stays the same. Bookings land in your calendar, summaries land in your inbox.",
    bg: "#F1D9B0",
  },
];

const CALLS = [
  {
    name: "Marcus Reed",
    number: "(415) 208-4471",
    want: "Brake inspection, Saturday morning",
    result: "Booked",
  },
  {
    name: "Dana Oyelaran",
    number: "(628) 771-3390",
    want: "Price for a cleaning, new patient",
    result: "Booked",
  },
  {
    name: "Ellen Park",
    number: "(510) 442-1187",
    want: "Asked about a warranty on last year's work",
    result: "Callback",
  },
  {
    name: "Tomas Ferreira",
    number: "(925) 300-6642",
    want: "Oil change, walk-in today",
    result: "Booked",
  },
];

function EmailMockup() {
  return (
    <div className="border border-accent rounded-2xl p-2 bg-accent/8">
      <div className="bg-bg text-ink rounded-xl overflow-hidden">
        <div className="border-b border-border-alt2 px-4.5 sm:px-6 py-4.5 flex items-center justify-between gap-5 flex-wrap">
          <div>
            <div className="font-display text-[16px] sm:text-[17px] font-semibold tracking-[-0.015em]">
              Yesterday&apos;s calls — 4 answered, 3 booked
            </div>
            <div className="text-[13px] text-muted mt-1">
              {siteConfig.businessName} &lt;{siteConfig.summaryEmail}&gt; · 7:02 AM
            </div>
          </div>
          <div className="font-mono-ui text-[10.5px] tracking-[0.12em] text-accent border border-accent rounded-[4px] px-2 py-1.5 whitespace-nowrap">
            DAILY SUMMARY
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-[1.1fr_0.9fr_1.6fr_0.7fr] gap-4 px-6 py-3.5 border-b border-table-row2 font-mono-ui text-[10.5px] tracking-[0.1em] text-muted">
          <div>CALLER</div>
          <div>NUMBER</div>
          <div>WHAT THEY WANTED</div>
          <div>RESULT</div>
        </div>
        {CALLS.map((c, i) => (
          <div
            key={c.name}
            className={`grid grid-cols-2 sm:grid-cols-[1.1fr_0.9fr_1.6fr_0.7fr] gap-2 sm:gap-4 px-4.5 sm:px-6 py-4 text-[13.5px] sm:text-[14.5px] items-center ${
              i < CALLS.length - 1 ? "border-b border-table-row" : ""
            }`}
          >
            <div className="font-semibold">{c.name}</div>
            <div className="text-muted2">{c.number}</div>
            <div className="text-muted2 col-span-2 sm:col-span-1">{c.want}</div>
            <div
              className={`font-bold ${
                c.result === "Booked" ? "text-accent" : "text-muted font-semibold"
              }`}
            >
              {c.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how" className="bg-bg text-ink scroll-mt-[72px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 sm:py-36">
        <Reveal className="mb-12 sm:mb-15">
          <span className="block font-mono-ui text-[12px] tracking-[0.12em] text-accent mb-3">
            04 / HOW IT WORKS
          </span>
          <h2 className="font-display text-[30px] sm:text-[36px] lg:text-[42px] tracking-[-0.03em] font-bold m-0">
            Three steps, one week.
          </h2>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" step={80}>
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{ backgroundColor: s.bg }}
              className="rounded-2xl p-7 sm:p-8 shadow-[0_24px_44px_-24px_rgba(0,0,0,0.55)]"
            >
              <div className="font-display text-[40px] sm:text-[48px] font-bold tracking-[-0.04em] text-ink/20 leading-none mb-4">
                {s.n}
              </div>
              <h3 className="font-display text-[20px] sm:text-[22px] font-semibold mb-2.5 tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <p className="m-0 text-[14.5px] sm:text-[15px] leading-[1.6] text-ink/70">
                {s.body}
              </p>
            </div>
          ))}
        </RevealStagger>

        <Reveal className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr] gap-10 sm:gap-14 items-center">
          <div>
            <div className="font-mono-ui text-[11.5px] tracking-[0.12em] text-accent mb-4">
              IN YOUR INBOX
            </div>
            <h3 className="font-display text-[26px] sm:text-[30px] font-semibold tracking-[-0.025em] mb-3.5 leading-[1.15]">
              Every call, written down for you.
            </h3>
            <p className="m-0 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-muted2">
              One email a day: who called, their number, what they wanted, and
              whether it was booked. Nothing to log into.
            </p>
          </div>
          <EmailMockup />
        </Reveal>
      </div>
    </section>
  );
}
