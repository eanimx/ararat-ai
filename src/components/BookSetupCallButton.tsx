"use client";

import { useBookingModal } from "./BookingModalProvider";

export default function BookSetupCallButton({
  className,
  children,
  onBeforeOpen,
}: {
  className?: string;
  children: React.ReactNode;
  onBeforeOpen?: () => void;
}) {
  const { openModal } = useBookingModal();

  return (
    <button
      type="button"
      onClick={() => {
        onBeforeOpen?.();
        openModal();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
