import { DEFAULT_THEME } from "../default-theme";
import { defaultVariantColorsResolver } from "../color-functions";
import { mergeRaikouTheme } from "../merge-raikou-theme";
import { useStore } from "../../store";
import { RaikouTheme } from "../theme.types";

export function useRaikouTheme() {
  if (typeof window !== "undefined") {
    // Client
    if (useStore.getState() === null) {
      const windowTheme = (window as any)["raikou_theme"];

      useStore.setState(windowTheme);

      const theme = mergeRaikouTheme(DEFAULT_THEME, windowTheme);
      theme.variantColorResolver = defaultVariantColorsResolver;

      return theme;
    } else {
      const stateTheme = useStore.getState() as RaikouTheme;
      const theme = mergeRaikouTheme(DEFAULT_THEME, stateTheme);
      theme.variantColorResolver = defaultVariantColorsResolver;

      return theme;
    }
  }

  console.log("warning - using default theme, should not happen");

  return DEFAULT_THEME;
}
