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
});
