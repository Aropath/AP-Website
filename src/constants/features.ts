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
    title: "Smart, Reliable Software",
    description:
      "The core systems a business depends on, built and maintained automatically, day after day.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "AroPath interprets the data automatically, so your team does not have to spend hours reviewing it manually.",
  },
  {
    icon: Target,
    title: "Living Growth Plans",
    description:
      "A prioritized action plan, continuously refined to reflect the latest conditions, without requiring manual updates.",
  },
];

export const AI_CAPABILITIES: FeatureItem[] = [
  {
    icon: Sparkles,
    title: "Intelligent Websites",
    description: "Modern websites designed for speed, usability, and measurable business impact.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Understand customer behaviour, identify opportunities, and make confident decisions with AI-powered analytics.",
  },
  {
    icon: Target,
    title: "AI Products",
    description: "Practical AI designed to simplify work, automate repetitive tasks, and support better decisions.",
  },
];

export const AUTOMATION_FEATURES = [
  "AI Generated Action Checklist",
  "Custom Software & Product Builds",
  "Estimated Impact & Revenue Forecasts",
  "Progress Tracking & Completion Audits",
  "Automated Weekly & Monthly Summaries",
];

export const ENTERPRISE_FEATURES: FeatureItem[] = [
  {
    icon: Shield,
    title: "Continuous Improvements",
    description: "We regularly improve our products with new features, performance updates, and refinements based on real customer feedback.",
  },
  {
    icon: FileText,
    title: "Automated Reports",
    description: "Receive clear reports that help you stay informed without manually compiling or formatting data.",
  },
  {
    icon: Zap,
    title: "Responsive Technical Support",
    description: "Need help getting started or have a question? Our team is here to help you make the most of every AroPath product.",
  },
];

export const SECURITY_POINTS = [
  { title: "Fast Performance", description: "Responsive products designed for speed and a smooth experience." },
  { title: "Continuous Updates", description: "Regular improvements that enhance features, stability, and performance." },
  { title: "Thoughtful Support", description: "Practical guidance whenever you need help getting the most from our products." },
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
  "Node.js SDK npm package for analytics tracking",
  "Single lightweight HTML script tag snippet for analytics",
  "Rotatable API Keys scoped to separate sandbox and production sites",
  "Raw visitor event exports via standard REST API endpoints",
];

export const USE_CASES: UseCase[] = [
  { tag: "SaaS", title: "Faster platform iteration", description: "Ship features with confidence, backed by data on what's actually working." },
  { tag: "E-Commerce", title: "Online Growth", description: "Create fast digital experiences backed by analytics and performance optimization." },
  { tag: "Enterprises", title: "Business solutions", description: "Custom software, intelligent workflows, and digital platforms built around your business." },
];

export const FEATURES_FAQ: FAQItem[] = [
  {
    question: "How long does it take to get AroPath running?",
    answer: "Most teams are collecting data within 5 minutes of installing the SDK snippet or dropping the script tag onto their site."
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
    question: "Can I generate reports fro different time periods?",
    answer: "Yes, weekly, monthly, quarterly, semi-annually and annually reports can be generated and exported as PDF at any time."
  },
];
