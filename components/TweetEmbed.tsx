"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    twttr?: { widgets?: { load: (el?: HTMLElement) => void } };
  }
}

/**
 * 官方 X 嵌入：先渲染纯文本 blockquote（无 JS / 加载失败时就是普通引用卡片），
 * 滚动到附近时才加载 platform.twitter.com/widgets.js，再升级为官方卡片。
 */
export default function TweetEmbed({ url, text, date }: { url: string; text: string; date: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [upgraded, setUpgraded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const load = () => {
      const done = () => {
        window.twttr?.widgets?.load(el);
        // 官方卡片渲染成功后会插入 iframe
        const t = window.setInterval(() => {
          if (el.querySelector("iframe")) {
            setUpgraded(true);
            window.clearInterval(t);
          }
        }, 300);
        window.setTimeout(() => window.clearInterval(t), 10000);
      };
      if (window.twttr?.widgets) return done();
      const s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.charset = "utf-8";
      s.onload = done;
      document.body.appendChild(s);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`tweet-embed w-full max-w-[550px] ${upgraded ? "" : "min-h-[200px]"}`}>
      <blockquote className="twitter-tweet" data-dnt="true" data-lang="zh-cn" data-conversation="none">
        <div className="border border-line bg-white p-5 text-[15px] leading-7 text-ink">
          <p className="whitespace-pre-line" lang="zh">{text}</p>
          <p className="mt-3 font-mono text-xs text-muted">
            — 李天才 (@Lniosytest){" "}
            <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
              {date}
            </a>
          </p>
        </div>
      </blockquote>
    </div>
  );
}
