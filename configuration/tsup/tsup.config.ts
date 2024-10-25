import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  loader: {
    ".css": "local-css",
  },
  dts: true,
  sourcemap: true,
  clean: true
});
