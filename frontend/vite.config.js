import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import 'path' module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'), // Alias for components folder
      '@': path.resolve(__dirname, './src'), // Alias for the entire src folder if needed
    },
  },
});
