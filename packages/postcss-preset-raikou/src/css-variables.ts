export const CSS_VARIABLES: Record<string, string> = {
  scale: "var(--raikou-scale)",
  "cursor-type": "var(--raikou-cursor-type)",
  "webkit-font-smoothing": "var(--raikou-webkit-font-smoothing)",
  "moz-font-smoothing": "var(--raikou-moz-font-smoothing)",
  "color-scheme": "var(--raikou-color-scheme)",
  white: "var(--raikou-color-white)",
  black: "var(--raikou-color-black)",
  "line-height": "var(--raikou-line-height)",
  "font-family": "var(--raikou-font-family)",
  "font-family-monospace": "var(--raikou-font-family-monospace)",
  "font-family-headings": "var(--raikou-font-family-headings)",
  ff: "var(--raikou-font-family)",
  "ff-monospace": "var(--raikou-font-family-monospace)",
  "ff-headings": "var(--raikou-font-family-headings)",
  "heading-font-weight": "var(--raikou-heading-font-weight)",
  "radius-default": "var(--raikou-radius-default)",
  "primary-color-filled": "var(--raikou-primary-color-filled)",
  "primary-color-filled-hover": "var(--raikou-primary-color-filled-hover)",
  "primary-color-light": "var(--raikou-primary-color-light)",
  "primary-color-light-hover": "var(--raikou-primary-color-light-hover)",
  "primary-color-light-color": "var(--raikou-primary-color-light-color)",
  "primary-color-0": "var(--raikou-primary-color-0)",
  "primary-color-1": "var(--raikou-primary-color-1)",
  "primary-color-2": "var(--raikou-primary-color-2)",
  "primary-color-3": "var(--raikou-primary-color-3)",
  "primary-color-4": "var(--raikou-primary-color-4)",
  "primary-color-5": "var(--raikou-primary-color-5)",
  "primary-color-6": "var(--raikou-primary-color-6)",
  "primary-color-7": "var(--raikou-primary-color-7)",
  "primary-color-8": "var(--raikou-primary-color-8)",
  "primary-color-9": "var(--raikou-primary-color-9)",
  "h1-font-size": "var(--raikou-h1-font-size)",
  "h1-fz": "var(--raikou-h1-font-size)",
  "h1-line-height": "var(--raikou-h1-line-height)",
  "h1-lh": "var(--raikou-h1-line-height)",
  "h2-font-size": "var(--raikou-h2-font-size)",
  "h2-fz": "var(--raikou-h2-font-size)",
  "h2-line-height": "var(--raikou-h2-line-height)",
  "h2-lh": "var(--raikou-h2-line-height)",
  "h3-font-size": "var(--raikou-h3-font-size)",
  "h3-fz": "var(--raikou-h3-font-size)",
  "h3-line-height": "var(--raikou-h3-line-height)",
  "h3-lh": "var(--raikou-h3-line-height)",
  "h4-font-size": "var(--raikou-h4-font-size)",
  "h4-fz": "var(--raikou-h4-font-size)",
  "h4-line-height": "var(--raikou-h4-line-height)",
  "h4-lh": "var(--raikou-h4-line-height)",
  "h5-font-size": "var(--raikou-h5-font-size)",
  "h5-fz": "var(--raikou-h5-font-size)",
  "h5-line-height": "var(--raikou-h5-line-height)",
  "h5-lh": "var(--raikou-h5-line-height)",
  "h6-font-size": "var(--raikou-h6-font-size)",
  "h6-fz": "var(--raikou-h6-font-size)",
  "h6-line-height": "var(--raikou-h6-line-height)",
  "h6-lh": "var(--raikou-h6-line-height)",
};

module.exports = function getVariable(input: string) {
  const normalizedInput = input.trim().toLowerCase();

  if (CSS_VARIABLES[normalizedInput]) {
    return CSS_VARIABLES[normalizedInput];
  }

  if (normalizedInput.startsWith("spacing-")) {
    return `var(--raikou-spacing-${normalizedInput.replace("spacing-", "")})`;
  }

  if (
    normalizedInput.startsWith("font-size-") ||
    normalizedInput.startsWith("fz-")
  ) {
    return `var(--raikou-font-size-${normalizedInput
      .replace("font-size-", "")
      .replace("fz-", "")})`;
  }

  if (normalizedInput.startsWith("breakpoint-")) {
    return `var(--raikou-breakpoint-${normalizedInput.replace(
      "breakpoint-",
      "",
    )})`;
  }

  if (normalizedInput.startsWith("shadow-")) {
    return `var(--raikou-shadow-${normalizedInput.replace("shadow-", "")})`;
  }

  if (
    normalizedInput.startsWith("line-height-") ||
    normalizedInput.startsWith("lh-")
  ) {
    return `var(--raikou-line-height-${normalizedInput
      .replace("line-height-", "")
      .replace("lh-", "")})`;
  }

  if (normalizedInput.startsWith("radius-")) {
    return `var(--raikou-radius-${normalizedInput.replace("radius-", "")})`;
  }

  if (normalizedInput.startsWith("color-")) {
    return `var(--raikou-color-${normalizedInput.replace("color-", "")})`;
  }

  return input;
};
