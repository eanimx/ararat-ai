import type { Metadata } from "next";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `FAQ — ${siteConfig.businessName}`,
  description: `Answers to the questions people ask first about ${siteConfig.businessName}'s AI voice and chat agents.`,
};

export default function FAQPage() {
  return (
    <div className="w-full bg-bg overflow-x-clip">
      <Header />
      <FAQSection />
      <Footer />
    </div>
  );
}
