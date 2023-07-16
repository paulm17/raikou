import { RaikouTheme, parseThemeColor } from "../../../../Bootstrap";

export function colorResolver(color: unknown, theme: RaikouTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.color === "dimmed") {
    return "var(--raikou-color-dimmed)";
  }

  return parsedColor.variable
    ? `var(${parsedColor.variable})`
    : parsedColor.color;
}
