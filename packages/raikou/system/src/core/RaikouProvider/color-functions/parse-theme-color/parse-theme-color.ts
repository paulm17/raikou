import type {
  RaikouTheme,
  RaikouColorShade,
  RaikouColorScheme,
} from "../../theme.types";
import type { CssVariable } from "@raikou/core";
import { getPrimaryShade } from "../get-primary-shade/get-primary-shade";

interface ParseThemeColorOptions {
  color: unknown;
  theme: RaikouTheme;
  colorScheme?: RaikouColorScheme;
}

interface ParseThemeColorResult {
  color: string;
  value: string;
  shade: RaikouColorShade | undefined;
  variable: CssVariable | undefined;
  isThemeColor: boolean;
}

export function parseThemeColor({
  color,
  theme,
  colorScheme,
}: ParseThemeColorOptions): ParseThemeColorResult {
  if (typeof color !== "string") {
    throw new Error(
      `[@raikou/core] Failed to parse color. Instead got ${typeof color}`
    );
  }

  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: undefined,
      isThemeColor: false,
      variable: `--raikou-color-${color}`,
    };
  }

  const [_color, shade] = color.split(".");
  const colorShade = shade ? (Number(shade) as RaikouColorShade) : undefined;
  const isThemeColor = _color in theme.colors;

  if (isThemeColor) {
    return {
      color: _color,
      value:
        colorShade !== undefined
          ? theme.colors[_color][colorShade]
          : theme.colors[_color][
              getPrimaryShade(theme, colorScheme || "light")
            ],
      shade: colorShade,
      isThemeColor,
      variable: shade
        ? `--raikou-color-${_color}-${colorShade}`
        : `--raikou-color-${_color}-filled`,
    };
  }

  return {
    color,
    value: color,
    isThemeColor,
    shade: colorShade,
    variable: undefined,
  };
}
