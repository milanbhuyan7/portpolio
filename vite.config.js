import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow external access
    port: process.env.PORT || 5173, // Use Render's assigned port or default to 5173
    strictPort: true, // Ensures it runs only on the assigned port
    allowedHosts: ["portpolio-v3z1.onrender.com"], // Allow Render host
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
    allowedHosts: ["portpolio-v3z1.onrender.com"],
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
  },
})
