import { CSSObject } from '@emotion/serialize';
import {
  em,
  px,
  Breakpoint as RaikouBreakpoint,
  Theme as RaikouTheme,
  useTheme,
} from '@stylefusion/react';
// prettier-ignore
import { useCss } from './use-css';

export function getStylesRef(refName: string) {
  return `___ref-${refName || ''}`;
}

function getBreakpointValue(theme: RaikouTheme, breakpoint: RaikouBreakpoint | number) {
  return breakpoint in theme.breakpoints && typeof breakpoint !== 'number'
    ? (px(theme.breakpoints[breakpoint]) as number)
    : (px(breakpoint) as number);
}

export const getHelpers = (theme: RaikouTheme) => ({
  light: '[data-raikou-color-scheme="light"] &',
  dark: '[data-raikou-color-scheme="dark"] &',
  rtl: '[dir="rtl"] &',
  ltr: '[dir="ltr"] &',
  notRtl: '[dir="ltr"] &',
  notLtr: '[dir="rtl"] &',
  ref: getStylesRef,
  smallerThan: (breakpoint: RaikouBreakpoint | number) =>
    `@media (max-width: ${em(getBreakpointValue(theme, breakpoint) - 0.1)})`,
  largerThan: (breakpoint: RaikouBreakpoint | number) =>
    `@media (min-width: ${em(getBreakpointValue(theme, breakpoint))})`,
});

export type EmotionHelpers = ReturnType<typeof getHelpers>;

export function createStyles<
  Key extends string = string,
  Params = void,
  Input extends Record<Key, CSSObject> = Record<Key, CSSObject>,
>(input: ((theme: RaikouTheme, params: Params, helpers: EmotionHelpers) => Input) | Input) {
  const getCssObject = typeof input === 'function' ? input : () => input;

  return function useStyles(params: Params) {
    const pigmentTheme = useTheme();
    const theme = pigmentTheme.theme as RaikouTheme;
    const helpers = getHelpers(theme);
    const cssObject: Record<string, any> = getCssObject(theme, params, helpers);
    const { css, cx } = useCss();
    const classes = Object.keys(cssObject).reduce<Record<string, string>>((acc, key) => {
      acc[key] = css(cssObject[key]);
      return acc;
    }, {}) as Record<keyof Input, string>;

    return { classes, cx, theme };
  };
}
