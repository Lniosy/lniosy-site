// 站点内容集中在这里，方便以后替换真实链接。
// 规则：不编造推荐链接、数据、粉丝数或评价。暂无真实 URL 的条目统一指向 X 主页（标记 TODO）。

export const X_URL = "https://x.com/Lniosytest";

// TODO: 上线后替换为正式域名（用于 OG / canonical）
export const SITE_URL = "https://litiancai.vercel.app";

// 关注者数：2026-10-04 17:22 (UTC+8) 从 https://api.fxtwitter.com/Lniosytest 读取 followers=2642，向下取整展示。
// 更新时重新核对，不要凭空填数。
export const X_FOLLOWERS_LABEL = "2,600+";

// 嵌入的真实推文（2026-10-04 从 api.fxtwitter.com 读取，原文照录）
export const featuredTweet = {
  url: "https://x.com/Lniosytest/status/2106623293746971005",
  date: "2026年10月4日",
  text: "拿到 ITIN 以后，我打给 Equifax 建了信用档案。\n查出来 300 分。\n\n不是我信用差，是一条记录都没有，美国银行眼里我就是张白纸。\n9/29 开了 C1，现在等第一期账单报上去。\n从 300 分往上爬，我每一步都发出来。",
};

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
    href: "#referrals",
    cta: "去美卡邀请专区",
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
    title: "新 ITIN 下号后：C1 → Equifax → X Money 踩坑记录",
    desc: "我自己走过的路线：C1 激活、等首期账单上报、Equifax 建档，一条说清。",
    href: "https://x.com/Lniosytest/status/2105998264612897199",
  },
  {
    tag: "独立开发",
    title: "微信小程序从 0 到 1：拼豆图纸生成神器",
    desc: "一个小工具从想法、开发到上线的过程复盘。",
    href: X_URL,
  },
];

// ---------------- 美卡 / 账户邀请专区 ----------------
// 只放真实的邀请链接；不写奖励金额、APR 或任何未经核实的条款。
// 以后新增（Amex、Chase…）直接往 referrals 里追加一项即可。

export type CardArt = { src: string; alt: string };

export const referralGroups = [
  { id: "bank", label: "美卡 / 银行账户" },
  { id: "crypto", label: "加密卡" },
  { id: "ai", label: "工具 / AI" },
  { id: "network", label: "网络环境" },
] as const;
export type ReferralGroup = (typeof referralGroups)[number]["id"];

export type Referral = {
  id: string;
  issuer: string;
  category: string; // 小标签：信用卡 / 跨境账户…
  title: string;
  tagline: string;
  points: string[]; // 只写官方页面或用户本人确认过的内容
  href: string; // 真实邀请链接
  cta: string;
  accent: string;
  group: ReferralGroup;
  visual: "capital-one" | "wise" | "starryblu" | "bybit" | "muse" | "cliproxy";
  badge?: string;
  art?: CardArt[];
  code?: { label: string; value: string; hint?: string };
  quote?: string;
  featured?: boolean;
  footnote?: string;
};

export const referrals: Referral[] = [
  {
    id: "capital-one",
    issuer: "Capital One",
    category: "信用卡 · 预审批",
    title: "Capital One 预审批通道",
    tagline: "不影响信用分，先查能批哪张卡",
    points: [
      "我自己用 ITIN 办下了 Capital One，这是我的邀请入口",
      "进入 Capital One 官方选卡 / 预审工具，不是某一张固定的卡",
      "先看自己可能获批的卡，再决定申请哪张",
    ],
    // 跳转到 capitalone.com/credit-cards/lp/referrals/?referralCode=F0JFG8JY…
    href: "https://i.capitalone.com/Jf9f7s1cs",
    cta: "去 Capital One 预审",
    accent: "#c8f04a",
    group: "bank",
    visual: "capital-one",
    art: [
      { src: "/cards/quicksilver.png", alt: "Capital One Quicksilver 卡面" },
      { src: "/cards/venture-x.png", alt: "Capital One Venture X 卡面" },
      { src: "/cards/savor.png", alt: "Capital One Savor 卡面" },
    ],
    quote:
      "Hey there! I'm loving my card from Capital One. Their tool makes it easy to see what cards you'll be approved for with no impact to your credit score.",
    featured: true,
    footnote: "卡面来自 Capital One 官网，仅作示意；可申请的卡和结果以官网预审为准。",
  },
  {
    id: "wise",
    issuer: "Wise",
    category: "跨境转账 · 多币种账户",
    title: "Wise 跨境转账 / 多币种账户",
    tagline: "跨境收付、换汇和多币种余额，一个账户搞定",
    points: [
      "官网介绍：在全球范围内收款、汇款和消费，可向 50+ 种货币汇款",
      "支持多币种余额与 Wise 借记卡",
    ],
    href: "https://wise.com/invite/ahpc/l1ulth3",
    cta: "通过邀请注册 Wise",
    accent: "#9fe870",
    group: "bank",
    visual: "wise",
    footnote: "费率与可用功能因地区而异，以 Wise 官网为准。",
  },
  {
    id: "starryblu",
    issuer: "StarryBlu",
    category: "新加坡 · 多币种账户",
    title: "StarryBlu（新加坡）",
    tagline: "多币种全球账户，支持 Mastercard 虚拟卡 / 实体卡",
    points: [
      "官网介绍：Starryblu Singapore 持有新加坡 MAS 监管的 MPI 牌照",
      "官网介绍：管理 USD、HKD、EUR、GBP、SGD、JPY、AUD 等多种货币",
    ],
    // 跳转到 www.starryblu.com/launchIndex?inviteCode=MSHK00O
    href: "https://sg.starryblu.com/x/1noORvTX",
    cta: "通过邀请注册 StarryBlu",
    accent: "#3ad6ff",
    group: "bank",
    visual: "starryblu",
    code: { label: "白名单推荐码", value: "MSHK00O", hint: "M S H K + 数字 0 0 + 字母 O" },
    footnote: "注册时如需填写推荐码，请使用上面的白名单推荐码。",
  },
  {
    id: "bybit",
    issuer: "Bybit",
    category: "加密卡 · Bybit Card",
    title: "Bybit Card",
    // 官方邀请文案原文
    tagline: "申请 Bybit Card，解锁 10% 返现和 10 USDT 体验金",
    points: [
      "以上为 Bybit 官方邀请文案，活动规则以官方活动为准",
      "可申请地区、资格与返现规则以 Bybit 官方页面为准",
    ],
    href: "https://www.bybit.com/cards/?ref=0LL34JO&source=applet_invite",
    cta: "申请 Bybit Card",
    accent: "#f7a600",
    group: "crypto",
    visual: "bybit",
    footnote: "加密资产波动大、有风险；Bybit 服务在部分国家/地区不可用。",
  },
  {
    id: "muse",
    issuer: "Muse",
    category: "个人 AI 智能体",
    title: "Muse 个人 AI 智能体",
    tagline: "给它一个目标或日常任务，它来帮你搞定",
    points: [
      "官网介绍：Muse 是你的个人 AI 智能体（Muse from Meta）",
      "加入后 48 小时内在「设置」里兑现邀请码，双方各得 10 亿个 Muse 词元",
    ],
    href: "https://muse.ai/join",
    cta: "加入 Muse",
    accent: "#2f6bff",
    group: "ai",
    visual: "muse",
    badge: "from Meta",
    code: { label: "邀请码", value: "WZW03J", hint: "W Z W + 数字 0 3 + J" },
    footnote: "邀请奖励以 Muse 官方活动为准。",
  },
  {
    id: "cliproxy",
    issuer: "CliProxy",
    category: "网络环境 · 住宅 IP",
    title: "CliProxy 住宅 IP",
    tagline: "我买 IP 的地方",
    points: [
      "我是配合比特浏览器（BitBrowser）一起用的，注册 X 也在比特里注册，比较稳",
      "这个 IP 我用着挺不错：挂 X、挂 C1 App、Muse、美区 PayPal 都可以",
      "官网介绍：动态住宅 IP，覆盖 180+ 国家和地区",
    ],
    // 跳转到 cliproxy.com/?code=8i9xuktqq
    href: "https://share.cliproxy.com/share/8i9xuktqq",
    cta: "去 CliProxy 看看",
    accent: "#8b5cf6",
    group: "network",
    visual: "cliproxy",
    footnote: "以上是我个人的使用心得，不代表任何保证；请遵守各平台规则与当地法律法规。",
  },
];

export const referralDisclosure =
  "含我的邀请链接，通过链接申请我可能获得奖励；个人经验不构成金融建议。";
