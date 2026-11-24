import type { Metadata } from "next";
import GuideDirectory from "@/components/GuideDirectory";
import { SiteHeader, SiteFooter, Disclaimer } from "@/components/SiteChrome";
import { guidesJsonLd } from "@/lib/jsonld";

const title = "教程目录｜银行证券、美卡号码、AI 工具｜李天才";
const description = "李天才的教程目录。站内只做导读，正文都在 X 原文：嘉信国际户、Capital One、美国号码、BIT 证券、中国移动 5G 消息、Muse、澳门蚂蚁银行。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guides/" },
  openGraph: {
    type: "website",
    url: "/guides/",
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "李天才 / 天才毛球" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
};

export default function GuidesPage() {
  return (
    <main id="main" className="relative min-h-dvh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesJsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader current="/guides/" />
      <div className="relative z-10 mx-auto max-w-[75rem] px-4 sm:px-8">
        <section className="pb-2 pt-4 sm:pt-6">
          <h1 className="text-[28px] font-black tracking-tight sm:text-4xl">实战教程</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            这里是目录和导读。点「去 X 阅读」会在新标签打开我发在 X 上的原文，站内不放全文。
          </p>
          <GuideDirectory />
        </section>
        <div className="mt-8">
          <Disclaimer />
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
