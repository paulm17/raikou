import { extendTheme, pigment } from '@stylefusion/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import commonjs from 'vite-plugin-commonjs';
import { getPigmentCSSTheme } from '@raikou/system';

const { cssTheme, rawTheme } = getPigmentCSSTheme();

const theme = extendTheme({
  cssVarPrefix: 'raikou',
  getSelector: (colorScheme) =>
    colorScheme ? `[data-raikou-color-scheme='${colorScheme}']` : ':root',
  ...cssTheme,
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      atomic: false,
      theme,
      rawTheme,
    }),
    react(),
    // commonjs(),
  ],
  optimizeDeps: {
    include: ['prop-types', 'react-is'],
    // exclude: [
    //   'dayjs',
    //   'embla-carousel-autoplay',
    //   'embla-carousel-react',
    //   'next-themes',
    //   '@emotion/react',
    //   '@emotion/serialize',
    //   '@emotion/utils',
    //   'html-react-parser',
    // ],
    // noDiscovery: true,
  },
  resolve: {
    alias: {
      'prop-types': 'prop-types/prop-types.js',
      'react-is': 'react-is/cjs/react-is.development.js',
    },
  },
});
