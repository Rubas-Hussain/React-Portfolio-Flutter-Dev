import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/React-Portfolio-Flutter-Dev/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})
