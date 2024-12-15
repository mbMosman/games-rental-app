import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5001',
    }
  },
  plugins: [react()],
})
