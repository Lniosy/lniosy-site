// 开源项目：只收录下面 4 个公开原创仓库。
// Star / Fork 是 2026-11-24 的静态快照，不是实时接口。不要改成现场抓取，也不要加未入选的仓库。

export const GITHUB_URL = "https://github.com/Lniosy";
export const GITHUB_HANDLE = "@Lniosy";
export const PROJECT_SNAPSHOT = "2026-11-24";

export type Project = {
  id: string;
  name: string;
  repo: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  license: "MIT";
  updated: string;
  summary: string;
  highlights: string[];
  tags?: string[];
  stage: string;
  visual: "icon" | "banner";
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "souhun",
    name: "搜魂",
    repo: "souhun",
    url: "https://github.com/Lniosy/souhun",
    stars: 190,
    forks: 55,
    language: "Swift",
    license: "MIT",
    updated: "2026-11-02",
    summary: "在 Mac 和 Windows 上查看、写入和忘掉 Grok Bot 的记忆。",
    highlights: [
      "原生 SwiftUI（Mac）与 Go（Windows）桌面图形界面",
      "区分全局与单 Bot 记忆及指令",
      "支持 Releases 直接下载安装包",
    ],
    stage: "#c5d4fb",
    visual: "icon",
    image: "/projects/souhun-icon.webp",
    imageAlt: "搜魂图标：深蓝底上的金色手镜",
  },
  {
    id: "qiqing-liuyu",
    name: "七情六欲",
    repo: "qiqing-liuyu",
    url: "https://github.com/Lniosy/qiqing-liuyu",
    stars: 141,
    forks: 16,
    language: "Python",
    license: "MIT",
    updated: "2026-04-10",
    summary: "AI 七情六欲增强 Skill — 让 AI 拥有类人的情感、观点和人格，让 AI 不再像 AI。",
    highlights: [
      "面向 OpenClaw / Claude Code 的 AI 人格与情绪增强 Skill",
      "减少机械感与 AI 味",
      "支持可选的 BLE 手环心率感知生态联动",
    ],
    stage: "#ffd5cc",
    visual: "icon",
    image: "/projects/qiqing-mark.svg",
    imageAlt: "七情六欲图标：紫色圆角方标上的七点标记",
  },
  {
    id: "dsh-tool-grok-bot",
    name: "接通 Grok Bot",
    repo: "dsh-tool-grok-bot",
    url: "https://github.com/Lniosy/dsh-tool-grok-bot",
    stars: 135,
    forks: 40,
    language: "JavaScript",
    license: "MIT",
    updated: "2026-11-04",
    summary: "在 DeepSeek Harness（DSH）里接通 Grok Bot，发一句话、取回回复并管理云端记忆。",
    highlights: [
      "自动复用本机 Grok Bot 登录态免手填",
      "支持 DeepSeek Harness 一键安装与多 Profile 管理",
      "支持发消息、查状态与云端记忆操作",
    ],
    stage: "#e7eef6",
    visual: "icon",
    image: "/projects/dsh-icon.webp",
    imageAlt: "接通 Grok Bot 图标：白底圆角方标上的黑白鲸形标记",
  },
  {
    id: "coolapk-mcp",
    name: "酷安 MCP",
    repo: "coolapk-mcp",
    url: "https://github.com/Lniosy/coolapk-mcp",
    stars: 51,
    forks: 9,
    language: "Python",
    license: "MIT",
    updated: "2026-10-22",
    summary: "酷安社区 MCP Server + CLI — 在 Cursor / Claude 里直接搜酷安动态、热榜、应用与评论。",
    highlights: [
      "同时提供 MCP Server 与命令行 CLI",
      "一键拉取酷安热榜、动态、应用与二手信息进 AI 上下文",
      "Pydantic 精简序列化，输出体积大幅压缩",
    ],
    tags: ["MCP Server", "Cursor", "Claude", "CLI"],
    stage: "#061018",
    visual: "banner",
    image: "/projects/coolapk-hero.webp",
    imageAlt: "酷安 MCP 头图：深色 IDE 与酷安动态界面",
  },
];

export const projectStats = {
  count: projects.length,
  stars: projects.reduce((sum, project) => sum + project.stars, 0),
  forks: projects.reduce((sum, project) => sum + project.forks, 0),
  asOf: PROJECT_SNAPSHOT,
};

if (projectStats.count !== 4 || projectStats.stars !== 517 || projectStats.forks !== 120) {
  throw new Error("开源项目快照与 2026-11-24 的 4 个仓库、517 Stars、120 Forks 不一致");
}
