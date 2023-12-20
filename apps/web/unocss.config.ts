import { defineConfig, UserConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetWind from "@unocss/preset-wind";
const presetRaikou = require("@raikou/system/plugin.js").default;
import { generateColors } from "@raikou/colors-generator";
import { RaikouTheme, RaikouThemeOverride } from "@raikou/global-store";

export interface RaikouConfig<T> extends UserConfig {
  raikouTheme?: RaikouTheme & T;
}

export default defineConfig({
  content: {
    filesystem: ["app/**/*.tsx"],
  },
  presets: [
    presetWind(),
    presetAttributify({
      prefix: "un-",
      prefixedOnly: true,
    }),
    presetRaikou(),
  ],
  // theme: {
  //   colors: {
  //     blue: generateColors("#5474B4"),
  //   },
  // },
  raikouTheme: {
    primaryColor: "sky",
    scale: 1,
    // includeColors: ["blue"],
    // excludeColors: [],
  },
} as RaikouConfig<RaikouThemeOverride>);
