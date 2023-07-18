import {
  require_postcss_light_dark
} from "./chunk-DN5TLACA.mjs";
import {
  require_postcss_rem_em
} from "./chunk-LYL6R3KZ.mjs";
import {
  __commonJS,
  __require
} from "./chunk-TLYAXJ7N.mjs";

// src/preset.ts
var require_preset = __commonJS({
  "src/preset.ts"(exports, module) {
    var nested = __require("postcss-nested");
    var mixins = __require("postcss-mixins");
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
              hover: hoverMixin,
              rtl: rtlMixin,
              "not-rtl": notRtlMixin
            }
          })
        ]
      };
    };
    module.exports.postcss = true;
  }
});

export {
  require_preset
};
