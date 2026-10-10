import type { Referral } from "@/lib/content";
import CopyCode from "./CopyCode";

const Rebate = () => <span className="mb-1.5 inline-block bg-[#c8f04a] px-2 py-0.5 text-xs font-extrabold text-ink">我有返利</span>;

/**
 * 邀请链接 + 邀请码一键复制。邀请卡和教程页共用。
 * badgeOnLink：「我有返利」挂在邀请链接上（美卡 / 银行账户统一式样）；否则挂在邀请码上。
 */
export default function CopyBlock({ r, badgeOnLink = false, className = "mt-5" }: { r: Referral; badgeOnLink?: boolean; className?: string }) {
  return (
    <div className={`${className} space-y-3`}>
      <div>
        {badgeOnLink && <Rebate />}
        <CopyCode label="邀请链接" value={r.href} variant="link" />
      </div>
      {r.code && (
        <div>
          {!badgeOnLink && <Rebate />}
          <CopyCode label={r.code.label} value={r.code.value} hint={r.code.hint} />
        </div>
      )}
    </div>
  );
}
