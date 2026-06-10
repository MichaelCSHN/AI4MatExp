# 内容模型

## Week

| 字段 | 说明 |
|------|------|
| `week` | 周次，允许 `0` |
| `phase` | 阶段：预备、清醒、诊断、扩展、整合、开放 |
| `title` | 周标题 |
| `coreQuestion` | 核心问题 |
| `judgmentTask` | 本周训练的判断任务 |
| `activities` | 课堂活动 |
| `deliverables` | 交付物 |
| `templates` | 使用模板 |
| `acLinks` | AC 外援链接 |
| `readings` | 本周文献，每条带状态标记：`active` / `corrected`（已更正）/ `contested`（争议中）及最后核验日期 |
| `teacherPrompts` | 教师追问 |

## Artifact

| 字段 | 说明 |
|------|------|
| `id` | 唯一标识 |
| `title` | 交付物名称 |
| `purpose` | 训练目的 |
| `aiasLevel` | 本交付物允许的 AI 使用级别（AIAS 1-5），安全评估点（口头答辩）单独标注 |
| `fields` | 需要填写的字段 |
| `rubric` | 评分标准 |
| `examples` | 样例 |

## Case

| 字段 | 说明 |
|------|------|
| `title` | 案例名称 |
| `kind` | 案例类型：`controversy`（争议）/ `positive`（正面对照）/ `exercise`（内部演练） |
| `controversy` | 争议核心（正面案例填"为什么它做对了"） |
| `timeline` | 时间线事件列表（日期 + 事件），支撑"主张→批判→裁决"弧线展示 |
| `roles` | 角色卡 |
| `evidenceCards` | 证据卡，每张带 `stage` 字段（`debate` 辩论用 / `reveal` 揭晓用），支持分阶段发放 |
| `verdict` | 真实世界裁决：`corrected` / `contested` / `none`，附说明与来源 |
| `lastVerified` | 案例状态最后核验日期（争议案例的状态会演化） |
| `discussionQuestions` | 讨论问题 |
| `transferPrinciples` | 可迁移判断准则 |

## ACBridge

| 字段 | 说明 |
|------|------|
| `module` | AC 模块名称 |
| `url` | 外部链接（区分 readthedocs 开放内容与 SCS 证书页） |
| `whenToUse` | 本课何时调用 |
| `acCovers` | AC 负责的部分（"怎么跑起来"） |
| `weDeepen` | 本课更详细之处（判断问题） |
| `studentTask` | 学生需要完成什么 |
| `reflection` | 从 AC 转回本课的反思问题（转换卡） |
| `lastVerified` | 链接与课程结构最后核验日期 |
