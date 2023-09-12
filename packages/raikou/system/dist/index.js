"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DEFAULT_THEME: () => DEFAULT_THEME,
  DirectionContext: () => DirectionContext,
  DirectionProvider: () => DirectionProvider,
  RaikouProvider: () => RaikouProvider,
  convertCssVariables: () => convertCssVariables,
  createCSSVariables: () => createCSSVariables,
  darken: () => darken,
  deepMerge: () => deepMerge,
  defaultCssVariablesResolver: () => defaultCssVariablesResolver,
  defaultVariantColorsResolver: () => defaultVariantColorsResolver,
  em: () => em,
  getGradient: () => getGradient,
  getPrimaryShade: () => getPrimaryShade,
  getThemeColor: () => getThemeColor,
  isLightColor: () => isLightColor,
  keys: () => keys,
  lighten: () => lighten,
  mergeRaikouTheme: () => mergeRaikouTheme,
  parseThemeColor: () => parseThemeColor,
  px: () => px,
  rem: () => rem,
  rgba: () => rgba,
  toRgba: () => toRgba,
  useColorScheme: () => useColorScheme,
  useDirection: () => useDirection,
  validateRaikouTheme: () => validateRaikouTheme
});
module.exports = __toCommonJS(src_exports);

// src/core/utils/deep-merge/deep-merge.ts
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = __spreadValues({}, target);
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}

// src/core/utils/keys/keys.ts
function keys(object) {
  return Object.keys(object);
}

// src/core/utils/units-converters/px.ts
function getTransformedScaledValue(value) {
  var _a;
  if (typeof value !== "string" || !value.includes("var(--raikou-scale)")) {
    return value;
  }
  return (_a = value.match(/^calc\((.*?)\)$/)) == null ? void 0 : _a[1].split("*")[0].trim();
}
function px(value) {
  const transformedValue = getTransformedScaledValue(value);
  if (typeof transformedValue === "number") {
    return transformedValue;
  }
  if (typeof transformedValue === "string") {
    if (transformedValue.includes("calc") || transformedValue.includes("var")) {
      return transformedValue;
    }
    if (transformedValue.includes("px")) {
      return Number(transformedValue.replace("px", ""));
    }
    if (transformedValue.includes("rem")) {
      return Number(transformedValue.replace("rem", "")) * 16;
    }
    if (transformedValue.includes("em")) {
      return Number(transformedValue.replace("em", "")) * 16;
    }
    return Number(transformedValue);
  }
  return NaN;
}

// src/core/utils/units-converters/rem.ts
function scaleRem(remValue) {
  return `calc(${remValue} * var(--raikou-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  return (value) => {
    if (value === 0 || value === "0") {
      return "0";
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value.includes("calc(") || value.includes("var(")) {
        return value;
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  };
}
var rem = createConverter("rem", { shouldScale: true });
var em = createConverter("em");

// src/core/RaikouProvider/color-functions/get-primary-shade/get-primary-shade.ts
function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}

// src/core/RaikouProvider/color-functions/parse-theme-color/parse-theme-color.ts
function parseThemeColor({
  color,
  theme,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(
      `[@raikou/core] Failed to parse color. Instead got ${typeof color}`
    );
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      variable: `--raikou-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme.colors;
  if (isThemeColor) {
    return {
      color: _color,
      value: colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][getPrimaryShade(theme, colorScheme || "light")],
      shade: colorShade,
      isThemeColor,
      variable: shade ? `--raikou-color-${_color}-${colorShade}` : `--raikou-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    shade: colorShade,
    variable: void 0
  };
}

// src/core/RaikouProvider/color-functions/get-theme-color/get-theme-color.ts
function getThemeColor(color, theme) {
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}

// src/core/RaikouProvider/color-functions/get-gradient/get-gradient.ts
function getGradient(gradient, theme) {
  const merged = {
    from: (gradient == null ? void 0 : gradient.from) || theme.defaultGradient.from,
    to: (gradient == null ? void 0 : gradient.to) || theme.defaultGradient.to,
    deg: (gradient == null ? void 0 : gradient.deg) || theme.defaultGradient.deg || 0
  };
  const fromColor = getThemeColor(merged.from, theme);
  const toColor = getThemeColor(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}

// src/core/RaikouProvider/color-functions/to-rgba/to-rgba.ts
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  const parsed = parseInt(hexString, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g, b, a: a || 1 };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r = x;
    g = 0;
    b = chroma;
  } else {
    r = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}

// src/core/RaikouProvider/color-functions/darken/darken.ts
function darken(color, alpha) {
  if (color.startsWith("var(")) {
    return color;
  }
  const { r, g, b, a } = toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
}

// src/core/RaikouProvider/color-functions/rgba/rgba.ts
function rgba(color, alpha) {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// src/core/RaikouProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.ts
var defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient
}) => {
  const parsed = parseThemeColor({ color, theme });
  if (variant === "filled") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--raikou-color-${color}-filled)`,
          hover: `var(--raikou-color-${color}-filled-hover)`,
          color: "var(--raikou-color-white)",
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--raikou-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: "var(--raikou-color-white)",
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken(color, 0.1),
      color: "var(--raikou-color-white)",
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--raikou-color-${color}-light)`,
          hover: `var(--raikou-color-${color}-light-hover)`,
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6
        )})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: rgba(color, 0.1),
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--raikou-color-${color}-outline-hover)`,
          color: `var(--raikou-color-${color}-outline)`,
          border: `${rem(1)} solid var(--raikou-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--raikou-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.05),
      color,
      border: `${rem(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--raikou-color-${color}-light-hover)`,
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: rgba(parsedColor, 0.12),
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6
        )})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--raikou-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--raikou-color-${parsed.color}-${Math.min(
          parsed.shade,
          6
        )})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--raikou-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--raikou-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--raikou-color-white)",
        hover: darken(theme.white, 0.01),
        color: `var(--raikou-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "var(--raikou-color-white)",
      hover: darken(theme.white, 0.01),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: getGradient(gradient, theme),
      hover: getGradient(gradient, theme),
      color: "var(--raikou-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--raikou-color-default)",
      hover: "var(--raikou-color-default-hover)",
      color: "var(--raikou-color-default-color)",
      border: `${rem(1)} solid var(--raikou-color-default-border)`
    };
  }
  return {};
};

// src/core/RaikouProvider/color-functions/lighten/lighten.ts
function lighten(color, alpha) {
  if (color.startsWith("var(")) {
    return color;
  }
  const { r, g, b, a } = toRgba(color);
  const light = (input) => Math.round(input + (255 - input) * alpha);
  return `rgba(${light(r)}, ${light(g)}, ${light(b)}, ${a})`;
}

// src/core/RaikouProvider/color-functions/is-light-color/is-light-color.ts
function getPartLuminance(value) {
  const x = value / 255;
  return x <= 0.03928 ? x / 12.92 : __pow((x + 0.055) / 1.055, 2.4);
}
function getLuminance(input) {
  const r = getPartLuminance(input.r);
  const g = getPartLuminance(input.g);
  const b = getPartLuminance(input.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function isLightColor(color, luminanceThreshold = 0.179) {
  return getLuminance(toRgba(color)) > luminanceThreshold;
}

// src/core/RaikouProvider/color-scheme-management/color-scheme-management.ts
var import_next_themes = require("next-themes");
function useColorScheme() {
  const {
    theme: colorScheme,
    themes: allThemes,
    setTheme: setColorScheme
  } = (0, import_next_themes.useTheme)();
  return {
    colorScheme: colorScheme || "system",
    allThemes,
    setColorScheme
  };
}

// src/core/RaikouProvider/default-colors.ts
var DEFAULT_COLORS = {
  blue: ["", "", "", "", "", "", "", "", "", ""]
};

// src/core/RaikouProvider/default-theme.ts
var DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
var DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: defaultVariantColorsResolver,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: {
    from: "#dbe4f5",
    to: "#3a5791",
    deg: "45deg"
  },
  defaultRadius: "sm",
  activeClassName: "raikou-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(34), lineHeight: "1.3" },
      h2: { fontSize: rem(26), lineHeight: "1.35" },
      h3: { fontSize: rem(22), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.45" },
      h5: { fontSize: rem(16), lineHeight: "1.5" },
      h6: { fontSize: rem(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32)
  },
  spacing: {
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(
      2
    )} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(
      10
    )} ${rem(15)} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(
      -5
    )}`,
    md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(
      20
    )} ${rem(25)} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(
      -5
    )}`,
    lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(
      28
    )} ${rem(23)} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(
      -7
    )}`,
    xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(
      36
    )} ${rem(28)} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(
      -7
    )}`
  },
  other: {},
  components: {}
};

// src/core/RaikouProvider/merge-raikou-theme/merge-raikou-theme.ts
var INVALID_PRIMARY_COLOR_ERROR = "[@raikou/system] RaikouProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";
var INVALID_PRIMARY_SHADE_ERROR = "[@raikou/system] RaikouProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateRaikouTheme(theme) {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme.primaryShade === "object") {
    if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeRaikouTheme(currentTheme, themeOverride) {
  var _a;
  if (!themeOverride) {
    validateRaikouTheme(currentTheme);
    return currentTheme;
  }
  const result = deepMerge(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !((_a = themeOverride.headings) == null ? void 0 : _a.fontFamily)) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateRaikouTheme(result);
  return result;
}

// src/core/RaikouProvider/convert-css-variables/css-variables-object-to-string.ts
function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}
function cssNestedVariablesObjectToString(variables) {
  let cssString = "";
  for (const nestedSelector in variables) {
    cssString += `${nestedSelector}: ${variables[nestedSelector]}`;
  }
  return cssString.trim();
}

// src/core/RaikouProvider/convert-css-variables/wrap-with-selector.ts
function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}

// src/core/RaikouProvider/convert-css-variables/convert-css-variables.ts
function convertCssVariables(input, selector) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : "";
  const dark = cssVariablesObjectToString(input.dark);
  const darkForced = dark ? wrapWithSelector(`${selector}[data-raikou-color-scheme="dark"]`, dark) : "";
  const light = cssVariablesObjectToString(input.light);
  const lightForced = light ? wrapWithSelector(`${selector}[data-raikou-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}
function convertCssNestedVariables(input, selector) {
  let darkForced = "";
  for (const nestedSelector in input.dark) {
    const dark = cssNestedVariablesObjectToString(input.dark[nestedSelector]);
    if (dark) {
      darkForced += wrapWithSelector(
        `${selector}[data-raikou-color-scheme="dark"] ${nestedSelector}`,
        dark
      );
    }
  }
  let lightForced = "";
  for (const nestedSelector in input.light) {
    const light = cssNestedVariablesObjectToString(input.light[nestedSelector]);
    if (light) {
      lightForced += wrapWithSelector(
        `${selector}[data-raikou-color-scheme="light"] ${nestedSelector}`,
        light
      );
    }
  }
  return `${darkForced}${lightForced}`;
}

// src/core/RaikouProvider/RaikouCssVariables/default-css-variables-resolver.ts
function assignSizeVariables(variables, sizes, name) {
  keys(sizes).forEach(
    (size) => Object.assign(variables, { [`--raikou-${name}-${size}`]: sizes[size] })
  );
}
var defaultCssVariablesResolver = (theme) => {
  const darkPrimaryShade = getPrimaryShade(theme, "dark");
  const lightPrimaryShade = getPrimaryShade(theme, "light");
  const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : rem(theme.defaultRadius);
  const result = {
    variables: {
      "--raikou-scale": theme.scale.toString(),
      "--raikou-cursor-type": theme.cursorType,
      "--raikou-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--raikou-color-scheme": "light dark",
      "--raikou-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
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
      "--raikou-gradient-deg": theme.defaultGradient.deg
    },
    light: {
      "--raikou-color-bright": "var(--raikou-color-black)",
      "--raikou-color-text": theme.black,
      "--raikou-color-body": theme.white,
      "--raikou-color-error": "#fa5252",
      "--raikou-color-placeholder": "#adb5bd",
      "--raikou-color-anchor": theme.colors[theme.primaryColor][lightPrimaryShade],
      "--raikou-color-default": theme.white,
      "--raikou-color-default-hover": "#f8f9fa",
      "--raikou-color-default-color": theme.black,
      "--raikou-color-default-border": "#ced4da"
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
      "--raikou-color-default-border": "#373a40"
    }
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
    const lightFilledHover = lightPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][lightPrimaryShade + 1];
    const darkFilledHover = darkPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][darkPrimaryShade + 1];
    result.light["--raikou-color-dimmed"] = "#868e96";
    result.light[`--raikou-color-${color}-filled`] = theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-filled-hover`] = lightFilledHover;
    result.light[`--raikou-color-${color}-light`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.1
    );
    result.light[`--raikou-color-${color}-light-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.12
    );
    result.light[`--raikou-color-${color}-light-color`] = theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-outline`] = theme.colors[color][lightPrimaryShade];
    result.light[`--raikou-color-${color}-outline-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.05
    );
    result.dark["--raikou-color-dimmed"] = "#909296";
    result.dark[`--raikou-color-${color}-filled`] = theme.colors[color][darkPrimaryShade];
    result.dark[`--raikou-color-${color}-filled-hover`] = darkFilledHover;
    result.dark[`--raikou-color-${color}-light`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.15
    );
    result.dark[`--raikou-color-${color}-light-hover`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.2
    );
    result.dark[`--raikou-color-${color}-light-color`] = theme.colors[color][Math.max(darkPrimaryShade - 5, 0)];
    result.dark[`--raikou-color-${color}-outline`] = theme.colors[color][Math.max(darkPrimaryShade - 4, 0)];
    result.dark[`--raikou-color-${color}-outline-hover`] = rgba(
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)],
      0.05
    );
  });
  const headings = theme.headings.sizes;
  keys(headings).forEach((heading) => {
    result.variables[`--raikou-${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`--raikou-${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`--raikou-${heading}-font-weight`] = headings[heading].fontWeight || theme.headings.fontWeight;
  });
  return result;
};

// src/core/RaikouProvider/RaikouCssVariables/get-merged-variables.ts
function getMergedVariables({ theme }) {
  return defaultCssVariablesResolver(theme);
}

// src/core/RaikouProvider/RaikouCssVariables/remove-default-variables.ts
var defaultCssVariables = defaultCssVariablesResolver(DEFAULT_THEME);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  defaultCssVariables.variables["--raikou-gradient-deg"] = "";
  keys(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  keys(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  keys(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}

// src/core/RaikouProvider/create-css-variables/create-css-variables.ts
function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-raikou-color-scheme="dark"] { --raikou-color-scheme: dark; }
  ${selector}[data-raikou-color-scheme="light"] { --raikou-color-scheme: light; }
`;
}
function createCSSVariables({
  theme,
  cssVariablesResolver: generator,
  cssVariablesSelector = ":root"
}) {
  let mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);
  const mergedVariables = getMergedVariables({ theme: mergedTheme });
  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  let css2 = "";
  if (generator) {
    const providerGeneratorFunc = new Function("theme", generator);
    const providerGenerator = providerGeneratorFunc == null ? void 0 : providerGeneratorFunc(theme);
    css2 = convertCssNestedVariables(providerGenerator, cssVariablesSelector);
  }
  var elem = document.querySelector('style[data-raikou-styles="system"]');
  elem == null ? void 0 : elem.remove();
  var newElem = document.createElement("style");
  newElem.setAttribute("data-raikou-styles", "system");
  newElem.innerHTML = `${css}${css2}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`;
  document.body.prepend(newElem);
  return null;
}

// src/core/RaikouProvider/RaikouProvider.tsx
var import_react3 = __toESM(require("react"));
var import_next_themes2 = require("next-themes");

// src/core/RaikouProvider/suppress-nextjs-warning.ts
function suppressNextjsWarning() {
  const originalError = console.error;
  console.error = (...args) => {
    if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-raikou-color-scheme")) {
    } else {
      originalError(...args);
    }
  };
}

// src/core/RaikouProvider/RaikouCssVariables/RaikouCssVariables.tsx
var import_react = __toESM(require("react"));
function getColorSchemeCssVariables2(selector) {
  return `
  ${selector}[data-raikou-color-scheme="dark"] { --raikou-color-scheme: dark; }
  ${selector}[data-raikou-color-scheme="light"] { --raikou-color-scheme: light; }
`;
}
function RaikouCssVariables({
  theme,
  getStyleNonce: nonce,
  cssVariablesResolver: generator,
  cssVariablesSelector
}) {
  const mergedVariables = getMergedVariables({ theme });
  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  let css2 = "";
  if (generator) {
    const providerGeneratorFunc = new Function("theme", generator);
    const providerGenerator = providerGeneratorFunc == null ? void 0 : providerGeneratorFunc(theme);
    css2 = convertCssNestedVariables(providerGenerator, cssVariablesSelector);
  }
  if (css) {
    return /* @__PURE__ */ import_react.default.createElement(
      "style",
      {
        "data-raikou-styles": "system",
        nonce: nonce == null ? void 0 : nonce(),
        dangerouslySetInnerHTML: {
          __html: `${css}${css2}${shouldCleanVariables ? "" : getColorSchemeCssVariables2(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
RaikouCssVariables.displayName = "@raikou/CssVariables";

// src/core/RaikouProvider/RaikouClasses/RaikouClasses.tsx
var import_react2 = __toESM(require("react"));
function RaikouClasses({ theme, nonce }) {
  const classes = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    const pxValue = px(theme.breakpoints[breakpoint]);
    return `${acc}@media (max-width: ${em(
      pxValue - 0.1
    )}) {.raikou-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${em(
      pxValue
    )}) {.raikou-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ import_react2.default.createElement(
    "style",
    {
      "data-raikou-styles": "classes",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: classes }
    }
  );
}

// src/core/RaikouProvider/RaikouProvider.tsx
var import_global_store = __toESM(require("@raikou/global-store"));
suppressNextjsWarning();
function RaikouProvider({
  theme,
  defaultColorScheme,
  cssVariablesSelector = ":root",
  withCssVariables = true,
  getStyleNonce,
  cssVariablesResolver,
  themeStorageKey = "raikou-color-scheme",
  children
}) {
  let mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);
  if (theme === void 0 || theme && !theme.hasOwnProperty("colors")) {
    mergedTheme.colors = {
      blue: [
        "#eef3ff",
        "#dce4f5",
        "#b9c7e2",
        "#94a8d0",
        "#748dc1",
        "#5f7cb8",
        "#5474b4",
        "#44639f",
        "#39588f",
        "#2d4b81"
      ]
    };
  }
  if (typeof window !== "undefined") {
    window["raikou_theme"] = theme;
  } else {
    import_global_store.default.setState(theme);
  }
  return /* @__PURE__ */ import_react3.default.createElement(
    import_next_themes2.ThemeProvider,
    {
      storageKey: themeStorageKey,
      themes: ["light", "dark"],
      attribute: `data-${themeStorageKey}`,
      enableColorScheme: false,
      forcedTheme: defaultColorScheme ? defaultColorScheme : void 0
    },
    withCssVariables && /* @__PURE__ */ import_react3.default.createElement(
      RaikouCssVariables,
      {
        theme: mergedTheme,
        cssVariablesSelector,
        getStyleNonce,
        cssVariablesResolver
      }
    ),
    /* @__PURE__ */ import_react3.default.createElement(RaikouClasses, { theme: mergedTheme, nonce: getStyleNonce }),
    children
  );
}

// src/core/DirectionProvider/DirectionProvider.tsx
var import_react5 = __toESM(require("react"));

// src/core/DirectionProvider/use-isomorphic-effect.ts
var import_react4 = require("react");
var useIsomorphicEffect = typeof document !== "undefined" ? import_react4.useLayoutEffect : import_react4.useEffect;

// src/core/DirectionProvider/DirectionProvider.tsx
var DirectionContext = (0, import_react5.createContext)({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function useDirection() {
  return (0, import_react5.useContext)(DirectionContext);
}
function DirectionProvider({
  children,
  initialDirection = "ltr",
  detectDirection = true
}) {
  const [dir, setDir] = (0, import_react5.useState)(initialDirection);
  const setDirection = (direction) => {
    setDir(direction);
    document.documentElement.setAttribute("dir", direction);
  };
  const toggleDirection = () => setDirection(dir === "ltr" ? "rtl" : "ltr");
  useIsomorphicEffect(() => {
    if (detectDirection) {
      const direction = document.documentElement.getAttribute("dir");
      if (direction === "rtl" || direction === "ltr") {
        setDirection(direction);
      }
    }
  }, []);
  return /* @__PURE__ */ import_react5.default.createElement(DirectionContext.Provider, { value: { dir, toggleDirection, setDirection } }, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_THEME,
  DirectionContext,
  DirectionProvider,
  RaikouProvider,
  convertCssVariables,
  createCSSVariables,
  darken,
  deepMerge,
  defaultCssVariablesResolver,
  defaultVariantColorsResolver,
  em,
  getGradient,
  getPrimaryShade,
  getThemeColor,
  isLightColor,
  keys,
  lighten,
  mergeRaikouTheme,
  parseThemeColor,
  px,
  rem,
  rgba,
  toRgba,
  useColorScheme,
  useDirection,
  validateRaikouTheme
});
