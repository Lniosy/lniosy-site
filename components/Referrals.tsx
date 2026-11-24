"use client";

/* eslint-disable @next/next/no-img-element */
import { goHref, referralPath, referrals as allReferrals, referralGroups, disclosureFor, type Referral } from "@/lib/content";
import CopyBlock from "./CopyBlock";
import { matches, referralText } from "@/lib/search";
import { Arrow, Check } from "./Icons";

const sponsored = { target: "_blank", rel: "noopener sponsored" } as const;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const stageBg: Record<Referral["visual"], string> = {
  "capital-one": "#8ac2f4",
  wise: "#cdeb91",
  "cmb-visa": "#bca7fa",
  starryblu: "#d9e4ff",
  bit: "#daf3b9",
  bybit: "#ffe3a3",
  savo: "#c9f0d8",
  mexc: "#c9dcff",
  plasma: "#e5f6b4",
  muse: "#d9ccff",
  cliproxy: "#e4d8ff",
  ipequal: "#cfeedd",
  antbank: "#9ed9da",
  ifast: "#d5e6fb",
  redpocket: "#ffd0da",
  ronvip: "#d9e9ff",
  airnova: "#c9e8ff",
};

const pillTones = ["bg-white", "bg-[#d9e9ff]", "bg-[#ffcfdf]", "bg-[#daf3b9]"];
const pillLabel: Record<string, string> = {
  bank: "信用卡 · 银行",
  securities: "证券",
  crypto: "加密 U 卡",
  tools: "出海工具",
};

function StageArt({ r, tall = false }: { r: Referral; tall?: boolean }) {
  const photoH = tall ? "h-[168px]" : "h-[112px]";
  if (r.visual === "capital-one" && r.art && r.art.length > 1) {
    const main = r.art.find((a) => a.src.includes("venture")) ?? r.art[0];
    const rest = r.art.filter((a) => a.src !== main.src).slice(0, 2);
    return (
      <div className={`relative z-[1] ${tall ? "h-[190px] w-[280px]" : "h-[124px] w-[220px]"} max-w-[88%]`}>
        {rest.map((a, i) => (
          <img
            key={a.src}
            src={a.src}
            alt=""
            className={`absolute top-5 w-auto max-w-[58%] rounded-[10px] object-contain shadow-[6px_8px_0_#4c375b1f] ${tall ? "h-[120px]" : "h-[84px]"}`}
            style={{ left: i === 0 ? 0 : undefined, right: i === 1 ? 0 : undefined, transform: `rotate(${i === 0 ? -12 : 10}deg)` }}
          />
        ))}
        <img
          src={main.src}
          alt={main.alt}
          className={`absolute left-1/2 top-0 w-auto max-w-[70%] -translate-x-1/2 -rotate-6 rounded-[10px] object-contain shadow-[8px_10px_0_#4c375b22] ${tall ? "h-[156px]" : "h-[108px]"}`}
        />
      </div>
    );
  }
  const photo = r.art?.[0];
  if (photo) {
    return <img src={photo.src} alt={photo.alt} className={`relative z-[1] w-auto max-w-[78%] -rotate-6 object-contain drop-shadow-[8px_10px_0_#4c375b22] ${photoH}`} />;
  }
  if (r.visual === "wise") {
    return <img src="/cards/wise-card.webp" alt="Wise 借记卡" className={`relative z-[1] w-auto max-w-[70%] -rotate-[10deg] object-contain drop-shadow-[8px_10px_0_#4c375b22] ${tall ? "h-[180px]" : "h-[124px]"}`} />;
  }
  return (
    <div className="relative z-[1] px-6 text-center">
      <p className={`max-w-[15rem] text-balance font-black leading-tight tracking-tight text-[#24203d] ${tall ? "text-4xl" : "text-[26px] sm:text-[30px]"}`}>{r.issuer}</p>
      <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-[#302b43]/80">{r.category}</p>
    </div>
  );
}

function Stage({ r, tall = false }: { r: Referral; tall?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${tall ? "h-full min-h-[240px]" : "h-[168px] shrink-0"}`} style={{ background: stageBg[r.visual] }}>
      <span className="absolute left-4 top-3 z-[2] font-mono text-[10px] font-bold tracking-[0.14em] text-[#302b43]">{r.issuer.toUpperCase()}</span>
      <span aria-hidden className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border-[22px] border-white/45" />
      <StageArt r={r} tall={tall} />
    </div>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((p) => (
        <li key={p} className="flex gap-2.5 text-sm leading-6 text-ink">
          <Check className="mt-1 h-4 w-4 shrink-0" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function ReferralCard({ r }: { r: Referral }) {
  return (
    <article id={`referral-${r.id}`} className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-raised)]">
      <a href={goHref(r.id)} {...sponsored} aria-label={`${r.title}（邀请链接）`} className="block">
        <Stage r={r} />
      </a>
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-bold text-muted">{r.category}</p>
          <a href={referralPath(r)} className="inline-flex min-h-11 shrink-0 items-center text-xs font-bold">详情</a>
        </div>
        <h3 className="text-xl font-extrabold leading-snug tracking-tight">{r.title}</h3>
        <p className="line-clamp-2 min-h-[3rem] text-sm leading-6 text-muted">{r.tagline}</p>
        <CopyBlock r={r} />
        {r.guide && (
          <a href={r.guide.href} {...(r.guide.href.startsWith("http") ? ext : {})} className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">
            {r.guide.label}
          </a>
        )}
        <div className="mt-auto flex flex-col gap-3">
          <a href={goHref(r.id)} {...sponsored} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-white">
            {r.cta} <Arrow className="h-4 w-4" />
          </a>
          <p className="line-clamp-3 min-h-[3.75rem] text-[11px] leading-5 text-muted">{r.footnote}</p>
        </div>
      </div>
    </article>
  );
}

export function HomeReferrals() {
  const want = ["cmb-visa", "capital-one", "wise"];
  const items = want.flatMap((id) => {
    const found = allReferrals.find((x) => x.id === id);
    return found ? [found] : [];
  });
  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-3">
      {items.map((r) => <ReferralCard key={r.id} r={r} />)}
    </div>
  );
}

export function SingleReferral({ r }: { r: Referral }) {
  return (
    <div>
      <article className="grid items-stretch gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[28px] lg:h-full">
          <Stage r={r} tall />
        </div>
        <div className="flex min-w-0 flex-col gap-4 rounded-[28px] bg-white p-5 shadow-[var(--shadow-raised)] sm:p-7">
          <p className="text-xs font-bold text-muted">{r.category}</p>
          <h1 className="text-[28px] font-black leading-tight tracking-tight sm:text-[34px]">{r.title}</h1>
          <p className="text-base leading-7 text-muted">{r.tagline}</p>
          <Points items={r.points} />
          {r.tiers && (
            <ol className="space-y-2">
              {r.tiers.map((t, i) => (
                <li key={t.when} className="rounded-2xl bg-copy px-3 py-2 text-sm leading-6">
                  <p className="font-mono text-[11px] font-bold text-muted">{i + 1}. {t.when}</p>
                  <p className="font-bold">{t.reward}</p>
                  {t.valueHint && <p className="text-xs text-muted">{t.valueHint}</p>}
                  {t.note && <p className="text-xs text-muted">{t.note}</p>}
                </li>
              ))}
            </ol>
          )}
          {r.feeHighlight && (
            <div className="rounded-2xl bg-[#fff8d8] px-3 py-2 text-sm leading-6">
              <p className="text-xs font-bold">{r.feeHighlight.title}</p>
              {r.feeHighlight.lines.map((l) => <p key={l}>{l}</p>)}
            </div>
          )}
          {r.abilities && (
            <ul className="flex flex-wrap gap-1.5">
              {r.abilities.map((a) => <li key={a} className="rounded-full bg-copy px-2.5 py-1 text-xs font-semibold">{a}</li>)}
            </ul>
          )}
          <CopyBlock r={r} />
          <a href={goHref(r.id)} {...sponsored} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white">
            {r.cta} <Arrow className="h-4 w-4" />
          </a>
          {r.guide && (
            <a href={r.guide.href} {...(r.guide.href.startsWith("http") ? ext : {})} className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">
              {r.guide.label}
            </a>
          )}
          {r.story && r.story.href !== r.guide?.href && (
            <a href={r.story.href} {...ext} className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">
              {r.story.label}
            </a>
          )}
        </div>
      </article>
      <aside className="mt-4 rounded-3xl bg-white px-5 py-4 text-sm leading-6 text-muted shadow-[var(--shadow-raised)]">
        {r.footnote && <p>{r.footnote}</p>}
        <p className={r.footnote ? "mt-2" : ""}>{disclosureFor(r)}</p>
        <p className="mt-2">本站不是银行或金融机构。申请条件、费用和结果以官方机构为准。个人经验不构成税务或法律建议。</p>
      </aside>
    </div>
  );
}

export default function Referrals({ q = "" }: { q?: string }) {
  const referrals = q.trim() ? allReferrals.filter((r) => matches(referralText(r), q)) : allReferrals;

  return (
    <section id="referrals" aria-label="邀请推荐" className="scroll-mt-28 pb-4">
      <nav aria-label="邀请分类" className="mb-5">
        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {referralGroups.map((g, i) => {
            const count = referrals.filter((r) => r.group === g.id).length;
            return (
              <li key={g.id}>
                <a href={`#ref-${g.id}`} title={g.label} className={`flex min-h-11 items-center gap-2 rounded-full px-3 ${pillTones[i % pillTones.length]}`}>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/80 font-mono text-[11px] font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1 text-sm font-bold leading-tight">{pillLabel[g.id] ?? g.label}</span>
                  <span className="ml-auto font-mono text-[11px] text-muted">{count}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {referralGroups.map((g) => {
        const items = referrals.filter((r) => r.group === g.id);
        if (!items.length) return null;
        return (
          <div key={g.id} id={`ref-${g.id}`} className="mb-8 scroll-mt-28">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 className="text-lg font-extrabold">{g.label}</h2>
              <span className="font-mono text-xs text-muted">{items.length}</span>
            </div>
            <div className={`grid items-stretch gap-4 md:grid-cols-2 ${items.length >= 3 && items.length % 3 !== 1 ? "xl:grid-cols-3" : ""}`}>
              {items.map((r) => <ReferralCard key={r.id} r={r} />)}
            </div>
          </div>
        );
      })}
    </section>
  );
}
