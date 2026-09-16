import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import Script from "next/script";
import BookingModalProvider from "@/components/BookingModalProvider";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.businessName} — AI receptionist for small business`,
  description:
    "An AI receptionist for your phone and an AI assistant for your website. Both answer questions, book appointments, and follow up while you're busy working.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable}`}>
      <body className="bg-bg text-ink font-body antialiased overflow-x-clip">
        <Script src="/scroll-reset.js" strategy="beforeInteractive" />
        <BookingModalProvider>{children}</BookingModalProvider>
        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          strategy="afterInteractive"
        />
        <elevenlabs-convai agent-id="agent_1201m2bejtmefpttgn8044d82zmx" />
      </body>
    </html>
  );
}
