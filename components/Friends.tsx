import Image from "next/image";
import { friendOutbound, friends, type Friend } from "@/lib/friends";
import { Arrow } from "./Icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function FriendCard({ friend, priority }: { friend: Friend; priority?: boolean }) {
  const siteHref = friendOutbound(friend.siteUrl);
  const xHref = friendOutbound(friend.xUrl);
  const attribution = `站长：${friend.ownerName} ${friend.ownerHandle}`;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-[var(--shadow-raised)] sm:p-6">
      <a href={xHref} {...ext} className="flex min-h-14 items-center gap-3">
        <Image src={friend.avatar} alt="" width={56} height={56} priority={priority} className="h-14 w-14 shrink-0 rounded-full object-cover" />
        <span className="min-w-0">
          <span className="block text-lg font-extrabold tracking-tight">{friend.ownerName}</span>
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
      <a href={siteHref} {...ext} className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-ink px-5 text-sm font-bold text-white">
        {friend.siteName} <Arrow className="h-4 w-4" />
      </a>
    </article>
  );
}

export function FriendList() {
  if (!friends.length) {
    return <p className="rounded-3xl bg-white px-5 py-8 text-sm text-muted shadow-[var(--shadow-raised)]">还没有收录推友站点。</p>;
  }
  return (
    <ul className={`grid gap-4 ${friends.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
      {friends.map((friend, index) => (
        <li key={friend.id} className="min-w-0">
          <FriendCard friend={friend} priority={index === 0} />
        </li>
      ))}
    </ul>
  );
}
