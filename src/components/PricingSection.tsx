import Reveal from "./Reveal";
import BookSetupCallButton from "./BookSetupCallButton";

const FEATURES = [
  "Voice agent built around your services, prices and booking rules",
  "Website chat assistant installed and trained",
  "Calendar, reminders and daily email summaries connected",
  "Test calls with you before anything goes live",
  "Calls and chats answered 24/7",
  "Fully customizable — tell us about any change and we'll update the agent for you",
  "Month to month — cancel or pause any time",
];

function FigureLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-accent/10 text-accent font-mono-ui text-[11.5px] sm:text-[12px] font-bold tracking-[0.14em] px-3 py-1.5 rounded-full">
      {children}
    </span>
  );
}

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
        <Reveal delay={100} className="mb-12 sm:mb-13">
          <p className="text-[16px] sm:text-[17px] text-muted2 max-w-[44em] leading-[1.6] m-0">
            No tiers to compare, no per-minute math, no annual lock-in.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="max-w-[960px] mx-auto border border-border-alt rounded-2xl bg-bg px-7 sm:px-14 py-7 sm:py-9 shadow-[0_24px_50px_-28px_rgba(16,20,24,0.35)] hover:shadow-[0_32px_64px_-24px_rgba(16,20,24,0.42)] hover:-translate-y-1 transition-all duration-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
              <div className="flex flex-col items-center text-center">
                <FigureLabel>ONE-TIME SETUP</FigureLabel>
                <span className="font-display text-[38px] sm:text-[46px] font-bold tracking-[-0.03em] leading-none mt-3">
                  $149
                </span>
              </div>

              <div
                aria-hidden
                className="font-display text-[22px] sm:text-[26px] font-bold text-muted2 leading-none"
              >
                +
              </div>

              <div className="flex flex-col items-center text-center">
                <FigureLabel>PER MONTH AFTER THAT</FigureLabel>
                <span className="font-display text-[38px] sm:text-[46px] font-bold tracking-[-0.03em] leading-none mt-3">
                  $139
                </span>
              </div>
            </div>

            <div className="border-t border-border-alt mt-5 sm:mt-6 pt-6 sm:pt-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-[15px] sm:text-[15.5px] text-muted2 leading-[1.45]">
                {FEATURES.map((f) => (
                  <div key={f} className="flex gap-3">
                    <span className="text-accent font-bold shrink-0">✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <p className="text-[13.5px] text-muted leading-[1.6] mt-4">
                Includes up to 750 conversation minutes per month. Beyond that,
                additional minutes are billed at $0.25 each.
              </p>
            </div>

            <div className="flex justify-center mt-6 sm:mt-7">
              <BookSetupCallButton className="bg-accent text-accent-ink text-[15.5px] font-bold px-7 py-3.5 rounded-full hover:bg-dark-bg hover:text-bg transition-colors">
                Book a setup call
              </BookSetupCallButton>
            </div>
          </div>
        </Reveal>

        <div className="max-w-[960px] mx-auto text-center mt-6">
          <p className="text-[13.5px] text-muted leading-[1.6] m-0">
            The setup fee is paid once, after you&apos;ve heard the agent handle a
            test call and approved it. The subscription starts the month it goes
            live.
          </p>
          <p className="text-[13.5px] text-muted leading-[1.6] mt-1.5">
            Website design and setup is quoted separately, once we&apos;ve seen what
            you need.
          </p>
        </div>
      </div>
    </section>
  );
}
