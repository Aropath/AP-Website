"use client";

import { Search } from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DOCS_NAV } from "@/constants/docs";

export function SearchBar() {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = useMemo(() => {
    const q = value.trim().toLowerCase();
    if (!q) return [];

    const matchedItems: { title: string; sectionTitle: string; slug: string }[] = [];
    for (const section of DOCS_NAV) {
      for (const item of section.items) {
        if (
          item.title.toLowerCase().includes(q) ||
          section.title.toLowerCase().includes(q) ||
          item.slug.toLowerCase().includes(q)
        ) {
          matchedItems.push({
            title: item.title,
            sectionTitle: section.title,
            slug: item.slug,
          });
        }
      }
    }
    return matchedItems;
  }, [value]);

  const handleSelect = (slug: string) => {
    setValue("");
    setIsOpen(false);
    router.push(`/docs/${slug}`);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-muted"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        placeholder="Search documentation..."
        aria-label="Search documentation"
        className="w-full rounded-full border border-line bg-card py-3.5 pl-11 pr-5 text-sm text-ink shadow-soft outline-none transition-colors placeholder:text-ink-muted focus-visible:border-ink/30 focus-visible:ring-2 focus-visible:ring-ink/10"
      />
      <kbd className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-line bg-bg-secondary px-1.5 py-0.5 text-[0.7rem] text-ink-muted">
        ⌘K
      </kbd>

      {isOpen && value.trim() !== "" && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-line bg-card shadow-lg">
          {results.length > 0 ? (
            <ul className="divide-y divide-line py-2 max-h-60 overflow-y-auto">
              {results.map((res) => (
                <li key={res.slug}>
                  <button
                    type="button"
                    onClick={() => handleSelect(res.slug)}
                    className="w-full px-4 py-2.5 text-left hover:bg-bg-secondary transition-colors flex flex-col"
                  >
                    <span className="text-xs text-ink-muted font-medium uppercase tracking-wider">
                      {res.sectionTitle}
                    </span>
                    <span className="text-sm text-ink font-medium mt-0.5">
                      {res.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-ink-muted">
              No documentation results for &quot;{value}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
