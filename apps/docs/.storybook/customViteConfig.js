const path = require("path");
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      extensions: [".ts", ".tsx", ".js"],
      configFile: path.join(__dirname, "../tsconfig.json"),
    }),
  ],
  optimizeDeps: {
    include: [
      "@storybook/addon-styling",
      "next-themes",
      "zustand",
      "@tabler/icons-react",
      "clsx",
      "react-dom",
      "@floating-ui/react",
      "tslib",
      "react-remove-scroll",
      "react-transition-group",
      "react-number-format",
      "react-textarea-autosize",
    ],
  },
});
