import { C1_ARTICLE_URL, posts } from "./content";

// 教程目录：站内只做导读和链接。阅读一律打开 X status，不用可能 404 的 i/article。
// 封面是 X 原文封面，2.5:1 原尺寸，不裁切。

export const MUSE_ARTICLE_URL = "https://x.com/Lniosytest/status/2108838659763908886";

export const guideCategories = [
  { id: "bank", label: "银行证券" },
  { id: "card", label: "美卡号码" },
  { id: "ai", label: "AI 工具" },
  { id: "dev", label: "开发实践" },
] as const;

export type GuideCategory = (typeof guideCategories)[number]["id"];

export type GuideUpdate = { label: string; href: string };

export type Guide = {
  id: string;
  title: string;
  summary: string;
  href: string;
  date: string;
  dateTime: string;
  category: GuideCategory;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  recent?: boolean;
  notice?: string;
  updates?: GuideUpdate[];
};

export const guides: Guide[] = [
  {
    id: "schwab",
    title: "嘉信国际户：中国身份证开户",
    summary: "非美国居民用中国身份证开嘉信国际账户的亲历。这篇不把护照或 ITIN 当成前提。",
    href: "https://x.com/Lniosytest/status/2107703304889282809",
    date: "2026.10.07",
    dateTime: "2026-10-07",
    category: "bank",
    cover: "/guides/covers/schwab.webp",
    coverWidth: 2000,
    coverHeight: 800,
  },
  {
    id: "bit",
    title: "BIT 证券开户与入金",
    summary: "用身份证开 BIT 证券，以及入金、买港美股的实操记录。活动和费率以官方页面为准。",
    href: "https://x.com/Lniosytest/status/2118672301868696026",
    date: "2026.11.06",
    dateTime: "2026-11-06",
    category: "bank",
    cover: "/guides/covers/bit.webp",
    coverWidth: 2000,
    coverHeight: 800,
  },
  {
    id: "antbank",
    title: "澳门蚂蚁银行开户",
    summary: "访澳申请澳门蚂蚁银行的开户记录。奖励金额不是长期承诺。",
    href: "https://x.com/Lniosytest/status/2124796236859396304",
    date: "2026.11.23",
    dateTime: "2026-11-23",
    category: "bank",
    cover: "/guides/covers/antbank.webp",
    coverWidth: 2000,
    coverHeight: 800,
    recent: true,
    notice: "原活动截至2026-11-30，优惠以官方为准",
  },
  {
    id: "c1",
    title: "第一张美卡：C1 的 8 个环节",
    summary: "我没有 SSN，用 ITIN 申请 Capital One 的亲历。这是办这张卡的过程。",
    href: C1_ARTICLE_URL,
    date: "2026.10.05",
    dateTime: "2026-10-05",
    category: "card",
    cover: "/guides/covers/c1.webp",
    coverWidth: 2000,
    coverHeight: 800,
  },
  {
    id: "redpocket",
    title: "美国号码怎么选",
    summary: "红包卡购买、激活和保号的个人记录。套餐漫游规则已有后续变化，原文里的流量说法请先看下面两则更新。",
    href: "https://x.com/Lniosytest/status/2107024662123225129",
    date: "2026.10.05",
    dateTime: "2026-10-05",
    category: "card",
    cover: "/guides/covers/redpocket.webp",
    coverWidth: 2000,
    coverHeight: 800,
    updates: [
      { label: "漫游额度后来有变", href: "https://x.com/Lniosytest/status/2112859381150650551" },
      { label: "小米国内漫游", href: "https://x.com/Lniosytest/status/2111751134020780296" },
    ],
  },
  {
    id: "muse",
    title: "用远程浏览器注册 Muse",
    summary: "遇到地区不可用时，用 Gemini Spark 远程浏览器注册 Muse 的原文。",
    href: MUSE_ARTICLE_URL,
    date: "2026.10.10",
    dateTime: "2026-10-10",
    category: "ai",
    cover: "/guides/covers/muse.webp",
    coverWidth: 2000,
    coverHeight: 800,
  },
  {
    id: "cmcc",
    title: "中国移动 5G 消息做短信报警",
    summary: "给服务器脚本接中国移动 5G 消息，用来做短信报警的开通记录。",
    href: "https://x.com/Lniosytest/status/2106681699539018222",
    date: "2026.10.04",
    dateTime: "2026-10-04",
    category: "dev",
    cover: "/guides/covers/cmcc.webp",
    coverWidth: 1800,
    coverHeight: 720,
  },
];

const guideHrefs = new Set(guides.map((g) => g.href));

// 已收进封面目录的长文不再在「更多动态」重复出现。其余真实帖子原样保留。
export const morePosts = posts.filter((p) => !guideHrefs.has(p.url));
