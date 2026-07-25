import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
    { label: "API Reference", href: "/docs#api-reference" },
  ],
  company: [
    { label: "About", href: "/#about" },
    { label: "Careers", href: "/#careers" },
    { label: "Contact", href: "/#contact" },
  ],
  resources: [
    { label: "Help Center", href: "/docs#help" },
    { label: "Guides", href: "/docs#guides" },
    { label: "Changelog", href: "/docs#changelog" },
    { label: "Status", href: "/status" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};
