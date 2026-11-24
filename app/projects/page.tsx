import type { Metadata } from "next";
import { projectsJsonLd } from "@/lib/jsonld";
import { PROJECT_SNAPSHOT, projectStats } from "@/lib/projects";
import { SiteHeader, SiteFooter, Disclaimer } from "@/components/SiteChrome";
import { ProjectsCatalog, ProjectsFollow, ProjectsIntro } from "@/components/Projects";

const title = "开源项目：搜魂、七情六欲、接通 Grok Bot、酷安 MCP｜李天才";
const description = `李天才（GitHub @Lniosy）的 4 个公开原创仓库：搜魂、七情六欲、接通 Grok Bot、酷安 MCP。${PROJECT_SNAPSHOT} 快照合计 ${projectStats.stars} Stars、${projectStats.forks} Forks，不是实时数字。`;

export const metadata: Metadata = {
  title,
  description,
  keywords: ["开源项目", "搜魂", "souhun", "七情六欲", "qiqing-liuyu", "接通 Grok Bot", "酷安 MCP", "coolapk-mcp", "Lniosy"],
  alternates: { canonical: "/projects/" },
  openGraph: { title, description, url: "/projects/" },
  twitter: { title, description },
};

export default function ProjectsPage() {
  return (
    <main id="main" className="relative min-h-dvh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader current="/projects/" />
      <div className="relative z-10 mx-auto max-w-[75rem] px-4 pt-4 sm:px-8 sm:pt-6">
        <ProjectsIntro variant="page" />
        <ProjectsCatalog />
        <ProjectsFollow />
        <div className="mt-8">
          <Disclaimer />
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
