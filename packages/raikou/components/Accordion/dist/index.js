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
  Accordion: () => Accordion,
  AccordionChevron: () => AccordionChevron,
  AccordionControl: () => AccordionControl,
  AccordionItem: () => AccordionItem,
  AccordionPanel: () => AccordionPanel
});
module.exports = __toCommonJS(src_exports);

// src/Accordion.tsx
var import_react10 = __toESM(require("react"));
var import_hooks3 = require("@raikou/hooks");
var import_core7 = require("@raikou/core");

// src/AccordionChevron.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
function AccordionChevron(_a) {
  var _b = _a, {
    style,
    size = 16
  } = _b, others = __objRest(_b, [
    "style",
    "size"
  ]);
  return /* @__PURE__ */ import_react.default.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadProps(__spreadValues({}, style), {
        width: (0, import_core.rem)(size),
        height: (0, import_core.rem)(size),
        display: "block"
      })
    }, others),
    /* @__PURE__ */ import_react.default.createElement(
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
var import_react4 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react2 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react2.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react2.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react2.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react3 = __toESM(require("react"));

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
var AccordionItem = (0, import_core2.factory)((props, ref) => {
  const _a = (0, import_core2.useProps)("AccordionItem", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    value
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "value"
  ]);
  const ctx = useAccordionContext();
  return /* @__PURE__ */ import_react4.default.createElement(AccordionItemProvider, { value: { value } }, /* @__PURE__ */ import_react4.default.createElement(
    import_core2.Box,
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
var import_react7 = __toESM(require("react"));
var import_core4 = require("@raikou/core");

// ../Collapse/src/Collapse.tsx
var import_react6 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");
var import_core3 = require("@raikou/core");

// ../Collapse/src/use-collapse.ts
var import_react5 = require("react");
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
  const el = (0, import_react5.useRef)(null);
  const collapsedHeight = 0;
  const collapsedStyles = {
    display: "none",
    height: 0,
    overflow: "hidden"
  };
  const [styles, setStylesRaw] = (0, import_react5.useState)(
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
var Collapse = (0, import_react6.forwardRef)(
  (props, ref) => {
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
      return opened ? /* @__PURE__ */ import_react6.default.createElement(import_core3.Box, __spreadValues({}, others), children) : null;
    }
    return /* @__PURE__ */ import_react6.default.createElement(
      import_core3.Box,
      __spreadValues({}, getCollapseProps(__spreadValues({
        style: (0, import_core3.getStyleObject)(style, theme),
        ref
      }, others))),
      /* @__PURE__ */ import_react6.default.createElement(
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
var AccordionPanel = (0, import_core4.factory)((props, ref) => {
  const _a = (0, import_core4.useProps)("AccordionPanel", defaultProps3, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children"
  ]);
  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  return /* @__PURE__ */ import_react7.default.createElement(
    Collapse,
    __spreadProps(__spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("panel", { className, classNames, style, styles })), others), {
      in: ctx.isItemActive(value),
      transitionDuration: ctx.transitionDuration,
      role: "region",
      id: ctx.getRegionId(value),
      "aria-labelledby": ctx.getControlId(value)
    }),
    /* @__PURE__ */ import_react7.default.createElement("div", __spreadValues({}, ctx.getStyles("content", { classNames, styles })), children)
  );
});
AccordionPanel.displayName = "@raikou/core/AccordionPanel";

// src/AccordionControl/AccordionControl.tsx
var import_react9 = __toESM(require("react"));
var import_core6 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react8 = __toESM(require("react"));
var import_core5 = require("@raikou/core");
var defaultProps4 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core5.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core5.useProps)("UnstyledButton", defaultProps4, _props);
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
    const getStyles = (0, import_core5.useStyles)({
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
    return /* @__PURE__ */ import_react8.default.createElement(
      import_core5.Box,
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
var AccordionControl = (0, import_core6.factory)(
  (props, ref) => {
    const _a = (0, import_core6.useProps)("AccordionControl", defaultProps5, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
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
      "unstyled",
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
    const content = /* @__PURE__ */ import_react9.default.createElement(
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
        onKeyDown: (0, import_core6.createScopedKeydownHandler)({
          siblingSelector: "[data-accordion-control]",
          parentSelector: "[data-accordion]",
          activateOnFocus: false,
          loop: ctx.loop,
          orientation: "vertical",
          onKeyDown
        })
      }),
      /* @__PURE__ */ import_react9.default.createElement(
        import_core6.Box,
        __spreadValues({
          component: "span",
          mod: {
            rotate: !ctx.disableChevronRotation && isActive,
            position: ctx.chevronPosition
          }
        }, ctx.getStyles("chevron", { classNames, styles })),
        chevron || ctx.chevron
      ),
      /* @__PURE__ */ import_react9.default.createElement("span", __spreadValues({}, ctx.getStyles("label", { classNames, styles })), children),
      icon && /* @__PURE__ */ import_react9.default.createElement(
        import_core6.Box,
        __spreadValues({
          component: "span",
          mod: { "chevron-position": ctx.chevronPosition }
        }, ctx.getStyles("icon", { classNames, styles })),
        icon
      )
    );
    return shouldWrapWithHeading ? /* @__PURE__ */ import_react9.default.createElement(Heading, __spreadValues({}, ctx.getStyles("itemTitle", { classNames, styles })), content) : content;
  }
);
AccordionControl.displayName = "@raikou/core/AccordionControl";

// src/Accordion.tsx
var defaultProps6 = {
  multiple: false,
  disableChevronRotation: false,
  transitionDuration: 200,
  chevronPosition: "right",
  variant: "default",
  chevronSize: 15,
  chevron: /* @__PURE__ */ import_react10.default.createElement(AccordionChevron, null)
};
var varsResolver = (0, import_core7.createVarsResolver)(
  (_, { transitionDuration, chevronSize, radius }) => ({
    root: {
      "--accordion-transition-duration": `${transitionDuration}ms`,
      "--accordion-chevron-size": (0, import_core7.rem)(chevronSize),
      "--accordion-radius": (0, import_core7.getRadius)(radius)
    }
  })
);
function Accordion(_props) {
  const props = (0, import_core7.useProps)(
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
  const uid = (0, import_hooks3.useId)(id);
  const [_value, handleChange] = (0, import_hooks3.useUncontrolled)({
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
  const getStyles = (0, import_core7.useStyles)({
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
  return /* @__PURE__ */ import_react10.default.createElement(
    AccordionProvider,
    {
      value: {
        isItemActive,
        onChange: handleItemChange,
        getControlId: (0, import_core7.getSafeId)(
          `${uid}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: (0, import_core7.getSafeId)(
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
    /* @__PURE__ */ import_react10.default.createElement(import_core7.Box, __spreadProps(__spreadValues(__spreadValues({}, getStyles("root")), others), { variant, "data-accordion": true }), children)
  );
}
var extendAccordion = (c) => c;
Accordion.extend = extendAccordion;
Accordion.displayName = "@raikou/core/Accordion";
Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Control = AccordionControl;
Accordion.Chevron = AccordionChevron;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionChevron,
  AccordionControl,
  AccordionItem,
  AccordionPanel
});
