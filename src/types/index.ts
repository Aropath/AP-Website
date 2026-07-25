import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number | "custom";
  billing: "month" | "year";
  cta: string;
  highlighted?: boolean;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DocsSection {
  title: string;
  slug: string;
  items: { title: string; slug: string }[];
}

export interface UseCase {
  title: string;
  description: string;
  tag: string;
}
