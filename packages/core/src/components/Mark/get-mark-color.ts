import { RaikouColor, RaikouTheme, parseThemeColor } from '../../core';

interface GetMarkColorInput {
  color: RaikouColor | string | undefined;
  theme: RaikouTheme;
  defaultShade: number;
}

export function getMarkColor({ color, theme, defaultShade }: GetMarkColorInput) {
  const parsed = parseThemeColor({ color, theme });

  if (!parsed.isThemeColor) {
    return color;
  }

  if (parsed.shade === undefined) {
    return `var(--raikou-color-${parsed.color}-${defaultShade})`;
  }

  return `var(${parsed.variable})`;
}
