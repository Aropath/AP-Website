"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURE_OVERVIEW, AI_CAPABILITIES } from "@/constants/features";

export function FeatureOverview() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Overview"
          title="Precision and intention, carried through everything."
          description="AroPath works across software, insight, and product. Different disciplines, the same level of care."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURE_OVERVIEW.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AICapabilities() {
  return (
    <section className="bg-bg-secondary/60 py-24">
      <Container>
        <SectionHeader
          eyebrow="AI Capabilities"
          title="Intelligent Products for Modern Teams"
          description="From AI-powered analytics to intelligent websites and business tools, every AroPath product is designed to simplify work and help people move faster with confidence."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {AI_CAPABILITIES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
