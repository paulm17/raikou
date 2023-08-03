import { DEFAULT_THEME } from "../default-theme";
import { defaultVariantColorsResolver } from "../color-functions";
import { mergeRaikouTheme } from "../merge-raikou-theme";
import { useStore } from "../../store";
import { RaikouTheme } from "../theme.types";

const extensions = ["js", "cjs", "ts"];

const loadConfig = () => {
  const appPath = require("path").resolve("./");
  let tailwindConfig;

  const found = extensions.some((ext) => {
    try {
      tailwindConfig = require(`${appPath}/tailwind.config.${ext}`);
      return true;
    } catch (error: any) {
      if (error.code !== "MODULE_NOT_FOUND") {
        throw error;
      }
    }
    return false;
  });

  if (!found) {
    throw new Error("No valid tailwind config file found.");
  }

  return tailwindConfig;
};

export function useRaikouTheme() {
  if (typeof window !== "undefined") {
    // Client
    if (useStore.getState() === null) {
      const windowTheme = (window as any)["raikou_theme"];
      const theme = mergeRaikouTheme(DEFAULT_THEME, windowTheme);
      theme.variantColorResolver = defaultVariantColorsResolver;

      useStore.setState(theme);

      return theme;
    } else {
      const theme = useStore.getState() as RaikouTheme;
      theme.variantColorResolver = defaultVariantColorsResolver;

      return theme;
    }
  } else {
    // Server
    if (useStore.getState() === null) {
      try {
        const tailwindConfig = loadConfig();
        const resolveConfig = require("tailwindcss/resolveConfig");
        const fullConfig = resolveConfig(tailwindConfig);
        const theme = mergeRaikouTheme(DEFAULT_THEME, fullConfig.theme.custom);

        theme.variantColorResolver = defaultVariantColorsResolver;

        useStore.setState(theme);

        return theme;
      } catch (error) {
        console.error("error", error);
      }
    } else {
      const theme = useStore.getState() as RaikouTheme;
      theme.variantColorResolver = defaultVariantColorsResolver;

      return theme;
    }
  }

  console.log("warning - using default theme, should not happen");

  return DEFAULT_THEME;
}
