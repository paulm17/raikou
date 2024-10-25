import type { RaikouBreakpoint } from '../../RaikouProvider';
import { px } from '../units-converters';

export type BreakpointsSource = Record<RaikouBreakpoint, number | string>;

export function getBreakpointValue(breakpoint: number | string, breakpoints: BreakpointsSource) {
  if (breakpoint in breakpoints) {
    return px(breakpoints[breakpoint as RaikouBreakpoint]) as number;
  }

  return px(breakpoint) as number;
}
