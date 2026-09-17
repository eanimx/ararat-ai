"use client";

import { createContext, useCallback, useContext, useState } from "react";
import CallbackModal from "./CallbackModal";

const CallbackModalContext = createContext<{ openModal: () => void } | null>(null);

export function useCallbackModal() {
  const ctx = useContext(CallbackModalContext);
  if (!ctx) {
    throw new Error("useCallbackModal must be used within a CallbackModalProvider");
  }
  return ctx;
}

export default function CallbackModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <CallbackModalContext.Provider value={{ openModal }}>
      {children}
      <CallbackModal open={open} onClose={closeModal} />
    </CallbackModalContext.Provider>
  );
}
