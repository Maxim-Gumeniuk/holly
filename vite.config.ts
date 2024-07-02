import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react({
    babel: {
    babelrc: true,
    configFile: true,
  }
  }), ],
    resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
      
    },
  }
})
