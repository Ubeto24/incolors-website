// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['lucide-react'] // 🔧 Evita que rompa el bundle de producción
    }
  }
});