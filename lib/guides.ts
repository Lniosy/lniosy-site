import { C1_ARTICLE_URL } from "./content";

// 教程统一入口：只收真实存在的教程（站内页或我在 X 发的长文/帖子）
export type Guide = { title: string; href: string; source: "站内" | "X 长文" | "X 帖子"; card?: string; cardId?: string };

export const guides: Guide[] = [
  { title: "ITIN 没 SSN，我是怎么下第一张美卡 C1 的（8 个环节，每个都有坑）", href: C1_ARTICLE_URL, source: "X 长文", card: "Capital One", cardId: "capital-one" },
  { title: "Muse 注册教程：用 Gemini Spark 远程浏览器注册 Muse", href: "/guides/muse/", source: "站内", card: "Muse", cardId: "muse" },
  { title: "美国号码到底怎么选（红包卡购买、激活、保号）", href: "https://x.com/Lniosytest/status/2107024662123225129", source: "X 长文", card: "RedPocket", cardId: "redpocket" },
  { title: "Muse 相关教程（X 帖）", href: "https://x.com/Lniosytest/status/2108838659763908886", source: "X 帖子", card: "Muse", cardId: "muse" },
];
