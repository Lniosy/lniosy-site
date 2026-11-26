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

export type FriendSite = {
  siteName: string;
  siteUrl: string;
  summary: string;
  preview: string;
  previewWidth: number;
  previewHeight: number;
};

type FriendIdentity = {
  id: string;
  ownerName: string;
  ownerHandle: string;
  xUrl: string;
  avatar: string;
  verified?: boolean;
  extra?: { label: string; href: string };
};

export type Friend = (FriendIdentity & FriendSite) | (FriendIdentity & { sites: FriendSite[] });

export function friendSites(friend: Friend): FriendSite[] {
  return "sites" in friend ? friend.sites : [friend];
}

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
  {
    id: "wu138di",
    ownerName: "wu138di",
    ownerHandle: "@wudihao138hack",
    xUrl: "https://x.com/wudihao138hack",
    verified: true,
    // X 公开头像，2026-11-25，profile_images/2017602198495236097/W78G1PzW.jpg。
    avatar: "/friends/wudihao138hack.webp",
    // 2026-11-25 打开三个公开首页。描述不写金额。
    sites: [
      {
        siteName: "WU138DI小站",
        siteUrl: "https://www.wu138di.com",
        // title「WU138DI小站」。首页可见 Developer | Python | C/C++ | Full Stack Engineer，
        // 以及博客、课表查询系统（试运营）、分享资源站（dev）、无名小将计算器。
        summary:
          "公开标题是「WU138DI小站」。首页写着 Developer、Python、C/C++、Full Stack Engineer，并列出博客、课表查询、资源站和计算器。",
        preview: "/friends/wu138di-home.webp",
        previewWidth: 1280,
        previewHeight: 800,
      },
      {
        siteName: "B站视频总结器",
        siteUrl: "https://bilibili.wu138di.com",
        // title「Wu138di AI · B站视频总结器」。首页可见「发送BV号获取」，以及 Google 一键登录、邮箱登录。
        summary:
          "公开标题是「Wu138di AI · B站视频总结器」。首页写着发送 BV 号获取总结，并提供 Google 一键登录和邮箱登录。",
        preview: "/friends/wu138di-bilibili.webp",
        previewWidth: 1280,
        previewHeight: 800,
      },
      {
        siteName: "FANBOX 小站",
        siteUrl: "https://fakafanbox.wu138di.com",
        // title「FANBOX 小站 · …订阅方案」。首页可见 FANBOX 订阅、号上直冲、文件发送，以及不索取账号密码。金额不写入描述。
        summary:
          "公开标题是「FANBOX 小站」。首页写着 FANBOX 订阅、号上直冲和文件发送，并写明不索取账号密码。",
        preview: "/friends/wu138di-fakafanbox.webp",
        previewWidth: 1280,
        previewHeight: 800,
      },
    ],
  },
  {
    id: "suversal",
    siteName: "苏码玩家",
    siteUrl: "https://suversal.com",
    // 2026-11-26 打开 https://suversal.com ，公开页跳到 /blog。
    // title「苏码玩家 · 文章」。
    // 首页原文：「一个程序员的折腾记录：VPS、家庭网络、Apple生态、开源分享、出海基建、还有AI」。
    // 分类可见：网络与代理、AI、Apple、出海基建、工具、服务器、日常。页面没有写 Vibe Coding。
    summary:
      "公开标题是「苏码玩家 · 文章」。首页写着「一个程序员的折腾记录：VPS、家庭网络、Apple生态、开源分享、出海基建、还有AI」。",
    preview: "/friends/suversal-home.webp",
    previewWidth: 1280,
    previewHeight: 800,
    ownerName: "苏码玩家",
    ownerHandle: "@suversal",
    xUrl: "https://x.com/suversal",
    verified: true,
    // X 公开头像，2026-11-26，profile_images/2089337449344630785/lTeuNtW9.jpg。
    avatar: "/friends/suversal.webp",
    extra: { label: "博客", href: "https://suversal.com/blog" },
  },
  {
    id: "su-uni",
    siteName: "Su",
    siteUrl: "https://su-uni.com",
    // 2026-11-26 打开 https://su-uni.com/
    // title「Su · AI Structure & Workflow Studio」
    // 首屏：Structure online. Automate offline. / 让视觉建立信任，让信息推动成交。
    // 服务：定制 AI 工作流、架构优化、网页与小程序原型、视觉方案。
    // 作品：BuzzTrans、TextOrbit / 词环、野有风。页内署名「Su ／ 芋泥 Yunii」。
    // 开源区标题是 OPEN SOURCE · GITHUB，页脚是 SU / DOUBLESQ97。
    summary:
      "公开标题是「Su · AI Structure & Workflow Studio」。首页写着定制 AI 工作流、架构优化、原型和视觉方案，作品里能看到 BuzzTrans、TextOrbit 和野有风。页面也称 Su 为芋泥 Yunii。",
    preview: "/friends/su-uni-home.webp",
    previewWidth: 1280,
    previewHeight: 800,
    ownerName: "Su",
    ownerHandle: "@Sukiea1008",
    xUrl: "https://x.com/Sukiea1008",
    verified: true,
    // X 公开头像，2026-11-26，profile_images/2070191168848269312/gQ6X5dcH.jpg。
    avatar: "/friends/sukiea1008.webp",
    extra: { label: "GitHub", href: "https://github.com/doublesq97-ui" },
  },
];
