import { convertCssVariables } from "../convert-css-variables/convert-css-variables";
import { DEFAULT_THEME } from "../default-theme";
import { mergeRaikouTheme } from "../merge-raikou-theme";
import { getMergedVariables } from "../RaikouCssVariables/get-merged-variables";
import { removeDefaultVariables } from "../RaikouCssVariables/remove-default-variables";
import { RaikouTheme } from "../theme.types";

interface RaikouCreateCssVariablesProps {
  theme: RaikouTheme;
  cssVariablesResolver?: any;
  cssVariablesSelector?: string;
}

function getColorSchemeCssVariables(selector: string) {
  return `
  ${selector}[data-raikou-color-scheme="dark"] { --raikou-color-scheme: dark; }
  ${selector}[data-raikou-color-scheme="light"] { --raikou-color-scheme: light; }
`;
}

function createCSSVariables({
  theme,
  cssVariablesResolver: generator,
  cssVariablesSelector = ":root",
}: RaikouCreateCssVariablesProps) {
  let mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);
  const mergedVariables = getMergedVariables({ theme: mergedTheme, generator });

  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables
    ? removeDefaultVariables(mergedVariables)
    : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);

  var elem = document.querySelector('style[data-raikou-styles="system"]');
  elem?.remove();

  var newElem = document.createElement("style");
  newElem.setAttribute("data-raikou-styles", "system");
  newElem.innerHTML = `${css}${
    shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)
  }`;
  document.body.prepend(newElem);

  return null;
}

export { createCSSVariables };
