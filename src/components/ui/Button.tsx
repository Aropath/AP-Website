"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-bg hover:bg-ink/90 shadow-soft",
        navy:
          "bg-navy text-white hover:bg-navy-hover shadow-soft",
        accent:
          "bg-saffron text-ink hover:bg-saffron-hover shadow-glow",
        outline:
          "border border-line bg-transparent text-ink hover:bg-card hover:border-ink/20",
        glass:
          "border border-black bg-slate-500/10 backdrop-blur-xl text-ink shadow-soft hover:bg-slate-500/20 hover:border-black hover:shadow-md active:scale-[0.98]",
        ghost: "text-ink hover:bg-saffron/40",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  withArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withArrow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), "group", className)}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
