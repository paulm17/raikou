import { RaikouRadius, RaikouTheme } from "../theme.types";
import { keys, rem } from "../../utils";
import { getPrimaryShade, rgba } from "../color-functions";
import { ConvertCSSVariablesInput } from "../convert-css-variables";

export type CSSVariablesResolver = (
  theme: RaikouTheme
) => ConvertCSSVariablesInput;

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string
) {
  keys(sizes).forEach((size) =>
    Object.assign(variables, { [`--raikou-${name}-${size}`]: sizes[size] })
  );
}

export const defaultCssVariablesResolver: CSSVariablesResolver = (theme) => {
  const darkPrimaryShade = getPrimaryShade(theme, "dark");
  const lightPrimaryShade = getPrimaryShade(theme, "light");
  const defaultRadius =
    theme.defaultRadius in theme.radius
      ? theme.radius[theme.defaultRadius as RaikouRadius]
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
    },
    light: {
      "--raikou-color-text": theme.black,
      "--raikou-color-body": theme.white,
      "--raikou-color-error": theme.colors.red[6],
      "--raikou-color-placeholder": theme.colors.gray[5],
      "--raikou-color-anchor":
        theme.colors[theme.primaryColor][lightPrimaryShade],
      "--raikou-color-default": theme.white,
      "--raikou-color-default-hover": theme.colors.gray[0],
      "--raikou-color-default-color": theme.black,
      "--raikou-color-default-border": theme.colors.gray[4],
    },
    dark: {
      "--raikou-color-text": "var(--raikou-color-dark-0)",
      "--raikou-color-body": theme.colors.dark[7],
      "--raikou-color-error": theme.colors.red[9],
      "--raikou-color-placeholder": theme.colors.dark[3],
      "--raikou-color-anchor": theme.colors[theme.primaryColor][4],
      "--raikou-color-default": theme.colors.dark[6],
      "--raikou-color-default-hover": theme.colors.dark[5],
      "--raikou-color-default-color": theme.white,
      "--raikou-color-default-border": theme.colors.dark[4],
    },
  };

  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");

  result.light["--raikou-color-primary"] =
    theme.colors[theme.primaryColor][lightPrimaryShade];
  result.dark["--raikou-color-primary"] =
    theme.colors[theme.primaryColor][darkPrimaryShade];

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

    result.light["--raikou-color-dimmed"] = "var(--raikou-color-gray-6)";
    result.light[`--raikou-color-${color}-filled`] =
      theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-filled-hover`] = lightFilledHover;
    result.light[`--raikou-color-${color}-light`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.1
    );
    result.light[`--raikou-color-${color}-light-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.12
    );
    result.light[`--raikou-color-${color}-light-color`] =
      theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-outline`] =
      theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-outline-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.05
    );

    result.dark["--raikou-color-dimmed"] = "var(--raikou-color-dark-2)";
    result.dark[`--raikou-color-${color}-filled`] =
      theme.colors[color][darkPrimaryShade];
    result.dark[`--raikou-color-${color}-filled-hover`] = darkFilledHover;
    result.dark[`--raikou-color-${color}-light`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.1
    );
    result.dark[`--raikou-color-${color}-light-hover`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.12
    );
    result.dark[`--raikou-color-${color}-light-color`] =
      theme.colors[color][Math.max(darkPrimaryShade - 3, 0)];
    result.dark[`--raikou-color-${color}-outline`] =
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)];
    result.dark[`--raikou-color-${color}-outline-hover`] = rgba(
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)],
      0.05
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
