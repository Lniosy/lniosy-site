// 推友友链。以后加人：往 friends 数组追加一项，头像和首屏图放进 public/friends/。
// 描述只写公开页面核对过的事实，不写优惠金额、库存数字或别人的站。
//
// 外链没有现成的全站 UTM 约定（邀请链接自带各家 ref，不在这里改）。
// 友链的网站和 X 主页都走 friendOutbound()。

export const FRIEND_UTM = {
  source: "litiancai",
  medium: "friend_link",
} as const;

export function friendOutbound(href: string): string {
  const url = new URL(href);
  url.searchParams.set("utm_source", FRIEND_UTM.source);
  url.searchParams.set("utm_medium", FRIEND_UTM.medium);
  return url.toString();
}

export type Friend = {
  id: string;
  siteName: string;
  siteUrl: string;
  summary: string;
  preview: string;
  previewWidth: number;
  previewHeight: number;
  ownerName: string;
  ownerHandle: string;
  xUrl: string;
  avatar: string;
};

export const friends: Friend[] = [
  {
    id: "xbuding",
    siteName: "XBuding",
    siteUrl: "https://vps.xbuding.com",
    // 2026-11-25 核对 https://vps.xbuding.com 公开页：
    // title「VPS 精选与黑五特惠聚合 · XBuding」
    // meta description「汇聚全球高性价比海外 VPS、黑五/网一限量闪购、CN2 GIA / AS9929 / CMI 优质回国线路与年付传家宝套餐，库存与优惠码实时更新。」
    // 导航可见：VPS 套餐、机场 / VPN、客户端、选机与测IP。页脚写明部分链接含推广返佣。
    // 站长以 X 公开资料为准：显示名「布丁」，用户名 lengs4189。不要改成其他人。
    summary:
      "公开首页标题是「VPS 精选与黑五特惠聚合」。导航里有 VPS 套餐、机场 / VPN、客户端，以及选机与测 IP。页脚写明部分链接含推广返佣。",
    // Playwright 1280×800 截取该站首屏，2026-11-25。
    preview: "/friends/xbuding-home.webp",
    previewWidth: 1280,
    previewHeight: 800,
    ownerName: "布丁",
    ownerHandle: "@lengs4189",
    xUrl: "https://x.com/lengs4189",
    // X 公开头像，2026-11-25，profile_images/2063992825923108864/wpJkVlo2。
    avatar: "/friends/lengs4189.webp",
  },
];
