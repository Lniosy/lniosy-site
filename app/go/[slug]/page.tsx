import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { referrals, goSlug } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return referrals.map((r) => ({ slug: goSlug(r.id) }));
}

const find = (slug: string) => referrals.find((r) => goSlug(r.id) === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const r = find((await params).slug);
  return {
    title: r ? `正在跳转：${r.title}` : "跳转中",
    robots: { index: false, follow: false },
    alternates: { canonical: null },
  };
}

export default async function Go({ params }: { params: Promise<{ slug: string }> }) {
  const r = find((await params).slug);
  if (!r) notFound();
  const url = r.href;
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 p-6 text-center">
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${url}`} />
      </noscript>
      <p className="text-sm text-muted">正在前往 {r.title}…</p>
      <a href={url} rel="noopener sponsored" className="font-bold underline">如果没有自动跳转，请点这里</a>
      <script
        dangerouslySetInnerHTML={{
          __html: `setTimeout(function(){location.replace(${JSON.stringify(url)})},700);`,
        }}
      />
    </main>
  );
}
