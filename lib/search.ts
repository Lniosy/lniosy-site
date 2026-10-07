import { topics, type Post, type Referral } from "./content";

export const norm = (s: string) => s.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim();
const topicLabel = Object.fromEntries(topics.map((t) => [t.id, t.label])) as Record<string, string>;

export const referralText = (r: Referral) =>
  norm([r.issuer, r.category, r.title, r.tagline, ...r.points, r.href, r.cta, r.badge, r.code?.label, r.code?.value, r.footnote, r.group].filter(Boolean).join(" "));
export const postText = (p: Post) => norm([p.title, p.excerpt, topicLabel[p.topic], p.url, p.date].filter(Boolean).join(" "));

/** 空格分词，所有词都要命中（不区分大小写，中英文均可） */
export function matches(text: string, q: string) {
  const terms = norm(q).split(" ").filter(Boolean);
  return terms.every((t) => text.includes(t));
}
