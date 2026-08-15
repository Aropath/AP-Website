"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Compass, ShieldCheck, Route, Gauge, MessageSquareText, Building2, Milestone, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { GradientBlob } from "@/components/ui/GradientBlob";

const BENEFITS = [
  { icon: Gauge, title: "Find the right plan", desc: "We'll match your team size and data volume to a plan that fits." },
  { icon: MessageSquareText, title: "Get expert guidance", desc: "A product specialist walks through your use case and answers technical questions." },
  { icon: Building2, title: "Explore enterprise options", desc: "SSO, custom roles, dedicated support, and security reviews." },
  { icon: Milestone, title: "Book a personalized demo", desc: "See Aropath running on data that looks like yours." },
];

const CONTACT_METHODS = [
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: MapPin, label: "Address" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-20">
      <div className="absolute inset-0 bg-path-grid opacity-30" aria-hidden="true" />
      <GradientBlob className="-left-24 top-[-8%] h-72 w-72 opacity-80" />
      <GradientBlob variant="blush" className="right-[-6%] top-0 h-72 w-72 opacity-80" />
      <CursorGlow boundsId="contact-hero" />

      <Container className="relative text-center" id="contact-hero">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1 text-xs font-mono text-amber-600">
          <Compass className="h-4 w-4" /> Contact Sales
        </span>

        <h1 className="mt-6 max-w-3xl mx-auto text-4xl sm:text-5xl font-display font-semibold">
          Talk to a real person at Aropath
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-ink-muted">
          Whether it’s pricing, a security review, or a walkthrough for your team — we’ll connect you to the right person.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <MagneticButton>
            <Button variant="navy" size="lg" withArrow>
              Contact Sales
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button variant="glass" size="lg">
              <span>Watch a 2-min demo</span>
            </Button>
          </MagneticButton>
        </div>

        <p className="mt-4 text-sm text-ink-muted flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-amber-500" /> No credit card required
        </p>
      </Container>
    </section>
  );
}

function Benefits() {
  return (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-mono text-slate-700">
          <Route className="h-4 w-4" /> Why reach out
        </span>
        <h2 className="mt-4 text-2xl font-semibold">Every conversation follows a path.</h2>
        <p className="mt-2 text-base text-ink-muted">Here’s roughly how it goes once you send that message.</p>
      </div>

      <ol className="space-y-6">
        {BENEFITS.map((b) => (
          <li key={b.title} className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border shadow-sm">
              <b.icon className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h4 className="font-medium">{b.title}</h4>
              <p className="text-sm text-ink-muted">{b.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <a href="#contact-form" className="inline-block mt-6">
        <Button variant="outline" size="md">Book a demo</Button>
      </a>
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
      <div className="rounded-2xl bg-white p-8 shadow-soft text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">Message sent.</h3>
        <p className="mt-2 text-sm text-ink-muted">Thanks — someone from our sales team will reach out within one business day.</p>
        <button className="mt-6 inline-block" onClick={() => setSubmitted(false)}>
          <Button variant="outline">Send another message</Button>
        </button>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Full name</label>
        <input required value={values.name} onChange={update("name")} className="mt-2 w-full rounded-lg border px-4 py-3" placeholder="Aria Sharma" />
      </div>

      <div>
        <label className="text-sm font-medium">Work email</label>
        <input required type="email" value={values.email} onChange={update("email")} className="mt-2 w-full rounded-lg border px-4 py-3" placeholder="aria@company.com" />
      </div>

      <div>
        <label className="text-sm font-medium">Company</label>
        <input required value={values.company} onChange={update("company")} className="mt-2 w-full rounded-lg border px-4 py-3" placeholder="Yourcompany Inc." />
      </div>

      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea required value={values.message} onChange={update("message")} rows={5} className="mt-2 w-full rounded-lg border px-4 py-3" placeholder="How can we help?" />
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" withArrow>
          Contact Sales
        </Button>
        <p className="mt-3 text-sm text-ink-muted">By submitting, you agree to be contacted by Aropath about our products and services.</p>
      </div>
    </form>
  );
}

export default function ContactUsPage() {
  return (
    <>
      <Hero />

      <Container className="grid gap-10 lg:grid-cols-2 py-12">
        <Benefits />
        <div>
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <ContactForm />
          </div>

          <section className="mt-8">
            <div className="rounded-2xl bg-slate-50 p-8 text-center">
              <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-700">
                <Sparkles className="h-4 w-4 text-amber-500" /> Built to help teams turn data into better decisions.
              </p>

              <div className="mt-6 flex items-center justify-center gap-6">
                {CONTACT_METHODS.map((m) => (
                  <div key={m.label} className="flex items-center gap-2 text-sm text-ink-muted">
                    <m.icon className="h-5 w-5 text-amber-500" />
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
