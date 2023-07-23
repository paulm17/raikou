"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// src/postcss-rem-em.ts
var require_postcss_rem_em = __commonJS({
  "src/postcss-rem-em.ts"(exports, module2) {
    "use strict";
    function scaleRem(remValue) {
      return `calc(${remValue} * var(--raikou-scale))`;
    }
    function createConverter(units, { shouldScale = false } = {}) {
      return (value) => {
        if (typeof value === "number") {
          const val = `${value / 16}${units}`;
          return shouldScale ? scaleRem(val) : val;
        }
        if (typeof value === "string") {
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
    var remNoScale = createConverter("rem");
    var em = createConverter("em");
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
            (_, values) => rem(values)
          );
          root.replaceValues(emRegExp, { fast: `em(` }, (_, values) => em(values));
        },
        AtRule: {
          media: (atRule) => {
            atRule.params = atRule.params.replace(
              remRegExp,
              (value) => remNoScale(value.replace(/rem\((.*?)\)/g, "$1"))
            ).replace(emRegExp, (value) => em(value.replace(/em\((.*?)\)/g, "$1")));
          }
        }
      };
    };
    module2.exports.postcss = true;
  }
});

// src/postcss-light-dark.ts
var require_postcss_light_dark = __commonJS({
  "src/postcss-light-dark.ts"(exports, module2) {
    "use strict";
    var import_postcss2 = require("postcss");
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
            const { value, prop } = decl;
            const regex = /\blight-dark\b/;
            if (regex.test(value)) {
              const { light: lightVal, dark: darkVal } = getLightDarkValue(value);
              const darkMixin = (0, import_postcss2.atRule)({ name: "mixin", params: "dark" });
              darkMixin.append((0, import_postcss2.decl)({ prop, value: darkVal }));
              decl.parent?.insertAfter(decl, darkMixin);
              decl.parent?.insertAfter(decl, (0, import_postcss2.decl)({ prop, value: lightVal }));
              decl.remove();
            }
          });
        }
      };
    };
    module2.exports.postcss = true;
  }
});

// src/preset.ts
var require_preset = __commonJS({
  "src/preset.ts"(exports, module2) {
    "use strict";
    var nested = require("postcss-nested");
    var mixins = require("postcss-mixins");
    var remEm = require_postcss_rem_em();
    var lightDark = require_postcss_light_dark();
    function colorSchemeMixin(colorScheme) {
      return {
        [`[data-raikou-color-scheme='${colorScheme}'] &`]: {
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
    var notRtlMixin = {
      ':root:not([dir="rtl"]) &': {
        "@mixin-content": {}
      }
    };
    module2.exports = () => {
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
              hover: hoverMixin,
              rtl: rtlMixin,
              "not-rtl": notRtlMixin
            }
          })
        ]
      };
    };
    module2.exports.postcss = true;
  }
});

// src/tests/utils.ts
var import_postcss = __toESM(require("postcss"));
var preset = require_preset();
function testTransform(input) {
  return (0, import_postcss.default)([preset]).process(input, { from: void 0 });
}

// src/tests/mixin-rtl.test.ts
var baseInput = `
.demo {
  @mixin rtl {
    margin-right: 1rem;
  }

  @mixin not-rtl {
    margin-left: 1rem;
  }
}
`;
describe("mixin-rtl", () => {
  it("transforms rtl mixins correctly", async () => {
    const res = await testTransform(baseInput);
    expect(res.css).toMatchSnapshot();
  });
});
