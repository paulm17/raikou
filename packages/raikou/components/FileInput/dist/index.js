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
  FileInput: () => FileInput
});
module.exports = __toCommonJS(src_exports);

// src/FileInput.tsx
var import_react16 = __toESM(require("react"));
var import_hooks3 = require("@raikou/hooks");
var import_core12 = require("@raikou/core");

// ../Input/src/Input.tsx
var import_react10 = __toESM(require("react"));
var import_core6 = require("@raikou/core");

// ../_utils/create-safe-context/create-safe-context.tsx
var import_react = __toESM(require("react"));

// ../_utils/create-optional-context/create-optional-context.tsx
var import_react2 = __toESM(require("react"));
function createOptionalContext(initialValue = null) {
  const Context = (0, import_react2.createContext)(initialValue);
  const useOptionalContext = () => (0, import_react2.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react2.default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../_utils/use-hovered/use-hovered.ts
var import_react3 = require("react");

// ../_utils/create-use-external-events/create-use-external-events.ts
var import_react4 = require("react");

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
var import_react5 = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  labelElement: "label"
};
var varsResolver = (0, import_core.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core.getFontSize)(size),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = (0, import_core.factory)((_props, ref) => {
  const props = (0, import_core.useProps)("InputLabel", defaultProps, _props);
  const _a = (0, import_core.useProps)("InputLabel", defaultProps, props), {
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
  const _getStyles = (0, import_core.useStyles)({
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
  return /* @__PURE__ */ import_react5.default.createElement(
    import_core.Box,
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
    required && /* @__PURE__ */ import_react5.default.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../Input/src/InputError/InputError.tsx
var import_react6 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {};
var varsResolver2 = (0, import_core2.createVarsResolver)((_, { size }) => ({
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${(0, import_core2.getFontSize)(size)} - ${(0, import_core2.rem)(2)})`
  }
}));
var InputError = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("InputError", defaultProps2, _props);
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
  const _getStyles = (0, import_core2.useStyles)({
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
  const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ import_react6.default.createElement(
    import_core2.Box,
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
var import_react7 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {};
var varsResolver3 = (0, import_core3.createVarsResolver)(
  (_, { size }) => ({
    description: {
      "--input-description-size": size === void 0 ? void 0 : `calc(${(0, import_core3.getFontSize)(size)} - ${(0, import_core3.rem)(2)})`
    }
  })
);
var InputDescription = (0, import_core3.factory)(
  (_props, ref) => {
    const props = (0, import_core3.useProps)("InputDescription", defaultProps3, _props);
    const _a = (0, import_core3.useProps)("InputDescription", defaultProps3, props), {
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
    const _getStyles = (0, import_core3.useStyles)({
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
    const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ import_react7.default.createElement(
      import_core3.Box,
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
var import_react8 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var defaultProps4 = {};
var InputPlaceholder = (0, import_core4.factory)(
  (_props, ref) => {
    const props = (0, import_core4.useProps)("InputPlaceholder", defaultProps4, _props);
    const _a = (0, import_core4.useProps)("InputPlaceholder", defaultProps4, props), {
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
    const getStyles = (0, import_core4.useStyles)({
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
    return /* @__PURE__ */ import_react8.default.createElement(
      import_core4.Box,
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
var import_react9 = __toESM(require("react"));
var import_hooks = require("@raikou/hooks");
var import_core5 = require("@raikou/core");

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
var defaultProps5 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver4 = (0, import_core5.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core5.getFontSize)(size),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${(0, import_core5.getFontSize)(size)} - ${(0, import_core5.rem)(2)})`
  },
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${(0, import_core5.getFontSize)(size)} - ${(0, import_core5.rem)(2)})`
  }
}));
var InputWrapper = (0, import_core5.factory)((_props, ref) => {
  const props = (0, import_core5.useProps)("InputWrapper", defaultProps5, _props);
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
  const getStyles = (0, import_core5.useStyles)({
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
  const _label = label && /* @__PURE__ */ import_react9.default.createElement(
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
  const _description = hasDescription && /* @__PURE__ */ import_react9.default.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ import_react9.default.createElement(
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
  return /* @__PURE__ */ import_react9.default.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId,
        labelId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ import_react9.default.createElement(
      import_core5.Box,
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
var defaultProps6 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver5 = (0, import_core6.createVarsResolver)((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": (0, import_core6.getSize)(props.size, "input-height"),
    "--input-fz": (0, import_core6.getFontSize)(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : (0, import_core6.getRadius)(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? (0, import_core6.rem)(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? (0, import_core6.rem)(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? (0, import_core6.getSize)(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = (0, import_core6.polymorphicFactory)((_props, ref) => {
  const props = (0, import_core6.useProps)("Input", defaultProps6, _props);
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
  const { styleProps, rest } = (0, import_core6.extractStyleProps)(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = {
    offsetBottom: ctx == null ? void 0 : ctx.offsetBottom,
    offsetTop: ctx == null ? void 0 : ctx.offsetTop
  };
  const getStyles = (0, import_core6.useStyles)({
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
  return /* @__PURE__ */ import_react10.default.createElement(
    import_core6.Box,
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
    leftSection && /* @__PURE__ */ import_react10.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ import_react10.default.createElement(
      import_core6.Box,
      __spreadValues(__spreadProps(__spreadValues(__spreadValues({
        component: "input"
      }, rest), ariaAttributes), {
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant
      }), getStyles("input"))
    ),
    rightSection && /* @__PURE__ */ import_react10.default.createElement(
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
var import_core7 = require("@raikou/core");
function useInputProps(component, defaultProps12, _props) {
  const props = (0, import_core7.useProps)(component, defaultProps12, _props);
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
  const { styleProps, rest } = (0, import_core7.extractStyleProps)(others);
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
var import_react11 = __toESM(require("react"));
var import_core8 = require("@raikou/core");
var defaultProps7 = {
  __staticSelector: "InputBase",
  withAria: true
};
var InputBase = (0, import_core8.polymorphicFactory)((props, ref) => {
  const _a = useInputProps(
    "InputBase",
    defaultProps7,
    props
  ), { inputProps, wrapperProps } = _a, others = __objRest(_a, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ import_react11.default.createElement(Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ import_react11.default.createElement(Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), others), { ref })));
});
InputBase.displayName = "@raikou/core/InputBase";

// ../CloseButton/src/CloseIcon.tsx
var import_react12 = __toESM(require("react"));
var CloseIcon = (0, import_react12.forwardRef)(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size, 70%)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ import_react12.default.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ import_react12.default.createElement(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    );
  }
);
CloseIcon.displayName = "@raikou/core/CloseIcon";

// ../CloseButton/src/CloseButton.tsx
var import_react14 = __toESM(require("react"));
var import_core10 = require("@raikou/core");

// ../UnstyledButton/src/UnstyledButton.tsx
var import_react13 = __toESM(require("react"));
var import_core9 = require("@raikou/core");
var defaultProps8 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = (0, import_core9.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core9.useProps)("UnstyledButton", defaultProps8, _props);
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
    const getStyles = (0, import_core9.useStyles)({
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
    return /* @__PURE__ */ import_react13.default.createElement(
      import_core9.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../CloseButton/src/CloseButton.tsx
var defaultProps9 = {
  variant: "subtle",
  size: "md"
};
var varsResolver6 = (0, import_core10.createVarsResolver)(
  (_, { size, radius, iconSize }) => ({
    root: {
      "--cb-size": (0, import_core10.getSize)(size, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : (0, import_core10.getRadius)(radius),
      "--cb-icon-size": (0, import_core10.rem)(iconSize)
    }
  })
);
var CloseButton = (0, import_core10.polymorphicFactory)(
  (_props, ref) => {
    const props = (0, import_core10.useProps)("CloseButton", defaultProps9, _props);
    const _a = props, {
      iconSize,
      children,
      vars,
      radius,
      className,
      classNames,
      style,
      styles,
      unstyled,
      "data-disabled": dataDisabled,
      disabled,
      variant
    } = _a, others = __objRest(_a, [
      "iconSize",
      "children",
      "vars",
      "radius",
      "className",
      "classNames",
      "style",
      "styles",
      "unstyled",
      "data-disabled",
      "disabled",
      "variant"
    ]);
    const getStyles = (0, import_core10.useStyles)({
      name: "CloseButton",
      props,
      className,
      style,
      classes: {
        root: "closeButton-root"
      },
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver6
    });
    return /* @__PURE__ */ import_react14.default.createElement(
      UnstyledButton,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, others), {
        unstyled,
        variant,
        disabled,
        mod: { disabled: disabled || dataDisabled }
      }), getStyles("root", { variant, active: true })),
      /* @__PURE__ */ import_react14.default.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// ../FileButton/src/FileButton.tsx
var import_react15 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");
var import_core11 = require("@raikou/core");
var defaultProps10 = {
  multiple: false
};
var FileButton = (0, import_react15.forwardRef)((props, ref) => {
  const _a = (0, import_core11.useProps)("FileButton", defaultProps10, props), {
    onChange,
    children,
    multiple,
    accept,
    name,
    form,
    resetRef,
    disabled,
    capture,
    inputProps
  } = _a, others = __objRest(_a, [
    "onChange",
    "children",
    "multiple",
    "accept",
    "name",
    "form",
    "resetRef",
    "disabled",
    "capture",
    "inputProps"
  ]);
  const inputRef = (0, import_react15.useRef)();
  const onClick = () => {
    var _a2;
    !disabled && ((_a2 = inputRef.current) == null ? void 0 : _a2.click());
  };
  const handleChange = (event) => {
    if (multiple) {
      onChange(Array.from(event.currentTarget.files));
    } else {
      onChange(event.currentTarget.files[0] || null);
    }
  };
  const reset = () => {
    inputRef.current.value = "";
  };
  (0, import_hooks2.assignRef)(resetRef, reset);
  return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, children(__spreadValues({ onClick }, others)), /* @__PURE__ */ import_react15.default.createElement(
    "input",
    __spreadValues({
      style: { display: "none" },
      type: "file",
      accept,
      multiple,
      onChange: handleChange,
      ref: (0, import_hooks2.useMergedRef)(ref, inputRef),
      name,
      form,
      capture
    }, inputProps)
  ));
});
FileButton.displayName = "@raikou/core/FileButton";

// src/FileInput.tsx
var DefaultValue = ({ value }) => /* @__PURE__ */ import_react16.default.createElement(
  "div",
  {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  },
  Array.isArray(value) ? value.map((file) => file.name).join(", ") : value == null ? void 0 : value.name
);
var defaultProps11 = {
  valueComponent: DefaultValue
};
var _FileInput = (0, import_core12.factory)((_props, ref) => {
  const props = (0, import_core12.useProps)("FileInput", defaultProps11, _props);
  const _a = props, {
    unstyled,
    vars,
    onChange,
    value,
    defaultValue,
    multiple,
    accept,
    name,
    form,
    valueComponent,
    clearable,
    clearButtonProps,
    readOnly,
    capture,
    fileInputProps,
    rightSection,
    size,
    placeholder
  } = _a, others = __objRest(_a, [
    "unstyled",
    "vars",
    "onChange",
    "value",
    "defaultValue",
    "multiple",
    "accept",
    "name",
    "form",
    "valueComponent",
    "clearable",
    "clearButtonProps",
    "readOnly",
    "capture",
    "fileInputProps",
    "rightSection",
    "size",
    "placeholder"
  ]);
  const resetRef = (0, import_react16.useRef)(null);
  const [_value, setValue] = (0, import_hooks3.useUncontrolled)({
    value,
    defaultValue,
    onChange,
    finalValue: multiple ? [] : null
  });
  const hasValue = Array.isArray(_value) ? _value.length !== 0 : _value !== null;
  const _rightSection = rightSection || (clearable && hasValue && !readOnly ? (
    // @ts-ignore
    /* @__PURE__ */ import_react16.default.createElement(
      CloseButton,
      __spreadProps(__spreadValues({}, clearButtonProps), {
        variant: "subtle",
        onClick: () => setValue(multiple ? [] : null),
        size,
        unstyled
      })
    )
  ) : null);
  (0, import_react16.useEffect)(() => {
    var _a2;
    if (Array.isArray(_value) && _value.length === 0 || _value === null) {
      (_a2 = resetRef.current) == null ? void 0 : _a2.call(resetRef);
    }
  }, [_value]);
  const ValueComponent = valueComponent;
  return /* @__PURE__ */ import_react16.default.createElement(
    FileButton,
    {
      onChange: setValue,
      multiple,
      accept,
      name,
      form,
      resetRef,
      disabled: readOnly,
      capture,
      inputProps: fileInputProps
    },
    (fileButtonProps) => /* @__PURE__ */ import_react16.default.createElement(
      InputBase,
      __spreadProps(__spreadValues(__spreadValues({
        component: "button",
        ref,
        rightSection: _rightSection
      }, fileButtonProps), others), {
        __staticSelector: "FileInput",
        multiline: true,
        type: "button",
        pointer: true,
        __stylesApiProps: props,
        unstyled,
        size
      }),
      !hasValue ? /* @__PURE__ */ import_react16.default.createElement(Input.Placeholder, null, placeholder) : /* @__PURE__ */ import_react16.default.createElement(ValueComponent, { value: _value })
    )
  );
});
_FileInput.displayName = "@mantine/core/FileInput";
var FileInput = _FileInput;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileInput
});
