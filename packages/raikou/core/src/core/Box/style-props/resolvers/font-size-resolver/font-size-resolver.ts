import { RaikouTheme } from "../../../../RaikouProvider";
import { rem } from "../../../../utils";

export function fontSizeResolver(value: unknown, theme: RaikouTheme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--raikou-font-size-${value})`;
  }

  if (typeof value === "number") {
    return rem(value);
  }

  if (typeof value === "string") {
    return rem(value);
  }

  return value;
}
