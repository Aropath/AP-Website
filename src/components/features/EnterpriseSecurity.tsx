"use client";

import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ENTERPRISE_FEATURES, SECURITY_POINTS } from "@/constants/features";

export function EnterpriseFeatures() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Enterprise"
          title="Ready for how large teams actually work"
          description="Provisioning, permissions, and deployment options that satisfy IT and security without slowing your builders down."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ENTERPRISE_FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Security() {
  return (
    <section id="security" className="bg-bg-secondary/60 py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr,1.3fr] lg:gap-16">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-saffron/60">
              <ShieldCheck className="h-6 w-6 text-ink" strokeWidth={1.75} />
            </span>
            <h2 className="mt-6 font-display text-display-lg font-medium text-ink">
              Security that holds up to an audit, not just a demo
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
              Every workflow run is logged, every permission is scoped, and
              every claim we make is backed by an independent audit.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2">
            {SECURITY_POINTS.map((point) => (
              <div key={point.title} className="rounded-xl2 border border-line bg-card p-6 shadow-soft">
                <dt className="font-display text-base font-medium text-ink">{point.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-muted">{point.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
