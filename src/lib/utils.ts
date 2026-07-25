import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a number with a "+" style suffix used across statistic counters. */
export function formatStat(value: number, suffix = ""): string {
  return `${value.toLocaleString("en-US")}${suffix}`;
}
