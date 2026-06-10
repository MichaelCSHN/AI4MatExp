import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Command } from 'cmdk'
import { cases, contributionTypes, navigationItems, projectMilestones, readings, teacherNavigationItem, templates, weeks } from '../content'

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const navigate = useNavigate()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onOpenChange, open])

  function go(path: string) {
    onOpenChange(false)
    navigate(path)
  }

  return (
    <Command.Dialog open={open} onOpenChange={onOpenChange} label="命令面板" className="cmdk-dialog">
      <Command.Input placeholder="搜索页面、周次、案例、模板、文献、贡献…" className="cmdk-input" />
      <Command.List className="cmdk-list">
        <Command.Empty className="cmdk-empty">没有匹配项</Command.Empty>

        <Command.Group heading="页面" className="cmdk-group">
          {[...navigationItems, teacherNavigationItem].map((n) => (
            <Command.Item key={n.id} value={`页面 ${n.label}`} onSelect={() => go(n.path)} className="cmdk-item">
              {n.label}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="周次" className="cmdk-group">
          {weeks.map((w) => (
            <Command.Item
              key={w.week}
              value={`第${w.week}周 ${w.title} ${w.coreQuestion} ${w.judgmentTask} ${w.intro} ${w.activities.join(' ')} ${w.thinkingQuestions.join(' ')}`}
              onSelect={() => go(`/weeks/${w.week}`)}
              className="cmdk-item"
            >
              {w.week === 0 ? '预备周' : `第 ${w.week} 周`} · {w.title}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="案例" className="cmdk-group">
          {cases.map((c) => (
            <Command.Item key={c.id} value={`案例 ${c.title} ${c.summary} ${c.controversy} ${c.discussionQuestions.join(' ')}`} onSelect={() => go(`/cases/${c.id}`)} className="cmdk-item">
              {c.title}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="模板" className="cmdk-group">
          {templates.map((t) => (
            <Command.Item key={t.id} value={`模板 ${t.title} ${t.purpose} ${t.markdown}`} onSelect={() => go('/templates')} className="cmdk-item">
              {t.title}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="项目与贡献" className="cmdk-group">
          {projectMilestones.map((m) => (
            <Command.Item key={`${m.week}-${m.title}`} value={`项目 里程碑 ${m.title} ${m.deliverable} ${m.checkpoint}`} onSelect={() => go('/projects')} className="cmdk-item">
              第 {m.week} 周 · {m.title}
            </Command.Item>
          ))}
          {contributionTypes.map((c) => (
            <Command.Item key={c.id} value={`贡献 ${c.title} ${c.prompt} ${c.review}`} onSelect={() => go('/contributions')} className="cmdk-item">
              {c.title}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="文献" className="cmdk-group">
          {readings.map((r) => (
            <Command.Item key={r.id} value={`文献 ${r.citation} ${r.note ?? ''}`} onSelect={() => go('/resources')} className="cmdk-item">
              {r.citation}
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}
