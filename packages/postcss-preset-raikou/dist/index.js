"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/converters.ts
var require_converters = __commonJS({
  "src/converters.ts"(exports2, module2) {
    "use strict";
    function scaleRem(remValue) {
      if (remValue === "0rem") {
        return "0rem";
      }
      return `calc(${remValue} * var(--raikou-scale))`;
    }
    function createConverter(units, { shouldScale = false, transformUnitLess = true } = {}) {
      function converter(value) {
        if ((value === 0 || value === "0") && transformUnitLess) {
          return `0${units}`;
        }
        if (typeof value === "number") {
          const val = `${value / 16}${units}`;
          return shouldScale ? scaleRem(val) : val;
        }
        if (typeof value === "string") {
          if (value.startsWith("calc(") || value.startsWith("clamp(") || value.includes("rgba(") || value.includes("var(") || value.includes("min(") || value.includes("max(") || value.includes("url(") || value.includes("linear-gradient(") || value.includes("radial-gradient(") || value.includes("repeating-linear-gradient(") || value.includes("repeating-radial-gradient(")) {
            return value;
          }
          if (value.includes(",")) {
            return value.split(",").map((val) => converter(val)).join(",");
          }
          if (value.includes(" ")) {
            return value.split(" ").map((val) => converter(val)).join(" ");
          }
          if (value.includes(units)) {
            return shouldScale ? scaleRem(value) : value;
          }
          const replaced = value.replace("px", "");
          if (replaced === value && !transformUnitLess) {
            return value;
          }
          if (!Number.isNaN(Number(replaced))) {
            const val = `${Number(replaced) / 16}${units}`;
            return shouldScale ? scaleRem(val) : val;
          }
        }
        return value;
      }
      return converter;
    }
    var rem = createConverter("rem", { shouldScale: true });
    var remStrict = createConverter("rem", {
      shouldScale: true,
      transformUnitLess: false
    });
    var remNoScale = createConverter("rem");
    var em = createConverter("em");
    function getTransformedScaledValue(value) {
      if (typeof value !== "string" || !value.includes("var(--raikou-scale)")) {
        return value;
      }
      return value.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim();
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
    module2.exports = {
      px,
      em,
      rem,
      remStrict,
      remNoScale
    };
  }
});

// src/postcss-rem-em.ts
var require_postcss_rem_em = __commonJS({
  "src/postcss-rem-em.ts"(exports2, module2) {
    "use strict";
    var converters2 = require_converters();
    var getRegExp = (units) => new RegExp("\\b" + units + "\\(([^()]+)\\)", "g");
    var emRegExp = getRegExp("em");
    var remRegExp = getRegExp("rem");
    module2.exports = () => {
      return {
        postcssPlugin: "postcss-rem-em",
        Once(root) {
          root.replaceValues(
            remRegExp,
            { fast: `rem(` },
            (_, values) => converters2.rem(values)
          );
          root.replaceValues(
            emRegExp,
            { fast: `em(` },
            (_, values) => converters2.em(values)
          );
        },
        AtRule: {
          media: (atRule) => {
            atRule.params = atRule.params.replace(
              remRegExp,
              (value) => converters2.remNoScale(value.replace(/rem\((.*?)\)/g, "$1"))
            ).replace(
              emRegExp,
              (value) => converters2.em(value.replace(/em\((.*?)\)/g, "$1"))
            );
          },
          container: (atRule) => {
            atRule.params = atRule.params.replace(
              remRegExp,
              (value) => converters2.remNoScale(value.replace(/rem\((.*?)\)/g, "$1"))
            ).replace(
              emRegExp,
              (value) => converters2.em(value.replace(/em\((.*?)\)/g, "$1"))
            );
          }
        }
      };
    };
    module2.exports.postcss = true;
  }
});

// src/postcss-color-mix.ts
var require_postcss_color_mix = __commonJS({
  "src/postcss-color-mix.ts"(exports2, module2) {
    "use strict";
    var getValueRegexp = (name) => new RegExp("\\b" + name + "\\(([^()]+)\\)", "g");
    var getVarRegexp = (name) => new RegExp("\\b" + name + "\\(([^()]*\\([^()]*\\)[^()]*)+\\)", "g");
    function replaceValues(root, fn, replace) {
      root.replaceValues(
        getValueRegexp(fn),
        { fast: `${fn}(` },
        (_, values) => replace(values)
      );
      root.replaceValues(
        getVarRegexp(fn),
        { fast: `${fn}(` },
        (_, values) => replace(values)
      );
    }
    function getParsedColor(input) {
      if (typeof input !== "string") {
        return null;
      }
      const color = input.trim();
      const lastCommaIndex = color.lastIndexOf(",");
      if (lastCommaIndex === -1) {
        return null;
      }
      const rawPayload = color.slice(lastCommaIndex + 1).trim();
      const payload = rawPayload.endsWith("%") ? Number(rawPayload.slice(0, -1)) / 100 : Number(color.slice(lastCommaIndex + 1));
      if (Number.isNaN(payload)) {
        return null;
      }
      return {
        color: color.slice(0, lastCommaIndex).trim(),
        payload: Math.max(0, Math.min(1, payload))
      };
    }
    function alpha(input) {
      const parsed = getParsedColor(input);
      if (!parsed) {
        return input;
      }
      if (parsed.payload === 1) {
        return parsed.color;
      }
      if (parsed.payload === 0) {
        return "transparent";
      }
      const mixPercentage = (1 - parsed.payload) * 100;
      return `color-mix(in srgb, ${parsed.color}, transparent ${mixPercentage}%)`;
    }
    function lighten(input) {
      const parsed = getParsedColor(input);
      if (!parsed) {
        return input;
      }
      return `color-mix(in srgb, ${parsed.color}, white ${parsed.payload * 100}%)`;
    }
    function darken(input) {
      const parsed = getParsedColor(input);
      if (!parsed) {
        return input;
      }
      return `color-mix(in srgb, ${parsed.color}, black ${parsed.payload * 100}%)`;
    }
    module2.exports = () => {
      return {
        postcssPlugin: "postcss-raikou-color-mix",
        Once(root) {
          replaceValues(root, "alpha", alpha);
          replaceValues(root, "lighten", lighten);
          replaceValues(root, "darken", darken);
        }
      };
    };
    module2.exports.postcss = true;
  }
});

// src/postcss-light-dark.ts
var require_postcss_light_dark = __commonJS({
  "src/postcss-light-dark.ts"(exports2, module2) {
    "use strict";
    var import_postcss = require("postcss");
    var FUNCTION = "light-dark(";
    function splitStringAtCharacter(character, search) {
      let characterIndex = 0;
      let openedParentheses = 0;
      while (characterIndex < search.length && (search[characterIndex] !== character || openedParentheses)) {
        if (search[characterIndex] === "(") {
          openedParentheses += 1;
        }
        if (search[characterIndex] === ")") {
          openedParentheses -= 1;
        }
        characterIndex += 1;
      }
      return [search.slice(0, characterIndex), search.slice(characterIndex + 1)];
    }
    function getLightDarkValue(value) {
      const [prefix, ...search] = value.split(FUNCTION);
      if (!search.length) {
        return { light: value, dark: value };
      }
      const [macro, suffix] = splitStringAtCharacter(")", search.join(FUNCTION));
      const [light, dark] = splitStringAtCharacter(",", macro);
      const parsedSuffix = getLightDarkValue(suffix);
      return {
        light: prefix + getLightDarkValue(light.trim()).light + parsedSuffix.light,
        dark: prefix + getLightDarkValue(dark.trim()).dark + parsedSuffix.dark
      };
    }
    module2.exports = () => {
      return {
        postcssPlugin: "postcss-light-dark",
        Once(root) {
          root.walkDecls((decl) => {
            const { value } = decl;
            const regex = /\blight-dark\b/;
            if (regex.test(value)) {
              const { light: lightVal, dark: darkVal } = getLightDarkValue(value);
              const darkMixin = (0, import_postcss.atRule)({ name: "mixin", params: "dark" });
              darkMixin.append(decl.clone({ value: darkVal }));
              decl.parent?.insertAfter(decl, darkMixin);
              decl.parent?.insertAfter(decl, decl.clone({ value: lightVal }));
              decl.remove();
            }
          });
        }
      };
    };
    module2.exports.postcss = true;
  }
});

// src/css-variables.ts
var css_variables_exports = {};
__export(css_variables_exports, {
  CSS_VARIABLES: () => CSS_VARIABLES
});
var CSS_VARIABLES;
var init_css_variables = __esm({
  "src/css-variables.ts"() {
    "use strict";
    CSS_VARIABLES = {
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
      "h6-lh": "var(--raikou-h6-line-height)"
    };
    module.exports = function getVariable(input) {
      const normalizedInput = input.trim().toLowerCase();
      if (CSS_VARIABLES[normalizedInput]) {
        return CSS_VARIABLES[normalizedInput];
      }
      if (normalizedInput.startsWith("spacing-")) {
        return `var(--raikou-spacing-${normalizedInput.replace("spacing-", "")})`;
      }
      if (normalizedInput.startsWith("font-size-") || normalizedInput.startsWith("fz-")) {
        return `var(--raikou-font-size-${normalizedInput.replace("font-size-", "").replace("fz-", "")})`;
      }
      if (normalizedInput.startsWith("breakpoint-")) {
        return `var(--raikou-breakpoint-${normalizedInput.replace(
          "breakpoint-",
          ""
        )})`;
      }
      if (normalizedInput.startsWith("shadow-")) {
        return `var(--raikou-shadow-${normalizedInput.replace("shadow-", "")})`;
      }
      if (normalizedInput.startsWith("line-height-") || normalizedInput.startsWith("lh-")) {
        return `var(--raikou-line-height-${normalizedInput.replace("line-height-", "").replace("lh-", "")})`;
      }
      if (normalizedInput.startsWith("radius-")) {
        return `var(--raikou-radius-${normalizedInput.replace("radius-", "")})`;
      }
      if (normalizedInput.startsWith("color-")) {
        return `var(--raikou-color-${normalizedInput.replace("color-", "")})`;
      }
      return input;
    };
  }
});

// src/postcss-raikou-theme.ts
var require_postcss_raikou_theme = __commonJS({
  "src/postcss-raikou-theme.ts"(exports2, module2) {
    "use strict";
    var getVariable2 = (init_css_variables(), __toCommonJS(css_variables_exports));
    var regexp = new RegExp("\\btheme\\(([^()]+)\\)", "g");
    module2.exports = () => {
      return {
        postcssPlugin: "postcss-raikou-theme",
        Once(root) {
          root.replaceValues(
            regexp,
            { fast: `theme(` },
            (_, values) => getVariable2(values)
          );
        }
      };
    };
    module2.exports.postcss = true;
  }
});

// src/auto-rem.ts
var require_auto_rem = __commonJS({
  "src/auto-rem.ts"(exports2, module2) {
    "use strict";
    var unitsConverters = require_converters();
    var rem = unitsConverters.remStrict;
    module2.exports = () => {
      return {
        postcssPlugin: "postcss-auto-rem",
        Declaration: (decl) => {
          if (!decl.value.includes("px")) {
            return;
          }
          if (decl.prop === "content") {
            return;
          }
          decl.value = rem(decl.value);
        }
      };
    };
    module2.exports.postcss = true;
  }
});

// src/index.ts
var nested = require("postcss-nested");
var mixins = require("postcss-mixins");
var remEm = require_postcss_rem_em();
var colorMixAlpha = require_postcss_color_mix();
var lightDark = require_postcss_light_dark();
var converters = require_converters();
var theme = require_postcss_raikou_theme();
var autorem = require_auto_rem();
function colorSchemeMixin(colorScheme, type = "default") {
  if (type === "where") {
    return {
      [`:where([data-raikou-color-scheme='${colorScheme}']) &`]: {
        "@mixin-content": {}
      }
    };
  }
  return {
    [`[data-raikou-color-scheme='${colorScheme}'] &`]: {
      "@mixin-content": {}
    }
  };
}
function rootColorSchemeMixin(colorScheme, type = "default") {
  if (type === "where") {
    return {
      [`&:where(:root[data-raikou-color-scheme='${colorScheme}'])`]: {
        "@mixin-content": {}
      }
    };
  }
  return {
    [`&[data-raikou-color-scheme='${colorScheme}']`]: {
      "@mixin-content": {}
    }
  };
}
var hoverMixin = {
  "@media (hover: hover)": {
    "&:hover": {
      "@mixin-content": {}
    }
  },
  "@media (hover: none)": {
    "&:active": {
      "@mixin-content": {}
    }
  }
};
var hoverWhereMixin = {
  "@media (hover: hover)": {
    "&:where(:hover)": {
      "@mixin-content": {}
    }
  },
  "@media (hover: none)": {
    "&:where(:active)": {
      "@mixin-content": {}
    }
  }
};
var rtlMixin = {
  '[dir="rtl"] &': {
    "@mixin-content": {}
  }
};
var ltrMixin = {
  '[dir="ltr"] &': {
    "@mixin-content": {}
  }
};
var notRtlMixin = {
  ':root:not([dir="rtl"]) &': {
    "@mixin-content": {}
  }
};
var notLtrMixin = {
  ':root:not([dir="ltr"]) &': {
    "@mixin-content": {}
  }
};
var rtlWhereMixin = {
  ':where([dir="rtl"]) &': {
    "@mixin-content": {}
  }
};
var ltrWhereMixin = {
  ':where([dir="ltr"]) &': {
    "@mixin-content": {}
  }
};
var notRtlWhereMixin = {
  ':where([dir="ltr"]) &': {
    "@mixin-content": {}
  }
};
var notLtrWhereMixin = {
  ':where([dir="ltr"]) &': {
    "@mixin-content": {}
  }
};
var smallerThanMixin = (_mixin, breakpoint) => ({
  [`@media (max-width: ${converters.em(converters.px(breakpoint) - 0.1)})`]: {
    "@mixin-content": {}
  }
});
var largerThanMixin = (_mixin, breakpoint) => ({
  [`@media (min-width: ${converters.em(breakpoint)})`]: {
    "@mixin-content": {}
  }
});
module.exports = (options = {}) => {
  const plugins = [];
  if (options.autoRem) {
    plugins.push(autorem());
  }
  return {
    postcssPlugin: "postcss-preset-raikou",
    plugins: [
      lightDark(),
      theme(),
      nested(),
      colorMixAlpha(),
      remEm(),
      ...plugins,
      mixins({
        mixins: {
          light: colorSchemeMixin("light"),
          dark: colorSchemeMixin("dark"),
          "light-root": rootColorSchemeMixin("light"),
          "dark-root": rootColorSchemeMixin("dark"),
          "where-light": colorSchemeMixin("light", "where"),
          "where-dark": colorSchemeMixin("dark", "where"),
          "where-light-root": rootColorSchemeMixin("light", "where"),
          "where-dark-root": rootColorSchemeMixin("dark", "where"),
          hover: hoverMixin,
          "where-hover": hoverWhereMixin,
          rtl: rtlMixin,
          ltr: ltrMixin,
          "not-rtl": notRtlMixin,
          "not-ltr": notLtrMixin,
          "where-rtl": rtlWhereMixin,
          "where-ltr": ltrWhereMixin,
          "where-not-rtl": notRtlWhereMixin,
          "where-not-ltr": notLtrWhereMixin,
          "smaller-than": smallerThanMixin,
          "larger-than": largerThanMixin,
          ...options.mixins || {}
        }
      })
    ]
  };
};
module.exports.postcss = true;
