import type { RaikouTheme, RaikouBreakpoint } from "../../RaikouProvider";
import { px } from "../units-converters";

export function getBreakpointValue(
  breakpoint: number | string,
  theme: RaikouTheme,
) {
  if (breakpoint in theme.breakpoints) {
    return px(theme.breakpoints[breakpoint as RaikouBreakpoint]) as number;
  }

  return px(breakpoint) as number;
}
