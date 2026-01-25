import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/blogs': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/_next': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 4173,
    open: true
  }
})