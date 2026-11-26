import Image from "next/image";
import { friendOutbound, friends, type Friend, type FriendSite } from "@/lib/friends";
import { Arrow } from "./Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function FriendCard({ friend, priority }: { friend: Extract<Friend, FriendSite>; priority?: boolean }) {
  const siteHref = friendOutbound(friend.siteUrl);
  const xHref = friendOutbound(friend.xUrl);
  const attribution = `站长：${friend.ownerName} ${friend.ownerHandle}`;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-[var(--shadow-raised)] sm:p-6">
      <a href={xHref} {...ext} className="flex min-h-14 items-center gap-3">
        <Image src={friend.avatar} alt="" width={56} height={56} priority={priority} className="h-14 w-14 shrink-0 rounded-full object-cover" />
        <span className="min-w-0">
          <span className="block text-lg font-extrabold tracking-tight">
            {friend.ownerName}
            {friend.verified ? <BlueMark /> : null}
            {friend.verified ? <span className="sr-only">蓝标</span> : null}
          </span>
          <span className="mt-0.5 block text-sm font-bold leading-5 text-muted">{attribution}</span>
        </span>
      </a>
      <a href={siteHref} {...ext} className="mt-4 block overflow-hidden rounded-[20px] bg-paper">
        <Image
          src={friend.preview}
          alt={`${friend.siteName} 首页首屏`}
          width={friend.previewWidth}
          height={friend.previewHeight}
          priority={priority}
          className="h-auto w-full"
        />
      </a>
      <p className="mt-4 text-sm leading-6 text-muted">{friend.summary}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href={siteHref} {...ext} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white">
          {friend.siteName} <Arrow className="h-4 w-4 shrink-0" />
        </a>
        {friend.extra ? (
          <a href={friendOutbound(friend.extra.href)} {...ext} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-bold">
            {friend.extra.label} <Arrow className="h-4 w-4 shrink-0" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function BlueMark() {
  return (
    <svg viewBox="0 0 22 22" aria-hidden="true" className="ml-1 inline-block h-4 w-4 align-[-2px]">
      <circle cx="11" cy="11" r="10" fill="#1d9bf0" />
      <path d="M6.6 11.2 9.5 14.1 15.5 8.1" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SiteBlock({ site }: { site: FriendSite }) {
  const siteHref = friendOutbound(site.siteUrl);
  return (
    <div className="flex min-w-0 flex-col">
      <a href={siteHref} {...ext} className="block overflow-hidden rounded-[20px] bg-paper">
        <Image src={site.preview} alt={`${site.siteName} 首页首屏`} width={site.previewWidth} height={site.previewHeight} className="h-auto w-full" />
      </a>
      <p className="mt-3 text-sm leading-6 text-muted">{site.summary}</p>
      <a href={siteHref} {...ext} className="mt-3 inline-flex min-h-12 max-w-full items-center justify-center gap-2 self-start rounded-full bg-ink px-5 text-sm font-bold text-white">
        {site.siteName} <Arrow className="h-4 w-4 shrink-0" />
      </a>
    </div>
  );
}

function MultiFriendCard({ friend }: { friend: Extract<Friend, { sites: FriendSite[] }> }) {
  const xHref = friendOutbound(friend.xUrl);
  const attribution = `站长：${friend.ownerName} ${friend.ownerHandle}`;
  return (
    <article className="overflow-hidden rounded-3xl bg-white p-5 shadow-[var(--shadow-raised)] sm:p-6">
      <a href={xHref} {...ext} className="flex min-h-14 items-center gap-3">
        <Image src={friend.avatar} alt="" width={56} height={56} className="h-14 w-14 shrink-0 rounded-full object-cover" />
        <span className="min-w-0">
          <span className="block text-lg font-extrabold tracking-tight">
            {friend.ownerName}
            {friend.verified ? <BlueMark /> : null}
            {friend.verified ? <span className="sr-only">蓝标</span> : null}
          </span>
          <span className="mt-0.5 block text-sm font-bold leading-5 text-muted">{attribution}</span>
        </span>
      </a>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {friend.sites.map((site) => (
          <SiteBlock key={site.siteUrl} site={site} />
        ))}
      </div>
    </article>
  );
}

export function FriendList() {
  if (!friends.length) {
    return <p className="rounded-3xl bg-white px-5 py-8 text-sm text-muted shadow-[var(--shadow-raised)]">还没有收录推友站点。</p>;
  }
  return (
    <ul className="grid gap-4">
      {friends.map((friend, index) => (
        <li key={friend.id} className="min-w-0">
          {"sites" in friend ? <MultiFriendCard friend={friend} /> : <FriendCard friend={friend} priority={index === 0} />}
        </li>
      ))}
    </ul>
  );
}
