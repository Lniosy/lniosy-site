import type { Metadata } from "next";
import { X_URL, freebies } from "@/lib/content";
import { SiteHeader, SiteFooter, PageBg } from "@/components/SiteChrome";
import { Arrow, XLogo } from "@/components/Icons";

export const metadata: Metadata = {
  title: "免费领｜李天才",
  description: "免费领：腾讯打车权益券等第三方免费活动入口，以官方页面为准。",
  alternates: { canonical: "/free/" },
  openGraph: { url: "/free/" },
};

export default function FreePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageBg />
      <SiteHeader current="/free/" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
        <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted">免费领</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">免费领</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">整理一些可以免费领的第三方活动，点按钮直达官方页面。</p>
        <div className="mt-6 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {freebies.map((f) => (
            <article key={f.id} id={`free-${f.id}`} className="flex flex-col border-2 border-ink bg-white p-5">
              <h2 className="text-xl font-extrabold">{f.title}</h2>
              <ul className="mt-3 space-y-1.5 text-[14px] leading-6">
                {f.points.map((pt) => (
                  <li key={pt} className="flex gap-2"><span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-ink" />{pt}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-5 text-muted">{f.note}</p>
              <a href={`/go/${f.id}/`} target="_blank" rel="noopener sponsored" className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-5 text-base font-bold text-paper transition hover:-translate-y-0.5">
                {f.cta} <Arrow className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
        <a href={X_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex min-h-11 items-center gap-2 text-sm font-bold underline underline-offset-4">
          <XLogo className="h-3.5 w-3.5" /> 在 X 关注 @Lniosytest，新福利第一时间发
        </a>
      </div>
      <SiteFooter />
    </main>
  );
}
