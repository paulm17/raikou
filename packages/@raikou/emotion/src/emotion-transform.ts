import { Theme as RaikouTheme, useTheme } from '@stylefusion/react';
import { getHelpers } from './create-styles';
// prettier-ignore
import { useCss } from './use-css';

function sxTransform() {
  const pigmentTheme = useTheme();
  const theme = pigmentTheme.theme as RaikouTheme;
  const { css } = useCss();

  return (stx: any) => {
    const parsedSx = typeof stx === 'function' ? stx(theme, getHelpers(theme)) : stx;
    return !parsedSx ? '' : css(parsedSx);
  };
}

function stylesTransform() {
  const pigmentTheme = useTheme();
  const theme = pigmentTheme.theme as RaikouTheme;
  const { css } = useCss();

  return (styles: any, payload: any) => {
    if (!styles) {
      return {};
    }

    const stylesObject =
      typeof styles === 'function' ? styles(theme, payload.props, getHelpers(theme)) : styles;

    return Object.keys(stylesObject).reduce((acc, key) => {
      const value = stylesObject[key];
      const parsedValue = typeof value === 'function' ? value(theme) : value;
      return { ...acc, [key]: css(parsedValue) };
    }, {});
  };
}

interface RaikouStylesTransform {
  stx?: () => (stx: any) => string;
  styles?: () => (styles: any, payload: any) => Record<string, string>;
}

export const emotionTransform: RaikouStylesTransform = {
  stx: sxTransform,
  styles: stylesTransform,
};
