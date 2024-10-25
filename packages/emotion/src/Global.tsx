import { css, Global as EmotionGlobal } from '@emotion/react';
import { RaikouTheme, useRaikouTheme } from '@raikou/core';
import type { CSSObject } from './types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: RaikouTheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useRaikouTheme();
  return (
    <EmotionGlobal styles={css((typeof styles === 'function' ? styles(theme) : styles) as any)} />
  );
}
