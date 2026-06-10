import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base 适配 GitHub Pages 项目站点（https://<user>.github.io/<repo>/）。
// 本地 dev/preview 用 '/'；CI 构建时从 GITHUB_REPOSITORY 推导仓库名，避免大小写不匹配。
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_ACTIONS && repo ? `/${repo}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
