import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Chris-Crib/', // Add the base path for GitHub Pages
  plugins: [react()],
  root: '.', // Ensures Vite starts from the root
  build: {
    outDir: 'dist', // Default build output folder
  },
});
