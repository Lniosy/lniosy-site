"use client";

import { useEffect, useRef, useState } from "react";
import { topics, X_URL, type TopicId } from "@/lib/content";
import { guideCategories, guides, morePosts } from "@/lib/guides";
import { guideText, matches, postText } from "@/lib/search";
import GuideCard from "./GuideCard";
import { Arrow } from "./Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const topicLabel = Object.fromEntries(topics.map((t) => [t.id, t.label])) as Record<TopicId, string>;

export default function GuideDirectory() {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const skipUrlWrite = useRef(true);

  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("q");
    if (!v) return;
    const id = window.setTimeout(() => setQ(v), 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (skipUrlWrite.current) {
      skipUrlWrite.current = false;
      return;
    }
    const url = new URL(window.location.href);
    if (q.trim()) url.searchParams.set("q", q);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url.toString());
  }, [q]);

  const active = q.trim().length > 0;
  const visible = active ? guides.filter((g) => matches(guideText(g), q)) : guides;
  const more = active ? morePosts.filter((p) => matches(postText(p), q)) : morePosts;
  const none = active && visible.length === 0 && more.length === 0;

  return (
    <>
      <form role="search" onSubmit={(e) => { e.preventDefault(); input.current?.blur(); }} className="relative mt-5">
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <input
          ref={input}
          type="search"
          enterKeyHint="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜教程 / 动态"
          aria-label="搜索教程和动态"
          className="min-h-12 w-full rounded-full border border-line bg-white py-2 pl-12 pr-24 text-base text-ink outline-none placeholder:text-muted [&::-webkit-search-cancel-button]:hidden"
        />
        {active && (
          <button type="button" onClick={() => { setQ(""); input.current?.focus(); }} className="absolute right-1 top-1/2 inline-flex min-h-11 -translate-y-1/2 items-center rounded-full bg-ink px-3 text-sm font-bold text-white" aria-label="清除搜索">
            清除
          </button>
        )}
      </form>
      <p className="mt-2 min-h-5 px-3 text-xs text-muted" aria-live="polite">
        {active && <>找到 <b className="text-ink">{visible.length}</b> 篇教程 · <b className="text-ink">{more.length}</b> 条动态</>}
      </p>

      {none ? (
        <div className="mt-4 rounded-3xl bg-white px-6 py-12 text-center shadow-[var(--shadow-raised)]">
          <p className="text-xl font-extrabold">没找到相关内容</p>
          <p className="mt-2 text-sm text-muted">换个关键词试试，比如「嘉信」「Muse」「手机号」</p>
          <button type="button" onClick={() => setQ("")} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-bold text-white">清除搜索</button>
        </div>
      ) : (
        <>
          {guideCategories.map((cat) => {
            const items = visible.filter((g) => g.category === cat.id);
            if (!items.length) return null;
            return (
              <section key={cat.id} id={cat.id} aria-labelledby={`cat-${cat.id}`} className="mt-8 scroll-mt-28">
                <h2 id={`cat-${cat.id}`} className="text-xl font-black tracking-tight">{cat.label}</h2>
                <ul className="mt-3 grid gap-4 md:grid-cols-2">
                  {items.map((g) => (
                    <li key={g.id} className={items.length === 1 ? "min-w-0 md:col-span-2" : "min-w-0"}>
                      <GuideCard guide={g} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          {more.length > 0 && (
            <section id="writing" aria-labelledby="writing-title" className="mt-10 scroll-mt-28 pb-4">
              <h2 id="writing-title" className="text-xl font-black tracking-tight">更多动态</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">更早的 X 动态，和上面的常青教程分开。没有文章封面的只列文字，点开仍是原帖。</p>
              <ul className="mt-4 overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-raised)]">
                {more.map((p) => (
                  <li key={p.id} className="border-t border-line first:border-t-0">
                    <a href={p.url} {...ext} className="flex min-h-11 min-w-0 flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="min-w-0">
                        <span className="text-xs font-bold text-muted">{topicLabel[p.topic]} · <time>{p.date}</time></span>
                        <span className="mt-0.5 block font-extrabold leading-snug">{p.title}</span>
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold">
                        去 X 阅读 <Arrow className="h-3.5 w-3.5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {!active && (
            <p className="mt-6 text-sm text-muted">
              目录里没有的，去 <a href={X_URL} {...ext} className="font-bold text-ink underline underline-offset-4">x.com/Lniosytest</a> 看时间线。
            </p>
          )}
        </>
      )}
    </>
  );
}
