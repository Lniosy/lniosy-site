import type { Referral } from "@/lib/content";
import CopyCode from "./CopyCode";

/** 邀请链接 + 邀请码（「我有返利」）一键复制。邀请卡和教程页共用。 */
export default function CopyBlock({ r }: { r: Referral }) {
  return (
    <div className="mt-5 space-y-3">
      <CopyCode label="邀请链接" value={r.href} variant="link" />
      {r.code && (
        <div>
          <span className="mb-1.5 inline-block bg-[#c8f04a] px-2 py-0.5 text-xs font-extrabold text-ink">我有返利</span>
          <CopyCode label={r.code.label} value={r.code.value} hint={r.code.hint} />
        </div>
      )}
    </div>
  );
}
