import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FOOTER_LINKS } from "@/constants/nav";
import { Twitter, Github, Linkedin } from "lucide-react";

const columns = [
  { title: "Product", links: FOOTER_LINKS.product },
  { title: "Company", links: FOOTER_LINKS.company },
  { title: "Resources", links: FOOTER_LINKS.resources },
  { title: "Legal", links: FOOTER_LINKS.legal },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-secondary">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink">
              <svg className="h-6 w-6" viewBox="0 0 26 26" fill="none">
                <path
                  d="M2 20 C 7 20, 7 8, 12 8 C 17 8, 15 16, 20 16 C 22.5 16, 23 13, 24 11"
                  className="stroke-saffron-logo"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="24" cy="11" r="2" className="fill-teal-logo" />
              </svg>
              <span>AroPath</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              AroPath builds practical AI-powered products that helps people, teams, and organizations solve real problems with greater clarity and confidence.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink/20 hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-ink-muted md:flex-row">
          <p>© {new Date().getFullYear()} AroPath, Inc. All rights reserved.</p>
          <p>Made for teams who&apos;d rather grow than guess.</p>
        </div>
      </Container>
    </footer>
  );
}
