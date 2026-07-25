"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ANALYTICS_FEATURES, INTEGRATIONS } from "@/constants/features";

export function Analytics() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Analytics"
          title="See performance at the workflow, and the decision"
          description="Aggregate dashboards for the big picture. Full traces for the one run that needs a closer look."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ANALYTICS_FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Integrations() {
  return (
    <section className="bg-bg-secondary/60 py-24">
      <Container>
        <SectionHeader
          eyebrow="Integrations"
          title="Connect the tools your team already runs on"
          description="Aropath Connect brings data in and pushes outcomes back out, so workflows fit into existing systems instead of replacing them."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {INTEGRATIONS.map((name) => (
            <div
              key={name}
              className="flex h-20 items-center justify-center rounded-xl2 border border-line bg-card px-3 text-center text-sm font-medium text-ink-muted shadow-soft transition-colors hover:border-saffron-hover hover:text-ink"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
