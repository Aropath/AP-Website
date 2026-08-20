"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DOCS_NAV } from "@/constants/docs";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const currentSlug = pathname.replace(/^\/docs\/?/, "") || "";

  return (
    <>
      {/* Mobile Topic Selector */}
      <div className="mb-6 block lg:hidden">
        <label htmlFor="mobile-docs-nav" className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
          Documentation Topic
        </label>
        <select
          id="mobile-docs-nav"
          value={currentSlug}
          onChange={(e) => {
            if (e.target.value) {
              router.push(`/docs/${e.target.value}`);
            } else {
              router.push("/docs");
            }
          }}
          className="w-full rounded-xl border border-line bg-card py-2.5 px-4 text-sm font-medium text-ink shadow-soft outline-none focus:border-ink/30"
        >
          <option value="">Overview</option>
          {DOCS_NAV.map((section) => (
            <optgroup key={section.slug} label={section.title}>
              {section.items.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Desktop Sidebar */}
      <nav aria-label="Documentation" className="sticky top-28 hidden w-60 shrink-0 lg:block">
        <ul className="flex flex-col gap-6">
          {DOCS_NAV.map((section) => (
            <li key={section.slug}>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
                {section.title}
              </p>
              <ul className="flex flex-col gap-0.5 border-l border-line">
                {section.items.map((item) => {
                  const href = `/docs/${item.slug}`;
                  const isActive = pathname === href;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        className={cn(
                          "-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors",
                          isActive
                            ? "border-ink font-medium text-ink"
                            : "border-transparent text-ink-muted hover:border-line hover:text-ink"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
