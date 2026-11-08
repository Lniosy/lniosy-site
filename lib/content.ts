// 站点内容集中在这里，方便以后替换真实链接。
// 规则：不编造推荐链接、数据、粉丝数或评价。暂无真实 URL 的条目统一指向 X 主页（标记 TODO）。

export const X_URL = "https://x.com/Lniosytest";

// TODO: 上线后替换为正式域名（用于 OG / canonical）
export const SITE_URL = "https://litiancai.vercel.app";

// 关注者数：2026-10-13 19:19 (UTC+8) 从 X API get_users_by_username 读取 followers=4975，向下取整展示。
// 更新时重新核对，不要凭空填数。
export const X_FOLLOWERS_LABEL = "4,900+";

export const profile = {
  name: "李天才",
  nameEn: "TianCai",
  handle: "@Lniosytest",
  mascot: "天才毛球",
  // 来自 X 个人简介
  bio: "AI × 加密货币 × 独立开发",
  bio2: "自媒体实战分享",
};

// ---------------- 我在写什么：只放真实发过的 X 帖子 ----------------
// 数据来源：2026-10-04 17:45 (UTC+8) 从 api.fxtwitter.com 读取 @Lniosytest 公开时间线 / status 接口。
// 标题与摘录均为原文（仅做断行合并），日期为 UTC+8。不要添加没发过的帖子。

export const topics = [
  { id: "card", label: "美卡 / ITIN", line: "我自己用 ITIN 办下了 Capital One，从 300 分往上爬的每一步。" },
  { id: "ai", label: "AI", line: "AI 编程和工具的实用信息。" },
  { id: "indie", label: "独立开发", line: "一个人折腾产品、服务器和脚本的记录。" },
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
  { id: "bank", label: "美卡 · 银行账户" },
  { id: "securities", label: "证券" },
  { id: "crypto", label: "加密 U 卡" },
  { id: "tools", label: "出海工具（AI / IP / 手机号）" },
  // { id: "x", label: "X / 蓝V" }, // 蓝V卡暂时下架，恢复时一起取消注释
] as const;
export type ReferralGroup = (typeof referralGroups)[number]["id"];

export type Referral = {
  id: string;
  slug: string; // 单卡直达页 /referrals/<slug>/，与 id 解耦，定了就别改（外面可能已分享）
  issuer: string;
  category: string; // 小标签：信用卡 / 跨境账户…
  title: string;
  tagline: string;
  points: string[]; // 只写官方页面或用户本人确认过的内容
  href: string; // 真实邀请链接
  cta: string;
  accent: string;
  group: ReferralGroup;
  visual: "capital-one" | "wise" | "starryblu" | "bit" | "bybit" | "savo" | "mexc" | "plasma" | "muse" | "cliproxy" | "ipequal" | "antbank" | "ifast" | "redpocket" | "ronvip" | "airnova";
  badge?: string;
  art?: CardArt[];
  code?: { label: string; value: string; hint?: string };
  quote?: string;
  featured?: boolean;
  footnote?: string;
  story?: { label: string; href: string }; // 次要链接：我的真实经历
  guide?: { label: string; href: string; keywords?: string }; // 卡片上的「查看教程」按钮：站内路径或外链（http 开头自动新标签页打开）
  // 结构化信息卡（目前仅 antbank 使用）：数字均取自官方素材图
  tiers?: { when: string; reward: string; note?: string; valueHint?: string }[]; // valueHint：股票类奖励的参考价（必须带「约」+ 收盘日期）
  feeHighlight?: { title: string; lines: string[] };
  abilities?: string[];
  notMine?: boolean; // true = 网友分享的可用邀请、非本人：不显示「我有返利」，单页说明改为非本人口径
  hidden?: boolean; // true = 暂时下架：不在任何页面展示，也不生成 /referrals/<slug>/ 和 /go/<slug>/；删掉这行即恢复
};

const allReferrals: Referral[] = [
  // 2026-10-10 老板要求恢复展示
  {
    id: "capital-one",
    slug: "capitalone",
    notMine: true,
    issuer: "Capital One",
    category: "信用卡 · 预审批",
    title: "Capital One 预审批通道",
    tagline: "先看自己可能获批哪张卡",
    points: [
      "这是随机找的网友分享的可用邀请链接，不是我本人的",
      "进入 Capital One 官方选卡 / 预审工具，不是某一张固定的卡",
      "先看自己可能获批的卡，再决定申请哪张",
    ],
    // 网友可用邀请链接（非本人）
    href: "https://i.capitalone.com/Gdrpz5f7p",
    cta: "去 Capital One 预审",
    accent: "#c8f04a",
    group: "bank",
    visual: "capital-one",
    art: [
      { src: "/cards/quicksilver.png", alt: "Capital One Quicksilver 卡面" },
      { src: "/cards/venture-x.png", alt: "Capital One Venture X 卡面" },
      { src: "/cards/savor.png", alt: "Capital One Savor 卡面" },
    ],
    featured: true,
    story: { label: "看我的真实经历", href: C1_ARTICLE_URL },
    // 「查看相关教程」：我在 X 发的 C1 申卡长文（与 story 同一篇，卡上只显示这一个按钮）
    guide: { label: "查看相关教程", href: C1_ARTICLE_URL, keywords: "C1 申卡 教程 ITIN Capital One" },
    footnote: "邀请链接为网友分享、非本人；卡面来自 Capital One 官网，仅作示意，可申请的卡和结果以官网预审为准。",
  },
  {
    id: "wise",
    slug: "wise",
    issuer: "Wise",
    category: "跨境转账 · 多币种账户",
    title: "Wise 跨境转账 / 多币种账户",
    tagline: "跨境收付、换汇和多币种余额，一个账户搞定",
    points: [
      "官网提供跨境收款、汇款和多币种余额",
      "借记卡和可用货币以 Wise 官网为准",
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
    slug: "starryblu",
    hidden: true, // 暂时下架，老板要求；恢复时删掉 hidden
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
    id: "antbank",
    slug: "aomenant",
    issuer: "Ant Bank Macau",
    category: "银行 · 港澳",
    title: "澳门蚂蚁银行",
    // 2026-11-08：原先的十月新客礼写明截止 2026-10-31，已过该日期。奖励和费率数字不再列出。
    tagline: "港澳银行账户，这是我的邀请入口",
    points: [
      "邀请链接和邀请码都在这张卡上，可直接复制",
      "开户条件、费用和活动以澳门蚂蚁银行官方页面为准",
    ],
    href: "https://render.alipay.com/p/c/180020570000149153/index.html?invite-code=LPH9BZQY",
    cta: "通过邀请开户蚂蚁银行",
    accent: "#0f766e",
    group: "bank",
    visual: "antbank",
    code: { label: "邀请码", value: "LPH9BZQY" },
    footnote: "2026-11-08 起不再展示已过期的十月新客礼数字。当前活动以官方页面为准。",
  },
  {
    id: "ifast",
    slug: "ifast",
    issuer: "iFAST Global Bank",
    category: "英国 · 银行账户",
    title: "iFAST Global Bank",
    tagline: "我在英国用的银行账户",
    points: [
      "我在英国使用 iFAST Global Bank",
      "邀请链接和推荐码都在这张卡上，可直接复制",
    ],
    href: "https://www.ifastgb.com/tellafriend/yanweil5306",
    cta: "通过邀请注册 iFAST",
    accent: "#1e3a5f",
    group: "bank",
    visual: "ifast",
    code: { label: "推荐码", value: "34LOPZN7WK" },
    footnote: "活动与资格以 iFAST 官网为准。",
  },
  {
    id: "bit",
    slug: "bit",
    issuer: "BIT",
    category: "证券 · BIT 证券",
    title: "BIT 证券",
    tagline: "BIT证券开户与入金实操",
    points: [
      "官网和邀请码分开：打开官网不会自动带上邀请码，要在注册页的邀请码栏手动填写",
      "客户端下载页是 bit.com/download，同样不会自动填写邀请码",
      "详细步骤在我的推特文章里",
    ],
    // 原稿只有官网和手动邀请码，没有带参数的专属链接
    href: "https://www.bit.com",
    cta: "前往 BIT 官网",
    accent: "#1f6b45",
    group: "securities",
    visual: "bit",
    code: { label: "邀请码", value: "TIANCAI", hint: "注册时手动填写，全大写。点开官网不会自动绑定。" },
    guide: { label: "查看我的推特文章", href: "https://x.com/Lniosytest/status/2118672301868696026", keywords: "BIT 证券 开户 入金 推特文章" },
    footnote: "资格、费用和可交易品种以 bit.com 官方页面为准。证券和加密资产都有风险。",
  },
  {
    id: "bybit",
    slug: "bybit",
    issuer: "Bybit",
    category: "加密卡 · Bybit Card",
    title: "Bybit Card",
    // 2026-11-08：官网仍能看到返现和推荐奖励页面，但门槛、上限和地区限制很多。卡上不再写死数字。
    tagline: "申请 Bybit Card，这是我的邀请入口",
    points: [
      "返现、体验金和申请资格以 Bybit 官方页面为准，规则会变",
      "可申请地区以 Bybit 官方页面为准",
    ],
    href: "https://www.bybit.com/cards/?ref=0LL34JO&source=applet_invite",
    cta: "申请 Bybit Card",
    accent: "#f7a600",
    group: "crypto",
    visual: "bybit",
    footnote: "加密资产波动大、有风险；Bybit 服务在部分国家/地区不可用。",
  },
  {
    id: "savo",
    slug: "savo",
    issuer: "Savo",
    category: "加密卡 · Savo",
    title: "Savo U卡",
    tagline: "全能钱包 + U 卡，这是我的邀请入口",
    points: [
      "全能钱包，可开虚拟卡和实体 Visa 卡",
      "支持加密货币充值，可绑定 Apple Pay / Google Pay",
      "开通地区与费率以官网为准",
    ],
    href: "https://sv.me/r/SCVQG",
    cta: "通过邀请注册 Savo",
    accent: "#22c55e",
    group: "crypto",
    visual: "savo",
    footnote: "规则以 Savo 官网为准；加密资产波动大、有风险，请遵守当地法律法规。",
  },
  {
    id: "mexc",
    slug: "mexc",
    issuer: "MEXC",
    category: "加密卡 · MEXC",
    title: "MEXC U卡 / 交易所",
    tagline: "MEXC 交易所注册入口，也可在站内申请 U 卡",
    points: [
      "交易所注册入口，也可在站内申请 U 卡",
      "手续费、返现和活动以 MEXC 官网当时页面为准",
    ],
    href: "https://s.mexc.com/referral/soPlwdQEbb",
    cta: "通过邀请注册 MEXC",
    accent: "#2f7cf6",
    group: "crypto",
    visual: "mexc",
    footnote: "返现与费率规则以 MEXC 官网为准；加密资产波动大、有风险。",
  },
  {
    id: "plasma",
    slug: "plasma",
    issuer: "Plasma",
    category: "加密卡 · Plasma",
    title: "Plasma One",
    tagline: "稳定币 Visa 卡，非托管钱包，这是我的邀请入口",
    points: [
      "这是我的 Plasma One 邀请入口",
      "卡种、托管方式、返现和档位以 Plasma 官网为准",
      "邀请是否算数，以官网规则为准",
    ],
    href: "https://plasma.org/download/A3BZAC",
    cta: "通过邀请注册 Plasma One",
    accent: "#a3e635",
    group: "crypto",
    visual: "plasma",
    footnote: "返现与档位规则以 Plasma 官网为准；加密资产波动大、有风险，请遵守当地法律法规。",
  },
  {
    id: "muse",
    slug: "muse",
    issuer: "Muse",
    category: "个人 AI 智能体",
    title: "Muse 个人 AI 智能体",
    tagline: "给它一个目标或日常任务，它来帮你搞定",
    points: [
      "官网介绍：Muse 是你的个人 AI 智能体（Muse from Meta）",
      "邀请码在设置里兑现。奖励数量和时限以 Muse 官方页面为准",
    ],
    href: "https://muse.ai/join",
    cta: "加入 Muse",
    accent: "#2f6bff",
    group: "tools",
    visual: "muse",
    badge: "from Meta",
    code: { label: "邀请码", value: "WZW03J", hint: "W Z W + 数字 0 3 + J" },
    guide: { label: "查看相关教程", href: "https://x.com/Lniosytest/status/2108838659763908886", keywords: "Muse 注册教程 Gemini Spark 远程浏览器 年龄验证 兑换邀请码 教程" },
  },
  {
    id: "cliproxy",
    slug: "cliproxy",
    issuer: "CliProxy",
    category: "网络环境 · 住宅 IP",
    title: "CliProxy 住宅 IP",
    tagline: "我买 IP 的地方",
    points: [
      "我是配合比特浏览器（BitBrowser）一起用的，注册 X 也在比特里注册，比较稳",
      "这个 IP 我用着挺不错：挂 X、挂 C1 App、Muse、美区 PayPal 都可以",
      "官网介绍动态住宅 IP，覆盖范围以官网为准",
    ],
    // 跳转到 cliproxy.com/?code=8i9xuktqq
    href: "https://share.cliproxy.com/share/8i9xuktqq",
    cta: "去 CliProxy 看看",
    accent: "#8b5cf6",
    group: "tools",
    visual: "cliproxy",
    footnote: "以上是我个人的使用心得，不代表任何保证；请遵守各平台规则与当地法律法规。",
  },
  {
    id: "ipequal",
    slug: "ipequal",
    issuer: "IPEqual",
    category: "网络环境 · 住宅 IP",
    title: "IPEqual 住宅 IP",
    tagline: "专给 ChatGPT / Claude 用的住宅节点",
    points: [
      "官网定位：针对访问 ChatGPT 的住宅 IP 和网络加速（EqualDCDN 旗下）",
      "具体节点和效果以官网为准",
      "如页面写有邀请折扣，以购买页当时显示为准",
    ],
    href: "https://www.ipequal.com/?ref=9a08d94e8b",
    cta: "去 IPEqual 看看",
    accent: "#10b981",
    group: "tools",
    visual: "ipequal",
    footnote: "套餐与价格以 IPEqual 官网为准；请遵守各平台规则与当地法律法规。",
  },
  {
    id: "redpocket",
    slug: "redpocket",
    issuer: "RedPocket",
    category: "网络环境 · 美国手机号",
    title: "RedPocket 红包卡",
    tagline: "美国实体手机号卡",
    points: [
      "美国实体手机号卡，我自己用的就是这张",
      "价格、通话、短信和流量以 eBay 官方店当时页面为准",
      "我人在国内连 Wi-Fi、开 Wi-Fi 通话就激活成功了；这是我的个人实测，官方不保证",
    ],
    // 邀请链接：跳转到 RedPocket 官方页面
    href: "https://ebay.io/m/kAae1p",
    cta: "去 RedPocket 看看",
    // 「查看相关教程」：10/05 X 长文《美国号码到底怎么选》，含红包卡购买、激活、保号步骤
    guide: { label: "查看相关教程", href: "https://x.com/Lniosytest/status/2107024662123225129", keywords: "红包卡 RedPocket 美国手机号 激活 保号 教程" },
    accent: "#e11d48",
    group: "tools",
    visual: "redpocket",
    footnote: "套餐与价格以 eBay 官方店页面为准。2026-11-08 起卡上不再写死价格和流量数字。国内激活是我的个人实测，官方不保证。",
  },
  {
    id: "airnova",
    slug: "airnova",
    issuer: "Airnova",
    category: "eSIM · 全球流量",
    title: "Airnova 全球旅行 eSIM",
    tagline: "一张 eSIM 全球可用，落地即上网",
    points: [
      "官网介绍旅行 eSIM，覆盖范围以官网为准；不用换实体卡，原来的实体卡可以保留",
      "支持 iOS 与 Android，安装约 1 分钟，24/7 在 App 内管理流量",
      "用法：选目的地和套餐 → 出发前扫码 / 快捷安装 eSIM → 落地后打开数据漫游即可启用",
    ],
    href: "https://url.airnova.app/aff/AESIM",
    cta: "通过邀请注册 Airnova",
    accent: "#0ea5e9",
    group: "tools",
    visual: "airnova",
    footnote: "购买前请确认手机支持 eSIM 且没有运营商锁；套餐按行程天数、流量和覆盖地区选。套餐与覆盖以官网为准。",
  },
  // 蓝V代开卡暂时下架（2026-10-07 老板要求），等创作者收益审核通过、老板通知后再取消注释
  // {
  //   id: "ronvip",
  //   slug: "ronvip",
  //   issuer: "RON Premium",
  //   category: "X / 蓝V · 代开通",
  //   title: "低价开推特蓝V",
  //   tagline: "我有返利，这是我的推广入口",
  //   points: [
  //     "可开 X Premium（蓝V），也有 Telegram Premium",
  //     "下单只填公开的 X 用户名，不用给密码",
  //     "下单后可以用 X 用户名查订单进度",
  //     "实时价格以页面为准",
  //   ],
  //   href: "https://ronvip.pages.dev/?ref=RP6Q302D4M1U2J215G",
  //   cta: "去开蓝V",
  //   accent: "#1d9bf0",
  //   group: "x",
  //   visual: "ronvip",
  //   footnote: "第三方代开通平台，不是 X 官方；会员功能和资格以 X 平台规则为准。",
  // },
];

// 对外只导出未下架的卡片（hidden: true 的保留数据但不展示）
export const referrals: Referral[] = allReferrals.filter((r) => !r.hidden);

export const referralDisclosure =
  "含我的邀请链接，通过链接申请我可能获得奖励；个人经验不构成金融建议。";

export const notMineDisclosure =
  "该邀请链接是随机找的网友分享的可用链接，不是我本人的；个人经验不构成金融建议。";
export const disclosureFor = (r: { notMine?: boolean }) => (r.notMine ? notMineDisclosure : referralDisclosure);

// 点击统计：/go/<slug>/ 静态跳转页（Vercel Web Analytics 记一次 pageview 后跳转）
export const goSlug = (id: string) => (id === "capital-one" ? "c1" : id);
export const goHref = (id: string) => `/go/${goSlug(id)}/`;

// 单卡直达页：/referrals/<slug>/
export const referralPath = (r: Pick<Referral, "slug">) => `/referrals/${r.slug}/`;
export const findReferralBySlug = (slug: string) => referrals.find((r) => r.slug === slug);

// 旧锚点兼容：首页 /#xxx → 新页面
export const legacyHashMap: Record<string, string> = {
  referrals: "/referrals/",
  "ref-bank": "/referrals/#ref-bank",
  "ref-crypto": "/referrals/#ref-crypto",
  "ref-ai": "/referrals/#ref-tools",
  "ref-network": "/referrals/#ref-tools",
  writing: "/guides/#writing",
  search: "/referrals/",
};

// 免费领：只放已确认的第三方活动；跳转页走 /go/<slug>/（noindex）
// 已按老板要求删除。目前没有进行中的活动。
export type Freebie = {
  id: string;
  title: string;
  points: string[];
  note: string;
  href: string;
  cta: string;
};

export const freebies: Freebie[] = [];
