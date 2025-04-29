import { pigment } from '@pigment-css/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      //   atomic: false,
      //   theme,
      //   rawTheme,
    }),
    TanStackRouterVite({}),
    react(),
  ],
  optimizeDeps: {
    // exclude: ['vite-plugin-node-polyfills'],
    //   include: ['prop-types', 'react-is'],
  },
  // resolve: {
  //   alias: {
  //     'prop-types': 'prop-types/prop-types.js',
  //     'react-is': 'react-is/cjs/react-is.development.js',
  //   },
  // },
});
