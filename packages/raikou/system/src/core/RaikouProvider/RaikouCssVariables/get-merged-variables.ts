import { deepMerge } from "../../utils";
import { RaikouTheme } from "../theme.types";
import { ConvertCSSVariablesInput } from "../convert-css-variables";
import { defaultCssVariablesResolver } from "./default-css-variables-resolver";

interface GetMergedVariablesInput {
  theme: RaikouTheme;
  generator?(theme: RaikouTheme): ConvertCSSVariablesInput;
}

export function getMergedVariables({
  theme,
  generator,
}: GetMergedVariablesInput) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator?.(theme);
  return providerGenerator
    ? deepMerge(defaultResolver, providerGenerator)
    : defaultResolver;
}
