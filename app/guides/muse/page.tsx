import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, X_URL, goHref, profile, referrals } from "@/lib/content";
import CopyBlock from "@/components/CopyBlock";
import CopyCode from "@/components/CopyCode";
import { Arrow, Check, XLogo } from "@/components/Icons";

// 内容来源：我在 X 发的长文（2026-10-10 16:34 UTC+8 发布），正文按原文整理，未新增事实。
// 原文：https://x.com/Lniosytest/status/2108838659763908886
// 页面正文不放其它外链；只在页底留「在 X 上看原文」和站内 /go/muse/ 邀请入口。

const SOURCE_URL = "https://x.com/Lniosytest/status/2108838659763908886";
const PATH = "/guides/muse/";
const PUBLISHED = "2026-10-10T16:34:51+08:00";
const MODIFIED = "2026-10-10T22:30:00+08:00";

const title = "Muse 注册教程：用 Gemini Spark 远程浏览器注册 Muse（附邀请码）｜李天才";
const h1 = "Muse 注册教程：用 Gemini Spark 远程浏览器注册 Muse";
const description =
  "Muse 注册提示「not available in your country or region」时，用 Gemini Spark 远程浏览器走完注册、年龄验证和兑换邀请码。附开始前准备清单、卡点排查、三条风险提示和 Muse 邀请码 WZW03J。";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Muse 注册教程", "Muse AI", "Meta Muse", "Muse 个人 AI 智能体", "Gemini Spark", "Spark 远程浏览器", "远端浏览器", "Google AI Pro", "Muse 邀请码", "Muse 地区不可用", "Muse waitlist"],
  authors: [{ name: "李天才", url: X_URL }],
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "zh_CN",
    url: PATH,
    siteName: "李天才",
    title,
    description,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: [X_URL],
    images: [{ url: "/guides/muse/muse-og.jpg", width: 1200, height: 630, alt: "Muse 地区不可用，用 Gemini Spark 远程浏览器注册" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lniosytest",
    creator: "@Lniosytest",
    title,
    description,
    images: ["/guides/muse/muse-og.jpg"],
  },
};

const img = (name: string) => `/guides/muse/${name}.webp`;

const steps = [
  { id: "prepare", name: "开始前准备", text: "准备 Google AI Pro 或 Ultra 订阅、年满 18 岁的个人 Google 账号（开着 Gemini 活动记录）、一个能收验证码的邮箱，和一张 Visa / Mastercard（或 Instagram / Facebook 账号）。", image: "muse-02-checklist" },
  { id: "spark", name: "在 Gemini 里调出远程浏览器", text: "打开 Gemini，点左上角的 Spark，发送「帮我在远端浏览器打开 Google」，允许 Spark 使用远程浏览器，再点「接管任务」（Take over task）。", image: "muse-03-spark-remote-browser" },
  { id: "signup", name: "在远程浏览器里注册 Muse", text: "在远程浏览器地址栏打开 Muse 官网的 join 注册页，填邮箱和 6 位验证码、填真实出生日期，读完须知点「开始」。还跳候补页就新开一个 Spark 会话重来。", image: "muse-04-signup" },
  { id: "age", name: "年龄验证：刷卡、绑 Instagram、绑 Facebook 三选一", text: "选支付卡验证时，在 Meta 验证页填卡号、有效期、安全码、账单国家和邮编。会暂扣 1 美元，页面写 5 到 7 个工作日退回。", image: "muse-05-age-verification" },
  { id: "redeem", name: "注册完 48 小时内兑换邀请码", text: "进到 Muse 里面，去「设置 → 通用 → 兑换邀请码」（Redeem invite code），填 6 位码，点确认。你和发码的人各得 10 亿 Muse Tokens。", image: "muse-06-redeem-invite-code" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}${PATH}#article`,
      headline: h1,
      description,
      inLanguage: "zh-CN",
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      mainEntityOfPage: `${SITE_URL}${PATH}`,
      image: [`${SITE_URL}/guides/muse/muse-og.jpg`, `${SITE_URL}${img("muse-01-overview")}`],
      author: { "@type": "Person", name: "李天才", alternateName: ["TianCai", profile.handle, "天才毛球"], url: X_URL },
      publisher: { "@type": "Person", name: "李天才", url: SITE_URL },
      isBasedOn: SOURCE_URL,
      about: [
        { "@type": "SoftwareApplication", name: "Muse", alternateName: ["Muse AI", "Meta Muse"], applicationCategory: "个人 AI 智能体" },
        { "@type": "SoftwareApplication", name: "Gemini Spark", alternateName: ["Spark", "Gemini 远程浏览器"] },
      ],
    },
    {
      "@type": "HowTo",
      "@id": `${SITE_URL}${PATH}#howto`,
      name: "用 Gemini Spark 远程浏览器注册 Muse",
      description,
      inLanguage: "zh-CN",
      image: `${SITE_URL}${img("muse-01-overview")}`,
      supply: [
        { "@type": "HowToSupply", name: "Google AI Pro 或 Ultra 订阅" },
        { "@type": "HowToSupply", name: "能收验证码的邮箱" },
        { "@type": "HowToSupply", name: "Visa 或 Mastercard（或 Instagram / Facebook 账号）" },
      ],
      tool: [{ "@type": "HowToTool", name: "Gemini Spark 远程浏览器" }],
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
        url: `${SITE_URL}${PATH}#${s.id}`,
        image: `${SITE_URL}${img(s.image)}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "AI 工具", item: `${SITE_URL}/#ref-ai` },
        { "@type": "ListItem", position: 3, name: "Muse 注册教程", item: `${SITE_URL}${PATH}` },
      ],
    },
  ],
};

/* ---------- 小组件 ---------- */

function Figure({ name, alt, caption, w = 1600, h = 900, priority = false }: { name: string; alt: string; caption?: string; w?: number; h?: number; priority?: boolean }) {
  const tall = h > w;
  return (
    <figure className={`my-6 ${tall ? "mx-auto max-w-md" : ""}`}>
      <Image src={img(name)} alt={alt} width={w} height={h} priority={priority} sizes={tall ? "(min-width: 768px) 448px, 100vw" : "(min-width: 768px) 720px, 100vw"} className="h-auto w-full border border-line bg-white shadow-[0_10px_30px_-14px_#11121444]" />
      {caption && <figcaption className="mt-2 text-center font-mono text-[11px] tracking-wide text-muted">{caption}</figcaption>}
    </figure>
  );
}

function H2({ id, n, children }: { id: string; n?: number; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mt-14 flex scroll-mt-24 items-start gap-3 border-t border-line pt-8 text-[22px] font-extrabold leading-snug tracking-tight sm:text-[28px]">
      {n !== undefined && <span className="mt-1 grid h-7 min-w-7 shrink-0 place-items-center bg-ink px-1.5 font-mono text-sm text-paper sm:mt-1.5 sm:h-8 sm:min-w-8">{n}</span>}
      <span className="[text-wrap:balance]">{children}</span>
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-[16px] leading-8 text-ink/85 sm:text-[17px]">{children}</p>;
}

function List({ items, ordered = false }: { items: React.ReactNode[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="mt-4 space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-[16px] leading-7 text-ink/85 sm:text-[17px]">
          {ordered ? (
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink font-mono text-xs font-bold">{i + 1}</span>
          ) : (
            <Check className="mt-1.5 h-4 w-4 shrink-0 text-ink" />
          )}
          <span>{it}</span>
        </li>
      ))}
    </Tag>
  );
}

function Note({ tone = "info", title, children }: { tone?: "info" | "warn"; title: string; children: React.ReactNode }) {
  const warn = tone === "warn";
  return (
    <aside className={`mt-6 border-l-4 px-4 py-3.5 sm:px-5 ${warn ? "border-[#e11d48] bg-[#fff1f2]" : "border-[#2f6bff] bg-[#eef3ff]"}`}>
      <p className={`font-mono text-xs font-bold tracking-[0.12em] ${warn ? "text-[#be123c]" : "text-[#1d4ed8]"}`}>{title}</p>
      <div className="mt-1.5 text-[15px] leading-7 text-ink/85">{children}</div>
    </aside>
  );
}

const B = ({ children }: { children: React.ReactNode }) => <strong className="font-bold text-ink">{children}</strong>;

/* ---------- 页面 ---------- */

export default function MuseGuide() {
  const muse = referrals.find((r) => r.id === "muse");

  return (
    <main className="relative min-h-screen overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />

      <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex min-h-10 items-center gap-3 font-mono text-xs font-bold tracking-[0.08em]">
            <Image src="/avatar.jpg" alt="" width={28} height={28} className="h-7 w-7 -rotate-6 rounded-full ring-2 ring-ink" />
            <span>李天才 <em className="hidden not-italic text-muted sm:inline">/ TianCai</em></span>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-6">
            <Link href="/#referrals" className="inline-flex min-h-10 items-center font-mono text-xs font-bold tracking-wide text-ink hover:underline sm:text-muted sm:hover:text-ink sm:hover:no-underline">邀请专区</Link>
            <a href="#invite" className="inline-flex min-h-10 items-center bg-ink px-3.5 py-2 text-[13px] font-semibold text-paper transition hover:-translate-y-0.5">Muse 邀请码</a>
          </nav>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-3xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
        <nav aria-label="面包屑" className="font-mono text-[11px] tracking-wide text-muted">
          <Link href="/" className="hover:text-ink hover:underline">首页</Link>
          <span className="mx-1.5" aria-hidden>/</span>
          <Link href="/#ref-ai" className="hover:text-ink hover:underline">AI 工具</Link>
          <span className="mx-1.5" aria-hidden>/</span>
          <span className="text-ink">Muse 注册教程</span>
        </nav>

        <p className="mt-6 inline-flex flex-wrap items-center gap-2 font-mono text-[11px] font-bold tracking-[0.12em]">
          <span className="bg-[#2f6bff] px-2 py-1 text-white">AI 工具教程</span>
          <span className="border border-ink/20 px-2 py-1 text-muted">Muse × Gemini Spark</span>
        </p>
        <h1 className="mt-4 text-[30px] font-extrabold leading-[1.25] tracking-[-0.02em] [text-wrap:balance] sm:text-[44px]">{h1}</h1>
        <p className="mt-4 text-[17px] leading-8 text-muted sm:text-lg">
          注册、年龄验证、兑换邀请码，5 步走完。附开始前准备清单、卡点排查和动手前要想清楚的三件事。
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
          <span className="font-bold text-ink">李天才 {profile.handle}</span>
          <span aria-hidden>·</span>
          <time dateTime={PUBLISHED}>2026.10.10</time>
          <span aria-hidden>·</span>
          <span>整理自我在 X 发的长文</span>
        </div>

        <Figure name="muse-cover" w={2000} h={800} priority alt="封面：Muse 地区不可用，别再换 IP 了，用 Gemini Spark 远程浏览器注册：AI Pro 会员、远程浏览器、刷卡验年龄、48 小时兑换码" />

        <P>
          <B>Muse</B>（Muse AI，Meta 出的个人 AI 智能体）注册卡在「Muse isn’t available in your country or region yet」，换了节点还是这句，可以试试 <B>Gemini Spark</B>（Google Gemini 里的 Spark 智能体，下文简称 Spark）的<B>远程浏览器</B>（也叫远端浏览器）。
        </P>
        <P>
          我在 X 上看到水Lane 10 月 8 日发的实测：换了好几个节点 IP 都进不去，改用 Gemini Spark 的远程浏览器打开 Muse，注册、年龄验证、兑换邀请码一次走通。我把他的步骤对着 Google 和 Meta 的公开说明，还有两篇同样跑通的中文实录核了一遍，整理成下面这版。
        </P>
        <P>我手上正好有 Google AI Pro，Spark 入口就在 Gemini 左上角，这篇照着它走。</P>

        {/* 步骤速览 */}
        <nav aria-label="步骤速览" className="mt-8 border border-ink bg-[#fffffc] p-5 sm:p-6">
          <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted">步骤速览</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex min-h-11 items-center gap-3 border border-ink/15 bg-white px-3 text-[15px] font-bold transition hover:border-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center bg-ink font-mono text-xs text-paper">{i + 1}</span>
                  <span className="leading-snug">{s.name.split("：")[0]}</span>
                </a>
              </li>
            ))}
            <li>
              <a href="#risks" className="flex min-h-11 items-center gap-3 border border-[#e11d48]/40 bg-white px-3 text-[15px] font-bold transition hover:border-[#e11d48]">
                <span className="grid h-6 w-6 shrink-0 place-items-center bg-[#e11d48] font-mono text-xs text-white">!</span>
                动手前想清楚三件事
              </a>
            </li>
          </ol>
        </nav>

        <Figure name="muse-01-overview" alt="一图看懂：提示地区不可用时，用远程浏览器去注册，5 步走通：开 Spark、远程浏览器、注册 Muse、验年龄、兑换邀请码" caption="一图看懂：5 步走通" />

        <H2 id="what-is-muse">Muse 是什么</H2>
        <P>
          Muse 是 Meta 9 月 8 日发布的个人 AI 智能体（AI Agent），能连你的邮箱、日历这些应用，替你发邮件、订行程、跑网页任务。网页版、iPhone、安卓都有，WhatsApp 里也能直接跟它聊。
        </P>
        <P>
          Meta 官方公告写的是在美国上线，多家媒体报道 9 月 18 日又开了加拿大。其他地区填完生日就会被带到候补页（waitlist），页面上只有一个加入候补名单的按钮，点了也只是排队等通知。
        </P>
        <P>免费版有每周额度，用完可以等刷新，也可以升级：Power 每月 20 美元，Maximum 每月 100 美元。</P>

        <H2 id="prepare" n={1}>开始前准备</H2>
        <List
          items={[
            <><B>Google AI Pro 或 Ultra 订阅</B>（Gemini 的付费会员）。Spark 只对这两档开放，7 月 30 日起 AI Pro 又新开了 160 多个国家</>,
            <><B>个人 Google 账号</B>，年满 18 岁，Gemini 的活动记录（Keep Activity）要开着。工作、学校账号用不了 Spark</>,
            <><B>一个能收验证码的邮箱</B>，Muse 网页版手机号、邮箱都能注册</>,
            <><B>一张 Visa 或 Mastercard</B> 做年龄验证，没有卡可以改绑 Instagram 或 Facebook</>,
          ]}
        />
        <Note title="先掂量">
          AI Pro 是付费订阅，只为注册 Muse 去开一个月，这笔钱自己掂量。Gemini 左上角看不到 Spark，多半是会员档位或者账号类型不对。
        </Note>
        <Figure name="muse-02-checklist" w={1200} h={1600} alt="开始前准备清单：Google AI Pro 或 Ultra、个人 Google 账号且满 18 岁、一个能收验证码的邮箱、Visa 或 Mastercard 一张、注册后 48 小时内兑换邀请码" caption="开始前准备清单" />

        <H2 id="spark" n={2}>在 Gemini 里调出远程浏览器</H2>
        <P>打开 Gemini，点左上角的 Spark，在输入框发一句：</P>
        <div className="mt-4">
          <CopyCode label="发给 Spark 的指令" value="帮我在远端浏览器打开 Google" variant="link" />
        </div>
        <P>
          Spark 会先弹一个确认：「允许 Gemini Spark 使用远程浏览器替你与网站互动吗」，点允许。等一会儿，右边出来一个远程浏览器窗口，自动打开 Google 首页。
        </P>
        <P>
          点页面中间的<B>「接管任务」</B>（英文界面叫 Take over task），把窗口拉大，后面全在这个窗口里自己动手。
        </P>
        <Figure name="muse-03-spark-remote-browser" alt="在 Gemini 里调出远程浏览器：先切到 Spark，发送指令，允许使用远程浏览器，再点接管任务" caption="先切 Spark → 发指令 → 允许 → 接管任务" />
        <Note title="远程浏览器是什么">
          这个远程浏览器跑在 Google 云端。按 Google 帮助中心的说法，它是一个单独新开的浏览器，跟你本机的 Chrome 没关系，碰到要登录的页面，Spark 会停下来等你接管。
        </Note>

        <H2 id="signup" n={3}>在远程浏览器里注册 Muse</H2>
        <P>在远程浏览器地址栏打开 Muse 官网的 join 注册页，按页面走：</P>
        <List
          ordered
          items={[
            "填邮箱，去邮箱找 Meta 发的 6 位验证码填回来",
            "填真实出生日期",
            "读完那页须知，点「开始」。须知大意是 Muse 会在你批准后操作已连接的应用，关掉网页它也可能接着跑",
          ]}
        />
        <P>
          能看到这页须知，地区这关就算过了。要是还跳候补页，关掉这个会话，新开一个 Spark 会话从头再走一遍。
        </P>
        <Figure name="muse-04-signup" alt="在远程浏览器里注册 Muse：填邮箱、填生日、读须知后点开始；看到须知说明地区这关过了，跳到 Join the waitlist 就新开 Spark 会话重试" caption="看到须知 = 地区这关过了" />
        <Note tone="warn" title="也有翻车的">这招也有翻车的。我在一个中文技术社区看到有人照做，回帖说还是提示地区不可用。</Note>

        <H2 id="age" n={4}>年龄验证：刷卡、绑 Instagram、绑 Facebook 三选一</H2>
        <P>
          水Lane 选的是支付卡验证：跳到 Meta 验证页，填卡号、有效期、安全码、账单国家和邮编，点确认。他说自己用 Starryblu 卡过了。
        </P>
        <P>几篇实录里的截图显示，这一步会<B>暂扣 1 美元</B>，页面写 5 到 7 个工作日退回。</P>
        <p className="mt-6 font-bold">这一步的坑：</p>
        <List
          items={[
            "卡号只填在验证网页里，别发进 Spark 的聊天框",
            "有用户反馈部分虚拟卡、预付卡过不去，账单信息照卡上的真实信息填",
            "提交后显示处理中就等着，别连点重复提交",
          ]}
        />
        <Figure name="muse-05-age-verification" alt="年龄验证三选一：A 刷卡验证年龄（暂扣 1 美元，5 到 7 个工作日退回），B 绑 Instagram，C 绑 Facebook" caption="年龄验证三选一" />

        <H2 id="redeem" n={5}>注册完 48 小时内兑换邀请码</H2>
        <P>
          邀请码在注册页没地方填。先进到 Muse 里面，再去<B>「设置 → 通用 → 兑换邀请码」</B>（英文 Redeem invite code），填 6 位码，点确认。
        </P>
        <P>
          规则是注册后 48 小时内兑换，你和发码的人各得 10 亿 Muse Tokens（Muse 词元），过了 48 小时这个入口就没了。每个码能用的次数有限，以兑换页显示的剩余次数为准。
        </P>
        <Figure name="muse-06-redeem-invite-code" alt="兑换邀请码：设置、通用、兑换邀请码（Redeem invite code），填 6 位码点确认；48 小时内兑换，双方各得 10 亿 Muse Tokens" caption="设置 → 通用 → 兑换邀请码" />

        {muse && (
          <section id="invite" aria-labelledby="invite-title" className="card-accent relative mt-8 scroll-mt-24 border border-ink bg-[#fffffc] p-5 sm:p-7" style={{ ["--accent" as string]: muse.accent }}>
            <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted">我的 Muse 邀请码</p>
            <h3 id="invite-title" className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">注册完记得在 48 小时内兑换</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              码能用的次数有限，以兑换页显示的剩余次数为准；用完了可以去 X 评论区找其他小伙伴的码。
            </p>
            <CopyBlock r={muse} />
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={goHref(muse.id)} target="_blank" rel="noopener sponsored" className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 text-base font-extrabold text-paper transition hover:-translate-y-0.5 hover:bg-[#1d2a6b]">
                {muse.cta} <Arrow />
              </a>
              <span className="font-mono text-[11px] tracking-wide text-muted">新标签页打开 · 含我的邀请链接</span>
            </div>
          </section>
        )}

        <P>
          注册好之后，回自己平时的浏览器或者手机 App 登录同一个账号就行。iPhone 版目前只看到美区、加拿大区 App Store 上架。本地登录以后能不能一直稳定用，Meta 没说，我也还没看到足够长的反馈。
        </P>

        <H2 id="risks">动手前想清楚三件事</H2>
        <List
          items={[
            <><B>地区规定：</B>Meta 官方写的上线地区是美国，媒体报道加了加拿大。有第三方站转述 Meta 帮助中心的说法：订阅要求人在开放地区，绕过地区检查注册的账号可能被限制或停用。那页原文我没打开核对，先按有这个风险来算</>,
            <><B>隐私：</B>远程浏览器在 Google 云端，Google 帮助中心写了它会自动保存一部分信息。注册完去 Spark 里把远程浏览器数据删掉</>,
            <><B>授权：</B>Muse 要连邮箱、日历、支付才好用，主力邮箱和常用支付先别急着全接</>,
          ]}
        />
        <Figure name="muse-07-troubleshooting" w={1200} h={1600} alt="卡住了按这张查：Gemini 里没有 Spark、远程浏览器打不开、还是跳 Join the waitlist、刷卡验证失败、找不到兑换邀请码，各自的原因和怎么办，以及动手前的三条风险" caption="卡住了按这张查（建议存图）" />

        <H2 id="cost">花多少钱</H2>
        <P>
          整套走下来，额外花的钱就是 Google AI Pro 的订阅费，加上一笔会退回的 1 美元预授权。水Lane 是当天注册、当天兑换完的。
        </P>

        {/* 页底：原文 + 返回 */}
        <footer className="mt-14 border-t border-line pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-5 text-sm font-bold text-paper transition hover:-translate-y-0.5">
              <XLogo className="h-4 w-4" /> 在 X 上看原文 <Arrow className="h-3.5 w-3.5" />
            </a>
            <Link href="/#ref-ai" className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink/25 bg-white px-5 text-sm font-bold transition hover:border-ink">
              ← 回到邀请专区
            </Link>
          </div>
          <p className="mt-6 border border-dashed border-line p-4 text-xs leading-5 text-muted">
            说明：本文是我的个人整理，规则、价格和开放地区以 Muse、Google 官方页面为准，请遵守各平台规则与当地法律法规。页面里的 Muse 邀请链接和邀请码是我的邀请入口，通过它注册我可能获得奖励。
          </p>
        </footer>
      </article>
    </main>
  );
}
