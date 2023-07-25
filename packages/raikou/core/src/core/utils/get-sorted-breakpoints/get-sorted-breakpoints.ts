import type { RaikouTheme } from "../../RaikouProvider";
import { getBreakpointValue } from "../get-breakpoint-value/get-breakpoint-value";

export function getSortedBreakpoints(
  breakpoints: string[],
  theme: RaikouTheme,
) {
  const convertedBreakpoints = breakpoints.map((breakpoint) => ({
    value: breakpoint,
    px: getBreakpointValue(breakpoint, theme),
  }));

  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}
