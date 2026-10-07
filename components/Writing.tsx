"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { posts, topics, X_URL, type Post, type TopicId } from "@/lib/content";
import { Arrow } from "./Icons";
import { matches, postText } from "@/lib/search";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const kindLabel: Record<Post["kind"], string> = { post: "帖子", thread: "长帖", article: "长文", image: "图文" };
const topicLabel = Object.fromEntries(topics.map((t) => [t.id, t.label])) as Record<TopicId, string>;
const topicAccent: Record<TopicId, string> = { card: "#c8f04a", ai: "#b6ccff", indie: "#ffb56b", miniapp: "#f2db55" };

function PostCard({ p, layout }: { p: Post; layout: boolean }) {
  const lead = layout && !!p.lead;
  const big = layout && p.featured && !!p.image;
  return (
    <a
      href={p.url}
      {...ext}
      className={`group relative flex flex-col overflow-hidden border border-line bg-[#fffffce6] transition hover:-translate-y-1 hover:border-ink/40 hover:bg-white hover:shadow-[0_14px_30px_-10px_#11121433] ${
        lead ? "border-ink md:col-span-2 lg:col-span-6" : big ? "md:col-span-1 lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      {p.image && (
        <div className="relative aspect-[2/1] overflow-hidden border-b border-line" style={{ background: p.imageBg ?? "#f6f2e8" }}>
          <img src={p.image} alt="" className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]" />
        </div>
      )}
      {lead && <span aria-hidden className="absolute inset-y-0 left-0 w-1.5" style={{ background: topicAccent[p.topic] }} />}
      <div className={`flex flex-1 flex-col p-5 ${lead ? "pl-6 sm:p-7 sm:pl-8" : ""}`}>
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide">
          <span className="inline-flex items-center gap-1.5 font-bold text-ink">
            <span className="h-2 w-2" style={{ background: topicAccent[p.topic] }} aria-hidden />
            {topicLabel[p.topic]}
          </span>
          <span className="text-ink/25">/</span>
          {p.lead ? (
            <span className="bg-ink px-1.5 py-0.5 font-bold text-paper">{kindLabel[p.kind]}</span>
          ) : (
            <span className="text-muted">{kindLabel[p.kind]}</span>
          )}
          {lead && <span className="hidden border border-ink/20 px-1.5 py-0.5 font-bold text-ink sm:inline">最新</span>}
          <time className="ml-auto text-muted">{p.date}</time>
        </div>
        <h3 className={`mt-3 font-extrabold leading-snug tracking-tight ${lead ? "text-xl [text-wrap:balance] sm:text-2xl lg:text-[28px]" : big ? "text-xl sm:text-[22px]" : "text-[17px]"}`}>{p.title}</h3>
        {p.excerpt && <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{p.excerpt}</p>}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold text-muted group-hover:text-ink">
          {p.lead ? "在 X 上读全文" : "在 X 上看原帖"} <Arrow className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

export default function Writing({ q = "" }: { q?: string }) {
  const [active, setActive] = useState<TopicId | "all">("all");
  const searching = q.trim().length > 0;
  const base = searching ? posts.filter((p) => matches(postText(p), q)) : posts;
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
        className={`inline-flex min-h-11 w-full items-center justify-between gap-2 whitespace-nowrap border px-3.5 text-[13px] font-bold transition sm:w-auto ${
          on ? "border-ink bg-ink text-paper" : "border-ink/15 bg-[#fffffc] text-ink hover:border-ink"
        }`}
      >
        {label}
        <span className={`grid h-5 min-w-5 place-items-center rounded-full px-1 font-mono text-[10px] ${on ? "bg-paper text-ink" : "bg-ink/[0.08] text-ink/70"}`}>{n}</span>
      </button>
    );
  };

  return (
    <section id="writing" aria-labelledby="writing-title" className="scroll-mt-20 pb-16">
      <div className="mb-6 flex flex-col justify-between gap-3 border-t border-line pt-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted">内容 / 文章</p>
          <h2 id="writing-title" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">我在写什么</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">都是我在 X 上真实发过的内容，点开直达原帖。均为个人经验，具体规则以官方为准。</p>
      </div>

      <div role="group" aria-label="按话题筛选" className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        <div className="col-span-2 sm:col-span-1">{chip("all", "全部", base.length)}</div>
        {topics.map((t) => chip(t.id, t.label, count(t.id)))}
      </div>

      <p className="mt-4 min-h-6 text-sm leading-6 text-muted" aria-live="polite">
        {activeTopic ? activeTopic.line : "美卡 / ITIN、AI、独立开发和微信小程序，四条线都在 X 上持续更新。"}
      </p>

      {list.length > 0 ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {list.map((p) => (
            <PostCard key={p.id} p={p} layout={active === "all" && !searching} />
          ))}
        </div>
      ) : (
        <a href={X_URL} {...ext} className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-ink/40 text-sm font-bold hover:border-ink">
          这条线的内容整理中，先去 X 看 <Arrow className="h-3.5 w-3.5" />
        </a>
      )}

      {/* 小程序：没有真实帖子，只保留一行简介 */}
      <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border border-dashed border-line px-4 py-3 text-[13px] leading-6 text-muted">
        <span className="bg-[#f2db55] px-1.5 font-mono text-[11px] font-bold text-ink">微信小程序</span>
        我做的「<strong className="font-bold text-ink">拼豆图纸生成神器</strong>」：在微信中搜索名字即可找到。
      </p>
    </section>
  );
}
