import '@raikou/core';

import type { EmotionStyles, EmotionSx } from '@raikou/emotion';

declare module '@raikou/core' {
  export interface BoxProps {
    sx?: EmotionSx;
    styles?: EmotionStyles;
  }
}
