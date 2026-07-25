"use client";

import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, slideFromRight } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PLATFORM_BENEFITS } from "@/constants/home";
import { cn } from "@/lib/utils";

export function PlatformBenefits() {
  return (
    <section className="bg-bg-secondary/60 py-28 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Why teams switch"
          title="Automation that earns the team's trust, not just its time back"
        />

        <div className="mt-20 flex flex-col gap-20">
          {PLATFORM_BENEFITS.map((benefit, i) => (
            <div
              key={benefit.title}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={i % 2 === 0 ? slideFromLeft : slideFromRight}
              >
                <span className="font-mono text-sm text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
                  {benefit.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                  {benefit.description}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl3 border border-line bg-card shadow-soft"
              >
                <div className="absolute inset-0 bg-saffron-radial" />
                <div className="absolute inset-0 bg-path-grid bg-[size:20px_20px] opacity-40" />
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
