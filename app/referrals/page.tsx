import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Disclaimer, PageBg } from "@/components/SiteChrome";
import SiteSearch from "@/components/SiteSearch";

export const metadata: Metadata = {
  title: "邀请推荐：美卡 · 银行账户 / 加密 U 卡 / 出海工具｜李天才",
  description: "李天才的邀请链接合集：Capital One、Wise、StarryBlu、澳门蚂蚁银行、Bybit、Savo、MEXC、Plasma One、Muse、CliProxy、IPEqual、RedPocket、Airnova eSIM。",
  alternates: { canonical: "/referrals/" },
  openGraph: { url: "/referrals/" },
};

export default function ReferralsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageBg />
      <SiteHeader current="/referrals/" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-6 sm:px-8">
        <SiteSearch only="referrals" />
        <Disclaimer />
      </div>
      <SiteFooter />
    </main>
  );
}
