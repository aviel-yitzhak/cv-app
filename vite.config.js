import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cv-app/", // זה השורה שמתקנת את הנתיבים עבור GitHub Pages
})