import type { EpistemicTool } from './types'

/**
 * 科学哲学最小工具箱（设计方案 3.3）。
 * 硬规则：找不到触发案例和使用任务的概念，不进课程。
 */
export const epistemicTools: EpistemicTool[] = [
  {
    id: 'operationalization',
    name: '操作化定义',
    weeks: [2],
    trigger: '研究问题卡的"标准"字段写不出来——"性能更好"到底什么算"测到了"？',
    use: '把模糊问题改写为可操作问题；这同时就是目标函数设计的认识论形态。',
  },
  {
    id: 'fisher-epistemology',
    name: '实验推断的认识论基础',
    weeks: [3],
    trigger: '自我审计的不舒服：随机化、重复、区组化在自己的实验里大多缺席。',
    use: '说出自己结论的可靠性上限——它最多能证明什么，而不是它有多好。',
  },
  {
    id: 'history-of-experiment',
    name: '实验的历史脉络',
    weeks: [3, 8],
    trigger: '"试错法落后吗？"的争论。',
    use: '把 SDL 放进约四百年方法演化（受控观察 → Fisher 随机化 → 自动化/高通量 → SDL），而不是技术断裂。',
  },
  {
    id: 'uncertainty',
    name: '不确定性的认识论',
    weeks: [6],
    trigger: 'GP 的 σ 在数据点之间隆起——模型"知道自己不知道"。',
    use: '区分"模型不确定"与"世界不确定"，据此判断推荐是否可信。',
  },
  {
    id: 'duhem-quine',
    name: '杜恒-奎因论题',
    weeks: [7],
    trigger: 'A-Lab 辩论：同一组 XRD 数据，两个团队两种解读。',
    use: '解释为什么"数据不会自己说话"——实验检验的是假设束；定位争议的真正分歧点。',
  },
  {
    id: 'goodhart',
    name: 'Goodhart 定律',
    weeks: [7, 9],
    trigger: '71% 成功率的"成功"是怎么定义的？自己草图里的目标函数是不是也这样？',
    use: '检查代理指标是否替代了科学问题——指标一旦成为目标，就不再是好指标。',
  },
  {
    id: 'tacit-knowledge',
    name: '默会知识',
    weeks: [10],
    trigger: 'L1-L6 编码练习中"写不出来"的直觉——你知道这个温度不行，但说不清为什么。',
    use: '发现哪些知识可编码、哪些暂时不可——不可编码处正是人的席位。',
  },
  {
    id: 'social-epistemology',
    name: '科学的社会运行',
    weeks: [7, 11, 12],
    trigger: 'Nature 对 A-Lab 的真实更正裁决；自己的作业被同行评审。',
    use: '形成对发表、引用、更正、责任的个人立场，并在追问下为之辩护。',
  },
  {
    id: 'human-ai-ethics',
    name: '人与 AI 的关系伦理',
    weeks: [10, 11, 13],
    trigger: '自己的知识被编码进闭环；"智能体写的方案，谁签字"的讨论。',
    use: '回答"我在这里面究竟做什么"——课程的终极问题。',
  },
]
