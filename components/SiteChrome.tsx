import Image from "next/image";
import Link from "next/link";
import { X_URL, profile } from "@/lib/content";
import { Arrow } from "./Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const nav = [
  { href: "/referrals/", label: "邀请推荐" },
  { href: "/guides/", label: "精选教程" },
];

function FollowX({ className }: { className: string }) {
  return (
    <a href={X_URL} {...ext} className={`${className} min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[13px] font-bold text-white sm:px-4 sm:text-sm`}>
      在 X 关注我 <Arrow className="h-3.5 w-3.5" />
    </a>
  );
}

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur-md">
      <a href="#main" className="skip-link">跳到主要内容</a>
      <div className="mx-auto flex max-w-[75rem] flex-col gap-1 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex min-w-0 items-center justify-between gap-3">
          <Link href="/" className="flex min-h-11 min-w-0 items-center gap-2.5">
            <Image src="/avatar.jpg" alt="" width={36} height={36} className="h-9 w-9 shrink-0 rounded-full" />
            <span className="truncate text-[15px] font-extrabold tracking-tight sm:text-[17px]">
              李天才 <span className="font-semibold text-muted">/ TianCai</span>
            </span>
          </Link>
          <FollowX className="inline-flex sm:hidden" />
        </div>
        <nav aria-label="主导航" className="flex items-center gap-1 sm:gap-2">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current === n.href ? "page" : undefined} className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm font-bold ${current === n.href ? "bg-white text-ink" : "text-muted"}`}>
              {n.label}
            </Link>
          ))}
          <FollowX className="hidden sm:inline-flex" />
        </nav>
      </div>
    </header>
  );
}

export function Disclaimer() {
  return (
    <p className="mb-10 rounded-3xl bg-white px-4 py-3 text-sm leading-6 text-muted shadow-[var(--shadow-raised)]">
      说明：本站内容为个人经验分享，不构成任何金融、税务或法律建议。本站不是银行或金融机构；信用卡、ITIN 等申请条件与结果以官方机构为准。部分链接为我的邀请链接。
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto flex max-w-[75rem] flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:px-8">
        <p>李天才 / {profile.mascot} · {profile.handle}</p>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 font-bold">
          {nav.map((n) => <Link key={n.href} href={n.href} className="inline-flex min-h-11 items-center">{n.label}</Link>)}
          <a href={X_URL} {...ext} className="inline-flex min-h-11 items-center">x.com/Lniosytest</a>
        </nav>
      </div>
    </footer>
  );
}

export function PageBg() {
  return null;
}
