import Image from "next/image";
import Link from "next/link";
import { X_URL, profile } from "@/lib/content";
import { XLogo } from "./Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const nav = [
  { href: "/referrals/", label: "邀请推荐" },
  { href: "/guides/", label: "教程" },
  { href: "/free/", label: "免费领" },
];

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3.5 sm:px-8">
        <Link href="/" className="flex min-h-10 shrink-0 items-center gap-2 font-mono text-xs font-bold tracking-[0.08em]">
          <Image src="/avatar.jpg" alt="" width={28} height={28} className="h-7 w-7 -rotate-6 rounded-full ring-2 ring-ink" />
          <span>李天才<em className="hidden not-italic text-muted sm:inline"> / TianCai</em></span>
        </Link>
        <nav aria-label="主导航" className="flex items-center gap-2.5 sm:gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current === n.href ? "page" : undefined} className={`inline-flex min-h-10 items-center whitespace-nowrap text-[13px] font-bold hover:text-ink ${current === n.href ? "text-ink underline decoration-2 underline-offset-[6px]" : "text-muted"}`}>
              {n.label}
            </Link>
          ))}
          <a href={X_URL} {...ext} className="inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap bg-ink px-3 py-2 text-[13px] font-semibold text-paper transition hover:-translate-y-0.5">
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
    <p className="mb-12 border border-dashed border-line p-4 text-xs leading-5 text-muted">
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
