import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-muted-dark border-t border-dark-border">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-[14px] text-center sm:text-left">
        <div className="flex items-center gap-2.5 text-bg font-display font-bold text-[16px] tracking-[-0.02em]">
          <span className="w-2 h-2 bg-accent rounded-[2px] block" />
          {siteConfig.businessName}
        </div>
        <div>AI voice and chat agents for small business.</div>
        <div>{siteConfig.contactEmail}</div>
      </div>
    </footer>
  );
}
