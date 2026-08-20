"use client";

import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, slideFromRight } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { PathTrail } from "@/components/ui/PathTrail";

export function About() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <PathTrail className="left-0 hidden w-1/3 opacity-60 lg:block" />

      <Container className="relative">
        {/* About capsule */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-line bg-card px-3.5 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
            About
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
          >
            <h2 className="font-display text-display-lg font-medium text-ink">
              We started with one belief: &quot;Build products that create
              measurable impact.&quot;
            </h2>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromRight}
            className="flex flex-col gap-6 text-lg leading-relaxed text-ink-muted"
          >
            <p>
              Great software speaks for itself. We build things that are
              thoughtful, capable, and easy to use — from AI tools to websites,
              analytics, and business platforms, each one shaped by the same
              standard of craft.
            </p>

            <p>
              We treat every product the same way — with care, from start to
              finish. Software, insight, and product, each one built with the
              same attention, and aimed at the same result: something that
              drives progress.
            </p>
          </motion.div>
        </div>
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