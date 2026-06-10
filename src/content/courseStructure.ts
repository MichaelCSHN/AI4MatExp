export const navigationItems = [
  { id: 'dashboard', label: '课程驾驶舱', icon: 'dashboard', badge: 'v0' },
  { id: 'map', label: '13 周地图', icon: 'map', badge: '13' },
  { id: 'studio', label: '判断工作台', icon: 'studio', badge: 'PAVE-R' },
  { id: 'cases', label: '案例现场', icon: 'cases', badge: 'Debate' },
  { id: 'projects', label: '项目轨道', icon: 'projects', badge: '4' },
  { id: 'resources', label: 'AC 外援', icon: 'resources', badge: 'MIT' },
  { id: 'teacher', label: '教师材料包', icon: 'teacher', badge: 'Kit' },
] as const

export const coursePhases = [
  { name: '清醒', weeks: '1-2', question: '你现在在哪里？' },
  { name: '诊断', weeks: '3-5', question: '你过去的实验，真的可以相信吗？' },
  { name: '扩展', weeks: '6-9', question: '机器的逻辑是什么，我如何驾驭它？' },
  { name: '整合', weeks: '10-12', question: '你在这里面，究竟做什么？' },
  { name: '开放', weeks: '13', question: '你现在在哪里？' },
] as const

export const weeklyPlan = [
  { week: '0', title: '最小可用环境', question: '你能进入闭环吗？', tags: ['GitHub', 'Notebook', 'AI 声明'] },
  { week: '1', title: '镜子', question: 'AI 时代对你意味着什么？', tags: ['信封', 'BO 演示'] },
  { week: '2', title: '提问', question: '什么是好问题？', tags: ['问题卡', '目标函数'] },
  { week: '3', title: '实验审计', question: '你的实验可靠吗？', tags: ['DOE', '审计'] },
  { week: '4', title: '重建', question: '如何设计更好的实验？', tags: ['DOE', 'AI 生成'] },
  { week: '5', title: '可信度', question: '数据什么时候值得信任？', tags: ['FAIR', 'README'] },
  { week: '6', title: 'GP 直觉', question: '不确定性在哪里？', tags: ['GP', 'PAVE-R'] },
  { week: '7', title: 'A-Lab 辩论', question: '谁对谁错，谁负责？', tags: ['证据卡', '指标'] },
  { week: '8', title: 'SDL 架构', question: '大脑是什么结构？', tags: ['数据流', '责任流'] },
  { week: '9', title: '设计工作坊', question: '你的方案哪里会失败？', tags: ['SDL 草图', '风险'] },
  { week: '10', title: '你的席位', question: '你的知识放在哪里？', tags: ['L1-L6', '人的位置'] },
  { week: '11', title: '风险与责任', question: '系统何时必须停下来？', tags: ['Risk Register', '伦理'] },
  { week: '12', title: '冲刺评审', question: '别人的工作够好吗？', tags: ['同行评审', '修改'] },
  { week: '13', title: '开放展示', question: '你现在在哪里？', tags: ['展示', '社区贡献'] },
] as const

export const projectTracks = [
  { id: 'A', title: '研究方案设计图', fit: '适合把真实材料问题转化为完整 SDL/AI4M 研究方案。' },
  { id: 'B', title: '迷你实现', fit: '适合有真实数据并想跑通一个 BO 循环的小组。' },
  { id: 'C', title: '批判性分析', fit: '适合围绕一篇 SDL/AI4M 论文做系统批判。' },
  { id: 'D', title: '课程工具 / 数据集贡献', fit: '适合把案例、模板或数据沉淀为下一届可复用资源。' },
] as const

export const artifacts = [
  '研究问题卡',
  '实验审计报告',
  '数据包 README',
  'SDL 设计草图',
  '性能指标表',
  'Risk Register',
  'PAVE-R 记录',
  '同行评审',
] as const

export const acBridgeLinks = [
  {
    title: 'AC Microcourses',
    use: '外部训练场总入口：学生需要工程化 SDL 手上功夫时，从这里进入。',
    href: 'https://ac-microcourses.readthedocs.io/en/latest/',
  },
  {
    title: 'Hello World SDL',
    use: '第 0-1 周前导：理解最小闭环、硬件、Ax、MQTT、MongoDB 的工程语境。',
    href: 'https://ac-microcourses.readthedocs.io/en/latest/courses/hello-world/index.html',
  },
  {
    title: 'AI and Materials Databases',
    use: '第 6-8 周外援：多目标、约束、多保真、批量和领域知识 BO。',
    href: 'https://ac-microcourses.readthedocs.io/en/latest/courses/data-science/overview.html',
  },
] as const
