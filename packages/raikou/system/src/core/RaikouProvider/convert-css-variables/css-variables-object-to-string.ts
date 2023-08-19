import type { CssVariable } from "@raikou/core";

export type CSSVariables = Record<CssVariable, string>;
export type NestedCSSVariables = Record<string, CSSVariables>;

export function cssVariablesObjectToString(variables: CSSVariables) {
  return Object.entries(variables)
    .map(([name, value]) => `${name}: ${value};`)
    .join("");
}

export function cssNestedVariablesObjectToString(
  variables: NestedCSSVariables,
) {
  let cssString = "";

  for (const nestedSelector in variables) {
    cssString += `${nestedSelector}: ${variables[nestedSelector]}`;
  }

  return cssString.trim();
}
