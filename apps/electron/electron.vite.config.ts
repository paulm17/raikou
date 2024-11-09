import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { pigment, extendTheme } from "@stylefusion/vite-plugin";
import { getPigmentCSSTheme } from "@raikou/system";

const { cssTheme, rawTheme } = getPigmentCSSTheme();

const theme = extendTheme({
  cssVarPrefix: "raikou",
  getSelector: (colorScheme) =>
    colorScheme ? `[data-raikou-color-scheme='${colorScheme}']` : ":root",
  ...cssTheme,
});

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    optimizeDeps: {
      include: ['prop-types', 'react-is'],
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        'prop-types': 'prop-types/prop-types.js',
        'react-is': 'react-is/cjs/react-is.development.js',
      }
    },
    plugins: [
      pigment({
        atomic: false,
        theme,
        rawTheme,
      }),
      TanStackRouterVite({}),
      react()
    ]
  }
});
