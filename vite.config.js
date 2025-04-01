import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow access from all networks
    port: process.env.PORT || 5173, // Use Render's assigned port or default to 5173
    strictPort: true, // Ensures it runs only on the assigned port
    allowedHosts: "all", // Allow all external hosts (less secure)
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size limit
  },
})
