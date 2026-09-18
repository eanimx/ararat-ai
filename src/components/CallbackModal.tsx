"use client";

import { useEffect, useState } from "react";
import CallbackForm from "./CallbackForm";

export default function CallbackModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  // Two-phase mount so the transform/opacity change is a transition, not an
  // instant jump: render hidden, then flip to visible on the next frame.
  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => setEntered(true));
    return () => {
      cancelAnimationFrame(id);
      setEntered(false);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/60 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Request a callback"
    >
      <div
        className="relative bg-dark-card border border-dark-border text-bg w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-[400px] sm:rounded-2xl overflow-y-auto shadow-[0_30px_80px_-20px_rgba(16,20,24,0.45)] p-5 sm:p-6"
        style={{
          transitionProperty: "opacity, transform",
          transitionDuration: "250ms",
          transitionTimingFunction: "ease-out",
          opacity: entered ? 1 : 0,
          transform: entered ? "scale(1) translateY(0)" : "scale(0.96) translateY(10px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-ink hover:bg-dark-border2 text-bg transition-colors"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="pt-8 sm:pt-0.5">
          <CallbackForm />
        </div>
      </div>
    </div>
  );
}
