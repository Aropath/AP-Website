"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Route,
  Milestone,
  Compass,
  Sparkles,
  ShieldCheck,
  Users,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Check,
  ChevronDown,
  Building2,
  Globe2,
  TrendingUp,
  Gauge,
  MessageSquareText,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ============================================================
   AROPATH DASHBOARD — CONTACT SALES
   Signature element: "The Path" — a hand-drawn dashed route that
   runs from the hero through the benefits list, connecting
   waypoints (the literal meaning of "Aropath"). Everything else
   stays quiet so that one idea can carry the page.
   ============================================================ */

/* ---------- Reduced motion hook ---------- */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}

/* ---------- Scroll reveal hook ---------- */
function useReveal(reduced) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(reduced);
  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);
  return [ref, visible];
}

function Reveal({ children, reduced, className = "", style = {} }) {
  const [ref, visible] = useReveal(reduced);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ============================== NAVBAR ============================== */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <Route size={18} strokeWidth={2.4} />
          </span>
          <span className="brand-name">Aropath</span>
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

    </header>
  );
}

/* ============================== HERO ============================== */
function HeroStatChip({ label, value, delay, reduced }) {
  return (
    <div
      className="stat-chip"
      style={reduced ? {} : { animationDelay: `${delay}ms` }}
    >
      <span className="stat-chip-value">{value}</span>
      <span className="stat-chip-label">{label}</span>
    </div>
  );
}

function HeroVisual({ reduced }) {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 420 380" className="hero-path-svg">
        <path
          id="hero-route"
          d="M20 320 C 90 300, 110 200, 170 190 S 260 120, 300 100 S 380 60, 400 30"
          fill="none"
          stroke="var(--crimson)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 14"
          className={reduced ? "" : "route-draw"}
        />
        <circle cx="20" cy="320" r="6" fill="var(--navy)" />
        <circle cx="170" cy="190" r="6" fill="var(--crimson)" />
        <circle cx="300" cy="100" r="6" fill="var(--crimson)" />
        <circle cx="400" cy="30" r="7" fill="var(--saffron-deep)" stroke="var(--navy)" strokeWidth="2" />
      </svg>

      <div className="hero-card hero-card-main">
        <div className="hero-card-top">
          <span className="hero-card-eyebrow">
            <BarChart3 size={14} /> Weekly active teams
          </span>
        </div>
        <svg viewBox="0 0 220 70" className="mini-chart">
          <polyline
            points="0,55 30,48 55,50 80,32 110,36 140,18 170,22 200,8 220,10"
            fill="none"
            stroke="var(--crimson)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="hero-card-foot">
          <TrendingUp size={14} />
          <span>+38% this quarter</span>
        </div>
      </div>

      <HeroStatChip label="happy customers" value="98%" delay={200} reduced={reduced} />
      <HeroStatChip label="dedicated support" value="24/7" delay={500} reduced={reduced} />
      <HeroStatChip label="avg. setup time" value="< 10 min" delay={800} reduced={reduced} />
    </div>
  );
}

function HeroSection({ reduced }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <svg className="hero-bg-dots" width="100%" height="100%">
          <pattern id="dotgrid" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="var(--navy)" opacity="0.08" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>
        <div className="blob blob-saffron blob-a" />
        <div className="blob blob-crimson blob-b" />
      </div>

      <div className="hero-inner">
        <Reveal reduced={reduced} className="hero-copy">
          <span className="eyebrow">
            <Compass size={14} /> Contact Sales
          </span>
          <h1 className="hero-title">
            Let&rsquo;s chart the path to your next decision.
          </h1>
          <p className="hero-sub hero-sub-spaced">
            Whether it&rsquo;s pricing, a security review, or a walkthrough for your team &mdash;
            talk to a real person at Aropath.
          </p>
          <p className="hero-microcopy">
            <ShieldCheck size={15} /> No credit card required.
          </p>
        </Reveal>

        <Reveal reduced={reduced} className="hero-visual-wrap" style={{ transitionDelay: reduced ? "0ms" : "140ms" }}>
          <HeroVisual reduced={reduced} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== FORM ============================== */
const INTEREST_OPTIONS = [
  "Pricing & plans",
  "Product demo",
  "Technical QnA",
  "Partnerships",
  "Enterprise Soln",
];

const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–1000", "1000+"];

function Field({ label, htmlFor, required, hint, children }) {
  return (
    <div className="field">
      <label htmlFor={htmlFor} className="field-label">
        {label} {required && <span className="req">*</span>}
      </label>
      {children}
      {hint && <span className="field-hint">{hint}</span>}
    </div>
  );
}

function ContactForm({ reduced }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    jobTitle: "",
    phone: "",
    companySize: "",
    country: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!values.firstName.trim()) errs.firstName = "First name is required.";
    if (!values.lastName.trim()) errs.lastName = "Last name is required.";
    if (!values.workEmail.trim()) {
      errs.workEmail = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail)) {
      errs.workEmail = "Enter a valid email address.";
    }
    if (!values.company.trim()) errs.company = "Company name is required.";
    if (!values.companySize) errs.companySize = "Select your company size.";
    if (!values.interest) errs.interest = "Let us know what you're interested in.";
    if (!values.message.trim()) errs.message = "Tell us a little about your needs.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="form-card success-card">
        <div className="success-icon">
          <Check size={28} strokeWidth={3} />
        </div>
        <h3>Message sent.</h3>
        <p>
          Thanks, {values.firstName || "there"} &mdash; someone from our sales team will
          reach out to {values.workEmail || "your inbox"} within one business day.
        </p>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setSubmitted(false);
            setValues({
              firstName: "",
              lastName: "",
              workEmail: "",
              company: "",
              jobTitle: "",
              phone: "",
              companySize: "",
              country: "",
              interest: "",
              message: "",
            });
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-header">
        <h3>Talk to our sales team</h3>
        <p>Fill this out and we&rsquo;ll route you to the right person &mdash; usually within a day.</p>
      </div>

      <div className="form-grid">
        <Field label="First name" htmlFor="firstName" required>
          <input
            id="firstName"
            className={`input ${errors.firstName ? "input-error" : ""}`}
            placeholder="Aria"
            value={values.firstName}
            onChange={update("firstName")}
          />
          {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
        </Field>

        <Field label="Last name" htmlFor="lastName" required>
          <input
            id="lastName"
            className={`input ${errors.lastName ? "input-error" : ""}`}
            placeholder="Sharma"
            value={values.lastName}
            onChange={update("lastName")}
          />
          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
        </Field>

        <Field label="Work email" htmlFor="workEmail" required className="span-2">
          <input
            id="workEmail"
            type="email"
            className={`input ${errors.workEmail ? "input-error" : ""}`}
            placeholder="aria@yourcompany.com"
            value={values.workEmail}
            onChange={update("workEmail")}
          />
          {errors.workEmail && <span className="error-msg">{errors.workEmail}</span>}
        </Field>

        <Field label="Company name" htmlFor="company" required>
          <input
            id="company"
            className={`input ${errors.company ? "input-error" : ""}`}
            placeholder="Yourcompany Inc."
            value={values.company}
            onChange={update("company")}
          />
          {errors.company && <span className="error-msg">{errors.company}</span>}
        </Field>

        <Field label="Job title" htmlFor="jobTitle" hint="Optional">
          <input
            id="jobTitle"
            className="input"
            placeholder="Head of Data"
            value={values.jobTitle}
            onChange={update("jobTitle")}
          />
        </Field>

        <Field label="Phone number" htmlFor="phone" hint="Optional">
          <input
            id="phone"
            type="tel"
            className="input"
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={update("phone")}
          />
        </Field>

        <Field label="Country / Region" htmlFor="country" hint="Optional">
          <input
            id="country"
            className="input"
            placeholder="India"
            value={values.country}
            onChange={update("country")}
          />
        </Field>

        <Field label="Company size" htmlFor="companySize" required className="span-2">
          <div className="select-wrap">
            <select
              id="companySize"
              className={`input select-input ${errors.companySize ? "input-error" : ""}`}
              value={values.companySize}
              onChange={update("companySize")}
              aria-invalid={Boolean(errors.companySize)}
            >
              <option value="">Select your company size</option>
              {COMPANY_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <ChevronDown className="select-chevron" size={17} aria-hidden="true" />
          </div>
          {errors.companySize && <span className="error-msg">{errors.companySize}</span>}
        </Field>

        <Field label="What are you interested in?" required className="span-2">
          <div className="chip-group" role="radiogroup" aria-label="Interest">
            {INTEREST_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                role="radio"
                aria-checked={values.interest === opt}
                className={`chip ${values.interest === opt ? "chip-active" : ""}`}
                onClick={() => setValues((v) => ({ ...v, interest: opt }))}
              >
                {opt}
              </button>
            ))}
          </div>
          {errors.interest && <span className="error-msg">{errors.interest}</span>}
        </Field>

        <Field label="How can we help?" htmlFor="message" required className="span-2">
          <textarea
            id="message"
            className={`input textarea ${errors.message ? "input-error" : ""}`}
            rows={4}
            placeholder="Tell us about your team, your data, and what you're hoping to solve..."
            value={values.message}
            onChange={update("message")}
          />
          {errors.message && <span className="error-msg">{errors.message}</span>}
        </Field>
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
        {submitting ? "Sending..." : "Contact Sales"}
        {!submitting && <ArrowRight size={17} />}
      </button>
      <p className="form-fineprint">
        By submitting, you agree to be contacted by Aropath about our products and services.
      </p>
    </form>
  );
}

/* ============================== BENEFITS (path timeline) ============================== */
const BENEFITS = [
  {
    icon: Gauge,
    title: "Find the right plan",
    desc: "We'll match your team size and data volume to a plan that fits, not the other way around.",
  },
  {
    icon: MessageSquareText,
    title: "Get expert guidance",
    desc: "A product specialist walks through your use case and answers the technical questions.",
  },
  {
    icon: Building2,
    title: "Explore enterprise options",
    desc: "SSO, custom roles, dedicated support, and security reviews for larger teams.",
  },
  {
    icon: Milestone,
    title: "Book a personalized demo",
    desc: "See Aropath running on data that looks like yours, not a generic sample dataset.",
  },
];

function ContactBenefits({ reduced }) {
  return (
    <div className="benefits-col">
      <Reveal reduced={reduced}>
        <span className="eyebrow eyebrow-dark">
          <Route size={14} /> Why reach out
        </span>
        <h2 className="benefits-title">Every conversation follows a path.</h2>
        <p className="benefits-sub">
          Here&rsquo;s roughly how it goes once you send that message.
        </p>
      </Reveal>

      <ol className="path-list">
        <div className="path-line" aria-hidden="true" />
        {BENEFITS.map((b, i) => {
          const Icon = b.icon;
          return (
            <Reveal reduced={reduced} key={b.title} style={{ transitionDelay: reduced ? "0ms" : `${i * 90}ms` }}>
              <li className="path-item">
                <span className="path-node">
                  <Icon size={18} strokeWidth={2.2} />
                </span>
                <div className="path-item-copy">
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>

      <Reveal reduced={reduced} style={{ transitionDelay: reduced ? "0ms" : `${BENEFITS.length * 90}ms` }}>
        <a href="#contact-form" className="btn btn-secondary btn-lg path-demo-cta">
          Book a Demo
        </a>
      </Reveal>
    </div>
  );
}

/* ============================== TRUST SECTION ============================== */
const TRUST_ITEMS = [
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: MapPin, label: "Address" },
];

function TrustSection({ reduced }) {
  return (
    <section className="trust">
      <Reveal reduced={reduced} className="trust-inner">
        <p className="trust-headline">
          <Sparkles size={16} /> Built to help teams turn data into better decisions.
        </p>
        <div className="trust-grid">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div className="trust-item" key={label}>
              <Icon size={20} strokeWidth={2} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ============================== FOOTER ============================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <Route size={16} strokeWidth={2.4} />
          </span>
          <span className="brand-name">Aropath</span>
        </div>
        <span className="footer-copy">&copy; {new Date().getFullYear()} Aropath Dashboard. All rights reserved.</span>
      </div>
    </footer>
  );
}

/* ============================== PAGE ============================== */
export default function ContactUsPage() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="ap-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

        .ap-page {
          --saffron: #F9EDB7;
          --saffron-deep: #F2A93B;
          --saffron-wash: #FCF8E8;
          --bg-base: #FFFDF7;
          --cream: #FFFFFF;
          --crimson: #F2A93B;
          --crimson-soft: #F9EDB7;
          --navy: #1E2B37;
          --navy-70: rgba(17,24,39,0.72);
          --navy-45: rgba(107,114,128,0.72);
          --border: #ECE7D3;
          --shadow-soft: 0 20px 45px rgba(30,43,55,0.10);
          --shadow-tight: 0 8px 20px rgba(30,43,55,0.08);
          font-family: 'Inter', -apple-system, sans-serif;
          color: var(--navy);
          background: var(--bg-base);
          overflow-x: hidden;
          line-height: 1.5;
        }
        .ap-page * { box-sizing: border-box; }
        .ap-page h1, .ap-page h2, .ap-page h3, .ap-page h4 {
          font-family: 'Space Grotesk', sans-serif;
          margin: 0;
          color: var(--navy);
          letter-spacing: -0.01em;
        }
        .ap-page p { margin: 0; }
        .ap-page a { color: inherit; text-decoration: none; }
        .ap-page button { font-family: inherit; cursor: pointer; }
        .ap-page ol, .ap-page ul { list-style: none; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
        }

        /* ---------- reveal ---------- */
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        /* ---------- buttons ---------- */
        .btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 11px 20px; border-radius: 999px; font-weight: 600; font-size: 14.5px;
          border: 1.5px solid transparent; transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease;
          white-space: nowrap;
        }
        .btn:active { transform: scale(0.97); }
        .btn-primary { background: var(--saffron-deep); color: var(--navy); box-shadow: var(--shadow-tight); }
        .btn-primary:hover { background: #F5E5A4; box-shadow: 0 12px 26px rgba(242,169,59,0.35); transform: translateY(-1px); }
        .btn-secondary { background: transparent; color: var(--navy); border-color: var(--navy); }
        .btn-secondary:hover { background: var(--navy); color: var(--bg-base); }
        .btn-ghost { background: transparent; color: var(--navy-70); }
        .btn-ghost:hover { color: var(--navy); }
        .btn-lg { padding: 13px 26px; font-size: 15.5px; }
        .btn-block { width: 100%; padding: 14px; font-size: 15.5px; margin-top: 6px; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 500;
          letter-spacing: 0.04em; text-transform: uppercase;
          color: var(--crimson); background: rgba(242,169,59,0.1);
          padding: 6px 12px; border-radius: 999px; margin-bottom: 18px;
        }
        .eyebrow-dark { color: var(--navy); background: rgba(30,43,55,0.06); }

        /* ---------- navbar ---------- */
        .navbar {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,253,247,0.7);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .navbar-scrolled { background: rgba(255,255,255,0.92); border-color: var(--border); box-shadow: 0 4px 20px rgba(30,43,55,0.06); }
        .navbar-inner {
          max-width: 1180px; margin: 0 auto; padding: 14px 28px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .brand { display: flex; align-items: center; gap: 9px; }
        .brand-mark {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 10px;
          background: var(--navy); color: var(--saffron-wash);
        }
        .brand-name { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 19px; }
        .nav-links { display: flex; align-items: center; gap: 28px; }
        .nav-link { font-size: 14.5px; font-weight: 500; color: var(--navy-70); position: relative; padding: 4px 0; }
        .nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -2px; height: 2px; width: 0;
          background: var(--crimson); transition: width 0.22s ease;
        }
        .nav-link:hover { color: var(--navy); }
        .nav-link:hover::after { width: 100%; }
        .navbar-actions { display: flex; align-items: center; gap: 10px; }
        .nav-toggle { display: none; background: none; border: none; color: var(--navy); }
        .nav-mobile { display: none; }

        @media (max-width: 860px) {
          .nav-links, .navbar-actions { display: none; }
          .nav-toggle { display: inline-flex; }
          .nav-mobile {
            max-height: 0; overflow: hidden; display: flex; flex-direction: column;
            padding: 0 24px; gap: 2px; background: var(--cream);
            border-top: 1px solid transparent; transition: max-height 0.3s ease, padding 0.3s ease;
          }
          .nav-mobile-open { max-height: 320px; padding: 14px 24px 22px; border-color: var(--border); }
          .nav-mobile-link { padding: 10px 4px; font-weight: 500; color: var(--navy-70); border-bottom: 1px solid var(--border); }
          .nav-mobile-cta { margin-top: 12px; }
        }

        /* ---------- hero ---------- */
        .hero { position: relative; padding: 64px 28px 40px; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-bg-dots { position: absolute; inset: 0; opacity: 0.9; }
        .blob { position: absolute; border-radius: 50%; filter: blur(50px); opacity: 0.55; }
        .blob-saffron { width: 340px; height: 340px; background: var(--saffron); top: -120px; left: -80px; }
        .blob-crimson { width: 300px; height: 300px; background: var(--crimson-soft); bottom: -100px; right: 6%; }
        @media (prefers-reduced-motion: no-preference) {
          .blob-a { animation: drift-a 16s ease-in-out infinite; }
          .blob-b { animation: drift-b 19s ease-in-out infinite; }
          .blob-c { animation: drift-a 13s ease-in-out infinite reverse; }
        }
        @keyframes drift-a { 0%,100% { transform: translate(0,0); } 50% { transform: translate(24px,18px); } }
        @keyframes drift-b { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-20px,-16px); } }

        .hero-inner {
          position: relative; z-index: 1; max-width: 1180px; margin: 0 auto;
          display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center;
        }
        .hero-title { font-size: clamp(32px, 4.4vw, 50px); font-weight: 700; line-height: 1.08; margin-bottom: 34px; }
        .hero-sub { font-size: 16.5px; line-height: 1.55; color: var(--navy-70); max-width: 480px; margin-bottom: 30px; }
        .hero-sub-spaced { margin-bottom: 52px; }
        .hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 20px; }
        .hero-microcopy { display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: var(--navy-45); margin-top: 6px; }

        .hero-visual { position: relative; height: 380px; }
        .hero-path-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .route-draw { stroke-dashoffset: 900; stroke-dasharray: 2 14, 900; animation: draw-route 2.6s ease-out forwards 0.3s; }
        @keyframes draw-route { to { stroke-dashoffset: 0; } }

        .hero-card {
          position: absolute; background: var(--cream); border-radius: 20px;
          box-shadow: var(--shadow-soft); border: 1px solid var(--border);
        }
        .hero-card-main {
          width: 220px; padding: 16px; top: 4px; right: 4px;
        }
        .hero-card-top { margin-bottom: 8px; }
        .hero-card-eyebrow {
          display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600;
          color: var(--navy-45); text-transform: uppercase; letter-spacing: 0.03em;
        }
        .mini-chart { width: 100%; height: 46px; }
        .hero-card-foot { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; color: var(--crimson); margin-top: 6px; }

        .stat-chip {
          position: absolute; display: flex; flex-direction: column; gap: 2px;
          background: rgba(255,252,245,0.9); backdrop-filter: blur(6px);
          border: 1px solid var(--border); border-radius: 14px; padding: 10px 14px;
          box-shadow: var(--shadow-tight);
        }
        .stat-chip:nth-of-type(1) { bottom: 76px; left: -6px; }
        .stat-chip:nth-of-type(2) { bottom: 10px; left: 130px; }
        .stat-chip:nth-of-type(3) { top: 150px; left: -14px; }
        .stat-chip-value { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 18px; }
        .stat-chip-label { font-size: 11px; color: var(--navy-45); }
        @media (prefers-reduced-motion: no-preference) {
          .stat-chip { animation: chip-in 0.6s ease backwards, chip-float 5s ease-in-out infinite 0.6s; }
        }
        @keyframes chip-in { from { opacity: 0; transform: translateY(14px) scale(0.94); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes chip-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

        @media (max-width: 980px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hero-visual { height: 320px; max-width: 420px; margin: 0 auto; }
        }
        @media (max-width: 560px) {
          .hero { padding: 44px 18px 30px; }
          .hero-card-main { width: 172px; }
        }

        /* ---------- contact section (form + benefits) ---------- */
        .contact-section {
          position: relative; max-width: 1180px; margin: 0 auto; padding: 30px 28px 90px;
          display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 54px; align-items: start;
        }
        @media (max-width: 980px) {
          .contact-section { grid-template-columns: 1fr; gap: 44px; }
        }

        .benefits-title { font-size: clamp(24px, 3vw, 32px); font-weight: 700; margin: 4px 0 10px; }
        .benefits-sub { color: var(--navy-70); font-size: 15px; margin-bottom: 30px; }

        .path-list { position: relative; padding-left: 6px; }
        .path-line {
          position: absolute; left: 22px; top: 8px; bottom: 8px; width: 2px;
          background: repeating-linear-gradient(to bottom, var(--crimson) 0, var(--crimson) 6px, transparent 6px, transparent 14px);
        }
        .path-item { position: relative; display: flex; gap: 18px; padding: 0 0 34px 0; }
        .path-item:last-child { padding-bottom: 0; }
        .path-node {
          position: relative; z-index: 1; flex-shrink: 0;
          width: 44px; height: 44px; border-radius: 50%;
          background: var(--cream); border: 1.5px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--crimson); box-shadow: var(--shadow-tight);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .path-item:hover .path-node { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(242,169,59,0.25); }
        .path-item-copy h4 { font-size: 16.5px; font-weight: 600; margin-bottom: 5px; }
        .path-item-copy p { font-size: 14px; color: var(--navy-70); max-width: 360px; }
        .path-demo-cta { margin-top: 12px; margin-left: 62px; }
        @media (max-width: 980px) { .path-demo-cta { margin-left: 0; } }

        /* ---------- form ---------- */
        .form-card {
          background: var(--cream); border-radius: 24px; border: 1px solid var(--border);
          box-shadow: var(--shadow-soft); padding: 34px; position: relative; overflow: hidden;
        }
        .form-card::before {
          content: ''; position: absolute; top: -60px; right: -60px; width: 160px; height: 160px;
          background: var(--saffron-wash); border-radius: 50%; opacity: 0.7; z-index: 0;
        }
        .form-header, .form-grid, .success-card > * { position: relative; z-index: 1; }
        .form-header { margin-bottom: 24px; }
        .form-header h3 { font-size: 22px; font-weight: 700; margin-bottom: 6px; }
        .form-header p { color: var(--navy-70); font-size: 14.5px; }

        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px 16px; }
        .field { display: flex; flex-direction: column; gap: 7px; }
        .span-2 { grid-column: 1 / -1; }
        .field-label { font-size: 13px; font-weight: 600; color: var(--navy); }
        .req { color: var(--crimson); }
        .field-hint { font-size: 11.5px; color: var(--navy-45); }

        .input {
          font-family: inherit; font-size: 14.5px; color: var(--navy);
          background: var(--cream); border: 1.5px solid var(--border); border-radius: 12px;
          padding: 11px 14px; outline: none; transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .input::placeholder { color: var(--navy-45); }
        .input:hover { border-color: rgba(30,43,55,0.24); }
        .input:focus { border-color: var(--crimson); box-shadow: 0 0 0 4px rgba(242,169,59,0.14); }
        .input-error { border-color: var(--crimson); background: rgba(242,169,59,0.05); }
        .textarea { resize: vertical; min-height: 90px; }
        .error-msg { font-size: 12px; color: var(--crimson); font-weight: 500; }

        .select-wrap { position: relative; }
        .select-input { width: 100%; appearance: none; padding-right: 42px; cursor: pointer; }
        .select-input:invalid { color: var(--navy-45); }
        .select-chevron { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: var(--navy-70); pointer-events: none; }

        .segmented { display: flex; flex-wrap: wrap; gap: 8px; }
        .segment {
          border: 1.5px solid var(--border); background: var(--cream); border-radius: 10px;
          padding: 9px 14px; font-size: 13.5px; font-weight: 500; color: var(--navy-70);
          transition: all 0.16s ease;
        }
        .segment:hover { border-color: var(--crimson); color: var(--navy); }
        .segment-active { background: var(--navy); border-color: var(--navy); color: var(--bg-base); }

        .chip-group { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          border: 1.5px solid var(--border); background: var(--cream); border-radius: 999px;
          padding: 8px 15px; font-size: 13px; font-weight: 500; color: var(--navy-70);
          transition: all 0.16s ease;
        }
        .chip:hover { border-color: var(--crimson); color: var(--navy); transform: translateY(-1px); }
        .chip-active { background: var(--saffron-deep); border-color: var(--saffron-deep); color: var(--navy); }

        .form-fineprint { font-size: 12px; color: var(--navy-45); text-align: center; margin-top: 12px; }

        .success-card { text-align: center; padding: 60px 34px; }
        .success-icon {
          width: 56px; height: 56px; border-radius: 50%; background: var(--crimson); color: #fff;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 18px;
        }
        .success-card h3 { font-size: 22px; margin-bottom: 10px; }
        .success-card p { color: var(--navy-70); font-size: 14.5px; max-width: 340px; margin: 0 auto 22px; }

        @media (max-width: 560px) {
          .form-card { padding: 24px; }
          .form-grid { grid-template-columns: 1fr; }
        }

        /* ---------- trust ---------- */
        .trust { padding: 10px 28px 70px; }
        .trust-inner {
          max-width: 900px; margin: 0 auto; text-align: center;
          background: var(--cream); color: var(--navy); border-radius: 26px; padding: 46px 40px;
          border: 1px solid var(--border); box-shadow: var(--shadow-soft);
        }
        .trust-headline { display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 17px; font-weight: 600; margin-bottom: 44px; color: var(--navy); }
        .trust-headline svg { color: var(--crimson); }
        .trust-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 18px 40px; }
        .trust-item { display: flex; align-items: center; gap: 9px; font-size: 14px; font-weight: 500; color: var(--navy-70); }
        .trust-item svg { color: var(--crimson); }

        /* ---------- footer ---------- */
        .footer { border-top: 1px solid var(--border); padding: 26px 28px; }
        .footer-inner {
          max-width: 1180px; margin: 0 auto; display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 16px;
        }
        .footer-brand { display: flex; align-items: center; gap: 8px; }
        .footer-links { display: flex; gap: 20px; }
        .footer-links a { font-size: 13.5px; color: var(--navy-70); }
        .footer-links a:hover { color: var(--navy); }
        .footer-copy { font-size: 12.5px; color: var(--navy-45); }
      `}</style>

      <Navbar />
      <HeroSection reduced={reduced} />

      <section className="contact-section" id="contact-form">
        <ContactBenefits reduced={reduced} />
        <Reveal reduced={reduced} style={{ transitionDelay: reduced ? "0ms" : "120ms" }}>
          <ContactForm reduced={reduced} />
        </Reveal>
      </section>

      <TrustSection reduced={reduced} />
      <Footer />
    </div>
  );
}
