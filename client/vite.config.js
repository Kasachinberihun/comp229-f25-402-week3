import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: "0.0.0.0",                       // Required by Render
    port: parseInt(process.env.PORT) || 4173, 
    allowedHosts: ["comp229-f25-402-week-2-1.onrender.com"], // Ensure PORT is a number
  }
})

