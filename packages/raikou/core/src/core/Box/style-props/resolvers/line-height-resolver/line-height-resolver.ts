import { RaikouTheme } from "../../../../RaikouProvider";

export function lineHeightResolver(value: unknown, theme: RaikouTheme) {
  if (typeof value === "string" && value in theme.lineHeights) {
    return `var(--raikou-line-height-${value})`;
  }

  return value;
}
