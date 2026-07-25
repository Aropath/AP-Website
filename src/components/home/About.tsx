"use client";

import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, slideFromRight } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { PathTrail } from "@/components/ui/PathTrail";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <PathTrail className="left-0 hidden w-1/3 opacity-60 lg:block" />
      <Container className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideFromLeft}
        >
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
            About AroPath
          </span>
          <h2 className="mt-4 font-display text-display-lg font-medium text-ink">
            We started with one question: why are teams still decoding charts to grow their site?
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideFromRight}
          className="flex flex-col gap-6 text-lg leading-relaxed text-ink-muted"
        >
          <p>
            Most analytics tools dump raw numbers and complex charts onto dashboards and leave you to guess what to fix. We built AroPath around the idea that data should point directly to action.
          </p>
          <p>
            We track sessions and conversions, then generate a prioritized growth plan that shows you exactly what moves the needle. It&apos;s the difference between staring at charts and actually growing your business.
          </p>
        </motion.div>
      </Container>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="sr-only"
      >
        Founded to make web analytics actionable by default.
      </motion.div>
    </section>
  );
}
