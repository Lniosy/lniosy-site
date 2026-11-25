import type { Metadata } from "next";
import { FriendList } from "@/components/Friends";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { friendsJsonLd } from "@/lib/jsonld";

const title = "推友友链｜李天才";
const description =
  "李天才收录的推友站点。目前是布丁（@lengs4189）的 XBuding：公开首页为「VPS 精选与黑五特惠聚合」，导航含 VPS、机场 / VPN 与选机测 IP。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/friends/" },
  openGraph: {
    type: "website",
    url: "/friends/",
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

export default function FriendsPage() {
  return (
    <main id="main" className="relative min-h-dvh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(friendsJsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader current="/friends/" />
      <div className="relative z-10 mx-auto max-w-[75rem] px-4 sm:px-8">
        <section className="pb-10 pt-4 sm:pt-6">
          <h1 className="text-[28px] font-black tracking-tight sm:text-4xl">推友友链</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            这里是我在 X 上认识的朋友自己的站点。点头像或昵称去对方的 X，点预览图或站点名去网站。描述按对方公开页面核对，不写优惠金额。
          </p>
          <div className="mt-6">
            <FriendList />
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
