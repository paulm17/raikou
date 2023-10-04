import { DEFAULT_THEME } from "../default-theme";
import { defaultVariantColorsResolver } from "../color-functions";
import { mergeRaikouTheme } from "../merge-raikou-theme";
import { RaikouTheme } from "../theme.types";
import useStore from "@raikou/global-store";

export function useRaikouTheme() {
  if (typeof window !== "undefined") {
    // Client
    const windowTheme = (window as any)["raikou_theme"];
    const theme = mergeRaikouTheme(DEFAULT_THEME, windowTheme);
    theme.variantColorResolver = defaultVariantColorsResolver;

    return theme;
  } else {
    // Server
    const createTheme = useStore.getState() as unknown;
    const theme = mergeRaikouTheme(DEFAULT_THEME, createTheme as any);
    theme.variantColorResolver = defaultVariantColorsResolver;

    return theme as RaikouTheme;
  }
}
