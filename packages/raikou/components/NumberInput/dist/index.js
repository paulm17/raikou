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
  NumberInput: () => NumberInput
});
module.exports = __toCommonJS(src_exports);

// src/NumberInput.tsx
var import_react14 = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
var import_react_number_format = require("react-number-format");
var import_hooks2 = require("@raikou/hooks");
var import_core10 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react = __toESM(require("react"));
var import_core = require("@raikou/core");
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
      classes: {
        root: "unstyledButton-root"
      },
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

// ../InputBase/src/InputBase.tsx
var import_react12 = __toESM(require("react"));
var import_core9 = require("@raikou/core");

// ../Input/src/Input.tsx
var import_react11 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react2 = __toESM(require("react"));

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react3 = __toESM(require("react"));
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react3.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react3.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react3.default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../_utils/use-hovered/use-hovered.ts
var import_react4 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react5 = require("react");

// ../Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// ../Input/src/InputLabel/InputLabel.tsx
var import_react6 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {
  labelElement: "label"
};
var varsResolver = (0, import_core2.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core2.getFontSize)(size),
    "--input-asterisk-color": void 0
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
    varsResolver
  });
  const ctx = useInputWrapperContext();
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react6.default.createElement(
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
    required && /* @__PURE__ */ import_react6.default.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../Input/src/InputError/InputError.tsx
var import_react7 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {};
var varsResolver2 = (0, import_core3.createVarsResolver)((_, { size }) => ({
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${(0, import_core3.getFontSize)(size)} - ${(0, import_core3.rem)(2)})`
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
    __inheritStyles = true,
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
    "__inheritStyles",
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
    varsResolver: varsResolver2
  });
  const ctx = useInputWrapperContext();
  const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react7.default.createElement(
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
var import_react8 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var defaultProps4 = {};
var varsResolver3 = (0, import_core4.createVarsResolver)(
  (_, { size }) => ({
    description: {
      "--input-description-size": size === void 0 ? void 0 : `calc(${(0, import_core4.getFontSize)(size)} - ${(0, import_core4.rem)(2)})`
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
      __inheritStyles = true,
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
      "__inheritStyles",
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
      varsResolver: varsResolver3
    });
    const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ import_react8.default.createElement(
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
var import_react9 = __toESM(require("react"));
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
    return /* @__PURE__ */ import_react9.default.createElement(
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
var import_react10 = __toESM(require("react"));
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
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver4 = (0, import_core6.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core6.getFontSize)(size),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${(0, import_core6.getFontSize)(size)} - ${(0, import_core6.rem)(2)})`
  },
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${(0, import_core6.getFontSize)(size)} - ${(0, import_core6.rem)(2)})`
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
    varsResolver: varsResolver4
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
  const labelId = (labelProps == null ? void 0 : labelProps.id) || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ import_react10.default.createElement(
    InputLabel,
    __spreadValues(__spreadValues({
      key: "label",
      labelElement,
      id: labelId,
      htmlFor: inputId,
      required: isRequired
    }, sharedProps), labelProps),
    label
  );
  const _description = hasDescription && /* @__PURE__ */ import_react10.default.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ import_react10.default.createElement(
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
  return /* @__PURE__ */ import_react10.default.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId,
        labelId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ import_react10.default.createElement(
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
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver5 = (0, import_core7.createVarsResolver)((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": (0, import_core7.getSize)(props.size, "input-height"),
    "--input-fz": (0, import_core7.getFontSize)(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : (0, import_core7.getRadius)(props.radius),
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
    varsResolver: varsResolver5
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx == null ? void 0 : ctx.describedBy,
    id: (ctx == null ? void 0 : ctx.inputId) || id
  } : {};
  return /* @__PURE__ */ import_react11.default.createElement(
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
    leftSection && /* @__PURE__ */ import_react11.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ import_react11.default.createElement(
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
    rightSection && /* @__PURE__ */ import_react11.default.createElement(
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

// ../Input/src/use-input-props.ts
var import_core8 = require("@raikou/core");
function useInputProps(component, defaultProps10, _props) {
  const props = (0, import_core8.useProps)(component, defaultProps10, _props);
  const _a = props, {
    label,
    description,
    error,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    __stylesApiProps,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    id,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    vars
  } = _a, others = __objRest(_a, [
    "label",
    "description",
    "error",
    "required",
    "classNames",
    "styles",
    "className",
    "unstyled",
    "__staticSelector",
    "__stylesApiProps",
    "errorProps",
    "labelProps",
    "descriptionProps",
    "wrapperProps",
    "id",
    "size",
    "style",
    "inputContainer",
    "inputWrapperOrder",
    "withAsterisk",
    "variant",
    "vars"
  ]);
  const { styleProps, rest } = (0, import_core8.extractStyleProps)(others);
  const wrapperProps = __spreadValues({
    label,
    description,
    error,
    required,
    classNames,
    className,
    __staticSelector,
    __stylesApiProps: __stylesApiProps || props,
    errorProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    id
  }, _wrapperProps);
  return __spreadProps(__spreadValues({}, rest), {
    classNames,
    styles,
    unstyled,
    wrapperProps: __spreadValues(__spreadValues({}, wrapperProps), styleProps),
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      size,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error,
      variant
    }
  });
}

// ../InputBase/src/InputBase.tsx
var defaultProps8 = {
  __staticSelector: "InputBase",
  withAria: true
};
var InputBase = (0, import_core9.polymorphicFactory)((props, ref) => {
  const _a = useInputProps(
    "InputBase",
    defaultProps8,
    props
  ), { inputProps, wrapperProps } = _a, others = __objRest(_a, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ import_react12.default.createElement(Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ import_react12.default.createElement(Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), others), { ref })));
});
InputBase.displayName = "@raikou/core/InputBase";

// src/NumberInputChevron.tsx
var import_react13 = __toESM(require("react"));
function NumberInputChevron(_a) {
  var _b = _a, { direction, style } = _b, others = __objRest(_b, ["direction", "style"]);
  return /* @__PURE__ */ import_react13.default.createElement(
    "svg",
    __spreadValues({
      style: __spreadValues({
        width: "var(--ni-chevron-size)",
        height: "var(--ni-chevron-size)",
        transform: direction === "up" ? "rotate(180deg)" : void 0
      }, style),
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, others),
    /* @__PURE__ */ import_react13.default.createElement(
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

// src/NumberInput.tsx
function isValidNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}
function getDecrementedValue({
  value,
  min,
  step = 1,
  allowNegative
}) {
  const nextValue = value - step;
  if (min !== void 0 && nextValue < min) {
    return min;
  }
  if (!allowNegative && nextValue < 0 && min === void 0) {
    return value;
  }
  if (min !== void 0 && min >= 0 && nextValue <= min) {
    return nextValue;
  }
  return nextValue;
}
function isInRange(value, min, max) {
  if (value === void 0) {
    return true;
  }
  const minValid = min === void 0 || value >= min;
  const maxValid = max === void 0 || value <= max;
  return minValid && maxValid;
}
var defaultProps9 = {
  step: 1,
  clampBehavior: "blur",
  allowDecimal: true,
  allowNegative: true,
  startValue: 0
};
var varsResolver6 = (0, import_core10.createVarsResolver)((_, { size }) => ({
  controls: {
    "--ni-chevron-size": (0, import_core10.getSize)(size, "ni-chevron-size")
  }
}));
var NumberInput = (0, import_core10.factory)((_props, ref) => {
  const props = (0, import_core10.useProps)("NumberInput", defaultProps9, _props);
  const _a = props, {
    className,
    classNames,
    styles,
    unstyled,
    vars,
    onChange,
    onValueChange,
    value,
    defaultValue,
    max,
    min,
    step,
    hideControls,
    rightSection,
    isAllowed,
    clampBehavior,
    onBlur,
    allowDecimal,
    decimalScale,
    onKeyDown,
    handlersRef,
    startValue,
    disabled,
    rightSectionPointerEvents,
    allowNegative,
    readOnly,
    size,
    rightSectionWidth
  } = _a, others = __objRest(_a, [
    "className",
    "classNames",
    "styles",
    "unstyled",
    "vars",
    "onChange",
    "onValueChange",
    "value",
    "defaultValue",
    "max",
    "min",
    "step",
    "hideControls",
    "rightSection",
    "isAllowed",
    "clampBehavior",
    "onBlur",
    "allowDecimal",
    "decimalScale",
    "onKeyDown",
    "handlersRef",
    "startValue",
    "disabled",
    "rightSectionPointerEvents",
    "allowNegative",
    "readOnly",
    "size",
    "rightSectionWidth"
  ]);
  const getStyles = (0, import_core10.useStyles)({
    name: "NumberInput",
    classes: {
      controls: "numberInput-controls",
      control: "numberInput-control"
    },
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  const { resolvedClassNames, resolvedStyles } = (0, import_core10.useResolvedStylesApi)({
    classNames,
    styles,
    props
  });
  const [_value, setValue] = (0, import_hooks2.useUncontrolled)({
    value,
    defaultValue,
    onChange
  });
  const handleValueChange = (payload, event) => {
    setValue(
      typeof _value === "number" && isValidNumber(payload.floatValue) ? payload.floatValue : payload.value
    );
    onValueChange == null ? void 0 : onValueChange(payload, event);
  };
  const increment = () => {
    if (typeof _value !== "number" || Number.isNaN(_value)) {
      setValue(min != null ? min : (0, import_hooks2.clamp)(startValue, min, max));
    } else if (max !== void 0) {
      setValue(_value + step <= max ? _value + step : max);
    } else {
      setValue(_value + step);
    }
  };
  const decrement = () => {
    if (typeof _value !== "number" || Number.isNaN(_value)) {
      setValue(max != null ? max : (0, import_hooks2.clamp)(startValue, min, max));
    } else {
      setValue(
        getDecrementedValue({ value: _value, min, step, allowNegative })
      );
    }
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (readOnly) {
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      increment();
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      decrement();
    }
  };
  (0, import_hooks2.assignRef)(handlersRef, { increment, decrement });
  const controls = /* @__PURE__ */ import_react14.default.createElement("div", __spreadValues({}, getStyles("controls")), /* @__PURE__ */ import_react14.default.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("control")), {
      tabIndex: -1,
      "aria-hidden": true,
      disabled: disabled || typeof _value === "number" && max !== void 0 && _value >= max,
      mod: { direction: "up" },
      onMouseDown: (event) => event.preventDefault(),
      onPointerDown: increment
    }),
    /* @__PURE__ */ import_react14.default.createElement(NumberInputChevron, { direction: "up" })
  ), /* @__PURE__ */ import_react14.default.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles("control")), {
      tabIndex: -1,
      "aria-hidden": true,
      disabled: disabled || typeof _value === "number" && min !== void 0 && _value <= min,
      mod: { direction: "down" },
      onMouseDown: (event) => event.preventDefault(),
      onPointerDown: decrement
    }),
    /* @__PURE__ */ import_react14.default.createElement(NumberInputChevron, { direction: "down" })
  ));
  return /* @__PURE__ */ import_react14.default.createElement(
    InputBase,
    __spreadProps(__spreadValues({
      component: import_react_number_format.NumericFormat,
      allowNegative,
      className: (0, import_clsx.default)("numberInput-root", className),
      size
    }, others), {
      readOnly,
      disabled,
      value: _value,
      getInputRef: ref,
      onValueChange: handleValueChange,
      rightSection: hideControls || readOnly ? rightSection : rightSection || controls,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      __staticSelector: "NumberInput",
      decimalScale: allowDecimal ? decimalScale : 0,
      onKeyDown: handleKeyDown,
      rightSectionPointerEvents: (rightSectionPointerEvents != null ? rightSectionPointerEvents : disabled) ? "none" : void 0,
      rightSectionWidth: rightSectionWidth != null ? rightSectionWidth : `var(--ni-right-section-width-${size || "sm"})`,
      onBlur: (event) => {
        onBlur == null ? void 0 : onBlur(event);
        if (clampBehavior === "blur" && typeof _value === "number") {
          setValue((0, import_hooks2.clamp)(_value, min, max));
        }
      },
      isAllowed: (val) => {
        if (clampBehavior === "strict") {
          if (isAllowed) {
            return isAllowed(val) && isInRange(val.floatValue, min, max);
          }
          return isInRange(val.floatValue, min, max);
        }
        return isAllowed ? isAllowed(val) : true;
      }
    })
  );
});
NumberInput.displayName = "@raikou/core/NumberInput";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NumberInput
});
