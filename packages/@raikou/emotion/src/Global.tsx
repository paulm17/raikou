import { css, Global as EmotionGlobal } from '@emotion/react';
import { Theme as RaikouTheme, useTheme } from '@stylefusion/react';
import type { CSSObject } from './types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: RaikouTheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const pigmentTheme = useTheme();
  const theme = pigmentTheme.theme as RaikouTheme;
  return (
    <EmotionGlobal styles={css((typeof styles === 'function' ? styles(theme) : styles) as any)} />
  );
}
