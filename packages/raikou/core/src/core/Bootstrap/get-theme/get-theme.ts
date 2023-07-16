import { DEFAULT_THEME } from "../default-theme";
import { defaultVariantColorsResolver } from "../color-functions";
import { mergeRaikouTheme } from "../merge-raikou-theme";
import { RaikouTheme } from "../theme.types";

export function getTheme() {
  // Server
  if (typeof window === "undefined") {
    const appPath = require("path").resolve("./");
    const resolveConfig = require("tailwindcss/resolveConfig");
    const tailwindConfig = require(appPath + "/tailwind.config.js");
    const fullConfig = resolveConfig(tailwindConfig);

    const theme = mergeRaikouTheme(DEFAULT_THEME, fullConfig.theme.custom);
    theme.variantColorResolver = defaultVariantColorsResolver;

    return theme;
  } else if (typeof window !== "undefined") {
    const res = localStorage.getItem("raikou-theme");

    if (res !== null) {
      const theme = JSON.parse(res!) as RaikouTheme;
      theme.variantColorResolver = defaultVariantColorsResolver;
      return theme;
    }
  }

  return DEFAULT_THEME;
}
