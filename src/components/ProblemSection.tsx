import Reveal, { RevealStagger } from "./Reveal";

const REASONS = [
  {
    title: "A missed call rarely calls back.",
    body: "People looking for a plumber, a dentist or a table on Friday move down the list until someone picks up.",
  },
  {
    title: "The calls come when you're working.",
    body: "Mid-job, mid-appointment, after closing, on the weekend. That's exactly when the phone can't be answered.",
  },
  {
    title: "A receptionist costs more than the fix.",
    body: "A full-time hire is a salary. This is a monthly subscription that answers every hour of the week.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-dark-bg text-bg">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-20 sm:py-36">
        <Reveal>
          <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.06] tracking-[-0.035em] font-bold mb-12 sm:mb-14 max-w-[24em]">
            Every missed call is a customer calling someone else.
          </h2>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14" step={80}>
          {REASONS.map((r) => (
            <div key={r.title}>
              <div className="font-display text-[22px] font-semibold leading-[1.3] mb-3 tracking-[-0.015em]">
                {r.title}
              </div>
              <p className="m-0 text-[15.5px] leading-[1.6] text-muted-dark">{r.body}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
