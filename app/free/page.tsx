import type { Metadata } from "next";
import { X_URL } from "@/lib/content";
import { SiteHeader, SiteFooter, PageBg } from "@/components/SiteChrome";
import { XLogo } from "@/components/Icons";

export const metadata: Metadata = {
  title: "免费领｜李天才",
  description: "免费领：内容整理中，敬请期待。",
  alternates: { canonical: "/free/" },
  openGraph: { url: "/free/" },
};

export default function FreePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageBg />
      <SiteHeader current="/free/" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted">免费领</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">内容即将上线</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-muted">这一页正在整理中，敬请期待。上线后会第一时间在 X 通知。</p>
        <a href={X_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 bg-ink px-6 text-base font-bold text-paper transition hover:-translate-y-0.5">
          <XLogo className="h-4 w-4" /> 在 X 关注 @Lniosytest
        </a>
      </div>
      <SiteFooter />
    </main>
  );
}
