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
        title="Every capabilty your growth engine needs to be trusted "
        description="Every piece of what we make is built with intention. Software, data, and security, all pointed at the same thing: results that last."
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
        description="Connect your website in 5 minutes and get your first growth checklist immediately."
      />
    </>
  );
}
