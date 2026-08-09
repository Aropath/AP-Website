"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  fadeUp,
  slideFromLeft,
  staggerContainer,
} from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { AUTOMATION_FEATURES } from "@/constants/features";

export function Automation() {
  return (
    <section className="bg-bg py-24">
      <Container>
        {/* Growth Plans capsule - centered at the top */}
        <div className="mb-16 flex justify-center">
          <span className="mb-5 inline-flex items-center rounded-full border border-line bg-card px-3.5 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
  Growth Plans
</span>
        </div>

        {/* Main content */}
        <div className="grid items-start gap-14 lg:grid-cols-[1fr,1.1fr] lg:gap-16">
          
          {/* Left side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
            className="pt-0"
          >
            <h2 className="font-display text-display-lg font-medium leading-tight text-ink">
              Set up once. Grow continuously.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              The same foundation we build your software on scales to support
              everything that follows — every product shipped, every result
              tracked, visible in one place, as it happens.
            </p>
          </motion.div>

          {/* Right side - checklist */}
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
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C08A9B] bg-[#C08A9B] shadow-sm">
                  <Check
                    className="h-3.5 w-3.5 text-white"
                    strokeWidth={2.5}
                  />
                </span>

                <span className="text-[0.95rem] font-medium leading-relaxed text-ink">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </Container>
    </section>
  );
}