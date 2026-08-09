"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TESTIMONIALS } from "@/constants/home";

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader eyebrow="Customers" title="Teams already on the path" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              custom={i}
              className="flex flex-col justify-between rounded-xl2 border border-line bg-card p-8 shadow-soft"
            >
              <Quote className="h-6 w-6 text-saffron-hover" strokeWidth={1.5} />
              <blockquote className="mt-5 text-lg leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-10 w-10 rounded-full object-cover border border-line bg-saffron/20"
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
