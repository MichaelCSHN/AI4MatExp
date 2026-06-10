import type { ACLink } from './types'

/**
 * AC Microcourses 前导与外援（docs/05_AC_Bridge_Plan.md）。
 * AC 负责"怎么跑起来"；本课负责"为什么这样设计、何时相信、哪里会失败、人的判断放在哪里"。
 */
export const acLinks: ACLink[] = [
  {
    id: 'ac-hello-world',
    module: '1. Intro to AI for Discovery using SDLs（Hello World）',
    url: 'https://ac-microcourses.readthedocs.io/en/latest/courses/hello-world/index.html',
    whenToUse: '第 0-1 周',
    acCovers: '颜色匹配最小 SDL 跑起来：Pico W、Ax 贝叶斯优化、MQTT、MongoDB。',
    weDeepen: '闭环每一步的认识论追问：数据从哪来、推荐依据什么、人在哪一步有否决权、失败如何被记录。',
    studentTask: '通读 Hello World 章节（不要求购买硬件）；用本站 GP/BO 实验台复现同构闭环；填一张转换卡。',
    lastVerified: '2026-06-10',
  },
  {
    id: 'ac-data-science',
    module: '2. AI and Materials Databases for SDLs',
    url: 'https://ac-microcourses.readthedocs.io/en/latest/courses/data-science/overview.html',
    whenToUse: '第 5-8 周',
    acCovers: '多目标、约束、多保真、批量、异步和领域知识 BO 的实操。',
    weDeepen: 'BO 类型选择表的判断列：每种 BO 形式对应的科学判断问题；数据可信度与 FAIR 诊断。',
    studentTask: '选与自己研究问题最相关的一种 BO 形式，完成 AC 对应模块，回来回答选择表里那一行的判断问题。',
    lastVerified: '2026-06-10',
  },
  {
    id: 'ac-robotics',
    module: '3. Autonomous Systems for SDLs',
    url: 'https://ac-microcourses.readthedocs.io/en/latest/courses/robotics/overview.html',
    whenToUse: '第 8-9 周',
    acCovers: '机器人控制、工作流编排、设备通信。',
    weDeepen: '数据流 / 控制流 / 责任流三张图；L1-L6 人类知识接入口；性能指标与自治等级。',
    studentTask: '理解自动系统的控制边界；在 SDL 设计草图里诚实标注哪些环节你假设了"机器人能做到"。',
    lastVerified: '2026-06-10',
  },
  {
    id: 'ac-software',
    module: '4. Software Development for SDLs',
    url: 'https://ac-microcourses.readthedocs.io/en/latest/courses/software-dev/overview.html',
    whenToUse: '分组 B/D 轨道',
    acCovers: '版本控制、测试、打包、协作的软件工程实践。',
    weDeepen: 'PAVE-R 协议下的可辩护性：AI 生成代码的验证、声明与责任。',
    studentTask: 'B/D 轨道小组按需学习；项目仓库必须有 README、测试与 AI 使用声明。',
    lastVerified: '2026-06-10',
  },
  {
    id: 'nist-handbook',
    module: 'NIST/SEMATECH e-Handbook of Statistical Methods（DOE 主外援）',
    url: 'https://www.itl.nist.gov/div898/handbook/index.htm',
    whenToUse: '第 3-5 周（DOE 与数据可信度），第 9 周回查',
    acCovers: '权威、免费、工程导向的统计方法手册：实验设计（第 5 章 Process Improvement）、测量系统、过程表征、不确定度分析,附完整案例。',
    weDeepen: '手册告诉你"怎么设计才正确"；本课追问"你过去的实验为什么没这样做、代价是什么"——审计清单的每一项都能在手册里找到方法学依据。',
    studentTask: '第 3 周审计时,每发现一个问题,到手册里找到对应章节并在审计报告中引用；第 4 周用手册第 5.3 节（choosing an experimental design）核对 AI 生成的设计表。',
    lastVerified: '2026-06-10',
  },
  {
    id: 'ac-certificate',
    module: 'AC 证书：Autonomous Systems for Discovery（U of T SCS）',
    url: 'https://learn.utoronto.ca/programs-courses/certificates/autonomous-systems-discovery',
    whenToUse: '课后延伸',
    acCovers: '4 门异步微课 + 1 门多伦多线下 capstone 的正式认证路径（约 $150/门）。',
    weDeepen: '本课不提供认证；需要认证与真实硬件训练的学生，从这里继续。',
    studentTask: '可选。若计划申请，先完成本课再去——你会带着判断框架使用它。',
    lastVerified: '2026-06-10',
  },
  {
    id: 'sdl-demo',
    module: 'self-driving-lab-demo（<$100 物理闭环）',
    url: 'https://github.com/sparks-baird/self-driving-lab-demo',
    whenToUse: '想动手的学生',
    acCovers: 'LED + 光谱传感器的颜色匹配 SDL，一平方英尺、约一小时搭建。',
    weDeepen: 'frugal twin 教学路线（Digital Discovery 2024 综述）；本课用它演示"最小闭环不等于玩具"。',
    studentTask: '可选硬件路线；B 轨道小组可将其作为真实数据来源。',
    lastVerified: '2026-06-10',
  },
  {
    id: 'awesome-sdl',
    module: 'awesome-self-driving-labs（社区资源目录）',
    url: 'https://github.com/AccelerationConsortium/awesome-self-driving-labs',
    whenToUse: 'D 轨道 / 第 13 周',
    acCovers: 'SDL 社区的论文、软件、硬件、数据集总目录。',
    weDeepen: '第 13 周社区贡献与 D 轨道成果的对外出口。',
    studentTask: '把课程里沉淀的工具、案例或判断准则按其贡献规范提交 PR（可选，计入社区贡献）。',
    lastVerified: '2026-06-10',
  },
]

/** AC 到本课程转换卡（每次外援学习后填写） */
export const conversionCard = `## AC 转换卡

## AC 模块
（你学习的模块名称与链接）

## 我阅读或复现了什么
（具体到章节 / Notebook / 代码）

## 它解决了什么工程问题
（"怎么跑起来"层面）

## 它没有解决什么科研判断问题
（本课关心的层面）

## 如果迁移到我的材料体系，哪些假设会失效
（至少两条，具体）

## 人的 veto 点应放在哪里
（在闭环的哪一步，由谁，依据什么信号）
`
