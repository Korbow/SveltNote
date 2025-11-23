import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SveltNote/',
  root: '.'   // facultatif, mais s’assure que la racine est correcte
})