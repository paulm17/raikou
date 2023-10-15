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

// src/Avatar.tsx
import React3, { useEffect, useState } from "react";
import {
  Box as Box2,
  polymorphicFactory,
  useProps as useProps2,
  useStyles as useStyles2,
  createVarsResolver as createVarsResolver2,
  getSize,
  getRadius
} from "@raikou/core";

// src/AvatarGroup/AvatarGroup.tsx
import React from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  getSpacing
} from "@raikou/core";

// src/AvatarGroup/AvatarGroup.context.ts
import { createContext, useContext } from "react";
var AvatarGroupContext = createContext(null);
var AvatarGroupProvider = AvatarGroupContext.Provider;
function useAvatarGroupContext() {
  const ctx = useContext(AvatarGroupContext);
  return { withinGroup: !!ctx };
}

// src/AvatarGroup/AvatarGroup.tsx
var defaultProps = {};
var varsResolver = createVarsResolver(
  (_, { spacing }) => ({
    group: {
      "--ag-spacing": getSpacing(spacing)
    }
  })
);
var AvatarGroup = factory((_props, ref) => {
  const props = useProps("AvatarGroup", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    spacing
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "spacing"
  ]);
  const getStyles = useStyles({
    name: "AvatarGroup",
    classes: {
      root: "avatarGroup-group"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "group"
  });
  return /* @__PURE__ */ React.createElement(AvatarGroupProvider, { value: true }, /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({ ref }, getStyles("group")), others)));
});
AvatarGroup.displayName = "@raikou/core/AvatarGroup";

// src/AvatarPlaceholderIcon.tsx
import React2 from "react";
function AvatarPlaceholderIcon(props) {
  return /* @__PURE__ */ React2.createElement(
    "svg",
    __spreadProps(__spreadValues({}, props), {
      "data-avatar-placeholder-icon": true,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }),
    /* @__PURE__ */ React2.createElement(
      "path",
      {
        d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}

// src/Avatar.tsx
var defaultProps2 = {};
var varsResolver2 = createVarsResolver2(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || "gray",
      theme,
      gradient,
      variant: variant || "light"
    });
    return {
      root: {
        "--avatar-size": getSize(size, "avatar-size"),
        "--avatar-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--avatar-bg": color || variant ? colors.background : void 0,
        "--avatar-color": color || variant ? colors.color : void 0,
        "--avatar-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var Avatar = polymorphicFactory((_props, ref) => {
  const props = useProps2("Avatar", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    src,
    alt,
    radius,
    color,
    gradient,
    imageProps,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "src",
    "alt",
    "radius",
    "color",
    "gradient",
    "imageProps",
    "children"
  ]);
  const ctx = useAvatarGroupContext();
  const [error, setError] = useState(!src);
  const getStyles = useStyles2({
    name: "Avatar",
    props,
    classes: {
      root: "avatar-root",
      placeholder: "avatar-placeholder",
      image: "avatar-image"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  useEffect(() => setError(!src), [src]);
  return /* @__PURE__ */ React3.createElement(
    Box2,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      mod: { "within-group": ctx.withinGroup },
      ref
    }), others),
    error ? /* @__PURE__ */ React3.createElement("span", __spreadProps(__spreadValues({}, getStyles("placeholder")), { title: alt }), children || /* @__PURE__ */ React3.createElement(AvatarPlaceholderIcon, null)) : /* @__PURE__ */ React3.createElement(
      "img",
      __spreadProps(__spreadValues(__spreadValues({}, imageProps), getStyles("image")), {
        src,
        alt,
        onError: (event) => {
          var _a2;
          setError(true);
          (_a2 = imageProps == null ? void 0 : imageProps.onError) == null ? void 0 : _a2.call(imageProps, event);
        }
      })
    )
  );
});
Avatar.displayName = "@raikou/core/Avatar";
Avatar.Group = AvatarGroup;
export {
  Avatar,
  AvatarGroup
};
