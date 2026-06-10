import { useMemo, useState } from 'react'
import { Check, Copy, RotateCcw } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

type Field = { key: string; label: string; help?: string; rows?: number }
type FormSpec = {
  id: string
  title: string
  lead: string
  fields: Field[]
  toMarkdown: (values: Record<string, string>) => string
}

const forms: FormSpec[] = [
  {
    id: 'question',
    title: '研究问题卡',
    lead: '把研究方向压成一个可判断的问题。',
    fields: [
      { key: 'goal', label: '目标', help: '一句话：你真正想知道什么？' },
      { key: 'known', label: '已知', help: '哪些来自文献，哪些你自己验证过？', rows: 4 },
      { key: 'gap', label: '空白', help: '不知道的具体部分是什么？', rows: 4 },
      { key: 'standard', label: '标准', help: '测到什么，你就承认问题被回答了？', rows: 4 },
    ],
    toMarkdown: (v) => `# 研究问题卡

## 目标
${v.goal || ''}

## 已知
${v.known || ''}

## 空白
${v.gap || ''}

## 标准
${v.standard || ''}
`,
  },
  {
    id: 'sdl',
    title: 'SDL 设计草图',
    lead: '把未来闭环说清楚，尤其是它会在哪里失败。',
    fields: [
      { key: 'objective', label: '目标函数', help: '包括你放弃了什么。', rows: 4 },
      { key: 'space', label: '参数空间', help: '范围、不可行区、约束来源。', rows: 4 },
      { key: 'model', label: '代理模型与采集策略', help: '为什么选它，不只是因为熟悉。', rows: 4 },
      { key: 'success', label: '成功判定', help: '性能指标之外，机制约束是什么？', rows: 4 },
      { key: 'human', label: '人的位置', help: 'L1-L6 哪一层，做什么，何时否决。', rows: 4 },
      { key: 'failure', label: '最可能失败处', help: '第一个信号是什么？系统如何停下来？', rows: 5 },
    ],
    toMarkdown: (v) => `# SDL 设计草图

## 目标函数
${v.objective || ''}

## 参数空间
${v.space || ''}

## 代理模型与采集策略
${v.model || ''}

## 成功判定
${v.success || ''}

## 人的位置
${v.human || ''}

## 最可能失败处
${v.failure || ''}
`,
  },
  {
    id: 'risk',
    title: 'Risk Register',
    lead: '把风险写成可触发的停机按钮。',
    fields: [
      { key: 'hazard', label: '危险实验推荐', rows: 3 },
      { key: 'falseSuccess', label: '错误成功判定', rows: 3 },
      { key: 'drift', label: '数据漂移', rows: 3 },
      { key: 'extrapolation', label: '模型外推', rows: 3 },
      { key: 'aiCode', label: 'AI 代码错误', rows: 3 },
      { key: 'agent', label: '智能体幻觉的物理后果', rows: 3 },
      { key: 'responsibility', label: '署名与责任', rows: 3 },
    ],
    toMarkdown: (v) => `# SDL Risk Register

| 风险 | 触发条件 / 检测信号 / 人工介入策略 / 责任人 |
|------|------|
| 危险实验推荐 | ${v.hazard || ''} |
| 错误成功判定 | ${v.falseSuccess || ''} |
| 数据漂移 | ${v.drift || ''} |
| 模型外推 | ${v.extrapolation || ''} |
| AI 代码错误 | ${v.aiCode || ''} |
| 智能体幻觉的物理后果 | ${v.agent || ''} |
| 署名与责任 | ${v.responsibility || ''} |
`,
  },
]

function readForm(id: string, fields: Field[]): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    const stored = window.localStorage.getItem(`ai4matexp-workspace-${id}`)
    if (stored) return JSON.parse(stored)
  } catch {
    // Ignore malformed local drafts.
  }
  return Object.fromEntries(fields.map((f) => [f.key, '']))
}

export function WorkspacePage() {
  const [active, setActive] = useState(forms[0].id)
  const spec = forms.find((f) => f.id === active)!
  const [drafts, setDrafts] = useState<Record<string, Record<string, string>>>(() =>
    Object.fromEntries(forms.map((f) => [f.id, readForm(f.id, f.fields)])),
  )
  const [copied, setCopied] = useState(false)
  const values = useMemo(() => drafts[spec.id] ?? {}, [drafts, spec.id])
  const markdown = useMemo(() => spec.toMarkdown(values), [spec, values])

  function update(key: string, value: string) {
    setDrafts((all) => {
      const next = { ...all, [spec.id]: { ...(all[spec.id] ?? {}), [key]: value } }
      window.localStorage.setItem(`ai4matexp-workspace-${spec.id}`, JSON.stringify(next[spec.id]))
      return next
    })
  }

  function reset() {
    const blank = Object.fromEntries(spec.fields.map((f) => [f.key, '']))
    setDrafts((all) => ({ ...all, [spec.id]: blank }))
    window.localStorage.removeItem(`ai4matexp-workspace-${spec.id}`)
  }

  function copy() {
    navigator.clipboard?.writeText(markdown).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    })
  }

  return (
    <>
      <PageHeader
        kicker="Student workspace"
        title="学生工作台"
        lead="在这里填写三份会反复修改的交付物。内容只保存在你的浏览器里，课堂提交前请复制 Markdown。"
      />

      <div className="workspace-tabs">
        {forms.map((f) => (
          <button key={f.id} className={`workspace-tab ${active === f.id ? 'on' : ''}`} onClick={() => setActive(f.id)}>
            {f.title}
          </button>
        ))}
      </div>

      <section className="workspace-grid">
        <div className="content-section workspace-form">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Draft</p>
              <h2>{spec.title}</h2>
              <p>{spec.lead}</p>
            </div>
            <button className="icon-btn" type="button" onClick={reset} aria-label="清空当前草稿">
              <RotateCcw size={16} />
            </button>
          </div>

          {spec.fields.map((field) => (
            <label key={field.key} className="form-field">
              <span>{field.label}</span>
              {field.help && <em>{field.help}</em>}
              <textarea rows={field.rows ?? 2} value={values[field.key] ?? ''} onChange={(e) => update(field.key, e.target.value)} />
            </label>
          ))}
        </div>

        <aside className="content-section workspace-preview">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Markdown</p>
              <h2>可提交文本</h2>
            </div>
            <button className="copy-btn" type="button" onClick={copy}>
              {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? '已复制' : '复制'}
            </button>
          </div>
          <pre>{markdown}</pre>
        </aside>
      </section>
    </>
  )
}
