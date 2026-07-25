import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { FeatureComparison } from "@/components/pricing/FeatureComparison";
import { EnterprisePlan } from "@/components/pricing/EnterprisePlan";
import { FAQSection } from "@/components/layout/FAQSection";
import { CTASection } from "@/components/layout/CTASection";
import { PRICING_FAQ } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for teams of every size — from a first free workflow to enterprise-scale automation.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans that scale with your workflows, not against them"
        description="Start free. Upgrade when your team is running automation that matters. No surprise overages."
      />
      <PricingCards />
      <FeatureComparison />
      <EnterprisePlan />
      <FAQSection items={PRICING_FAQ} />
      <CTASection />
    </>
  );
}
