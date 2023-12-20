import { convertCssVariables } from "../convert-css-variables/convert-css-variables";
import { defaultCssVariablesResolver } from "./default-css-variables-resolver";
import { DEFAULT_THEME } from "../default-theme";
import { mergeRaikouTheme } from "../merge-raikou-theme/merge-raikou-theme";
import { RaikouThemeOverride } from "../theme.types";
import { RaikouClasses } from "../RaikouClasses";

interface RaikouCssVariablesProps {
  theme: RaikouThemeOverride;
  cssVariablesSelector?: string;
}

export function GenerateRaikouCSSVariables({
  theme,
  cssVariablesSelector = ":root",
}: RaikouCssVariablesProps) {
  const mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);
  const variables = defaultCssVariablesResolver(mergedTheme);

  const cssVariables = convertCssVariables(variables, cssVariablesSelector);
  const classes = RaikouClasses({ theme: mergedTheme });

  return { cssVariables, classes };
}

GenerateRaikouCSSVariables.displayName = "@raikou/GenerateRaikouCSSVariables";
