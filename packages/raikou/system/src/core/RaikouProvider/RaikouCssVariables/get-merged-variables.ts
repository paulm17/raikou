import { deepMerge } from "../../utils";
import { RaikouTheme } from "../theme.types";
// import { ConvertCSSVariablesInput } from "../convert-css-variables";
import { defaultCssVariablesResolver } from "./default-css-variables-resolver";

interface GetMergedVariablesInput {
  theme: RaikouTheme;
  generator?: any;
}

export function getMergedVariables({
  theme,
  generator,
}: GetMergedVariablesInput) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGeneratorFunc = new Function("theme", generator);
  const providerGenerator = providerGeneratorFunc?.(theme);

  return providerGenerator
    ? deepMerge(defaultResolver, providerGenerator)
    : defaultResolver;
}
