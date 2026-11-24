"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { posts, topics, X_URL, type Post, type TopicId } from "@/lib/content";
import { guides } from "@/lib/guides";
import { Arrow } from "./Icons";
import { matches, postText } from "@/lib/search";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const kindLabel: Record<Post["kind"], string> = { post: "帖子", thread: "长帖", article: "长文", image: "图文" };
const topicLabel = Object.fromEntries(topics.map((t) => [t.id, t.label])) as Record<TopicId, string>;
const topicTone: Record<TopicId, string> = { card: "#ff9d86", ai: "#c7b6ff", indie: "#9ed9da" };
const guideUrls = new Set(guides.map((g) => g.href));

function PostCard({ p }: { p: Post }) {
  return (
    <a href={p.url} {...ext} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-raised)]">
      {p.image && (
        <div className="relative aspect-[2/1] overflow-hidden" style={{ background: p.imageBg ?? "#f6f3ff" }}>
          <img src={p.image} alt="" className="h-full w-full object-contain" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 font-bold">
            <span className="h-2 w-2 rounded-full" style={{ background: topicTone[p.topic] }} aria-hidden />
            {topicLabel[p.topic]}
          </span>
          <span className="text-muted">{kindLabel[p.kind]}</span>
          <time className="ml-auto text-muted">{p.date}</time>
        </div>
        <h3 className="mt-3 text-[17px] font-extrabold leading-snug tracking-tight">{p.title}</h3>
        {p.excerpt && <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{p.excerpt}</p>}
        <span className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-3 text-xs font-bold">
          在 X 上查看 <Arrow className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

export default function Writing({ q = "", embedded = false }: { q?: string; embedded?: boolean }) {
  const [active, setActive] = useState<TopicId | "all">("all");
  const searching = q.trim().length > 0;
  const pool = embedded ? posts.filter((p) => !guideUrls.has(p.url)) : posts;
  const base = searching ? pool.filter((p) => matches(postText(p), q)) : pool;
  const list = active === "all" ? base : base.filter((p) => p.topic === active);
  const activeTopic = topics.find((t) => t.id === active);
  const count = (id: TopicId) => base.filter((p) => p.topic === id).length;

  const chip = (id: TopicId | "all", label: string, n: number) => {
    const on = active === id;
    return (
      <button
        key={id}
        type="button"
        aria-pressed={on}
        onClick={() => setActive(id)}
        className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3.5 text-sm font-bold ${on ? "bg-ink text-white" : "bg-white text-ink"}`}
      >
        {label}
        <span className={`font-mono text-[11px] ${on ? "text-white/80" : "text-muted"}`}>{n}</span>
      </button>
    );
  };

  return (
    <section id="writing" aria-labelledby="writing-title" className="scroll-mt-28 pb-12">
      <div className="mb-4">
        <h2 id="writing-title" className={embedded ? "text-lg font-extrabold" : "text-2xl font-black tracking-tight sm:text-3xl"}>
          {embedded ? "更多 X 上的更新" : "我在写什么"}
        </h2>
        {!embedded && <p className="mt-2 max-w-xl text-sm leading-6 text-muted">都是我在 X 上真实发过的内容，点开直达原帖。</p>}
      </div>

      <div role="group" aria-label="按话题筛选" className="flex flex-wrap gap-2">
        {chip("all", "全部", base.length)}
        {topics.map((t) => chip(t.id, t.label, count(t.id)))}
      </div>

      <p className="mt-3 min-h-6 text-sm leading-6 text-muted" aria-live="polite">
        {activeTopic ? activeTopic.line : "美卡 / ITIN、AI、独立开发，三条线都在 X 上持续更新。"}
      </p>

      {list.length > 0 ? (
        <div className="bento-pair mt-4 grid gap-4 sm:grid-cols-2">
          {list.map((p) => <PostCard key={p.id} p={p} />)}
        </div>
      ) : (
        <a href={X_URL} {...ext} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold underline underline-offset-4">
          这条线的内容整理中，先去 X 看 <Arrow className="h-3.5 w-3.5" />
        </a>
      )}
    </section>
  );
}
