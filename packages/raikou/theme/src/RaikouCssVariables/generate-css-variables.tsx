import { convertCssVariables } from "../convert-css-variables/convert-css-variables";
import { DEFAULT_THEME } from "../default-theme";
import { mergeRaikouTheme } from "../merge-raikou-theme/merge-raikou-theme";
import { RaikouThemeOverride } from "../theme.types";
import { RaikouClasses } from "../RaikouClasses";
import { defaultCssVariablesResolver } from "./default-css-variables-resolver";

interface RaikouCssVariablesProps {
  theme: RaikouThemeOverride;
  cssVariablesResolver?: string;
  cssVariablesSelector?: string;
}

export function GenerateRaikouCSSVariables({
  theme,
  cssVariablesResolver: generator,
  cssVariablesSelector = ":root",
}: RaikouCssVariablesProps) {
  const mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);
  let defaultVariables = defaultCssVariablesResolver(mergedTheme);

  let css = convertCssVariables(
    defaultVariables,
    generator,
    cssVariablesSelector,
    theme,
  );

  const classes = RaikouClasses({ theme: mergedTheme });

  return { cssVariables: css, classes };
}

GenerateRaikouCSSVariables.displayName = "@raikou/GenerateRaikouCSSVariables";
