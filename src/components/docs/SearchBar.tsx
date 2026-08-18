"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w-xl">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-muted"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search documentation..."
        aria-label="Search documentation"
        className="w-full rounded-full border border-line bg-card py-3.5 pl-11 pr-5 text-sm text-ink shadow-soft outline-none transition-colors placeholder:text-ink-muted focus-visible:border-ink/30 focus-visible:ring-2 focus-visible:ring-ink/10"
      />
      <kbd className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-md border border-line px-1.5 py-0.5 text-[0.7rem] text-ink-muted">
        ⌘K
      </kbd>
    </div>
  );
}
