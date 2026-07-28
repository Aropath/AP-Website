import {
  BarChart3,
  Sparkles,
  Target,
  FileText,
  Zap,
  TrendingUp,
} from "lucide-react";
import type { StatItem, Testimonial, FeatureItem } from "@/types";

export const TRUSTED_COMPANIES = [
  "FENWICK", "STUDIO NINE", "VOLT", "NORTHBEAM", "GREYLIST", "ORBITAL",
];

export const CORE_VALUES = [
  {
    icon: Sparkles,
    title: "Built to Interpret, Not Just Collect",
    description:
      "We believe software should make sense of what it captures, not just store it. We show you answers, not just numbers.",
  },
  {
    icon: Target,
    title: "Action-Oriented Content",
    description:
      "Everything we build comes with a clear next step — so you always know what to fix, ship, or change.",
  },
  {
    icon: TrendingUp,
    title: "Automated Growth Loop",
    description:
      "Every system we build adapts on its own terms — continuously, and without the need for manual oversight.",
  },
  {
    icon: FileText,
    title: "Quiet, Simple Reports",
    description:
      "Board-ready and team-ready reports that generate themselves, keeping everyone aligned without custom slides.",
  },
];

export const PRODUCTS_OVERVIEW: FeatureItem[] = [
  {
    icon: BarChart3,
    title: "Smart Website Analytics",
    description:
      "The core numbers, tracked automatically and tied directly to your business revenue metrics.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "AroPath reads visitor session logs and trends so your team doesn't have to manually dig for patterns.",
  },
  {
    icon: Target,
    title: "Living Growth Plans",
    description:
      "An automated action checklist that prioritises tasks based on estimated ROI and revenue lift.",
  },
  {
    icon: FileText,
    title: "Automated Reports",
    description:
      "Weekly and monthly PDF summaries generated automatically, keeping your stakeholders informed without formatting effort.",
  },
];

export const PLATFORM_BENEFITS = [
  {
    title: "Score by revenue, not noise",
    description:
      "Every visitor session is scored by its impact on checkout and signups, rather than simple page views.",
  },
  {
    title: "Checklist over dashboards",
    description:
      "Instead of staring at dozens of charts, you get a clear, prioritized checklist of tasks to work through.",
  },
  {
    title: "Reports that write themselves",
    description:
      "Deliver beautiful, comprehensive growth reports to your leadership team without exporting data manually.",
  },
];

export const STATS: StatItem[] = [
  { label: "Sites tracked", value: 2400, suffix: "+" },
  { label: "Avg. conversion lift", value: 38, suffix: "%" },
  { label: "Avg. setup time", value: 6, suffix: " min" },
  { label: "Customer rating", value: 4.8, suffix: "/5" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We replaced two dashboards and a weekly spreadsheet with AroPath's checklist alone.",
    name: "Priya Nair",
    role: "Head of Growth",
    company: "Fenwick",
    initials: "PN",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "The AI insights caught a checkout bottleneck our own team had missed for months.",
    name: "Tom Rijkers",
    role: "Founder",
    company: "Studio Nine",
    initials: "TR",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "Monthly reporting used to take a full day. Now it's already in my inbox.",
    name: "Elena Petrova",
    role: "Marketing Lead",
    company: "Volt Commerce",
    initials: "EP",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
  },
];

export const PHILOSOPHY_POINTS = [
  {
    title: "Mission",
    description:
      "To turn direction into software, insight, and product — so businesses act with clarity instead of guessing.",
  },
  {
    title: "Vision",
    description:
      "A world where growth is something businesses build, not just something they hope for.",
  },
];
