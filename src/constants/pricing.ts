import type { PricingPlan, FAQItem } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For validating your first growth loop.",
    price: 0,
    billing: "month",
    cta: "Get Started",
    features: [
      "Up to 5,000 visits/month",
      "Smart website analytics",
      "Weekly automated reports",
      "1 tracking ID",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For teams actively working the checklist.",
    price: 79,
    billing: "month",
    cta: "Get Started",
    highlighted: true,
    features: [
      "Up to 100,000 visits/month",
      "AI-powered insights",
      "Growth plans + ROI estimation",
      "Automated weekly & monthly reports",
      "3 tracking IDs",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For multi-site portfolios and agencies.",
    price: "custom",
    billing: "month",
    cta: "Talk to Sales",
    features: [
      "Unlimited visits",
      "Dedicated success manager",
      "Custom report branding",
      "Unlimited tracking IDs",
      "SSO & audit logs",
    ],
  },
];

export const COMPARISON_FEATURES = [
  { feature: "Active tracking IDs", starter: "1", professional: "3", enterprise: "Unlimited" },
  { feature: "Monthly visits", starter: "5,000", professional: "100,000", enterprise: "Unlimited" },
  { feature: "AI-powered insights", starter: "—", professional: "Included", enterprise: "Included" },
  { feature: "Automated reports", starter: "Weekly", professional: "Weekly & Monthly", enterprise: "Custom / On-demand" },
  { feature: "White-label branding", starter: "—", professional: "—", enterprise: "Included" },
  { feature: "SSO & audit logs", starter: "—", professional: "—", enterprise: "Included" },
  { feature: "Support", starter: "Community", professional: "Priority email", enterprise: "Dedicated Manager" },
];

export const PRICING_FAQ: FAQItem[] = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time directly from your account billing settings.",
  },
  {
    question: "What counts as a visit?",
    answer: "A visit is one unique user session on your website. We do not count multiple pageviews in a single session as separate visits.",
  },
  {
    question: "Do you offer annual discounts?",
    answer: "Yes! If you choose annual billing, you will save 15% on the Professional and Enterprise plans.",
  },
  {
    question: "How do I add more tracking IDs?",
    answer: "Professional plans support up to 3 tracking IDs. If you need more, you can upgrade to Enterprise or contact our support team to purchase extra slots.",
  },
];
