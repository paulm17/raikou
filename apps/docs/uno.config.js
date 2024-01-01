import { defineConfig, presetAttributify, presetUno, presetWind } from "unocss";
import { default as presetRaikou } from "@raikou/system/plugin.js";
import fs from "fs/promises";
import { cwd } from "node:process";

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetWind(), presetRaikou()],
  preflights: [
    {
      layer: "storybook",
      getCSS: async () => {
        const component_css = await fs.readFile(
          `${cwd()}/.storybook/storybook.css`,
          "utf8",
        );
        return component_css;
      },
    },
    {
      layer: "raikou",
      getCSS: async () => {
        const component_css = await fs.readFile(
          `${cwd()}/node_modules/@raikou/system/dist/styles.css`,
          "utf8",
        );
        return component_css;
      },
    },
  ],
  layers: {
    default: 1,
    storybook: 2,
    raikou: 2,
  },
});
