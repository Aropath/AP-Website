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
            We started with one belief: &quot;Real results are always within reach, not just hoped for.&quot;
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
            Most tools leave businesses with more to figure out, not less — scattered software, disconnected data, no clear next step. We built AroPath around one idea: every tool we build should point directly to action.
          </p>
          <p>
            We build the software, shape the data, and create the products behind it — each one built to show you exactly what to do next. It&apos;s the difference between having tools and actually growing.
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
