import { Hero } from "@/components/home/Hero";
import { TrustedCompanies } from "@/components/home/TrustedCompanies";
import { About } from "@/components/home/About";
import { Philosophy } from "@/components/home/Philosophy";
import { CoreOperations } from "@/components/home/CoreOperations";
import { HowItWorks } from "@/components/home/HowItWorks";
// import { Statistics } from "@/components/home/Statistics";
// import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/layout/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <HowItWorks />
      <CoreOperations />
      <About />
      <Philosophy />
      {/* <Statistics /> */}
      {/* <Testimonials /> */}
      <CTASection />
    </>
  );
}