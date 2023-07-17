import { RaikouTheme, px, RaikouBreakpoint } from "@raikou/core";

export function getBreakpointValue(
  breakpoint: number | string,
  theme: RaikouTheme
) {
  if (breakpoint in theme.breakpoints) {
    return px(theme.breakpoints[breakpoint as RaikouBreakpoint]) as number;
  }

  const convertedValue = px(breakpoint);

  if (typeof convertedValue !== "number" || Number.isNaN(convertedValue)) {
    throw new Error(
      `[@raikou/core] AppShell: failed to parse breakpoint value "${breakpoint}"`
    );
  }

  return convertedValue;
}
