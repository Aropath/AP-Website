import React from "react";

function LogoIcon({ name }: { name: string }) {
  const cleanName = name.toUpperCase();
  
  if (cleanName.includes("FENWICK")) {
    return (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="3" rx="1"/>
        <rect x="4" y="10" width="12" height="3" rx="1"/>
        <rect x="4" y="4" width="3" height="16" rx="1"/>
      </svg>
    );
  }
  if (cleanName.includes("STUDIO NINE")) {
    return (
      <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 8v8M8 12h8" strokeLinecap="round"/>
      </svg>
    );
  }
  if (cleanName.includes("VOLT")) {
    return (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }
  if (cleanName.includes("NORTHBEAM")) {
    return (
      <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 22l10-4 10 4z" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (cleanName.includes("GREYLIST")) {
    return (
      <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
      </svg>
    );
  }
  if (cleanName.includes("ORBITAL")) {
    return (
      <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.15"/>
        <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
      </svg>
    );
  }
  
  // Default placeholder icon
  return (
    <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l3 6 6 1-4.5 4.5 1 6-5.5-3-5.5 3 1-6L2 9l6-1z"/>
    </svg>
  );
}

export function LogoMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Trusted by companies"
    >
      <div className="flex w-max animate-marquee gap-16 py-2">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-display text-base font-semibold tracking-wide text-ink-muted/65 hover:text-ink/80 transition-colors"
            aria-hidden={i >= items.length}
          >
            <LogoIcon name={name} />
            <span>{name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
