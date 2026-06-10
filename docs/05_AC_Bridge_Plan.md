# AC 外援方案

## 定位

AC Microcourses 是本课程的**前导训练场和外部工具箱**。本站通过链接、任务和反思问题引导学生使用 AC，而不是复制 AC 内容。

> AC 负责"怎么跑起来"；本课程负责"为什么这样设计、何时相信、哪里会失败、人的判断放在哪里"。

AC 现状（2026-06 核验）：微课已固化为经 U of T 继续教育学院（SCS）交付的 **"Autonomous Systems for Discovery" 证书**——4 门异步远程微课 + 1 门线下 capstone，约 $150/门；课程仓库 2026 年 4 月仍在活跃备课。本站应同时链接 readthedocs 开放内容与 SCS 证书页，并注明两者区别（开放自学 vs 付费认证）。

## 颗粒度与超越原则

- **颗粒度总体对齐 AC**：本课程内容单元的粒度参照 AC 微课模块的粒度，便于学生在两边往返。
- **重点难点更详细**：GP/BO 直觉、A-Lab 判断、SDL 架构与责任流、目标函数设计与失败分析——这些 AC 一笔带过或不覆盖的地方，本课程展开最细。
- **技术栈超越 AC**：AC 是 ReadTheDocs 静态文档 + Notebook；本站是交互式课程现场（可视化、案例辩论、模板生成、项目推进）。详见《课程建设方案》。

## 推荐入口（逐周对齐）

| AC 模块（证书课程） | 本课使用时机 | AC 负责 | 学生任务 | 本课更详细之处 |
|---------|-------------|---------|---------|----------------|
| 1. Introduction to AI for Discovery using SDLs | 第 0-1 周 | 颜色匹配最小 SDL（Pico W、Ax、MQTT、MongoDB） | 理解最小 SDL 闭环 | 闭环每一步的认识论追问与人的否决权 |
| 2. AI and Materials Databases for SDLs | 第 5-8 周 | 多目标/约束/多保真/批量/异步 BO 实操 | 对照 BO 类型选择表 | 每种 BO 形式对应的科学判断问题；FAIR 诊断 |
| 3. Autonomous Systems for SDLs | 第 8-9 周 | 机器人控制、工作流编排 | 理解自动系统和控制边界 | 数据流/控制流/责任流三张图；L1-L6；性能指标 |
| 4. Software Development for SDLs | 分组 B/D 轨道 | 软件工程实践 | 学习可复用工程实践 | PAVE-R 下 AI 生成代码的验证、声明与责任 |
| 5. Capstone / Training Lab Design Project | 第 9-13 周 | 真实硬件 | 对照项目方案和真实约束 | 本课以 SDL 设计草图 + 失败分析替代硬件 |

## 配套外部资源（与 AC 并列的外援）

| 资源 | 用途 |
|------|------|
| self-driving-lab-demo（sparks-baird，<$100 颜色匹配 SDL） | 想动手的学生的最低成本闭环 |
| "Frugal twin" 综述（*Digital Discovery* 2024） | 低成本 SDL 教学路线的文献依据 |
| awesome-self-driving-labs（GitHub） | 社区资源总目录，D 轨道与第 13 周社区贡献出口 |
| AI4Mat（NeurIPS/ICLR workshop）、LLM Hackathon、AI4X/Accelerate 会议 | 研究社区入口（选读） |

## AC 到本课程转换卡

```markdown
## AC 模块

## 我阅读或复现了什么

## 它解决了什么工程问题

## 它没有解决什么科研判断问题

## 如果迁移到我的材料体系，哪些假设会失效

## 人的 veto 点应放在哪里
```

## 使用边界

- 不使用 AC 名称暗示认证或合作。
- 不复制证书、品牌视觉或注册材料。
- 少量改编代码或 Notebook 时保留 MIT License 来源说明。
- 链接旁标注最后核验日期（AC 课程结构可能变化）。
