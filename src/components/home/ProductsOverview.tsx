"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PRODUCTS_OVERVIEW } from "@/constants/home";

export function ProductsOverview() {
  return (
    <section id="products" className="py-28 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Platform"
          title="Four capabilities. One continuous path."
          description="Our analytics engine, insights models, and growth planner work together to turn raw visitor data into a prioritized action checklist."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS_OVERVIEW.map((product, i) => (
            <FeatureCard key={product.title} {...product} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
