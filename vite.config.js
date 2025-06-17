import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/leaflet')) {
            return 'leaflet';
          }
          if (id.includes('node_modules/react-dom')) {
            return 'react-dom';
          }
          if (id.includes('node_modules/react-router')) {
            return 'react-router';
          }
        }
      }
    }
  },
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      template: 'treemap',
      open: true
    })
  ],
  server: {
    port: 5050,
    host: true
  }
});
