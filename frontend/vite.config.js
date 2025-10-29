import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },

    }),
  ],
  server:{
    host: true,
    port: 5174,
    strictPort: false, //be true only if on server
    cors: true,
    watch:{
      usePolling: true,
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: '/'
})
