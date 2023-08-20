import React from "react";
import {
  convertCssNestedVariables,
  convertCssVariables,
} from "../convert-css-variables/convert-css-variables";
import { getMergedVariables } from "./get-merged-variables";
import { removeDefaultVariables } from "./remove-default-variables";

interface RaikouCssVariablesProps {
  theme: any;
  getStyleNonce: any;
  cssVariablesResolver: any;
  cssVariablesSelector: string;
}

function getColorSchemeCssVariables(selector: string) {
  return `
  ${selector}[data-raikou-color-scheme="dark"] { --raikou-color-scheme: dark; }
  ${selector}[data-raikou-color-scheme="light"] { --raikou-color-scheme: light; }
`;
}

export function RaikouCssVariables({
  theme,
  getStyleNonce: nonce,
  cssVariablesResolver: generator,
  cssVariablesSelector,
}: RaikouCssVariablesProps) {
  // Theme
  const mergedVariables = getMergedVariables({ theme });
  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables
    ? removeDefaultVariables(mergedVariables)
    : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);

  // cssVariablesResolver
  let css2 = "";

  if (generator) {
    const providerGeneratorFunc = new Function("theme", generator);
    const providerGenerator = providerGeneratorFunc?.(theme);
    css2 = convertCssNestedVariables(providerGenerator, cssVariablesSelector);
  }

  if (css) {
    return (
      <style
        data-raikou-styles="system"
        nonce={nonce?.()}
        dangerouslySetInnerHTML={{
          __html: `${css}${css2}${
            shouldCleanVariables
              ? ""
              : getColorSchemeCssVariables(cssVariablesSelector)
          }`,
        }}
      />
    );
  }

  return null;
}

RaikouCssVariables.displayName = "@raikou/CssVariables";
