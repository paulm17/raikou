import React from "react";
import { convertCssVariables } from "../convert-css-variables/convert-css-variables";
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
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables
    ? removeDefaultVariables(mergedVariables)
    : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);

  if (css) {
    return (
      <style
        data-raikou-styles
        nonce={nonce?.()}
        dangerouslySetInnerHTML={{
          __html: `${css}${
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
