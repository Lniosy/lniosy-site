import Image from "next/image";
import Link from "next/link";
import { X_URL, profile } from "@/lib/content";
import { XLogo } from "./Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const nav = [
  { href: "/referrals/", label: "邀请推荐" },
  { href: "/guides/", label: "教程" },
];

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
      <a href="#main" className="skip-link">跳到主要内容</a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:px-8">
        <Link href="/" className="flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold">
          <Image src="/avatar.jpg" alt="" width={28} height={28} className="h-7 w-7 rounded-full" />
          <span>李天才<em className="hidden not-italic font-normal text-muted sm:inline"> / 天才毛球</em></span>
        </Link>
        <nav aria-label="主导航" className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current === n.href ? "page" : undefined} className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold ${current === n.href ? "bg-ink text-paper" : "text-muted hover:text-ink"}`}>
              {n.label}
            </Link>
          ))}
          <a href={X_URL} {...ext} className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-ink px-3.5 text-sm font-semibold text-paper">
            <XLogo className="h-3.5 w-3.5" />
            关注 X
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Disclaimer() {
  return (
    <p className="mb-12 rounded-2xl border border-line bg-surface px-4 py-3 text-sm leading-6 text-muted">
      说明：本站内容为个人经验分享，不构成任何金融、税务或法律建议。本站不是银行或金融机构；信用卡、ITIN 等申请条件与结果以官方机构为准。部分链接为我的邀请链接。
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <Image src="/avatar.jpg" alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
          <div>
            <div className="text-sm font-bold">李天才 · 天才毛球</div>
            <div className="font-mono text-xs text-muted">© {new Date().getFullYear()} {profile.handle}</div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-bold">
          {nav.map((n) => <Link key={n.href} href={n.href} className="min-h-11 inline-flex items-center hover:underline">{n.label}</Link>)}
          <a href={X_URL} {...ext} className="inline-flex min-h-11 items-center gap-2 hover:underline"><XLogo /> x.com/Lniosytest</a>
        </nav>
      </div>
    </footer>
  );
}

export function PageBg() {
  return (
    <>
      <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -right-36 top-28 h-80 w-80 rounded-full bg-[#c9cbd1] opacity-40 blur-2xl" />
    </>
  );
}
