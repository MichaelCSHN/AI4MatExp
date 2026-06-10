import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import { Dashboard } from './pages/Dashboard'
import { WeeksMap } from './pages/WeeksMap'
import { WeekDetail } from './pages/WeekDetail'
import { CasesIndex } from './pages/CasesIndex'
import { CaseDetail } from './pages/CaseDetail'
import { LabPage } from './pages/LabPage'
import { TemplatesPage } from './pages/TemplatesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { QuizPage } from './pages/QuizPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { TeacherPage } from './pages/TeacherPage'

// HashRouter：适配 GitHub Pages 静态托管（无服务端路由）。
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'weeks', element: <WeeksMap /> },
      { path: 'weeks/:week', element: <WeekDetail /> },
      { path: 'cases', element: <CasesIndex /> },
      { path: 'cases/:id', element: <CaseDetail /> },
      { path: 'lab', element: <LabPage /> },
      { path: 'templates', element: <TemplatesPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'quiz', element: <QuizPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'teacher', element: <TeacherPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
