import { SITE_URL, X_URL, profile, referrals } from "@/lib/content";

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
      description: `${profile.bio}｜${profile.bio2}`,
      sameAs: [X_URL],
      knowsAbout: ["ITIN", "美国信用卡", "AI 工具", "加密货币", "独立开发", "微信小程序"],
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
      name: "美卡邀请专区",
      numberOfItems: referrals.length,
      itemListElement: referrals.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: r.title,
        description: r.tagline,
        url: `${SITE_URL}/#referral-${r.id}`,
      })),
    },
  ],
};
