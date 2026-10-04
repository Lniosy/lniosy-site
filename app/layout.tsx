import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL, X_URL } from "@/lib/content";

const title = "李天才 @Lniosytest｜美卡 ITIN · AI · 独立开发";
const description =
  "李天才（天才毛球）的个人主页：分享我用 ITIN 办美卡的经验、AI 工具实战、独立开发与微信小程序「拼豆图纸生成神器」。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: ["李天才", "Lniosytest", "天才毛球", "ITIN", "美卡", "Capital One", "AI", "独立开发", "微信小程序", "拼豆图纸生成神器"],
  authors: [{ name: "李天才", url: X_URL }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "李天才",
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "天才毛球" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lniosytest",
    creator: "@Lniosytest",
    title,
    description,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#111111" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
