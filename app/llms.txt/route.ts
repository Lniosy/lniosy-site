import { SITE_URL, X_URL, profile, referrals, referralGroups } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const groups = referralGroups
    .map((g) => {
      const items = referrals.filter((r) => r.group === g.id);
      if (!items.length) return "";
      return `### ${g.label}\n` + items.map((r) => `- ${r.title}：${r.tagline}${r.guide && r.guide.href.startsWith("/") ? `（教程：${SITE_URL}${r.guide.href}）` : ""}`).join("\n");
    })
    .filter(Boolean)
    .join("\n\n");
  const body = `# ${profile.name}（${profile.nameEn}，X ${profile.handle}）

> ${profile.name}，又称「${profile.mascot}」，${profile.bio}。${profile.bio2}。个人站分享用 ITIN 办美卡的经验、AI 工具实战、独立开发与微信小程序。

- 主页：${SITE_URL}/
- X：${X_URL}
- 语言：简体中文

## 教程
- [Muse 注册教程：用 Gemini Spark 远程浏览器注册 Muse](${SITE_URL}/guides/muse/)

## 分区
- [我在写什么（X 帖子精选）](${SITE_URL}/#writing)
- [美卡邀请专区](${SITE_URL}/#referrals)

## 邀请专区条目
${groups}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
