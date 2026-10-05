/* eslint-disable @next/next/no-img-element */
import { goHref, referrals, referralGroups, referralDisclosure, type Referral } from "@/lib/content";
import CopyCode from "./CopyCode";
import { Arrow, Check } from "./Icons";

const sponsored = { target: "_blank", rel: "noopener sponsored" } as const;

/* ---------- Visuals ---------- */

function CapitalOneFan({ r }: { r: Referral }) {
  const art = r.art ?? [];
  // 三张卡扇形展开；容器按比例缩放，手机上不会溢出
  const pos = [
    "left-[1%] top-[20%] -rotate-[13deg] group-hover:-rotate-[17deg] group-hover:-translate-x-[4%]",
    "left-[15%] top-[3%] -rotate-[3deg] group-hover:-translate-y-[5%]",
    "left-[33%] top-[22%] rotate-[8deg] group-hover:rotate-[12deg] group-hover:translate-x-[4%]",
  ];
  return (
    <div className="relative mx-auto aspect-[1.55] w-full max-w-[460px]" aria-hidden="false">
      <div aria-hidden className="absolute inset-[12%_6%_4%_8%] rounded-full bg-[#c8f04a] opacity-30 blur-3xl" />
      {art.slice(0, 3).map((a, i) => (
        <img
          key={a.src}
          src={a.src}
          alt={a.alt}
         
          className={`absolute aspect-[1.586] w-[66%] rounded-[5%] object-cover shadow-[0_18px_34px_-12px_#11121466,0_2px_6px_#11121433] ring-1 ring-black/10 transition duration-500 ease-out ${pos[i]}`}
          style={{ zIndex: i + 1 }}
        />
      ))}
    </div>
  );
}

function WiseVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#163300]">
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#9fe870] opacity-25 blur-2xl" />
      <img src="/cards/wise-card.webp" alt="Wise 借记卡" className="relative h-full w-auto max-w-[80%] scale-110 object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.45)] transition duration-500 group-hover:-rotate-3 group-hover:scale-[1.16]" />
      <img src="/cards/wise-icon.png" alt="Wise" className="absolute left-4 top-4 h-9 w-9 rounded-lg" />
    </div>
  );
}

function StarryBluVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_0%_0%,#2a5bff_0%,#0d2a8f_45%,#06134a_100%)]">
      <div aria-hidden className="absolute inset-0 opacity-40 [background-image:radial-gradient(#ffffff55_1px,transparent_1px)] [background-size:18px_18px]" />
      {/* 品牌色卡面示意（非官方卡面），使用官方 logo 与吉祥物 */}
      <div className="relative aspect-[1.586] w-[62%] max-w-[230px] rotate-[-6deg] rounded-[6%] bg-[linear-gradient(135deg,#1b3fd6_0%,#0a1c6e_60%,#04103f_100%)] p-[6%] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/20 transition duration-500 group-hover:rotate-[-2deg] group-hover:scale-105">
        <img src="/cards/starryblu-logo-white.png" alt="Starryblu" className="h-[16%] w-auto" />
        <div className="absolute bottom-[12%] left-[7%] h-[18%] w-[15%] rounded-[18%] bg-gradient-to-br from-[#f4d27a] to-[#b98a2c]" />
        <div className="absolute bottom-[10%] right-[6%] flex">
          <span className="h-5 w-5 rounded-full bg-[#eb001b]/90" />
          <span className="-ml-2 h-5 w-5 rounded-full bg-[#f79e1b]/90" />
        </div>
      </div>
      <img src="/cards/starryblu-mascot.png" alt="Starryblu 吉祥物" className="absolute bottom-3 right-3 h-14 w-14 rounded-full ring-2 ring-white/70" />
    </div>
  );
}

function BybitVisual() {
  // 品牌色卡面示意（非官方卡面图）
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_100%_0%,#3a2a05_0%,#121212_55%,#0a0a0a_100%)]">
      <div aria-hidden className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-[#f7a600] opacity-20 blur-2xl" />
      <div className="relative aspect-[1.586] w-[62%] max-w-[230px] rotate-[5deg] rounded-[6%] bg-[linear-gradient(140deg,#2b2b2b_0%,#151515_55%,#050505_100%)] p-[7%] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/15 transition duration-500 group-hover:rotate-[1deg] group-hover:scale-105">
        <div className="text-[clamp(13px,4.2vw,18px)] font-black tracking-[0.06em] text-white">
          BYB<span className="text-[#f7a600]">I</span>T
        </div>
        <div className="absolute bottom-[14%] left-[7%] h-[18%] w-[15%] rounded-[18%] bg-gradient-to-br from-[#f4d27a] to-[#b98a2c]" />
        <div className="absolute bottom-[10%] right-[6%] flex">
          <span className="h-5 w-5 rounded-full bg-[#eb001b]/90" />
          <span className="-ml-2 h-5 w-5 rounded-full bg-[#f79e1b]/90" />
        </div>
      </div>
      <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.12em] text-white/40">卡面示意</span>
    </div>
  );
}

function SavoVisual() {
  // 品牌色卡面示意（非官方卡面图）
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_100%_0%,#0f3d25_0%,#0d1a14_55%,#070b09_100%)]">
      <div aria-hidden className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-[#22c55e] opacity-20 blur-2xl" />
      <div className="relative aspect-[1.586] w-[62%] max-w-[230px] rotate-[-5deg] rounded-[6%] bg-[linear-gradient(140deg,#1f3a2c_0%,#12201a_55%,#060a08_100%)] p-[7%] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/15 transition duration-500 group-hover:rotate-[-1deg] group-hover:scale-105">
        <div className="text-[clamp(13px,4.2vw,18px)] font-black tracking-[0.06em] text-white">
          SAV<span className="text-[#22c55e]">O</span>
        </div>
        <div className="absolute bottom-[14%] left-[7%] h-[18%] w-[15%] rounded-[18%] bg-gradient-to-br from-[#f4d27a] to-[#b98a2c]" />
        <span className="absolute bottom-[12%] right-[7%] font-mono text-[10px] tracking-[0.12em] text-white/60">U CARD</span>
      </div>
      <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.12em] text-white/40">卡面示意</span>
    </div>
  );
}

function MexcVisual() {
  // 品牌色卡面示意（非官方卡面图）
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_100%_0%,#0b2a5c_0%,#0c1424_55%,#06090f_100%)]">
      <div aria-hidden className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-[#2f7cf6] opacity-20 blur-2xl" />
      <div className="relative aspect-[1.586] w-[62%] max-w-[230px] rotate-[5deg] rounded-[6%] bg-[linear-gradient(140deg,#1d2b45_0%,#111a2b_55%,#05080f_100%)] p-[7%] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/15 transition duration-500 group-hover:rotate-[1deg] group-hover:scale-105">
        <div className="text-[clamp(13px,4.2vw,18px)] font-black tracking-[0.06em] text-white">
          ME<span className="text-[#2f7cf6]">X</span>C
        </div>
        <div className="absolute bottom-[14%] left-[7%] h-[18%] w-[15%] rounded-[18%] bg-gradient-to-br from-[#f4d27a] to-[#b98a2c]" />
        <span className="absolute bottom-[12%] right-[7%] font-mono text-[10px] tracking-[0.12em] text-white/60">U CARD</span>
      </div>
      <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.12em] text-white/40">卡面示意</span>
    </div>
  );
}

function PlasmaVisual() {
  // 品牌色卡面示意（非官方卡面图）
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_100%_0%,#2c3a0c_0%,#121410_55%,#080907_100%)]">
      <div aria-hidden className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-[#a3e635] opacity-20 blur-2xl" />
      <div className="relative aspect-[1.586] w-[62%] max-w-[230px] rotate-[-4deg] rounded-[6%] bg-[linear-gradient(140deg,#2a2d24_0%,#16180f_55%,#050604_100%)] p-[7%] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/15 transition duration-500 group-hover:rotate-[0deg] group-hover:scale-105">
        <div className="text-[clamp(13px,4.2vw,18px)] font-black tracking-[0.06em] text-white">
          PLASMA <span className="text-[#a3e635]">ONE</span>
        </div>
        <div className="absolute bottom-[14%] left-[7%] h-[18%] w-[15%] rounded-[18%] bg-gradient-to-br from-[#f4d27a] to-[#b98a2c]" />
        <span className="absolute bottom-[11%] right-[7%] text-[clamp(11px,3.4vw,15px)] font-black italic tracking-tight text-white/80">VISA</span>
      </div>
      <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.12em] text-white/40">卡面示意</span>
    </div>
  );
}

function MuseVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[radial-gradient(110%_110%_at_50%_0%,#1b2a66_0%,#0b0f24_60%,#05070f_100%)]">
      <div aria-hidden className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f6bff] opacity-30 blur-3xl" />
      <div className="relative flex items-center gap-3 transition duration-500 group-hover:scale-105">
        <img src="/cards/muse-icon.svg" alt="Muse" className="h-14 w-14 sm:h-16 sm:w-16" />
        <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Muse</span>
      </div>
      <span className="absolute bottom-3 right-3 rounded-full border border-white/20 px-2 py-0.5 font-mono text-[10px] tracking-wide text-white/60">AI AGENT</span>
    </div>
  );
}

function CliProxyVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#2a1260_0%,#14092f_60%,#0a0518_100%)]">
      <div aria-hidden className="absolute inset-0 opacity-30 [background-image:radial-gradient(#c4b5fd66_1px,transparent_1px)] [background-size:16px_16px]" />
      <svg aria-hidden viewBox="0 0 200 200" className="absolute -right-8 -top-6 h-48 w-48 text-[#a78bfa] opacity-30">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="100" cy="100" rx="38" ry="80" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 100h160M32 60h136M32 140h136" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <div className="relative flex flex-col items-center gap-3 transition duration-500 group-hover:scale-105">
        <img src="/cards/cliproxy-logo-white.png" alt="CliProxy" className="h-8 w-auto sm:h-9" />
        <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-[#ddd6fe] ring-1 ring-white/15">RESIDENTIAL IP</span>
      </div>
    </div>
  );
}

function RedPocketVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#b3122e_0%,#7a0a1f_60%,#3d0510_100%)]">
      <div aria-hidden className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#ffcc4d] opacity-20 blur-3xl" />
      <div className="relative flex flex-col items-center gap-3 transition duration-500 group-hover:scale-105">
        <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">RedPocket</span>
        <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-[#ffe4a3] ring-1 ring-white/15">红包卡 · US SIM</span>
      </div>
    </div>
  );
}

const visuals: Record<string, () => React.JSX.Element> = {
  wise: WiseVisual,
  starryblu: StarryBluVisual,
  bybit: BybitVisual,
  savo: SavoVisual,
  mexc: MexcVisual,
  plasma: PlasmaVisual,
  muse: MuseVisual,
  cliproxy: CliProxyVisual,
  redpocket: RedPocketVisual,
};

function Points({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((p) => (
        <li key={p} className={`flex gap-2.5 text-sm leading-6 ${dark ? "text-paper/80" : "text-muted"}`}>
          <Check className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-[#c8f04a]" : "text-ink"}`} />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Cards ---------- */

function FeaturedCard({ r }: { r: Referral }) {
  return (
    <article className="card-accent group relative grid overflow-hidden border border-ink bg-ink text-paper md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]" style={{ ["--accent" as string]: r.accent }}>
      <div aria-hidden className="grid-texture-dark pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative order-2 flex flex-col p-6 sm:p-8 md:order-1 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] font-bold tracking-[0.12em]">
          <span className="bg-[#c8f04a] px-2 py-1 text-ink">我在用</span>
          <span className="border border-paper/30 px-2 py-1 text-paper/80">{r.category}</span>
        </div>
        <h3 className="mt-5 text-[26px] font-extrabold leading-tight tracking-tight [text-wrap:balance] sm:text-[32px] lg:text-4xl">{r.title}</h3>
        <p className="mt-2 text-[17px] font-bold text-[#c8f04a] sm:text-xl">{r.tagline}</p>
        <div className="mt-6">
          <Points items={r.points} dark />
        </div>
        {r.quote && (
          <blockquote className="mt-6 border-l-2 border-[#c8f04a] pl-4 text-[13px] italic leading-6 text-paper/60">
            “{r.quote}”
          </blockquote>
        )}
        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
          <a href={goHref(r.id)} {...sponsored} className="inline-flex min-h-[52px] items-center justify-center gap-2 whitespace-nowrap bg-[#c8f04a] px-6 sm:self-start text-base font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_30px_-8px_#c8f04a99]">
            {r.cta}
            <Arrow />
          </a>
          {r.story && (
            <a href={r.story.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap border border-paper/30 px-4 text-sm font-bold text-paper/85 transition hover:border-[#c8f04a] hover:text-[#c8f04a] sm:self-start">
              {r.story.label} <Arrow className="h-3.5 w-3.5" />
            </a>
          )}
          <span className="font-mono text-[11px] tracking-wide text-paper/50">新标签页打开 · capitalone.com</span>
        </div>
      </div>
      <a href={goHref(r.id)} {...sponsored} aria-label={`${r.title}：${r.tagline}`} className="relative order-1 flex flex-col justify-center border-b border-paper/10 px-6 pb-5 pt-9 sm:px-10 md:order-2 md:border-b-0 md:border-l md:px-6 md:py-10 lg:px-10">
        <CapitalOneFan r={r} />
        <div className="mt-4 hidden flex-wrap justify-center gap-1.5 font-mono sm:flex text-[10px] tracking-[0.1em] text-paper/55">
          {["Savor", "Quicksilver", "QuicksilverOne", "Venture", "Venture X"].map((n) => (
            <span key={n} className="border border-paper/15 px-1.5 py-0.5">{n}</span>
          ))}
        </div>
        {r.footnote && <p className="mt-3 text-center text-[11px] leading-5 text-paper/45">{r.footnote}</p>}
      </a>
    </article>
  );
}

function ReferralCard({ r, index }: { r: Referral; index: number }) {
  const n = String(index).padStart(2, "0");
  return (
    <article className="card-accent group relative flex flex-col overflow-hidden border border-line bg-[#fffffce6] transition hover:-translate-y-1 hover:border-ink/40 hover:bg-white hover:shadow-[0_16px_34px_-10px_#11121433]" style={{ ["--accent" as string]: r.accent }}>
      <a href={goHref(r.id)} {...sponsored} aria-label={`${r.title}（邀请链接）`} className="block h-44 sm:h-48">
        {(() => { const V = visuals[r.visual]; return V ? <V /> : null; })()}
      </a>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.1em] text-muted">
          <span className="font-bold text-ink">{r.issuer}</span>
          <span>/{n}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="bg-ink/[0.06] px-2 py-0.5 font-mono text-[11px] font-bold tracking-wide text-ink/80">{r.category}</span>
          {r.badge && <span className="border border-ink/15 px-2 py-0.5 font-mono text-[11px] tracking-wide text-muted">{r.badge}</span>}
        </div>
        <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-tight">{r.title}</h3>
        <p className="mt-1 text-sm font-semibold leading-6 text-ink/80">{r.tagline}</p>
        <div className="mt-4">
          <Points items={r.points} />
        </div>
        {r.code && (
          <div className="mt-5">
            <CopyCode label={r.code.label} value={r.code.value} hint={r.code.hint} />
          </div>
        )}
        {r.footnote && <p className="mt-3 text-xs leading-5 text-muted">{r.footnote}</p>}
        <a href={goHref(r.id)} {...sponsored} className="mt-auto inline-flex min-h-12 items-center justify-between gap-2 border-t border-line pt-4 text-sm font-extrabold transition hover:text-[#1d2a6b]">
          <span className="pt-1">{r.cta}</span>
          <span className="mt-1 grid h-9 w-9 place-items-center bg-ink text-paper transition group-hover:translate-x-0.5"><Arrow /></span>
        </a>
      </div>
    </article>
  );
}

function GroupLabel({ label, count }: { label: string; count: number }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-2 w-2 rotate-45 bg-ink" aria-hidden />
      <h3 className="font-mono text-xs font-bold tracking-[0.14em] text-ink">{label}</h3>
      <span className="h-px flex-1 bg-line" aria-hidden />
      <span className="font-mono text-[11px] text-muted">{count}</span>
    </div>
  );
}

export default function Referrals() {
  const order = new Map(referrals.map((r, i) => [r.id, i + 1]));
  const bank = referrals.filter((r) => r.group === "bank");
  const featured = bank.filter((r) => r.featured);
  const bankRest = bank.filter((r) => !r.featured);
  const others = referralGroups.filter((g) => g.id !== "bank").map((g) => ({ ...g, items: referrals.filter((r) => r.group === g.id) })).filter((g) => g.items.length);

  return (
    <section id="referrals" aria-labelledby="referrals-title" className="scroll-mt-20 pb-10">
      <div className="mb-6 flex flex-col justify-between gap-3 border-t border-line pt-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted">美卡 / 账户 / 工具 · 我的邀请入口</p>
          <h2 id="referrals-title" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">美卡邀请专区</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">都是我自己的邀请链接，点开直达官方页面。资格、额度与奖励以官方页面为准。</p>
      </div>

      {/* 分类快捷跳转 */}
      <nav aria-label="邀请分类" className="mb-5">
        <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {referralGroups.map((g) => {
            const c = referrals.filter((r) => r.group === g.id).length;
            return (
              <li key={g.id}>
                <a href={`#ref-${g.id}`} className="flex min-h-11 w-full items-center justify-between gap-2 whitespace-nowrap border border-ink/15 bg-[#fffffc] px-3.5 text-[13px] font-bold transition hover:border-ink hover:bg-white">
                  {g.label}
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 font-mono text-[10px] text-paper">{c}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className="mb-8 flex items-start gap-2.5 border border-ink/15 bg-[#fffffc] px-4 py-3 text-[13px] leading-6 text-ink/80">
        <span className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-ink font-mono text-[11px] font-bold text-paper">i</span>
        <span>{referralDisclosure}</span>
      </p>

      <div id="ref-bank" className="scroll-mt-24">
        <GroupLabel label="美卡 / 银行账户" count={bank.length} />
        <div className="space-y-4">
          {featured.map((r) => (
            <FeaturedCard key={r.id} r={r} />
          ))}
          <div className="grid gap-4 md:grid-cols-2">
            {bankRest.map((r) => (
              <ReferralCard key={r.id} r={r} index={order.get(r.id)!} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {others.map((g) => (
          <div key={g.id} id={`ref-${g.id}`} className="flex scroll-mt-24 flex-col">
            <GroupLabel label={g.label} count={g.items.length} />
            <div className="grid flex-1 gap-4">
              {g.items.map((r) => (
                <ReferralCard key={r.id} r={r} index={order.get(r.id)!} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
