const path = require("path");
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { generateScopedName } from "./generated-scope";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  css: {
    modules: {
      generateScopedName,
    },
  },
  optimizeDeps: {
    exclude: [
      "@floating-ui/react",
      "@storybook/addon-styling",
      "dot-path-value",
      "next-themes",
    ],
  },
  plugins: [
    svgr({ include: "**/*.svg" }),
    tsconfigPaths({
      extensions: [".ts", ".tsx", ".js"],
      configFile: path.join(__dirname, "../tsconfig.json"),
    }),
  ],
});
