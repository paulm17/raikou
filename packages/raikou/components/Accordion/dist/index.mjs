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

// src/Accordion.tsx
import React10 from "react";
import { useId, useUncontrolled } from "@raikou/hooks";
import {
  Box as Box5,
  useProps as useProps6,
  useStyles as useStyles2,
  createVarsResolver,
  getSafeId,
  rem as rem2,
  getRadius
} from "@raikou/core";

// src/AccordionChevron.tsx
import React from "react";
import { rem } from "@raikou/core";
function AccordionChevron(_a) {
  var _b = _a, {
    style,
    size = 16
  } = _b, others = __objRest(_b, [
    "style",
    "size"
  ]);
  return /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement(
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

// src/AccordionItem/AccordionItem.tsx
import React4 from "react";
import {
  Box,
  factory,
  useProps
} from "@raikou/core";

// ../_utils/create-safe-context/create-safe-context.tsx
import React2, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React2.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
import React3, { createContext as createContext2, useContext as useContext2 } from "react";

// ../_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// src/Accordion.context.ts
var [AccordionProvider, useAccordionContext] = createSafeContext(
  "Accordion component was not found in the tree"
);

// src/AccordionItem.context.ts
var [AccordionItemProvider, useAccordionItemContext] = createSafeContext(
  "Accordion.Item component was not found in the tree"
);

// src/AccordionItem/AccordionItem.tsx
var defaultProps = {};
var AccordionItem = factory((props, ref) => {
  const _a = useProps("AccordionItem", defaultProps, props), { classNames, className, style, styles, vars, value } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "value"]);
  const ctx = useAccordionContext();
  return /* @__PURE__ */ React4.createElement(AccordionItemProvider, { value: { value } }, /* @__PURE__ */ React4.createElement(
    Box,
    __spreadValues(__spreadValues({
      ref,
      mod: { active: ctx.isItemActive(value) }
    }, ctx.getStyles("item", {
      className,
      classNames,
      styles,
      style,
      variant: ctx.variant
    })), others)
  ));
});
AccordionItem.displayName = "@raikou/core/AccordionItem";

// src/AccordionPanel/AccordionPanel.tsx
import React7 from "react";
import {
  factory as factory2,
  useProps as useProps3
} from "@raikou/core";

// ../Collapse/src/Collapse.tsx
import React6, { forwardRef } from "react";
import { useReducedMotion } from "@raikou/hooks";
import {
  useProps as useProps2,
  Box as Box2,
  getStyleObject,
  useRaikouTheme
} from "@raikou/core";

// ../Collapse/src/use-collapse.ts
import { useState as useState2, useRef } from "react";
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
  const [styles, setStylesRaw] = useState2(
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
      return opened ? /* @__PURE__ */ React6.createElement(Box2, __spreadValues({}, others), children) : null;
    }
    return /* @__PURE__ */ React6.createElement(
      Box2,
      __spreadValues({}, getCollapseProps(__spreadValues({
        style: getStyleObject(style, theme),
        ref
      }, others))),
      /* @__PURE__ */ React6.createElement(
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

// src/AccordionPanel/AccordionPanel.tsx
var defaultProps3 = {};
var AccordionPanel = factory2((props, ref) => {
  var _b;
  const _a = useProps3("AccordionPanel", defaultProps3, props), { classNames, className, style, styles, vars, children } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "children"]);
  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  return /* @__PURE__ */ React7.createElement(
    Collapse,
    __spreadProps(__spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("panel", { className, classNames, style, styles })), others), {
      in: ctx.isItemActive(value),
      transitionDuration: (_b = ctx.transitionDuration) != null ? _b : 200,
      role: "region",
      id: ctx.getRegionId(value),
      "aria-labelledby": ctx.getControlId(value)
    }),
    /* @__PURE__ */ React7.createElement("div", __spreadValues({}, ctx.getStyles("content", { classNames, styles })), children)
  );
});
AccordionPanel.displayName = "@raikou/core/AccordionPanel";

// src/AccordionControl/AccordionControl.tsx
import React9 from "react";
import {
  Box as Box4,
  factory as factory3,
  useProps as useProps5,
  createScopedKeydownHandler
} from "@raikou/core";

// ../UnstyledButton/src/UnstyledButton.tsx
import React8 from "react";
import {
  Box as Box3,
  useProps as useProps4,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
var defaultProps4 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps4("UnstyledButton", defaultProps4, _props);
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
        root: "unstyledButton-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React8.createElement(
      Box3,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// src/AccordionControl/AccordionControl.tsx
var defaultProps5 = {};
var AccordionControl = factory3(
  (props, ref) => {
    const _a = useProps5("AccordionControl", defaultProps5, props), {
      classNames,
      className,
      style,
      styles,
      vars,
      chevron,
      icon,
      onClick,
      onKeyDown,
      children,
      disabled
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "vars",
      "chevron",
      "icon",
      "onClick",
      "onKeyDown",
      "children",
      "disabled"
    ]);
    const { value } = useAccordionItemContext();
    const ctx = useAccordionContext();
    const isActive = ctx.isItemActive(value);
    const shouldWrapWithHeading = typeof ctx.order === "number";
    const Heading = `h${ctx.order}`;
    const content = /* @__PURE__ */ React9.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, others), ctx.getStyles("control", {
        className,
        classNames,
        style,
        styles,
        variant: ctx.variant
      })), {
        mod: [
          "accordion-control",
          {
            active: isActive,
            "chevron-position": ctx.chevronPosition,
            disabled
          }
        ],
        ref,
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          ctx.onChange(value);
        },
        type: "button",
        disabled,
        "aria-expanded": isActive,
        "aria-controls": ctx.getRegionId(value),
        id: ctx.getControlId(value),
        onKeyDown: createScopedKeydownHandler({
          siblingSelector: "[data-accordion-control]",
          parentSelector: "[data-accordion]",
          activateOnFocus: false,
          loop: ctx.loop,
          orientation: "vertical",
          onKeyDown
        })
      }),
      /* @__PURE__ */ React9.createElement(
        Box4,
        __spreadValues({
          component: "span",
          mod: {
            rotate: !ctx.disableChevronRotation && isActive,
            position: ctx.chevronPosition
          }
        }, ctx.getStyles("chevron", { classNames, styles })),
        chevron || ctx.chevron
      ),
      /* @__PURE__ */ React9.createElement("span", __spreadValues({}, ctx.getStyles("label", { classNames, styles })), children),
      icon && /* @__PURE__ */ React9.createElement(
        Box4,
        __spreadValues({
          component: "span",
          mod: { "chevron-position": ctx.chevronPosition }
        }, ctx.getStyles("icon", { classNames, styles })),
        icon
      )
    );
    return shouldWrapWithHeading ? /* @__PURE__ */ React9.createElement(Heading, __spreadValues({}, ctx.getStyles("itemTitle", { classNames, styles })), content) : content;
  }
);
AccordionControl.displayName = "@raikou/core/AccordionControl";

// src/Accordion.tsx
var defaultProps6 = {
  multiple: false,
  disableChevronRotation: false,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ React10.createElement(AccordionChevron, null)
};
var varsResolver = createVarsResolver(
  (_, { transitionDuration, chevronSize, radius }) => ({
    root: {
      "--accordion-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--accordion-chevron-size": chevronSize === void 0 ? void 0 : rem2(chevronSize),
      "--accordion-radius": radius === void 0 ? void 0 : getRadius(radius)
    }
  })
);
function Accordion(_props) {
  const props = useProps6(
    "Accordion",
    defaultProps6,
    _props
  );
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    id,
    loop,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    variant,
    radius
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "multiple",
    "value",
    "defaultValue",
    "onChange",
    "id",
    "loop",
    "transitionDuration",
    "disableChevronRotation",
    "chevronPosition",
    "chevronSize",
    "order",
    "chevron",
    "variant",
    "radius"
  ]);
  const uid = useId(id);
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange
  });
  const isItemActive = (itemValue) => Array.isArray(_value) ? _value.includes(itemValue) : itemValue === _value;
  const handleItemChange = (itemValue) => {
    const nextValue = Array.isArray(_value) ? _value.includes(itemValue) ? _value.filter((selectedValue) => selectedValue !== itemValue) : [..._value, itemValue] : itemValue === _value ? null : itemValue;
    handleChange(nextValue);
  };
  const getStyles = useStyles2({
    name: "Accordion",
    classes: {
      root: "accordion-root",
      content: "accordion-content",
      item: "accordion-item",
      panel: "accordion-panel",
      icon: "accordion-icon",
      chevron: "accordion-chevron",
      label: "accordion-label",
      itemTitle: "accordion-itemTitle",
      control: "accordion-control"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ React10.createElement(
    AccordionProvider,
    {
      value: {
        isItemActive,
        onChange: handleItemChange,
        getControlId: getSafeId(
          `${uid}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: getSafeId(
          `${uid}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration,
        disableChevronRotation,
        chevronPosition,
        order,
        chevron,
        loop,
        getStyles,
        variant
      }
    },
    /* @__PURE__ */ React10.createElement(Box5, __spreadProps(__spreadValues(__spreadValues({}, getStyles("root")), others), { variant, "data-accordion": true }), children)
  );
}
var extendAccordion = (c) => c;
Accordion.extend = extendAccordion;
Accordion.displayName = "@raikou/core/Accordion";
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Control = AccordionControl;
Accordion.Chevron = AccordionChevron;
export {
  Accordion,
  AccordionChevron,
  AccordionControl,
  AccordionItem,
  AccordionPanel
};
