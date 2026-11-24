"use client";

import { useState } from "react";

export default function CopyCode({
  label,
  value,
  hint,
  variant = "code",
  action,
}: {
  label: string;
  value: string;
  hint?: string;
  variant?: "code" | "link";
  action?: string;
}) {
  const [copied, setCopied] = useState(false);
  const actionText = action ?? (variant === "link" ? "复制完整链接" : "复制邀请码");

  async function copy() {
    const exact = value;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("no clipboard");
      await navigator.clipboard.writeText(exact);
    } catch {
      const t = document.createElement("textarea");
      t.value = exact;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      t.style.top = "0";
      t.style.left = "0";
      t.style.fontSize = "16px";
      document.body.appendChild(t);
      t.focus();
      t.select();
      t.setSelectionRange(0, exact.length);
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="min-w-0">
      <div className="flex h-12 min-w-0 items-center gap-2 rounded-full border border-line bg-copy py-0.5 pl-3 pr-0.5">
        <code title={value} className="min-w-0 flex-1 truncate font-mono text-[11px] leading-none text-muted">{value}</code>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? `已复制${label}` : `${actionText}：${value}`}
          className={`inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 text-[11px] font-bold ${copied ? "bg-rebate text-rebate-ink" : "bg-ink text-white"}`}
        >
          {copied ? "已复制" : actionText}
        </button>
      </div>
      <span className="sr-only" aria-live="polite">{copied ? `已复制${label}` : ""}</span>
      {hint && <p className="mt-1.5 px-3 text-xs leading-5 text-muted">{hint}</p>}
    </div>
  );
}
