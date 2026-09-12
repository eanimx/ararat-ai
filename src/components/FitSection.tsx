import Reveal, { RevealStagger } from "./Reveal";

const CASES = [
  {
    tag: "DENTAL CLINIC",
    title: "Books check-ups after hours",
    body: "Explains what a cleaning costs, finds the next open slot, takes the patient's name and number, and flags anything urgent for a same-day callback.",
  },
  {
    tag: "AUTO SHOP",
    title: "Quotes the job while the bay is full",
    body: "Gives the price of an inspection or oil change, checks what fits Saturday, and books the car in with make, model and the reason for the visit.",
  },
  {
    tag: "HAIR SALON",
    title: "Fills the chair between clients",
    body: "Books a cut or color with the right stylist and the right length of appointment, and offers the next opening when a client cancels.",
  },
];

export default function FitSection() {
  return (
    <section className="bg-bg-alt border-t border-border">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 sm:py-36">
        <Reveal className="mb-5">
          <span className="block font-mono-ui text-[12px] tracking-[0.12em] text-accent mb-3">
            02 / FIT
          </span>
          <h2 className="font-display text-[30px] sm:text-[36px] lg:text-[42px] tracking-[-0.03em] font-bold m-0">
            Built for any business that answers a phone.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[16px] sm:text-[17px] text-muted2 max-w-[46em] mb-12 sm:mb-14 leading-[1.6]">
            The agent is set up around how your business actually runs — your services,
            your hours, your prices, your booking rules.
          </p>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10" step={80}>
          {CASES.map((c) => (
            <div
              key={c.tag}
              className="bg-bg border border-border-alt2 rounded-xl p-7 sm:p-8"
            >
              <div className="font-mono-ui text-[11.5px] tracking-[0.12em] text-muted mb-4.5">
                {c.tag}
              </div>
              <div className="font-display text-[20px] sm:text-[21px] font-semibold leading-[1.35] mb-3.5 tracking-[-0.015em]">
                {c.title}
              </div>
              <p className="m-0 text-[15.5px] leading-[1.65] text-muted2">{c.body}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
