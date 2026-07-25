import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FeatureOverview, AICapabilities } from "@/components/features/FeatureOverview";
import { Automation } from "@/components/features/Automation";
import { EnterpriseFeatures, Security } from "@/components/features/EnterpriseSecurity";
import { Analytics, Integrations } from "@/components/features/AnalyticsIntegrations";
import { DeveloperAPIs, UseCases } from "@/components/features/DeveloperUseCases";
import { FAQSection } from "@/components/layout/FAQSection";
import { CTASection } from "@/components/layout/CTASection";
import { FEATURES_FAQ } from "@/constants/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore AroPath's AI capabilities, session insights, enterprise security, integrations, and developer APIs.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Every capability your growth engine needs to be trusted"
        description="From session intelligence to audit-ready security, AroPath is built as one connected platform — not a collection of disconnected tools."
      />
      <FeatureOverview />
      <AICapabilities />
      <Automation />
      <EnterpriseFeatures />
      <Security />
      <Analytics />
      <Integrations />
      <DeveloperAPIs />
      <UseCases />
      <FAQSection items={FEATURES_FAQ} />
      <CTASection
        title="See these features on your own website"
        description="Connect your website in 6 minutes and get your first growth checklist immediately."
      />
    </>
  );
}
