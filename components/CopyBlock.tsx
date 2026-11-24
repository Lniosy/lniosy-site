import type { Referral } from "@/lib/content";
import CopyCode from "./CopyCode";

/**
 * 邀请链接 + 邀请码。链接和邀请码都是 48px 单行药丸，复制的是原始字符串。
 */
export default function CopyBlock({ r, className = "" }: { r: Referral; badgeOnLink?: boolean; className?: string }) {
  return (
    <div className={`${className} min-w-0 space-y-2`}>
      {r.notMine ? (
        <span className="inline-flex rounded-md bg-[#eeeafd] px-2 py-0.5 text-[11px] font-extrabold text-muted">网友分享 · 非本人</span>
      ) : (
        <span className="inline-flex rounded-md bg-rebate px-2 py-0.5 text-[11px] font-extrabold text-rebate-ink">我有返利</span>
      )}
      <CopyCode label="邀请链接" value={r.href} variant="link" />
      {r.code && <CopyCode label={r.code.label} value={r.code.value} hint={r.code.hint} />}
    </div>
  );
}
