"use client";

import { useCallbackModal } from "./CallbackModalProvider";

export default function RequestCallbackButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { openModal } = useCallbackModal();

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
