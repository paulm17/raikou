import {
  rem
} from "./chunk-T4QKJGPD.mjs";
import "./chunk-TOPM6CMB.mjs";

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

// src/plugin.ts
function genMargin(type, px) {
  let value = "";
  if (type === "px") {
    value = px[2].replace("[", "").replace("]", "");
  } else if (type === "rem") {
    const baseFontSize = 16;
    value = `${parseInt(px[2]) * baseFontSize}px`;
  }
  const margins = {
    m: "margin",
    ml: "margin-left",
    mr: "margin-right",
    mt: "margin-top",
    mb: "margin-bottom"
  };
  const name = px[1];
  if (Object.keys(margins).includes(name)) {
    return { [margins[name]]: rem(value) };
  } else if (name === "mx") {
    return { "margin-left": rem(value), "margin-right": rem(value) };
  } else if (name === "my") {
    return { "margin-top": rem(value), "margin-bottom": rem(value) };
  }
}
function genPadding(type, px) {
  let value = "";
  if (type === "px") {
    value = px[2].replace("[", "").replace("]", "");
  } else if (type === "rem") {
    const baseFontSize = 16;
    value = `${parseInt(px[2]) * baseFontSize}px`;
  }
  const paddings = {
    p: "padding",
    pl: "padding-left",
    pr: "padding-right",
    pt: "padding-top",
    pb: "padding-bottom"
  };
  const name = px[1];
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
            const px = name.match(/(m|ml|mr|mt|mb|mx|my)?-(.+)/);
            if (px && px.length === 3) {
              return genMargin("px", px);
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
            const px = name.match(/(p|pl|pr|pt|pb|px|py)?-(.+)/);
            if (px && px.length === 3) {
              return genPadding("px", px);
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
export {
  plugin_default as default
};
