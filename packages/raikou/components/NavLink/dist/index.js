"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
  NavLink: () => NavLink
});
module.exports = __toCommonJS(src_exports);

// src/NavLink.tsx
var import_react5 = __toESM(require("react"));
var import_hooks3 = require("@raikou/hooks");
var import_core4 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");

// css-module:./UnstyledButton.module.css#css-module
var UnstyledButton_module_default = { "root": "m-87cf2631" };

// ../UnstyledButton/src/UnstyledButton.tsx
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core.useProps)("UnstyledButton", defaultProps, _props);
    const _a = props, {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style
    } = _a, others = __objRest(_a, [
      "className",
      "component",
      "__staticSelector",
      "unstyled",
      "classNames",
      "styles",
      "style"
    ]);
    const getStyles = (0, import_core.useStyles)({
      name: __staticSelector,
      props,
      classes: UnstyledButton_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react.default.createElement(
      import_core.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";
UnstyledButton.classes = UnstyledButton_module_default;

// ../Accordion/src/AccordionChevron.tsx
var import_react2 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
function AccordionChevron(_a) {
  var _b = _a, {
    style,
    size = 16
  } = _b, others = __objRest(_b, [
    "style",
    "size"
  ]);
  return /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadProps(__spreadValues({}, style), {
        width: (0, import_core2.rem)(size),
        height: (0, import_core2.rem)(size),
        display: "block"
      })
    }, others),
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
AccordionChevron.displayName = "@raikou/core/AccordionChevron";

// ../Collapse/src/Collapse.tsx
var import_react4 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");
var import_core3 = require("@raikou/core");

// ../Collapse/src/use-collapse.ts
var import_react3 = require("react");
var import_react_dom = require("react-dom");
var import_hooks = require("@raikou/hooks");
function getAutoHeightDuration(height) {
  if (!height || typeof height === "string") {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * __pow(constant, 0.25) + constant / 5) * 10);
}
function getElementHeight(el) {
  return (el == null ? void 0 : el.current) ? el.current.scrollHeight : "auto";
}
var raf = typeof window !== "undefined" && window.requestAnimationFrame;
function useCollapse({
  transitionDuration,
  transitionTimingFunction = "ease",
  onTransitionEnd = () => {
  },
  opened
}) {
  const el = (0, import_react3.useRef)(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    display: "none",
    height: 0,
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = (0, import_react3.useState)(
    opened ? {} : collapsedStyles
  );
  const setStyles = (newStyles) => {
    (0, import_react_dom.flushSync)(() => setStylesRaw(newStyles));
  };
  const mergeStyles = (newStyles) => {
    setStyles((oldStyles) => __spreadValues(__spreadValues({}, oldStyles), newStyles));
  };
  function getTransitionStyles(height) {
    const _duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transition: `height ${_duration}ms ${transitionTimingFunction}`
    };
  }
  (0, import_hooks.useDidUpdate)(() => {
    if (typeof raf === "function") {
      if (opened) {
        raf(() => {
          mergeStyles({
            willChange: "height",
            display: "block",
            overflow: "hidden"
          });
          raf(() => {
            const height = getElementHeight(el);
            mergeStyles(__spreadProps(__spreadValues({}, getTransitionStyles(height)), { height }));
          });
        });
      } else {
        raf(() => {
          const height = getElementHeight(el);
          mergeStyles(__spreadProps(__spreadValues({}, getTransitionStyles(height)), {
            willChange: "height",
            height
          }));
          raf(
            () => mergeStyles({ height: collapsedHeight, overflow: "hidden" })
          );
        });
      }
    }
  }, [opened]);
  const handleTransitionEnd = (e) => {
    if (e.target !== el.current || e.propertyName !== "height") {
      return;
    }
    if (opened) {
      const height = getElementHeight(el);
      if (height === styles.height) {
        setStyles({});
      } else {
        mergeStyles({ height });
      }
      onTransitionEnd();
    } else if (styles.height === collapsedHeight) {
      setStyles(collapsedStyles);
      onTransitionEnd();
    }
  };
  function getCollapseProps(_a = {}) {
    var _b = _a, {
      style = {},
      refKey = "ref"
    } = _b, rest = __objRest(_b, [
      "style",
      "refKey"
    ]);
    const theirRef = rest[refKey];
    return __spreadProps(__spreadValues({
      "aria-hidden": !opened
    }, rest), {
      [refKey]: (0, import_hooks.mergeRefs)(el, theirRef),
      onTransitionEnd: handleTransitionEnd,
      style: __spreadValues(__spreadValues({ boxSizing: "border-box" }, style), styles)
    });
  }
  return getCollapseProps;
}

// ../Collapse/src/Collapse.tsx
var defaultProps2 = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true
};
var Collapse = (0, import_core3.factory)((props, ref) => {
  const _a = (0, import_core3.useProps)("Collapse", defaultProps2, props), {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity
  } = _a, others = __objRest(_a, [
    "children",
    "in",
    "transitionDuration",
    "transitionTimingFunction",
    "style",
    "onTransitionEnd",
    "animateOpacity"
  ]);
  const theme = (0, import_core3.useRaikouTheme)();
  const shouldReduceMotion = (0, import_hooks2.useReducedMotion)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const duration = reduceMotion ? 0 : transitionDuration;
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd
  });
  if (duration === 0) {
    return opened ? /* @__PURE__ */ import_react4.default.createElement(import_core3.Box, __spreadValues({}, others), children) : null;
  }
  return /* @__PURE__ */ import_react4.default.createElement(
    import_core3.Box,
    __spreadValues({}, getCollapseProps(__spreadValues({
      style: (0, import_core3.getStyleObject)(style, theme),
      ref
    }, others))),
    /* @__PURE__ */ import_react4.default.createElement(
      "div",
      {
        style: {
          opacity: opened || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : "none"
        }
      },
      children
    )
  );
});
Collapse.displayName = "@raikou/core/Collapse";

// css-module:./NavLink.module.css#css-module
var NavLink_module_default = { "root": "m-f0824112", "description": "m-57492dcc", "section": "m-690090b5", "label": "m-1f6ac4c4", "body": "m-f07af9d2", "children": "m-e17b862f", "chevron": "m-1fd8a00b" };

// src/NavLink.tsx
var defaultProps3 = {};
var varsResolver = (0, import_core4.createVarsResolver)(
  (theme, { variant, color, childrenOffset }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || "light"
    });
    return {
      root: {
        "--nl-bg": color || variant ? colors.background : void 0,
        "--nl-hover": color || variant ? colors.hover : void 0,
        "--nl-color": color || variant ? colors.color : void 0
      },
      children: {
        "--nl-offset": (0, import_core4.getSpacing)(childrenOffset)
      }
    };
  }
);
var NavLink = (0, import_core4.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core4.useProps)("NavLink", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    defaultOpened,
    onChange,
    children,
    onClick,
    active,
    disabled,
    leftSection,
    rightSection,
    label,
    description,
    disableRightSectionRotation,
    noWrap,
    childrenOffset
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "opened",
    "defaultOpened",
    "onChange",
    "children",
    "onClick",
    "active",
    "disabled",
    "leftSection",
    "rightSection",
    "label",
    "description",
    "disableRightSectionRotation",
    "noWrap",
    "childrenOffset"
  ]);
  const getStyles = (0, import_core4.useStyles)({
    name: "NavLink",
    props,
    classes: NavLink_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const [_opened, setOpened] = (0, import_hooks3.useUncontrolled)({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange
  });
  const withChildren = !!children;
  const handleClick = (event) => {
    if (withChildren) {
      event.preventDefault();
      onClick == null ? void 0 : onClick(event);
      setOpened(!_opened);
    } else {
      onClick == null ? void 0 : onClick(event);
    }
  };
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      component: "a",
      ref,
      onClick: handleClick,
      unstyled,
      mod: { disabled, active, expanded: _opened }
    }), others),
    leftSection && /* @__PURE__ */ import_react5.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      leftSection
    ),
    /* @__PURE__ */ import_react5.default.createElement(import_core4.Box, __spreadProps(__spreadValues({}, getStyles("body")), { mod: { "no-wrap": noWrap } }), /* @__PURE__ */ import_react5.default.createElement(import_core4.Box, __spreadValues({ component: "span" }, getStyles("label")), label), /* @__PURE__ */ import_react5.default.createElement(import_core4.Box, __spreadValues({ component: "span", mod: { active } }, getStyles("description")), description)),
    (withChildren || rightSection) && /* @__PURE__ */ import_react5.default.createElement(
      import_core4.Box,
      __spreadProps(__spreadValues({}, getStyles("section")), {
        component: "span",
        mod: {
          rotate: _opened && !disableRightSectionRotation,
          position: "right"
        }
      }),
      withChildren ? rightSection || /* @__PURE__ */ import_react5.default.createElement(AccordionChevron, __spreadValues({}, getStyles("chevron"))) : rightSection
    )
  ), /* @__PURE__ */ import_react5.default.createElement(Collapse, { in: _opened }, /* @__PURE__ */ import_react5.default.createElement("div", __spreadValues({}, getStyles("children")), children)));
});
NavLink.classes = NavLink_module_default;
NavLink.displayName = "@raikou/core/NavLink";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NavLink
});
//# sourceMappingURL=index.js.map