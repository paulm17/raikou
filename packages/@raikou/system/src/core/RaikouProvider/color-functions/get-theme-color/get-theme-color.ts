import type { RaikouTheme } from '../../theme.types';
import { parseThemeColor } from '../parse-theme-color/parse-theme-color';

export function getThemeColor(color: string | undefined | null, theme: RaikouTheme) {
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color!;
}
