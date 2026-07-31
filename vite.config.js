import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // This links Tailwind to your Vite server!

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This forces the dark theme to generate!
  ],
})
