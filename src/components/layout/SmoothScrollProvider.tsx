"use client";

import { useLenis } from "@/hooks/useLenis";
import type { ReactNode } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
