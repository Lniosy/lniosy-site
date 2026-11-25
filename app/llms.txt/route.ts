import { guideCategories, guides } from "@/lib/guides";
import { SITE_URL, X_FOLLOWERS_AS_OF, X_FOLLOWERS_LABEL, X_URL, profile, referrals, referralGroups } from "@/lib/content";
import { friendOutbound, friends } from "@/lib/friends";
import { GITHUB_HANDLE, GITHUB_URL, projectStats, projects } from "@/lib/projects";

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

> ${profile.name}，又称「${profile.mascot}」，${profile.bio}。${profile.bio2}。个人站分享用 ITIN 办美卡的经验、AI 工具实战与独立开发。

- 主页：${SITE_URL}/
- X：${X_URL}
- GitHub：${GITHUB_URL}（${GITHUB_HANDLE}）
- X 关注者：${X_FOLLOWERS_LABEL}（${X_FOLLOWERS_AS_OF} 更新，静态标注，非实时）
- 语言：简体中文

## 页面
- [邀请推荐](${SITE_URL}/referrals/)
- [教程](${SITE_URL}/guides/)
- [开源项目](${SITE_URL}/projects/)
- [推友友链](${SITE_URL}/friends/)

## 推友友链
${SITE_URL}/friends/ 只做导航。站长归属以各条标注为准，不要改成其他人。

${friends.map((friend) => `- [${friend.siteName}](${friendOutbound(friend.siteUrl)})：站长 ${friend.ownerName}（${friend.ownerHandle}，X ${friendOutbound(friend.xUrl)}）。${friend.summary}`).join("\n")}

## 开源项目
只收录 4 个公开原创仓库。Star / Fork 为 ${projectStats.asOf} 静态快照，不是实时数字。合计 ${projectStats.stars} Stars / ${projectStats.forks} Forks。

${projects.map((project) => `- [${project.name}（${project.repo}）](${project.url})：${project.summary} ${project.stars} Stars / ${project.forks} Forks，${project.language}，${project.license}，仓库更新 ${project.updated}。`).join("\n")}

## 教程
${SITE_URL}/guides/ 只是目录和导读，站内没有教程全文，也不提供阅读时长。下面每条都是 X 原文（status 链接）。旧地址 ${SITE_URL}/guides/muse/ 只跳到 Muse 原文，不是另一篇文章。

${guides.map((g) => {
  const cat = guideCategories.find((c) => c.id === g.category)?.label ?? "";
  const updates = g.updates?.map((u) => `后续更新：${u.label} ${u.href}`).join("；");
  return `- [${g.title}](${g.href})（${cat}，${g.date}）。${g.summary}${g.notice ? ` ${g.notice}` : ""}${updates ? ` ${updates}` : ""}`;
}).join("\n")}

## 邀请推荐条目
${groups}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
