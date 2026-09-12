import Reveal, { RevealStagger } from "./Reveal";

const REASONS = [
  {
    n: "01",
    title: "You keep your current number",
    body: "No new line, no porting, no reprinting your van or your cards. Calls to the number you already have get answered — by you when you can, by the agent when you can't.",
  },
  {
    n: "02",
    title: "Live in under a week",
    body: "One call to learn your services, hours and prices. We build it and test it, and you hear it before it goes live. Most setups are answering calls within a few days.",
  },
  {
    n: "03",
    title: "Clear price, no long contract",
    body: "One setup fee, one monthly subscription, both listed below. Month to month — switch the agent off whenever you want and calls ring straight back to you.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-accent/5 border-t border-accent/15">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 sm:py-36">
        <Reveal className="mb-12 sm:mb-14">
          <span className="block font-mono-ui text-[12px] tracking-[0.12em] text-accent mb-3">
            03 / WHY US
          </span>
          <h2 className="font-display text-[30px] sm:text-[36px] lg:text-[42px] tracking-[-0.03em] font-bold m-0 leading-[1.08]">
            Nothing about your business has to change.
          </h2>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12" step={80}>
          {REASONS.map((r) => (
            <div key={r.n} className="border-t border-border-alt pt-6.5">
              <div className="font-display text-[15px] font-bold text-accent mb-3.5">
                {r.n}
              </div>
              <h3 className="font-display text-[22px] sm:text-[24px] font-semibold mb-2.5 tracking-[-0.02em]">
                {r.title}
              </h3>
              <p className="m-0 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-muted2">
                {r.body}
              </p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
