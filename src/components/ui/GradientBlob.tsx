import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  variant?: "saffron" | "soft";
}

/** Purely decorative, blurred radial gradient shape. Hidden from assistive tech. */
export function GradientBlob({ className, variant = "saffron" }: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        variant === "saffron" && "bg-saffron/60",
        variant === "soft" && "bg-bg-secondary",
        className
      )}
    />
  );
}
