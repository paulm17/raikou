import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "dist",
  entry: ["src/index.tsx"],
  sourcemap: true,
  clean: true,
  bundle: true,
  dts: true,
  splitting: true,
  minify: false,
  format: ["esm", "cjs"],
  // external: ['react-remove-scroll'],
});
