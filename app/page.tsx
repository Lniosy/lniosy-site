import Image from "next/image";
import Link from "next/link";
import { X_URL, X_FOLLOWERS_LABEL, profile, topics, referrals, referralGroups } from "@/lib/content";
import { guides } from "@/lib/guides";
import { homeJsonLd } from "@/lib/jsonld";
import { SiteHeader, SiteFooter, Disclaimer, PageBg } from "@/components/SiteChrome";
import LegacyHash from "@/components/LegacyHash";
import { Arrow, XLogo } from "@/components/Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <main id="main" className="relative min-h-dvh overflow-hidden">
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
              <a href={X_URL} {...ext} className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-ink px-5 text-base font-semibold text-paper">
                <XLogo className="h-4 w-4" /> 在 X 关注我 <Arrow className="h-4 w-4" />
              </a>
              <Link href="/referrals/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink bg-surface px-5 text-base font-semibold">
                看邀请推荐 <Arrow className="h-4 w-4" />
              </Link>
            </div>
            {/* 关注者数来源见 lib/content.ts 注释 */}
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />X 关注者 {X_FOLLOWERS_LABEL}（2026-10-13 核对，不是实时数）
            </p>
          </div>
          <a href={X_URL} {...ext} aria-label="天才毛球 — 在 X 上关注 @Lniosytest" className="order-first mx-auto block w-28 md:order-none md:w-full">
            <Image src="/avatar.jpg" alt="天才毛球头像：一只黑色毛球" width={400} height={400} priority className="aspect-square w-full rotate-3 rounded-full border-4 border-ink object-cover grayscale" />
          </a>
        </section>

        {/* 我能帮你什么 */}
        <section aria-labelledby="guide-title" className="pb-12">
          <div className="mb-4 flex items-end justify-between border-t border-line pt-8">
            <h2 id="guide-title" className="text-2xl font-bold tracking-tight sm:text-3xl">教程</h2>
            <Link href="/guides/" className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">全部教程</Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {guides.map((g) => (
              <a key={g.href} href={g.href} {...(g.href.startsWith("http") ? ext : {})} className="panel block p-5">
                <p className="text-xs font-semibold text-muted">{g.source}{g.card ? ` · ${g.card}` : ""}</p>
                <p className="mt-2 text-base font-semibold leading-7">{g.title}</p>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="help-title" className="pb-12">
          <h2 id="help-title" className="mb-3 text-xs font-semibold tracking-[0.08em] text-muted">我在写的三条线</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {topics.map((t) => (
              <div key={t.id} className="panel p-4">
                <div className="mb-2 text-[15px] font-semibold">{t.label}</div>
                <p className="text-sm leading-6 text-muted">{t.line}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="cat-title" className="pb-12">
          <div className="mb-4 flex items-end justify-between border-t border-line pt-8">
            <h2 id="cat-title" className="text-2xl font-bold tracking-tight sm:text-3xl">邀请推荐</h2>
            <Link href="/referrals/" className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">全部 {referrals.length} 张</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {referralGroups.map((g) => {
              const items = referrals.filter((r) => r.group === g.id);
              return (
                <Link key={g.id} href={`/referrals/#ref-${g.id}`} className="panel block p-5">
                  <div className="flex items-center justify-between text-lg font-semibold">{g.label}<span className="font-mono text-xs text-muted">{items.length}</span></div>
                  <p className="mt-2 text-sm leading-6 text-muted">{items.map((r) => r.issuer).join(" · ")}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <Disclaimer />
      </div>
      <SiteFooter />
    </main>
  );
}
