import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment, extendTheme } from "@stylefusion/vite-plugin";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { getPigmentCSSTheme } from "@raikou/system";

const { cssTheme, rawTheme } = getPigmentCSSTheme();

const theme = extendTheme({
  cssVarPrefix: "raikou",
  getSelector: (colorScheme) =>
    colorScheme ? `[data-raikou-color-scheme='${colorScheme}']` : ":root",
  ...cssTheme,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      atomic: false,
      theme,
      rawTheme,
    }),
    TanStackRouterVite({}),
    react(),
  ],
});
