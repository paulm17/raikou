import { RaikouTheme } from "../../../../RaikouProvider";

export function lineHeightResolver(value: unknown, theme: RaikouTheme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--raikou-line-height-${value})`;
  }

  return value;
}
