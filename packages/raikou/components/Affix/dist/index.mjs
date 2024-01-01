var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/Affix.tsx
import React4 from "react";
import {
  Box,
  factory,
  useProps as useProps2,
  useStyles,
  createVarsResolver,
  getDefaultZIndex,
  rem
} from "@raikou/core";

// ../Portal/src/Portal.tsx
import React2, { useRef as useRef26, useState as useState32, forwardRef } from "react";
import { createPortal } from "react-dom";

// ../../hooks/dist/index.mjs
import { useRef, useEffect, useMemo } from "react";
import { useRef as useRef2, useEffect as useEffect2, useCallback } from "react";
import { useEffect as useEffect3, useRef as useRef3 } from "react";
import { useState } from "react";
import { useState as useState2, useEffect as useEffect4, useRef as useRef4 } from "react";
import { useState as useState3 } from "react";
import { useEffect as useEffect5, useRef as useRef5, useState as useState4, useCallback as useCallback2 } from "react";
import { useEffect as useEffect6, useState as useState5, useRef as useRef6 } from "react";
import { useEffect as useEffect7, useLayoutEffect } from "react";
import { useEffect as useEffect8, useState as useState6 } from "react";
import { useRef as useRef8 } from "react";
import { useEffect as useEffect9, useRef as useRef7 } from "react";
import { useCallback as useCallback3, useEffect as useEffect10, useRef as useRef9 } from "react";
import { useReducer } from "react";
import { useState as useState7 } from "react";
import React from "react";
import { useState as useState8, useEffect as useEffect11, useRef as useRef10 } from "react";
import { useEffect as useEffect12, useRef as useRef11, useState as useState9 } from "react";
import { useState as useState10 } from "react";
import { useState as useState11, useCallback as useCallback4, useEffect as useEffect14 } from "react";
import { useEffect as useEffect13 } from "react";
import { useCallback as useCallback5 } from "react";
import { useEffect as useEffect15, useRef as useRef12, useState as useState12 } from "react";
import { useEffect as useEffect16, useState as useState13, useRef as useRef13 } from "react";
import { useMemo as useMemo2 } from "react";
import { useState as useState14 } from "react";
import { useState as useState15 } from "react";
import { useEffect as useEffect17 } from "react";
import { useCallback as useCallback6, useRef as useRef14, useEffect as useEffect18 } from "react";
import { useEffect as useEffect19, useMemo as useMemo3, useRef as useRef15, useState as useState16 } from "react";
import { useEffect as useEffect20, useRef as useRef16 } from "react";
import { useReducer as useReducer2 } from "react";
import { useCallback as useCallback7, useState as useState17, useEffect as useEffect21 } from "react";
import { useState as useState18, useEffect as useEffect22 } from "react";
import { useCallback as useCallback8, useRef as useRef17, useState as useState19 } from "react";
import { useState as useState20, useEffect as useEffect23 } from "react";
import { useEffect as useEffect24 } from "react";
import { useCallback as useCallback9, useRef as useRef18, useState as useState21, useEffect as useEffect25 } from "react";
import { useEffect as useEffect26 } from "react";
import { useState as useState22, useEffect as useEffect27, useRef as useRef19, useCallback as useCallback10 } from "react";
import { useState as useState23 } from "react";
import { useState as useState24 } from "react";
import { useState as useState25, useCallback as useCallback11 } from "react";
import { useState as useState26 } from "react";
import { useRef as useRef20, useEffect as useEffect28 } from "react";
import { useState as useState27, useCallback as useCallback12 } from "react";
import { useRef as useRef21, useState as useState28, useEffect as useEffect29 } from "react";
import { useState as useState29, useEffect as useEffect30, useCallback as useCallback13 } from "react";
import { useRef as useRef22, useEffect as useEffect31, useCallback as useCallback14 } from "react";
import { useState as useState30, useEffect as useEffect32 } from "react";
import { useEffect as useEffect33, useRef as useRef23 } from "react";
import { useRef as useRef24 } from "react";
import { useRef as useRef25 } from "react";
import { useCallback as useCallback15, useState as useState31 } from "react";
var useIsomorphicEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect7;
var __useId = React["useId".toString()] || (() => void 0);
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}

// ../Portal/src/Portal.tsx
import { useProps } from "@raikou/core";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps = {};
var Portal = forwardRef((props, ref) => {
  const _a = useProps(
    "Portal",
    defaultProps,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = useState32(false);
  const nodeRef = useRef26(null);
  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    assignRef(ref, nodeRef.current);
    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return createPortal(/* @__PURE__ */ React2.createElement(React2.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../Portal/src/OptionalPortal.tsx
import React3 from "react";
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ React3.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// css-module:./Affix.module.css#css-module
var Affix_module_default = { "root": "m-7f854edf" };

// src/Affix.tsx
var defaultProps2 = {
  position: { bottom: 0, right: 0 },
  zIndex: getDefaultZIndex("modal"),
  withinPortal: true
};
var varsResolver = createVarsResolver(
  (_, { zIndex, position }) => ({
    root: {
      "--affix-z-index": zIndex == null ? void 0 : zIndex.toString(),
      "--affix-top": rem(position == null ? void 0 : position.top),
      "--affix-left": rem(position == null ? void 0 : position.left),
      "--affix-bottom": rem(position == null ? void 0 : position.bottom),
      "--affix-right": rem(position == null ? void 0 : position.right)
    }
  })
);
var Affix = factory((_props, ref) => {
  const props = useProps2("Affix", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    portalProps,
    zIndex,
    withinPortal,
    position
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "portalProps",
    "zIndex",
    "withinPortal",
    "position"
  ]);
  const getStyles = useStyles({
    name: "Affix",
    classes: Affix_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React4.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React4.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("root")), others)));
});
Affix.displayName = "@raikou/core/Affix";
Affix.classes = Affix_module_default;
export {
  Affix
};
//# sourceMappingURL=index.mjs.map