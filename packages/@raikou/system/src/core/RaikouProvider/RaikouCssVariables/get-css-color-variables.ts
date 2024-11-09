import { alpha, getPrimaryShade } from '../color-functions';
import { RaikouColor, RaikouTheme } from '../theme.types';

interface GetColorVariablesInput {
  theme: RaikouTheme;
  color: RaikouColor;
  colorScheme: 'light' | 'dark';
  name?: string;
  withColorValues?: boolean;
}

export function getCSSColorVariables({
  theme,
  color,
  colorScheme,
  name = color,
  withColorValues = true,
}: GetColorVariablesInput) {
  if (!theme.colors[color]) {
    return {};
  }

  if (colorScheme === 'light') {
    const primaryShade = getPrimaryShade(theme, 'light');

    const dynamicVariables = {
      [`color-${name}-text`]: `var(--raikou-color-${name}-filled)`,
      [`color-${name}-filled`]: `var(--raikou-color-${name}-${primaryShade})`,
      [`color-${name}-filled-hover`]: `var(--raikou-color-${name}-${
        primaryShade === 9 ? 8 : primaryShade + 1
      })`,
      [`color-${name}-light`]: alpha(theme.colors[color][primaryShade], 0.1),
      [`color-${name}-light-hover`]: alpha(theme.colors[color][primaryShade], 0.12),
      [`color-${name}-light-color`]: `var(--raikou-color-${name}-${primaryShade})`,
      [`color-${name}-outline`]: `var(--raikou-color-${name}-${primaryShade})`,
      [`color-${name}-outline-hover`]: alpha(theme.colors[color][primaryShade], 0.05),
    };

    if (!withColorValues) {
      return dynamicVariables;
    }

    return {
      [`color-${name}-0`]: theme.colors[color][0],
      [`color-${name}-1`]: theme.colors[color][1],
      [`color-${name}-2`]: theme.colors[color][2],
      [`color-${name}-3`]: theme.colors[color][3],
      [`color-${name}-4`]: theme.colors[color][4],
      [`color-${name}-5`]: theme.colors[color][5],
      [`color-${name}-6`]: theme.colors[color][6],
      [`color-${name}-7`]: theme.colors[color][7],
      [`color-${name}-8`]: theme.colors[color][8],
      [`color-${name}-9`]: theme.colors[color][9],
      ...dynamicVariables,
    };
  }

  const primaryShade = getPrimaryShade(theme, 'dark');
  const dynamicVariables = {
    [`color-${name}-text`]: `var(--raikou-color-${name}-4)`,
    [`color-${name}-filled`]: `var(--raikou-color-${name}-${primaryShade})`,
    [`color-${name}-filled-hover`]: `var(--raikou-color-${name}-${
      primaryShade === 9 ? 8 : primaryShade + 1
    })`,
    [`color-${name}-light`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`color-${name}-light-hover`]: alpha(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`color-${name}-light-color`]: `var(--raikou-color-${name}-${Math.max(primaryShade - 5, 0)})`,
    [`color-${name}-outline`]: `var(--raikou-color-${name}-${Math.max(primaryShade - 4, 0)})`,
    [`color-${name}-outline-hover`]: alpha(
      theme.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    ),
  };

  if (!withColorValues) {
    return dynamicVariables;
  }

  return {
    [`color-${name}-0`]: theme.colors[color][0],
    [`color-${name}-1`]: theme.colors[color][1],
    [`color-${name}-2`]: theme.colors[color][2],
    [`color-${name}-3`]: theme.colors[color][3],
    [`color-${name}-4`]: theme.colors[color][4],
    [`color-${name}-5`]: theme.colors[color][5],
    [`color-${name}-6`]: theme.colors[color][6],
    [`color-${name}-7`]: theme.colors[color][7],
    [`color-${name}-8`]: theme.colors[color][8],
    [`color-${name}-9`]: theme.colors[color][9],
    ...dynamicVariables,
  };
}
