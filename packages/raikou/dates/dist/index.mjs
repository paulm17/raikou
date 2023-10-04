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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/components/DatesProvider/DatesProvider.tsx
import React, { createContext } from "react";
var DATES_PROVIDER_DEFAULT_SETTINGS = {
  locale: "en",
  timezone: null,
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: "\u2013"
};
var DatesProviderContext = createContext(
  DATES_PROVIDER_DEFAULT_SETTINGS
);
function DatesProvider({ settings, children }) {
  return /* @__PURE__ */ React.createElement(
    DatesProviderContext.Provider,
    {
      value: __spreadValues(__spreadValues({}, DATES_PROVIDER_DEFAULT_SETTINGS), settings)
    },
    children
  );
}

// src/components/DatesProvider/use-dates-context.ts
import { useContext, useCallback } from "react";
function useDatesContext() {
  const ctx = useContext(DatesProviderContext);
  const getLocale = useCallback(
    (input) => input || ctx.locale,
    [ctx.locale]
  );
  const getTimezone = useCallback(
    (input) => input || ctx.timezone || void 0,
    [ctx.timezone]
  );
  const getFirstDayOfWeek = useCallback(
    (input) => typeof input === "number" ? input : ctx.firstDayOfWeek,
    [ctx.firstDayOfWeek]
  );
  const getWeekendDays = useCallback(
    (input) => Array.isArray(input) ? input : ctx.weekendDays,
    [ctx.weekendDays]
  );
  const getLabelSeparator = useCallback(
    (input) => typeof input === "string" ? input : ctx.labelSeparator,
    [ctx.labelSeparator]
  );
  return __spreadProps(__spreadValues({}, ctx), {
    getLocale,
    getTimezone,
    getFirstDayOfWeek,
    getWeekendDays,
    getLabelSeparator
  });
}

// src/components/HiddenDatesInput/HiddenDatesInput.tsx
import React2 from "react";
function formatValue(value, type) {
  if (type === "range" && Array.isArray(value)) {
    const [startDate, endDate] = value;
    if (!startDate) {
      return "";
    }
    if (!endDate) {
      return `${startDate.toISOString()} \u2013`;
    }
    return `${startDate.toISOString()} \u2013 ${endDate.toISOString()}`;
  }
  if (type === "multiple" && Array.isArray(value)) {
    return value.map((date) => date == null ? void 0 : date.toISOString()).filter(Boolean).join(", ");
  }
  if (!Array.isArray(value) && value) {
    return value.toISOString();
  }
  return "";
}
function HiddenDatesInput({
  value,
  type,
  name,
  form
}) {
  return /* @__PURE__ */ React2.createElement(
    "input",
    {
      type: "hidden",
      value: formatValue(value, type),
      name,
      form
    }
  );
}
HiddenDatesInput.displayName = "@raikou/dates/HiddenDatesInput";

// src/components/TimeInput/TimeInput.tsx
import React12 from "react";
import cx from "clsx";
import {
  factory as factory6,
  useProps as useProps8,
  useResolvedStylesApi
} from "@raikou/core";

// ../components/InputBase/src/InputBase.tsx
import React11 from "react";
import {
  polymorphicFactory as polymorphicFactory2
} from "@raikou/core";

// ../components/Input/src/Input.tsx
import React10 from "react";
import {
  Box as Box6,
  polymorphicFactory,
  useProps as useProps6,
  useStyles as useStyles6,
  extractStyleProps,
  getSize,
  getFontSize as getFontSize5,
  getRadius,
  rem as rem4,
  createVarsResolver as createVarsResolver5
} from "@raikou/core";

// ../components/_utils/create-safe-context/create-safe-context.tsx
import React3, { createContext as createContext2, useContext as useContext2 } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext2(null);
  const useSafeContext = () => {
    const ctx = useContext2(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React3.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
import React4, { createContext as createContext3, useContext as useContext3 } from "react";
function createOptionalContext(initialValue = null) {
  const Context = createContext3(initialValue);
  const useOptionalContext = () => useContext3(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React4.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

// ../components/_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// ../components/_utils/create-use-external-events/create-use-external-events.ts
import { useEffect, useLayoutEffect } from "react";

// ../components/Input/src/InputWrapper.context.ts
var [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});

// ../components/Input/src/InputLabel/InputLabel.tsx
import React5 from "react";
import {
  Box,
  factory,
  useProps,
  useStyles,
  getFontSize,
  createVarsResolver
} from "@raikou/core";
var defaultProps = {
  labelElement: "label"
};
var varsResolver = createVarsResolver((_, { size: size2 }) => ({
  label: {
    "--input-label-size": getFontSize(size2),
    "--input-asterisk-color": void 0
  }
}));
var InputLabel = factory((_props, ref) => {
  const props = useProps("InputLabel", defaultProps, _props);
  const _a = useProps("InputLabel", defaultProps, props), {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size: size2,
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
  const _getStyles = useStyles({
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
  const getStyles2 = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ React5.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("label")), {
      component: labelElement,
      variant,
      size: size2,
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
    required && /* @__PURE__ */ React5.createElement("span", __spreadProps(__spreadValues({}, getStyles2("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../components/Input/src/InputError/InputError.tsx
import React6 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps2,
  useStyles as useStyles2,
  getFontSize as getFontSize2,
  rem,
  createVarsResolver as createVarsResolver2
} from "@raikou/core";
var defaultProps2 = {};
var varsResolver2 = createVarsResolver2((_, { size: size2 }) => ({
  error: {
    "--input-error-size": size2 === void 0 ? void 0 : `calc(${getFontSize2(size2)} - ${rem(2)})`
  }
}));
var InputError = factory2((_props, ref) => {
  const props = useProps2("InputError", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size2,
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
  const _getStyles = useStyles2({
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
  const getStyles2 = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
  return /* @__PURE__ */ React6.createElement(
    Box2,
    __spreadValues(__spreadValues({
      component: "p",
      ref,
      variant,
      size: size2
    }, getStyles2("error")), others)
  );
});
InputError.displayName = "@raikou/core/InputError";

// ../components/Input/src/InputDescription/InputDescription.tsx
import React7 from "react";
import {
  Box as Box3,
  factory as factory3,
  useProps as useProps3,
  useStyles as useStyles3,
  getFontSize as getFontSize3,
  rem as rem2,
  createVarsResolver as createVarsResolver3
} from "@raikou/core";
var defaultProps3 = {};
var varsResolver3 = createVarsResolver3(
  (_, { size: size2 }) => ({
    description: {
      "--input-description-size": size2 === void 0 ? void 0 : `calc(${getFontSize3(size2)} - ${rem2(2)})`
    }
  })
);
var InputDescription = factory3(
  (_props, ref) => {
    const props = useProps3("InputDescription", defaultProps3, _props);
    const _a = useProps3("InputDescription", defaultProps3, props), {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size: size2,
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
    const _getStyles = useStyles3({
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
    const getStyles2 = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ React7.createElement(
      Box3,
      __spreadValues(__spreadValues({
        component: "p",
        ref,
        variant,
        size: size2
      }, getStyles2("description")), others)
    );
  }
);
InputDescription.displayName = "@raikou/core/InputDescription";

// ../components/Input/src/InputPlaceholder/InputPlaceholder.tsx
import React8 from "react";
import {
  Box as Box4,
  factory as factory4,
  useProps as useProps4,
  useStyles as useStyles4
} from "@raikou/core";
var defaultProps4 = {};
var InputPlaceholder = factory4(
  (_props, ref) => {
    const props = useProps4("InputPlaceholder", defaultProps4, _props);
    const _a = useProps4("InputPlaceholder", defaultProps4, props), {
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
    const getStyles2 = useStyles4({
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
    return /* @__PURE__ */ React8.createElement(
      Box4,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("placeholder")), {
        component: "span",
        variant,
        ref
      }), others)
    );
  }
);
InputPlaceholder.displayName = "@raikou/core/InputPlaceholder";

// ../components/Input/src/InputWrapper/InputWrapper.tsx
import React9 from "react";
import { useId } from "@raikou/hooks";
import {
  Box as Box5,
  factory as factory5,
  useProps as useProps5,
  useStyles as useStyles5,
  createVarsResolver as createVarsResolver4,
  getFontSize as getFontSize4,
  rem as rem3
} from "@raikou/core";

// ../components/Input/src/InputWrapper/get-input-offsets/get-input-offsets.ts
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder[inputIndex - 1];
  const belowInput = inputWrapperOrder[inputIndex + 1];
  const offsetTop = hasDescription && aboveInput === "description" || hasError && aboveInput === "error";
  const offsetBottom = hasDescription && belowInput === "description" || hasError && belowInput === "error";
  return { offsetBottom, offsetTop };
}

// ../components/Input/src/InputWrapper/InputWrapper.tsx
var defaultProps5 = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
var varsResolver4 = createVarsResolver4((_, { size: size2 }) => ({
  label: {
    "--input-label-size": getFontSize4(size2),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size2 === void 0 ? void 0 : `calc(${getFontSize4(size2)} - ${rem3(2)})`
  },
  description: {
    "--input-description-size": size2 === void 0 ? void 0 : `calc(${getFontSize4(size2)} - ${rem3(2)})`
  }
}));
var InputWrapper = factory5((_props, ref) => {
  const props = useProps5("InputWrapper", defaultProps5, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size: size2,
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
  const getStyles2 = useStyles5({
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
    size: size2,
    variant,
    __staticSelector
  };
  const idBase = useId(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
  const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = (labelProps == null ? void 0 : labelProps.id) || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ React9.createElement(
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
  const _description = hasDescription && /* @__PURE__ */ React9.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ React9.createElement(React9.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ React9.createElement(
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
  return /* @__PURE__ */ React9.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles: getStyles2,
        describedBy,
        inputId,
        labelId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ React9.createElement(
      Box5,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size: size2
      }, getStyles2("root")), others),
      content
    )
  );
});
InputWrapper.displayName = "@raikou/core/InputWrapper";

// ../components/Input/src/Input.tsx
var defaultProps6 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
var varsResolver5 = createVarsResolver5((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--raikou-spacing-xs) / 2)" : void 0,
    "--input-height": getSize(props.size, "input-height"),
    "--input-fz": getFontSize5(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : getRadius(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem4(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem4(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? getSize(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
var Input = polymorphicFactory((_props, ref) => {
  const props = useProps6("Input", defaultProps6, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size: size2,
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
  const { styleProps, rest } = extractStyleProps(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = {
    offsetBottom: ctx == null ? void 0 : ctx.offsetBottom,
    offsetTop: ctx == null ? void 0 : ctx.offsetTop
  };
  const getStyles2 = useStyles6({
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
  return /* @__PURE__ */ React10.createElement(
    Box6,
    __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, getStyles2("wrapper")), styleProps), wrapperProps), {
      mod: {
        error: !!error && withErrorStyles,
        pointer,
        disabled,
        multiline,
        "data-with-right-section": !!rightSection,
        "data-with-left-section": !!leftSection
      },
      variant,
      size: size2
    }),
    leftSection && /* @__PURE__ */ React10.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles2("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ React10.createElement(
      Box6,
      __spreadValues(__spreadProps(__spreadValues(__spreadValues({
        component: "input"
      }, rest), ariaAttributes), {
        ref,
        required,
        mod: { disabled, error: !!error && withErrorStyles },
        variant
      }), getStyles2("input"))
    ),
    rightSection && /* @__PURE__ */ React10.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, rightSectionProps), {
        "data-position": "right"
      }), getStyles2("section", {
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

// ../components/Input/src/use-input-props.ts
import {
  extractStyleProps as extractStyleProps2,
  useProps as useProps7
} from "@raikou/core";
function useInputProps(component, defaultProps52, _props) {
  const props = useProps7(component, defaultProps52, _props);
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
    size: size2,
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
  const { styleProps, rest } = extractStyleProps2(others);
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
    size: size2,
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
      size: size2,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error,
      variant
    }
  });
}

// ../components/InputBase/src/InputBase.tsx
var defaultProps7 = {
  __staticSelector: "InputBase",
  withAria: true
};
var InputBase = polymorphicFactory2((props, ref) => {
  const _a = useInputProps(
    "InputBase",
    defaultProps7,
    props
  ), { inputProps, wrapperProps } = _a, others = __objRest(_a, ["inputProps", "wrapperProps"]);
  return /* @__PURE__ */ React11.createElement(Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ React11.createElement(Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), others), { ref })));
});
InputBase.displayName = "@raikou/core/InputBase";

// src/components/TimeInput/TimeInput.tsx
var defaultProps8 = {};
var TimeInput = factory6((_props, ref) => {
  const props = useProps8("TimeInput", defaultProps8, _props);
  const _a = props, { classNames, styles, unstyled, vars, withSeconds } = _a, others = __objRest(_a, ["classNames", "styles", "unstyled", "vars", "withSeconds"]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  return /* @__PURE__ */ React12.createElement(
    InputBase,
    __spreadProps(__spreadValues({
      classNames: __spreadProps(__spreadValues({}, resolvedClassNames), {
        input: cx("dates-timeInput-input", resolvedClassNames == null ? void 0 : resolvedClassNames.input)
      }),
      styles: resolvedStyles,
      unstyled,
      ref
    }, others), {
      step: withSeconds ? 1 : 60,
      type: "time",
      __staticSelector: "TimeInput"
    })
  );
});
TimeInput.displayName = "@raikou/dates/TimeInput";

// src/components/Day/Day.tsx
import dayjs5 from "dayjs";
import React14 from "react";
import {
  factory as factory7,
  useProps as useProps10,
  useStyles as useStyles8,
  createVarsResolver as createVarsResolver6,
  getSize as getSize2
} from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React13 from "react";
import {
  Box as Box7,
  useProps as useProps9,
  useStyles as useStyles7,
  polymorphicFactory as polymorphicFactory3
} from "@raikou/core";
var defaultProps9 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory3(
  (_props, ref) => {
    const props = useProps9("UnstyledButton", defaultProps9, _props);
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
    const getStyles2 = useStyles7({
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
    return /* @__PURE__ */ React13.createElement(
      Box7,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// src/utils/get-formatted-date.ts
import dayjs from "dayjs";
function getFormattedDate({
  type,
  date,
  locale,
  format,
  labelSeparator
}) {
  const formatDate = (value) => dayjs(value).locale(locale).format(format);
  if (type === "default") {
    return date === null ? "" : formatDate(date);
  }
  if (type === "multiple") {
    return date.map(formatDate).join(", ");
  }
  if (type === "range" && Array.isArray(date)) {
    if (date[0] && date[1]) {
      return `${formatDate(date[0])} ${labelSeparator} ${formatDate(date[1])}`;
    }
    if (date[0]) {
      return `${formatDate(date[0])} ${labelSeparator} `;
    }
    return "";
  }
  return "";
}

// src/utils/handle-control-key-down.ts
function getNextIndex({ direction, levelIndex, rowIndex, cellIndex, size: size2 }) {
  switch (direction) {
    case "up":
      if (levelIndex === 0 && rowIndex === 0) {
        return null;
      }
      if (rowIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: cellIndex <= size2[levelIndex - 1][size2[levelIndex - 1].length - 1] - 1 ? size2[levelIndex - 1].length - 1 : size2[levelIndex - 1].length - 2,
          cellIndex
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex - 1,
        cellIndex
      };
    case "down":
      if (rowIndex === size2[levelIndex].length - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex
        };
      }
      if (rowIndex === size2[levelIndex].length - 2 && cellIndex >= size2[levelIndex][size2[levelIndex].length - 1]) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex + 1,
        cellIndex
      };
    case "left":
      if (levelIndex === 0 && rowIndex === 0 && cellIndex === 0) {
        return null;
      }
      if (rowIndex === 0 && cellIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: size2[levelIndex - 1].length - 1,
          cellIndex: size2[levelIndex - 1][size2[levelIndex - 1].length - 1] - 1
        };
      }
      if (cellIndex === 0) {
        return {
          levelIndex,
          rowIndex: rowIndex - 1,
          cellIndex: size2[levelIndex][rowIndex - 1] - 1
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex - 1
      };
    case "right":
      if (rowIndex === size2[levelIndex].length - 1 && cellIndex === size2[levelIndex][rowIndex] - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex: 0
        };
      }
      if (cellIndex === size2[levelIndex][rowIndex] - 1) {
        return {
          levelIndex,
          rowIndex: rowIndex + 1,
          cellIndex: 0
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex + 1
      };
    default:
      return { levelIndex, rowIndex, cellIndex };
  }
}
function focusOnNextFocusableControl({
  controlsRef,
  direction,
  levelIndex,
  rowIndex,
  cellIndex,
  size: size2
}) {
  var _a, _b, _c;
  const nextIndex = getNextIndex({ direction, size: size2, rowIndex, cellIndex, levelIndex });
  if (!nextIndex) {
    return;
  }
  const controlToFocus = (_c = (_b = (_a = controlsRef.current) == null ? void 0 : _a[nextIndex.levelIndex]) == null ? void 0 : _b[nextIndex.rowIndex]) == null ? void 0 : _c[nextIndex.cellIndex];
  if (!controlToFocus) {
    return;
  }
  if (controlToFocus.disabled || controlToFocus.getAttribute("data-hidden") || controlToFocus.getAttribute("data-outside")) {
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex: nextIndex.levelIndex,
      cellIndex: nextIndex.cellIndex,
      rowIndex: nextIndex.rowIndex,
      size: size2
    });
  } else {
    controlToFocus.focus();
  }
}
function getDirection(key) {
  switch (key) {
    case "ArrowDown":
      return "down";
    case "ArrowUp":
      return "up";
    case "ArrowRight":
      return "right";
    case "ArrowLeft":
      return "left";
    default:
      return null;
  }
}
function getControlsSize(controlsRef) {
  var _a;
  return (_a = controlsRef.current) == null ? void 0 : _a.map((column) => column.map((row) => row.length));
}
function handleControlKeyDown({
  controlsRef,
  levelIndex,
  rowIndex,
  cellIndex,
  event
}) {
  const direction = getDirection(event.key);
  if (direction) {
    event.preventDefault();
    const size2 = getControlsSize(controlsRef);
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex,
      rowIndex,
      cellIndex,
      size: size2
    });
  }
}

// src/utils/assign-time/assign-time.ts
function assignTime(originalDate, resultDate) {
  if (!originalDate || !resultDate) {
    return resultDate;
  }
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  const ms = originalDate.getMilliseconds();
  const result = new Date(resultDate);
  result.setHours(hours);
  result.setMinutes(minutes);
  result.setSeconds(seconds);
  result.setMilliseconds(ms);
  return result;
}

// src/utils/get-default-clamped-date.ts
import dayjs4 from "dayjs";

// src/utils/shift-timezone.ts
import dayjs3 from "dayjs";

// src/utils/get-timezone-offset.ts
import dayjs2 from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";
dayjs2.extend(utcPlugin);
dayjs2.extend(timezonePlugin);
function getTimezoneOffset(date, timezone) {
  if (timezone) {
    return dayjs2(date).tz(timezone).utcOffset() + date.getTimezoneOffset();
  }
  return 0;
}

// src/utils/shift-timezone.ts
var updateTimezone = (date, timezone, direction) => {
  if (!date) {
    return null;
  }
  if (!timezone) {
    return date;
  }
  let offset2 = getTimezoneOffset(date, timezone);
  if (direction === "remove") {
    offset2 *= -1;
  }
  return dayjs3(date).add(offset2, "minutes").toDate();
};
function shiftTimezone(direction, date, timezone, disabled) {
  if (disabled || !date) {
    return date;
  }
  if (Array.isArray(date)) {
    return date.map((d) => updateTimezone(d, timezone, direction));
  }
  return updateTimezone(date, timezone, direction);
}

// src/utils/get-default-clamped-date.ts
function getDefaultClampedDate({
  minDate,
  maxDate,
  timezone
}) {
  const today = shiftTimezone("add", /* @__PURE__ */ new Date(), timezone);
  if (!minDate && !maxDate) {
    return today;
  }
  if (minDate && dayjs4(today).isBefore(minDate)) {
    return minDate;
  }
  if (maxDate && dayjs4(today).isAfter(maxDate)) {
    return maxDate;
  }
  return today;
}

// src/components/Day/Day.tsx
var defaultProps10 = {};
var varsResolver6 = createVarsResolver6((_, { size: size2 }) => ({
  day: {
    "--day-size": getSize2(size2, "day-size")
  }
}));
var Day = factory7((_props, ref) => {
  const props = useProps10("Day", defaultProps10, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    date,
    disabled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    lastInRange,
    hidden,
    static: isStatic
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "date",
    "disabled",
    "__staticSelector",
    "weekend",
    "outside",
    "selected",
    "renderDay",
    "inRange",
    "firstInRange",
    "lastInRange",
    "hidden",
    "static"
  ]);
  const getStyles2 = useStyles8({
    name: __staticSelector || "Day",
    classes: {
      day: "dates-day"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6,
    rootSelector: "day"
  });
  const ctx = useDatesContext();
  return /* @__PURE__ */ React14.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("day")), {
      component: isStatic ? "div" : "button",
      ref,
      disabled,
      "data-today": dayjs5(date).isSame(
        shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone()),
        "day"
      ) || void 0,
      "data-hidden": hidden || void 0,
      "data-disabled": disabled || void 0,
      "data-weekend": !disabled && !outside && weekend || void 0,
      "data-outside": !disabled && outside || void 0,
      "data-selected": !disabled && selected || void 0,
      "data-in-range": inRange && !disabled || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      "data-static": isStatic || void 0,
      unstyled
    }), others),
    (renderDay == null ? void 0 : renderDay(date)) || date.getDate()
  );
});
Day.displayName = "@raikou/dates/Day";

// src/components/WeekdaysRow/WeekdaysRow.tsx
import React15 from "react";
import {
  Box as Box8,
  factory as factory8,
  useProps as useProps11,
  useStyles as useStyles9,
  createVarsResolver as createVarsResolver7,
  getFontSize as getFontSize6,
  getSpacing
} from "@raikou/core";

// src/components/WeekdaysRow/get-weekdays-names/get-weekdays-names.ts
import dayjs6 from "dayjs";
function getWeekdayNames({
  locale,
  format = "dd",
  firstDayOfWeek = 1
}) {
  const baseDate = dayjs6().day(firstDayOfWeek);
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    if (typeof format === "string") {
      labels.push(dayjs6(baseDate).add(i, "days").locale(locale).format(format));
    } else {
      labels.push(format(dayjs6(baseDate).add(i, "days").toDate()));
    }
  }
  return labels;
}

// src/components/WeekdaysRow/WeekdaysRow.tsx
var defaultProps11 = {};
var varsResolver7 = createVarsResolver7((_, { size: size2 }) => ({
  weekdaysRow: {
    "--wr-fz": getFontSize6(size2),
    "--wr-spacing": getSpacing(size2)
  }
}));
var WeekdaysRow = factory8((_props, ref) => {
  const props = useProps11("WeekdaysRow", defaultProps11, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent = "th",
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "cellComponent",
    "__staticSelector"
  ]);
  const getStyles2 = useStyles9({
    name: __staticSelector || "WeekdaysRow",
    classes: {
      weekday: "dates-weekday",
      weekdaysRow: ""
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7,
    rootSelector: "weekdaysRow"
  });
  const ctx = useDatesContext();
  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek)
  }).map((weekday, index3) => /* @__PURE__ */ React15.createElement(CellComponent, __spreadValues({ key: index3 }, getStyles2("weekday")), weekday));
  return /* @__PURE__ */ React15.createElement(Box8, __spreadValues(__spreadValues({ component: "tr", ref }, getStyles2("weekdaysRow")), others), weekdays);
});
WeekdaysRow.displayName = "@raikou/dates/WeekdaysRow";

// src/components/Month/get-end-of-week/get-end-of-week.ts
function getEndOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  while (value.getDay() !== lastDayOfWeek) {
    value.setDate(value.getDate() + 1);
  }
  return value;
}

// src/components/Month/get-start-of-week/get-start-of-week.ts
function getStartOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  while (value.getDay() !== firstDayOfWeek) {
    value.setDate(value.getDate() - 1);
  }
  return value;
}

// src/components/Month/get-month-days/get-month-days.ts
function getMonthDays(month, firstDayOfWeek = 1, timezone = void 0) {
  const currentMonth = month.getMonth();
  const startOfMonth = shiftTimezone(
    "add",
    new Date(month.getFullYear(), currentMonth, 1),
    timezone
  );
  const endOfMonth = shiftTimezone(
    "add",
    new Date(month.getFullYear(), month.getMonth() + 1, 0),
    timezone
  );
  const endDate = getEndOfWeek(endOfMonth, firstDayOfWeek);
  const date = getStartOfWeek(startOfMonth, firstDayOfWeek);
  const weeks = [];
  while (date <= endDate) {
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    weeks.push(days);
  }
  return weeks;
}

// src/components/Month/is-same-month/is-same-month.ts
function isSameMonth(date, comparison) {
  return date.getFullYear() === comparison.getFullYear() && date.getMonth() === comparison.getMonth();
}

// src/components/Month/Month.tsx
import dayjs10 from "dayjs";
import React16 from "react";
import {
  Box as Box9,
  factory as factory9,
  useProps as useProps12,
  useStyles as useStyles10,
  useResolvedStylesApi as useResolvedStylesApi2
} from "@raikou/core";

// src/components/Month/get-date-in-tab-order/get-date-in-tab-order.ts
import dayjs9 from "dayjs";

// src/components/Month/is-after-min-date/is-after-min-date.ts
import dayjs7 from "dayjs";
function isAfterMinDate(date, minDate) {
  return minDate instanceof Date ? dayjs7(date).isAfter(dayjs7(minDate).subtract(1, "day"), "day") : true;
}

// src/components/Month/is-before-max-date/is-before-max-date.ts
import dayjs8 from "dayjs";
function isBeforeMaxDate(date, maxDate) {
  return maxDate instanceof Date ? dayjs8(date).isBefore(dayjs8(maxDate).add(1, "day"), "day") : true;
}

// src/components/Month/get-date-in-tab-order/get-date-in-tab-order.ts
function getDateInTabOrder(dates, minDate, maxDate, getDateControlProps, excludeDate, hideOutsideDates, month) {
  const enabledDates = dates.flat().filter(
    (date) => {
      var _a;
      return isBeforeMaxDate(date, maxDate) && isAfterMinDate(date, minDate) && !(excludeDate == null ? void 0 : excludeDate(date)) && !((_a = getDateControlProps == null ? void 0 : getDateControlProps(date)) == null ? void 0 : _a.disabled) && (!hideOutsideDates || isSameMonth(date, month));
    }
  );
  const selectedDate = enabledDates.find((date) => {
    var _a;
    return (_a = getDateControlProps == null ? void 0 : getDateControlProps(date)) == null ? void 0 : _a.selected;
  });
  if (selectedDate) {
    return selectedDate;
  }
  const currentDate = enabledDates.find((date) => dayjs9().isSame(date, "date"));
  if (currentDate) {
    return currentDate;
  }
  return enabledDates[0];
}

// src/components/Month/Month.tsx
var defaultProps12 = {
  withCellSpacing: true
};
var Month = factory9((_props, ref) => {
  const props = useProps12("Month", defaultProps12, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    month,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    static: isStatic,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size: size2
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "__staticSelector",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "month",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "minDate",
    "maxDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "static",
    "__getDayRef",
    "__onDayKeyDown",
    "__onDayClick",
    "__onDayMouseEnter",
    "__preventFocus",
    "__stopPropagation",
    "withCellSpacing",
    "size"
  ]);
  const getStyles2 = useStyles10({
    name: __staticSelector || "Month",
    classes: {
      month: "dates-month",
      monthCell: "dates-monthCell"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "month"
  });
  const ctx = useDatesContext();
  const dates = getMonthDays(month, ctx.getFirstDayOfWeek(firstDayOfWeek));
  const dateInTabOrder = getDateInTabOrder(
    dates,
    minDate,
    maxDate,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month
  );
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi2({
    classNames,
    styles,
    props
  });
  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth(date, month);
      const ariaLabel = (getDayAriaLabel == null ? void 0 : getDayAriaLabel(date)) || dayjs10(date).locale(locale || ctx.locale).format("D MMMM YYYY");
      const dayProps = getDayProps == null ? void 0 : getDayProps(date);
      const isDateInTabOrder = dayjs10(date).isSame(dateInTabOrder, "date");
      return /* @__PURE__ */ React16.createElement(
        "td",
        __spreadProps(__spreadValues({
          key: date.toString()
        }, getStyles2("monthCell")), {
          "data-with-spacing": withCellSpacing || void 0
        }),
        /* @__PURE__ */ React16.createElement(
          Day,
          __spreadProps(__spreadValues({
            __staticSelector: __staticSelector || "Month",
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            "data-raikou-stop-propagation": __stopPropagation || void 0,
            renderDay,
            date,
            size: size2,
            weekend: ctx.getWeekendDays(weekendDays).includes(date.getDay()),
            outside,
            hidden: hideOutsideDates ? outside : false,
            "aria-label": ariaLabel,
            static: isStatic,
            disabled: (excludeDate == null ? void 0 : excludeDate(date)) || !isBeforeMaxDate(date, maxDate) || !isAfterMinDate(date, minDate),
            ref: (node) => __getDayRef == null ? void 0 : __getDayRef(rowIndex, cellIndex, node)
          }, dayProps), {
            onKeyDown: (event) => {
              var _a2;
              (_a2 = dayProps == null ? void 0 : dayProps.onKeyDown) == null ? void 0 : _a2.call(dayProps, event);
              __onDayKeyDown == null ? void 0 : __onDayKeyDown(event, { rowIndex, cellIndex, date });
            },
            onMouseEnter: (event) => {
              var _a2;
              (_a2 = dayProps == null ? void 0 : dayProps.onMouseEnter) == null ? void 0 : _a2.call(dayProps, event);
              __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(event, date);
            },
            onClick: (event) => {
              var _a2;
              (_a2 = dayProps == null ? void 0 : dayProps.onClick) == null ? void 0 : _a2.call(dayProps, event);
              __onDayClick == null ? void 0 : __onDayClick(event, date);
            },
            onMouseDown: (event) => {
              var _a2;
              (_a2 = dayProps == null ? void 0 : dayProps.onMouseDown) == null ? void 0 : _a2.call(dayProps, event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isDateInTabOrder ? -1 : 0
          })
        )
      );
    });
    return /* @__PURE__ */ React16.createElement("tr", __spreadValues({ key: rowIndex }, getStyles2("monthRow")), cells);
  });
  return /* @__PURE__ */ React16.createElement(
    Box9,
    __spreadValues(__spreadProps(__spreadValues({
      component: "table"
    }, getStyles2("month")), {
      size: size2,
      ref
    }), others),
    !hideWeekdays && /* @__PURE__ */ React16.createElement("thead", __spreadValues({}, getStyles2("monthThead")), /* @__PURE__ */ React16.createElement(
      WeekdaysRow,
      {
        __staticSelector: __staticSelector || "Month",
        locale,
        firstDayOfWeek,
        weekdayFormat,
        size: size2,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled
      }
    )),
    /* @__PURE__ */ React16.createElement("tbody", __spreadValues({}, getStyles2("monthTbody")), rows)
  );
});
Month.displayName = "@raikou/dates/Month";

// src/components/PickerControl/PickerControl.tsx
import React17 from "react";
import {
  factory as factory10,
  useProps as useProps13,
  useStyles as useStyles11,
  createVarsResolver as createVarsResolver8,
  getFontSize as getFontSize7,
  getSize as getSize3
} from "@raikou/core";
var defaultProps13 = {};
var varsResolver8 = createVarsResolver8(
  (_, { size: size2 }) => ({
    pickerControl: {
      "--dpc-fz": getFontSize7(size2),
      "--dpc-size": getSize3(size2, "dpc-size")
    }
  })
);
var PickerControl = factory10((_props, ref) => {
  const props = useProps13("PickerControl", defaultProps13, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    firstInRange,
    lastInRange,
    inRange,
    __staticSelector,
    selected,
    disabled
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "firstInRange",
    "lastInRange",
    "inRange",
    "__staticSelector",
    "selected",
    "disabled"
  ]);
  const getStyles2 = useStyles11({
    name: __staticSelector || "PickerControl",
    classes: {
      pickerControl: "dates-pickerControl"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8,
    rootSelector: "pickerControl"
  });
  return /* @__PURE__ */ React17.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("pickerControl")), {
      ref,
      unstyled,
      "data-picker-control": true,
      "data-selected": selected && !disabled || void 0,
      "data-disabled": disabled || void 0,
      "data-in-range": inRange && !disabled && !selected || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      disabled
    }), others)
  );
});
PickerControl.displayName = "@raikou/dates/PickerControl";

// src/components/YearsList/YearsList.tsx
import dayjs13 from "dayjs";
import React18 from "react";
import {
  Box as Box10,
  factory as factory11,
  useProps as useProps14,
  useStyles as useStyles12
} from "@raikou/core";

// src/components/YearsList/get-years-data/get-years-data.ts
function getYearsData(decade) {
  const year = decade.getFullYear();
  const rounded = year - year % 10;
  let currentYearIndex = 0;
  const results = [[], [], [], []];
  for (let i = 0; i < 4; i += 1) {
    const max3 = i === 3 ? 1 : 3;
    for (let j = 0; j < max3; j += 1) {
      results[i].push(new Date(rounded + currentYearIndex, 0));
      currentYearIndex += 1;
    }
  }
  return results;
}

// src/components/YearsList/get-year-in-tab-order/get-year-in-tab-order.ts
import dayjs12 from "dayjs";

// src/components/YearsList/is-year-disabled/is-year-disabled.ts
import dayjs11 from "dayjs";
function isYearDisabled(year, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && dayjs11(year).isBefore(minDate, "year")) {
    return true;
  }
  if (maxDate && dayjs11(year).isAfter(maxDate, "year")) {
    return true;
  }
  return false;
}

// src/components/YearsList/get-year-in-tab-order/get-year-in-tab-order.ts
function getYearInTabOrder(years, minDate, maxDate, getYearControlProps) {
  const enabledYears = years.flat().filter(
    (year) => {
      var _a;
      return !isYearDisabled(year, minDate, maxDate) && !((_a = getYearControlProps == null ? void 0 : getYearControlProps(year)) == null ? void 0 : _a.disabled);
    }
  );
  const selectedYear = enabledYears.find((year) => {
    var _a;
    return (_a = getYearControlProps == null ? void 0 : getYearControlProps(year)) == null ? void 0 : _a.selected;
  });
  if (selectedYear) {
    return selectedYear;
  }
  const currentYear = enabledYears.find((year) => dayjs12().isSame(year, "year"));
  if (currentYear) {
    return currentYear;
  }
  return enabledYears[0];
}

// src/components/YearsList/YearsList.tsx
var defaultProps14 = {
  yearsListFormat: "YYYY",
  withCellSpacing: true
};
var YearsList = factory11((_props, ref) => {
  const props = useProps14("YearsList", defaultProps14, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    vars,
    decade,
    yearsListFormat,
    locale,
    minDate,
    maxDate,
    getYearControlProps,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size: size2
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "decade",
    "yearsListFormat",
    "locale",
    "minDate",
    "maxDate",
    "getYearControlProps",
    "__staticSelector",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "__preventFocus",
    "__stopPropagation",
    "withCellSpacing",
    "size"
  ]);
  const getStyles2 = useStyles12({
    name: __staticSelector || "YearsList",
    classes: {
      yearsList: "dates-yearsList",
      yearsListCell: "dates-yearsListCell"
    },
    props,
    className,
    style,
    classNames,
    styles,
    vars,
    rootSelector: "yearsList"
  });
  const ctx = useDatesContext();
  const years = getYearsData(decade);
  const yearInTabOrder = getYearInTabOrder(
    years,
    minDate,
    maxDate,
    getYearControlProps
  );
  const rows = years.map((yearsRow, rowIndex) => {
    const cells = yearsRow.map((year, cellIndex) => {
      const controlProps = getYearControlProps == null ? void 0 : getYearControlProps(year);
      const isYearInTabOrder = dayjs13(year).isSame(yearInTabOrder, "year");
      return /* @__PURE__ */ React18.createElement(
        "td",
        __spreadProps(__spreadValues({
          key: cellIndex
        }, getStyles2("yearsListCell")), {
          "data-with-spacing": withCellSpacing || void 0
        }),
        /* @__PURE__ */ React18.createElement(
          PickerControl,
          __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles2("yearsListControl")), {
            size: size2,
            "data-raikou-stop-propagation": __stopPropagation || void 0,
            disabled: isYearDisabled(year, minDate, maxDate),
            ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node)
          }), controlProps), {
            onKeyDown: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a2.call(controlProps, event);
              __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: year });
            },
            onClick: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a2.call(controlProps, event);
              __onControlClick == null ? void 0 : __onControlClick(event, year);
            },
            onMouseEnter: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a2.call(controlProps, event);
              __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, year);
            },
            onMouseDown: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a2.call(controlProps, event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isYearInTabOrder ? -1 : 0
          }),
          dayjs13(year).locale(ctx.getLocale(locale)).format(yearsListFormat)
        )
      );
    });
    return /* @__PURE__ */ React18.createElement("tr", __spreadValues({ key: rowIndex }, getStyles2("yearsListRow")), cells);
  });
  return /* @__PURE__ */ React18.createElement(
    Box10,
    __spreadValues(__spreadValues({
      component: "table",
      ref,
      size: size2
    }, getStyles2("yearsList")), others),
    /* @__PURE__ */ React18.createElement("tbody", null, rows)
  );
});
YearsList.displayName = "@raikou/dates/YearsList";

// src/components/MonthsList/MonthsList.tsx
import React19 from "react";
import {
  Box as Box11,
  factory as factory12,
  useProps as useProps15,
  useStyles as useStyles13
} from "@raikou/core";
import dayjs17 from "dayjs";

// src/components/MonthsList/get-months-data/get-months-data.ts
import dayjs14 from "dayjs";
function getMonthsData(year) {
  const startOfYear = dayjs14(year).startOf("year").toDate();
  const results = [[], [], [], []];
  let currentMonthIndex = 0;
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      results[i].push(dayjs14(startOfYear).add(currentMonthIndex, "months").toDate());
      currentMonthIndex += 1;
    }
  }
  return results;
}

// src/components/MonthsList/get-month-in-tab-order/get-month-in-tab-order.ts
import dayjs16 from "dayjs";

// src/components/MonthsList/is-month-disabled/is-month-disabled.ts
import dayjs15 from "dayjs";
function isMonthDisabled(month, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && dayjs15(month).isBefore(minDate, "month")) {
    return true;
  }
  if (maxDate && dayjs15(month).isAfter(maxDate, "month")) {
    return true;
  }
  return false;
}

// src/components/MonthsList/get-month-in-tab-order/get-month-in-tab-order.ts
function getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps) {
  const enabledMonths = months.flat().filter(
    (month) => {
      var _a;
      return !isMonthDisabled(month, minDate, maxDate) && !((_a = getMonthControlProps == null ? void 0 : getMonthControlProps(month)) == null ? void 0 : _a.disabled);
    }
  );
  const selectedMonth = enabledMonths.find((month) => {
    var _a;
    return (_a = getMonthControlProps == null ? void 0 : getMonthControlProps(month)) == null ? void 0 : _a.selected;
  });
  if (selectedMonth) {
    return selectedMonth;
  }
  const currentMonth = enabledMonths.find((month) => dayjs16().isSame(month, "month"));
  if (currentMonth) {
    return currentMonth;
  }
  return enabledMonths[0];
}

// src/components/MonthsList/MonthsList.tsx
var defaultProps15 = {
  monthsListFormat: "MMM",
  withCellSpacing: true
};
var MonthsList = factory12((_props, ref) => {
  const props = useProps15("MonthsList", defaultProps15, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    year,
    monthsListFormat,
    locale,
    minDate,
    maxDate,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size: size2
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "__staticSelector",
    "year",
    "monthsListFormat",
    "locale",
    "minDate",
    "maxDate",
    "getMonthControlProps",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "__preventFocus",
    "__stopPropagation",
    "withCellSpacing",
    "size"
  ]);
  const getStyles2 = useStyles13({
    name: __staticSelector || "MonthsList",
    classes: {
      monthsList: "dates-monthsList",
      monthsListCell: "dates-monthsListCell"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "monthsList"
  });
  const ctx = useDatesContext();
  const months = getMonthsData(year);
  const monthInTabOrder = getMonthInTabOrder(
    months,
    minDate,
    maxDate,
    getMonthControlProps
  );
  const rows = months.map((monthsRow, rowIndex) => {
    const cells = monthsRow.map((month, cellIndex) => {
      const controlProps = getMonthControlProps == null ? void 0 : getMonthControlProps(month);
      const isMonthInTabOrder = dayjs17(month).isSame(monthInTabOrder, "month");
      return /* @__PURE__ */ React19.createElement(
        "td",
        __spreadProps(__spreadValues({
          key: cellIndex
        }, getStyles2("monthsListCell")), {
          "data-with-spacing": withCellSpacing || void 0
        }),
        /* @__PURE__ */ React19.createElement(
          PickerControl,
          __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, getStyles2("monthsListControl")), {
            size: size2,
            unstyled,
            __staticSelector: __staticSelector || "MonthsList",
            "data-raikou-stop-propagation": __stopPropagation || void 0,
            disabled: isMonthDisabled(month, minDate, maxDate),
            ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node)
          }), controlProps), {
            onKeyDown: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a2.call(controlProps, event);
              __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: month });
            },
            onClick: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a2.call(controlProps, event);
              __onControlClick == null ? void 0 : __onControlClick(event, month);
            },
            onMouseEnter: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a2.call(controlProps, event);
              __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, month);
            },
            onMouseDown: (event) => {
              var _a2;
              (_a2 = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a2.call(controlProps, event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isMonthInTabOrder ? -1 : 0
          }),
          dayjs17(month).locale(ctx.getLocale(locale)).format(monthsListFormat)
        )
      );
    });
    return /* @__PURE__ */ React19.createElement("tr", __spreadValues({ key: rowIndex }, getStyles2("monthsListRow")), cells);
  });
  return /* @__PURE__ */ React19.createElement(
    Box11,
    __spreadValues(__spreadValues({
      component: "table",
      ref,
      size: size2
    }, getStyles2("monthsList")), others),
    /* @__PURE__ */ React19.createElement("tbody", null, rows)
  );
});
MonthsList.displayName = "@raikou/dates/MonthsList";

// src/components/CalendarHeader/CalendarHeader.tsx
import React21 from "react";
import {
  Box as Box12,
  factory as factory13,
  useProps as useProps16,
  useStyles as useStyles14,
  createVarsResolver as createVarsResolver9,
  getSize as getSize4,
  getFontSize as getFontSize8
} from "@raikou/core";

// ../components/Accordion/src/AccordionChevron.tsx
import React20 from "react";
import { rem as rem5 } from "@raikou/core";
function AccordionChevron(_a) {
  var _b = _a, {
    style,
    size: size2 = 16
  } = _b, others = __objRest(_b, [
    "style",
    "size"
  ]);
  return /* @__PURE__ */ React20.createElement(
    "svg",
    __spreadValues({
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: __spreadProps(__spreadValues({}, style), {
        width: rem5(size2),
        height: rem5(size2),
        display: "block"
      })
    }, others),
    /* @__PURE__ */ React20.createElement(
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

// src/components/CalendarHeader/CalendarHeader.tsx
var defaultProps16 = {
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true
};
var varsResolver9 = createVarsResolver9(
  (_, { size: size2 }) => ({
    calendarHeader: {
      "--dch-control-size": getSize4(size2, "dch-control-size"),
      "--dch-fz": getFontSize8(size2)
    }
  })
);
var CalendarHeader = factory13((_props, ref) => {
  const props = useProps16("CalendarHeader", defaultProps16, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    label,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    __staticSelector,
    __preventFocus,
    __stopPropagation
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "onLevelClick",
    "label",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    "__staticSelector",
    "__preventFocus",
    "__stopPropagation"
  ]);
  const getStyles2 = useStyles14({
    name: __staticSelector || "CalendarHeader",
    classes: {
      calendarHeader: "dates-calendarHeader",
      calendarHeaderLevel: "dates-calendarHeaderLevel",
      calendarHeaderControl: "dates-calendarHeaderControl",
      calendarHeaderControlIcon: "dates-calendarHeaderControlIcon"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver9,
    rootSelector: "calendarHeader"
  });
  const preventFocus = __preventFocus ? (event) => event.preventDefault() : void 0;
  return /* @__PURE__ */ React21.createElement(Box12, __spreadValues(__spreadProps(__spreadValues({}, getStyles2("calendarHeader")), { ref }), others), withPrevious && /* @__PURE__ */ React21.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles2("calendarHeaderControl")), {
      "data-direction": "previous",
      "aria-label": previousLabel,
      onClick: onPrevious,
      unstyled,
      onMouseDown: preventFocus,
      disabled: previousDisabled,
      "data-disabled": previousDisabled || void 0,
      tabIndex: __preventFocus ? -1 : 0,
      "data-raikou-stop-propagation": __stopPropagation || void 0
    }),
    previousIcon || /* @__PURE__ */ React21.createElement(
      AccordionChevron,
      __spreadProps(__spreadValues({}, getStyles2("calendarHeaderControlIcon")), {
        "data-direction": "previous",
        size: "45%"
      })
    )
  ), /* @__PURE__ */ React21.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({
      component: hasNextLevel ? "button" : "div"
    }, getStyles2("calendarHeaderLevel")), {
      onClick: hasNextLevel ? onLevelClick : void 0,
      unstyled,
      onMouseDown: hasNextLevel ? preventFocus : void 0,
      disabled: !hasNextLevel,
      "data-static": !hasNextLevel || void 0,
      "aria-label": levelControlAriaLabel,
      tabIndex: __preventFocus || !hasNextLevel ? -1 : 0,
      "data-raikou-stop-propagation": __stopPropagation || void 0
    }),
    label
  ), withNext && /* @__PURE__ */ React21.createElement(
    UnstyledButton,
    __spreadProps(__spreadValues({}, getStyles2("calendarHeaderControl")), {
      "data-direction": "next",
      "aria-label": nextLabel,
      onClick: onNext,
      unstyled,
      onMouseDown: preventFocus,
      disabled: nextDisabled,
      "data-disabled": nextDisabled || void 0,
      tabIndex: __preventFocus ? -1 : 0,
      "data-raikou-stop-propagation": __stopPropagation || void 0
    }),
    nextIcon || /* @__PURE__ */ React21.createElement(
      AccordionChevron,
      __spreadProps(__spreadValues({}, getStyles2("calendarHeaderControlIcon")), {
        "data-direction": "next",
        size: "45%"
      })
    )
  ));
});
CalendarHeader.displayName = "@raikou/dates/CalendarHeader";

// src/components/DecadeLevel/DecadeLevel.tsx
import React22 from "react";
import {
  Box as Box13,
  factory as factory14,
  useProps as useProps17
} from "@raikou/core";
import dayjs18 from "dayjs";

// src/components/DecadeLevel/get-decade-range/get-decade-range.ts
function getDecadeRange(decade) {
  const years = getYearsData(decade);
  return [years[0][0], years[3][0]];
}

// src/components/DecadeLevel/DecadeLevel.tsx
var defaultProps17 = {
  decadeLabelFormat: "YYYY"
};
var DecadeLevel = factory14((_props, ref) => {
  const props = useProps17("DecadeLevel", defaultProps17, _props);
  const _a = props, {
    decade: decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    __preventFocus: __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    decadeLabelFormat: decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    size: size2
  } = _a, others = __objRest(_a, [
    // YearsList settings
    "decade",
    "locale",
    "minDate",
    "maxDate",
    "yearsListFormat",
    "getYearControlProps",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "withCellSpacing",
    // CalendarHeader settings
    "__preventFocus",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "nextDisabled",
    "previousDisabled",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    // Other props
    "decadeLabelFormat",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__stopPropagation",
    "size"
  ]);
  const ctx = useDatesContext();
  const [startOfDecade, endOfDecade] = getDecadeRange(decade);
  const stylesApiProps = {
    __staticSelector: __staticSelector || "DecadeLevel",
    classNames,
    styles,
    unstyled,
    size: size2
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !dayjs18(endOfDecade).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !dayjs18(startOfDecade).startOf("year").isAfter(minDate) : false;
  const formatDecade = (date, format) => dayjs18(date).locale(locale || ctx.locale).format(format);
  return /* @__PURE__ */ React22.createElement(Box13, __spreadValues({ "data-decade-level": true, size: size2, ref }, others), /* @__PURE__ */ React22.createElement(
    CalendarHeader,
    __spreadValues({
      label: typeof decadeLabelFormat === "function" ? decadeLabelFormat(startOfDecade, endOfDecade) : `${formatDecade(
        startOfDecade,
        decadeLabelFormat
      )} \u2013 ${formatDecade(endOfDecade, decadeLabelFormat)}`,
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel: false,
      levelControlAriaLabel,
      withNext,
      withPrevious
    }, stylesApiProps)
  ), /* @__PURE__ */ React22.createElement(
    YearsList,
    __spreadValues({
      decade,
      locale,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      __preventFocus,
      __stopPropagation,
      withCellSpacing
    }, stylesApiProps)
  ));
});
DecadeLevel.displayName = "@raikou/dates/DecadeLevel";

// src/components/YearLevel/YearLevel.tsx
import React23 from "react";
import {
  Box as Box14,
  factory as factory15,
  useProps as useProps18
} from "@raikou/core";
import dayjs19 from "dayjs";
var defaultProps18 = {
  yearLabelFormat: "YYYY"
};
var YearLevel = factory15((_props, ref) => {
  const props = useProps18("YearLevel", defaultProps18, _props);
  const _a = props, {
    year: year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    __preventFocus: __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    yearLabelFormat: yearLabelFormat,
    __staticSelector,
    __stopPropagation,
    size: size2,
    classNames,
    styles,
    unstyled
  } = _a, others = __objRest(_a, [
    // MonthsList settings
    "year",
    "locale",
    "minDate",
    "maxDate",
    "monthsListFormat",
    "getMonthControlProps",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "withCellSpacing",
    // CalendarHeader settings
    "__preventFocus",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "onLevelClick",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    // Other props
    "yearLabelFormat",
    "__staticSelector",
    "__stopPropagation",
    "size",
    "classNames",
    "styles",
    "unstyled"
  ]);
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "YearLevel",
    classNames,
    styles,
    unstyled,
    size: size2
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !dayjs19(year).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !dayjs19(year).startOf("year").isAfter(minDate) : false;
  return /* @__PURE__ */ React23.createElement(Box14, __spreadValues({ "data-year-level": true, size: size2, ref }, others), /* @__PURE__ */ React23.createElement(
    CalendarHeader,
    __spreadValues({
      label: typeof yearLabelFormat === "function" ? yearLabelFormat(year) : dayjs19(year).locale(locale || ctx.locale).format(yearLabelFormat),
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel,
      levelControlAriaLabel,
      withNext,
      withPrevious
    }, stylesApiProps)
  ), /* @__PURE__ */ React23.createElement(
    MonthsList,
    __spreadValues({
      year,
      locale,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      __preventFocus,
      __stopPropagation,
      withCellSpacing
    }, stylesApiProps)
  ));
});
YearLevel.displayName = "@raikou/dates/YearLevel";

// src/components/MonthLevel/MonthLevel.tsx
import dayjs20 from "dayjs";
import React24 from "react";
import {
  Box as Box15,
  factory as factory16,
  useProps as useProps19
} from "@raikou/core";
var defaultProps19 = {
  monthLabelFormat: "MMMM YYYY"
};
var MonthLevel = factory16((_props, ref) => {
  const props = useProps19("MonthLevel", defaultProps19, _props);
  const _a = props, {
    month: month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    __preventFocus: __preventFocus,
    __stopPropagation,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    monthLabelFormat: monthLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    size: size2,
    static: isStatic
  } = _a, others = __objRest(_a, [
    // Month settings
    "month",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "minDate",
    "maxDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "__getDayRef",
    "__onDayKeyDown",
    "__onDayClick",
    "__onDayMouseEnter",
    "withCellSpacing",
    // CalendarHeader settings
    "__preventFocus",
    "__stopPropagation",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "onLevelClick",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    "levelControlAriaLabel",
    "withNext",
    "withPrevious",
    // Other props
    "monthLabelFormat",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "size",
    "static"
  ]);
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "MonthLevel",
    classNames,
    styles,
    unstyled,
    size: size2
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !dayjs20(month).endOf("month").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !dayjs20(month).startOf("month").isAfter(minDate) : false;
  return /* @__PURE__ */ React24.createElement(Box15, __spreadValues({ "data-month-level": true, size: size2, ref }, others), /* @__PURE__ */ React24.createElement(
    CalendarHeader,
    __spreadValues({
      label: typeof monthLabelFormat === "function" ? monthLabelFormat(month) : dayjs20(month).locale(locale || ctx.locale).format(monthLabelFormat),
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel,
      levelControlAriaLabel,
      withNext,
      withPrevious
    }, stylesApiProps)
  ), /* @__PURE__ */ React24.createElement(
    Month,
    __spreadValues({
      month,
      locale,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      minDate,
      maxDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      __getDayRef,
      __onDayKeyDown,
      __onDayClick,
      __onDayMouseEnter,
      __preventFocus,
      __stopPropagation,
      static: isStatic,
      withCellSpacing
    }, stylesApiProps)
  ));
});
MonthLevel.displayName = "@raikou/dates/MonthLevel";

// src/components/LevelsGroup/LevelsGroup.tsx
import React25 from "react";
import {
  Box as Box16,
  factory as factory17,
  useProps as useProps20,
  useStyles as useStyles15
} from "@raikou/core";
var defaultProps20 = {};
var LevelsGroup = factory17((_props, ref) => {
  const props = useProps20("LevelsGroup", defaultProps20, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "__staticSelector"
  ]);
  const getStyles2 = useStyles15({
    name: __staticSelector || "LevelsGroup",
    classes: {
      levelsGroup: "dates-levelsGroup"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "levelsGroup"
  });
  return /* @__PURE__ */ React25.createElement(Box16, __spreadValues(__spreadValues({ ref }, getStyles2("levelsGroup")), others));
});
LevelsGroup.displayName = "@raikou/dates/LevelsGroup";

// src/components/DecadeLevelGroup/DecadeLevelGroup.tsx
import dayjs21 from "dayjs";
import React26, { useRef } from "react";
import {
  factory as factory18,
  useProps as useProps21
} from "@raikou/core";
var defaultProps21 = {
  numberOfColumns: 1
};
var DecadeLevelGroup = factory18(
  (_props, ref) => {
    const props = useProps21("DecadeLevelGroup", defaultProps21, _props);
    const _a = props, {
      decade: decade,
      locale,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      __onControlClick,
      __onControlMouseEnter,
      withCellSpacing,
      __preventFocus: __preventFocus,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      nextDisabled,
      previousDisabled,
      classNames: classNames,
      styles,
      __staticSelector,
      __stopPropagation,
      numberOfColumns,
      levelControlAriaLabel,
      decadeLabelFormat,
      size: size2,
      vars
    } = _a, others = __objRest(_a, [
      // DecadeLevel settings
      "decade",
      "locale",
      "minDate",
      "maxDate",
      "yearsListFormat",
      "getYearControlProps",
      "__onControlClick",
      "__onControlMouseEnter",
      "withCellSpacing",
      // CalendarHeader settings
      "__preventFocus",
      "nextIcon",
      "previousIcon",
      "nextLabel",
      "previousLabel",
      "onNext",
      "onPrevious",
      "nextDisabled",
      "previousDisabled",
      // Other settings
      "classNames",
      "styles",
      "__staticSelector",
      "__stopPropagation",
      "numberOfColumns",
      "levelControlAriaLabel",
      "decadeLabelFormat",
      "size",
      "vars"
    ]);
    const controlsRef = useRef([]);
    const decades = Array(numberOfColumns).fill(0).map((_, decadeIndex) => {
      const currentDecade = dayjs21(decade).add(decadeIndex * 10, "years").toDate();
      return /* @__PURE__ */ React26.createElement(
        DecadeLevel,
        {
          key: decadeIndex,
          size: size2,
          yearsListFormat,
          decade: currentDecade,
          withNext: decadeIndex === numberOfColumns - 1,
          withPrevious: decadeIndex === 0,
          decadeLabelFormat,
          __onControlClick,
          __onControlMouseEnter,
          __onControlKeyDown: (event, payload) => handleControlKeyDown({
            levelIndex: decadeIndex,
            rowIndex: payload.rowIndex,
            cellIndex: payload.cellIndex,
            event,
            controlsRef
          }),
          __getControlRef: (rowIndex, cellIndex, node) => {
            if (!Array.isArray(controlsRef.current[decadeIndex])) {
              controlsRef.current[decadeIndex] = [];
            }
            if (!Array.isArray(controlsRef.current[decadeIndex][rowIndex])) {
              controlsRef.current[decadeIndex][rowIndex] = [];
            }
            controlsRef.current[decadeIndex][rowIndex][cellIndex] = node;
          },
          levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentDecade) : levelControlAriaLabel,
          locale,
          minDate,
          maxDate,
          __preventFocus,
          __stopPropagation,
          nextIcon,
          previousIcon,
          nextLabel,
          previousLabel,
          onNext,
          onPrevious,
          nextDisabled,
          previousDisabled,
          getYearControlProps,
          __staticSelector: __staticSelector || "DecadeLevelGroup",
          classNames,
          styles,
          withCellSpacing
        }
      );
    });
    return /* @__PURE__ */ React26.createElement(
      LevelsGroup,
      __spreadValues({
        classNames,
        styles,
        __staticSelector: __staticSelector || "DecadeLevelGroup",
        ref,
        size: size2
      }, others),
      decades
    );
  }
);
DecadeLevelGroup.displayName = "@raikou/dates/DecadeLevelGroup";

// src/components/YearLevelGroup/YearLevelGroup.tsx
import dayjs22 from "dayjs";
import React27, { useRef as useRef2 } from "react";
import {
  factory as factory19,
  useProps as useProps22
} from "@raikou/core";
var defaultProps22 = {
  numberOfColumns: 1
};
var YearLevelGroup = factory19((_props, ref) => {
  const props = useProps22("YearLevelGroup", defaultProps22, _props);
  const _a = props, {
    year: year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    __preventFocus: __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    classNames: classNames,
    styles,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    yearLabelFormat,
    size: size2,
    vars
  } = _a, others = __objRest(_a, [
    // YearLevel settings
    "year",
    "locale",
    "minDate",
    "maxDate",
    "monthsListFormat",
    "getMonthControlProps",
    "__onControlClick",
    "__onControlMouseEnter",
    "withCellSpacing",
    // CalendarHeader settings
    "__preventFocus",
    "nextIcon",
    "previousIcon",
    "nextLabel",
    "previousLabel",
    "onNext",
    "onPrevious",
    "onLevelClick",
    "nextDisabled",
    "previousDisabled",
    "hasNextLevel",
    // Other settings
    "classNames",
    "styles",
    "__staticSelector",
    "__stopPropagation",
    "numberOfColumns",
    "levelControlAriaLabel",
    "yearLabelFormat",
    "size",
    "vars"
  ]);
  const controlsRef = useRef2([]);
  const years = Array(numberOfColumns).fill(0).map((_, yearIndex) => {
    const currentYear = dayjs22(year).add(yearIndex, "years").toDate();
    return /* @__PURE__ */ React27.createElement(
      YearLevel,
      {
        key: yearIndex,
        size: size2,
        monthsListFormat,
        year: currentYear,
        withNext: yearIndex === numberOfColumns - 1,
        withPrevious: yearIndex === 0,
        yearLabelFormat,
        __stopPropagation,
        __onControlClick,
        __onControlMouseEnter,
        __onControlKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: yearIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef
        }),
        __getControlRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(controlsRef.current[yearIndex])) {
            controlsRef.current[yearIndex] = [];
          }
          if (!Array.isArray(controlsRef.current[yearIndex][rowIndex])) {
            controlsRef.current[yearIndex][rowIndex] = [];
          }
          controlsRef.current[yearIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentYear) : levelControlAriaLabel,
        locale,
        minDate,
        maxDate,
        __preventFocus,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled,
        previousDisabled,
        hasNextLevel,
        getMonthControlProps,
        classNames,
        styles,
        __staticSelector: __staticSelector || "YearLevelGroup",
        withCellSpacing
      }
    );
  });
  return /* @__PURE__ */ React27.createElement(
    LevelsGroup,
    __spreadValues({
      classNames,
      styles,
      __staticSelector: __staticSelector || "YearLevelGroup",
      ref,
      size: size2
    }, others),
    years
  );
});
YearLevelGroup.displayName = "@raikou/dates/YearLevelGroup";

// src/components/MonthLevelGroup/MonthLevelGroup.tsx
import dayjs23 from "dayjs";
import React28, { useRef as useRef3 } from "react";
import {
  factory as factory20,
  useProps as useProps23
} from "@raikou/core";
var defaultProps23 = {
  numberOfColumns: 1
};
var MonthLevelGroup = factory20(
  (_props, ref) => {
    const props = useProps23("MonthLevelGroup", defaultProps23, _props);
    const _a = props, {
      month: month,
      locale,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      minDate,
      maxDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      __onDayClick,
      __onDayMouseEnter,
      withCellSpacing,
      __preventFocus: __preventFocus,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled,
      previousDisabled,
      hasNextLevel,
      classNames: classNames,
      styles,
      unstyled,
      numberOfColumns,
      levelControlAriaLabel,
      monthLabelFormat,
      __staticSelector,
      __stopPropagation,
      size: size2,
      static: isStatic,
      vars
    } = _a, others = __objRest(_a, [
      // Month settings
      "month",
      "locale",
      "firstDayOfWeek",
      "weekdayFormat",
      "weekendDays",
      "getDayProps",
      "excludeDate",
      "minDate",
      "maxDate",
      "renderDay",
      "hideOutsideDates",
      "hideWeekdays",
      "getDayAriaLabel",
      "__onDayClick",
      "__onDayMouseEnter",
      "withCellSpacing",
      // CalendarHeader settings
      "__preventFocus",
      "nextIcon",
      "previousIcon",
      "nextLabel",
      "previousLabel",
      "onNext",
      "onPrevious",
      "onLevelClick",
      "nextDisabled",
      "previousDisabled",
      "hasNextLevel",
      // Other settings
      "classNames",
      "styles",
      "unstyled",
      "numberOfColumns",
      "levelControlAriaLabel",
      "monthLabelFormat",
      "__staticSelector",
      "__stopPropagation",
      "size",
      "static",
      "vars"
    ]);
    const daysRefs = useRef3([]);
    const months = Array(numberOfColumns).fill(0).map((_, monthIndex) => {
      const currentMonth = dayjs23(month).add(monthIndex, "months").toDate();
      return /* @__PURE__ */ React28.createElement(
        MonthLevel,
        {
          key: monthIndex,
          month: currentMonth,
          withNext: monthIndex === numberOfColumns - 1,
          withPrevious: monthIndex === 0,
          monthLabelFormat,
          __stopPropagation,
          __onDayClick,
          __onDayMouseEnter,
          __onDayKeyDown: (event, payload) => handleControlKeyDown({
            levelIndex: monthIndex,
            rowIndex: payload.rowIndex,
            cellIndex: payload.cellIndex,
            event,
            controlsRef: daysRefs
          }),
          __getDayRef: (rowIndex, cellIndex, node) => {
            if (!Array.isArray(daysRefs.current[monthIndex])) {
              daysRefs.current[monthIndex] = [];
            }
            if (!Array.isArray(daysRefs.current[monthIndex][rowIndex])) {
              daysRefs.current[monthIndex][rowIndex] = [];
            }
            daysRefs.current[monthIndex][rowIndex][cellIndex] = node;
          },
          levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentMonth) : levelControlAriaLabel,
          locale,
          firstDayOfWeek,
          weekdayFormat,
          weekendDays,
          getDayProps,
          excludeDate,
          minDate,
          maxDate,
          renderDay,
          hideOutsideDates,
          hideWeekdays,
          getDayAriaLabel,
          __preventFocus,
          nextIcon,
          previousIcon,
          nextLabel,
          previousLabel,
          onNext,
          onPrevious,
          onLevelClick,
          nextDisabled,
          previousDisabled,
          hasNextLevel,
          classNames,
          styles,
          unstyled,
          __staticSelector: __staticSelector || "MonthLevelGroup",
          size: size2,
          static: isStatic,
          withCellSpacing
        }
      );
    });
    return /* @__PURE__ */ React28.createElement(
      LevelsGroup,
      __spreadValues({
        classNames,
        styles,
        __staticSelector: __staticSelector || "MonthLevelGroup",
        ref,
        size: size2
      }, others),
      months
    );
  }
);
MonthLevelGroup.displayName = "@raikou/dates/MonthLevelGroup";

// src/components/PickerInputBase/PickerInputBase.tsx
import React65 from "react";
import cx8 from "clsx";
import {
  factory as factory31
} from "@raikou/core";

// ../components/Popover/src/Popover.tsx
import React38, { useRef as useRef9, useState as useState7, useCallback as useCallback4 } from "react";
import { useId as useId3, useClickOutside } from "@raikou/hooks";
import {
  getDefaultZIndex,
  useProps as useProps27,
  useDirection as useDirection2,
  useStyles as useStyles16,
  createVarsResolver as createVarsResolver10,
  getRadius as getRadius2,
  getShadow
} from "@raikou/core";

// ../components/Floating/src/use-floating-auto-update.ts
import { useState as useState4, useEffect as useEffect5 } from "react";

// ../../../node_modules/.pnpm/@floating-ui+core@1.3.1/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = (reference, floating, config) => __async(void 0, null, function* () {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(floating);
  let rects = yield platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = yield fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? yield platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
});
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return __spreadProps(__spreadValues({}, rect), {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function detectOverflow(state, options) {
  return __async(this, null, function* () {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getSideObjectFromPadding(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(yield platform2.getClippingRect({
      element: ((_await$platform$isEle = yield platform2.isElement == null ? void 0 : platform2.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? __spreadProps(__spreadValues({}, rects.floating), {
      x,
      y
    }) : rects.reference;
    const offsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating);
    const offsetScale = (yield platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? (yield platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  fn(state) {
    return __async(this, null, function* () {
      const {
        x,
        y,
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getSideObjectFromPadding(padding);
      const coords = {
        x,
        y
      };
      const axis = getMainAxisFromPlacement(placement);
      const length = getLengthFromAxis(axis);
      const arrowDimensions = yield platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element);
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !(yield platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max3 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = within(min$1, center, max3);
      const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max3 - center : 0;
      return {
        [axis]: coords[axis] - alignmentOffset,
        data: {
          [axis]: offset2,
          centerOffset: center - offset2 + alignmentOffset
        }
      };
    });
  }
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    fn(state) {
      return __async(this, null, function* () {
        var _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const {
            main,
            cross
          } = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[main], overflow[cross]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      });
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
var inline = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          placement,
          elements,
          rects,
          platform: platform2,
          strategy
        } = state;
        const {
          padding = 2,
          x,
          y
        } = evaluate(options, state);
        const nativeClientRects = Array.from((yield platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
        const clientRects = getRectsByLine(nativeClientRects);
        const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
        const paddingObject = getSideObjectFromPadding(padding);
        function getBoundingClientRect2() {
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
          }
          if (clientRects.length >= 2) {
            if (getMainAxisFromPlacement(placement) === "x") {
              const firstRect = clientRects[0];
              const lastRect = clientRects[clientRects.length - 1];
              const isTop = getSide(placement) === "top";
              const top2 = firstRect.top;
              const bottom2 = lastRect.bottom;
              const left2 = isTop ? firstRect.left : lastRect.left;
              const right2 = isTop ? firstRect.right : lastRect.right;
              const width2 = right2 - left2;
              const height2 = bottom2 - top2;
              return {
                top: top2,
                bottom: bottom2,
                left: left2,
                right: right2,
                width: width2,
                height: height2,
                x: left2,
                y: top2
              };
            }
            const isLeftSide = getSide(placement) === "left";
            const maxRight = max(...clientRects.map((rect) => rect.right));
            const minLeft = min(...clientRects.map((rect) => rect.left));
            const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
            const top = measureRects[0].top;
            const bottom = measureRects[measureRects.length - 1].bottom;
            const left = minLeft;
            const right = maxRight;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        const resetRects = yield platform2.getElementRects({
          reference: {
            getBoundingClientRect: getBoundingClientRect2
          },
          floating: elements.floating,
          strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      });
    }
  };
};
function convertValueToCoords(state, options) {
  return __async(this, null, function* () {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getMainAxisFromPlacement(placement) === "x";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : __spreadValues({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, rawValue);
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          x,
          y
        } = state;
        const diffCoords = yield convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      });
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          x,
          y,
          placement
        } = state;
        const _a2 = evaluate(options, state), {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]);
        const coords = {
          x,
          y
        };
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const mainAxis = getMainAxisFromPlacement(getSide(placement));
        const crossAxis = getCrossAxis(mainAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min3 = mainAxisCoord + overflow[minSide];
          const max3 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = within(min3, mainAxisCoord, max3);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min3 = crossAxisCoord + overflow[minSide];
          const max3 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = within(min3, crossAxisCoord, max3);
        }
        const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, state), {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        }));
        return __spreadProps(__spreadValues({}, limitedCoords), {
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        });
      });
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : __spreadValues({
        mainAxis: 0,
        crossAxis: 0
      }, rawOffset);
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    fn(state) {
      return __async(this, null, function* () {
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const _a2 = evaluate(options, state), {
          apply = () => {
          }
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "apply"
        ]);
        const overflow = yield detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const axis = getMainAxisFromPlacement(placement);
        const isXAxis = axis === "x";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === ((yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isXAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isXAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        yield apply(__spreadProps(__spreadValues({}, state), {
          availableWidth,
          availableHeight
        }));
        const nextDimensions = yield platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      });
    }
  };
};

// ../../../node_modules/.pnpm/@floating-ui+dom@1.4.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !safari && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !safari && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function isSafari() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isSafari() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = __spreadProps(__spreadValues({}, clippingAncestor), {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = function(_ref) {
  return __async(this, null, function* () {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, yield getOffsetParentFn(floating), strategy),
      floating: __spreadValues({
        x: 0,
        y: 0
      }, yield getDimensionsFn(floating))
    };
  });
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, __spreadProps(__spreadValues({}, options), {
        // Handle <iframe>s
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = __spreadValues({
    platform
  }, options);
  const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
    _c: cache
  });
  return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
    platform: platformWithCache
  }));
};

// ../../../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
import * as React29 from "react";
import { useLayoutEffect as useLayoutEffect2, useEffect as useEffect2 } from "react";
import * as ReactDOM from "react-dom";
var arrow2 = (options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? useLayoutEffect2 : useEffect2;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function useLatestRef(value) {
  const ref = React29.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React29.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React29.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = React29.useRef(null);
  const floatingRef = React29.useRef(null);
  const dataRef = React29.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const [reference, _setReference] = React29.useState(null);
  const [floating, _setFloating] = React29.useState(null);
  const setReference = React29.useCallback((node) => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React29.useCallback((node) => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = React29.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = __spreadProps(__spreadValues({}, data2), {
        isPositioned: true
      });
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => __spreadProps(__spreadValues({}, data2), {
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React29.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (reference && floating) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(reference, floating, update);
      } else {
        update();
      }
    }
  }, [reference, floating, update, whileElementsMountedRef]);
  const refs = React29.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React29.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return React29.useMemo(() => __spreadProps(__spreadValues({}, data), {
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}

// ../../../node_modules/.pnpm/@floating-ui+react@0.23.1_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
import * as React30 from "react";
import { useLayoutEffect as useLayoutEffect3, useEffect as useEffect4, useRef as useRef6 } from "react";
import { createPortal, flushSync as flushSync2 } from "react-dom";
var index2 = typeof document !== "undefined" ? useLayoutEffect3 : useEffect4;
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React30.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React30.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId = React30[/* @__PURE__ */ "useId".toString()];
var useId2 = useReactId || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
    }
  };
}
var FloatingTreeContext = /* @__PURE__ */ React30.createContext(null);
var useFloatingTree = () => React30.useContext(FloatingTreeContext);
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
function isElement2(value) {
  return value ? value instanceof getWindow2(value).Element : false;
}
var useInsertionEffect = React30[/* @__PURE__ */ "useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEvent(callback) {
  const ref = React30.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React30.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const domReferenceRef = React30.useRef(null);
  const dataRef = React30.useRef({});
  const events = React30.useState(() => createPubSub())[0];
  const floatingId = useId2();
  const [domReference, setDomReference] = React30.useState(null);
  const setPositionReference = React30.useCallback((node) => {
    const positionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React30.useCallback((node) => {
    if (isElement2(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement2(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement2(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React30.useMemo(() => __spreadProps(__spreadValues({}, position.refs), {
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React30.useMemo(() => __spreadProps(__spreadValues({}, position.elements), {
    domReference
  }), [position.elements, domReference]);
  const onOpenChange = useEvent(unstable_onOpenChange);
  const context = React30.useMemo(() => __spreadProps(__spreadValues({}, position), {
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React30.useMemo(() => __spreadProps(__spreadValues({}, position), {
    context,
    refs,
    elements,
    reference: setReference,
    positionReference: setPositionReference
  }), [position, refs, elements, context, setReference, setPositionReference]);
}

// ../components/Floating/src/use-floating-auto-update.ts
import { useDidUpdate } from "@raikou/hooks";
function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = useState4(0);
  useEffect5(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return void 0;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    opened,
    delayedUpdate,
    position
  ]);
  useDidUpdate(() => {
    floating.update();
  }, positionDependencies);
  useDidUpdate(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}

// ../components/Floating/src/get-floating-position/get-floating-position.ts
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}

// ../components/Floating/src/FloatingArrow/FloatingArrow.tsx
import React31, { forwardRef as forwardRef2 } from "react";
import { useDirection } from "@raikou/core";

// ../components/Floating/src/FloatingArrow/get-arrow-position-styles.ts
import { rem as rem6 } from "@raikou/core";
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
  if (placement === "center" || arrowPosition === "center") {
    return { top: arrowY };
  }
  if (placement === "end") {
    return { bottom: arrowOffset };
  }
  if (placement === "start") {
    return { top: arrowOffset };
  }
  return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
  if (placement === "center" || arrowPosition === "center") {
    return { left: arrowX };
  }
  if (placement === "end") {
    return { [dir === "ltr" ? "right" : "left"]: arrowOffset };
  }
  if (placement === "start") {
    return { [dir === "ltr" ? "left" : "right"]: arrowOffset };
  }
  return {};
}
var radiusByFloatingSide = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function getArrowPositionStyles({
  position,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir
}) {
  const [side, placement = "center"] = position.split("-");
  const baseStyles = {
    width: rem6(arrowSize),
    height: rem6(arrowSize),
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: rem6(arrowRadius)
  };
  const arrowPlacement = rem6(-arrowSize / 2);
  if (side === "left") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), horizontalSide(placement, arrowY, arrowOffset, arrowPosition)), {
      right: arrowPlacement,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent"
    });
  }
  if (side === "right") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), horizontalSide(placement, arrowY, arrowOffset, arrowPosition)), {
      left: arrowPlacement,
      borderRightColor: "transparent",
      borderTopColor: "transparent"
    });
  }
  if (side === "top") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir)), {
      bottom: arrowPlacement,
      borderTopColor: "transparent",
      borderLeftColor: "transparent"
    });
  }
  if (side === "bottom") {
    return __spreadProps(__spreadValues(__spreadValues({}, baseStyles), verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir)), {
      top: arrowPlacement,
      borderBottomColor: "transparent",
      borderRightColor: "transparent"
    });
  }
  return {};
}

// ../components/Floating/src/FloatingArrow/FloatingArrow.tsx
var FloatingArrow = forwardRef2(
  (_a, ref) => {
    var _b = _a, {
      position,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      visible,
      arrowX,
      arrowY,
      style
    } = _b, others = __objRest(_b, [
      "position",
      "arrowSize",
      "arrowOffset",
      "arrowRadius",
      "arrowPosition",
      "visible",
      "arrowX",
      "arrowY",
      "style"
    ]);
    const { dir } = useDirection();
    if (!visible) {
      return null;
    }
    return /* @__PURE__ */ React31.createElement(
      "div",
      __spreadProps(__spreadValues({}, others), {
        ref,
        style: __spreadValues(__spreadValues({}, style), getArrowPositionStyles({
          position,
          arrowSize,
          arrowOffset,
          arrowRadius,
          arrowPosition,
          dir,
          arrowX,
          arrowY
        }))
      })
    );
  }
);
FloatingArrow.displayName = "@raikou/core/FloatingArrow";

// ../components/Popover/src/use-popover.ts
import { useDidUpdate as useDidUpdate2, useUncontrolled } from "@raikou/hooks";
function getPopoverMiddlewares(options) {
  var _a, _b, _c;
  const middlewares = [offset(options.offset)];
  if ((_a = options.middlewares) == null ? void 0 : _a.shift) {
    middlewares.push(shift({ limiter: limitShift() }));
  }
  if ((_b = options.middlewares) == null ? void 0 : _b.flip) {
    middlewares.push(flip());
  }
  if ((_c = options.middlewares) == null ? void 0 : _c.inline) {
    middlewares.push(inline());
  }
  middlewares.push(
    arrow2({ element: options.arrowRef, padding: options.arrowOffset })
  );
  return middlewares;
}
function usePopover(options) {
  const [_opened, setOpened] = useUncontrolled({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange
  });
  const onClose = () => {
    var _a;
    if (_opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
      setOpened(false);
    }
  };
  const onToggle = () => {
    var _a, _b;
    if (_opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
      setOpened(false);
    } else {
      (_b = options.onOpen) == null ? void 0 : _b.call(options);
      setOpened(true);
    }
  };
  const floating = useFloating2({
    placement: options.position,
    middleware: [
      ...getPopoverMiddlewares(options),
      ...options.width === "target" ? [
        size({
          apply({ rects }) {
            var _a, _b;
            Object.assign((_b = (_a = floating.refs.floating.current) == null ? void 0 : _a.style) != null ? _b : {}, {
              width: `${rects.reference.width}px`
            });
          }
        })
      ] : []
    ]
  });
  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating
  });
  useDidUpdate2(() => {
    var _a;
    (_a = options.onPositionChange) == null ? void 0 : _a.call(options, floating.placement);
  }, [floating.placement]);
  useDidUpdate2(() => {
    var _a, _b;
    if (!options.opened) {
      (_a = options.onClose) == null ? void 0 : _a.call(options);
    } else {
      (_b = options.onOpen) == null ? void 0 : _b.call(options);
    }
  }, [options.opened]);
  return {
    floating,
    controlled: typeof options.opened === "boolean",
    opened: _opened,
    onClose,
    onToggle
  };
}

// ../components/Popover/src/Popover.context.ts
var [PopoverContextProvider, usePopoverContext] = createSafeContext(
  "Popover component was not found in the tree"
);

// ../components/Popover/src/PopoverTarget/PopoverTarget.tsx
import { cloneElement as cloneElement2 } from "react";
import cx2 from "clsx";
import { useMergedRef } from "@raikou/hooks";
import { isElement as isElement3, useProps as useProps24, factory as factory21 } from "@raikou/core";
var defaultProps24 = {
  refProp: "ref",
  popupType: "dialog"
};
var PopoverTarget = factory21((props, ref) => {
  const _a = useProps24(
    "PopoverTarget",
    defaultProps24,
    props
  ), { children, refProp, popupType } = _a, others = __objRest(_a, ["children", "refProp", "popupType"]);
  if (!isElement3(children)) {
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const forwardedProps = others;
  const ctx = usePopoverContext();
  const targetRef = useMergedRef(ctx.reference, children.ref, ref);
  const accessibleProps = ctx.withRoles ? {
    "aria-haspopup": popupType,
    "aria-expanded": ctx.opened,
    "aria-controls": ctx.getDropdownId(),
    id: ctx.getTargetId()
  } : {};
  return cloneElement2(children, __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, forwardedProps), accessibleProps), ctx.targetProps), {
    className: cx2(
      ctx.targetProps.className,
      forwardedProps.className,
      children.props.className
    ),
    [refProp]: targetRef
  }), !ctx.controlled ? { onClick: ctx.onToggle } : null));
});
PopoverTarget.displayName = "@raikou/core/PopoverTarget";

// ../components/Popover/src/PopoverDropdown/PopoverDropdown.tsx
import React37 from "react";
import { useFocusReturn, useMergedRef as useMergedRef3 } from "@raikou/hooks";
import {
  Box as Box17,
  factory as factory22,
  useProps as useProps26,
  rem as rem8,
  closeOnEscape
} from "@raikou/core";

// ../components/Portal/src/Portal.tsx
import React33, { useRef as useRef7, useState as useState5, forwardRef as forwardRef3 } from "react";
import { createPortal as createPortal2 } from "react-dom";
import { useIsomorphicEffect, assignRef } from "@raikou/hooks";
import { useProps as useProps25 } from "@raikou/core";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps25 = {};
var Portal = forwardRef3((props, ref) => {
  const _a = useProps25(
    "Portal",
    defaultProps25,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = useState5(false);
  const nodeRef = useRef7(null);
  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    assignRef(ref, nodeRef.current);
    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return createPortal2(/* @__PURE__ */ React33.createElement(React33.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
import React34 from "react";
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ React34.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ React34.createElement(React34.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../components/Transition/src/transitions.ts
import { rem as rem7 } from "@raikou/core";
var popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${rem7(10)})` },
  transitionProperty: "transform, opacity"
};
var transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(-${rem7(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: {
      opacity: 0,
      transform: `translateY(${rem7(20)}) skew(-10deg, -5deg)`
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem7(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${rem7(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "center center" }
  }),
  "pop-bottom-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom left" }
  }),
  "pop-bottom-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom right" }
  }),
  "pop-top-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top left" }
  }),
  "pop-top-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top right" }
  })
};

// ../components/Transition/src/Transition.tsx
import React35 from "react";

// ../components/Transition/src/get-transition-styles/get-transition-styles.ts
var transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return __spreadValues(__spreadValues(__spreadValues({
      transitionProperty: transitions[transition].transitionProperty
    }, shared), transitions[transition].common), transitions[transition][transitionStatuses[state]]);
  }
  return __spreadValues(__spreadValues(__spreadValues({
    transitionProperty: transition.transitionProperty
  }, shared), transition.common), transition[transitionStatuses[state]]);
}

// ../components/Transition/src/use-transition.ts
import { useState as useState6, useEffect as useEffect6, useRef as useRef8 } from "react";
import { useReducedMotion, useDidUpdate as useDidUpdate3 } from "@raikou/hooks";
import { useRaikouTheme } from "@raikou/core";
function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited
}) {
  const theme = useRaikouTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState6(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState6(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = useRef8(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
    window.clearTimeout(timeoutRef.current);
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === "function" && preHandler();
        setStatus(shouldMount ? "entering" : "exiting");
      }, 10);
      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      }, newTransitionDuration);
    }
  };
  useDidUpdate3(() => {
    handleStateChange(mounted);
  }, [mounted]);
  useEffect6(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}

// ../components/Transition/src/Transition.tsx
function Transition({
  keepMounted,
  transition = "fade",
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited
  });
  if (transitionDuration === 0) {
    return mounted ? /* @__PURE__ */ React35.createElement(React35.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ React35.createElement(React35.Fragment, null, children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ));
}
Transition.displayName = "@raikou/core/Transition";

// ../components/FocusTrap/src/FocusTrap.tsx
import { cloneElement as cloneElement3 } from "react";
import { useFocusTrap, useMergedRef as useMergedRef2 } from "@raikou/hooks";
import { isElement as isElement4 } from "@raikou/core";
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef2(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement4(children)) {
    return children;
  }
  return cloneElement3(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../components/Popover/src/PopoverDropdown/PopoverDropdown.tsx
var defaultProps26 = {};
var PopoverDropdown = factory22(
  (_props, ref) => {
    var _b, _c, _d, _e, _f;
    const props = useProps26("PopoverDropdown", defaultProps26, _props);
    const _a = props, {
      className,
      style,
      vars,
      children,
      onKeyDownCapture,
      variant,
      classNames,
      styles
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "vars",
      "children",
      "onKeyDownCapture",
      "variant",
      "classNames",
      "styles"
    ]);
    const ctx = usePopoverContext();
    const returnFocus = useFocusReturn({
      opened: ctx.opened,
      shouldReturnFocus: ctx.returnFocus
    });
    const accessibleProps = ctx.withRoles ? {
      "aria-labelledby": ctx.getTargetId(),
      id: ctx.getDropdownId(),
      role: "dialog",
      tabIndex: -1
    } : {};
    const mergedRef = useMergedRef3(ref, ctx.floating);
    if (ctx.disabled) {
      return null;
    }
    return /* @__PURE__ */ React37.createElement(OptionalPortal, __spreadProps(__spreadValues({}, ctx.portalProps), { withinPortal: ctx.withinPortal }), /* @__PURE__ */ React37.createElement(
      Transition,
      __spreadProps(__spreadValues({
        mounted: ctx.opened
      }, ctx.transitionProps), {
        transition: ((_b = ctx.transitionProps) == null ? void 0 : _b.transition) || "fade",
        duration: (_d = (_c = ctx.transitionProps) == null ? void 0 : _c.duration) != null ? _d : 150,
        keepMounted: ctx.keepMounted,
        exitDuration: typeof ((_e = ctx.transitionProps) == null ? void 0 : _e.exitDuration) === "number" ? ctx.transitionProps.exitDuration : (_f = ctx.transitionProps) == null ? void 0 : _f.duration
      }),
      (transitionStyles) => {
        var _a2, _b2;
        return /* @__PURE__ */ React37.createElement(FocusTrap, { active: ctx.trapFocus }, /* @__PURE__ */ React37.createElement(
          Box17,
          __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, accessibleProps), others), {
            variant,
            ref: mergedRef,
            onKeyDownCapture: closeOnEscape(ctx.onClose, {
              active: ctx.closeOnEscape,
              onTrigger: returnFocus,
              onKeyDown: onKeyDownCapture
            }),
            "data-position": ctx.placement
          }), ctx.getStyles("dropdown", {
            className,
            props,
            classNames,
            styles,
            style: [
              __spreadProps(__spreadValues({}, transitionStyles), {
                zIndex: ctx.zIndex,
                top: (_a2 = ctx.y) != null ? _a2 : 0,
                left: (_b2 = ctx.x) != null ? _b2 : 0,
                width: ctx.width === "target" ? void 0 : rem8(ctx.width)
              }),
              style
            ]
          })),
          children,
          /* @__PURE__ */ React37.createElement(
            FloatingArrow,
            __spreadValues({
              ref: ctx.arrowRef,
              arrowX: ctx.arrowX,
              arrowY: ctx.arrowY,
              visible: ctx.withArrow,
              position: ctx.placement,
              arrowSize: ctx.arrowSize,
              arrowRadius: ctx.arrowRadius,
              arrowOffset: ctx.arrowOffset,
              arrowPosition: ctx.arrowPosition
            }, ctx.getStyles("arrow", {
              props,
              classNames,
              styles
            }))
          )
        ));
      }
    ));
  }
);
PopoverDropdown.displayName = "@raikou/core/PopoverDropdown";

// ../components/Popover/src/Popover.tsx
var defaultProps27 = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: true,
  withinPortal: true,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: getDefaultZIndex("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
var varsResolver10 = createVarsResolver10(
  (_, { radius, shadow }) => ({
    dropdown: {
      "--popover-radius": radius === void 0 ? void 0 : getRadius2(radius),
      "--popover-shadow": getShadow(shadow)
    }
  })
);
function Popover(_props) {
  var _b, _c, _d, _e, _f, _g;
  const props = useProps27("Popover", defaultProps27, _props);
  const _a = props, {
    children,
    position,
    offset: offset2,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape: closeOnEscape2,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    vars
  } = _a, others = __objRest(_a, [
    "children",
    "position",
    "offset",
    "onPositionChange",
    "positionDependencies",
    "opened",
    "transitionProps",
    "width",
    "middlewares",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "unstyled",
    "classNames",
    "styles",
    "closeOnClickOutside",
    "withinPortal",
    "portalProps",
    "closeOnEscape",
    "clickOutsideEvents",
    "trapFocus",
    "onClose",
    "onOpen",
    "onChange",
    "zIndex",
    "radius",
    "shadow",
    "id",
    "defaultOpened",
    "__staticSelector",
    "withRoles",
    "disabled",
    "returnFocus",
    "variant",
    "keepMounted",
    "vars"
  ]);
  const getStyles2 = useStyles16({
    name: __staticSelector,
    props,
    classes: {
      dropdown: "popover-dropdown",
      arrow: "popover-arrow"
    },
    classNames,
    styles,
    unstyled,
    rootSelector: "dropdown",
    vars,
    varsResolver: varsResolver10
  });
  const arrowRef = useRef9(null);
  const [targetNode, setTargetNode] = useState7(null);
  const [dropdownNode, setDropdownNode] = useState7(null);
  const { dir } = useDirection2();
  const uid = useId3(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position),
    offset: typeof offset2 === "number" ? offset2 + (withArrow ? arrowSize / 2 : 0) : offset2,
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose
  });
  useClickOutside(
    () => closeOnClickOutside && popover.onClose(),
    clickOutsideEvents,
    [targetNode, dropdownNode]
  );
  const reference = useCallback4(
    (node) => {
      setTargetNode(node);
      popover.floating.reference(node);
    },
    [popover.floating.reference]
  );
  const floating = useCallback4(
    (node) => {
      setDropdownNode(node);
      popover.floating.floating(node);
    },
    [popover.floating.floating]
  );
  return /* @__PURE__ */ React38.createElement(
    PopoverContextProvider,
    {
      value: {
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        arrowX: (_d = (_c = (_b = popover.floating) == null ? void 0 : _b.middlewareData) == null ? void 0 : _c.arrow) == null ? void 0 : _d.x,
        arrowY: (_g = (_f = (_e = popover.floating) == null ? void 0 : _e.middlewareData) == null ? void 0 : _f.arrow) == null ? void 0 : _g.y,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape: closeOnEscape2,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
        getStyles: getStyles2
      }
    },
    children
  );
}
Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = "@raikou/core/Popover";
Popover.extend = (input) => input;

// ../components/Modal/src/Modal.tsx
import React64 from "react";
import { factory as factory30, useProps as useProps38, getDefaultZIndex as getDefaultZIndex5 } from "@raikou/core";

// ../components/Modal/src/ModalRoot.tsx
import React57 from "react";
import {
  factory as factory23,
  useProps as useProps31,
  useStyles as useStyles20,
  createVarsResolver as createVarsResolver14,
  getRadius as getRadius6,
  getDefaultZIndex as getDefaultZIndex4,
  getSize as getSize6,
  rem as rem11
} from "@raikou/core";

// ../components/ModalBase/src/ModalBase.tsx
import React45, { forwardRef as forwardRef6 } from "react";

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
import { __assign as __assign4 } from "tslib";
import * as React44 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
import { __assign as __assign3, __rest as __rest2 } from "tslib";
import * as React40 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.23_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.23_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js
import { useState as useState8 } from "react";
function useCallbackRef(initialValue, callback) {
  var ref = useState8(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.23_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef2(ref, newValue);
    });
  });
}

// ../../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.23_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
import { __assign } from "tslib";
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// ../../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.23_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
import { __assign as __assign2, __rest } from "tslib";
import * as React39 from "react";
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React39.createElement(Target, __assign2({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React40.forwardRef(function(props, parentRef) {
  var ref = React40.useRef(null);
  var _a = React40.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest2(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign3(__assign3({}, rest), callbacks);
  return React40.createElement(
    React40.Fragment,
    null,
    enabled && React40.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React40.cloneElement(React40.Children.only(children), __assign3(__assign3({}, containerProps), { ref: containerRef })) : React40.createElement(Container, __assign3({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
import { __spreadArray } from "tslib";
import * as React43 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
import * as React42 from "react";

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
import * as React41 from "react";

// ../../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React41.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React42.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React42.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React43.useRef([]);
  var touchStartRef = React43.useRef([0, 0]);
  var activeAxis = React43.useRef();
  var id = React43.useState(idCounter++)[0];
  var Style2 = React43.useState(styleSingleton)[0];
  var lastProps = React43.useRef(props);
  React43.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React43.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React43.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React43.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React43.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React43.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React43.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React43.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React43.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React43.createElement(
    React43.Fragment,
    null,
    inert ? React43.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React43.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.6_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React44.forwardRef(function(props, ref) {
  return React44.createElement(RemoveScroll, __assign4({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../components/ModalBase/src/ModalBase.tsx
import {
  Box as Box18,
  getDefaultZIndex as getDefaultZIndex2,
  getShadow as getShadow2,
  getSpacing as getSpacing2
} from "@raikou/core";

// ../components/ModalBase/src/ModalBase.context.ts
var [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

// ../components/ModalBase/src/use-modal.ts
import { useState as useState12 } from "react";
import { useId as useId4, useWindowEvent, useFocusReturn as useFocusReturn2 } from "@raikou/hooks";

// ../components/ModalBase/src/use-lock-scroll.ts
import { useState as useState11, useEffect as useEffect9, useRef as useRef12 } from "react";
import { useReducedMotion as useReducedMotion2 } from "@raikou/hooks";
function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = useState11(opened);
  const timeout = useRef12();
  const reduceMotion = useReducedMotion2();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  useEffect9(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (_transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(
        () => setShouldLockScroll(false),
        _transitionDuration
      );
    }
    return () => window.clearTimeout(timeout.current);
  }, [opened, _transitionDuration]);
  return shouldLockScroll;
}

// ../components/ModalBase/src/use-modal.ts
function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape: closeOnEscape2,
  onClose,
  returnFocus
}) {
  const _id = useId4(id);
  const [titleMounted, setTitleMounted] = useState12(false);
  const [bodyMounted, setBodyMounted] = useState12(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  useWindowEvent("keydown", (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape2) {
      onClose();
    }
  });
  useFocusReturn2({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}

// ../components/ModalBase/src/ModalBase.tsx
var ModalBase = forwardRef6(
  (_a, ref) => {
    var _b = _a, {
      keepMounted,
      opened,
      onClose,
      id,
      transitionProps,
      trapFocus,
      closeOnEscape: closeOnEscape2,
      returnFocus,
      closeOnClickOutside,
      withinPortal,
      portalProps,
      lockScroll,
      children,
      zIndex,
      shadow,
      padding,
      __vars
    } = _b, others = __objRest(_b, [
      "keepMounted",
      "opened",
      "onClose",
      "id",
      "transitionProps",
      "trapFocus",
      "closeOnEscape",
      "returnFocus",
      "closeOnClickOutside",
      "withinPortal",
      "portalProps",
      "lockScroll",
      "children",
      "zIndex",
      "shadow",
      "padding",
      "__vars"
    ]);
    const {
      _id,
      titleMounted,
      bodyMounted,
      shouldLockScroll,
      setTitleMounted,
      setBodyMounted
    } = useModal({
      id,
      transitionProps,
      opened,
      trapFocus,
      closeOnEscape: closeOnEscape2,
      onClose,
      returnFocus
    });
    return /* @__PURE__ */ React45.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React45.createElement(
      ModalBaseProvider,
      {
        value: {
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: __spreadProps(__spreadValues({}, transitionProps), { keepMounted }),
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape: closeOnEscape2,
          zIndex
        }
      },
      /* @__PURE__ */ React45.createElement(Combination_default, { enabled: shouldLockScroll && lockScroll }, /* @__PURE__ */ React45.createElement(
        Box18,
        __spreadProps(__spreadValues({
          ref
        }, others), {
          __vars: __spreadProps(__spreadValues({}, __vars), {
            "--mb-z-index": (zIndex || getDefaultZIndex2("modal")).toString(),
            "--mb-shadow": getShadow2(shadow),
            "--mb-padding": getSpacing2(padding)
          })
        }),
        children
      ))
    ));
  }
);
ModalBase.displayName = "@raikou/core/ModalBase";

// ../components/ModalBase/src/ModalBaseBody.tsx
import React46, { forwardRef as forwardRef7 } from "react";
import cx3 from "clsx";
import { Box as Box19 } from "@raikou/core";

// ../components/ModalBase/src/use-modal-body-id.ts
import { useEffect as useEffect10 } from "react";
function useModalBodyId() {
  const ctx = useModalBaseContext();
  useEffect10(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

// ../components/ModalBase/src/ModalBaseBody.tsx
var ModalBaseBody = forwardRef7(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    const bodyId = useModalBodyId();
    return /* @__PURE__ */ React46.createElement(
      Box19,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        id: bodyId,
        className: cx3("modalBase-body", className)
      })
    );
  }
);
ModalBaseBody.displayName = "@raikou/core/ModalBaseBody";

// ../components/ModalBase/src/ModalBaseCloseButton.tsx
import React49, { forwardRef as forwardRef9 } from "react";
import cx4 from "clsx";

// ../components/CloseButton/src/CloseIcon.tsx
import React47, { forwardRef as forwardRef8 } from "react";
var CloseIcon = forwardRef8(
  (_a, ref) => {
    var _b = _a, { size: size2 = "var(--cb-icon-size, 70%)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ React47.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size2, height: size2 }),
        ref
      }, others),
      /* @__PURE__ */ React47.createElement(
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

// ../components/CloseButton/src/CloseButton.tsx
import React48 from "react";
import {
  polymorphicFactory as polymorphicFactory4,
  useProps as useProps28,
  rem as rem9,
  getSize as getSize5,
  getRadius as getRadius3,
  createVarsResolver as createVarsResolver11,
  useStyles as useStyles17
} from "@raikou/core";
var defaultProps28 = {
  variant: "subtle",
  size: "md"
};
var varsResolver11 = createVarsResolver11(
  (_, { size: size2, radius, iconSize }) => ({
    root: {
      "--cb-size": getSize5(size2, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : getRadius3(radius),
      "--cb-icon-size": rem9(iconSize)
    }
  })
);
var CloseButton = polymorphicFactory4(
  (_props, ref) => {
    const props = useProps28("CloseButton", defaultProps28, _props);
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
    const getStyles2 = useStyles17({
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
      varsResolver: varsResolver11
    });
    return /* @__PURE__ */ React48.createElement(
      UnstyledButton,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, others), {
        unstyled,
        variant,
        disabled,
        mod: { disabled: disabled || dataDisabled }
      }), getStyles2("root", { variant, active: true })),
      /* @__PURE__ */ React48.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// ../components/ModalBase/src/ModalBaseCloseButton.tsx
var ModalBaseCloseButton = forwardRef9((_a, ref) => {
  var _b = _a, { className, onClick } = _b, others = __objRest(_b, ["className", "onClick"]);
  const ctx = useModalBaseContext();
  return /* @__PURE__ */ React49.createElement(
    CloseButton,
    __spreadProps(__spreadValues({
      ref
    }, others), {
      onClick: (event) => {
        ctx.onClose();
        onClick == null ? void 0 : onClick(event);
      },
      className: cx4("modalBase-close", className)
    })
  );
});
ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";

// ../components/ModalBase/src/ModalBaseContent.tsx
import React51, { forwardRef as forwardRef10 } from "react";
import cx5 from "clsx";

// ../components/Paper/src/Paper.tsx
import React50 from "react";
import {
  Box as Box20,
  polymorphicFactory as polymorphicFactory5,
  useProps as useProps29,
  useStyles as useStyles18,
  getRadius as getRadius4,
  getShadow as getShadow3,
  createVarsResolver as createVarsResolver12
} from "@raikou/core";
var defaultProps29 = {};
var varsResolver12 = createVarsResolver12(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": radius === void 0 ? void 0 : getRadius4(radius),
      "--paper-shadow": getShadow3(shadow)
    }
  })
);
var Paper = polymorphicFactory5((_props, ref) => {
  const props = useProps29("Paper", defaultProps29, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "withBorder",
    "vars",
    "radius",
    "shadow",
    "variant"
  ]);
  const getStyles2 = useStyles18({
    name: "Paper",
    props,
    classes: {
      root: "paper-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver12
  });
  return /* @__PURE__ */ React50.createElement(
    Box20,
    __spreadValues(__spreadProps(__spreadValues({
      ref,
      mod: { "data-with-border": withBorder }
    }, getStyles2("root")), {
      variant
    }), others)
  );
});
Paper.displayName = "@raikou/core/Paper";

// ../components/ModalBase/src/ModalBaseContent.tsx
var ModalBaseContent = forwardRef10(
  (_a, ref) => {
    var _b = _a, { transitionProps, className, innerProps, onKeyDown, style } = _b, others = __objRest(_b, ["transitionProps", "className", "innerProps", "onKeyDown", "style"]);
    const ctx = useModalBaseContext();
    const handleKeyDown = (event) => {
      var _a2;
      const shouldTrigger = ((_a2 = event.target) == null ? void 0 : _a2.getAttribute(
        "data-raikou-stop-propagation"
      )) !== "true";
      shouldTrigger && event.key === "Escape" && ctx.closeOnEscape && ctx.onClose();
      onKeyDown == null ? void 0 : onKeyDown(event);
    };
    return /* @__PURE__ */ React51.createElement(
      Transition,
      __spreadValues(__spreadValues({
        mounted: ctx.opened,
        transition: "pop"
      }, ctx.transitionProps), transitionProps),
      (transitionStyles) => /* @__PURE__ */ React51.createElement(
        "div",
        __spreadProps(__spreadValues({}, innerProps), {
          className: cx5("modalBase-inner", innerProps.className)
        }),
        /* @__PURE__ */ React51.createElement(FocusTrap, { active: ctx.opened && ctx.trapFocus }, /* @__PURE__ */ React51.createElement(
          Paper,
          __spreadProps(__spreadValues({}, others), {
            component: "section",
            role: "dialog",
            tabIndex: -1,
            "aria-modal": true,
            "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
            "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
            onKeyDown: handleKeyDown,
            ref,
            style: [style, transitionStyles],
            className: cx5("modalBase-content", className)
          }),
          others.children
        ))
      )
    );
  }
);
ModalBaseContent.displayName = "@raikou/core/ModalBaseContent";

// ../components/ModalBase/src/ModalBaseHeader.tsx
import React52, { forwardRef as forwardRef11 } from "react";
import cx6 from "clsx";
import { Box as Box21 } from "@raikou/core";
var ModalBaseHeader = forwardRef11(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React52.createElement(Box21, __spreadValues({ ref, className: cx6("modalBase-header", className) }, others));
  }
);
ModalBaseHeader.displayName = "@raikou/core/ModalBaseHeader";

// ../components/ModalBase/src/ModalBaseOverlay.tsx
import React54, { forwardRef as forwardRef12 } from "react";

// ../components/Overlay/src/Overlay.tsx
import React53 from "react";
import {
  Box as Box22,
  polymorphicFactory as polymorphicFactory6,
  useProps as useProps30,
  useStyles as useStyles19,
  createVarsResolver as createVarsResolver13,
  rgba,
  getDefaultZIndex as getDefaultZIndex3,
  getRadius as getRadius5,
  rem as rem10
} from "@raikou/core";
var defaultProps30 = {
  zIndex: getDefaultZIndex3("modal")
};
var varsResolver13 = createVarsResolver13(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && rgba(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6) || void 0,
      "--overlay-filter": blur ? `blur(${rem10(blur)})` : void 0,
      "--overlay-radius": radius === void 0 ? void 0 : getRadius5(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = polymorphicFactory6((_props, ref) => {
  const props = useProps30("Overlay", defaultProps30, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "fixed",
    "center",
    "children",
    "radius",
    "zIndex",
    "gradient",
    "blur",
    "color",
    "backgroundOpacity"
  ]);
  const getStyles2 = useStyles19({
    name: "Overlay",
    props,
    classes: {
      root: "overlay-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver13
  });
  return /* @__PURE__ */ React53.createElement(Box22, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles2("root")), { mod: { center, fixed } }), others), children);
});
Overlay.displayName = "@raikou/core/Overlay";

// ../components/ModalBase/src/use-modal-transition.ts
var DEFAULT_TRANSITION = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function useModalTransition(transitionOverride) {
  const ctx = useModalBaseContext();
  return __spreadValues(__spreadValues(__spreadValues({}, DEFAULT_TRANSITION), ctx.transitionProps), transitionOverride);
}

// ../components/ModalBase/src/ModalBaseOverlay.tsx
var ModalBaseOverlay = forwardRef12((_a, ref) => {
  var _b = _a, { onClick, transitionProps, style } = _b, others = __objRest(_b, ["onClick", "transitionProps", "style"]);
  const ctx = useModalBaseContext();
  const transition = useModalTransition(transitionProps);
  return /* @__PURE__ */ React54.createElement(Transition, __spreadProps(__spreadValues({ mounted: ctx.opened }, transition), { transition: "fade" }), (transitionStyles) => /* @__PURE__ */ React54.createElement(
    Overlay,
    __spreadValues({
      ref,
      fixed: true,
      style: [style, transitionStyles],
      zIndex: ctx.zIndex,
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        ctx.closeOnClickOutside && ctx.onClose();
      }
    }, others)
  ));
});
ModalBaseOverlay.displayName = "@raikou/core/ModalBaseOverlay";

// ../components/ModalBase/src/ModalBaseTitle.tsx
import React55, { forwardRef as forwardRef13 } from "react";
import cx7 from "clsx";
import { Box as Box23 } from "@raikou/core";

// ../components/ModalBase/src/use-modal-title-id.ts
import { useEffect as useEffect11 } from "react";
function useModalTitle() {
  const ctx = useModalBaseContext();
  useEffect11(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

// ../components/ModalBase/src/ModalBaseTitle.tsx
var ModalBaseTitle = forwardRef13((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const id = useModalTitle();
  return /* @__PURE__ */ React55.createElement(
    Box23,
    __spreadProps(__spreadValues({
      component: "h2",
      ref,
      className: cx7("modalBase-title", className)
    }, others), {
      id
    })
  );
});
ModalBaseTitle.displayName = "@raikou/core/ModalBaseTitle";

// ../components/ModalBase/src/NativeScrollArea.tsx
import React56 from "react";
function NativeScrollArea({ children }) {
  return /* @__PURE__ */ React56.createElement(React56.Fragment, null, children);
}

// ../components/Modal/src/Modal.context.ts
var [ModalProvider, useModalContext] = createSafeContext(
  "Modal component was not found in tree"
);

// ../components/Modal/src/ModalRoot.tsx
var defaultProps31 = {
  __staticSelector: "Modal",
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex4("modal"),
  transitionProps: { duration: 200, transition: "pop" }
};
var varsResolver14 = createVarsResolver14(
  (_, { radius, size: size2, yOffset, xOffset }) => ({
    root: {
      "--modal-radius": radius === void 0 ? void 0 : getRadius6(radius),
      "--modal-size": getSize6(size2, "modal-size"),
      "--modal-y-offset": rem11(yOffset),
      "--modal-x-offset": rem11(xOffset)
    }
  })
);
var ModalRoot = factory23((_props, ref) => {
  const props = useProps31("ModalRoot", defaultProps31, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    centered,
    xOffset,
    __staticSelector
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "yOffset",
    "scrollAreaComponent",
    "radius",
    "fullScreen",
    "centered",
    "xOffset",
    "__staticSelector"
  ]);
  const getStyles2 = useStyles20({
    name: __staticSelector,
    classes: {
      root: "modal-root",
      header: "modal-header",
      content: "modal-content",
      inner: "modal-inner",
      title: "modal-title",
      body: "modal-body",
      overlay: "modal-overlay",
      close: "modal-close"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver14
  });
  return /* @__PURE__ */ React57.createElement(ModalProvider, { value: { yOffset, scrollAreaComponent, getStyles: getStyles2 } }, /* @__PURE__ */ React57.createElement(
    ModalBase,
    __spreadValues(__spreadProps(__spreadValues({
      ref
    }, getStyles2("root")), {
      "data-full-screen": fullScreen || void 0,
      "data-centered": centered || void 0
    }), others)
  ));
});
ModalRoot.displayName = "@raikou/core/ModalRoot";

// ../components/Modal/src/ModalBody.tsx
import React58 from "react";
import {
  factory as factory24,
  useProps as useProps32
} from "@raikou/core";
var defaultProps32 = {};
var ModalBody = factory24((_props, ref) => {
  const props = useProps32("ModalBody", defaultProps32, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React58.createElement(
    ModalBaseBody,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("body", { classNames, style, styles, className })), others)
  );
});
ModalBody.displayName = "@raikou/core/ModalBody";

// ../components/Modal/src/ModalCloseButton.tsx
import React59 from "react";
import {
  factory as factory25,
  useProps as useProps33
} from "@raikou/core";
var defaultProps33 = {};
var ModalCloseButton = factory25(
  (_props, ref) => {
    const props = useProps33("ModalCloseButton", defaultProps33, _props);
    const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
    const ctx = useModalContext();
    return /* @__PURE__ */ React59.createElement(
      ModalBaseCloseButton,
      __spreadValues(__spreadValues({
        ref
      }, ctx.getStyles("close", { classNames, style, styles, className })), others)
    );
  }
);
ModalCloseButton.displayName = "@raikou/core/ModalCloseButton";

// ../components/Modal/src/ModalOverlay.tsx
import React60 from "react";
import {
  factory as factory26,
  useProps as useProps34
} from "@raikou/core";
var defaultProps34 = {};
var ModalOverlay = factory26((_props, ref) => {
  const props = useProps34("ModalOverlay", defaultProps34, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React60.createElement(
    ModalBaseOverlay,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("overlay", { classNames, style, styles, className })), others)
  );
});
ModalOverlay.displayName = "@raikou/core/ModalOverlay";

// ../components/Modal/src/ModalContent.tsx
import React61 from "react";
import {
  factory as factory27,
  useProps as useProps35,
  rem as rem12
} from "@raikou/core";
var defaultProps35 = {};
var ModalContent = factory27((_props, ref) => {
  const props = useProps35("ModalContent", defaultProps35, _props);
  const _a = props, { classNames, className, style, styles, vars, children } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "children"]);
  const ctx = useModalContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return /* @__PURE__ */ React61.createElement(
    ModalBaseContent,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("content", { className, style, styles, classNames })), {
      innerProps: ctx.getStyles("inner", {
        className,
        style,
        styles,
        classNames
      }),
      ref
    }), others),
    /* @__PURE__ */ React61.createElement(Scroll, { style: { maxHeight: `calc(100vh - (${rem12(ctx.yOffset)} * 2))` } }, children)
  );
});
ModalContent.displayName = "@raikou/core/ModalContent";

// ../components/Modal/src/ModalTitle.tsx
import React62 from "react";
import {
  factory as factory28,
  useProps as useProps36
} from "@raikou/core";
var defaultProps36 = {};
var ModalTitle = factory28((_props, ref) => {
  const props = useProps36("ModalTitle", defaultProps36, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React62.createElement(
    ModalBaseTitle,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("title", { classNames, style, styles, className })), others)
  );
});
ModalTitle.displayName = "@raikou/core/ModalTitle";

// ../components/Modal/src/ModalHeader.tsx
import React63 from "react";
import {
  factory as factory29,
  useProps as useProps37
} from "@raikou/core";
var defaultProps37 = {};
var ModalHeader = factory29((_props, ref) => {
  const props = useProps37("ModalHeader", defaultProps37, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React63.createElement(
    ModalBaseHeader,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("header", { classNames, style, styles, className })), others)
  );
});
ModalHeader.displayName = "@raikou/core/ModalHeader";

// ../components/Modal/src/Modal.tsx
var defaultProps38 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex5("modal"),
  transitionProps: { duration: 200, transition: "pop" },
  withOverlay: true,
  withCloseButton: true
};
var Modal = factory30((_props, ref) => {
  const _a = useProps38("Modal", defaultProps38, _props), {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius
  } = _a, others = __objRest(_a, [
    "title",
    "withOverlay",
    "overlayProps",
    "withCloseButton",
    "closeButtonProps",
    "children",
    "radius"
  ]);
  const hasHeader = !!title || withCloseButton;
  return /* @__PURE__ */ React64.createElement(ModalRoot, __spreadValues({ ref, radius }, others), withOverlay && /* @__PURE__ */ React64.createElement(ModalOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ React64.createElement(ModalContent, { radius }, hasHeader && /* @__PURE__ */ React64.createElement(ModalHeader, null, title && /* @__PURE__ */ React64.createElement(ModalTitle, null, title), withCloseButton && /* @__PURE__ */ React64.createElement(ModalCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ React64.createElement(ModalBody, null, children)));
});
Modal.displayName = "@raikou/core/Modal";
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;

// src/components/PickerInputBase/PickerInputBase.tsx
var defaultProps39 = {};
var PickerInputBase = factory31(
  (_props, ref) => {
    const _a = useInputProps("PickerInputBase", defaultProps39, _props), {
      inputProps,
      wrapperProps,
      placeholder,
      classNames,
      styles,
      unstyled,
      popoverProps,
      modalProps,
      dropdownType,
      children,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClick,
      clearable,
      onClear,
      clearButtonProps,
      rightSection,
      shouldClear,
      readOnly,
      disabled,
      value,
      name,
      form,
      type
    } = _a, others = __objRest(_a, [
      "inputProps",
      "wrapperProps",
      "placeholder",
      "classNames",
      "styles",
      "unstyled",
      "popoverProps",
      "modalProps",
      "dropdownType",
      "children",
      "formattedValue",
      "dropdownHandlers",
      "dropdownOpened",
      "onClick",
      "clearable",
      "onClear",
      "clearButtonProps",
      "rightSection",
      "shouldClear",
      "readOnly",
      "disabled",
      "value",
      "name",
      "form",
      "type"
    ]);
    const _rightSection = rightSection || (clearable && shouldClear && !readOnly && !disabled ? (
      // @ts-ignore
      /* @__PURE__ */ React65.createElement(
        CloseButton,
        __spreadValues({
          variant: "transparent",
          onClick: onClear,
          unstyled,
          size: inputProps.size || "sm"
        }, clearButtonProps)
      )
    ) : null);
    const handleClose = () => {
      const isInvalidRangeValue = type === "range" && Array.isArray(value) && value[0] && !value[1];
      if (isInvalidRangeValue) {
        onClear();
      }
      dropdownHandlers.close();
    };
    return /* @__PURE__ */ React65.createElement(React65.Fragment, null, dropdownType === "modal" && !readOnly && /* @__PURE__ */ React65.createElement(
      Modal,
      __spreadValues({
        opened: dropdownOpened,
        onClose: handleClose,
        withCloseButton: false,
        size: "auto",
        "data-dates-modal": true,
        unstyled
      }, modalProps),
      children
    ), /* @__PURE__ */ React65.createElement(Input.Wrapper, __spreadValues({}, wrapperProps), /* @__PURE__ */ React65.createElement(
      Popover,
      __spreadValues({
        position: "bottom-start",
        opened: dropdownOpened,
        onClose: handleClose,
        disabled: dropdownType === "modal" || readOnly,
        trapFocus: true,
        returnFocus: true,
        unstyled
      }, popoverProps),
      /* @__PURE__ */ React65.createElement(Popover.Target, null, /* @__PURE__ */ React65.createElement(
        Input,
        __spreadValues(__spreadProps(__spreadValues({
          "aria-label": formattedValue || placeholder,
          "data-dates-input": true,
          "data-read-only": readOnly || void 0,
          disabled,
          component: "button",
          type: "button",
          multiline: true,
          onClick: (event) => {
            onClick == null ? void 0 : onClick(event);
            dropdownHandlers.toggle();
          },
          rightSection: _rightSection
        }, inputProps), {
          ref,
          classNames: __spreadProps(__spreadValues({}, classNames), {
            input: cx8(
              "dates-pickerInput-input",
              classNames == null ? void 0 : classNames.input
            )
          })
        }), others),
        formattedValue || // @ts-ignore
        /* @__PURE__ */ React65.createElement(Input.Placeholder, { error: inputProps.error }, placeholder)
      )),
      /* @__PURE__ */ React65.createElement(Popover.Dropdown, { "data-dates-dropdown": true }, children)
    )), /* @__PURE__ */ React65.createElement(HiddenDatesInput, { value, name, form, type }));
  }
);
PickerInputBase.displayName = "@raikou/dates/PickerInputBase";

// src/components/Calendar/Calendar.tsx
import dayjs26 from "dayjs";
import React66 from "react";
import {
  Box as Box24,
  factory as factory32,
  useProps as useProps39,
  useResolvedStylesApi as useResolvedStylesApi3
} from "@raikou/core";
import { useUncontrolled as useUncontrolled3 } from "@raikou/hooks";

// src/components/Calendar/clamp-level/clamp-level.ts
import { clamp } from "@raikou/hooks";
function levelToNumber(level, fallback) {
  if (!level) {
    return fallback || 0;
  }
  return level === "month" ? 0 : level === "year" ? 1 : 2;
}
function levelNumberToLevel(levelNumber) {
  return levelNumber === 0 ? "month" : levelNumber === 1 ? "year" : "decade";
}
function clampLevel(level, minLevel, maxLevel) {
  return levelNumberToLevel(
    clamp(
      levelToNumber(level, 0),
      levelToNumber(minLevel, 0),
      levelToNumber(maxLevel, 2)
    )
  );
}

// src/hooks/use-dates-state/use-dates-state.ts
import dayjs25 from "dayjs";
import { useState as useState13 } from "react";

// src/hooks/use-uncontrolled-dates/use-uncontrolled-dates.ts
import { useUncontrolled as useUncontrolled2 } from "@raikou/hooks";
import { useRef as useRef13 } from "react";
var getEmptyValue = (type) => type === "range" ? [null, null] : type === "multiple" ? [] : null;
function useUncontrolledDates({
  type,
  value,
  defaultValue,
  onChange,
  applyTimezone = true
}) {
  const storedType = useRef13(type);
  const ctx = useDatesContext();
  const [_value, _setValue, controlled] = useUncontrolled2({
    value: shiftTimezone("add", value, ctx.getTimezone(), !applyTimezone),
    defaultValue: shiftTimezone(
      "add",
      defaultValue,
      ctx.getTimezone(),
      !applyTimezone
    ),
    finalValue: getEmptyValue(type),
    onChange: (newDate) => {
      onChange == null ? void 0 : onChange(
        shiftTimezone("remove", newDate, ctx.getTimezone(), !applyTimezone)
      );
    }
  });
  let _finalValue = _value;
  if (storedType.current !== type) {
    storedType.current = type;
    if (value === void 0) {
      _finalValue = defaultValue !== void 0 ? defaultValue : getEmptyValue(type);
      _setValue(_finalValue);
    } else if (process.env.NODE_ENV === "development") {
      switch (type) {
        case "default":
          if (value !== null && typeof value !== "string") {
            console.error(
              "[@raikou/dates/use-uncontrolled-dates] Value must be type of `null` or `string`"
            );
          }
          break;
        case "multiple":
          if (!(value instanceof Array)) {
            console.error(
              "[@raikou/dates/use-uncontrolled-dates] Value must be type of `string[]`"
            );
          }
          break;
        case "range":
          if (!(value instanceof Array) || value.length !== 2) {
            console.error(
              "[@raikou/dates/use-uncontrolled-dates] Value must be type of `[string, string]`"
            );
          }
          break;
      }
    }
  }
  return [_finalValue, _setValue, controlled];
}

// src/hooks/use-dates-state/is-in-range/is-in-range.ts
import dayjs24 from "dayjs";
function isInRange(date, range) {
  const _range = [...range].sort((a, b) => a.getTime() - b.getTime());
  return dayjs24(_range[0]).startOf("day").subtract(1, "ms").isBefore(date) && dayjs24(_range[1]).endOf("day").add(1, "ms").isAfter(date);
}

// src/hooks/use-dates-state/use-dates-state.ts
function useDatesState({
  type,
  level,
  value,
  defaultValue,
  onChange,
  allowSingleDateInRange,
  allowDeselect,
  onMouseLeave,
  applyTimezone = true
}) {
  const [_value, setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange,
    applyTimezone
  });
  const [pickedDate, setPickedDate] = useState13(
    type === "range" ? _value[0] && !_value[1] ? _value[0] : null : null
  );
  const [hoveredDate, setHoveredDate] = useState13(null);
  const onDateChange = (date) => {
    if (type === "range") {
      if (pickedDate instanceof Date && !_value[1]) {
        if (dayjs25(date).isSame(pickedDate, level) && !allowSingleDateInRange) {
          setPickedDate(null);
          setHoveredDate(null);
          setValue([null, null]);
          return;
        }
        const result = [date, pickedDate];
        result.sort((a, b) => a.getTime() - b.getTime());
        setValue(result);
        setHoveredDate(null);
        setPickedDate(null);
        return;
      }
      if (_value[0] && !_value[1] && dayjs25(date).isSame(_value[0], level) && !allowSingleDateInRange) {
        setPickedDate(null);
        setHoveredDate(null);
        setValue([null, null]);
        return;
      }
      setValue([date, null]);
      setHoveredDate(null);
      setPickedDate(date);
      return;
    }
    if (type === "multiple") {
      if (_value.some((selected) => dayjs25(selected).isSame(date, level))) {
        setValue(
          _value.filter(
            (selected) => !dayjs25(selected).isSame(date, level)
          )
        );
      } else {
        setValue([..._value, date]);
      }
      return;
    }
    if (_value && allowDeselect && dayjs25(date).isSame(_value, level)) {
      setValue(null);
    } else {
      setValue(date);
    }
  };
  const isDateInRange = (date) => {
    if (pickedDate instanceof Date && hoveredDate instanceof Date) {
      return isInRange(date, [hoveredDate, pickedDate]);
    }
    if (_value[0] instanceof Date && _value[1] instanceof Date) {
      return isInRange(date, _value);
    }
    return false;
  };
  const onRootMouseLeave = type === "range" ? (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    setHoveredDate(null);
  } : onMouseLeave;
  const isFirstInRange = (date) => {
    if (!(_value[0] instanceof Date)) {
      return false;
    }
    if (dayjs25(date).isSame(_value[0], level)) {
      return !(hoveredDate && dayjs25(hoveredDate).isBefore(_value[0]));
    }
    return false;
  };
  const isLastInRange = (date) => {
    if (_value[1] instanceof Date) {
      return dayjs25(date).isSame(_value[1], level);
    }
    if (!(_value[0] instanceof Date) || !hoveredDate) {
      return false;
    }
    return dayjs25(hoveredDate).isBefore(_value[0]) && dayjs25(date).isSame(_value[0], level);
  };
  const getControlProps = (date) => {
    if (type === "range") {
      return {
        selected: _value.some(
          (selection) => selection && dayjs25(selection).isSame(date, level)
        ),
        inRange: isDateInRange(date),
        firstInRange: isFirstInRange(date),
        lastInRange: isLastInRange(date),
        "data-autofocus": !!_value[0] && dayjs25(_value[0]).isSame(date, level) || void 0
      };
    }
    if (type === "multiple") {
      return {
        selected: _value.some(
          (selection) => selection && dayjs25(selection).isSame(date, level)
        ),
        "data-autofocus": !!_value[0] && dayjs25(_value[0]).isSame(date, level) || void 0
      };
    }
    const selected = dayjs25(_value).isSame(date, level);
    return { selected, "data-autofocus": selected || void 0 };
  };
  const onHoveredDateChange = type === "range" && pickedDate ? setHoveredDate : () => {
  };
  return {
    onDateChange,
    onRootMouseLeave,
    onHoveredDateChange,
    getControlProps,
    _value,
    setValue
  };
}

// src/hooks/use-dates-input/use-dates-input.ts
import { useDisclosure } from "@raikou/hooks";
function useDatesInput({
  type,
  value,
  defaultValue,
  onChange,
  locale,
  format,
  closeOnChange,
  sortDates,
  labelSeparator
}) {
  const ctx = useDatesContext();
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const [_value, _setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange
  });
  const formattedValue = getFormattedDate({
    type,
    date: _value,
    locale: ctx.getLocale(locale),
    format,
    labelSeparator: ctx.getLabelSeparator(labelSeparator)
  });
  const setValue = (val) => {
    if (closeOnChange) {
      if (type === "default") {
        dropdownHandlers.close();
      }
      if (type === "range" && val[0] && val[1]) {
        dropdownHandlers.close();
      }
    }
    if (sortDates && type === "multiple") {
      _setValue([...val].sort((a, b) => a.getTime() - b.getTime()));
    } else {
      _setValue(val);
    }
  };
  const onClear = () => setValue(type === "range" ? [null, null] : type === "multiple" ? [] : null);
  const shouldClear = type === "range" ? !!_value[0] : type === "multiple" ? _value.length > 0 : _value !== null;
  return {
    _value,
    setValue,
    onClear,
    shouldClear,
    formattedValue,
    dropdownOpened,
    dropdownHandlers
  };
}

// src/components/Calendar/Calendar.tsx
var defaultProps40 = {
  maxLevel: "decade",
  minLevel: "month",
  __updateDateOnYearSelect: true,
  __updateDateOnMonthSelect: true
};
var Calendar = factory32((_props, ref) => {
  const props = useProps39("Calendar", defaultProps40, _props);
  const _a = props, {
    vars,
    maxLevel: maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    firstDayOfWeek: firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    nextIcon,
    previousIcon,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    monthsListFormat: monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    yearsListFormat: yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    classNames: classNames,
    styles,
    unstyled,
    minDate,
    maxDate,
    locale,
    __staticSelector,
    size: size2,
    __preventFocus,
    __stopPropagation,
    onNextDecade,
    onPreviousDecade,
    onNextYear,
    onPreviousYear,
    onNextMonth,
    onPreviousMonth,
    static: isStatic,
    __timezoneApplied
  } = _a, others = __objRest(_a, [
    "vars",
    // CalendarLevel props
    "maxLevel",
    "minLevel",
    "defaultLevel",
    "level",
    "onLevelChange",
    "date",
    "defaultDate",
    "onDateChange",
    "numberOfColumns",
    "columnsToScroll",
    "ariaLabels",
    "onYearSelect",
    "onMonthSelect",
    "onYearMouseEnter",
    "onMonthMouseEnter",
    "__updateDateOnYearSelect",
    "__updateDateOnMonthSelect",
    // MonthLevelGroup props
    "firstDayOfWeek",
    "weekdayFormat",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "monthLabelFormat",
    "nextIcon",
    "previousIcon",
    "__onDayClick",
    "__onDayMouseEnter",
    "withCellSpacing",
    // YearLevelGroup props
    "monthsListFormat",
    "getMonthControlProps",
    "yearLabelFormat",
    // DecadeLevelGroup props
    "yearsListFormat",
    "getYearControlProps",
    "decadeLabelFormat",
    // Other props
    "classNames",
    "styles",
    "unstyled",
    "minDate",
    "maxDate",
    "locale",
    "__staticSelector",
    "size",
    "__preventFocus",
    "__stopPropagation",
    "onNextDecade",
    "onPreviousDecade",
    "onNextYear",
    "onPreviousYear",
    "onNextMonth",
    "onPreviousMonth",
    "static",
    "__timezoneApplied"
  ]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi3({
    classNames,
    styles,
    props
  });
  const [_level, setLevel] = useUncontrolled3({
    value: level ? clampLevel(level, minLevel, maxLevel) : void 0,
    defaultValue: defaultLevel ? clampLevel(defaultLevel, minLevel, maxLevel) : void 0,
    finalValue: clampLevel(void 0, minLevel, maxLevel),
    onChange: onLevelChange
  });
  const [_date, setDate] = useUncontrolledDates({
    type: "default",
    value: date,
    defaultValue: defaultDate,
    onChange: onDateChange,
    applyTimezone: !__timezoneApplied
  });
  const stylesApiProps = {
    __staticSelector: __staticSelector || "Calendar",
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size: size2
  };
  const ctx = useDatesContext();
  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;
  const currentDate = _date || shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone());
  const handleNextMonth = () => {
    const nextDate = dayjs26(currentDate).add(_columnsToScroll, "month").toDate();
    onNextMonth == null ? void 0 : onNextMonth(nextDate);
    setDate(nextDate);
  };
  const handlePreviousMonth = () => {
    const nextDate = dayjs26(currentDate).subtract(_columnsToScroll, "month").toDate();
    onPreviousMonth == null ? void 0 : onPreviousMonth(nextDate);
    setDate(nextDate);
  };
  const handleNextYear = () => {
    const nextDate = dayjs26(currentDate).add(_columnsToScroll, "year").toDate();
    onNextYear == null ? void 0 : onNextYear(nextDate);
    setDate(nextDate);
  };
  const handlePreviousYear = () => {
    const nextDate = dayjs26(currentDate).subtract(_columnsToScroll, "year").toDate();
    onPreviousYear == null ? void 0 : onPreviousYear(nextDate);
    setDate(nextDate);
  };
  const handleNextDecade = () => {
    const nextDate = dayjs26(currentDate).add(10 * _columnsToScroll, "year").toDate();
    onNextDecade == null ? void 0 : onNextDecade(nextDate);
    setDate(nextDate);
  };
  const handlePreviousDecade = () => {
    const nextDate = dayjs26(currentDate).subtract(10 * _columnsToScroll, "year").toDate();
    onPreviousDecade == null ? void 0 : onPreviousDecade(nextDate);
    setDate(nextDate);
  };
  return /* @__PURE__ */ React66.createElement(Box24, __spreadValues({ ref, size: size2, "data-calendar": true }, others), _level === "month" && /* @__PURE__ */ React66.createElement(
    MonthLevelGroup,
    __spreadValues({
      month: currentDate,
      minDate,
      maxDate,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      onNext: handleNextMonth,
      onPrevious: handlePreviousMonth,
      hasNextLevel: maxLevel !== "month",
      onLevelClick: () => setLevel("year"),
      numberOfColumns,
      locale,
      levelControlAriaLabel: ariaLabels == null ? void 0 : ariaLabels.monthLevelControl,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextMonth,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousMonth,
      previousIcon,
      monthLabelFormat,
      __onDayClick,
      __onDayMouseEnter,
      __preventFocus,
      __stopPropagation,
      static: isStatic,
      withCellSpacing
    }, stylesApiProps)
  ), _level === "year" && /* @__PURE__ */ React66.createElement(
    YearLevelGroup,
    __spreadValues({
      year: currentDate,
      numberOfColumns,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      locale,
      onNext: handleNextYear,
      onPrevious: handlePreviousYear,
      hasNextLevel: maxLevel !== "month" && maxLevel !== "year",
      onLevelClick: () => setLevel("decade"),
      levelControlAriaLabel: ariaLabels == null ? void 0 : ariaLabels.yearLevelControl,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextYear,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousYear,
      previousIcon,
      yearLabelFormat,
      __onControlMouseEnter: onMonthMouseEnter,
      __onControlClick: (_event, payload) => {
        __updateDateOnMonthSelect && setDate(payload);
        setLevel(clampLevel("month", minLevel, maxLevel));
        onMonthSelect == null ? void 0 : onMonthSelect(payload);
      },
      __preventFocus,
      __stopPropagation,
      withCellSpacing
    }, stylesApiProps)
  ), _level === "decade" && /* @__PURE__ */ React66.createElement(
    DecadeLevelGroup,
    __spreadValues({
      decade: currentDate,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      locale,
      onNext: handleNextDecade,
      onPrevious: handlePreviousDecade,
      numberOfColumns,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextDecade,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousDecade,
      previousIcon,
      decadeLabelFormat,
      __onControlMouseEnter: onYearMouseEnter,
      __onControlClick: (_event, payload) => {
        __updateDateOnYearSelect && setDate(payload);
        setLevel(clampLevel("year", minLevel, maxLevel));
        onYearSelect == null ? void 0 : onYearSelect(payload);
      },
      __preventFocus,
      __stopPropagation,
      withCellSpacing
    }, stylesApiProps)
  ));
});
Calendar.displayName = "@raikou/dates/Calendar";

// src/components/Calendar/pick-calendar-levels-props/pick-calendar-levels-props.ts
function pickCalendarProps(props) {
  const _a = props, {
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    nextIcon,
    previousIcon,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    onNextMonth,
    onPreviousMonth,
    onNextYear,
    onPreviousYear,
    onNextDecade,
    onPreviousDecade,
    withCellSpacing,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    firstDayOfWeek: firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    monthsListFormat: monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    yearsListFormat: yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    allowSingleDateInRange: allowSingleDateInRange,
    allowDeselect,
    minDate: minDate,
    maxDate,
    locale
  } = _a, others = __objRest(_a, [
    "maxLevel",
    "minLevel",
    "defaultLevel",
    "level",
    "onLevelChange",
    "nextIcon",
    "previousIcon",
    "date",
    "defaultDate",
    "onDateChange",
    "numberOfColumns",
    "columnsToScroll",
    "ariaLabels",
    "onYearSelect",
    "onMonthSelect",
    "onYearMouseEnter",
    "onMonthMouseEnter",
    "onNextMonth",
    "onPreviousMonth",
    "onNextYear",
    "onPreviousYear",
    "onNextDecade",
    "onPreviousDecade",
    "withCellSpacing",
    "__updateDateOnYearSelect",
    "__updateDateOnMonthSelect",
    // MonthLevelGroup props
    "firstDayOfWeek",
    "weekdayFormat",
    "weekendDays",
    "getDayProps",
    "excludeDate",
    "renderDay",
    "hideOutsideDates",
    "hideWeekdays",
    "getDayAriaLabel",
    "monthLabelFormat",
    // YearLevelGroup props
    "monthsListFormat",
    "getMonthControlProps",
    "yearLabelFormat",
    // DecadeLevelGroup props
    "yearsListFormat",
    "getYearControlProps",
    "decadeLabelFormat",
    // External picker props
    "allowSingleDateInRange",
    "allowDeselect",
    // Other props
    "minDate",
    "maxDate",
    "locale"
  ]);
  return {
    calendarProps: {
      maxLevel,
      minLevel,
      defaultLevel,
      level,
      onLevelChange,
      nextIcon,
      previousIcon,
      date,
      defaultDate,
      onDateChange,
      numberOfColumns,
      columnsToScroll,
      ariaLabels,
      onYearSelect,
      onMonthSelect,
      onYearMouseEnter,
      onMonthMouseEnter,
      onNextMonth,
      onPreviousMonth,
      onNextYear,
      onPreviousYear,
      onNextDecade,
      onPreviousDecade,
      withCellSpacing,
      __updateDateOnYearSelect,
      __updateDateOnMonthSelect,
      // MonthLevelGroup props
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      monthLabelFormat,
      // YearLevelGroup props
      monthsListFormat,
      getMonthControlProps,
      yearLabelFormat,
      // DecadeLevelGroup props
      yearsListFormat,
      getYearControlProps,
      decadeLabelFormat,
      // External picker props
      allowSingleDateInRange,
      allowDeselect,
      // Other props
      minDate,
      maxDate,
      locale
    },
    others
  };
}

// src/components/YearPicker/YearPicker.tsx
import React67 from "react";
import {
  factory as factory33,
  useProps as useProps40,
  useResolvedStylesApi as useResolvedStylesApi4
} from "@raikou/core";
var defaultProps41 = {
  type: "default"
};
var YearPicker = factory33(
  (_props, ref) => {
    const props = useProps40("YearPicker", defaultProps41, _props);
    const _a = props, {
      classNames,
      styles,
      vars,
      type,
      defaultValue,
      value,
      onChange,
      __staticSelector,
      getYearControlProps,
      allowSingleDateInRange,
      allowDeselect,
      onMouseLeave,
      onYearSelect,
      __updateDateOnYearSelect,
      __timezoneApplied
    } = _a, others = __objRest(_a, [
      "classNames",
      "styles",
      "vars",
      "type",
      "defaultValue",
      "value",
      "onChange",
      "__staticSelector",
      "getYearControlProps",
      "allowSingleDateInRange",
      "allowDeselect",
      "onMouseLeave",
      "onYearSelect",
      "__updateDateOnYearSelect",
      "__timezoneApplied"
    ]);
    const {
      onDateChange,
      onRootMouseLeave,
      onHoveredDateChange,
      getControlProps
    } = useDatesState({
      type,
      level: "year",
      allowDeselect,
      allowSingleDateInRange,
      value,
      defaultValue,
      onChange,
      onMouseLeave,
      applyTimezone: !__timezoneApplied
    });
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi4({
      classNames,
      styles,
      props
    });
    const ctx = useDatesContext();
    return /* @__PURE__ */ React67.createElement(
      Calendar,
      __spreadProps(__spreadValues({
        ref,
        minLevel: "decade",
        __updateDateOnYearSelect: __updateDateOnYearSelect != null ? __updateDateOnYearSelect : false,
        __staticSelector: __staticSelector || "YearPicker",
        onMouseLeave: onRootMouseLeave,
        onYearMouseEnter: (_event, date) => onHoveredDateChange(date),
        onYearSelect: (date) => {
          onDateChange(date);
          onYearSelect == null ? void 0 : onYearSelect(date);
        },
        getYearControlProps: (date) => __spreadValues(__spreadValues({}, getControlProps(date)), getYearControlProps == null ? void 0 : getYearControlProps(date)),
        classNames: resolvedClassNames,
        styles: resolvedStyles
      }, others), {
        date: shiftTimezone(
          "add",
          others.date,
          ctx.getTimezone(),
          __timezoneApplied
        ),
        __timezoneApplied: true
      })
    );
  }
);
YearPicker.displayName = "@raikou/dates/YearPicker";

// src/components/MonthPicker/MonthPicker.tsx
import React68 from "react";
import {
  factory as factory34,
  useProps as useProps41,
  useResolvedStylesApi as useResolvedStylesApi5
} from "@raikou/core";
var defaultProps42 = {
  type: "default"
};
var MonthPicker = factory34(
  (_props, ref) => {
    const props = useProps41("MonthPicker", defaultProps42, _props);
    const _a = props, {
      classNames,
      styles,
      unstyled,
      vars,
      type,
      defaultValue,
      value,
      onChange,
      __staticSelector,
      getMonthControlProps,
      allowSingleDateInRange,
      allowDeselect,
      onMouseLeave,
      onMonthSelect,
      __updateDateOnMonthSelect,
      __timezoneApplied
    } = _a, others = __objRest(_a, [
      "classNames",
      "styles",
      "unstyled",
      "vars",
      "type",
      "defaultValue",
      "value",
      "onChange",
      "__staticSelector",
      "getMonthControlProps",
      "allowSingleDateInRange",
      "allowDeselect",
      "onMouseLeave",
      "onMonthSelect",
      "__updateDateOnMonthSelect",
      "__timezoneApplied"
    ]);
    const {
      onDateChange,
      onRootMouseLeave,
      onHoveredDateChange,
      getControlProps
    } = useDatesState({
      type,
      level: "month",
      allowDeselect,
      allowSingleDateInRange,
      value,
      defaultValue,
      onChange,
      onMouseLeave,
      applyTimezone: !__timezoneApplied
    });
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi5({
      classNames,
      styles,
      props
    });
    const ctx = useDatesContext();
    return /* @__PURE__ */ React68.createElement(
      Calendar,
      __spreadProps(__spreadValues({
        ref,
        minLevel: "year",
        __updateDateOnMonthSelect: __updateDateOnMonthSelect != null ? __updateDateOnMonthSelect : false,
        __staticSelector: __staticSelector || "MonthPicker",
        onMouseLeave: onRootMouseLeave,
        onMonthMouseEnter: (_event, date) => onHoveredDateChange(date),
        onMonthSelect: (date) => {
          onDateChange(date);
          onMonthSelect == null ? void 0 : onMonthSelect(date);
        },
        getMonthControlProps: (date) => __spreadValues(__spreadValues({}, getControlProps(date)), getMonthControlProps == null ? void 0 : getMonthControlProps(date)),
        classNames: resolvedClassNames,
        styles: resolvedStyles
      }, others), {
        date: shiftTimezone(
          "add",
          others.date,
          ctx.getTimezone(),
          __timezoneApplied
        )
      })
    );
  }
);
MonthPicker.displayName = "@raikou/dates/MonthPicker";

// src/components/DatePicker/DatePicker.tsx
import React69 from "react";
import {
  factory as factory35,
  useProps as useProps42,
  useResolvedStylesApi as useResolvedStylesApi6
} from "@raikou/core";
var defaultProps43 = {
  type: "default",
  defaultLevel: "month",
  numberOfColumns: 1
};
var DatePicker = factory35(
  (_props, ref) => {
    const props = useProps42("DatePicker", defaultProps43, _props);
    const _a = props, {
      classNames,
      styles,
      vars,
      type,
      defaultValue,
      value,
      onChange,
      __staticSelector,
      getDayProps,
      allowSingleDateInRange,
      allowDeselect,
      onMouseLeave,
      numberOfColumns,
      hideOutsideDates,
      __onDayMouseEnter,
      __onDayClick,
      __timezoneApplied
    } = _a, others = __objRest(_a, [
      "classNames",
      "styles",
      "vars",
      "type",
      "defaultValue",
      "value",
      "onChange",
      "__staticSelector",
      "getDayProps",
      "allowSingleDateInRange",
      "allowDeselect",
      "onMouseLeave",
      "numberOfColumns",
      "hideOutsideDates",
      "__onDayMouseEnter",
      "__onDayClick",
      "__timezoneApplied"
    ]);
    const {
      onDateChange,
      onRootMouseLeave,
      onHoveredDateChange,
      getControlProps
    } = useDatesState({
      type,
      level: "day",
      allowDeselect,
      allowSingleDateInRange,
      value,
      defaultValue,
      onChange,
      onMouseLeave,
      applyTimezone: !__timezoneApplied
    });
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi6({
      classNames,
      styles,
      props
    });
    const ctx = useDatesContext();
    return /* @__PURE__ */ React69.createElement(
      Calendar,
      __spreadProps(__spreadValues({
        ref,
        minLevel: "month",
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        __staticSelector: __staticSelector || "DatePicker",
        onMouseLeave: onRootMouseLeave,
        numberOfColumns,
        hideOutsideDates: hideOutsideDates != null ? hideOutsideDates : numberOfColumns !== 1,
        __onDayMouseEnter: (_event, date) => {
          onHoveredDateChange(date);
          __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(_event, date);
        },
        __onDayClick: (_event, date) => {
          onDateChange(date);
          __onDayClick == null ? void 0 : __onDayClick(_event, date);
        },
        getDayProps: (date) => __spreadValues(__spreadValues({}, getControlProps(date)), getDayProps == null ? void 0 : getDayProps(date))
      }, others), {
        date: shiftTimezone(
          "add",
          others.date,
          ctx.getTimezone(),
          __timezoneApplied
        ),
        __timezoneApplied: true
      })
    );
  }
);
DatePicker.displayName = "@raikou/dates/DatePicker";

// src/components/DateInput/DateInput.tsx
import React70, { useEffect as useEffect12, useState as useState14 } from "react";
import {
  factory as factory36
} from "@raikou/core";
import { useDidUpdate as useDidUpdate4 } from "@raikou/hooks";
import dayjs28 from "dayjs";

// src/components/DateInput/is-date-valid/is-date-valid.ts
import dayjs27 from "dayjs";
function isDateValid({ date, maxDate, minDate }) {
  if (date == null) {
    return false;
  }
  if (Number.isNaN(date.getTime())) {
    return false;
  }
  if (maxDate && dayjs27(date).isAfter(maxDate, "date")) {
    return false;
  }
  if (minDate && dayjs27(date).isBefore(minDate, "date")) {
    return false;
  }
  return true;
}

// src/components/DateInput/date-string-parser/date-string-parser.ts
function dateStringParser(dateString, timezone) {
  if (dateString === null) {
    return null;
  }
  const date = shiftTimezone("add", new Date(dateString), timezone);
  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }
  return date;
}

// src/components/DateInput/DateInput.tsx
var defaultProps44 = {
  valueFormat: "MMMM D, YYYY",
  fixOnBlur: true,
  preserveTime: true
};
var DateInput = factory36((_props, ref) => {
  const props = useInputProps("DateInput", defaultProps44, _props);
  const _a = props, {
    inputProps,
    wrapperProps,
    value,
    defaultValue,
    onChange,
    clearable,
    clearButtonProps,
    popoverProps,
    getDayProps,
    locale,
    valueFormat,
    dateParser,
    minDate,
    maxDate,
    fixOnBlur,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    name,
    form,
    rightSection,
    unstyled,
    classNames,
    styles,
    allowDeselect,
    preserveTime,
    date,
    defaultDate,
    onDateChange
  } = _a, rest = __objRest(_a, [
    "inputProps",
    "wrapperProps",
    "value",
    "defaultValue",
    "onChange",
    "clearable",
    "clearButtonProps",
    "popoverProps",
    "getDayProps",
    "locale",
    "valueFormat",
    "dateParser",
    "minDate",
    "maxDate",
    "fixOnBlur",
    "onFocus",
    "onBlur",
    "onClick",
    "readOnly",
    "name",
    "form",
    "rightSection",
    "unstyled",
    "classNames",
    "styles",
    "allowDeselect",
    "preserveTime",
    "date",
    "defaultDate",
    "onDateChange"
  ]);
  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const defaultDateParser = (val) => {
    const parsedDate = dayjs28(val, valueFormat, ctx.getLocale(locale)).toDate();
    return Number.isNaN(parsedDate.getTime()) ? dateStringParser(val, ctx.getTimezone()) : parsedDate;
  };
  const _dateParser = dateParser || defaultDateParser;
  const _allowDeselect = allowDeselect !== void 0 ? allowDeselect : clearable;
  const formatValue2 = (val) => val ? dayjs28(val).locale(ctx.getLocale(locale)).format(valueFormat) : "";
  const [_value, setValue, controlled] = useUncontrolledDates({
    type: "default",
    value,
    defaultValue,
    onChange
  });
  const [_date, setDate] = useUncontrolledDates({
    type: "default",
    value: date,
    defaultValue: defaultValue || defaultDate,
    onChange: onDateChange
  });
  useEffect12(() => {
    if (controlled) {
      setDate(value);
    }
  }, [controlled, value]);
  const [inputValue, setInputValue] = useState14(formatValue2(_value));
  useEffect12(() => {
    setInputValue(formatValue2(_value));
  }, [ctx.getLocale(locale)]);
  const [dropdownOpened, setDropdownOpened] = useState14(false);
  const handleInputChange = (event) => {
    const val = event.currentTarget.value;
    setInputValue(val);
    if (val.trim() === "" && clearable) {
      setValue(null);
    } else {
      const dateValue = _dateParser(val);
      if (isDateValid({ date: dateValue, minDate, maxDate })) {
        setValue(dateValue);
        setDate(dateValue);
      }
    }
  };
  const handleInputBlur = (event) => {
    onBlur == null ? void 0 : onBlur(event);
    setDropdownOpened(false);
    fixOnBlur && setInputValue(formatValue2(_value));
  };
  const handleInputFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
    setDropdownOpened(true);
  };
  const handleInputClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    setDropdownOpened(true);
  };
  const _getDayProps = (day) => __spreadProps(__spreadValues({}, getDayProps == null ? void 0 : getDayProps(day)), {
    selected: dayjs28(_value).isSame(day, "day"),
    onClick: () => {
      const valueWithTime = preserveTime ? assignTime(_value, day) : day;
      const val = clearable && _allowDeselect ? dayjs28(_value).isSame(day, "day") ? null : valueWithTime : valueWithTime;
      setValue(val);
      !controlled && setInputValue(formatValue2(val));
      setDropdownOpened(false);
    }
  });
  const _rightSection = rightSection || (clearable && _value && !readOnly ? (
    // @ts-ignore
    /* @__PURE__ */ React70.createElement(
      CloseButton,
      __spreadValues({
        variant: "transparent",
        onMouseDown: (event) => event.preventDefault(),
        tabIndex: -1,
        onClick: () => {
          setValue(null);
          !controlled && setInputValue("");
          setDropdownOpened(false);
        },
        unstyled
      }, clearButtonProps)
    )
  ) : null);
  useDidUpdate4(() => {
    value !== void 0 && !dropdownOpened && setInputValue(formatValue2(value));
  }, [value]);
  return /* @__PURE__ */ React70.createElement(React70.Fragment, null, /* @__PURE__ */ React70.createElement(Input.Wrapper, __spreadProps(__spreadValues({}, wrapperProps), { __staticSelector: "DateInput" }), /* @__PURE__ */ React70.createElement(
    Popover,
    __spreadValues({
      opened: dropdownOpened,
      trapFocus: false,
      position: "bottom-start",
      disabled: readOnly,
      withRoles: false
    }, popoverProps),
    /* @__PURE__ */ React70.createElement(Popover.Target, null, /* @__PURE__ */ React70.createElement(
      Input,
      __spreadProps(__spreadValues(__spreadValues({
        "data-dates-input": true,
        "data-read-only": readOnly || void 0,
        autoComplete: "off",
        ref,
        value: inputValue,
        onChange: handleInputChange,
        onBlur: handleInputBlur,
        onFocus: handleInputFocus,
        onClick: handleInputClick,
        readOnly,
        rightSection: _rightSection
      }, inputProps), others), {
        __staticSelector: "DateInput"
      })
    )),
    /* @__PURE__ */ React70.createElement(
      Popover.Dropdown,
      {
        onMouseDown: (event) => event.preventDefault(),
        "data-dates-dropdown": true
      },
      /* @__PURE__ */ React70.createElement(
        Calendar,
        __spreadProps(__spreadValues({
          __staticSelector: "DateInput",
          __timezoneApplied: true
        }, calendarProps), {
          classNames,
          styles,
          unstyled,
          __preventFocus: true,
          minDate,
          maxDate,
          locale,
          getDayProps: _getDayProps,
          size: inputProps.size,
          date: _date,
          onDateChange: setDate
        })
      )
    )
  )), /* @__PURE__ */ React70.createElement(HiddenDatesInput, { name, form, value: _value, type: "default" }));
});
DateInput.displayName = "@raikou/dates/DateInput";

// src/components/DateTimePicker/DateTimePicker.tsx
import dayjs29 from "dayjs";
import React79, { useRef as useRef14, useState as useState15 } from "react";
import {
  factory as factory39,
  useProps as useProps46,
  useStyles as useStyles24,
  useResolvedStylesApi as useResolvedStylesApi7
} from "@raikou/core";

// ../components/ActionIcon/src/ActionIcon.tsx
import React77 from "react";
import {
  useProps as useProps45,
  useStyles as useStyles23,
  getRadius as getRadius7,
  polymorphicFactory as polymorphicFactory7,
  getSize as getSize8,
  createVarsResolver as createVarsResolver17
} from "@raikou/core";

// ../components/Loader/src/Loader.tsx
import React75 from "react";
import {
  Box as Box29,
  useProps as useProps43,
  getThemeColor,
  useStyles as useStyles21,
  factory as factory37,
  getSize as getSize7,
  createVarsResolver as createVarsResolver15
} from "@raikou/core";

// ../components/Loader/src/loaders/Bars.tsx
import React71, { forwardRef as forwardRef14 } from "react";
import cx9 from "clsx";
import { Box as Box25 } from "@raikou/core";
var Bars = forwardRef14(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React71.createElement(
      Box25,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx9("bars-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React71.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React71.createElement("span", { className: "bar" }),
      /* @__PURE__ */ React71.createElement("span", { className: "bar" })
    );
  }
);

// ../components/Loader/src/loaders/Oval.tsx
import React72, { forwardRef as forwardRef15 } from "react";
import cx10 from "clsx";
import { Box as Box26 } from "@raikou/core";
var Oval = forwardRef15(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React72.createElement(
      Box26,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx10("oval-loader", className)
      }, others), {
        ref
      })
    );
  }
);

// ../components/Loader/src/loaders/Progress.tsx
import React73, { forwardRef as forwardRef16 } from "react";
import cx11 from "clsx";
import { Box as Box27 } from "@raikou/core";
var Progress = forwardRef16(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React73.createElement(
      Box27,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx11("progress-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React73.createElement("svg", { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React73.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React73.createElement("g", { transform: "translate(2.5 2.5)", strokeWidth: "5" }, /* @__PURE__ */ React73.createElement("circle", { strokeOpacity: ".5", cx: "16", cy: "16", r: "16" }), /* @__PURE__ */ React73.createElement("path", { d: "M32 16c0-9.94-8.06-16-16-16" }, /* @__PURE__ */ React73.createElement(
        "animateTransform",
        {
          attributeName: "transform",
          type: "rotate",
          from: "0 16 16",
          to: "360 16 16",
          dur: "1s",
          repeatCount: "indefinite"
        }
      )))))
    );
  }
);

// ../components/Loader/src/loaders/Dots.tsx
import React74, { forwardRef as forwardRef17 } from "react";
import cx12 from "clsx";
import { Box as Box28 } from "@raikou/core";
var Dots = forwardRef17(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React74.createElement(
      Box28,
      __spreadProps(__spreadValues({
        component: "span",
        className: cx12("dots-loader", className)
      }, others), {
        ref
      }),
      /* @__PURE__ */ React74.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React74.createElement("span", { className: "dot" }),
      /* @__PURE__ */ React74.createElement("span", { className: "dot" })
    );
  }
);

// ../components/Loader/src/Loader.tsx
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  progress: Progress
};
var defaultProps45 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver15 = createVarsResolver15(
  (theme, { size: size2, color }) => ({
    root: {
      "--loader-size": getSize7(size2, "loader-size"),
      "--loader-color": color ? getThemeColor(color, theme) : void 0
    }
  })
);
var Loader = factory37((_props, ref) => {
  const props = useProps43("Loader", defaultProps45, _props);
  const _a = props, {
    size: size2,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant
  } = _a, others = __objRest(_a, [
    "size",
    "color",
    "type",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "loaders",
    "variant"
  ]);
  const getStyles2 = useStyles21({
    name: "Loader",
    props,
    classes: {
      root: "loader-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver15
  });
  return /* @__PURE__ */ React75.createElement(
    Box29,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root")), {
      ref,
      component: loaders[type],
      variant,
      size: size2
    }), others)
  );
});
Loader.displayName = "@raikou/core/Loader";

// ../components/ActionIcon/src/ActionIconGroup/ActionIconGroup.tsx
import React76 from "react";
import {
  factory as factory38,
  Box as Box30,
  useProps as useProps44,
  useStyles as useStyles22,
  rem as rem13,
  createVarsResolver as createVarsResolver16
} from "@raikou/core";
var defaultProps46 = {
  orientation: "horizontal"
};
var varsResolver16 = createVarsResolver16(
  (_, { borderWidth }) => ({
    group: { "--ai-border-width": rem13(borderWidth) }
  })
);
var ActionIconGroup = factory38(
  (_props, ref) => {
    const props = useProps44("ActionIconGroup", defaultProps46, _props);
    const _a = useProps44("ActionIconGroup", defaultProps46, _props), {
      className,
      style,
      classNames,
      styles,
      unstyled,
      orientation,
      vars,
      borderWidth,
      variant
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "classNames",
      "styles",
      "unstyled",
      "orientation",
      "vars",
      "borderWidth",
      "variant"
    ]);
    const getStyles2 = useStyles22({
      name: "ActionIconGroup",
      props,
      classes: {
        group: "actionIconGroup-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver16,
      rootSelector: "group"
    });
    return /* @__PURE__ */ React76.createElement(
      Box30,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("group")), {
        ref,
        variant,
        mod: { "data-orientation": orientation },
        role: "group"
      }), others)
    );
  }
);
ActionIconGroup.displayName = "@raikou/core/ActionIconGroup";

// ../components/ActionIcon/src/ActionIcon.tsx
var defaultProps47 = {};
var varsResolver17 = createVarsResolver17(
  (theme, { size: size2, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--ai-size": getSize8(size2, "ai-size"),
        "--ai-radius": radius === void 0 ? void 0 : getRadius7(radius),
        "--ai-bg": color || variant ? colors.background : void 0,
        "--ai-hover": color || variant ? colors.hover : void 0,
        "--ai-color": color || variant ? colors.color : void 0,
        "--ai-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var ActionIcon = polymorphicFactory7(
  (_props, ref) => {
    const props = useProps45("ActionIcon", defaultProps47, _props);
    const _a = props, {
      className,
      unstyled,
      variant,
      classNames,
      styles,
      style,
      loading,
      loaderProps,
      size: size2,
      color,
      radius,
      __staticSelector,
      gradient,
      vars,
      children,
      disabled,
      "data-disabled": dataDisabled
    } = _a, others = __objRest(_a, [
      "className",
      "unstyled",
      "variant",
      "classNames",
      "styles",
      "style",
      "loading",
      "loaderProps",
      "size",
      "color",
      "radius",
      "__staticSelector",
      "gradient",
      "vars",
      "children",
      "disabled",
      "data-disabled"
    ]);
    const getStyles2 = useStyles23({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: {
        root: "actionIcon-root",
        loader: "actionIcon-loader"
      },
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver17
    });
    return /* @__PURE__ */ React77.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({}, getStyles2("root", {
        active: !disabled && !loading && !dataDisabled
      })), others), {
        unstyled,
        variant,
        size: size2,
        disabled: disabled || loading,
        ref,
        mod: { loading, disabled: disabled || dataDisabled }
      }),
      loading ? /* @__PURE__ */ React77.createElement(
        Loader,
        __spreadValues(__spreadProps(__spreadValues({}, getStyles2("loader")), {
          color: "var(--ai-color)",
          size: "calc(var(--ai-size) * 0.55)"
        }), loaderProps)
      ) : children
    );
  }
);
ActionIcon.displayName = "@raikou/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;

// ../components/Checkbox/src/CheckIcon.tsx
import React78 from "react";
import { rem as rem14 } from "@raikou/core";
function CheckIcon(_a) {
  var _b = _a, { size: size2, style } = _b, others = __objRest(_b, ["size", "style"]);
  const _style = size2 !== void 0 ? __spreadValues({ width: rem14(size2), height: rem14(size2) }, style) : style;
  return /* @__PURE__ */ React78.createElement(
    "svg",
    __spreadValues({
      className: "icon",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style
    }, others),
    /* @__PURE__ */ React78.createElement(
      "path",
      {
        d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}

// src/components/DateTimePicker/DateTimePicker.tsx
import { useDisclosure as useDisclosure2, useDidUpdate as useDidUpdate5, useMergedRef as useMergedRef4 } from "@raikou/hooks";
var defaultProps48 = {
  dropdownType: "popover"
};
var DateTimePicker = factory39((_props, ref) => {
  const props = useProps46("DateTimePicker", defaultProps48, _props);
  const _a = props, {
    value,
    defaultValue,
    onChange,
    valueFormat,
    locale,
    classNames,
    styles,
    unstyled,
    timeInputProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size: size2,
    variant,
    dropdownType,
    vars
  } = _a, rest = __objRest(_a, [
    "value",
    "defaultValue",
    "onChange",
    "valueFormat",
    "locale",
    "classNames",
    "styles",
    "unstyled",
    "timeInputProps",
    "submitButtonProps",
    "withSeconds",
    "level",
    "defaultLevel",
    "size",
    "variant",
    "dropdownType",
    "vars"
  ]);
  const getStyles2 = useStyles24({
    name: "DateTimePicker",
    classes: {
      timeWrapper: "dates-timeWrapper",
      timeInput: "dates-timeInput"
    },
    props,
    classNames,
    styles,
    unstyled,
    vars
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi7({
    classNames,
    styles,
    props
  });
  const _valueFormat = valueFormat || (withSeconds ? "DD/MM/YYYY HH:mm:ss" : "DD/MM/YYYY HH:mm");
  const timeInputRef = useRef14();
  const timeInputRefMerged = useMergedRef4(timeInputRef, timeInputProps == null ? void 0 : timeInputProps.ref);
  const _b = pickCalendarProps(rest), {
    calendarProps: _c
  } = _b, _d = _c, { allowSingleDateInRange } = _d, calendarProps = __objRest(_d, ["allowSingleDateInRange"]), {
    others
  } = _b;
  const ctx = useDatesContext();
  const [_value, setValue] = useUncontrolledDates({
    type: "default",
    value,
    defaultValue,
    onChange
  });
  const formatTime = (dateValue) => dateValue ? dayjs29(dateValue).format(withSeconds ? "HH:mm:ss" : "HH:mm") : "";
  const [timeValue, setTimeValue] = useState15(formatTime(_value));
  const [currentLevel, setCurrentLevel] = useState15(
    level || defaultLevel || "month"
  );
  const [dropdownOpened, dropdownHandlers] = useDisclosure2(false);
  const formattedValue = _value ? dayjs29(_value).locale(ctx.getLocale(locale)).format(_valueFormat) : "";
  const handleTimeChange = (event) => {
    var _a2;
    (_a2 = timeInputProps == null ? void 0 : timeInputProps.onChange) == null ? void 0 : _a2.call(timeInputProps, event);
    const val = event.currentTarget.value;
    setTimeValue(val);
    if (val) {
      const [hours, minutes, seconds] = val.split(":").map(Number);
      const timeDate = shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone());
      timeDate.setHours(hours);
      timeDate.setMinutes(minutes);
      timeDate.setSeconds(seconds || 0);
      setValue(
        assignTime(
          timeDate,
          _value || shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone())
        )
      );
    }
  };
  const handleDateChange = (date) => {
    var _a2;
    setValue(assignTime(_value, date));
    (_a2 = timeInputRef.current) == null ? void 0 : _a2.focus();
  };
  const handleTimeInputKeyDown = (event) => {
    var _a2;
    (_a2 = timeInputProps == null ? void 0 : timeInputProps.onKeyDown) == null ? void 0 : _a2.call(timeInputProps, event);
    if (event.key === "Enter") {
      event.preventDefault();
      dropdownHandlers.close();
    }
  };
  useDidUpdate5(() => {
    if (!dropdownOpened) {
      setTimeValue(formatTime(_value));
    }
  }, [_value, dropdownOpened]);
  useDidUpdate5(() => {
    if (dropdownOpened) {
      setCurrentLevel("month");
    }
  }, [dropdownOpened]);
  const __stopPropagation = dropdownType === "popover";
  return /* @__PURE__ */ React79.createElement(
    PickerInputBase,
    __spreadProps(__spreadValues({
      formattedValue,
      dropdownOpened,
      dropdownHandlers,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      ref,
      onClear: () => setValue(null),
      shouldClear: !!_value,
      value: _value,
      size: size2,
      variant,
      dropdownType
    }, others), {
      type: "default",
      __staticSelector: "DateTimePicker"
    }),
    /* @__PURE__ */ React79.createElement(
      DatePicker,
      __spreadProps(__spreadValues({}, calendarProps), {
        size: size2,
        variant,
        type: "default",
        value: _value,
        defaultDate: _value,
        onChange: handleDateChange,
        locale,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        __staticSelector: "DateTimePicker",
        __stopPropagation,
        level,
        defaultLevel,
        onLevelChange: (_level) => {
          var _a2;
          setCurrentLevel(_level);
          (_a2 = calendarProps.onLevelChange) == null ? void 0 : _a2.call(calendarProps, _level);
        },
        __timezoneApplied: true
      })
    ),
    currentLevel === "month" && /* @__PURE__ */ React79.createElement("div", __spreadValues({}, getStyles2("timeWrapper")), /* @__PURE__ */ React79.createElement(
      TimeInput,
      __spreadProps(__spreadValues(__spreadValues({
        value: timeValue,
        withSeconds,
        ref: timeInputRefMerged,
        unstyled
      }, timeInputProps), getStyles2("timeInput", {
        className: timeInputProps == null ? void 0 : timeInputProps.className,
        style: timeInputProps == null ? void 0 : timeInputProps.style
      })), {
        onChange: handleTimeChange,
        onKeyDown: handleTimeInputKeyDown,
        size: size2,
        "data-raikou-stop-propagation": __stopPropagation || void 0
      })
    ), /* @__PURE__ */ React79.createElement(
      ActionIcon,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({
        variant: "default",
        size: `input-${size2 || "sm"}`
      }, getStyles2("submitButton", {
        className: submitButtonProps == null ? void 0 : submitButtonProps.className,
        style: submitButtonProps == null ? void 0 : submitButtonProps.style
      })), {
        unstyled,
        "data-raikou-stop-propagation": __stopPropagation || void 0,
        children: /* @__PURE__ */ React79.createElement(CheckIcon, { size: "30%" })
      }), submitButtonProps), {
        onClick: (event) => {
          var _a2;
          (_a2 = submitButtonProps == null ? void 0 : submitButtonProps.onClick) == null ? void 0 : _a2.call(submitButtonProps, event);
          dropdownHandlers.close();
        }
      })
    ))
  );
});
DateTimePicker.displayName = "@raikou/dates/DateTimePicker";

// src/components/YearPickerInput/YearPickerInput.tsx
import React80 from "react";
import {
  factory as factory40,
  useProps as useProps47,
  useResolvedStylesApi as useResolvedStylesApi8
} from "@raikou/core";
var defaultProps49 = {
  type: "default",
  valueFormat: "YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var YearPickerInput = factory40((_props, ref) => {
  const props = useProps47("YearPickerInput", defaultProps49, _props);
  const _a = props, {
    type,
    value,
    defaultValue,
    onChange,
    valueFormat,
    labelSeparator,
    locale,
    classNames,
    styles,
    unstyled,
    closeOnChange,
    size: size2,
    variant,
    dropdownType,
    sortDates,
    minDate,
    maxDate,
    vars
  } = _a, rest = __objRest(_a, [
    "type",
    "value",
    "defaultValue",
    "onChange",
    "valueFormat",
    "labelSeparator",
    "locale",
    "classNames",
    "styles",
    "unstyled",
    "closeOnChange",
    "size",
    "variant",
    "dropdownType",
    "sortDates",
    "minDate",
    "maxDate",
    "vars"
  ]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi8({
    classNames,
    styles,
    props
  });
  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const {
    _value,
    setValue,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClear,
    shouldClear
  } = useDatesInput({
    type,
    value,
    defaultValue,
    onChange,
    locale,
    format: valueFormat,
    labelSeparator,
    closeOnChange,
    sortDates
  });
  return /* @__PURE__ */ React80.createElement(
    PickerInputBase,
    __spreadProps(__spreadValues({
      formattedValue,
      dropdownOpened,
      dropdownHandlers,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      ref,
      onClear,
      shouldClear,
      value: _value,
      size: size2,
      variant,
      dropdownType
    }, others), {
      type,
      __staticSelector: "YearPickerInput"
    }),
    /* @__PURE__ */ React80.createElement(
      YearPicker,
      __spreadProps(__spreadValues({}, calendarProps), {
        size: size2,
        variant,
        type,
        value: _value,
        defaultDate: Array.isArray(_value) ? _value[0] || getDefaultClampedDate({
          maxDate,
          minDate,
          timezone: ctx.getTimezone()
        }) : _value || getDefaultClampedDate({
          maxDate,
          minDate,
          timezone: ctx.getTimezone()
        }),
        onChange: setValue,
        locale,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        __staticSelector: "YearPickerInput",
        __stopPropagation: dropdownType === "popover",
        minDate,
        maxDate,
        date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
        __timezoneApplied: true
      })
    )
  );
});
YearPickerInput.displayName = "@raikou/dates/YearPickerInput";

// src/components/MonthPickerInput/MonthPickerInput.tsx
import React81 from "react";
import {
  factory as factory41,
  useProps as useProps48,
  useResolvedStylesApi as useResolvedStylesApi9
} from "@raikou/core";
var defaultProps50 = {
  type: "default",
  valueFormat: "MMMM YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var MonthPickerInput = factory41((_props, ref) => {
  const props = useProps48("MonthPickerInput", defaultProps50, _props);
  const _a = props, {
    type,
    value,
    defaultValue,
    onChange,
    valueFormat,
    labelSeparator,
    locale,
    classNames,
    styles,
    unstyled,
    closeOnChange,
    size: size2,
    variant,
    dropdownType,
    sortDates,
    minDate,
    maxDate,
    vars
  } = _a, rest = __objRest(_a, [
    "type",
    "value",
    "defaultValue",
    "onChange",
    "valueFormat",
    "labelSeparator",
    "locale",
    "classNames",
    "styles",
    "unstyled",
    "closeOnChange",
    "size",
    "variant",
    "dropdownType",
    "sortDates",
    "minDate",
    "maxDate",
    "vars"
  ]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi9({
    classNames,
    styles,
    props
  });
  const { calendarProps, others } = pickCalendarProps(rest);
  const {
    _value,
    setValue,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClear,
    shouldClear
  } = useDatesInput({
    type,
    value,
    defaultValue,
    onChange,
    locale,
    format: valueFormat,
    labelSeparator,
    closeOnChange,
    sortDates
  });
  const ctx = useDatesContext();
  return /* @__PURE__ */ React81.createElement(
    PickerInputBase,
    __spreadProps(__spreadValues({
      formattedValue,
      dropdownOpened,
      dropdownHandlers,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      ref,
      onClear,
      shouldClear,
      value: _value,
      size: size2,
      variant,
      dropdownType
    }, others), {
      type,
      __staticSelector: "MonthPickerInput"
    }),
    /* @__PURE__ */ React81.createElement(
      MonthPicker,
      __spreadProps(__spreadValues({}, calendarProps), {
        date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
        size: size2,
        variant,
        type,
        value: _value,
        defaultDate: Array.isArray(_value) ? _value[0] || getDefaultClampedDate({ maxDate, minDate }) : _value || getDefaultClampedDate({ maxDate, minDate }),
        onChange: setValue,
        locale,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        __staticSelector: "MonthPickerInput",
        __stopPropagation: dropdownType === "popover",
        minDate,
        maxDate,
        __timezoneApplied: true
      })
    )
  );
});
MonthPickerInput.displayName = "@raikou/dates/MonthPickerInput";

// src/components/DatePickerInput/DatePickerInput.tsx
import React82 from "react";
import {
  factory as factory42,
  useProps as useProps49,
  useResolvedStylesApi as useResolvedStylesApi10
} from "@raikou/core";
var defaultProps51 = {
  type: "default",
  valueFormat: "MMMM D, YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var DatePickerInput = factory42((_props, ref) => {
  const props = useProps49("DatePickerInput", defaultProps51, _props);
  const _a = props, {
    type,
    value,
    defaultValue,
    onChange,
    valueFormat,
    labelSeparator,
    locale,
    classNames,
    styles,
    unstyled,
    closeOnChange,
    size: size2,
    variant,
    dropdownType,
    sortDates,
    minDate,
    maxDate,
    vars,
    defaultDate
  } = _a, rest = __objRest(_a, [
    "type",
    "value",
    "defaultValue",
    "onChange",
    "valueFormat",
    "labelSeparator",
    "locale",
    "classNames",
    "styles",
    "unstyled",
    "closeOnChange",
    "size",
    "variant",
    "dropdownType",
    "sortDates",
    "minDate",
    "maxDate",
    "vars",
    "defaultDate"
  ]);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi10({
    classNames,
    styles,
    props
  });
  const { calendarProps, others } = pickCalendarProps(rest);
  const {
    _value,
    setValue,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClear,
    shouldClear
  } = useDatesInput({
    type,
    value,
    defaultValue,
    onChange,
    locale,
    format: valueFormat,
    labelSeparator,
    closeOnChange,
    sortDates
  });
  const _defaultDate = Array.isArray(_value) ? _value[0] || defaultDate : _value || defaultDate;
  const ctx = useDatesContext();
  return /* @__PURE__ */ React82.createElement(
    PickerInputBase,
    __spreadProps(__spreadValues({
      formattedValue,
      dropdownOpened,
      dropdownHandlers,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      ref,
      onClear,
      shouldClear,
      value: _value,
      size: size2,
      variant,
      dropdownType
    }, others), {
      type,
      __staticSelector: "DatePickerInput"
    }),
    /* @__PURE__ */ React82.createElement(
      DatePicker,
      __spreadProps(__spreadValues({}, calendarProps), {
        size: size2,
        variant,
        type,
        value: _value,
        defaultDate: _defaultDate || getDefaultClampedDate({
          maxDate,
          minDate,
          timezone: ctx.getTimezone()
        }),
        onChange: setValue,
        locale,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        __staticSelector: "DatePickerInput",
        __stopPropagation: dropdownType === "popover",
        minDate,
        maxDate,
        date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
        __timezoneApplied: true
      })
    )
  );
});
DatePickerInput.displayName = "@raikou/dates/DatePickerInput";
export {
  Calendar,
  CalendarHeader,
  DATES_PROVIDER_DEFAULT_SETTINGS,
  DateInput,
  DatePicker,
  DatePickerInput,
  DateTimePicker,
  DatesProvider,
  Day,
  DecadeLevel,
  DecadeLevelGroup,
  HiddenDatesInput,
  LevelsGroup,
  Month,
  MonthLevel,
  MonthLevelGroup,
  MonthPicker,
  MonthPickerInput,
  MonthsList,
  PickerControl,
  PickerInputBase,
  TimeInput,
  WeekdaysRow,
  YearLevel,
  YearLevelGroup,
  YearPicker,
  YearPickerInput,
  YearsList,
  getEndOfWeek,
  getMonthDays,
  getStartOfWeek,
  isSameMonth,
  pickCalendarProps,
  useDatesContext
};
