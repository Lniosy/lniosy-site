/* eslint-disable @next/next/no-img-element */
import { guideCategories, type Guide } from "@/lib/guides";
import { Arrow } from "./Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const categoryLabel = Object.fromEntries(guideCategories.map((c) => [c.id, c.label]));
const tone: Record<Guide["category"], string> = {
  bank: "bg-coral",
  card: "bg-sun",
  ai: "bg-lavender",
  dev: "bg-mint",
};

export default function GuideCard({ guide, showCover = true }: { guide: Guide; showCover?: boolean }) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-raised)]">
      <a href={guide.href} {...ext} className="flex min-w-0 flex-1 flex-col">
        {showCover && (
          <img
            src={guide.cover}
            alt=""
            width={guide.coverWidth}
            height={guide.coverHeight}
            className="block h-auto w-full bg-copy"
          />
        )}
        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 font-bold">
              <span className={`h-2 w-2 rounded-full ${tone[guide.category]}`} aria-hidden />
              {categoryLabel[guide.category]}
            </span>
            {guide.recent && <span className="rounded-full bg-sun px-2 py-0.5 font-bold">近期</span>}
            <time dateTime={guide.dateTime} className="ml-auto text-muted">{guide.date}</time>
          </div>
          <h3 className="mt-2 text-lg font-extrabold leading-snug">{guide.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{guide.summary}</p>
          {guide.notice && (
            <p className="mt-3 rounded-2xl bg-sun px-3 py-2 text-sm font-bold leading-6 text-[#36302b]">{guide.notice}</p>
          )}
          <span className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-4 text-sm font-bold">
            去 X 阅读 <Arrow className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>
      {guide.updates && guide.updates.length > 0 && (
        <div className="border-t border-line px-5 py-2 sm:px-6">
          <p className="pt-2 text-xs font-bold text-muted">后续更新</p>
          <ul className="mt-1">
            {guide.updates.map((u) => (
              <li key={u.href}>
                <a href={u.href} {...ext} className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">
                  {u.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
