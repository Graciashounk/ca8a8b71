import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all available network interfaces
    port: parseInt(process.env.PORT || '3000'), // Use PORT from environment or default to 3000
    proxy: {
      '/api': {
        target: 'https://ca8a8b71.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  base: '/',
  preview: {
    port: parseInt(process.env.PORT || '3000'), // Also set for preview mode
    host: true
  }
})
