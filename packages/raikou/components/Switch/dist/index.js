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
  Switch: () => Switch,
  SwitchGroup: () => SwitchGroup
});
module.exports = __toCommonJS(src_exports);

// src/Switch.tsx
var import_react13 = __toESM(require("react"));
var import_hooks3 = require("@raikou/hooks");
var import_core9 = require("@raikou/core");

// ../InlineInput/src/InlineInput.tsx
var import_react10 = __toESM(require("react"));
var import_core7 = require("@raikou/core");

// ../Input/src/Input.tsx
var import_react9 = __toESM(require("react"));
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

// ../Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0
});

// ../Input/src/InputLabel/InputLabel.tsx
var import_react4 = __toESM(require("react"));
var import_core = require("@raikou/core");
var defaultProps = {
  size: "sm",
  labelElement: "label"
};
var varsResolver = (0, import_core.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core.getFontSize)(size),
    "--input-asterisk-color": "var(--raikou-color-red-filled)"
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
  return /* @__PURE__ */ import_react4.default.createElement(
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
    required && /* @__PURE__ */ import_react4.default.createElement("span", __spreadProps(__spreadValues({}, getStyles("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../Input/src/InputError/InputError.tsx
var import_react5 = __toESM(require("react"));
var import_core2 = require("@raikou/core");
var defaultProps2 = {
  size: "sm"
};
var varsResolver2 = (0, import_core2.createVarsResolver)((_, { size }) => ({
  error: {
    "--input-error-size": `calc(${(0, import_core2.getFontSize)(size)} - ${(0, import_core2.rem)(2)})`
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
  return /* @__PURE__ */ import_react5.default.createElement(
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
var import_react6 = __toESM(require("react"));
var import_core3 = require("@raikou/core");
var defaultProps3 = {
  size: "sm"
};
var varsResolver3 = (0, import_core3.createVarsResolver)(
  (_, { size }) => ({
    description: {
      "--input-description-size": `calc(${(0, import_core3.getFontSize)(size)} - ${(0, import_core3.rem)(2)})`
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
    return /* @__PURE__ */ import_react6.default.createElement(
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
var import_react7 = __toESM(require("react"));
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
    return /* @__PURE__ */ import_react7.default.createElement(
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
var import_react8 = __toESM(require("react"));
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
  size: "sm",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver4 = (0, import_core5.createVarsResolver)((_, { size }) => ({
  label: {
    "--input-label-size": (0, import_core5.getFontSize)(size),
    "--input-asterisk-color": "var(--raikou-color-red-filled)"
  },
  error: {
    "--input-error-size": `calc(${(0, import_core5.getFontSize)(size)} - ${(0, import_core5.rem)(2)})`
  },
  description: {
    "--input-description-size": `calc(${(0, import_core5.getFontSize)(size)} - ${(0, import_core5.rem)(2)})`
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
  const inputId = `${idBase}-input`;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const _label = label && /* @__PURE__ */ import_react8.default.createElement(
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
  const _description = hasDescription && /* @__PURE__ */ import_react8.default.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ import_react8.default.createElement(
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
  return /* @__PURE__ */ import_react8.default.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles,
        describedBy,
        inputId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ import_react8.default.createElement(
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
  size: "sm",
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
    "--input-radius": (0, import_core6.getRadius)(props.radius),
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
  return /* @__PURE__ */ import_react9.default.createElement(
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
    leftSection && /* @__PURE__ */ import_react9.default.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ import_react9.default.createElement(
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
    rightSection && /* @__PURE__ */ import_react9.default.createElement(
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

// ../InlineInput/src/InlineInput.tsx
var InlineInput = (0, import_react10.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      __staticSelector,
      __stylesApiProps,
      className,
      classNames,
      styles,
      unstyled,
      children,
      label,
      description,
      id,
      disabled,
      error,
      size = "sm",
      labelPosition = "left",
      variant,
      style,
      vars
    } = _b, others = __objRest(_b, [
      "__staticSelector",
      "__stylesApiProps",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "children",
      "label",
      "description",
      "id",
      "disabled",
      "error",
      "size",
      "labelPosition",
      "variant",
      "style",
      "vars"
    ]);
    const getStyles = (0, import_core7.useStyles)({
      name: __staticSelector,
      props: __stylesApiProps,
      className,
      style,
      classes: {
        root: "inlineInput-root",
        body: "inlineInput-body",
        labelWrapper: "inlineInput-labelWrapper",
        label: "inlineInput-label",
        description: "inlineInput-description",
        error: "inlineInput-error"
      },
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react10.default.createElement(
      import_core7.Box,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
        ref,
        __vars: {
          "--label-fz": (0, import_core7.getFontSize)(size),
          "--label-lh": (0, import_core7.getSize)(size, "label-lh")
        },
        mod: { "label-position": labelPosition },
        variant,
        size
      }), others),
      /* @__PURE__ */ import_react10.default.createElement("div", __spreadValues({}, getStyles("body")), children, /* @__PURE__ */ import_react10.default.createElement("div", __spreadValues({}, getStyles("labelWrapper")), label && /* @__PURE__ */ import_react10.default.createElement(
        "label",
        __spreadProps(__spreadValues({}, getStyles("label")), {
          "data-disabled": disabled || void 0,
          htmlFor: id
        }),
        label
      ), description && /* @__PURE__ */ import_react10.default.createElement(Input.Description, __spreadValues({ size }, getStyles("description")), description), error && error !== "boolean" && /* @__PURE__ */ import_react10.default.createElement(Input.Error, __spreadValues({ size }, getStyles("error")), error)))
    );
  }
);
InlineInput.displayName = "@raikou/core/InlineInput";

// src/SwitchGroup.context.ts
var import_react11 = require("react");
var SwitchGroupContext = (0, import_react11.createContext)(null);
var SwitchGroupProvider = SwitchGroupContext.Provider;
var useSwitchGroupContext = () => (0, import_react11.useContext)(SwitchGroupContext);

// src/SwitchGroup/SwitchGroup.tsx
var import_react12 = __toESM(require("react"));
var import_hooks2 = require("@raikou/hooks");
var import_core8 = require("@raikou/core");
var defaultProps7 = {};
var SwitchGroup = (0, import_core8.factory)((props, ref) => {
  const _a = (0, import_core8.useProps)("SwitchGroup", defaultProps7, props), {
    value,
    defaultValue,
    onChange,
    size,
    wrapperProps,
    children
  } = _a, others = __objRest(_a, [
    "value",
    "defaultValue",
    "onChange",
    "size",
    "wrapperProps",
    "children"
  ]);
  const [_value, setValue] = (0, import_hooks2.useUncontrolled)({
    value,
    defaultValue,
    finalValue: [],
    onChange
  });
  const handleChange = (event) => {
    const itemValue = event.currentTarget.value;
    setValue(
      _value.includes(itemValue) ? _value.filter((item) => item !== itemValue) : [..._value, itemValue]
    );
  };
  return /* @__PURE__ */ import_react12.default.createElement(
    SwitchGroupProvider,
    {
      value: { value: _value, onChange: handleChange, size }
    },
    /* @__PURE__ */ import_react12.default.createElement(
      Input.Wrapper,
      __spreadProps(__spreadValues(__spreadValues({
        size,
        ref
      }, wrapperProps), others), {
        labelElement: "div",
        __staticSelector: "SwitchGroup"
      }),
      children
    )
  );
});
SwitchGroup.displayName = "@raikou/core/SwitchGroup";

// src/Switch.tsx
var defaultProps8 = {
  size: "sm",
  radius: "xl",
  labelPosition: "right"
};
var varsResolver6 = (0, import_core9.createVarsResolver)(
  (theme, { radius, color, size }) => ({
    root: {
      "--switch-radius": (0, import_core9.getRadius)(radius),
      "--switch-height": (0, import_core9.getSize)(size, "switch-height"),
      "--switch-width": (0, import_core9.getSize)(size, "switch-width"),
      "--switch-thumb-size": (0, import_core9.getSize)(size, "switch-thumb-size"),
      "--switch-label-font-size": (0, import_core9.getSize)(size, "switch-label-font-size"),
      "--switch-track-label-padding": (0, import_core9.getSize)(
        size,
        "switch-track-label-padding"
      ),
      "--switch-color": (0, import_core9.getThemeColor)(color, theme)
    }
  })
);
var Switch = (0, import_core9.factory)((_props, ref) => {
  var _b;
  const props = (0, import_core9.useProps)("Switch", defaultProps8, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    offLabel,
    onLabel,
    id,
    size,
    radius,
    wrapperProps,
    children,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    disabled,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "label",
    "offLabel",
    "onLabel",
    "id",
    "size",
    "radius",
    "wrapperProps",
    "children",
    "thumbIcon",
    "checked",
    "defaultChecked",
    "onChange",
    "labelPosition",
    "description",
    "error",
    "disabled",
    "variant"
  ]);
  const ctx = useSwitchGroupContext();
  const _size = size || (ctx == null ? void 0 : ctx.size);
  const getStyles = (0, import_core9.useStyles)({
    name: "Switch",
    props,
    classes: {
      root: "switch-root",
      input: "switch-input",
      track: "switch-track",
      thumb: "switch-thumb",
      trackLabel: "switch-trackLabel",
      body: "inlineInput-body",
      label: "inlineInput-label",
      labelWrapper: "inlineInput-labelWrapper",
      description: "inlineInput-description",
      error: "inlineInput-error"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  const { styleProps, rest } = (0, import_core9.extractStyleProps)(others);
  const uuid = (0, import_hooks3.useId)(id);
  const contextProps = ctx ? {
    checked: ctx.value.includes(rest.value),
    onChange: ctx.onChange
  } : {};
  const [_checked, handleChange] = (0, import_hooks3.useUncontrolled)({
    value: (_b = contextProps.checked) != null ? _b : checked,
    defaultValue: defaultChecked,
    finalValue: false
  });
  return /* @__PURE__ */ import_react13.default.createElement(
    InlineInput,
    __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, getStyles("root")), {
      __staticSelector: "Switch",
      __stylesApiProps: props,
      id: uuid,
      size: _size,
      labelPosition,
      label,
      description,
      error,
      disabled,
      classNames,
      styles,
      unstyled,
      "data-checked": contextProps.checked || void 0,
      variant
    }), styleProps), wrapperProps),
    /* @__PURE__ */ import_react13.default.createElement(
      "input",
      __spreadValues(__spreadProps(__spreadValues({}, rest), {
        disabled,
        checked: _checked,
        onChange: (event) => {
          var _a2;
          ctx ? (_a2 = contextProps.onChange) == null ? void 0 : _a2.call(contextProps, event) : onChange == null ? void 0 : onChange(event);
          handleChange(event.currentTarget.checked);
        },
        id: uuid,
        ref,
        type: "checkbox"
      }), getStyles("input"))
    ),
    /* @__PURE__ */ import_react13.default.createElement(
      import_core9.Box,
      __spreadValues({
        component: "label",
        htmlFor: uuid,
        mod: { error, "label-position": labelPosition }
      }, getStyles("track")),
      /* @__PURE__ */ import_react13.default.createElement(import_core9.Box, __spreadValues({ component: "span", mod: "reduce-motion" }, getStyles("thumb")), thumbIcon),
      /* @__PURE__ */ import_react13.default.createElement("span", __spreadValues({}, getStyles("trackLabel")), _checked ? onLabel : offLabel)
    )
  );
});
Switch.displayName = "@raikou/core/Switch";
Switch.Group = SwitchGroup;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Switch,
  SwitchGroup
});
