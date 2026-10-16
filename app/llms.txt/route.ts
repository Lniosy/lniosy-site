import { guides } from "@/lib/guides";
import { SITE_URL, X_URL, profile, referrals, referralGroups } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const groups = referralGroups
    .map((g) => {
      const items = referrals.filter((r) => r.group === g.id);
      if (!items.length) return "";
      return `### ${g.label}\n` + items.map((r) => `- [${r.title}](${SITE_URL}/referrals/#referral-${r.id})：${r.tagline}${r.guide && r.guide.href.startsWith("/") ? `（教程：${SITE_URL}${r.guide.href}）` : ""}`).join("\n");
    })
    .filter(Boolean)
    .join("\n\n");
  const body = `# ${profile.name}（${profile.nameEn}，X ${profile.handle}）

> ${profile.name}，又称「${profile.mascot}」，${profile.bio}。${profile.bio2}。个人站分享用 ITIN 办美卡的经验、AI 工具实战、独立开发与微信小程序。

- 主页：${SITE_URL}/
- X：${X_URL}
- 语言：简体中文

## 页面
- [邀请推荐](${SITE_URL}/referrals/)
- [教程](${SITE_URL}/guides/)
- [免费领（内容整理中）](${SITE_URL}/free/)

## 教程
${guides.map((g) => `- [${g.title}](${g.href.startsWith("/") ? SITE_URL + g.href : g.href})（${g.source}）`).join("\n")}

## 邀请推荐条目
${groups}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
