import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [legacy({
    targets: ['defaults', 'not IE 11']
  }), react()],
  build: {
    outDir: "build"
  }
})
