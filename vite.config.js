import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite konfigürasyonu - React eklentisini aktif eder
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
