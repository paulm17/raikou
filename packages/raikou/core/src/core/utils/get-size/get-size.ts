import { isNumberLike } from "../is-number-like/is-number-like";
import { rem } from "../units-converters";

export function getSize(
  size: unknown,
  prefix = "size",
  convertToRem = true,
): string | undefined {
  if (size === undefined) {
    return undefined;
  }

  return isNumberLike(size)
    ? convertToRem
      ? rem(size)
      : (size as string)
    : `var(--${prefix}-${size})`;
}

export function getSpacing(size: unknown) {
  return getSize(size, "raikou-spacing");
}

export function getRadius(size: unknown) {
  if (size === undefined) {
    return "var(--raikou-radius-default)";
  }

  return getSize(size, "raikou-radius");
}

export function getFontSize(size: unknown) {
  return getSize(size, "raikou-font-size");
}

export function getLineHeight(size: unknown) {
  return getSize(size, "raikou-line-height", false);
}

export function getShadow(size: unknown) {
  if (!size) {
    return undefined;
  }

  return getSize(size, "raikou-shadow");
}
