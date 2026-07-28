"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { QUICKSTART_SNIPPET } from "@/constants/docs";
import { DEVELOPER_FEATURES, USE_CASES } from "@/constants/features";

export function DeveloperAPIs() {
  return (
    <section id="developer-apis" className="py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
            Developer Platforms
          </span>
          <h2 className="mt-4 font-display text-display-lg font-medium text-ink">
            Everything in the UI, available in code
          </h2>
          <ul className="mt-6 flex flex-col gap-3.5">
            {DEVELOPER_FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-ink-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <CodeBlock code={QUICKSTART_SNIPPET} language="typescript" />
      </Container>
    </section>
  );
}

export function UseCases() {
  return (
    <section className="bg-bg-secondary/60 py-24">
      <Container>
        <SectionHeader
          eyebrow="Use cases"
          title="Where teams put AroPath to work first"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {USE_CASES.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              variants={fadeUp}
              custom={i}
              className="rounded-xl2 border border-line bg-card p-7 shadow-soft"
            >
              <span className="inline-flex rounded-full bg-saffron/60 px-3 py-1 text-xs font-medium text-ink">
                {useCase.tag}
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">
                {useCase.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
