"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookSetupCallButton from "./BookSetupCallButton";
import { siteConfig } from "@/lib/config";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

const CTA_CLASSNAME =
  "bg-accent text-accent-ink text-[14.5px] font-semibold px-5 py-3 rounded-full whitespace-nowrap hover:bg-dark-bg hover:text-bg transition-colors";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/92 backdrop-blur-md backdrop-saturate-150 border-b transition-colors duration-200 ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between gap-8">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center shrink-0 cursor-pointer opacity-100 hover:opacity-75 transition-opacity"
          aria-label={siteConfig.businessName}
        >
          <Image
            src="/ararat-logo.png"
            alt={siteConfig.businessName}
            width={1363}
            height={291}
            priority
            className="h-8 sm:h-9 w-auto"
          />
        </Link>

        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8 text-[14.5px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <BookSetupCallButton className={`hidden md:inline-block ${CTA_CLASSNAME}`}>
              Book a setup call
            </BookSetupCallButton>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 -mr-1"
            >
              <span
                className={`block h-[1.5px] w-5 bg-ink transition-transform duration-200 ${
                  open ? "translate-y-[3.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-ink transition-transform duration-200 ${
                  open ? "-translate-y-[3.25px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-ink hover:text-accent transition-colors py-2.5"
            >
              {link.label}
            </Link>
          ))}
          <BookSetupCallButton
            onBeforeOpen={() => setOpen(false)}
            className={`mt-2 text-center ${CTA_CLASSNAME}`}
          >
            Book a setup call
          </BookSetupCallButton>
        </div>
      )}
    </header>
  );
}
