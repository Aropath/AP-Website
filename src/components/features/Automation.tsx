"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, slideFromLeft, slideFromRight, staggerContainer } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { AUTOMATION_FEATURES } from "@/constants/features";

export function Automation() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideFromLeft}
        >
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
            Growth Plans
          </span>
          <h2 className="mt-4 font-display text-display-lg font-medium text-ink">
            Set up once.<br></br> Grow continuously.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
            The same foundation we build your software on scales to support everything that follows — every product shipped, every result tracked, visible in one place, as it happens.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-4"
        >
          {AUTOMATION_FEATURES.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-xl2 border border-[#C08A9B]/60 bg-card p-5 shadow-soft transition-colors duration-300 hover:border-[#C08A9B]"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C08A9B] border border-[#C08A9B] shadow-sm">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-[0.95rem] font-medium leading-relaxed text-ink">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
