"use client";
import { useEffect } from "react";
import { legacyHashMap } from "@/lib/content";

// 旧版单页锚点（/#referrals、/#ref-ai、/#referral-xxx、/#writing…）跳到新页面
export default function LegacyHash() {
  useEffect(() => {
    const go = () => {
      const h = decodeURIComponent(window.location.hash.slice(1));
      if (!h) return;
      const to = legacyHashMap[h] ?? (h.startsWith("referral-") ? `/referrals/#${h}` : null);
      if (to) window.location.replace(to);
    };
    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, []);
  return null;
}
