import Link from "next/link";

export default function BackToHomeLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center font-mono-ui text-[12px] tracking-[0.12em] text-accent border border-accent/30 rounded-full px-3 py-1.5 hover:bg-accent/10 hover:border-accent/50 transition-colors ${className}`}
    >
      ← BACK TO HOME
    </Link>
  );
}
