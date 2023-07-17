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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  FocusTrap: () => FocusTrap
});
module.exports = __toCommonJS(src_exports);

// src/FocusTrap.tsx
var import_react = require("react");
var import_hooks = require("@raikou/hooks");
var import_core = require("@raikou/core");
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = (0, import_hooks.useFocusTrap)(active);
  const ref = (0, import_hooks.useMergedRef)(focusTrapRef, children == null ? void 0 : children.ref);
  if (!(0, import_core.isElement)(children)) {
    return children;
  }
  return (0, import_react.cloneElement)(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FocusTrap
});
