import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { SiteHeader, SiteFooter, Disclaimer, PageBg } from "@/components/SiteChrome";
import SiteSearch from "@/components/SiteSearch";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "教程：美卡 / ITIN、Muse、美国手机号｜李天才",
  description: "李天才的教程合集：ITIN 申请 Capital One、Muse 注册、美国手机号红包卡，以及我在 X 上的实战帖子。",
  alternates: { canonical: "/guides/" },
  openGraph: { url: "/guides/" },
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function GuidesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageBg />
      <SiteHeader current="/guides/" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <section className="pb-10 pt-8 sm:pt-12">
          <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted">教程 / 统一入口</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">教程</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">站内教程和我在 X 上发的长文都在这里。均为个人经验，具体规则以官方为准。</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {guides.map((g) => {
              const external = g.href.startsWith("http");
              return (
                <li key={g.href} className="flex flex-col border border-line bg-[#fffffce6] p-5">
                  <p className="font-mono text-[11px] font-bold text-muted">{g.source}</p>
                  <a href={g.href} {...(external ? ext : {})} className="mt-2 flex items-start justify-between gap-3 font-bold leading-6 hover:underline">
                    {g.title} <Arrow className="mt-1 h-4 w-4 shrink-0" />
                  </a>
                  {g.cardId && (
                    <Link href={`/referrals/#referral-${g.cardId}`} className="mt-3 self-start text-xs font-bold text-muted underline underline-offset-4 hover:text-ink">
                      对应邀请卡：{g.card}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
        <SiteSearch only="posts" />
        <Disclaimer />
      </div>
      <SiteFooter />
    </main>
  );
}
