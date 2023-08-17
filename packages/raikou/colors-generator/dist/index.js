"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
  generateColors: () => generateColors,
  generateColorsMap: () => generateColorsMap
});
module.exports = __toCommonJS(src_exports);

// src/generate-colors.ts
var import_chroma_js = __toESM(require("chroma-js"));
var LIGHTNESS_MAP = [
  0.96,
  0.907,
  0.805,
  0.697,
  0.605,
  0.547,
  0.518,
  0.445,
  0.395,
  0.34
];
var SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32];
function getClosestLightness(colorObject) {
  const lightnessGoal = colorObject.get("hsl.l");
  return LIGHTNESS_MAP.reduce(
    (prev, curr) => Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal) ? curr : prev
  );
}
function generateColorsMap(color) {
  const colorObject = (0, import_chroma_js.default)(color);
  const closestLightness = getClosestLightness(colorObject);
  const baseColorIndex = LIGHTNESS_MAP.findIndex((l) => l === closestLightness);
  const colors = LIGHTNESS_MAP.map((l) => colorObject.set("hsl.l", l)).map((c) => (0, import_chroma_js.default)(c)).map((c, i) => {
    const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex];
    return saturationDelta >= 0 ? c.saturate(saturationDelta) : c.desaturate(saturationDelta * -1);
  });
  return { baseColorIndex, colors };
}
function generateColors(color) {
  return generateColorsMap(color).colors.map(
    (c) => c.hex()
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateColors,
  generateColorsMap
});
