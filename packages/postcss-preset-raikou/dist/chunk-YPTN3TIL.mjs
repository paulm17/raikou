import {
  require_preset
} from "./chunk-STEKIEGP.mjs";

// src/tests/utils.ts
import postcss from "postcss";
var preset = require_preset();
function testTransform(input) {
  return postcss([preset]).process(input, { from: void 0 });
}

export {
  testTransform
};
