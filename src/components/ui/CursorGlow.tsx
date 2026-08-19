"use client";

/**
 * Static decorative glow.
 *
 * This component no longer follows the cursor.
 * It simply renders a soft glow in a fixed position
 * inside its parent section.
 */
export function CursorGlow({
  className = "",
}: {
  boundsId?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-r from-[lightgoldenrodyellow]/80 via-[#f7e7a3]/70 to-[lightgoldenrodyellow]/80 blur-[95px] ${className}`}
    />
  );
}