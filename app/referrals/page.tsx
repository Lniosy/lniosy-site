import type { Metadata } from "next";
import { referralDisclosure } from "@/lib/content";
import { SiteHeader, SiteFooter, Disclaimer } from "@/components/SiteChrome";
import SiteSearch from "@/components/SiteSearch";

export const metadata: Metadata = {
  title: "邀请推荐：信用卡 · 证券 · 加密 U 卡 · 出海工具｜李天才",
  description: "李天才的邀请链接合集：Capital One、招商银行全币种 Visa、Wise、澳门蚂蚁银行、iFAST、BIT 证券、Bybit、Savo、MEXC、Plasma One、Muse、CliProxy、IPEqual、RedPocket、Airnova。奖励和资格以各官方页面为准。",
  alternates: { canonical: "/referrals/" },
  openGraph: { url: "/referrals/" },
};

export default function ReferralsPage() {
  return (
    <main id="main" className="relative min-h-dvh">
      <SiteHeader current="/referrals/" />
      <div className="relative z-10 mx-auto max-w-[75rem] px-4 pt-4 sm:px-8">
        <h1 className="text-[22px] font-black tracking-tight sm:text-2xl">邀请入口，按需选择。</h1>
        <p className="mt-3 rounded-2xl bg-white/80 px-4 py-3 text-xs leading-5 text-muted">{referralDisclosure}</p>
        <div className="mt-4">
          <SiteSearch only="referrals" />
        </div>
        <Disclaimer />
      </div>
      <SiteFooter />
    </main>
  );
}
