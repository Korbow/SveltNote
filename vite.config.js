import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/components/main.jsx', // ton point d’entrée réel
    }
  },
  base: '/<SveltNote>/' // pour GitHub Pages
})