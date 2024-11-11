import { DefaultRaikouColor, useRaikouTheme } from '@raikou/core';
import * as heroPatterns from './patterns';

type PatternValue = string;
type Patterns = {
  [K: string]: PatternValue;
};

const patterns = heroPatterns as Patterns;
type PatternName = keyof typeof heroPatterns;

function useHeroPattern(
  patternName: PatternName,
  colorName: DefaultRaikouColor = 'blue',
  shade: number = 5,
  opacity: number = 1
) {
  const theme = useRaikouTheme();

  if (typeof patternName !== 'string' || !patterns[patternName]) {
    throw new Error(`Invalid pattern name: ${patternName}`);
  }

  if (!theme.colors[colorName]) {
    throw new Error(`Invalid color name: ${colorName}`);
  }

  if (shade < 0 || shade > 9) {
    throw new Error('Shade must be between 0 and 9');
  }

  if (opacity < 0 || opacity > 1) {
    throw new Error('Opacity must be between 0 and 1');
  }

  const pattern: PatternValue = patterns[patternName];

  let colorHex = theme.colors[colorName][shade];
  colorHex = colorHex.replace(/#/g, '%23');

  const backgroundImage = pattern
    .replace('{{color}}', colorHex)
    .replace('{{opacity}}', opacity.toString());

  return backgroundImage;
}

export { useHeroPattern };
