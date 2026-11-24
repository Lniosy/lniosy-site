import type { Metadata } from "next";
import { MUSE_ARTICLE_URL } from "@/lib/guides";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Arrow } from "@/components/Icons";

// 旧地址保留，避免历史链接 404。静态导出不支持 next.config redirects，
// 所以这一页只做跳转：meta refresh，并给出可点的 X 原文。

const title = "Muse 注册教程改在 X 阅读｜李天才";
const description = `站内不再放 Muse 教程正文。请到 X 原文阅读：${MUSE_ARTICLE_URL}。如果页面没有自动跳转，请点「去 X 阅读」。`;

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: MUSE_ARTICLE_URL },
  openGraph: {
    type: "website",
    url: MUSE_ARTICLE_URL,
    title,
    description,
    images: [{ url: "/guides/covers/muse.webp", width: 2000, height: 800, alt: "Muse 注册教程原封面" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/guides/covers/muse.webp"],
  },
};

export default function MuseJump() {
  return (
    <main id="main" className="relative min-h-dvh">
      <meta httpEquiv="refresh" content={`0;url=${MUSE_ARTICLE_URL}`} />
      <SiteHeader current="/guides/" />
      <div className="relative z-10 mx-auto max-w-xl px-4 py-16 sm:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-raised)] sm:p-8">
          <p className="text-xs font-bold text-muted">旧地址兼容</p>
          <h1 className="mt-2 text-2xl font-black tracking-tight">这篇改在 X 上阅读</h1>
          <p className="mt-3 text-sm leading-6 text-muted">站内不再放正文。页面会自动跳到原文。如果没有跳转，请点下面的按钮。</p>
          <a href={MUSE_ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white">
            去 X 阅读 <Arrow className="h-4 w-4" />
          </a>
          <p className="mt-4 break-all text-xs leading-5 text-muted">
            原文：
            <a href={MUSE_ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-ink underline">{MUSE_ARTICLE_URL}</a>
          </p>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
