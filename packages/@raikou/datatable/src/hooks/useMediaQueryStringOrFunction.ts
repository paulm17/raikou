import { useRaikouTheme, type RaikouTheme } from '@raikou/core';
import { useMediaQuery } from '@raikou/hooks';

export function useMediaQueryStringOrFunction(
  mediaQuery: string | ((theme: RaikouTheme) => string) | undefined
) {
  const theme = useRaikouTheme();
  const mediaQueryValue = typeof mediaQuery === 'function' ? mediaQuery(theme) : mediaQuery;
  return useMediaQuery(mediaQueryValue || '', true);
}
