"use client";

import { useState } from "react";

export default function CopyCode({ label, value, hint }: { label: string; value: string; hint?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const t = document.createElement("textarea");
      t.value = value;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div>
    <div className="flex items-stretch overflow-hidden border border-ink/80 bg-white">
      <div className="min-w-0 flex-1 px-3.5 py-2">
        <div className="font-mono text-[10px] font-bold tracking-[0.14em] text-muted">{label}</div>
        <div className="truncate font-mono text-xl font-extrabold tracking-[0.18em] text-ink slashed-zero">{value}</div>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`复制${label} ${value}`}
        className={`flex min-h-12 min-w-[92px] shrink-0 items-center justify-center gap-1.5 px-4 text-sm font-bold transition ${
          copied ? "bg-[#3ad6ff] text-ink" : "bg-ink text-paper hover:bg-[#1d2a6b]"
        }`}
      >
        {copied ? (
          <>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12.5 10 17 19 7" /></svg>
            已复制
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="1.5" /><path d="M5 15V5a1 1 0 0 1 1-1h10" /></svg>
            复制
          </>
        )}
      </button>
      <span className="sr-only" aria-live="polite">{copied ? "已复制推荐码" : ""}</span>
    </div>
    {hint && <p className="mt-1.5 font-mono text-[11px] text-muted">{hint}</p>}
    </div>
  );
}
