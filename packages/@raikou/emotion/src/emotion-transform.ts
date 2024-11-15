import { useRaikouTheme } from '@raikou/core';
import { getHelpers } from './create-styles';
// prettier-ignore
import { useCss } from './use-css';

function sxTransform() {
  const theme = useRaikouTheme();
  const { css } = useCss();

  return (sx: any) => {
    const parsedSx = typeof sx === 'function' ? sx(theme, getHelpers(theme)) : sx;
    return !parsedSx ? '' : css(parsedSx);
  };
}

function stylesTransform() {
  const theme = useRaikouTheme();
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
  sx?: () => (sx: any) => string;
  styles?: () => (styles: any, payload: any) => Record<string, string>;
}

export const emotionTransform: RaikouStylesTransform = {
  sx: sxTransform,
  styles: stylesTransform,
};
