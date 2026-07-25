"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PHILOSOPHY_POINTS } from "@/constants/home";

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-bg-secondary/60 py-28 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Philosophy"
          title="Two ideas guide every decision we make"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2"
        >
          {PHILOSOPHY_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              custom={i}
              className="rounded-xl3 border border-line bg-card p-9 shadow-soft"
            >
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                {point.title}
              </span>
              <p className="mt-4 font-display text-xl font-medium leading-snug text-ink">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Careers Callout */}
        <motion.div
          id="careers"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-20 max-w-2xl rounded-xl3 border border-line bg-card p-8 text-center shadow-soft"
        >
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-saffron-logo font-semibold">Careers</span>
          <h3 className="mt-2 font-display text-lg font-medium text-ink">We&apos;re growing the path. Join us.</h3>
          <p className="mt-2 text-sm text-ink-muted max-w-lg mx-auto leading-relaxed">
            We are looking for designers, engineers, and product minds who want to build the future of actionable, human-centered analytics.
          </p>
          <div className="mt-5">
            <a href="mailto:careers@aropath.com" className="text-xs font-semibold text-ink underline hover:text-saffron-logo transition-colors">
              View open roles (We&apos;re hiring) →
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
