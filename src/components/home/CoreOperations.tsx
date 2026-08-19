"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CORE_VALUES } from "@/constants/home";

export function CoreOperations() {
  return (
    <section className="border-b border-line /40 py-32">
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