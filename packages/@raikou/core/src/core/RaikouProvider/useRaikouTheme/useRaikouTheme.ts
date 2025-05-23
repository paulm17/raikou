import { useTheme } from '@stylefusion/react';
import { defaultVariantColorsResolver } from '../color-functions';
import { RaikouTheme } from '../theme.types';

export function useRaikouTheme() {
  const pigmentTheme = useTheme();
  const raikouTheme = pigmentTheme.theme as RaikouTheme;
  raikouTheme.variantColorResolver = defaultVariantColorsResolver;

  return raikouTheme;
}
