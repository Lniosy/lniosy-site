// 站点内容集中在这里，方便以后替换真实链接。
// 规则：不编造推荐链接、数据、粉丝数或评价。暂无真实 URL 的条目统一指向 X 主页（标记 TODO）。

export const X_URL = "https://x.com/Lniosytest";

// TODO: 上线后替换为正式域名（用于 OG / canonical）
export const SITE_URL = "https://litiancai.vercel.app";

// 关注者数：2026-10-04 17:22 (UTC+8) 从 https://api.fxtwitter.com/Lniosytest 读取 followers=2642，向下取整展示。
// 更新时重新核对，不要凭空填数。
export const X_FOLLOWERS_LABEL = "2,600+";

export const profile = {
  name: "李天才",
  nameEn: "TianCai",
  handle: "@Lniosytest",
  mascot: "天才毛球",
  // 来自 X 个人简介
  bio: "AI × 加密货币 × 独立开发",
  bio2: "微信小程序从 0 到 1 全链路｜自媒体实战分享",
};

// ---------------- 我在写什么：只放真实发过的 X 帖子 ----------------
// 数据来源：2026-10-04 17:45 (UTC+8) 从 api.fxtwitter.com 读取 @Lniosytest 公开时间线 / status 接口。
// 标题与摘录均为原文（仅做断行合并），日期为 UTC+8。不要添加没发过的帖子。

export const topics = [
  { id: "card", label: "美卡 / ITIN", line: "我自己用 ITIN 办下了 Capital One，从 300 分往上爬的每一步。" },
  { id: "ai", label: "AI", line: "AI 编程和工具的实用信息。" },
  { id: "indie", label: "独立开发", line: "一个人折腾产品、服务器和脚本的记录。" },
  { id: "miniapp", label: "微信小程序", line: "我做的「拼豆图纸生成神器」，在微信里搜索名字就能找到。" },
] as const;
export type TopicId = (typeof topics)[number]["id"];

export type Post = {
  id: string;
  url: string;
  topic: TopicId;
  date: string; // UTC+8
  kind: "post" | "thread" | "article" | "image";
  title: string;
  excerpt?: string;
  image?: string;
  imageBg?: string; // 图片留白处的底色（取自图片边缘）
  featured?: boolean;
  lead?: boolean; // 置顶长文：整行展示，不需要配图
};

export const C1_ARTICLE_URL = "https://x.com/Lniosytest/status/2106961582370537803";

export const posts: Post[] = [
  {
    id: "2106961582370537803",
    url: C1_ARTICLE_URL,
    topic: "card",
    date: "2026.10.05",
    kind: "article",
    title: "ITIN 没 SSN，我是怎么下第一张美卡 C1 的（8 个环节，每个都有坑）",
    featured: true,
    lead: true,
  },
  {
    id: "2106623293746971005",
    url: "https://x.com/Lniosytest/status/2106623293746971005",
    topic: "card",
    date: "2026.10.04",
    kind: "image",
    title: "拿到 ITIN 以后，我打给 Equifax 建了信用档案。查出来 300 分。",
    excerpt: "不是我信用差，是一条记录都没有，美国银行眼里我就是张白纸。9/29 开了 C1，现在等第一期账单报上去。从 300 分往上爬，我每一步都发出来。",
    image: "/posts/2106623293746971005.jpg",
    imageBg: "#fff8e8",
    featured: true,
  },
  {
    id: "2106681699539018222",
    url: "https://x.com/Lniosytest/status/2106681699539018222",
    topic: "indie",
    date: "2026.10.04",
    kind: "article",
    title: "用中国移动 5G 消息，给服务器脚本加个免费短信报警推送服务（附开通步骤）",
    excerpt: "我有几个脚本常年挂在服务器上跑。平时不出声，挂了也不吱声……这两天折腾出一个白嫖的法子，现在它一挂，我手机直接来条短信。",
    image: "/posts/2106681699539018222.jpg",
    imageBg: "#fff9ef",
    featured: true,
  },
  {
    id: "2106642310981361682",
    url: "https://x.com/Lniosytest/status/2106642310981361682",
    topic: "ai",
    date: "2026.10.04",
    kind: "post",
    title: "国庆刷 X，一半人在晒旅游，一半人在哭 Claude Code 被封",
    excerpt: "刷到有人给的解法是整套环境直接搬到海外 VPS，IP、系统、时区一点中国味都不留。",
  },
  {
    id: "2106435472993992995",
    url: "https://x.com/Lniosytest/status/2106435472993992995",
    topic: "ai",
    date: "2026.10.04",
    kind: "post",
    title: "OpenCode 把 DeepSeek Flash 的额度永久提到了每月 60 刀。",
    excerpt: "便宜模型干杂活，贵模型干难活。小白入门 AI 编程，现在是最便宜的时候。",
  },
  {
    id: "2106433621519192418",
    url: "https://x.com/Lniosytest/status/2106433621519192418",
    topic: "card",
    date: "2026.10.04",
    kind: "image",
    title: "为什么C1信用卡刷完，不用急着隔天就还清？",
  },
  {
    id: "2106426556973306148",
    url: "https://x.com/Lniosytest/status/2106426556973306148",
    topic: "card",
    date: "2026.10.04",
    kind: "image",
    title: "为什么C1首卡下来以后，我劝你别急着冲SoFi？",
  },
  {
    id: "2105998264612897199",
    url: "https://x.com/Lniosytest/status/2105998264612897199",
    topic: "card",
    date: "2026.10.02",
    kind: "thread",
    title: "新ITIN下号后，C1→EQ→X Money 我踩完的坑，一条说清",
    excerpt: "C1激活后，信用记录不会马上有，要等第一期账单出来，再过1-2周才报给信用局……ITIN用户最大的门槛不是分数，是“系统认不认得你”。",
  },
  {
    id: "2105566896724545611",
    url: "https://x.com/Lniosytest/status/2105566896724545611",
    topic: "card",
    date: "2026.10.01",
    kind: "post",
    title: "有ITIN的注意了：新泽西是最容易拿美国驾照的州之一",
    excerpt: "要准备：中国护照 · 中国驾照 · ITIN · 新泽西居住地址证明（要有你名字）……但注意：必须真的住在新泽西。",
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
  visual: "capital-one" | "wise" | "starryblu" | "bybit" | "muse" | "cliproxy" | "redpocket";
  badge?: string;
  art?: CardArt[];
  code?: { label: string; value: string; hint?: string };
  quote?: string;
  featured?: boolean;
  footnote?: string;
  story?: { label: string; href: string }; // 次要链接：我的真实经历
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
    story: { label: "看我的真实经历", href: C1_ARTICLE_URL },
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
    footnote: "据公开资料，Muse 目前只对美国和加拿大开放，登录会核对账号地区，不在开放地区使用有封号风险。邀请奖励以 Muse 官方活动为准。",
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
  {
    id: "redpocket",
    issuer: "RedPocket",
    category: "网络环境 · 美国手机号",
    title: "RedPocket 红包卡",
    tagline: "美国实体手机号卡",
    points: [
      "美国实体手机号卡，我自己用的就是这张",
      "我用它收 C1 等美国服务的短信验证码",
    ],
    // 邀请链接：跳转到 RedPocket 官方页面
    href: "https://ebay.io/m/kAae1p",
    cta: "去 RedPocket 看看",
    accent: "#e11d48",
    group: "network",
    visual: "redpocket",
    footnote: "以上是我个人的使用心得，套餐与价格以 RedPocket 官方页面为准。",
  },
];

export const referralDisclosure =
  "含我的邀请链接，通过链接申请我可能获得奖励；个人经验不构成金融建议。";

// 点击统计：/go/<slug>/ 静态跳转页（Vercel Web Analytics 记一次 pageview 后跳转）
export const goSlug = (id: string) => (id === "capital-one" ? "c1" : id);
export const goHref = (id: string) => `/go/${goSlug(id)}/`;
