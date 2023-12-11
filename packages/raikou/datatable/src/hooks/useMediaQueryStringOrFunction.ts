import { DEFAULT_THEME, type RaikouTheme } from "@raikou/core";
import { useMediaQuery } from "@raikou/hooks";

export function useMediaQueryStringOrFunction(
  mediaQuery: string | ((theme: RaikouTheme) => string) | undefined,
) {
  const theme = DEFAULT_THEME;
  const mediaQueryValue =
    typeof mediaQuery === "function" ? mediaQuery(theme) : mediaQuery;
  return useMediaQuery(mediaQueryValue || "", true);
}
