"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/plugin.ts
var plugin_exports = {};
__export(plugin_exports, {
  default: () => plugin_default
});
module.exports = __toCommonJS(plugin_exports);

// ../../../node_modules/.pnpm/@unocss+core@0.56.5/node_modules/@unocss/core/dist/index.mjs
var LAYER_DEFAULT = "default";
var LAYER_PREFLIGHTS = "preflights";
var LAYER_SHORTCUTS = "shortcuts";
var LAYER_IMPORTS = "imports";
var DEFAULT_LAYERS = {
  [LAYER_IMPORTS]: -200,
  [LAYER_PREFLIGHTS]: -100,
  [LAYER_SHORTCUTS]: -10,
  [LAYER_DEFAULT]: 0
};
function definePreset(preset) {
  return preset;
}

// ../core/src/core/utils/units-converters/rem.ts
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
      if (value.startsWith("calc(") || value.startsWith("var(") || value.startsWith("clamp(")) {
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
var em = createConverter("em");

// src/plugin.ts
function genMargin(type, px2) {
  let value = "";
  if (type === "px") {
    value = px2[2].replace("[", "").replace("]", "");
  } else if (type === "rem") {
    const baseFontSize = 16;
    value = `${parseInt(px2[2]) * baseFontSize}px`;
  }
  const margins = {
    m: "margin",
    ml: "margin-left",
    mr: "margin-right",
    mt: "margin-top",
    mb: "margin-bottom"
  };
  const name = px2[1];
  if (Object.keys(margins).includes(name)) {
    return { [margins[name]]: rem(value) };
  } else if (name === "mx") {
    return { "margin-left": rem(value), "margin-right": rem(value) };
  } else if (name === "my") {
    return { "margin-top": rem(value), "margin-bottom": rem(value) };
  }
}
function genPadding(type, px2) {
  let value = "";
  if (type === "px") {
    value = px2[2].replace("[", "").replace("]", "");
  } else if (type === "rem") {
    const baseFontSize = 16;
    value = `${parseInt(px2[2]) * baseFontSize}px`;
  }
  const paddings = {
    p: "padding",
    pl: "padding-left",
    pr: "padding-right",
    pt: "padding-top",
    pb: "padding-bottom"
  };
  const name = px2[1];
  if (Object.keys(paddings).includes(name)) {
    return { [paddings[name]]: rem(value) };
  } else if (name === "mx") {
    return { "padding-left": rem(value), "padding-right": rem(value) };
  } else if (name === "my") {
    return { "padding-top": rem(value), "padding-bottom": rem(value) };
  }
}
var plugin_default = definePreset(() => {
  return {
    presets: [],
    // disable default preset
    rules: [
      [
        /^(m|ml|mr|mt|mb|mx|my)?-(.+)$/,
        ([name]) => {
          if (name.match(/(\[|\])/)) {
            const px2 = name.match(/(m|ml|mr|mt|mb|mx|my)?-(.+)/);
            if (px2 && px2.length === 3) {
              return genMargin("px", px2);
            }
          } else if (name.match(/\d+/)) {
            const res = name.match(/(m|ml|mr|mt|mb|mx|my)?-(.+)/);
            if (res) {
              return genMargin("rem", res);
            }
          }
        }
      ],
      [
        /^(p|pl|pr|pt|pb|px|py)?-(.+)$/,
        ([name]) => {
          if (name.match(/(\[|\])/)) {
            const px2 = name.match(/(p|pl|pr|pt|pb|px|py)?-(.+)/);
            if (px2 && px2.length === 3) {
              return genPadding("px", px2);
            }
          } else if (name.match(/\d+/)) {
            const res = name.match(/(p|pl|pr|pt|pb|px|py)?-(.+)/);
            if (res) {
              return genPadding("rem", res);
            }
          }
        }
      ]
    ]
  };
});
