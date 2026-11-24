import type { Metadata } from "next";
import { guides, type Guide } from "@/lib/guides";
import { SiteHeader, SiteFooter, Disclaimer } from "@/components/SiteChrome";
import SiteSearch from "@/components/SiteSearch";

export const metadata: Metadata = {
  title: "教程：美卡 / ITIN、Muse、美国手机号｜李天才",
  description: "李天才的教程合集：ITIN 申请 Capital One、Muse 注册、美国手机号红包卡，以及我在 X 上的实战帖子。",
  alternates: { canonical: "/guides/" },
  openGraph: { url: "/guides/" },
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function guideKind(source: Guide["source"]) {
  if (source === "站内") return "新手入口";
  if (source === "X 帖子") return "精选 X 帖";
  return "精选 X 长文";
}

function GuideCard({ g }: { g: Guide }) {
  const external = g.href.startsWith("http");
  const newbie = g.source === "站内";
  return (
    <li className={newbie ? "md:col-span-2" : undefined}>
      <a href={g.href} {...(external ? ext : {})} className={`flex h-full flex-col rounded-3xl p-5 ${newbie ? "bg-lavender" : "bg-white shadow-[var(--shadow-raised)]"}`}>
        <span className={`text-[11px] font-bold ${newbie ? "text-[#4c406d]" : "text-muted"}`}>{guideKind(g.source)}{g.card ? ` · ${g.card}` : ""}</span>
        <span className="mt-2 text-lg font-extrabold leading-snug">{g.title}</span>
        {g.cardId && <span className="mt-3 text-xs font-bold text-ink">对应邀请：{g.card}</span>}
      </a>
    </li>
  );
}

export default function GuidesPage() {
  const newbie = guides.filter((g) => g.source === "站内");
  const essays = guides.filter((g) => g.source !== "站内");
  return (
    <main id="main" className="relative min-h-dvh">
      <SiteHeader current="/guides/" />
      <div className="relative z-10 mx-auto max-w-[75rem] px-4 sm:px-8">
        <section className="pb-2 pt-4 sm:pt-6">
          <h1 className="text-[28px] font-black tracking-tight sm:text-4xl">实战教程</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">先看站内新手入口，再看精选 X 长文。均为个人经验，具体规则以官方为准。</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {newbie.map((g) => <GuideCard key={g.href} g={g} />)}
            {essays.map((g) => <GuideCard key={g.href} g={g} />)}
          </ul>
        </section>
        <div className="mt-8">
          <SiteSearch only="posts" embedded />
        </div>
        <Disclaimer />
      </div>
      <SiteFooter />
    </main>
  );
}
