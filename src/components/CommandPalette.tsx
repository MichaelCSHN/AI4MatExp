import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Command } from 'cmdk'
import { cases, navigationItems, templates, weeks } from '../content'

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function go(path: string) {
    setOpen(false)
    navigate(path)
  }

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="命令面板" className="cmdk-dialog">
      <Command.Input placeholder="跳转页面 / 周次 / 案例 / 模板…" className="cmdk-input" />
      <Command.List className="cmdk-list">
        <Command.Empty className="cmdk-empty">没有匹配项</Command.Empty>

        <Command.Group heading="页面" className="cmdk-group">
          {navigationItems.map((n) => (
            <Command.Item key={n.id} value={`页面 ${n.label}`} onSelect={() => go(n.path)} className="cmdk-item">
              {n.label}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="周次" className="cmdk-group">
          {weeks.map((w) => (
            <Command.Item
              key={w.week}
              value={`第${w.week}周 ${w.title} ${w.coreQuestion}`}
              onSelect={() => go(`/weeks/${w.week}`)}
              className="cmdk-item"
            >
              {w.week === 0 ? '预备周' : `第 ${w.week} 周`} · {w.title}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="案例" className="cmdk-group">
          {cases.map((c) => (
            <Command.Item key={c.id} value={`案例 ${c.title}`} onSelect={() => go(`/cases/${c.id}`)} className="cmdk-item">
              {c.title}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="模板" className="cmdk-group">
          {templates.map((t) => (
            <Command.Item key={t.id} value={`模板 ${t.title}`} onSelect={() => go('/templates')} className="cmdk-item">
              {t.title}
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}
