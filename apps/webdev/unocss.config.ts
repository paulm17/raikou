import { defineConfig, UserConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetWind from "@unocss/preset-wind";
const presetRaikou = require("@raikou/system/plugin.js").default;
import { generateColors } from "@raikou/colors-generator";
import { rem, UnoCSSRaikouTheme } from "@raikou/theme";

export interface RaikouConfig extends UserConfig {
  raikouTheme?: UnoCSSRaikouTheme;
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
    includeColors: ["blue", "yellow"],
    excludeColors: [],
    // other: {
    //   deepOrangeLight: "#E17900",
    //   deepOrangeDark: "#FC8C0C",
    // },
    // cssVariablesResolver: JSON.stringify({
    //   variables: {
    //     "--raikou-hero-height": rem(20),
    //     "--raikou-hero-width": rem(20),
    //   },
    //   light: {
    //     "--raikou-color-deep-orange": "theme.other.deepOrangeLight",
    //     ".button-root": {
    //       "--raikou-button-disabled-bg": "#E17900",
    //     },
    //   },
    //   dark: {
    //     "--raikou-color-deep-orange": "theme.other.deepOrangeDark",
    //     ".button-root": {
    //       "--raikou-button-disabled-bg": "#FC8C0C",
    //     },
    //   },
    // }),
    // components: {
    //   Button: {
    //     vars: `
    //       if (props.size === "xxd") {
    //          return {
    //             root: {
    //             "--button-height": rem(70),
    //             "--button-padding-x": rem(50),
    //             "--button-fz": rem(30),
    //             },
    //          };
    //       }

    //       return { root: {} };
    //       `,
    //   },
    // },
  },
} as RaikouConfig);
