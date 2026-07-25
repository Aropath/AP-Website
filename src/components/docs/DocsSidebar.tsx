"use client";

import { useState } from "react";
import { DOCS_NAV } from "@/constants/docs";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const [active, setActive] = useState("quick-start");

  return (
    <nav aria-label="Documentation" className="sticky top-28 hidden w-60 shrink-0 lg:block">
      <ul className="flex flex-col gap-6">
        {DOCS_NAV.map((section) => (
          <li key={section.slug}>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
              {section.title}
            </p>
            <ul className="flex flex-col gap-0.5 border-l border-line">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`#${item.slug}`}
                    onClick={() => setActive(item.slug)}
                    className={cn(
                      "-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors",
                      active === item.slug
                        ? "border-ink font-medium text-ink"
                        : "border-transparent text-ink-muted hover:border-line hover:text-ink"
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
