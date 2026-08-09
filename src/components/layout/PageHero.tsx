"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { GradientBlob } from "@/components/ui/GradientBlob";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <GradientBlob className="left-1/2 top-[-20%] h-[420px] w-[760px] -translate-x-1/2 opacity-70" />

      <Container className="relative text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="inline-flex items-center rounded-full border border-line bg-card px-3.5 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
            {eyebrow}
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-display-xl font-medium text-ink">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            {description}
          </p>
        </motion.div>

        {children}
      </Container>
    </section>
  );
}