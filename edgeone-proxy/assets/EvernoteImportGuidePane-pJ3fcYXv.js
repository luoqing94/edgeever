import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{v as t,y as n}from"./vendor-react-FkrQ505E.js";import{n as r,t as i}from"./vendor-i18n-CVJwtjYC.js";import{Ds as a,Os as o,ds as s,fs as c}from"./vendor-icons-Ci4yjjtu.js";import{r as l,t as u}from"./ui-button-UC0v93i7.js";import{a as d,i as f}from"./workspace-ui-BA7cYpV5.js";import{n as p,t as m}from"./ExecutionCenterButton-SUjqG7_D.js";import{n as h,t as g}from"./vendor~WorkspaceApp~TemplatesPane~EvernoteImportGuidePane~EditorPane-Bp7ubzna.js";var _;function v(){return(v=e((()=>{_=`# 印象笔记（Evernote）极简迁移指引

[简体中文](evernote-migration-guide.md) | [English](evernote-migration-guide.en-US.md)

我们强烈推荐使用 AI 编程助手（如 Codex、Antigravity、Claude Code、Cursor、WorkBuddy、OpenClaw、Hermes Agent 等）自动执行迁移。该方案已完成内存流式优化与空文本预处理，能安全应对数 GB 级别超大笔记库，完整保留创建/修改时间与嵌套笔记本目录层级。

---

### 步骤 1：配置并安装 EdgeEver MCP 服务

1. 点击网页端左下角的 **设置（Settings）** 图标。
2. 在 **API & MCP 授权** 卡片生成 Token 后，点击 **复制完整 MCP 配置** 按钮。
3. 把复制的 JSON 配置直接粘贴发送给你的 AI 编程助手（如 Codex, Antigravity, Claude Code, Cursor, WorkBuddy, OpenClaw, Hermes Agent 等），让它帮你自动在当前的 AI 客户端中安装配置好该 MCP 服务：

\`\`\`sh
你是 AI 编程助手。这是我的 EdgeEver MCP 服务配置 JSON。请帮我把这个 MCP 服务直接配置到我当前使用的 AI 编辑器/客户端（如 Codex, Claude Code, Cursor, WorkBuddy, Cline 等）的 MCP 服务器配置文件中：

<在此处粘贴刚才复制 of JSON 配置内容>
\`\`\`

---

### 步骤 2：让 AI 助手自动导入和迁移笔记

当 AI 助手配置好 MCP 之后，请复制以下 Prompt 发送给它，让它全自动拉取印象笔记数据并导入：

\`\`\`sh
你是 AI 编程助手。请帮我把本地的印象笔记全量迁移到我当前部署的 EdgeEver 实例中：
1. 检查并使用 \`pipx install evernote-backup\` 自动安装备份工具。
2. 提示我输入印象笔记的用户名和密码并初始化数据库（指定 china 后端），随后同步数据并导出到 \`./evernote-export\` 目录。
3. 从 GitHub 下载最新版迁移脚本：\`https://raw.githubusercontent.com/tianma-if/edgeever/main/scripts/import-evernote-enex-via-mcp.mjs\` 到本地。
4. 安装脚本所需的本地图片压缩库 \`sharp\` 和 \`fast-xml-parser\` 依赖。
5. 使用先前配置的 URL 和 Token 运行该脚本完成迁移（脚本会自动进行 WebP 图片转换）：
   - 全量迁移：\`bun import-evernote-enex-via-mcp.mjs --input "./evernote-export" --yes\`
   - 指定迁移某些笔记本：追加 \`--include "笔记本A,笔记本B"\` 参数。

请告诉我你需要什么信息（如账号密码），收到后直接并发自动执行上述步骤。
\`\`\`

> 💡 **手动模式备用**：如果您不使用 AI 助手，也可以手动前往 GitHub 仓库 [EdgeEver GitHub](https://github.com/tianma-if/edgeever) 下载 \\\`scripts/import-evernote-enex-via-mcp.mjs\\\` 脚本并按其头部注释执行。

---

### 步骤 3：在网页端验证结果

1. 导入完成后，回到 EdgeEver 网页端刷新页面。
2. 检查左侧栏，确认印象笔记原有的「笔记本组（堆叠）」层级结构已完美还原。
3. 打开几篇包含多张图片的笔记，验证其中的图片是否已成功在编辑器中加载并能清晰显示。
`})))()}var y;function b(){return(b=e((()=>{y=`# Minimal Evernote Migration Guide

[简体中文](evernote-migration-guide.md) | [English](evernote-migration-guide.en-US.md)

We strongly recommend using an AI coding assistant, such as Codex, Antigravity, Claude Code, Cursor, WorkBuddy, OpenClaw, or Hermes Agent, to run the migration automatically. The current migration flow is optimized for streaming large archives and preprocessing empty text, and can handle multi-GB note libraries while preserving created/updated timestamps and nested notebook hierarchy.

---

### Step 1: Configure and install the EdgeEver MCP service

1. Open EdgeEver and click **Profile / Settings** in the lower-left corner.
2. In the **API & MCP authorization** card, generate a token and click **Copy full MCP config**.
3. Paste the copied JSON into your AI coding assistant and ask it to install the MCP service in your current AI client:

\`\`\`sh
You are an AI coding assistant. This is my EdgeEver MCP service configuration JSON. Please configure this MCP service directly in the MCP server configuration file for my current AI editor/client, such as Codex, Claude Code, Cursor, WorkBuddy, or Cline:

<paste the copied JSON configuration here>
\`\`\`

---

### Step 2: Let the AI assistant import and migrate your notes

After the assistant has configured MCP, send it this prompt:

\`\`\`sh
You are an AI coding assistant. Please migrate my local Evernote data into my deployed EdgeEver instance:
1. Check for and install the backup tool with \`pipx install evernote-backup\`.
2. Ask me for my Evernote username and password, initialize the database with the China backend if needed, sync the data, and export it to \`./evernote-export\`.
3. Download the latest migration script from GitHub: \`https://raw.githubusercontent.com/tianma-if/edgeever/main/scripts/import-evernote-enex-via-mcp.mjs\`.
4. Install the local dependencies required by the script: \`sharp\` and \`fast-xml-parser\`.
5. Run the script with the previously configured URL and token to complete the migration. The script performs WebP image conversion automatically:
   - Full migration: \`bun import-evernote-enex-via-mcp.mjs --input "./evernote-export" --yes\`
   - Selected notebooks only: add \`--include "NotebookA,NotebookB"\`.

Tell me what information you need, such as account credentials, then run the steps automatically and in parallel where possible.
\`\`\`

> Manual fallback: If you do not use an AI assistant, download \`scripts/import-evernote-enex-via-mcp.mjs\` from the [EdgeEver GitHub repository](https://github.com/tianma-if/edgeever) and follow the comments at the top of the script.

---

### Step 3: Verify the result in the Web app

1. After import completes, refresh the EdgeEver Web app.
2. Check the left sidebar and confirm the original Evernote notebook stack hierarchy is restored.
3. Open several notes with images and verify that images load and display clearly in the editor.
`})))()}var x,S,C;function w(){return(w=e((()=>{x=n(),o(),c(),i(),l(),d(),h(),v(),b(),p(),S=t(),C=({onClose:e,onOpenExecutionCenter:t})=>{let{i18n:n,t:i}=r(),o=n.resolvedLanguage===`en-US`?y:_,c=(0,x.useMemo)(()=>g.parse(o),[o]);return(0,S.jsxs)(`div`,{className:`flex h-full min-h-0 min-w-0 flex-col overflow-x-hidden bg-workspace-canvas`,children:[(0,S.jsxs)(`header`,{className:`flex h-[calc(3.5rem+env(safe-area-inset-top))] shrink-0 items-end justify-between border-b border-slate-200 bg-card px-4 pb-3 pt-[env(safe-area-inset-top)] lg:h-16 lg:items-center lg:px-6 lg:pb-0 lg:pt-0`,children:[(0,S.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[(0,S.jsx)(u,{size:`icon`,variant:`ghost`,title:i(`common.back`),"aria-label":i(`common.back`),onClick:e,className:`h-9 w-9 rounded-lg hover:bg-slate-100`,children:(0,S.jsx)(a,{className:`h-5 w-5 text-slate-500`})}),(0,S.jsxs)(`div`,{className:`min-w-0`,children:[(0,S.jsxs)(`h1`,{className:`flex items-center gap-2 ${f}`,children:[(0,S.jsx)(s,{className:`h-4 w-4 text-slate-900`}),i(`evernoteGuide.title`)]}),(0,S.jsx)(`p`,{className:`mt-0.5 truncate text-xs font-medium text-slate-400`,children:i(`evernoteGuide.subtitle`)})]})]}),t?(0,S.jsx)(m,{onClick:t}):null]}),(0,S.jsx)(`main`,{className:`min-w-0 flex-1 overflow-x-hidden overflow-y-auto px-4 py-4 lg:px-6 lg:py-6`,children:(0,S.jsx)(`article`,{className:`mx-auto w-full min-w-0 max-w-4xl rounded-lg border border-slate-200 bg-card p-6 shadow-sm sm:p-8`,children:(0,S.jsx)(`div`,{className:`markdown-content max-w-none`,dangerouslySetInnerHTML:{__html:c}})})})]})}})))()}w();export{C as EvernoteImportGuidePane};