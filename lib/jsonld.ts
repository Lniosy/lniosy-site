import { SITE_URL, X_FOLLOWERS_AS_OF, X_FOLLOWERS_LABEL, X_URL, profile, referrals } from "@/lib/content";
import { friendOutbound, friends } from "@/lib/friends";
import { guideCategories, guides } from "@/lib/guides";
import { GITHUB_URL, PROJECT_SNAPSHOT, projectStats, projects } from "@/lib/projects";

const guideCategoryLabel = Object.fromEntries(guideCategories.map((c) => [c.id, c.label]));

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      alternateName: [profile.nameEn, profile.handle, profile.mascot],
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/avatar.jpg`,
      description: `${profile.bio}｜${profile.bio2}。X 关注者 ${X_FOLLOWERS_LABEL}（${X_FOLLOWERS_AS_OF} 更新，静态标注，非实时）。`,
      sameAs: [X_URL, GITHUB_URL],
      knowsAbout: ["ITIN", "美国信用卡", "AI 工具", "加密货币", "独立开发", "开源项目"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "李天才",
      inLanguage: "zh-CN",
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#referrals`,
      name: "邀请推荐",
      numberOfItems: referrals.length,
      itemListElement: referrals.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: r.title,
        description: r.tagline,
        url: `${SITE_URL}/referrals/#referral-${r.id}`,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: "开源项目",
      url: `${SITE_URL}/projects/`,
      numberOfItems: projectStats.count,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${project.name} (${project.repo})`,
        url: project.url,
      })),
    },
  ],
};

export const guidesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/guides/#page`,
      url: `${SITE_URL}/guides/`,
      name: "实战教程目录",
      description: "教程目录与导读。正文在 X 原文，站内不提供全文。",
      inLanguage: "zh-CN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/guides/#list` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/guides/#list`,
      name: "教程目录",
      numberOfItems: guides.length,
      itemListElement: guides.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.title,
        description: [`${guideCategoryLabel[g.category]}。${g.summary}`, g.notice].filter(Boolean).join(" "),
        url: g.href,
      })),
    },
  ],
};

const friendsListId = `${SITE_URL}/friends/#list`;

export const friendsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/friends/#page`,
      url: `${SITE_URL}/friends/`,
      name: "推友友链",
      description: "李天才收录的推友站点。点开头像去对方的 X，点开预览或站点名去网站。",
      inLanguage: "zh-CN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      author: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": friendsListId },
    },
    {
      "@type": "ItemList",
      "@id": friendsListId,
      name: "推友友链",
      numberOfItems: friends.length,
      itemListElement: friends.map((friend, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${friend.siteName}（站长：${friend.ownerName} ${friend.ownerHandle}）`,
        description: friend.summary,
        url: friendOutbound(friend.siteUrl),
      })),
    },
  ],
};

const projectListId = `${SITE_URL}/projects/#list`;

export const projectsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/projects/#page`,
      url: `${SITE_URL}/projects/`,
      name: "开源项目",
      description: `李天才（GitHub @Lniosy）的 ${projectStats.count} 个公开原创仓库。${PROJECT_SNAPSHOT} 快照合计 ${projectStats.stars} Stars、${projectStats.forks} Forks。`,
      inLanguage: "zh-CN",
      dateModified: PROJECT_SNAPSHOT,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      author: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": projectListId },
    },
    {
      "@type": "ItemList",
      "@id": projectListId,
      name: "Lniosy 50★ 以上原创开源项目",
      numberOfItems: projectStats.count,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: `${project.name} (${project.repo})`,
          description: project.summary,
          codeRepository: project.url,
          url: project.url,
          image: `${SITE_URL}${project.image}`,
          programmingLanguage: project.language,
          license: "https://opensource.org/licenses/MIT",
          dateModified: project.updated,
          author: { "@id": `${SITE_URL}/#person` },
        },
      })),
    },
  ],
};
