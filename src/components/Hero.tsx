import Link from "next/link";
import {
  BotIcon,
  CalendarIcon,
  ChatIcon,
  HeroBadge,
  PhoneIcon,
  StorefrontIcon,
} from "./HeroIcons";
import Reveal from "./Reveal";
import TranscriptPanel from "./TranscriptPanel";

export default function Hero() {
  return (
    <section id="top" className="max-w-[1180px] mx-auto px-5 sm:px-6 pt-8 sm:pt-14 pb-24 sm:pb-36">
      <div className="max-w-[1140px] mx-auto text-center">
        <Reveal>
          <h1 className="font-display text-[38px] sm:text-[50px] lg:text-[66px] leading-[1.05] tracking-[-0.03em] font-bold mb-7">
            Your{" "}
            <HeroBadge bg="bg-[#FBE7C6]">
              <StorefrontIcon className="w-full h-full text-[#B9791F]" />
            </HeroBadge>{" "}
            business and its AI{" "}
            <HeroBadge bg="bg-accent/15" innerSize="72%">
              <BotIcon className="w-full h-full text-[#00509d]" strokeWidth={1.1} />
            </HeroBadge>{" "}
            team,
            <br />
            in one{" "}
            <span className="inline-flex items-center align-middle">
              <HeroBadge bg="bg-accent/15" size="small">
                <PhoneIcon className="w-full h-full text-accent" />
              </HeroBadge>
              <HeroBadge bg="bg-[#DCEAFB]" size="small" className="-ml-[0.16em]">
                <ChatIcon className="w-full h-full text-[#3B82C4]" />
              </HeroBadge>
              <HeroBadge bg="bg-[#FBE7C6]" size="small" className="-ml-[0.16em]">
                <CalendarIcon className="w-full h-full text-[#B9791F]" />
              </HeroBadge>
            </span>{" "}
            place
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[17px] sm:text-[19.5px] leading-[1.6] text-muted2 max-w-[46em] mx-auto mb-9 text-pretty">
            A voice agent answers your phone and a chat agent answers your website —
            both handle questions, book appointments, and follow up while you&apos;re
            working. Your number stays the same.
          </p>
        </Reveal>
        <div className="flex justify-center mb-3">
          <Link
            href="/how-it-works"
            className="bg-accent text-accent-ink text-[14.5px] font-bold px-7 py-3 rounded-full hover:bg-dark-bg hover:text-bg transition-colors"
          >
            See how it works
          </Link>
        </div>
        <p className="text-[14px] text-muted m-0">
          Twenty minutes. No obligation. Setup in under a week.
        </p>
      </div>

      <TranscriptPanel />
      <p className="text-center text-[13.5px] text-muted mt-4">
        A real call handled after hours — question answered, appointment booked, no
        callback needed.
      </p>
    </section>
  );
}
