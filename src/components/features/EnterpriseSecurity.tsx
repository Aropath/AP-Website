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
          eyebrow="Built to support"
          title="Everything you need to get started and keep growing."
          description="From implementation to ongoing improvements, we build products that are simple to adopt, easy to use, and supported every step of the way."
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
              Built to perform. Designed to last.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
              Every AroPath product is built with reliability, performance, and usability at its core—so you can focus on your work, not your tools.
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
