"use client";

import { useEffect, useState } from "react";
import { useInView, usePrefersReducedMotion } from "@/lib/motion";
import { siteConfig } from "@/lib/config";

const AGENT_LABEL = `${siteConfig.businessName.toUpperCase()} AGENT`;

const TRANSCRIPT = [
  {
    from: "caller",
    text: "Hi — do you have anything Saturday morning for a brake inspection?",
  },
  {
    from: "agent",
    text: "We do — 9:15 or 11:00 on Saturday. A brake inspection takes about 40 minutes and it's $45, credited back if you go ahead with the work.",
  },
  { from: "caller", text: "9:15 works." },
  {
    from: "agent",
    text: "Booked for Saturday 9:15. I'll text you a confirmation and a reminder the night before.",
  },
] as const;

const STEP_MS = 600;
const TYPING_MS = 350;

function TypingDots() {
  return (
    <div className="inline-flex items-center gap-1 bg-accent rounded-[10px_10px_3px_10px] px-3.5 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-[6px] h-[6px] rounded-full bg-accent-ink/60 animate-[typingDot_1.1s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export default function TranscriptPanel() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reduced = usePrefersReducedMotion();
  const [revealed, setRevealed] = useState(reduced ? TRANSCRIPT.length : 0);
  const [settled, setSettled] = useState<Set<number>>(
    () => new Set(reduced ? TRANSCRIPT.map((_, i) => i) : [])
  );
  const [typingAt, setTypingAt] = useState<number | null>(null);
  const [footerVisible, setFooterVisible] = useState(reduced);

  // Play the sequence once the panel scrolls into view.
  useEffect(() => {
    if (reduced || !inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];

    TRANSCRIPT.forEach((msg, i) => {
      const revealAt = i * STEP_MS;
      if (msg.from === "agent") {
        timers.push(
          setTimeout(() => setTypingAt(i), Math.max(revealAt - TYPING_MS, 0))
        );
      }
      timers.push(
        setTimeout(() => {
          setRevealed((c) => Math.max(c, i + 1));
          setTypingAt((t) => (t === i ? null : t));
        }, revealAt)
      );
    });

    timers.push(
      setTimeout(() => setFooterVisible(true), TRANSCRIPT.length * STEP_MS)
    );

    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  // Once a message mounts, flip it to its settled (visible) style on the next
  // tick so the opacity/transform change is a transition, not an instant jump.
  useEffect(() => {
    if (reduced) return;
    const idx = revealed - 1;
    if (idx < 0 || settled.has(idx)) return;
    const t = setTimeout(() => {
      setSettled((prev) => new Set(prev).add(idx));
    }, 20);
    return () => clearTimeout(t);
  }, [revealed, reduced, settled]);

  return (
    <div
      ref={ref}
      className="mt-12 sm:mt-24 mx-auto max-w-[1100px] border-[8px] sm:border-[10px] border-[#9eb7e5] rounded-[28px] bg-[#E9ECFA]"
    >
      <div className="transition-all duration-200 ease-out bg-bg rounded-[28px] px-4.5 py-6.5 sm:px-8 sm:pt-7 sm:pb-8 shadow-[0_18px_40px_-28px_rgba(16,20,24,0.16)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,20,24,0.2)]">
        <div className="flex items-center justify-between border-b border-border-alt pb-3.5 mb-5 gap-3">
          <div className="flex items-center gap-2.5 text-ink font-display text-[12.5px] sm:text-[13.5px] font-semibold">
            <span className="w-[7px] h-[7px] rounded-full bg-accent block shrink-0" />
            Incoming call · 8:42 PM
          </div>
          <div className="font-mono-ui text-[10px] sm:text-[11px] text-muted tracking-[0.04em] whitespace-nowrap">
            LIVE TRANSCRIPT
          </div>
        </div>

        <div className="flex flex-col gap-3.5 min-h-[205px] sm:min-h-[176px]">
          {TRANSCRIPT.map((line, i) => {
            if (i >= revealed) return null;
            const isSettled = settled.has(i);
            return (
              <div
                key={i}
                className={`max-w-[86%] sm:max-w-[82%] ${
                  line.from === "agent" ? "self-end" : "self-start"
                }`}
                style={
                  reduced
                    ? undefined
                    : {
                        transitionProperty: "opacity, transform",
                        transitionDuration: "500ms",
                        transitionTimingFunction: "ease-out",
                        opacity: isSettled ? 1 : 0,
                        transform: isSettled ? "translateY(0)" : "translateY(12px)",
                      }
                }
              >
                <div
                  className={`font-mono-ui text-[10px] tracking-[0.1em] mb-1.5 ${
                    line.from === "agent" ? "text-accent text-right" : "text-muted"
                  }`}
                >
                  {line.from === "agent" ? AGENT_LABEL : "CALLER"}
                </div>
                <div
                  className={`text-[14px] leading-[1.5] px-3.5 py-3 ${
                    line.from === "agent"
                      ? "bg-accent text-accent-ink rounded-[10px_10px_3px_10px]"
                      : "bg-bg-alt text-ink border border-border-alt rounded-[10px_10px_10px_3px]"
                  }`}
                >
                  {line.text}
                </div>
              </div>
            );
          })}
          {typingAt !== null && (
            <div className="max-w-[86%] sm:max-w-[82%] self-end">
              <div className="font-mono-ui text-[10px] tracking-[0.1em] mb-1.5 text-accent text-right">
                {AGENT_LABEL}
              </div>
              <TypingDots />
            </div>
          )}
        </div>

        <div
          className="mt-5.5 border-t border-border-alt pt-4 flex items-center justify-between gap-4 flex-wrap"
          style={
            reduced
              ? undefined
              : {
                  transitionProperty: "opacity, transform",
                  transitionDuration: "500ms",
                  transitionTimingFunction: "ease-out",
                  opacity: footerVisible ? 1 : 0,
                  transform: footerVisible ? "translateY(0)" : "translateY(12px)",
                }
          }
        >
          <div className="flex items-center gap-2.5 text-ink text-[13px] font-semibold">
            <span className="w-4 h-4 rounded-[4px] bg-accent block shrink-0" />
            Appointment added to calendar
          </div>
          <div className="text-[12px] text-muted">Summary emailed to owner</div>
        </div>
      </div>
    </div>
  );
}
