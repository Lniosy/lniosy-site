"use client";

import { useEffect, useRef, useState } from "react";
import { posts, referrals } from "@/lib/content";
import { matches, postText, referralText } from "@/lib/search";
import Writing from "./Writing";
import Referrals from "./Referrals";

export default function SiteSearch({ only, embedded = false }: { only?: "referrals" | "posts"; embedded?: boolean }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("q");
    if (!v) return;
    const id = window.setTimeout(() => setQ(v), 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (q.trim()) url.searchParams.set("q", q);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url.toString());
  }, [q]);

  const active = q.trim().length > 0;
  const nRef = only === "posts" ? 0 : active ? referrals.filter((r) => matches(referralText(r), q)).length : referrals.length;
  const nPost = only === "referrals" ? 0 : active ? posts.filter((p) => matches(postText(p), q)).length : posts.length;
  const none = active && nRef + nPost === 0;

  return (
    <>
      <div id="search" className="mb-5">
        <form role="search" onSubmit={(e) => { e.preventDefault(); input.current?.blur(); }} className="relative">
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input
            ref={input}
            type="search"
            enterKeyHint="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={only === "referrals" ? "搜卡片 / 邀请码" : only === "posts" ? "搜文章" : "搜卡片 / 邀请码 / 文章"}
            aria-label="搜索全站邀请卡片和文章"
            className="min-h-12 w-full rounded-full border border-line bg-white py-2 pl-12 pr-24 text-base text-ink outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden"
          />
          {active && (
            <button type="button" onClick={() => { setQ(""); input.current?.focus(); }} className="absolute right-1 top-1/2 inline-flex min-h-11 -translate-y-1/2 items-center rounded-full bg-ink px-3 text-sm font-bold text-white" aria-label="清除搜索">
              清除
            </button>
          )}
        </form>
        <p className="mt-2 min-h-5 px-3 text-xs text-muted" aria-live="polite">
          {active && <>找到 {only !== "posts" && <><b className="text-ink">{nRef}</b> 张邀请卡</>}{!only && " · "}{only !== "referrals" && <><b className="text-ink">{nPost}</b> 篇内容</>}</>}
        </p>
      </div>

      {none ? (
        <div className="mb-12 rounded-3xl bg-white px-6 py-12 text-center shadow-[var(--shadow-raised)]">
          <p className="text-xl font-extrabold">没找到相关内容</p>
          <p className="mt-2 text-sm text-muted">换个关键词试试，比如「U卡」「Wise」「ITIN」</p>
          <button type="button" onClick={() => setQ("")} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-bold text-white">清除搜索</button>
        </div>
      ) : (
        <>
          {only !== "referrals" && (!active || nPost > 0) && <Writing q={q} embedded={embedded} />}
          {only !== "posts" && (!active || nRef > 0) && <Referrals q={q} />}
        </>
      )}
    </>
  );
}
