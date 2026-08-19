import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  variant?: "saffron" | "soft" | "blush";
}

/**
 * Purely decorative, fixed gradient shape.
 * Stays in place and does not follow the cursor.
 */
export function GradientBlob({
  className,
  variant = "saffron",
}: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        "select-none",

        variant === "saffron" && "bg-saffron/60",
        variant === "soft" && "bg-saffron/20",
        variant === "blush" && "bg-[#F5E9BA]/85",

        className
      )}
    />
  );
}