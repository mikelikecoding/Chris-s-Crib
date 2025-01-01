import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures Vite starts from the root
  build: {
    outDir: 'dist', // Default build output folder
  },
});
