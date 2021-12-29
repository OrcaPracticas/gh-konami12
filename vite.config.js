import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://orcapracticas.github.io/gh-konami12/",
  plugins: [react()]
})
