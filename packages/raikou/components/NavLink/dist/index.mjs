var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/NavLink.tsx
import React5 from "react";
import { useUncontrolled } from "@raikou/hooks";
import {
  Box as Box3,
  polymorphicFactory as polymorphicFactory2,
  useProps as useProps3,
  useStyles as useStyles2,
  createVarsResolver,
  getSpacing
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React from "react";
import {
  Box,
  useProps,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps, _props);
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
    const getStyles = useStyles({
      name: __staticSelector,
      props,
      classes: {
        root: "unstyled-button-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React.createElement(
      Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../Accordion/src/AccordionChevron.tsx
import React2 from "react";
import { rem } from "@raikou/core";
function AccordionChevron(_a) {
  var _b = _a, {
    style,
    size = 16
  } = _b, others = __objRest(_b, [
    "style",
    "size"
  ]);
  return /* @__PURE__ */ React2.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadProps(__spreadValues({}, style), {
        width: rem(size),
        height: rem(size),
        display: "block"
      })
    }, others),
    /* @__PURE__ */ React2.createElement(
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
import React4, { forwardRef } from "react";
import { useReducedMotion } from "@raikou/hooks";
import {
  useProps as useProps2,
  Box as Box2,
  getStyleObject,
  useRaikouTheme
} from "@raikou/core";

// ../Collapse/src/use-collapse.ts
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { useDidUpdate, mergeRefs } from "@raikou/hooks";
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
  const el = useRef(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    display: "none",
    height: 0,
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = useState(
    opened ? {} : collapsedStyles
  );
  const setStyles = (newStyles) => {
    flushSync(() => setStylesRaw(newStyles));
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
  useDidUpdate(() => {
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
      [refKey]: mergeRefs(el, theirRef),
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
var Collapse = forwardRef(
  (props, ref) => {
    const _a = useProps2("Collapse", defaultProps2, props), {
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
    const theme = useRaikouTheme();
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
    const duration = reduceMotion ? 0 : transitionDuration;
    const getCollapseProps = useCollapse({
      opened,
      transitionDuration: duration,
      transitionTimingFunction,
      onTransitionEnd
    });
    if (duration === 0) {
      return opened ? /* @__PURE__ */ React4.createElement(Box2, __spreadValues({}, others), children) : null;
    }
    return /* @__PURE__ */ React4.createElement(
      Box2,
      __spreadValues({}, getCollapseProps(__spreadValues({
        style: getStyleObject(style, theme),
        ref
      }, others))),
      /* @__PURE__ */ React4.createElement(
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
  }
);
Collapse.displayName = "@raikou/core/Collapse";

// src/NavLink.tsx
var defaultProps3 = {
  variant: "light",
  childrenOffset: "lg"
};
var varsResolver = createVarsResolver(
  (theme, { variant, color, childrenOffset }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant
    });
    return {
      root: {
        "--nl-bg": colors.background,
        "--nl-hover": colors.hover,
        "--nl-color": colors.color
      },
      children: {
        "--nl-offset": getSpacing(childrenOffset)
      }
    };
  }
);
var NavLink = polymorphicFactory2((_props, ref) => {
  const props = useProps3("NavLink", defaultProps3, _props);
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
  const getStyles = useStyles2({
    name: "NavLink",
    props,
    classes: {
      root: "navLink-root",
      section: "navLink-section",
      label: "navLink-label",
      body: "navLink-body",
      description: "navLink-description",
      children: "navLink-children",
      chevron: "navLink-chevron"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  const [_opened, setOpened] = useUncontrolled({
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
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      component: "a",
      ref,
      onClick: handleClick,
      unstyled,
      mod: { disabled, active, expanded: _opened }
    }), others),
    leftSection && /* @__PURE__ */ React5.createElement(
      Box3,
      __spreadProps(__spreadValues({
        component: "span"
      }, getStyles("section")), {
        mod: { position: "left" }
      }),
      leftSection
    ),
    /* @__PURE__ */ React5.createElement(Box3, __spreadProps(__spreadValues({}, getStyles("body")), { mod: { "no-wrap": noWrap } }), /* @__PURE__ */ React5.createElement(Box3, __spreadValues({ component: "span" }, getStyles("label")), label), /* @__PURE__ */ React5.createElement(Box3, __spreadValues({ component: "span", mod: { active } }, getStyles("description")), description)),
    (withChildren || rightSection) && /* @__PURE__ */ React5.createElement(
      Box3,
      __spreadProps(__spreadValues({}, getStyles("section")), {
        component: "span",
        mod: {
          rotate: _opened && !disableRightSectionRotation,
          position: "right"
        }
      }),
      withChildren ? rightSection || /* @__PURE__ */ React5.createElement(AccordionChevron, __spreadValues({}, getStyles("chevron"))) : rightSection
    )
  ), /* @__PURE__ */ React5.createElement(Collapse, { in: _opened }, /* @__PURE__ */ React5.createElement("div", __spreadValues({}, getStyles("children")), children)));
});
NavLink.displayName = "@raikou/core/NavLink";
export {
  NavLink
};
