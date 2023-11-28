import { defineConfig, presetAttributify, presetUno, presetWind } from "unocss";
import { default as presetRaikou } from "@raikou/system/plugin.js";

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetWind(), presetRaikou()],
});
