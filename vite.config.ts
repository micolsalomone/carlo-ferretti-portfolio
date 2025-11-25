import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/carlo-ferretti-portfolio/', // <-- add this line
  build: {
    outDir: 'docs'
  }
})
