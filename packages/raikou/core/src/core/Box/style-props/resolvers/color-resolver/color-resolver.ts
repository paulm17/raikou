import { RaikouTheme, parseThemeColor } from "../../../../RaikouProvider";

export function colorResolver(color: unknown, theme: RaikouTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.color === "dimmed") {
    return "var(--raikou-color-dimmed)";
  }

  if (parsedColor.color === "bright") {
    return "var(--raikou-color-bright)";
  }

  return parsedColor.variable
    ? `var(${parsedColor.variable})`
    : parsedColor.color;
}

export function textColorResolver(color: unknown, theme: RaikouTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.isThemeColor && parsedColor.shade === undefined) {
    return `var(--raikou-color-${parsedColor.color}-text)`;
  }

  return colorResolver(color, theme);
}
