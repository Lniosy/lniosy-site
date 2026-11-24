import Image from "next/image";
import Link from "next/link";
import { X_FOLLOWERS_AS_OF, X_FOLLOWERS_LABEL, X_URL, profile, referrals, referralGroups } from "@/lib/content";
import { guides } from "@/lib/guides";
import { homeJsonLd } from "@/lib/jsonld";
import { SiteHeader, SiteFooter, Disclaimer } from "@/components/SiteChrome";
import GuideCard from "@/components/GuideCard";
import LegacyHash from "@/components/LegacyHash";
import { HomeReferrals } from "@/components/Referrals";
import { HomeProjects } from "@/components/Projects";
import { Arrow } from "@/components/Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const tones = ["#ffffff", "#d9e9ff", "#ffcfdf", "#daf3b9"];
const categoryTitle: Record<string, string> = {
  tools: "出海工具",
};
const categoryHint: Record<string, string> = {
  bank: "招行 · Wise · Capital One",
  securities: "BIT 证券",
  crypto: "Bybit · Savo · MEXC · Plasma",
  tools: "AI / IP / 手机号",
};

export default function Home() {
  return (
    <main id="main" className="relative min-h-dvh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c") }} />
      <LegacyHash />
      <SiteHeader current="/" />

      <div id="top" className="relative z-10 mx-auto max-w-[75rem] px-4 sm:px-8">
        <section className="grid items-stretch gap-4 pb-2 pt-4 lg:grid-cols-[1.55fr_1fr] lg:pt-6">
          <div className="relative flex flex-col overflow-hidden rounded-[28px] bg-lavender px-6 py-7 sm:px-9 sm:py-9 lg:min-h-[420px] lg:pr-[210px]">
            <p className="font-mono text-xs text-[#4c406d]">{profile.handle} / {profile.bio}</p>
            <h1 className="relative z-10 mt-3 text-[34px] font-black leading-[1.25] tracking-tight sm:text-[48px]">
              我是李天才。
              <br />
              <span className="text-[#49317f]">折腾，也分享。</span>
            </h1>
            <p className="relative z-10 mt-3 max-w-md text-base leading-7 text-[#4c406d]">
              美卡 / ITIN、AI 工具和独立开发。
              <br />
              把实战经历写出来，把邀请入口放清楚。
            </p>
            <div className="relative z-10 mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={X_URL} {...ext} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white">
                在 X 关注我 <Arrow className="h-4 w-4" />
              </a>
              <Link href="/guides/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#24203d33] bg-white/50 px-5 text-sm font-bold">
                看实战教程
              </Link>
            </div>
            <div className="relative z-0 mt-6 self-end lg:absolute lg:bottom-5 lg:right-5 lg:mt-0">
              <div className="w-[148px] -rotate-6 rounded-[28px] border-[6px] border-white/80 bg-white p-1.5 shadow-[10px_14px_0_#8c70d24d] sm:w-[168px]">
                <Image src="/avatar.jpg" alt="天才毛球" width={400} height={400} priority className="h-auto w-full object-contain" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 grid grid-cols-1 items-start gap-3 rounded-[28px] bg-sun px-6 py-6 sm:grid-cols-[1.15fr_0.85fr] sm:items-center sm:px-7">
              <div>
                <p className="text-[56px] font-extrabold leading-none tracking-[-0.05em] text-[#36302b] sm:text-[68px]">{X_FOLLOWERS_LABEL}</p>
                <p className="mt-1 text-lg font-bold text-[#36302b]">位 X 关注者</p>
              </div>
              <p className="text-xs leading-5 text-[#5c542e]">
                {X_FOLLOWERS_AS_OF} 更新
                <br />
                静态快照 · 非实时
              </p>
            </div>
            <a href={X_URL} {...ext} className="flex min-h-[132px] flex-col justify-between rounded-[26px] bg-coral p-5">
              <span className="font-mono text-[11px]">FOLLOW THE JOURNEY</span>
              <span className="text-xl font-extrabold leading-tight">去 X 找我 <Arrow className="inline h-4 w-4" /></span>
            </a>
            <div className="flex min-h-[132px] flex-col justify-between rounded-[26px] bg-mint p-5">
              <span className="font-mono text-[11px]">THE LITTLE BLACK FUZZ</span>
              <span className="text-xl font-extrabold leading-tight">天才毛球<br />不是普通名片。</span>
            </div>
          </div>
        </section>

        <nav aria-label="邀请分类" className="grid grid-cols-2 gap-3 py-6 lg:grid-cols-4">
          {referralGroups.map((g, i) => (
              <Link key={g.id} href={`/referrals/#ref-${g.id}`} className="flex min-h-[84px] items-center gap-3 rounded-[22px] px-4 py-3" style={{ background: tones[i] }}>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/75 font-mono text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-extrabold leading-tight">{categoryTitle[g.id] ?? g.label}</span>
                  <span className="mt-0.5 block text-[11px] leading-4 text-muted">{categoryHint[g.id]}</span>
                </span>
              </Link>
          ))}
        </nav>

        <HomeProjects />

        <section aria-labelledby="pick-title" className="pb-10">
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 id="pick-title" className="text-2xl font-black tracking-tight">邀请入口，按需选择。</h2>
            <Link href="/referrals/" className="inline-flex min-h-11 shrink-0 items-center text-sm font-bold underline underline-offset-4">全部 {referrals.length} 张</Link>
          </div>
          <HomeReferrals />
        </section>

        <section aria-labelledby="guide-title" className="pb-10">
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 id="guide-title" className="text-2xl font-black tracking-tight">实战教程</h2>
            <Link href="/guides/" className="inline-flex min-h-11 shrink-0 items-center text-sm font-bold underline underline-offset-4">全部教程</Link>
          </div>
          <p className="mb-4 max-w-xl text-sm leading-6 text-muted">正文都在 X。点「去 X 阅读」会在新标签打开原文，不经过站内正文。</p>
          <ul className="grid gap-4 md:grid-cols-2">
            {guides.map((g) => (
              <li key={g.id} className="min-w-0">
                <GuideCard guide={g} showCover={false} />
              </li>
            ))}
          </ul>
        </section>

        <Disclaimer />
      </div>
      <SiteFooter />
    </main>
  );
}
