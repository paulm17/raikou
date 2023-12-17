import fs from "fs/promises";
import { cwd } from "node:process";
import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetWind from "@unocss/preset-wind";
const presetRaikou = require("@raikou/system/plugin.js").default;

export default defineConfig({
  content: {
    filesystem: ["app/**/*.tsx"],
  },
  presets: [
    presetWind(),
    presetAttributify({
      // prefix: "un-",
      // prefixedOnly: false,
    }),
    presetRaikou(),
  ],
}) as any;
