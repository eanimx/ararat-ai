import Reveal, { FlipStagger } from "./Reveal";

const SERVICES = [
  {
    title: "AI Voice Receptionist",
    body: "Picks up on the second ring, day or night. Quotes your prices, checks your calendar, and books the appointment before the caller hangs up.",
  },
  {
    title: "AI Chat Assistant",
    body: "Answers the visitor on your site the moment they ask, using the same information as the phone agent. Turns a browsing tab into a booked appointment.",
  },
  {
    title: "Workflow Automation",
    body: "Bookings land in your calendar. Reminders go out on their own. Every call reaches your inbox as a short summary with the name, the number, and what they wanted.",
  },
  {
    title: "Website Design & Setup",
    body: "No site, or one you'd rather not send people to? We build a clean one with the assistant and booking already wired in.",
  },
];

function PhoneMockup() {
  return (
    <div className="justify-self-center border border-accent rounded-[34px] p-2 bg-accent/7 w-full max-w-[290px]">
      <div className="bg-dark-bg rounded-[28px] px-3.5 pt-3.5 pb-5.5 text-bg">
        <div className="flex items-center justify-between px-2.5 pb-3.5 pt-1 font-mono-ui text-[11px] text-muted-dark tracking-[0.04em]">
          <span>8:42 PM</span>
          <span className="flex items-center gap-1.5">
            <span className="w-[5px] h-[5px] rounded-full bg-accent block" />
            LTE
          </span>
        </div>
        <div className="text-center px-3 pt-5.5 pb-6.5">
          <div className="font-mono-ui text-[10.5px] tracking-[0.14em] text-bg mb-3.5">
            ANSWERED BY AGENT
          </div>
          <div className="font-display text-[25px] font-semibold tracking-[-0.02em] mb-1.5">
            +1 (415) 208-4471
          </div>
          <div className="text-[13.5px] text-muted-dark">Incoming · new caller</div>
          <div className="font-mono-ui text-[13px] text-bg mt-5">01:14</div>
        </div>
        <div className="bg-dark-panel rounded-xl px-4 py-3.5 text-[13.5px] leading-[1.55] text-[#C9CCD1]">
          &ldquo;Do you have anything Saturday morning for a brake inspection?&rdquo;
        </div>
        <div className="flex items-center justify-between mt-4.5 px-1.5">
          <div className="flex items-center gap-2 text-[12.5px] text-bg font-semibold">
            <span className="w-3.5 h-3.5 rounded-[4px] bg-accent block shrink-0" />
            Booking in progress
          </div>
          <div className="text-[12px] text-muted-dark">Sat 9:15</div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-[1180px] mx-auto px-5 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-24 scroll-mt-[72px]">
      <Reveal className="mb-8 sm:mb-10">
        <span className="block font-mono-ui text-[12px] tracking-[0.12em] text-accent mb-3">
          01 / SERVICES
        </span>
        <h2 className="font-display text-[30px] sm:text-[36px] lg:text-[42px] tracking-[-0.03em] font-bold m-0">
          What we set up for you.
        </h2>
      </Reveal>

      <FlipStagger className="flex flex-col gap-3" step={120}>
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="bg-bg-alt rounded-2xl grid grid-cols-1 sm:grid-cols-[0.3fr_0.7fr] gap-3 sm:gap-8 items-baseline px-6 sm:px-8 py-6 sm:py-7"
          >
            <h3 className="font-display text-[20px] sm:text-[24px] tracking-[-0.02em] font-semibold m-0">
              {s.title}
            </h3>
            <p className="m-0 text-[15.5px] sm:text-[16px] leading-[1.65] text-muted2">
              {s.body}
            </p>
          </div>
        ))}
      </FlipStagger>

      <Reveal className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-10 sm:gap-14 items-center">
        <div>
          <div className="font-mono-ui text-[11.5px] tracking-[0.12em] text-accent mb-4">
            ON YOUR LINE
          </div>
          <h3 className="font-display text-[26px] sm:text-[30px] font-semibold tracking-[-0.025em] mb-3.5 leading-[1.15]">
            The call gets picked up on the second ring.
          </h3>
          <p className="m-0 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-muted2 max-w-[30em]">
            When you&apos;re mid-job or closed, the agent answers on your existing
            number. You see who called and what they needed the moment the call ends.
          </p>
        </div>
        <PhoneMockup />
      </Reveal>
    </section>
  );
}
