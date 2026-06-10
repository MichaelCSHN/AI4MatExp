# AI4MatExp

AI4MatExp is the course-platform edition of **AI 时代的材料实验：从自动到自主** —
以自驱动实验室（SDL）为载体、训练科研判断力的 13 周研究生课程。

本仓库与 `sdl-lecture`（讲座版）分离：

- `sdl-lecture`：面向公开讲座的演示站。
- `AI4MatExp`：完整课程平台——13 周教材、案例、项目、模板、试题库、教师材料包。

## 课程的两层动机

- **表层**：帮学生掌握 AI4M 之"渔"（以 SDL 为代表）。
- **底层**：补上科学哲学 ABC，梳理"实验"作为科学方法论的历史脉络、现实动态与未来图景，
  和学生一起想清楚 AI 时代人的判断放在哪里。

## 网站功能（v0.2）

- **课程驾驶舱**：五阶段地图、五条设计原则、关键交付物。
- **14 周详情页**：每周的核心问题、判断任务、活动、认识论工具、思考题、教师追问、外援与模板。
- **案例现场**：5 个案例，含 A-Lab "先辩论后揭晓真实裁决"的交互机制（2026 Nature 更正）。
- **GP/BO 实验台**：可交互的一维高斯过程——加点、观察 σ、调探索强度，先建立直觉再讲数学。
- **模板库**：11 个交付模板，每个标注 AIAS（AI 使用级别），一键复制 Markdown。
- **项目轨道**：4 条轨道 + 评分标准 + 成绩体系。
- **思考与试题**：判断力试题库，选择题即时解析、开放题给评分要点。
- **AC 外援**：逐周对齐 AC Microcourses（含 NIST/SEMATECH 手册作为 DOE 主外援）+ 科学哲学工具箱 + 文献库。
- **教师材料包**：触发脚本、活动流程、常见误区、追问清单、风险提示。

## 技术栈

- Vite + React + TypeScript，react-router（HashRouter，适配静态托管）
- 数据驱动：课程内容全部在 `src/content/*`（实现 `docs/02_Content_Model.md` 的内容模型）
- 课程设计：`docs/course-design/SDL课程设计方案-v3.md`（v3.3）
- 外部调研与升级依据：`docs/07_External_Landscape_Review_2026-06.md`

## 脚本

```bash
npm run dev      # 本地开发
npm run lint     # ESLint
npm run build    # 类型检查 + 生产构建
npm run preview  # 预览构建产物
```

## 部署

`.github/workflows/deploy.yml` 在推送到开发分支或 `main` 时自动构建并发布到 GitHub Pages。
需在仓库 Settings → Pages 中将 Source 设为 "GitHub Actions"。
