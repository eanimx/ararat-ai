import Reveal from "./Reveal";
import CallbackForm from "./CallbackForm";
import BookSetupCallButton from "./BookSetupCallButton";

export default function DemoSection() {
  return (
    <section id="demo" className="bg-dark-bg text-bg scroll-mt-[72px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-24 sm:py-40 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 sm:gap-18 items-center">
        <div>
          <Reveal>
            <h2 className="font-display text-[34px] sm:text-[42px] lg:text-[54px] leading-[1.05] tracking-[-0.035em] font-bold mb-5.5">
              Not ready to pick a time? We&apos;ll call you.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="m-0 text-[16px] sm:text-[18px] leading-[1.6] text-muted-dark max-w-[32em]">
              Tell us a little about your business and we&apos;ll call you back at a
              time that works — no calendar to check, no commitment yet. If you&apos;d
              rather pick the time yourself,{" "}
              <BookSetupCallButton className="underline decoration-dotted underline-offset-2 hover:text-accent transition-colors">
                book a call
              </BookSetupCallButton>{" "}
              instead.
            </p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className="bg-dark-card border border-dark-border rounded-2xl p-5 sm:p-6 max-w-[400px] mx-auto lg:mx-0">
            <CallbackForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
