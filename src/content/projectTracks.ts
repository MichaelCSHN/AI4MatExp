import type { ProjectTrack } from './types'

export const projectTracks: ProjectTrack[] = [
  {
    id: 'A',
    title: '研究方案设计图',
    fit: '研究问题清晰、想深度思考 SDL 如何融入自己研究的小组。',
    requirements: [
      '为一个真实材料体系设计完整的 SDL/AI4M 研究方案',
      '有文献支撑的目标函数设计',
      '有"我们不做什么，为什么"的明确声明',
      '有硬件现实约束的诚实评估（TRL 是多少）',
    ],
    rubric: [
      { dimension: '科学问题的清晰度', points: 20 },
      { dimension: '方案的内在一致性', points: 20 },
      { dimension: '局限性和边界的诚实性', points: 30 },
      { dimension: '"不做什么"的论证质量', points: 20 },
      { dimension: '展示的清晰度和可问性', points: 10 },
    ],
  },
  {
    id: 'B',
    title: '迷你实现',
    fit: '有真实数据、想亲手跑通一个 BO 循环的小组。',
    requirements: [
      '实际跑一个 BO 循环，使用真实数据（文献/课程/自己的实验数据）',
      '不要求机器人，要求算法真实运行、结果可解释',
      '必须报告：什么跑通了，什么没跑通，GP 预测在哪里错了',
      '代码可全部 vibe coding 生成，但展示时每一行都要能解释',
    ],
    rubric: [
      { dimension: '数据和问题的匹配性', points: 20 },
      { dimension: 'BO 设置的技术合理性（核/采集函数选择）', points: 25 },
      { dimension: 'GP 失败/局限性的分析深度', points: 30 },
      { dimension: '从结果中提取的真实洞见', points: 15 },
      { dimension: '展示的清晰度和可问性', points: 10 },
    ],
  },
  {
    id: 'C',
    title: '批判性分析',
    fit: '有较强文献阅读能力、想深度批判一篇 SDL/AI4M 论文的小组。',
    requirements: [
      '选一篇顶刊 SDL 或 AI4M 论文',
      '写一份可投期刊 Discussion 版面的评述（格式按目标期刊）',
      '必须有对实验设计的系统批评、对成功定义的分析、对可推广性的评估',
    ],
    rubric: [
      { dimension: '批评的具体性和证据支撑', points: 30 },
      { dimension: '对原文优点的公正认可', points: 15 },
      { dimension: '对可推广性边界的分析', points: 25 },
      { dimension: '下一步研究建议的可行性', points: 20 },
      { dimension: '学术写作规范', points: 10 },
    ],
  },
  {
    id: 'D',
    title: '课程工具 / 数据集贡献',
    fit: '希望把课程成果沉淀为下一届可复用资源的小组。',
    requirements: [
      '贡献一个可运行的 GP/BO 可视化案例、材料数据集 benchmark、失败案例库，或 PAVE-R 模板工具',
      '必须有清晰 README、示例输入输出、使用边界和失败说明',
      '必须说明它服务于课程的哪个判断训练目标',
      '必须经另一组试用，并根据反馈修改',
    ],
    rubric: [
      { dimension: '资源的可复用性', points: 25 },
      { dimension: 'README 和示例的清晰度', points: 20 },
      { dimension: '与课程判断目标的关联', points: 20 },
      { dimension: '失败边界和适用范围说明', points: 20 },
      { dimension: '根据试用反馈迭代的质量', points: 15 },
    ],
    topics: [
      '起草 SDL 论文最低报告信息清单（领域公认缺口，有真实社区贡献潜力）',
      '用 AF/EF 框架审计一篇明星 SDL 论文的加速宣称，写成可投 Discussion 的短文',
      '把课程 A-Lab/GNoME 案例做成可复用的辩论教学包',
    ],
  },
]

export const gradeBreakdown = [
  { item: '个人项目一：实验审计报告 + 数据包 README', weight: 20, when: '第 5 周末' },
  { item: '个人项目二：SDL 设计草图 + 性能指标表', weight: 20, when: '第 9 周末' },
  { item: '分组项目过程（里程碑）', weight: 15, when: '第 8、11、12 周' },
  { item: '分组项目最终成果（展示 + 报告）', weight: 25, when: '第 13 周' },
  { item: '书面同行评审', weight: 10, when: '第 12 周末' },
  { item: '课堂参与质量', weight: 10, when: '持续评估' },
  { item: '期末考试', weight: 0, when: '不考' },
]
