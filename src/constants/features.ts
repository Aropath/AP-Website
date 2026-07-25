import {
  BarChart3,
  Sparkles,
  Target,
  FileText,
  Code2,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import type { FeatureItem, FAQItem, UseCase } from "@/types";

export const FEATURE_OVERVIEW: FeatureItem[] = [
  {
    icon: BarChart3,
    title: "Smart Website Analytics",
    description:
      "The core numbers, tracked automatically and tied directly to business revenue outcomes.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "AroPath automatically reads the data so your team doesn't have to spend hours interpreting charts.",
  },
  {
    icon: Target,
    title: "Living Growth Plans",
    description:
      "A prioritized action checklist that automatically updates as your site traffic and behavior shifts.",
  },
];

export const AI_CAPABILITIES: FeatureItem[] = [
  {
    icon: Sparkles,
    title: "Revenue Opportunities",
    description: "Identify high-value pages causing drop-offs and see the immediate revenue impact of a fix.",
  },
  {
    icon: TrendingUp,
    title: "Bottleneck Detection",
    description: "Catch check-out issues, broken script loads, or slow load times before they impact conversions.",
  },
  {
    icon: Target,
    title: "Prioritized Recommendations",
    description: "AroPath prioritises issues by their potential ROI, giving you a clear path forward.",
  },
];

export const AUTOMATION_FEATURES = [
  "AI Generated Action Checklist",
  "Estimated ROI & Revenue Forecasts",
  "Progress Tracking & Completion Audits",
  "Automated Weekly & Monthly PDF Summaries",
  "Customizable Report Triggers for Stakeholders",
];

export const ENTERPRISE_FEATURES: FeatureItem[] = [
  {
    icon: Shield,
    title: "SSO & Audit Logs",
    description: "Secure your team's access with SAML Single Sign-On and maintain clear logs of all plan updates.",
  },
  {
    icon: FileText,
    title: "Custom Report Branding",
    description: "White-label reports with your company's branding, logos, and custom color palettes.",
  },
  {
    icon: Zap,
    title: "Dedicated Success Manager",
    description: "Direct engineering support for complex setups, custom events tracking, and SDK optimizations.",
  },
];

export const SECURITY_POINTS = [
  { title: "SAML SSO Support", description: "Enforce company-wide identity policies for all project spaces." },
  { title: "Encrypted Data", description: "All visitor data is encrypted in transit and at rest with TLS 1.3 and AES-256." },
  { title: "Immutable Audit Logs", description: "Every setting change, report export, and checklist edit is logged permanently." },
];

export const ANALYTICS_FEATURES: FeatureItem[] = [
  {
    icon: BarChart3,
    title: "Visitor Tracking & Sessions",
    description: "Understand end-to-end user sessions and behavioral flows across multiple visits.",
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    description: "Track conversions, signups, checkouts, and custom event goals without code changes.",
  },
  {
    icon: TrendingUp,
    title: "Engagement Metrics",
    description: "Measure bounce rates, active focus time, scroll depth, and interaction frequencies.",
  },
];

export const INTEGRATIONS = [
  "Salesforce", "Shopify", "Stripe", "HubSpot", "Google Analytics", "Segment",
  "WordPress", "Webflow", "Framer", "React SDK", "Next.js", "Vue",
];

export const DEVELOPER_FEATURES = [
  "Node.js SDK npm package for server-side analytics tracking",
  "Single lightweight HTML script tag snippet for frontend analytics",
  "Rotatable API Keys scoped to separate sandbox and production sites",
  "Raw visitor event exports via standard REST API endpoints",
];

export const USE_CASES: UseCase[] = [
  { tag: "SaaS", title: "Signup funnel optimisation", description: "Find out exactly where prospects drop off in your registration flow and increase conversion." },
  { tag: "E-Commerce", title: "Checkout drop-off recovery", description: "Identify checkout errors, payment gateway slow-downs, and optimize overall basket size." },
  { tag: "Agencies", title: "Automated client reporting", description: "Provide professional, white-labelled PDF summaries directly to your clients every single month." },
];

export const FEATURES_FAQ: FAQItem[] = [
  {
    question: "How long does it take to get AroPath running?",
    answer: "Most teams are collecting data within 6 minutes of installing the SDK snippet or dropping the script tag onto their site."
  },
  {
    question: "Does AroPath work with my current stack?",
    answer: "Yes — AroPath sits alongside your CMS, storefront, or custom app via a single script tag or npm package."
  },
  {
    question: "How is my visitor data protected?",
    answer: "All data is encrypted in transit and at rest, and API keys can be scoped and rotated at any time to preserve security."
  },
  {
    question: "How does AroPath decide what to recommend?",
    answer: "Sessions are scored against conversion and revenue outcomes, then ranked so the highest-impact fix appears first."
  },
  {
    question: "Can I customize what goes into my reports?",
    answer: "Yes, weekly and monthly reports can be filtered by specific metrics or date ranges, and exported as PDF at any time."
  },
];
