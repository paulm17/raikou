import type { RaikouTheme } from '../../theme.types';

export function getAutoContrastValue(autoContrast: boolean | undefined, theme: RaikouTheme) {
  return typeof autoContrast === 'boolean' ? autoContrast : theme.autoContrast;
}
