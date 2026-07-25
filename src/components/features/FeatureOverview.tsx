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
          title="Analytics built to be acted upon"
          description="AroPath's foundation is a set of capabilities — analytics, insights, and checklists — designed to turn traffic data directly into conversions."
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
          title="Models tuned for website growth"
          description="Not a generic metrics dashboard — a set of capabilities purpose-built for the funnels, sessions, and drop-offs your team needs to optimize."
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
