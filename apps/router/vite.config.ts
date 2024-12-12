import { extendTheme, pigment } from '@stylefusion/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { getPigmentCSSTheme } from '@raikou/system';

const { cssTheme, rawTheme } = getPigmentCSSTheme();

const theme = extendTheme({
  cssVarPrefix: 'raikou',
  getSelector: (colorScheme) =>
    colorScheme ? `[data-raikou-color-scheme='${colorScheme}']` : ':root',
  ...cssTheme,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    // pigment({
    //   atomic: false,
    //   theme,
    //   rawTheme,
    // }),
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
