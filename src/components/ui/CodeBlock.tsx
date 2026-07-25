"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "bash", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl2 border border-line/60 bg-ink text-bg",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-bg/10 px-4 py-2.5">
        <span className="font-mono text-xs uppercase tracking-wider text-bg/50">
          {language}
        </span>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-bg/60 transition-colors hover:bg-bg/10 hover:text-bg"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[0.85rem] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
