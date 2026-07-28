"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Connect your site",
    description: "Install our lightweight tracking script or Node.js SDK in under 6 minutes. Sits alongside any CMS, storefront, or custom app.",
  },
  {
    number: "02",
    title: "Analyze sessions & revenue",
    description: "Our AI model scores every visitor session against actual signup and purchase outcomes to isolate exact conversion bottlenecks.",
  },
  {
    number: "03",
    title: "Get a ranked action plan",
    description: "Receive a prioritized, ROI-scored checklist of changes. Work through the tasks, watch your revenue climb, and repeat.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-secondary/40 py-28 sm:py-32 border-y border-line">
      <Container>
        <SectionHeader
          eyebrow="Workflow"
          title="Three steps, one continuous path"
          description="How AroPath translates raw user behavior into prioritized growth initiatives."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto mt-16 grid gap-10 md:grid-cols-3 max-w-5xl"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              custom={i}
              className="relative flex flex-col items-start"
            >
              <div className="font-display text-5xl font-semibold text-[#3FBFAD] select-none leading-none mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-medium text-ink mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
