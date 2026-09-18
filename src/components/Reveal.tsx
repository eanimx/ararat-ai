"use client";

import { Children, CSSProperties } from "react";
import { useInView, usePrefersReducedMotion } from "@/lib/motion";

function revealStyle(
  inView: boolean,
  reduced: boolean,
  { delay, y, duration }: { delay: number; y: number; duration: number }
): CSSProperties | undefined {
  if (reduced) return undefined;
  return {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "ease-out",
    transitionDelay: inView ? `${delay}ms` : "0ms",
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : `translateY(${y}px)`,
  };
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
  duration = 500,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();

  return (
    <div ref={ref} className={className} style={revealStyle(inView, reduced, { delay, y, duration })}>
      {children}
    </div>
  );
}

export function FlipStagger({
  children,
  className = "",
  itemClassName = "",
  step = 120,
  duration = 600,
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  step?: number;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className} style={reduced ? undefined : { perspective: "1000px" }}>
      {items.map((child, i) => {
        const delay = `${i * step}ms`;
        const style: CSSProperties = reduced
          ? {
              transitionProperty: "opacity",
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: "ease-out",
              transitionDelay: inView ? delay : "0ms",
              opacity: inView ? 1 : 0,
            }
          : {
              transformStyle: "preserve-3d",
              transitionProperty: "opacity, transform",
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: "ease-out",
              transitionDelay: inView ? delay : "0ms",
              opacity: inView ? 1 : 0,
              transform: inView ? "rotateX(0deg)" : "rotateX(-90deg)",
            };
        return (
          <div key={i} className={itemClassName} style={style}>
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function DirectionalStagger({
  children,
  className = "",
  itemClassName = "",
  directions,
  distance = 40,
  duration = 650,
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  directions: ("left" | "right" | "bottom")[];
  distance?: number;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => {
        const dir = directions[i] ?? "bottom";
        const from =
          dir === "left"
            ? `translateX(-${distance}px)`
            : dir === "right"
              ? `translateX(${distance}px)`
              : `translateY(${distance}px)`;
        const style: CSSProperties | undefined = reduced
          ? undefined
          : {
              transitionProperty: "opacity, transform",
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: "ease-out",
              opacity: inView ? 1 : 0,
              transform: inView ? "translate(0, 0)" : from,
            };
        return (
          <div key={i} className={itemClassName} style={style}>
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function RevealStagger({
  children,
  className = "",
  itemClassName = "",
  step = 80,
  y = 16,
  duration = 500,
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  step?: number;
  y?: number;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className={itemClassName}
          style={revealStyle(inView, reduced, { delay: i * step, y, duration })}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
