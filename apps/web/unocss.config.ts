import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetWind from "@unocss/preset-wind";
const presetRaikou = require("@raikou/system/plugin.js").default;
import { MantineColors } from "@raikou/system";

export default defineConfig({
  content: {
    filesystem: ["app/**/*.tsx"],
  },
  presets: [
    presetWind(),
    presetAttributify({
      prefix: "un-",
    }),
    presetRaikou(),
  ],
  theme: {
    colors: MantineColors,
  },
}) as any;
