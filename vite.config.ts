import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all available network interfaces
    port: 3000, // Default port
    proxy: {
      '/api': {
        target: 'https://ca8a8b71.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    allowedHosts: ['ca8a8b71.onrender.com']
  },
  base: '/',
  preview: {
    port: 3000, // Default port
    host: true
  }
})
