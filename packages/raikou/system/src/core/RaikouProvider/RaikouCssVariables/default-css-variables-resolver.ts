import { RaikouTheme } from "../theme.types";
import { keys, rem } from "../../utils";
import { getPrimaryShade, rgba } from "../color-functions";
import { ConvertCSSVariablesInput } from "../convert-css-variables";

export type CSSVariablesResolver = (
  theme: RaikouTheme,
) => ConvertCSSVariablesInput;

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string,
) {
  keys(sizes).forEach((size) =>
    Object.assign(variables, { [`--raikou-${name}-${size}`]: sizes[size] }),
  );
}

export const defaultCssVariablesResolver: CSSVariablesResolver = (theme) => {
  const darkPrimaryShade = getPrimaryShade(theme, "dark");
  const lightPrimaryShade = getPrimaryShade(theme, "light");
  const defaultRadius =
    theme.defaultRadius in theme.radius
      ? theme.radius[theme.defaultRadius as "xs"]
      : rem(theme.defaultRadius);

  const result: ConvertCSSVariablesInput = {
    variables: {
      "--raikou-scale": theme.scale.toString(),
      "--raikou-cursor-type": theme.cursorType,
      "--raikou-webkit-font-smoothing": theme.fontSmoothing
        ? "antialiased"
        : "unset",
      "--raikou-color-scheme": "light dark",
      "--raikou-moz-font-smoothing": theme.fontSmoothing
        ? "grayscale"
        : "unset",
      "--raikou-color-white": theme.white,
      "--raikou-color-black": theme.black,
      "--raikou-color-primary": `var(--raikou-color-${theme.primaryColor}-filled)`,
      "--raikou-line-height": theme.lineHeights.md,
      "--raikou-font-family": theme.fontFamily,
      "--raikou-font-family-monospace": theme.fontFamilyMonospace,
      "--raikou-font-family-headings": theme.headings.fontFamily,
      "--raikou-heading-font-weight": theme.headings.fontWeight,
      "--raikou-radius-default": defaultRadius,

      // Primary colors
      "--raikou-primary-color-filled": `var(--raikou-color-${theme.primaryColor}-filled)`,
      "--raikou-primary-color-light": `var(--raikou-color-${theme.primaryColor}-light)`,
      "--raikou-primary-color-light-hover": `var(--raikou-color-${theme.primaryColor}-light-hover)`,
      "--raikou-primary-color-light-color": `var(--raikou-color-${theme.primaryColor}-light-color)`,

      // Gradient
      "--raikou-gradient-from": theme.colors[theme.primaryColor][1],
      "--raikou-gradient-to": theme.colors[theme.primaryColor][8],
      "--raikou-gradient-deg": theme.defaultGradient.deg as string,
    },
    light: {
      "--raikou-color-bright": "var(--raikou-color-black)",
      "--raikou-color-text": theme.black,
      "--raikou-color-body": theme.white,
      "--raikou-color-error": "#fa5252",
      "--raikou-color-placeholder": "#adb5bd",
      "--raikou-color-anchor":
        theme.colors[theme.primaryColor][lightPrimaryShade],
      "--raikou-color-default": theme.white,
      "--raikou-color-default-hover": "#f8f9fa",
      "--raikou-color-default-color": theme.black,
      "--raikou-color-default-border": "#ced4da",
    },
    dark: {
      "--raikou-color-bright": "var(--raikou-color-white)",
      "--raikou-color-text": "#c1c2c5",
      "--raikou-color-body": "#1a1b1e",
      "--raikou-color-error": "#c92a2a",
      "--raikou-color-placeholder": "#5c5f66",
      "--raikou-color-anchor": theme.colors[theme.primaryColor][4],
      "--raikou-color-default": "#25262b",
      "--raikou-color-default-hover": "#2c2e33",
      "--raikou-color-default-color": theme.white,
      "--raikou-color-default-border": "#373a40",
    },
  };

  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");

  keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      result.variables[`--raikou-color-${color}-${index}`] = shade;
    });

    const lightFilledHover =
      lightPrimaryShade === 9
        ? theme.colors[color][8]
        : theme.colors[color][lightPrimaryShade + 1];

    const darkFilledHover =
      darkPrimaryShade === 9
        ? theme.colors[color][8]
        : theme.colors[color][darkPrimaryShade + 1];

    result.light["--raikou-color-dimmed"] = "#868e96";
    result.light[`--raikou-color-${color}-filled`] =
      theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-filled-hover`] = lightFilledHover;
    result.light[`--raikou-color-${color}-light`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.1,
    );
    result.light[`--raikou-color-${color}-light-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.12,
    );
    result.light[`--raikou-color-${color}-light-color`] =
      theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-outline`] =
      theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-outline-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.05,
    );

    result.dark["--raikou-color-dimmed"] = "#909296";
    result.dark[`--raikou-color-${color}-filled`] =
      theme.colors[color][darkPrimaryShade];
    result.dark[`--raikou-color-${color}-filled-hover`] = darkFilledHover;
    result.dark[`--raikou-color-${color}-light`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.15,
    );
    result.dark[`--raikou-color-${color}-light-hover`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.2,
    );
    result.dark[`--raikou-color-${color}-light-color`] =
      theme.colors[color][Math.max(darkPrimaryShade - 5, 0)];
    result.dark[`--raikou-color-${color}-outline`] =
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)];
    result.dark[`--raikou-color-${color}-outline-hover`] = rgba(
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)],
      0.05,
    );
  });

  const headings = theme.headings.sizes;

  keys(headings).forEach((heading) => {
    result.variables[`--raikou-${heading}-font-size`] =
      headings[heading].fontSize;
    result.variables[`--raikou-${heading}-line-height`] =
      headings[heading].lineHeight;
    result.variables[`--raikou-${heading}-font-weight`] =
      headings[heading].fontWeight || theme.headings.fontWeight;
  });

  return result;
};
