"use client";

import { createContext, useCallback, useContext, useState } from "react";
import BookingModal from "./BookingModal";

const BookingModalContext = createContext<{ openModal: () => void } | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}

export default function BookingModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ openModal }}>
      {children}
      <BookingModal open={open} onClose={closeModal} />
    </BookingModalContext.Provider>
  );
}
