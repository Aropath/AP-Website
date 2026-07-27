"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CORE_VALUES } from "@/constants/home";

export function CoreValues() {
  return (
    <section className="py-28 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Core values"
          title="What we optimize for, in order"
          description="The standard we apply, every time it matters."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {CORE_VALUES.map((value, i) => (
            <FeatureCard
              key={value.title}
              {...value}
              index={i}
              className="border-[#8A3A40]/60 hover:border-[#8A3A40]"
              iconBgClassName="bg-[#8A3A40] group-hover:bg-[#722F35]"
              iconClassName="text-white"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
