import { DEFAULT_THEME } from "../default-theme";
import { defaultVariantColorsResolver } from "../color-functions";
import { mergeRaikouTheme } from "../merge-raikou-theme";
import { RaikouTheme } from "../theme.types";

const extensions = ["js", "cjs", "ts"];
let tailwindConfig: any;

const loadConfig = async () => {
  const appPath = require("path").resolve("./");

  for (let ext of extensions) {
    try {
      tailwindConfig = require(`${appPath}/tailwind.config.${ext}`);
      break;
    } catch (error: any) {
      // If the file doesn't exist, move on to the next one
      if (error.code !== "MODULE_NOT_FOUND") {
        // If the error is something else, rethrow it
        throw error;
      }
    }
  }

  if (!tailwindConfig) {
    throw new Error("No valid tailwind config file found.");
  }

  return tailwindConfig;
};

export function useRaikouTheme() {
  // Server
  if (typeof window === "undefined") {
    loadConfig()
      .then((tailwindConfig) => {
        const resolveConfig = require("tailwindcss/resolveConfig");
        const fullConfig = resolveConfig(tailwindConfig);

        const theme = mergeRaikouTheme(DEFAULT_THEME, fullConfig.theme.custom);
        theme.variantColorResolver = defaultVariantColorsResolver;

        return theme;
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (typeof window !== "undefined") {
    const res = localStorage.getItem("raikou-theme");

    if (res !== null) {
      const lsTheme = JSON.parse(res!) as RaikouTheme;
      const theme = mergeRaikouTheme(DEFAULT_THEME, lsTheme);
      theme.variantColorResolver = defaultVariantColorsResolver;
      return theme;
    }
  }

  return DEFAULT_THEME;
}
