import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import FitSection from "@/components/FitSection";
import WhyUsSection from "@/components/WhyUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-bg overflow-x-clip">
      <Header />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <FitSection />
      <WhyUsSection />
      <HowItWorksSection />
      <PricingSection />
      <DemoSection />
      <Footer />
    </div>
  );
}
