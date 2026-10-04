import Image from "next/image";
import { X_URL, X_FOLLOWERS_LABEL, profile } from "@/lib/content";
import Writing from "@/components/Writing";
import Referrals from "@/components/Referrals";
import { Arrow, XLogo } from "@/components/Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -right-36 top-28 h-80 w-80 rounded-full bg-[#c9cbd1] opacity-40 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-[60%] h-56 w-56 rounded-full bg-[#e5d9c8] opacity-40 blur-2xl" />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex min-h-10 items-center gap-3 font-mono text-xs font-bold tracking-[0.08em]">
            <Image src="/avatar.jpg" alt="" width={28} height={28} className="h-7 w-7 -rotate-6 rounded-full ring-2 ring-ink" />
            <span>李天才 <em className="hidden not-italic text-muted sm:inline">/ TianCai</em></span>
          </a>
          <nav className="flex items-center gap-3 sm:gap-6">
            <a href="#referrals" className="inline-flex min-h-10 items-center font-mono text-xs font-bold tracking-wide text-ink hover:underline sm:text-muted sm:hover:text-ink sm:hover:no-underline">美卡邀请</a>
            <a href="#writing" className="hidden min-h-10 items-center font-mono text-xs font-bold tracking-wide text-muted hover:text-ink sm:inline-flex">文章</a>
            <a href={X_URL} {...ext} className="inline-flex min-h-10 items-center gap-2 bg-ink px-3.5 py-2 text-[13px] font-semibold text-paper transition hover:-translate-y-0.5">
              <XLogo className="h-3.5 w-3.5" />
              关注
            </a>
          </nav>
        </div>
      </header>

      <div id="top" className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero */}
        <section className="grid items-end gap-10 pb-12 pt-12 sm:pt-20 md:grid-cols-[minmax(0,1fr)_240px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.12em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-ink shadow-[0_0_0_4px_#11121418]" />
              ITIN · Capital One · 实战记录
            </p>
            <h1 className="text-[33px] font-extrabold leading-[1.2] tracking-[-0.03em] min-[400px]:text-[36px] sm:text-[54px] md:text-[44px] lg:text-[62px] xl:text-[70px]">
              我用 ITIN<span className="hidden sm:inline"> 办下了</span>
              <br />
              <span className="sm:hidden">办下了</span>美国信用卡，
              <br />
              <span className="mt-2 inline-block bg-ink px-2.5 py-0.5 text-paper sm:px-3">踩过的坑都写在 X。</span>
            </h1>
            <p className="mt-7 max-w-xl text-[16px] leading-7 text-muted sm:text-[17px] sm:leading-8">
              我是<strong className="font-bold text-ink">李天才</strong>（{profile.handle}），{profile.bio}。
              <br className="hidden sm:block" />
              {profile.bio2}。
            </p>
            <div className="mt-8">
              <a href={X_URL} {...ext} className="group inline-flex min-h-14 w-full items-center justify-center gap-3 bg-ink px-6 py-4 text-base font-bold text-paper transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_#11121440] sm:w-auto">
                <XLogo className="h-5 w-5 shrink-0" />
                在 X 看我更新美卡 / ITIN 实战
                <Arrow className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted">
                {/* 关注者数来源见 lib/content.ts 注释 */}
                <span className="inline-flex items-center gap-1.5 font-mono text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1d9bf0]" />X 关注者 {X_FOLLOWERS_LABEL}
                </span>
                <span aria-hidden className="text-ink/20">|</span>
                <a href="#referrals" className="inline-flex min-h-10 items-center underline decoration-ink/25 underline-offset-4 hover:text-ink hover:decoration-ink">美卡邀请专区</a>
                <a href="#writing" className="inline-flex min-h-10 items-center underline decoration-ink/25 underline-offset-4 hover:text-ink hover:decoration-ink">我在写什么</a>
              </div>
            </div>
          </div>

          {/* Mascot ticket */}
          <a href={X_URL} {...ext} aria-label="天才毛球 — 在 X 上关注 @Lniosytest" className="group relative mx-auto block w-64 rotate-3 bg-ink p-5 text-paper transition hover:rotate-1 md:w-full">
            <div className="flex items-start justify-between">
              <span className="border border-paper/35 px-2 py-1.5 font-mono text-[10px] leading-4 tracking-[0.14em]">天才<br />毛球</span>
              <XLogo className="h-5 w-5 opacity-80" />
            </div>
            <div className="my-5 overflow-hidden rounded-full border-4 border-paper">
              <Image src="/avatar.jpg" alt="天才毛球头像：一只黑色毛球" width={400} height={400} priority className="aspect-square w-full object-cover grayscale transition group-hover:scale-105" />
            </div>
            <div className="border-t border-dashed border-paper/30 pt-3 font-mono text-xs tracking-[0.1em]">
              <div className="text-paper/60">X / TWITTER</div>
              <div className="mt-1 text-base font-bold tracking-normal">{profile.handle}</div>
            </div>
          </a>
        </section>

        {/* Primary CTA card */}
        <section aria-label="关注我" className="pb-14">
          <a href={X_URL} {...ext} className="group relative flex flex-col gap-6 overflow-hidden bg-ink p-7 text-paper transition hover:-translate-y-1 hover:shadow-[0_20px_40px_#11121440] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-paper text-ink">
                <XLogo className="h-7 w-7" />
              </div>
              <div>
                <p className="font-mono text-xs tracking-[0.14em] text-paper/60">主要阵地 · X</p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">关注我 on X</h2>
                <p className="mt-1 text-sm text-paper/70">美卡 / ITIN、AI、独立开发与小程序的更新，都会第一时间发在 X · {X_FOLLOWERS_LABEL} 人在看。</p>
              </div>
            </div>
            <span className="inline-flex items-center justify-center gap-2 self-start bg-paper px-5 py-3 text-sm font-bold text-ink sm:self-auto">
              x.com/Lniosytest <Arrow />
            </span>
          </a>
        </section>

        {/* 我在写什么 */}
        <Writing />

        {/* Referral zone */}
        <Referrals />

        {/* Disclaimer */}
        <p className="mb-12 border border-dashed border-line p-4 text-xs leading-5 text-muted">
          说明：本站内容为个人经验分享，不构成任何金融、税务或法律建议。本站不是银行或金融机构；信用卡、ITIN 等申请条件与结果以官方机构为准。部分链接为我的邀请链接。
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-3">
            <Image src="/avatar.jpg" alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
            <div>
              <div className="text-sm font-bold">李天才 · 天才毛球</div>
              <div className="font-mono text-xs text-muted">© {new Date().getFullYear()} {profile.handle}</div>
            </div>
          </div>
          <a href={X_URL} {...ext} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold hover:underline">
            <XLogo /> x.com/Lniosytest
          </a>
        </div>
      </footer>
    </main>
  );
}
