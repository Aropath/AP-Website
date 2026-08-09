import type { Metadata } from "next";

import {
  FeatureOverview,
  AICapabilities,
} from "@/components/features/FeatureOverview";

import { Automation } from "@/components/features/Automation";

import {
  EnterpriseFeatures,
  Security,
} from "@/components/features/EnterpriseSecurity";

import {
  Integrations,
} from "@/components/features/AnalyticsIntegrations";

import {
  DeveloperAPIs,
  UseCases,
} from "@/components/features/DeveloperUseCases";

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
      {/* 1. OVERVIEW */}
      <FeatureOverview />

      {/* 2. GROWTH PLANS */}
      <Automation />

      {/* 3. AI CAPABILITIES */}
      <AICapabilities />

      {/* 4. BUILT TO SUPPORT */}
      <EnterpriseFeatures />

      {/* Remaining sections */}
      <Security />
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