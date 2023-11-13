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

// src/Dial.tsx
import React, { useRef } from "react";
import {
  Box,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  getSize
} from "@raikou/core";
import { useMergedRef } from "@raikou/hooks";
var defaultProps = {
  scale: 1
};
var varsResolver = createVarsResolver(
  (_, { size, scale, value: angle }) => {
    return {
      root: {
        "--dial-size": getSize(size, "dial-size"),
        "--dial-scale": scale,
        "--dial-angle": `${angle}deg`
      }
    };
  }
);
var Dial = polymorphicFactory((_props, ref) => {
  const props = useProps("Dial", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    value,
    scale,
    onChange
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "value",
    "scale",
    "onChange"
  ]);
  const getStyles = useStyles({
    name: "Dial",
    props,
    classes: {
      root: "dial-root",
      inner: "dial-inner",
      handle: "dial-handle"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const dialRef = useRef(null);
  const mergedRef = useMergedRef(dialRef, ref);
  let mouseValues = {
    wheelCenter: 0,
    moveX: 0,
    moveY: 0
  };
  const onMouseUp = (e) => {
    removeListeners();
    onMouseMove(e);
  };
  const onMouseMove = (e) => {
    const { pageX, pageY } = e;
    const { moveX, moveY, wheelCenter } = mouseValues;
    const posX = pageX - moveX - window.scrollX;
    const posY = pageY - moveY - window.scrollY;
    let value2 = Math.atan2(posY - wheelCenter, posX - wheelCenter) * (180 / Math.PI) + 90;
    if (value2 < 0)
      value2 += 360;
    value2 = Math.max(0, Math.min(360, Math.round(value2)));
    const { onChange: onChange2 } = props;
    onChange2(value2);
  };
  const onMouseDown = (e) => {
    e.preventDefault();
    const div = dialRef.current;
    const rect = div.getBoundingClientRect();
    const { top, left, width } = rect;
    mouseValues = {
      wheelCenter: width * 0.5 + 5,
      moveX: left,
      moveY: top
    };
    onMouseMove(e);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseUp);
    document.addEventListener("mouseup", onMouseUp);
  };
  const removeListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseleave", onMouseUp);
    document.removeEventListener("mouseup", onMouseUp);
  };
  return /* @__PURE__ */ React.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({
      component: "span",
      ref: mergedRef
    }, getStyles("root")), {
      onMouseDown,
      onKeyDown: () => {
      },
      role: "button",
      tabIndex: 0
    }), others),
    /* @__PURE__ */ React.createElement(Box, __spreadValues({ component: "span" }, getStyles("inner")), /* @__PURE__ */ React.createElement(Box, __spreadValues({ component: "span" }, getStyles("handle"))))
  );
});
Dial.displayName = "@raikou/Dial";
export {
  Dial
};
