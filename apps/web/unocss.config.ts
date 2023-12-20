import { defineConfig, UserConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetWind from "@unocss/preset-wind";
const presetRaikou = require("@raikou/system/plugin.js").default;
import { generateColors } from "@raikou/colors-generator";
import { RaikouTheme } from "@raikou/global-store";

export interface RaikouConfig extends UserConfig {
  raikouTheme?: RaikouTheme;
}

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
  // theme: {
  //   colors: {
  //     blue: generateColors("#5474B4"),
  //   },
  // },
  raikouTheme: {
    primaryColor: "blue",
    scale: 1,
    includeColors: ["blue"],
    excludeColors: [],
  },
} as RaikouConfig);
