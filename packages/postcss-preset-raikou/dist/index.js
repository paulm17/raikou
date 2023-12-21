"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/converters.ts
var require_converters = __commonJS({
  "src/converters.ts"(exports2, module2) {
    "use strict";
    function scaleRem(remValue) {
      return `calc(${remValue} * var(--raikou-scale))`;
    }
    function createConverter(units, { shouldScale = false } = {}) {
      function converter(value) {
        if (value === 0 || value === "0") {
          return "0";
        }
        if (typeof value === "number") {
          const val = `${value / 16}${units}`;
          return shouldScale ? scaleRem(val) : val;
        }
        if (typeof value === "string") {
          if (value.startsWith("calc(") || value.startsWith("var(")) {
            return value;
          }
          if (value.includes(" ")) {
            return value.split(" ").map((val) => converter(val)).join(" ");
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
      }
      return converter;
    }
    var rem = createConverter("rem", { shouldScale: true });
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
          root.replaceValues(remRegExp, { fast: `rem(` }, (_, values) => converters2.rem(values));
          root.replaceValues(emRegExp, { fast: `em(` }, (_, values) => converters2.em(values));
        },
        AtRule: {
          media: (atRule) => {
            atRule.params = atRule.params.replace(
              remRegExp,
              (value) => converters2.remNoScale(value.replace(/rem\((.*?)\)/g, "$1"))
            ).replace(emRegExp, (value) => converters2.em(value.replace(/em\((.*?)\)/g, "$1")));
          }
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

// src/index.ts
var nested = require("postcss-nested");
var mixins = require("postcss-mixins");
var remEm = require_postcss_rem_em();
var lightDark = require_postcss_light_dark();
var converters = require_converters();
function colorSchemeMixin(colorScheme) {
  return {
    [`[data-raikou-color-scheme='${colorScheme}'] &`]: {
      "@mixin-content": {}
    }
  };
}
function rootColorSchemeMixin(colorScheme) {
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
module.exports = () => {
  return {
    postcssPlugin: "postcss-preset-raikou",
    plugins: [
      lightDark(),
      nested(),
      remEm(),
      mixins({
        mixins: {
          light: colorSchemeMixin("light"),
          dark: colorSchemeMixin("dark"),
          "light-root": rootColorSchemeMixin("light"),
          "dark-root": rootColorSchemeMixin("dark"),
          hover: hoverMixin,
          rtl: rtlMixin,
          ltr: ltrMixin,
          "not-rtl": notRtlMixin,
          "not-ltr": notLtrMixin,
          "smaller-than": smallerThanMixin,
          "larger-than": largerThanMixin
        }
      })
    ]
  };
};
module.exports.postcss = true;
