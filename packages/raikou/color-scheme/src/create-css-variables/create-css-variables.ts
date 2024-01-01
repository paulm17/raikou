import { convertCssNestedVariables } from "../convert-css-variables/convert-css-variables";

interface RaikouCreateCssVariablesProps {
  theme: any;
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
  const shouldCleanVariables = cssVariablesSelector === ":root";

  // cssVariablesResolver
  let css2 = "";

  if (generator) {
    const providerGeneratorFunc = new Function("theme", generator);
    const providerGenerator = providerGeneratorFunc?.(theme);
    css2 = convertCssNestedVariables(providerGenerator, cssVariablesSelector);
  }

  var elem = document.querySelector('style[data-raikou-styles="system"]');
  elem?.remove();

  var newElem = document.createElement("style");
  newElem.setAttribute("data-raikou-styles", "system");
  newElem.innerHTML = `${css2}${
    shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)
  }`;
  document.body.prepend(newElem);

  return null;
}

export { createCSSVariables };
