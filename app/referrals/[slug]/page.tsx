import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
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
    <main id="main" className="relative min-h-dvh">
      <SiteHeader current="/referrals/" />
      <div className="relative z-10 mx-auto max-w-[75rem] px-4 pb-8 pt-4 sm:px-8">
        <nav aria-label="面包屑" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/referrals/" className="inline-flex min-h-11 items-center rounded-full bg-white px-4 font-bold text-ink">← 全部邀请</Link>
          <span aria-hidden>/</span>
          <span className="truncate font-semibold text-ink">{r.issuer}</span>
        </nav>
        <SingleReferral r={r} />
        <div className="mt-6">
          <Link href="/referrals/" className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">查看全部邀请推荐</Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
