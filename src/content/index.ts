export * from './types'
export { weeks, getWeek } from './weeks'
export { cases, getCase } from './cases'
export { templates, getTemplate } from './templates'
export { quiz, getQuizByWeek } from './quiz'
export { readings, getReading, lastVerified } from './readings'
export { epistemicTools } from './epistemicTools'
export { acLinks, conversionCard } from './acBridge'
export { projectTracks, gradeBreakdown } from './projectTracks'
export { teacherKits, getTeacherKit } from './teacherKit'
export { projectMilestones } from './projectMilestones'
export { contributionTypes } from './contributions'

export const coursePhases = [
  { name: '清醒', weeks: '1-2', question: '你现在在哪里？' },
  { name: '诊断', weeks: '3-5', question: '你过去的实验，真的可以相信吗？' },
  { name: '扩展', weeks: '6-9', question: '机器的逻辑是什么，我如何驾驭它？' },
  { name: '整合', weeks: '10-12', question: '你在这里面，究竟做什么？' },
  { name: '开放', weeks: '13', question: '你现在在哪里？（回到第 1 周）' },
] as const

export const coursePrinciples = [
  { n: 1, title: '问题先行，知识随后', note: '每节课从真实问题出发，不从知识点出发。' },
  { n: 2, title: '体验先行，概念随后', note: '先接触真实情境，再引入概念框架。' },
  { n: 3, title: '判断力优先于执行力', note: '核心竞争力不是会用工具，而是能判断工具输出是否可信。' },
  { n: 4, title: 'AI 是放大器，不是替代品', note: '每个 AI 生成的判断，都必须是你能被追问和辩护的判断。' },
  { n: 5, title: '诚实地面对不确定性', note: '"我不知道"是合法起点，"我认为…因为…"是目标。' },
] as const

export const navigationItems = [
  { id: 'dashboard', label: '课程驾驶舱', path: '/', icon: 'dashboard', badge: 'v0.3' },
  { id: 'map', label: '13 周地图', path: '/weeks', icon: 'map', badge: '14' },
  { id: 'cases', label: '案例现场', path: '/cases', icon: 'cases', badge: '5' },
  { id: 'lab', label: 'GP/BO 实验台', path: '/lab', icon: 'lab', badge: 'Live' },
  { id: 'workspace', label: '学生工作台', path: '/workspace', icon: 'workspace', badge: '填表' },
  { id: 'templates', label: '模板库', path: '/templates', icon: 'templates', badge: '11' },
  { id: 'projects', label: '项目轨道', path: '/projects', icon: 'projects', badge: '4' },
  { id: 'contributions', label: '贡献归档', path: '/contributions', icon: 'contributions', badge: '3' },
  { id: 'quiz', label: '思考与试题', path: '/quiz', icon: 'quiz', badge: '判断' },
  { id: 'resources', label: 'AC 外援', path: '/resources', icon: 'resources', badge: 'MIT' },
] as const

export const teacherNavigationItem = { id: 'teacher', label: '教师材料包', path: '/teacher', icon: 'teacher', badge: 'Kit' } as const

export const heroMetrics = [
  { value: '13', label: '正式教学周' },
  { value: '4', label: '项目轨道' },
  { value: '0', label: '期末闭卷考试' },
] as const
