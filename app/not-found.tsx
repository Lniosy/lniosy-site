import Link from "next/link";
import { SiteHeader, SiteFooter, PageBg } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <main id="main" className="relative min-h-dvh overflow-hidden">
      <PageBg />
      <SiteHeader />
      <div className="relative z-10 mx-auto max-w-xl px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold text-muted">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">找不到这一页</h1>
        <p className="mt-3 text-base leading-7 text-muted">链接可能旧了，或者这张卡已经下架。可以回首页，或去邀请推荐里找。</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-paper">回首页</Link>
          <Link href="/referrals/" className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm font-semibold">邀请推荐</Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
