import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  build: {
    sourcemap: true,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         if (id.includes('leaflet')) return 'leaflet';
    //         if (id.includes('react')) return 'react';
    //         return 'vendor';
    //       }
    //     }
    //   }
    // }
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
