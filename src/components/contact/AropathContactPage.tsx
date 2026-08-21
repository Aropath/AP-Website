"use client";

import React, { useState } from "react";
import { ArrowRight, Check, ShieldCheck, Gauge, MessageSquareText, Building2, Milestone, Mail, Phone, Sparkles } from "lucide-react";
import { siWhatsapp } from "simple-icons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { GradientBlob } from "@/components/ui/GradientBlob";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d={siWhatsapp.path} />
  </svg>
);

const BENEFITS = [
  { icon: Gauge, title: "Find the right plan", desc: "We'll match your team size and data volume to a plan that fits." },
  { icon: MessageSquareText, title: "Get expert guidance", desc: "A product specialist walks through your use case and answers technical questions." },
  { icon: Building2, title: "Explore enterprise options", desc: "SSO, custom roles, dedicated support, and security reviews." },
  { icon: Milestone, title: "Book a personalized demo", desc: "See Aropath running on data that looks like yours." },
];

const CONTACT_METHODS = [
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: WhatsappIcon, label: "WhatsApp" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 sm:py-28">
      <div className="absolute inset-0 bg-path-grid opacity-30" aria-hidden="true" />
      <GradientBlob className="-left-24 top-[-8%] h-72 w-72 opacity-80" />
      <GradientBlob variant="blush" className="right-[-6%] top-0 h-72 w-72 opacity-80" />
      <CursorGlow boundsId="contact-hero" />

      <Container className="relative text-center" id="contact-hero">
        <span className="inline-flex items-center rounded-full border border-line bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted shadow-soft">
          Contact Sales
        </span>

        <h1 className="mt-8 max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-display font-semibold leading-[1.18] tracking-tight text-balance">
          Talk to a real person at Aropath
        </h1>

        <p className="mt-7 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed text-ink-muted">
          Whether it’s pricing, a security review, or a walkthrough for your team — we’ll connect you to the right person.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 sm:gap-5">
          <MagneticButton>
            <Button variant="navy" size="lg" withArrow>
              Contact Sales
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button variant="glass" size="lg" className="border border-black text-ink hover:border-black">
              <span>Watch a 2-min demo</span>
            </Button>
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
}

function Benefits() {
  return (
    <div className="flex flex-col justify-between h-full lg:pr-6">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full border border-line bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted shadow-soft">
          Why reach out
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
          Every conversation follows a path.
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-ink-muted">
          Here’s roughly how it goes once you send that message.
        </p>
      </div>

      <ol className="space-y-6 my-8">
        {BENEFITS.map((b) => (
          <li key={b.title} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2563EB] border border-[#2563EB] shadow-soft">
              <b.icon className="h-5 w-5 text-white !text-white !stroke-white" />
            </div>
            <div className="pt-0.5">
              <h4 className="font-semibold text-ink text-base">{b.title}</h4>
              <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-ink-muted">{b.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div>
        <a href="#contact-form" className="inline-block">
          <Button variant="outline" size="md" className="border border-black text-ink hover:border-black">Book a demo</Button>
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-soft text-center h-full flex flex-col items-center justify-center leading-relaxed">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#059669] text-white">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">Message sent.</h3>
        <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink-muted">Thanks — someone from our sales team will reach out within one business day.</p>
        <button className="mt-6 inline-block" onClick={() => setSubmitted(false)}>
          <Button variant="outline">Send another message</Button>
        </button>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-5 sm:space-y-6">
      <div>
        <label className="text-sm font-medium text-ink block mb-2">Full name</label>
        <input required value={values.name} onChange={update("name")} className="w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm sm:text-base leading-relaxed focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="Aria Sharma" />
      </div>

      <div>
        <label className="text-sm font-medium text-ink block mb-2">Work email</label>
        <input required type="email" value={values.email} onChange={update("email")} className="w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm sm:text-base leading-relaxed focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="aria@company.com" />
      </div>

      <div>
        <label className="text-sm font-medium text-ink block mb-2">Company</label>
        <input required value={values.company} onChange={update("company")} className="w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm sm:text-base leading-relaxed focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="Yourcompany Inc." />
      </div>

      <div className="flex-1 flex flex-col">
        <label className="text-sm font-medium text-ink block mb-2">Message</label>
        <textarea required value={values.message} onChange={update("message")} rows={3} className="w-full flex-1 min-h-[90px] rounded-lg border border-line bg-canvas px-4 py-3 text-sm sm:text-base leading-relaxed focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="How can we help?" />
      </div>

      <div className="pt-4 flex flex-col items-center justify-center text-center">
        <Button type="submit" variant="primary" size="lg" withArrow className="px-8">
          Contact Sales
        </Button>
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-muted max-w-sm mx-auto">By submitting, you agree to be contacted by Aropath about our products and services.</p>
      </div>
    </form>
  );
}

export default function ContactUsPage() {
  return (
    <>
      <Hero />

      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-stretch">
          <Benefits />
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-soft border border-line flex flex-col">
            <ContactForm />
          </div>
        </div>

        <div className="mt-16 sm:mt-20 rounded-2xl bg-[#065f46]/5 border border-[#065f46]/20 p-8 text-center">
          <p className="inline-flex items-center justify-center gap-3 text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#065f46] border border-[#065f46] shadow-soft">
              <Sparkles className="h-4 w-4 text-white !text-white !stroke-white" />
            </span>
            <span>Built to help teams turn data into better decisions.</span>
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {CONTACT_METHODS.map((m) => (
              <div key={m.label} className="flex items-center gap-3 text-sm sm:text-base text-ink font-medium">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#065f46] border border-[#065f46] shadow-soft">
                  <m.icon className="h-5 w-5 text-white !text-white !stroke-white" />
                </div>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
