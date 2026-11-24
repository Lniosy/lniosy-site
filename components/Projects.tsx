/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { X_URL } from "@/lib/content";
import { GITHUB_HANDLE, GITHUB_URL, PROJECT_SNAPSHOT, projectStats, projects, type Project } from "@/lib/projects";
import { Arrow, Check } from "./Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function ProjectStage({ project, featured }: { project: Project; featured?: boolean }) {
  const frame = featured ? "aspect-video" : "aspect-[2/1]";
  if (project.visual === "banner") {
    return (
      <div className={`relative shrink-0 overflow-hidden bg-[#061018] ${frame}`}>
        <img src={project.image} alt={project.imageAlt} width={1280} height={720} className="absolute inset-0 h-full w-full object-contain object-center" />
      </div>
    );
  }
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden ${frame}`} style={{ background: project.stage }}>
      <span aria-hidden className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border-[18px] border-white/50" />
      <img src={project.image} alt={project.imageAlt} width={512} height={512} className={`relative z-[1] w-auto object-contain ${featured ? "h-32 sm:h-40" : "h-28 sm:h-36"}`} />
    </div>
  );
}

export function ProjectCard({ project, heading, featured = false }: { project: Project; heading: "h2" | "h3"; featured?: boolean }) {
  const Title = heading;
  return (
    <article id={`project-${project.id}`} className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-raised)]">
      <ProjectStage project={project} featured={featured} />
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex min-h-7 items-center rounded-full bg-copy px-2.5 text-xs font-bold">{project.language}</span>
          {featured && <span className="inline-flex min-h-7 items-center rounded-full bg-copy px-2.5 text-xs font-bold">{project.license}</span>}
          {featured && project.tags?.map((tag) => (
            <span key={tag} className="inline-flex min-h-7 items-center whitespace-nowrap rounded-full bg-copy px-2.5 text-xs font-bold">{tag}</span>
          ))}
        </div>
        <div>
          <Title className="text-balance text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">{project.name}</Title>
          <p className="mt-0.5 font-mono text-xs text-muted">{project.repo}</p>
        </div>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-bold">
          <span className="whitespace-nowrap">{project.stars} Stars</span>
          <span className="whitespace-nowrap text-muted">{project.forks} Forks</span>
          {featured && <span className="whitespace-nowrap font-semibold text-muted">快照 {PROJECT_SNAPSHOT}</span>}
        </p>
        <p className="text-pretty text-sm leading-6 text-muted">{project.summary}</p>
        {featured && (
          <ul className="space-y-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-6">
                <Check className="mt-1 h-4 w-4 shrink-0" />
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        )}
        {featured && <p className="text-xs leading-5 text-muted">仓库更新 {project.updated}</p>}
        <a href={project.url} {...ext} aria-label={`${project.name} 的 GitHub 仓库`} className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-white">
          GitHub 仓库 <Arrow className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export function ProjectsIntro({ variant, titleId }: { variant: "home" | "page"; titleId?: string }) {
  const Title = variant === "page" ? "h1" : "h2";
  const number = variant === "page" ? "text-[48px] sm:text-[60px]" : "text-[36px] sm:text-[44px]";
  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-[1.4fr_0.9fr]">
      <div className="flex flex-col rounded-[28px] bg-ink px-6 py-7 text-white sm:px-8 sm:py-8">
        <p className="font-mono text-xs font-bold text-white/75">OPEN SOURCE · {PROJECT_SNAPSHOT} 快照</p>
        <Title id={titleId} className="mt-3 text-balance text-[32px] font-black leading-tight tracking-tight sm:text-[40px]">开源项目</Title>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          <span className="block sm:inline">GitHub {GITHUB_HANDLE}，{projectStats.count} 个 50★ 以上原创仓库。</span>{" "}
          <span className="block sm:inline">合计 {projectStats.stars} Stars、{projectStats.forks} Forks。</span>{" "}
          <span className="block sm:inline"><span className="whitespace-nowrap">快照 {PROJECT_SNAPSHOT}</span>，不是实时计数。</span>
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {variant === "home" && (
            <Link href="/projects/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-ink">
              进入作品页
            </Link>
          )}
          <a href={GITHUB_URL} {...ext} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold ${variant === "page" ? "bg-white text-ink" : "border border-white/40 text-white"}`}>
            GitHub {GITHUB_HANDLE} <Arrow className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="grid h-full grid-cols-2 gap-4">
        <div className="flex min-h-[148px] flex-col justify-center gap-2 rounded-[26px] bg-sun p-5">
          <p className={`font-extrabold leading-none tabular-nums tracking-tight text-[#36302b] ${number}`}>{projectStats.stars}</p>
          <p className="text-sm font-bold text-[#36302b]">Stars 合计<span className="mt-1 block text-xs font-semibold text-[#5c542e]">{PROJECT_SNAPSHOT} 快照</span></p>
        </div>
        <div className="flex min-h-[148px] flex-col justify-center gap-2 rounded-[26px] bg-mint p-5">
          <p className={`font-extrabold leading-none tabular-nums tracking-tight ${number}`}>{projectStats.forks}</p>
          <p className="text-sm font-bold">Forks 合计<span className="mt-1 block text-xs font-semibold text-[#245252]">静态数据 · 非实时</span></p>
        </div>
      </div>
    </div>
  );
}

function ProjectGrid({ heading, featured }: { heading: "h2" | "h3"; featured?: boolean }) {
  return (
    <ul className="mt-4 grid items-stretch gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.id} className="min-w-0">
          <ProjectCard project={project} heading={heading} featured={featured} />
        </li>
      ))}
    </ul>
  );
}

export function HomeProjects() {
  return (
    <section aria-labelledby="oss-title" className="pb-10">
      <ProjectsIntro variant="home" titleId="oss-title" />
      <ProjectGrid heading="h3" />
    </section>
  );
}

export function ProjectsCatalog() {
  return <ProjectGrid heading="h2" featured />;
}

export function ProjectsFollow() {
  return (
    <aside className="mt-4 flex flex-col items-start justify-between gap-4 rounded-[28px] bg-coral px-6 py-6 sm:flex-row sm:items-center">
      <div className="min-w-0">
        <p className="font-mono text-xs font-bold">X · @Lniosytest</p>
        <p className="mt-1 text-balance text-xl font-extrabold leading-snug">在 X 关注李天才</p>
        <p className="mt-1 text-sm leading-6 text-[#4c2c24]">开源仓库在 GitHub，日常实战写在 X。</p>
      </div>
      <a href={X_URL} {...ext} className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white">
        在 X 关注我 <Arrow className="h-4 w-4" />
      </a>
    </aside>
  );
}
