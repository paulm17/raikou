import { DEFAULT_THEME } from "../default-theme";
import { defaultVariantColorsResolver } from "../color-functions";
import { mergeRaikouTheme } from "../merge-raikou-theme";
import { RaikouTheme } from "../theme.types";

const loadConfig = () => {
  let config;
  const appPath = require("path").resolve("./");

  try {
    config = require(`${appPath}/raikou_theme.ts`);
  } catch (error: any) {
    if (error.code !== "MODULE_NOT_FOUND") {
      throw new Error("raikou_theme.ts file found.");
    }
  }

  return config;
};

export function useRaikouTheme() {
  if (typeof window !== "undefined") {
    // Client
    const windowTheme = (window as any)["raikou_theme"];
    const theme = mergeRaikouTheme(DEFAULT_THEME, windowTheme);

    theme.variantColorResolver = defaultVariantColorsResolver;

    return theme;
  } else {
    // Server
    const config = loadConfig() as any;
    const theme = mergeRaikouTheme(DEFAULT_THEME, config);

    theme.variantColorResolver = defaultVariantColorsResolver;

    return theme as RaikouTheme;
  }
}
