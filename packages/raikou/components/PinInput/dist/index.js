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
  PinInput: () => PinInput
});
module.exports = __toCommonJS(src_exports);

// src/PinInput.tsx
var import_react13 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");
var import_core8 = require("@raikou/core");

// ../Group/src/Group.tsx
var import_react2 = __toESM(require("react"));
var import_core = require("@raikou/core");

// ../Group/src/filter-falsy-children/filter-falsy-children.ts
var import_react = require("react");
function filterFalsyChildren(children) {
  return import_react.Children.toArray(children).filter(Boolean);
}

// ../Group/src/Group.tsx
var defaultProps = {
  justify: "flex-start",
  align: "center",
  gap: "md",
  preventGrowOverflow: true
};
var varsResolver = (0, import_core.createVarsResolver)(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": (0, import_core.getSpacing)(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("Group", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "children",
    "gap",
    "align",
    "justify",
    "wrap",
    "grow",
    "preventGrowOverflow",
    "vars",
    "variant",
    "__size"
  ]);
  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const childWidth = `calc(${100 / childrenCount}% - (${(0, import_core.getSpacing)(
    gap
  )} - ${(0, import_core.getSpacing)(gap)} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles = (0, import_core.useStyles)({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: { root: "group-root" },
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react2.default.createElement(
    import_core.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      ref,
      variant,
      mod: { grow },
      size: __size
    }), others),
    filteredChildren
  );
});
Group.displayName = "@raikou/core/Group";

// ../Input/src/Input.tsx
var import_react12 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react3 = __toESM(require("react"));

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react4 = __toESM(require("react"));
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react4.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react4.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react4.default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../_utils/use-hovered/use-hovered.ts
var import_react5 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react6 = require("react");

// ../Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0
});

// ../Input/src/InputLabel/InputLabel.tsx
var import_react7 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {
  size: "sm",
  labelElement: "label"
};
var varsResolver2 = (0, import_core2.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core2.getFontSize)(size),
    "--input-asterisk-color": "var(--raikou-color-red-filled)"
  }
}));
var InputLabel = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("InputLabel", defaultProps2, _props);
  const _a = (0, import_core2.useProps)("InputLabel", defaultProps2, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "labelElement",
    "size",
    "required",
    "htmlFor",
    "onMouseDown",
    "children",
    "__staticSelector",
    "variant"
  ]);
  const _getStyles = (0, import_core2.useStyles)({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: {
      label: "inputWrapper-label",
      required: "inputWrapper-required"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: varsResolver2
  });
  const ctx = useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react7.default.createElement(
    import_core2.Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles("label")), {
      component: labelElement,
      variant,
      size,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: { required },
      onMouseDown: (event) => {
        onMouseDown == null ? void 0 : onMouseDown(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      }
    }), others),
    children,
    required && /* @__PURE__ */ import_react7.default.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../Input/src/InputError/InputError.tsx
var import_react8 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {
  size: "sm"
};
var varsResolver3 = (0, import_core3.createVarsResolver)((_, { size }) => ({
  error: {
    "--input-error-size": `calc(${(0, import_core3.getFontSize)(size)} - ${(0, import_core3.rem)(2)})`
  }
}));
var InputError = (0, import_core3.factory)((_props, ref) => {
  const props = (0, import_core3.useProps)("InputError", defaultProps3, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "__staticSelector",
    "variant"
  ]);
  const _getStyles = (0, import_core3.useStyles)({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: {
      error: "inputWrapper-error"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: varsResolver3
  });
  const ctx = useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react8.default.createElement(
    import_core3.Box,
    __spreadValues(__spreadValues({
      component: "p",
      ref,
      variant,
      size
    }, getStyles("error")), others)
  );
});
InputError.displayName = "@raikou/core/InputError";

// ../Input/src/InputDescription/InputDescription.tsx
var import_react9 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var defaultProps4 = {
  size: "sm"
};
var varsResolver4 = (0, import_core4.createVarsResolver)(
  (_, { size }) => ({
    description: {
      "--input-description-size": `calc(${(0, import_core4.getFontSize)(size)} - ${(0, import_core4.rem)(2)})`
    }
  })
);
var InputDescription = (0, import_core4.factory)(
  (_props, ref) => {
    const props = (0, import_core4.useProps)("InputDescription", defaultProps4, _props);
    const _a = (0, import_core4.useProps)("InputDescription", defaultProps4, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size,
      __staticSelector,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "size",
      "__staticSelector",
      "variant"
    ]);
    const ctx = useInputWrapperContext();
    const _getStyles = (0, import_core4.useStyles)({
      name: ["InputWrapper", __staticSelector],
      props,
      classes: {
        description: "inputWrapper-description"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "description",
      vars,
      varsResolver: varsResolver4
    });
    const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ import_react9.default.createElement(
      import_core4.Box,
      __spreadValues(__spreadValues({
        component: "p",
        ref,
        variant,
        size
      }, getStyles("description")), others)
    );
  }
);
InputDescription.displayName = "@raikou/core/InputDescription";

// ../Input/src/InputPlaceholder/InputPlaceholder.tsx
var import_react10 = __toESM(require("react"));
var import_core5 = require("@raikou/core");
var defaultProps5 = {};
var InputPlaceholder = (0, import_core5.factory)(
  (_props, ref) => {
    const props = (0, import_core5.useProps)("InputPlaceholder", defaultProps5, _props);
    const _a = (0, import_core5.useProps)("InputPlaceholder", defaultProps5, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      __staticSelector,
      variant
    } = _a, others = __objRest(_a, [
      "classNames",
      "className",
      "style",
      "styles",
      "unstyled",
      "vars",
      "__staticSelector",
      "variant"
    ]);
    const getStyles = (0, import_core5.useStyles)({
      name: ["InputPlaceholder", __staticSelector],
      props,
      classes: {
        placeholder: "input-placeholder"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "placeholder"
    });
    return /* @__PURE__ */ import_react10.default.createElement(
      import_core5.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("placeholder")), {
        component: "span",
        variant,
        ref
      }), others)
    );
  }
);
InputPlaceholder.displayName = "@raikou/core/InputPlaceholder";

// ../Input/src/InputWrapper/InputWrapper.tsx
var import_react11 = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core6 = require("@raikou/core");

// ../Input/src/InputWrapper/get-input-offsets/get-input-offsets.ts
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder[inputIndex - 1];
  const belowInput = inputWrapperOrder[inputIndex + 1];
  const offsetTop = hasDescription && aboveInput === "description" || hasError && aboveInput === "error";
  const offsetBottom = hasDescription && belowInput === "description" || hasError && belowInput === "error";
  return { offsetBottom, offsetTop };
}

// ../Input/src/InputWrapper/InputWrapper.tsx
var defaultProps6 = {
  labelElement: "label",
  size: "sm",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver5 = (0, import_core6.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core6.getFontSize)(size),
    "--input-asterisk-color": "var(--raikou-color-red-filled)"
  },
  error: {
    "--input-error-size": `calc(${(0, import_core6.getFontSize)(size)} - ${(0, import_core6.rem)(2)})`
  },
  description: {
    "--input-description-size": `calc(${(0, import_core6.getFontSize)(size)} - ${(0, import_core6.rem)(2)})`
  }
}));
var InputWrapper = (0, import_core6.factory)((_props, ref) => {
  const props = (0, import_core6.useProps)("InputWrapper", defaultProps6, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "size",
    "variant",
    "__staticSelector",
    "inputContainer",
    "inputWrapperOrder",
    "label",
    "error",
    "description",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "labelElement",
    "children",
    "withAsterisk",
    "id",
    "required",
    "__stylesApiProps"
  ]);
  const getStyles = (0, import_core6.useStyles)({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: {
      root: "inputWrapper-root",
      label: "inputWrapper-label",
      required: "inputWrapper-required",
      error: "inputWrapper-error",
      description: "inputWrapper-description"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5
  });
  const sharedProps = {
    size,
    variant,
    __staticSelector
  };
  const idBase = (0, import_hooks.useId)(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const _label = label && /* @__PURE__ */ import_react11.default.createElement(
    InputLabel,
    __spreadValues(__spreadValues({
      key: "label",
      labelElement,
      id: `${idBase}-label`,
      htmlFor: inputId,
      required: isRequired
    }, sharedProps), labelProps),
    label
  );
  const _description = hasDescription && /* @__PURE__ */ import_react11.default.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ import_react11.default.createElement(
    InputError,
    __spreadProps(__spreadValues(__spreadValues({}, errorProps), sharedProps), {
      size: (errorProps == null ? void 0 : errorProps.size) || sharedProps.size,
      key: "error",
      id: (errorProps == null ? void 0 : errorProps.id) || errorId
    }),
    error
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ import_react11.default.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ import_react11.default.createElement(
      import_core6.Box,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
      }, getStyles("root")), others),
      content
    )
  );
});
InputWrapper.displayName = "@raikou/core/InputWrapper";

// ../Input/src/Input.tsx
var defaultProps7 = {
  size: "sm",
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver6 = (0, import_core7.createVarsResolver)((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": (0, import_core7.getSize)(props.size, "input-height"),
    "--input-fz": (0, import_core7.getFontSize)(props.size),
    "--input-radius": (0, import_core7.getRadius)(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? (0, import_core7.rem)(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? (0, import_core7.rem)(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? (0, import_core7.getSize)(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = (0, import_core7.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core7.useProps)("Input", defaultProps7, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "required",
    "__staticSelector",
    "__stylesApiProps",
    "size",
    "wrapperProps",
    "error",
    "disabled",
    "leftSection",
    "leftSectionProps",
    "leftSectionWidth",
    "rightSection",
    "rightSectionProps",
    "rightSectionWidth",
    "rightSectionPointerEvents",
    "leftSectionPointerEvents",
    "variant",
    "vars",
    "pointer",
    "multiline",
    "radius",
    "id",
    "withAria",
    "withErrorStyles"
  ]);
  const { styleProps, rest } = (0, import_core7.extractStyleProps)(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = {
    offsetBottom: ctx == null ? void 0 : ctx.offsetBottom,
    offsetTop: ctx == null ? void 0 : ctx.offsetTop
  };
  const getStyles = (0, import_core7.useStyles)({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: {
      wrapper: "input-wrapper",
      input: "input-input",
      section: "input-section"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: varsResolver6
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx == null ? void 0 : ctx.describedBy,
    id: (ctx == null ? void 0 : ctx.inputId) || id
  } : {};
  return /* @__PURE__ */ import_react12.default.createElement(
    import_core7.Box,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, getStyles("wrapper")), styleProps), wrapperProps), {
      mod: {
        error: !!error && withErrorStyles,
        pointer,
        disabled,
        multiline,
        "data-with-right-section": !!rightSection,
        "data-with-left-section": !!leftSection
      },
      variant,
      size
    }),
    leftSection && /* @__PURE__ */ import_react12.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ import_react12.default.createElement(
      import_core7.Box,
      __spreadValues(__spreadProps(__spreadValues(__spreadValues({
        component: "input"
      }, rest), ariaAttributes), {
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant
      }), getStyles("input"))
    ),
    rightSection && /* @__PURE__ */ import_react12.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, rightSectionProps), {
        "data-position": "right"
      }), getStyles("section", {
        className: rightSectionProps == null ? void 0 : rightSectionProps.className,
        style: rightSectionProps == null ? void 0 : rightSectionProps.style
      })),
      rightSection
    )
  );
});
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.displayName = "@raikou/core/Input";

// src/create-pin-array/create-pin-array.ts
function createPinArray(length, value) {
  if (length < 1) {
    return [];
  }
  const values = new Array(length).fill("");
  if (value) {
    const splitted = value.trim().split("");
    for (let i = 0; i < Math.min(length, splitted.length); i += 1) {
      values[i] = splitted[i];
    }
  }
  return values;
}

// src/PinInput.tsx
var regex = {
  number: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i
};
var defaultProps8 = {
  size: "sm",
  gap: "sm",
  length: 4,
  manageFocus: true,
  oneTimeCode: true,
  placeholder: "\u25CB",
  type: "alphanumeric",
  ariaLabel: "PinInput"
};
var varsResolver7 = (0, import_core8.createVarsResolver)((_, { size }) => ({
  root: {
    "--pin-input-size": (0, import_core8.getSize)(size != null ? size : defaultProps8.size, "pin-input-size")
  }
}));
var PinInput = (0, import_core8.factory)((props, ref) => {
  const _a = (0, import_core8.useProps)("PinInput", defaultProps8, props), {
    name,
    form,
    className,
    value,
    defaultValue,
    variant,
    gap,
    style,
    size,
    classNames,
    styles,
    unstyled,
    length,
    onChange,
    onComplete,
    manageFocus,
    autoFocus,
    error,
    radius,
    disabled,
    oneTimeCode,
    placeholder,
    type,
    mask,
    readOnly,
    inputType,
    inputMode,
    ariaLabel,
    vars
  } = _a, others = __objRest(_a, [
    "name",
    "form",
    "className",
    "value",
    "defaultValue",
    "variant",
    "gap",
    "style",
    "size",
    "classNames",
    "styles",
    "unstyled",
    "length",
    "onChange",
    "onComplete",
    "manageFocus",
    "autoFocus",
    "error",
    "radius",
    "disabled",
    "oneTimeCode",
    "placeholder",
    "type",
    "mask",
    "readOnly",
    "inputType",
    "inputMode",
    "ariaLabel",
    "vars"
  ]);
  const uuid = (0, import_hooks2.useId)(name);
  const getStyles = (0, import_core8.useStyles)({
    name: "PinInput",
    classes: {
      root: "pinInput-root",
      pinInput: "pinInput-pinInput",
      input: "input"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7
  });
  const { resolvedClassNames, resolvedStyles } = (0, import_core8.useResolvedStylesApi)({
    classNames,
    styles,
    props
  });
  const [focusedIndex, setFocusedIndex] = (0, import_react13.useState)(-1);
  const [_value, setValues] = (0, import_hooks2.useUncontrolled)({
    value,
    defaultValue,
    finalValue: "",
    onChange
  });
  const inputsRef = (0, import_react13.useRef)([]);
  const validate = (code) => {
    const re = type instanceof RegExp ? type : type && type in regex ? regex[type] : null;
    return re == null ? void 0 : re.test(code);
  };
  const focusInputField = (dir, index) => {
    if (!manageFocus)
      return;
    if (dir === "next") {
      const nextIndex = index + 1;
      inputsRef.current[nextIndex < (length != null ? length : 0) ? nextIndex : index].focus();
    }
    if (dir === "prev") {
      const nextIndex = index - 1;
      inputsRef.current[nextIndex > -1 ? nextIndex : index].focus();
    }
  };
  const setFieldValue = (val, index) => {
    const values = [...createPinArray(length != null ? length : 0, _value)];
    values[index] = val;
    setValues(values.join(""));
  };
  const handleChange = (event, index) => {
    const inputValue = event.target.value;
    const nextCharOrValue = inputValue.length === 2 ? inputValue.split("")[inputValue.length - 1] : inputValue;
    const isValid = validate(nextCharOrValue);
    if (nextCharOrValue.length < 2) {
      if (isValid) {
        setFieldValue(nextCharOrValue, index);
        focusInputField("next", index);
      } else {
        setFieldValue("", index);
      }
    } else if (isValid) {
      setValues(inputValue);
    }
  };
  const handleKeyDown = (event, index) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusInputField("prev", index);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      focusInputField("next", index);
    } else if (event.key === "Delete") {
      event.preventDefault();
      setFieldValue("", index);
    } else if (event.key === "Backspace") {
      event.preventDefault();
      setFieldValue("", index);
      if (length === index + 1) {
        if (event.target.value === "") {
          focusInputField("prev", index);
        }
      } else {
        focusInputField("prev", index);
      }
    }
  };
  const handleFocus = (event, index) => {
    event.target.select();
    setFocusedIndex(index);
  };
  const handleBlur = () => {
    setFocusedIndex(-1);
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const copyValue = event.clipboardData.getData("Text");
    const isValid = validate(copyValue);
    if (isValid) {
      setValues(copyValue);
    }
  };
  (0, import_react13.useEffect)(() => {
    if (_value.length !== length)
      return;
    onComplete == null ? void 0 : onComplete(_value);
  }, [_value]);
  return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(
    Group,
    __spreadProps(__spreadValues(__spreadValues({}, others), getStyles("root")), {
      role: "group",
      id: uuid,
      gap,
      ref,
      unstyled,
      wrap: "nowrap",
      variant,
      __size: size
    }),
    createPinArray(length != null ? length : 0, _value).map((char, index) => /* @__PURE__ */ import_react13.default.createElement(
      Input,
      __spreadProps(__spreadValues({
        component: "input"
      }, getStyles("pinInput", {
        style: {
          "--_input-padding": "0",
          "--_input-text-align": "center"
        }
      })), {
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        size,
        __staticSelector: "PinInput",
        id: `${uuid}-${index + 1}`,
        key: `${uuid}-${index}`,
        inputMode: inputMode || (type === "number" ? "numeric" : "text"),
        onChange: (event) => handleChange(event, index),
        onKeyDown: (event) => handleKeyDown(event, index),
        onFocus: (event) => handleFocus(event, index),
        onBlur: handleBlur,
        onPaste: handlePaste,
        type: inputType || (mask ? "password" : type === "number" ? "tel" : "text"),
        radius,
        error,
        variant,
        disabled,
        ref: (node) => {
          inputsRef.current[index] = node;
        },
        autoComplete: oneTimeCode ? "one-time-code" : "off",
        placeholder: focusedIndex === index ? "" : placeholder,
        value: char,
        autoFocus: autoFocus && index === 0,
        unstyled,
        "aria-label": ariaLabel,
        readOnly
      })
    ))
  ), /* @__PURE__ */ import_react13.default.createElement("input", { type: "hidden", name, form, value: _value }));
});
PinInput.displayName = "@raikou/core/PinInput";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PinInput
});
