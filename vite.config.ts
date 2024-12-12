import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Combine Vite and Vitest configurations
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  }
} as UserConfig);