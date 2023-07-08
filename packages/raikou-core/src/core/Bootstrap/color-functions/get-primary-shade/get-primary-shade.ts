import type { RaikouColorScheme, RaikouTheme } from '../../theme.types';

export function getPrimaryShade(theme: RaikouTheme, colorScheme: RaikouColorScheme) {
  if (typeof theme.primaryShade === 'number') {
    return theme.primaryShade;
  }

  if (colorScheme === 'dark') {
    return theme.primaryShade.dark;
  }

  return theme.primaryShade.light;
}
