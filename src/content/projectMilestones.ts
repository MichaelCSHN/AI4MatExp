import type { ProjectMilestone } from './types'

export const projectMilestones: ProjectMilestone[] = [
  {
    week: 2,
    title: '研究问题定稿',
    deliverable: '研究问题卡',
    checkpoint: '目标、已知、空白、标准四栏必须能被同伴复述。',
  },
  {
    week: 5,
    title: '过去实验审计',
    deliverable: '实验审计报告 + 数据包 README',
    checkpoint: '说清楚结论最多能证明什么，并保留失败样本的位置。',
  },
  {
    week: 8,
    title: '分组项目对齐',
    deliverable: '研究问题与轨道选择说明',
    checkpoint: '选轨道时说明为什么这条轨道最能暴露你们的真实判断。',
  },
  {
    week: 9,
    title: '未来闭环草图',
    deliverable: 'SDL 设计草图 + 性能指标表',
    checkpoint: '失败分析必须具体到触发信号和人工介入点。',
  },
  {
    week: 11,
    title: '风险与责任',
    deliverable: 'Risk Register',
    checkpoint: '每一行都有触发条件、检测信号、介入策略和责任人。',
  },
  {
    week: 12,
    title: '同行评审',
    deliverable: '书面同行评审 + 修改计划',
    checkpoint: '评审必须具体、有证据、有下一步建议。',
  },
  {
    week: 13,
    title: '公开展示',
    deliverable: '最终展示 + 社区贡献',
    checkpoint: '展示不只报告结果，还要说明边界、失败和下一步。',
  },
]
