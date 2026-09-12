import Reveal, { RevealStagger } from "./Reveal";

const SETUP_FEATURES = [
  "Voice agent built around your services and prices",
  "Website assistant installed and trained",
  "Calendar, reminders and email summaries connected",
  "Test calls with you before going live",
];

const SUB_FEATURES = [
  "Calls and chats answered 24/7",
  "Bookings, reminders and summaries included",
  "Changes to hours, prices or answers whenever you need",
  "Month to month. Cancel or pause any time",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="border-t border-accent/15 scroll-mt-[72px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 sm:py-36">
        <Reveal className="mb-5">
          <span className="block font-mono-ui text-[12px] tracking-[0.12em] text-accent mb-3">
            05 / PRICING
          </span>
          <h2 className="font-display text-[30px] sm:text-[36px] lg:text-[42px] tracking-[-0.03em] font-bold m-0">
            One setup fee. One monthly price.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[16px] sm:text-[17px] text-muted2 mb-12 sm:mb-13 max-w-[44em] leading-[1.6]">
            No tiers to compare, no per-minute math, no annual lock-in.
          </p>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch" step={80}>
          <div className="border border-border-alt rounded-2xl p-8 sm:p-10 bg-bg flex flex-col">
            <div className="font-mono-ui text-[11.5px] tracking-[0.12em] text-muted mb-6">
              ONE-TIME SETUP
            </div>
            <div className="flex items-baseline gap-2 mb-6.5">
              <span className="font-display text-[48px] sm:text-[60px] font-bold tracking-[-0.04em] leading-none">
                $600
              </span>
              <span className="text-[16px] text-muted">once</span>
            </div>
            <div className="flex flex-col gap-3 text-[16px] text-muted2 leading-[1.5]">
              {SETUP_FEATURES.map((f) => (
                <div key={f} className="flex gap-3">
                  <span className="text-accent font-bold">—</span>
                  {f}
                </div>
              ))}
            </div>
            <div className="mt-auto pt-7.5">
              <div className="border-t border-border-alt pt-5.5 text-[15px] text-muted2 leading-[1.6]">
                Paid once, after you&apos;ve heard the agent handle a test call and
                approved it.
              </div>
            </div>
          </div>

          <div className="border border-dark-bg rounded-2xl p-8 sm:p-10 bg-dark-bg text-bg flex flex-col">
            <div className="font-mono-ui text-[11.5px] tracking-[0.12em] text-bg mb-6">
              MONTHLY SUBSCRIPTION
            </div>
            <div className="flex items-baseline gap-2 mb-6.5">
              <span className="font-display text-[48px] sm:text-[60px] font-bold tracking-[-0.04em] leading-none">
                $290
              </span>
              <span className="text-[16px] text-muted-dark">/ month</span>
            </div>
            <div className="flex flex-col gap-3 text-[16px] text-[#C9CCD1] leading-[1.5] mb-7.5">
              {SUB_FEATURES.map((f) => (
                <div key={f} className="flex gap-3">
                  <span className="text-accent font-bold">—</span>
                  {f}
                </div>
              ))}
            </div>
            <a
              href="#demo"
              className="mt-auto self-start inline-block bg-accent text-accent-ink text-[15.5px] font-bold px-6 py-3.5 rounded-full hover:bg-bg hover:text-ink transition-colors"
            >
              Get a free demo
            </a>
          </div>
        </RevealStagger>
        <p className="text-[14.5px] text-muted mt-5.5">
          Website design and setup is quoted separately, once we&apos;ve seen what you
          need.
        </p>
      </div>
    </section>
  );
}
