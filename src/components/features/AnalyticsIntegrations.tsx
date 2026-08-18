"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ANALYTICS_FEATURES } from "@/constants/features";

import {
  siWordpress,
  siShopify,
  siGoogleanalytics,
  siNextdotjs,
  siReact,
  siWebflow,
} from "simple-icons";

const INTEGRATION_ICONS = [
  {
    name: "WordPress",
    icon: siWordpress,
  },
  {
    name: "Shopify",
    icon: siShopify,
  },
  {
    name: "Google Analytics",
    icon: siGoogleanalytics,
  },
  {
    name: "Next.js",
    icon: siNextdotjs,
  },
  {
    name: "React SDK",
    icon: siReact,
  },
  {
    name: "Webflow",
    icon: siWebflow,
  },
];

export function Analytics() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="See performance at the workflow, and the decision"
          description="Aggregate dashboards for the big picture. Full traces for the one run that needs a closer look."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ANALYTICS_FEATURES.map((f, i) => (
            <FeatureCard
              key={f.title}
              {...f}
              index={i}
              className="border-[#7380FA]/60 hover:border-[#7380FA]"
              iconBgClassName="bg-[#7380FA] group-hover:bg-[#5E6CE8]"
              iconClassName="text-white"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Integrations() {
  return (
    <section className="bg-bg py-24">
      <Container>
        <SectionHeader
          eyebrow="Integrations"
          title="Connect the tools your team already runs on"
          description="Aropath Connect brings data in and pushes outcomes back out, so workflows fit into existing systems instead of replacing them."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {INTEGRATION_ICONS.map(({ name, icon }) => (
            <div
              key={name}
              title={name}
              aria-label={name}
              className="group flex h-24 items-center justify-center rounded-xl2 border border-line bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-saffron-hover hover:shadow-md"
            >
              <svg
                role="img"
                aria-label={name}
                viewBox="0 0 24 24"
                className="h-10 w-10 text-ink-muted transition-colors duration-300 group-hover:text-ink"
                fill="currentColor"
              >
                <path d={icon.path} />
              </svg>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}