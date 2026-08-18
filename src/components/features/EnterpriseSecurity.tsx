"use client";

import { Lock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  ENTERPRISE_FEATURES,
  SECURITY_POINTS,
} from "@/constants/features";

export function EnterpriseFeatures() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E07A5F]/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#E07A5F]/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <SectionHeader
          eyebrow="Built to support"
          title="Everything you need to get started and keep growing."
          description="From implementation to ongoing improvements, we build products that are simple to adopt, easy to use, and supported every step of the way."
        />

        {/* Built to Support Cards */}
        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
          {ENTERPRISE_FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative flex h-full overflow-hidden rounded-2xl border border-[#E07A5F]/30 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#E07A5F]/70 hover:shadow-md"
              >
                <div className="relative flex w-full flex-col">
                  {/* Top row */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E07A5F] text-white transition-colors duration-300">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                      />
                    </div>

                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#E07A5F]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-8 flex-1">
                    <h3 className="font-display text-xl font-medium leading-tight text-ink">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="relative mt-8 h-px w-full overflow-hidden bg-[#E07A5F]/15">
                    <div className="h-full w-0 bg-[#E07A5F] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function Security() {
  return (
    <section
      id="security"
      className="py-24"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr,1.3fr] lg:gap-16">
          <div>
            <Lock
              className="h-[72px] w-[72px] text-[#A78BFA]"
              strokeWidth={1.5}
            />

            <h2 className="mt-6 font-display text-display-lg font-medium text-ink">
              Built to perform. Designed to last.
            </h2>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
              Every AroPath product is built with reliability, performance,
              and usability at its core—so you can focus on your work, not
              your tools.
            </p>
          </div>

          <dl className="grid gap-6 sm:grid-cols-2">
            {SECURITY_POINTS.map((point, index) => (
              <div
                key={point.title}
                className="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#E07A5F]/50 hover:shadow-md"
              >
                {/* Top row */}
                <div className="relative mb-5 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E07A5F]/10 text-sm font-semibold text-[#E07A5F]">
                    {index + 1}
                  </span>

                  <span
                    className="h-2 w-2 rounded-full bg-[#E07A5F]/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#E07A5F]"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <dt className="relative font-display text-base font-medium text-ink">
                  {point.title}
                </dt>

                <dd className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                  {point.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}