import { DEFAULT_THEME } from "../default-theme";
import { defaultVariantColorsResolver } from "../color-functions";
import { mergeRaikouTheme } from "../merge-raikou-theme";
import { RaikouTheme } from "../theme.types";
import fs from "fs";

function fileExists(path: string) {
  if (fs.existsSync(path)) {
    return true;
  }

  return false;
}

function getTailwindConfig() {
  const appPath = require("path").resolve("./");
  const exts = ["js", "ts", "cjs"];
  let found: string | boolean = false;

  exts.forEach((ext) => {
    if (fileExists(`${appPath}/tailwind.config.${ext}`)) {
      found = `${appPath}/tailwind.config.${ext}`;
    }
  });

  return found;
}

export function getTheme() {
  // Server
  if (typeof window === "undefined") {
    const resolveConfig = require("tailwindcss/resolveConfig");

    const tailwindConfigFile = getTailwindConfig();

    if (!tailwindConfigFile) {
      throw new Error(
        "tailwind config not found (at root) or extension must be js, ts or cjs",
      );
    }

    const fullConfig = resolveConfig(require(`${tailwindConfigFile}`));

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
