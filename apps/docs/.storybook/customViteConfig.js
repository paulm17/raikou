const path = require("path");
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { generateScopedName } from "../../../scripts/utils/generated-scope";

export default defineConfig({
  css: {
    modules: {
      generateScopedName,
    },
  },
  optimizeDeps: {
    exclude: ["@storybook/addon-styling", "next-themes", "@floating-ui/react"],
  },
  plugins: [
    tsconfigPaths({
      extensions: [".ts", ".tsx", ".js"],
      configFile: path.join(__dirname, "../tsconfig.json"),
    }),
  ],
});
