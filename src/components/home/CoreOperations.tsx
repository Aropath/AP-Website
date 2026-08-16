"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CORE_VALUES } from "@/constants/home";

export function CoreOperations() {
  return (
    <section className="border-b border-line bg-bg-secondary/40 py-32">
      <Container>
        <SectionHeader
          eyebrow="Optimizations"
          title="What We Optimize For"
          description="The standard we apply, every time it matters."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {CORE_VALUES.map((operation, i) => (
            <div
              key={operation.title}
              className="relative overflow-hidden rounded-xl2"
            >
              {/* Faint background number */}
              <span
                className="pointer-events-none absolute right-2 top-0 z-10 select-none font-display text-[110px] font-semibold leading-none text-[#8A3A40]/[0.055]"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <FeatureCard
                {...operation}
                index={i}
                className="relative border-[#8A3A40]/60 hover:border-[#8A3A40]"
                iconBgClassName="bg-[#8A3A40] group-hover:bg-[#722F35]"
                iconClassName="text-white"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}