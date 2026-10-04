// 站点内容集中在这里，方便以后替换真实链接。
// 规则：不编造推荐链接、数据、粉丝数或评价。暂无真实 URL 的条目统一指向 X 主页（标记 TODO）。

export const X_URL = "https://x.com/Lniosytest";

// TODO: 上线后替换为正式域名（用于 OG / canonical）
export const SITE_URL = "https://litiancai.vercel.app";

export const profile = {
  name: "李天才",
  nameEn: "TianCai",
  handle: "@Lniosytest",
  mascot: "天才毛球",
  // 来自 X 个人简介
  bio: "AI × 加密货币 × 独立开发",
  bio2: "微信小程序从 0 到 1 全链路｜自媒体实战分享",
};

export type Line = {
  id: string;
  kicker: string;
  title: string;
  desc: string;
  note?: string;
  href: string;
  cta: string;
  accent: string;
  mark: string;
  todo?: boolean;
};

export const lines: Line[] = [
  {
    id: "us-card",
    kicker: "美卡 / ITIN",
    title: "我用 ITIN 办下了 Capital One",
    desc: "我自己申请了美国 ITIN，并用它办下了 Capital One 信用卡。把一路踩过的坑和真实流程，慢慢整理分享出来。",
    note: "个人经验分享，不构成金融建议；规则以银行官方为准。",
    href: X_URL, // TODO: 有专门的美卡合集页 / 推文串后替换
    cta: "看我的美卡分享",
    accent: "#c8f04a",
    mark: "C1",
    todo: true,
  },
  {
    id: "ai",
    kicker: "AI",
    title: "AI 工具与实战",
    desc: "日常在用的 AI 工具、工作流和折腾记录，偏实用，不吹概念。",
    href: X_URL, // TODO
    cta: "看 AI 相关内容",
    accent: "#b6ccff",
    mark: "AI",
    todo: true,
  },
  {
    id: "indie",
    kicker: "独立开发",
    title: "一个人做产品",
    desc: "从想法到上线的独立开发过程，记录做产品、做自媒体的实战心得。",
    href: X_URL, // TODO
    cta: "看独立开发日志",
    accent: "#ffb56b",
    mark: "</>",
    todo: true,
  },
  {
    id: "miniapp",
    kicker: "微信小程序",
    title: "拼豆图纸生成神器",
    desc: "我做的微信小程序：把图片变成拼豆图纸。小程序从 0 到 1 的全链路，也会在 X 上持续分享。",
    note: "在微信中搜索「拼豆图纸生成神器」即可找到。", // TODO: 补充小程序码图片
    href: X_URL, // TODO: 替换为小程序介绍页 / 小程序码
    cta: "了解这个小程序",
    accent: "#f2db55",
    mark: "拼",
    todo: true,
  },
];

export type Guide = { tag: string; title: string; desc: string; href: string };

// TODO: 文章写好后把 href 换成真实文章链接
export const guides: Guide[] = [
  {
    tag: "ITIN",
    title: "ITIN 申请经验：我是怎么一步步办下来的",
    desc: "我自己申请 ITIN 的过程整理：需要准备什么、要注意哪些地方。",
    href: X_URL,
  },
  {
    tag: "美卡入门",
    title: "美卡入门：第一张美国信用卡怎么开始",
    desc: "写给新手的基础概念：信用记录、ITIN 与 SSN 的区别、申请前要了解什么。",
    href: X_URL,
  },
  {
    tag: "美卡入门",
    title: "用 ITIN 申请 Capital One 的个人记录",
    desc: "以我自己的申请经历为例，分享流程和心得，仅供参考。",
    href: X_URL,
  },
  {
    tag: "独立开发",
    title: "微信小程序从 0 到 1：拼豆图纸生成神器",
    desc: "一个小工具从想法、开发到上线的过程复盘。",
    href: X_URL,
  },
];
