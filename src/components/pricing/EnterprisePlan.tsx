"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { fadeUp } from "@/animations/variants";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function EnterprisePlan() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-center gap-6 rounded-xl3 border border-line bg-ink px-8 py-14 text-center text-bg sm:px-14"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-saffron/80">
            <Building2 className="h-6 w-6 text-ink" strokeWidth={1.75} />
          </span>
          <h2 className="max-w-xl font-display text-display-lg font-medium">
            Need private deployment, custom SLAs, or volume pricing?
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-bg/70">
            Our enterprise plan is built around your compliance, security, and
            scale requirements — with a dedicated team to help you get there.
          </p>
          <MagneticButton>
            <Link href="/contact">
              <Button variant="glass" size="lg" className="hover:-translate-y-1 text-white border-white/20 bg-white/10 hover:bg-white/20" withArrow>
                Talk to Sales
              </Button>
            </Link>
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  );
}
