"use client";

import { useEffect, useRef, useState } from "react";
import { posts, referrals } from "@/lib/content";
import { matches, postText, referralText } from "@/lib/search";
import Writing from "./Writing";
import Referrals from "./Referrals";

const hints = ["U卡", "Wise", "ITIN", "邀请码", "Claude"];

export default function SiteSearch() {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("q");
    if (v) setQ(v);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (q.trim()) url.searchParams.set("q", q);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url.toString());
  }, [q]);

  const active = q.trim().length > 0;
  const nRef = active ? referrals.filter((r) => matches(referralText(r), q)).length : referrals.length;
  const nPost = active ? posts.filter((p) => matches(postText(p), q)).length : posts.length;
  const none = active && nRef + nPost === 0;

  return (
    <>
      <div id="search" className="sticky top-[73px] z-20 -mx-5 mb-10 border-y border-line bg-paper/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8">
        <form role="search" onSubmit={(e) => { e.preventDefault(); input.current?.blur(); }} className="relative">
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input
            ref={input}
            type="search"
            enterKeyHint="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="搜卡片、邀请码、链接、文章…  如 U卡 / Wise"
            aria-label="搜索全站邀请卡片和文章"
            className="h-14 w-full border-2 border-ink bg-white pl-12 pr-24 text-base font-semibold text-ink shadow-[4px_4px_0_#111214] outline-none placeholder:font-normal placeholder:text-muted focus:shadow-[4px_4px_0_#3ad6ff] [&::-webkit-search-cancel-button]:hidden"
          />
          {active && (
            <button type="button" onClick={() => { setQ(""); input.current?.focus(); }} className="absolute right-2 top-1/2 inline-flex h-10 -translate-y-1/2 items-center gap-1 bg-ink px-3 text-sm font-bold text-paper hover:bg-[#1d2a6b]" aria-label="清除搜索">
              ✕ 清除
            </button>
          )}
        </form>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted" aria-live="polite">
          {active ? (
            <span>找到 <b className="text-ink">{nRef}</b> 张邀请卡 · <b className="text-ink">{nPost}</b> 篇内容</span>
          ) : (
            <>
              <span>试试：</span>
              {hints.map((h) => (
                <button key={h} type="button" onClick={() => setQ(h)} className="min-h-7 border border-ink/15 bg-[#fffffc] px-2 font-bold text-ink hover:border-ink">{h}</button>
              ))}
            </>
          )}
        </div>
      </div>

      {none ? (
        <div className="mb-16 border-2 border-dashed border-ink/25 px-6 py-14 text-center">
          <p className="text-xl font-extrabold">没找到相关内容</p>
          <p className="mt-2 text-sm text-muted">换个关键词试试，比如「U卡」「Wise」「ITIN」</p>
          <button type="button" onClick={() => setQ("")} className="mt-5 inline-flex min-h-11 items-center bg-ink px-5 text-sm font-bold text-paper">清除搜索</button>
        </div>
      ) : (
        <>
          {(!active || nPost > 0) && <Writing q={q} />}
          {(!active || nRef > 0) && <Referrals q={q} />}
        </>
      )}
    </>
  );
}
