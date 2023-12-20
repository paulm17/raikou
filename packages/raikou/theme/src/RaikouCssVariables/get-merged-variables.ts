import { RaikouTheme } from "../theme.types";
import { defaultCssVariablesResolver } from "./default-css-variables-resolver";

interface GetMergedVariablesInput {
  theme: RaikouTheme;
}

export function getMergedVariables({ theme }: GetMergedVariablesInput) {
  return defaultCssVariablesResolver(theme);
}
