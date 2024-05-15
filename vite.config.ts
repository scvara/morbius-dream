import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export const baseName = "morbius-dream";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${baseName}/`,
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './src/app'),
      '@shared': resolve(__dirname, './src/shared'),
      '@pages': resolve(__dirname, './src/pages'),
    },
  },
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
