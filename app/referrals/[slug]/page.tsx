import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter, Disclaimer, PageBg } from "@/components/SiteChrome";
import { SingleReferral } from "@/components/Referrals";
import { referrals, findReferralBySlug, referralPath, disclosureFor } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return referrals.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const r = findReferralBySlug((await params).slug);
  if (!r) return { title: "邀请推荐｜李天才" };
  const url = referralPath(r);
  const title = `${r.title}：${r.tagline}｜${r.notMine ? "网友可用邀请" : "李天才的邀请"}`;
  const description = `${r.title}（${r.category}）。${r.tagline}。${disclosureFor(r)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { url, title, description },
    twitter: { title, description },
  };
}

export default async function ReferralSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const r = findReferralBySlug((await params).slug);
  if (!r) notFound();
  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageBg />
      <SiteHeader current="/referrals/" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-6 sm:px-8">
        <nav aria-label="面包屑" className="mb-5 flex items-center gap-2 font-mono text-xs font-bold tracking-[0.08em] text-muted">
          <Link href="/referrals/" className="inline-flex min-h-10 items-center gap-1.5 border border-ink/15 bg-[#fffffc] px-3 text-ink transition hover:border-ink hover:bg-white">
            ← 全部邀请
          </Link>
          <span aria-hidden>/</span>
          <span className="truncate">{r.issuer}</span>
        </nav>
        <h1 className="sr-only">{r.title}</h1>
        <p className="mb-6 flex items-start gap-2.5 border border-ink/15 bg-[#fffffc] px-4 py-3 text-[13px] leading-6 text-ink/80">
          <span className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-ink font-mono text-[11px] font-bold text-paper">i</span>
          <span>{disclosureFor(r)}</span>
        </p>
        <div className="pb-10">
          <SingleReferral r={r} />
        </div>
        <div className="mb-10 text-center">
          <Link href="/referrals/" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-extrabold underline decoration-2 underline-offset-4 hover:text-[#1d2a6b]">
            查看全部邀请推荐 →
          </Link>
        </div>
        <Disclaimer />
      </div>
      <SiteFooter />
    </main>
  );
}
