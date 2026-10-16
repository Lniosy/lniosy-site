import Image from "next/image";
import Link from "next/link";
import { X_URL, X_FOLLOWERS_LABEL, profile, topics, referrals, referralGroups } from "@/lib/content";
import { guides } from "@/lib/guides";
import { homeJsonLd } from "@/lib/jsonld";
import { SiteHeader, SiteFooter, Disclaimer, PageBg } from "@/components/SiteChrome";
import LegacyHash from "@/components/LegacyHash";
import { Arrow, XLogo } from "@/components/Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const topicAccent: Record<string, string> = { card: "#c8f04a", ai: "#b6ccff", indie: "#ffb56b", miniapp: "#f2db55" };

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c") }} />
      <LegacyHash />
      <PageBg />
      <SiteHeader current="/" />

      <div id="top" className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* 首屏：我是谁 */}
        <section className="grid items-center gap-6 pb-8 pt-8 sm:pt-14 md:grid-cols-[minmax(0,1fr)_220px] md:gap-12">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.12em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-ink shadow-[0_0_0_4px_#11121418]" />
              {profile.mascot} · {profile.handle}
            </p>
            <h1 className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.03em] sm:text-[48px] lg:text-[56px]">
              我是<span className="bg-ink px-2 text-paper">李天才</span>
              <br />
              {profile.bio}
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-7 text-muted sm:text-[17px]">{profile.bio2}。</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={X_URL} {...ext} className="inline-flex min-h-12 items-center justify-center gap-2.5 bg-ink px-5 text-base font-bold text-paper transition hover:-translate-y-0.5">
                <XLogo className="h-4 w-4" /> 在 X 关注我 <Arrow className="h-4 w-4" />
              </a>
              <Link href="/referrals/" className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-ink bg-white px-5 text-base font-bold transition hover:-translate-y-0.5">
                看邀请推荐 <Arrow className="h-4 w-4" />
              </Link>
            </div>
            {/* 关注者数来源见 lib/content.ts 注释 */}
            <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1d9bf0]" />X 关注者 {X_FOLLOWERS_LABEL}
            </p>
          </div>
          <a href={X_URL} {...ext} aria-label="天才毛球 — 在 X 上关注 @Lniosytest" className="order-first mx-auto block w-28 md:order-none md:w-full">
            <Image src="/avatar.jpg" alt="天才毛球头像：一只黑色毛球" width={400} height={400} priority className="aspect-square w-full rotate-3 rounded-full border-4 border-ink object-cover grayscale" />
          </a>
        </section>

        {/* 我能帮你什么 */}
        <section aria-labelledby="help-title" className="pb-12">
          <h2 id="help-title" className="mb-3 font-mono text-xs font-bold tracking-[0.14em] text-muted">我能帮你什么</h2>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {topics.map((t) => (
              <div key={t.id} className="border border-ink/80 bg-[#fffffc] p-4">
                <div className="mb-2 flex items-center gap-2 text-[15px] font-extrabold">
                  <span className="h-2.5 w-2.5" style={{ background: topicAccent[t.id] }} aria-hidden />
                  {t.label}
                </div>
                <p className="text-[13px] leading-6 text-muted">{t.line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 邀请推荐：3 类入口 */}
        <section aria-labelledby="cat-title" className="pb-12">
          <div className="mb-4 flex items-end justify-between border-t border-line pt-8">
            <h2 id="cat-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">邀请推荐</h2>
            <Link href="/referrals/" className="text-sm font-bold underline underline-offset-4">全部 {referrals.length} 张 →</Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {referralGroups.map((g) => {
              const items = referrals.filter((r) => r.group === g.id);
              return (
                <Link key={g.id} href={`/referrals/#ref-${g.id}`} className="group block border-2 border-ink bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111214]">
                  <div className="flex items-center justify-between text-lg font-extrabold">{g.label}<span className="font-mono text-xs text-muted">{items.length}</span></div>
                  <p className="mt-2 text-sm leading-6 text-muted">{items.map((r) => r.issuer).join(" · ")}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 教程精选 */}
        <section aria-labelledby="guide-title" className="pb-12">
          <div className="mb-4 flex items-end justify-between border-t border-line pt-8">
            <h2 id="guide-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">教程</h2>
            <Link href="/guides/" className="text-sm font-bold underline underline-offset-4">全部教程 →</Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {guides.slice(0, 3).map((g) => (
              <a key={g.href} href={g.href} {...(g.href.startsWith("http") ? ext : {})} className="block border border-line bg-[#fffffce6] p-5 transition hover:border-ink">
                <p className="font-mono text-[11px] font-bold text-muted">{g.source}{g.card ? ` · ${g.card}` : ""}</p>
                <p className="mt-2 font-bold leading-6">{g.title}</p>
              </a>
            ))}
          </div>
        </section>

        {/* 免费领 预告 */}
        <section className="pb-12">
          <Link href="/free/" className="flex items-center justify-between gap-4 border-2 border-dashed border-ink/40 p-6 transition hover:border-ink">
            <div>
              <h2 className="text-2xl font-extrabold">免费领</h2>
              <p className="mt-1 text-sm text-muted">内容整理中，敬请期待。</p>
            </div>
            <Arrow className="h-5 w-5" />
          </Link>
        </section>

        <Disclaimer />
      </div>
      <SiteFooter />
    </main>
  );
}
