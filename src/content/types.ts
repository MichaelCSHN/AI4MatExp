export type Phase = '预备' | '清醒' | '诊断' | '扩展' | '整合' | '开放'

export type ReadingStatus = 'active' | 'corrected' | 'contested'

export interface Reading {
  id: string
  citation: string
  status: ReadingStatus
  note?: string
  url?: string
}

export interface EpistemicTool {
  id: string
  name: string
  weeks: number[]
  trigger: string
  use: string
}

export interface ACLink {
  id: string
  module: string
  url: string
  whenToUse: string
  acCovers: string
  weDeepen: string
  studentTask: string
  lastVerified: string
}

export interface Template {
  id: string
  title: string
  purpose: string
  /** AIAS 1-5：本交付物允许的 AI 使用级别 */
  aiasLevel: number
  aiasNote?: string
  markdown: string
}

export interface QuizOption {
  label: string
  text: string
}

export interface QuizItem {
  id: string
  week: number
  type: 'scenario' | 'open'
  prompt: string
  options?: QuizOption[]
  /** 选择题的最佳判断（不是唯一正确答案，是最可辩护的判断） */
  answer?: string
  explanation: string
}

export interface Week {
  week: number
  phase: Phase
  title: string
  coreQuestion: string
  /** 本周训练的判断任务（一句话） */
  judgmentTask: string
  intro: string
  activities: string[]
  tools: string[]
  epistemicToolIds: string[]
  acLinkIds: string[]
  readingIds: string[]
  templateIds: string[]
  deliverable?: string
  misconceptions: string[]
  teacherPrompts: string[]
  thinkingQuestions: string[]
}

export type CaseKind = 'controversy' | 'positive' | 'exercise'

export interface TimelineEvent {
  date: string
  event: string
}

export interface RoleCard {
  id: string
  name: string
  task: string
}

export interface EvidenceCard {
  id: string
  /** debate：辩论阶段发放；reveal：裁决揭晓阶段发放 */
  stage: 'debate' | 'reveal'
  title: string
  content: string
  source: string
}

export interface VoteQuestion {
  id: string
  question: string
  options: string[]
}

export interface Verdict {
  status: 'corrected' | 'contested' | 'none'
  text: string
  source: string
  /** 揭晓后的对照问题 */
  compareQuestions: string[]
}

export interface CaseStudy {
  id: string
  title: string
  kind: CaseKind
  week: number
  summary: string
  controversy: string
  timeline: TimelineEvent[]
  roles: RoleCard[]
  evidence: EvidenceCard[]
  votes: VoteQuestion[]
  verdict?: Verdict
  discussionQuestions: string[]
  transferPrinciples: string[]
  lastVerified: string
}

export interface TeacherWeekKit {
  week: number
  prep: string[]
  triggerScript: string
  flow: string[]
  misconceptions: string[]
  probes: string[]
  gradingNotes?: string
  risks: string[]
}

export interface ProjectTrack {
  id: string
  title: string
  fit: string
  requirements: string[]
  rubric: { dimension: string; points: number; note?: string }[]
  topics?: string[]
}
