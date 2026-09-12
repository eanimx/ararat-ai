"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { siteConfig } from "@/lib/config";

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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

  useEffect(() => {
    if (!open) return;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#1e6091" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/60 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a setup call"
    >
      <div
        className="relative bg-bg w-full h-full sm:h-[min(720px,85vh)] sm:max-w-[820px] sm:rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(16,20,24,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-bg-alt hover:bg-border text-ink transition-colors"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <Cal
          calLink={siteConfig.calLink}
          style={{ width: "100%", height: "100%" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}
