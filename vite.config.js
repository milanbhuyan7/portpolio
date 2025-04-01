import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Important: Bind to all network interfaces
    port: process.env.PORT || 5173, // Use Render's dynamic port or fallback to 5173 locally
  },
})
