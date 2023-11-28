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

// src/spotlight.store.ts
import { clamp } from "@raikou/hooks";
import { createStore, useStore } from "@raikou/store";
var createSpotlightStore = () => createStore({
  opened: false,
  empty: false,
  selected: -1,
  listId: "",
  query: "",
  registeredActions: /* @__PURE__ */ new Set()
});
var useSpotlight = (store) => useStore(store);
function updateSpotlightStateAction(update, store) {
  const state = store.getState();
  store.setState(__spreadValues(__spreadValues({}, state), update(store.getState())));
}
function openSpotlightAction(store) {
  updateSpotlightStateAction(() => ({ opened: true }), store);
}
function closeSpotlightAction(store) {
  updateSpotlightStateAction(() => ({ opened: false }), store);
}
function toggleSpotlightAction(store) {
  updateSpotlightStateAction((state) => ({ opened: !state.opened }), store);
}
function setSelectedAction(index, store) {
  store.updateState((state) => __spreadProps(__spreadValues({}, state), { selected: index }));
}
function setListId(id, store) {
  store.updateState((state) => __spreadProps(__spreadValues({}, state), { listId: id }));
}
function selectAction(index, store) {
  var _a, _b, _c;
  const state = store.getState();
  const actionsList = document.getElementById(state.listId);
  const selected = actionsList == null ? void 0 : actionsList.querySelector("[data-selected]");
  const actions = (_a = actionsList == null ? void 0 : actionsList.querySelectorAll("[data-action]")) != null ? _a : [];
  const nextIndex = index === -1 ? actions.length - 1 : index === actions.length ? 0 : index;
  const selectedIndex = clamp(nextIndex, 0, actions.length - 1);
  selected == null ? void 0 : selected.removeAttribute("data-selected");
  (_b = actions[selectedIndex]) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
  (_c = actions[selectedIndex]) == null ? void 0 : _c.setAttribute("data-selected", "true");
  setSelectedAction(selectedIndex, store);
  return selectedIndex;
}
function selectNextAction(store) {
  return selectAction(store.getState().selected + 1, store);
}
function selectPreviousAction(store) {
  return selectAction(store.getState().selected - 1, store);
}
function triggerSelectedAction(store) {
  const state = store.getState();
  const selected = document.querySelector(
    `#${state.listId} [data-selected]`
  );
  selected == null ? void 0 : selected.click();
}
function registerAction(id, store) {
  const state = store.getState();
  state.registeredActions.add(id);
  return () => {
    state.registeredActions.delete(id);
  };
}
function setQuery(query, store) {
  updateSpotlightStateAction(() => ({ query }), store);
  Promise.resolve().then(() => {
    selectAction(0, store);
    updateSpotlightStateAction(
      (state) => ({
        empty: state.query.trim().length > 0 && state.registeredActions.size === 0 || false
      }),
      store
    );
  });
}
function clearSpotlightState({ clearQuery }, store) {
  store.updateState((state) => __spreadProps(__spreadValues({}, state), {
    selected: -1,
    query: clearQuery ? "" : state.query,
    empty: clearQuery ? false : state.empty
  }));
}
var spotlightActions = {
  open: openSpotlightAction,
  close: closeSpotlightAction,
  toggle: toggleSpotlightAction,
  updateState: updateSpotlightStateAction,
  setSelectedAction,
  setListId,
  selectAction,
  selectNextAction,
  selectPreviousAction,
  triggerSelectedAction,
  registerAction,
  setQuery,
  clearSpotlightState
};
function createSpotlight() {
  const store = createSpotlightStore();
  const actions = {
    open: () => openSpotlightAction(store),
    close: () => closeSpotlightAction(store),
    toggle: () => toggleSpotlightAction(store)
  };
  return [store, actions];
}
var [spotlightStore, spotlight] = createSpotlight();
var {
  open: openSpotlight,
  close: closeSpotlight,
  toggle: toggleSpotlight
} = spotlight;

// src/is-actions-group.ts
function isActionsGroup(item) {
  const _item = item;
  return _item.group !== void 0 && Array.isArray(_item.actions);
}

// src/Spotlight.tsx
import React63 from "react";
import { useUncontrolled } from "@raikou/hooks";
import { factory as factory23, useProps as useProps32, getDefaultZIndex as getDefaultZIndex6 } from "@raikou/core";

// src/SpotlightSearch.tsx
import React9 from "react";
import {
  factory as factory6,
  useProps as useProps7
} from "@raikou/core";

// ../components/Input/src/Input.tsx
import React8 from "react";
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
import React, { createContext, useContext } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext(null);
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
import React2, { createContext as createContext2, useContext as useContext2 } from "react";
function createOptionalContext(initialValue = null) {
  const Context = createContext2(initialValue);
  const useOptionalContext = () => useContext2(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React2.createElement(Context.Provider, { value }, children);
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
import React3 from "react";
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
var varsResolver = createVarsResolver((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize(size),
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
  return /* @__PURE__ */ React3.createElement(
    Box,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("label")), {
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
    required && /* @__PURE__ */ React3.createElement("span", __spreadProps(__spreadValues({}, getStyles2("required")), { "aria-hidden": true }), " *")
  );
});
InputLabel.displayName = "@raikou/core/InputLabel";

// ../components/Input/src/InputError/InputError.tsx
import React4 from "react";
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
var varsResolver2 = createVarsResolver2((_, { size }) => ({
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize2(size)} - ${rem(2)})`
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
  return /* @__PURE__ */ React4.createElement(
    Box2,
    __spreadValues(__spreadValues({
      component: "p",
      ref,
      variant,
      size
    }, getStyles2("error")), others)
  );
});
InputError.displayName = "@raikou/core/InputError";

// ../components/Input/src/InputDescription/InputDescription.tsx
import React5 from "react";
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
  (_, { size }) => ({
    description: {
      "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize3(size)} - ${rem2(2)})`
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
    return /* @__PURE__ */ React5.createElement(
      Box3,
      __spreadValues(__spreadValues({
        component: "p",
        ref,
        variant,
        size
      }, getStyles2("description")), others)
    );
  }
);
InputDescription.displayName = "@raikou/core/InputDescription";

// ../components/Input/src/InputPlaceholder/InputPlaceholder.tsx
import React6 from "react";
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
    return /* @__PURE__ */ React6.createElement(
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
import React7 from "react";
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
var varsResolver4 = createVarsResolver4((_, { size }) => ({
  label: {
    "--input-label-size": getFontSize4(size),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${getFontSize4(size)} - ${rem3(2)})`
  },
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${getFontSize4(size)} - ${rem3(2)})`
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
    size,
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
  const _label = label && /* @__PURE__ */ React7.createElement(
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
  const _description = hasDescription && /* @__PURE__ */ React7.createElement(
    InputDescription,
    __spreadProps(__spreadValues(__spreadValues({
      key: "description"
    }, descriptionProps), sharedProps), {
      size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
      id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId
    }),
    description
  );
  const _input = /* @__PURE__ */ React7.createElement(React7.Fragment, { key: "input" }, inputContainer(children));
  const _error = hasError && /* @__PURE__ */ React7.createElement(
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
  return /* @__PURE__ */ React7.createElement(
    InputWrapperProvider,
    {
      value: __spreadValues({
        getStyles: getStyles2,
        describedBy,
        inputId,
        labelId
      }, getInputOffsets(inputWrapperOrder, { hasDescription, hasError }))
    },
    /* @__PURE__ */ React7.createElement(
      Box5,
      __spreadValues(__spreadValues({
        ref,
        variant,
        size
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
  return /* @__PURE__ */ React8.createElement(
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
      size
    }),
    leftSection && /* @__PURE__ */ React8.createElement(
      "div",
      __spreadValues(__spreadProps(__spreadValues({}, leftSectionProps), {
        "data-position": "left"
      }), getStyles2("section", {
        className: leftSectionProps == null ? void 0 : leftSectionProps.className,
        style: leftSectionProps == null ? void 0 : leftSectionProps.style
      })),
      leftSection
    ),
    /* @__PURE__ */ React8.createElement(
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
    rightSection && /* @__PURE__ */ React8.createElement(
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

// src/Spotlight.context.ts
var [SpotlightProvider, useSpotlightContext] = createSafeContext(
  "Spotlight component was not found in tree"
);

// src/SpotlightSearch.tsx
var defaultProps7 = {
  size: "lg"
};
var SpotlightSearch = factory6((props, ref) => {
  const _a = useProps7("SpotlightSearch", defaultProps7, props), { classNames, styles, onKeyDown, onChange, vars, value } = _a, others = __objRest(_a, ["classNames", "styles", "onKeyDown", "onChange", "vars", "value"]);
  const ctx = useSpotlightContext();
  const inputStyles = ctx.getStyles("search");
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (event.nativeEvent.code === "ArrowDown") {
      event.preventDefault();
      spotlightActions.selectNextAction(ctx.store);
    }
    if (event.nativeEvent.code === "ArrowUp") {
      event.preventDefault();
      spotlightActions.selectPreviousAction(ctx.store);
    }
    if (event.nativeEvent.code === "Enter") {
      event.preventDefault();
      spotlightActions.triggerSelectedAction(ctx.store);
    }
  };
  return /* @__PURE__ */ React9.createElement(
    Input,
    __spreadProps(__spreadValues({
      ref,
      classNames: [{ input: inputStyles.className }, classNames],
      styles: [{ input: inputStyles.style }, styles]
    }, others), {
      value: value != null ? value : ctx.query,
      onChange: (event) => {
        ctx.setQuery(event.currentTarget.value);
        onChange == null ? void 0 : onChange(event);
      },
      onKeyDown: handleKeyDown
    })
  );
});
SpotlightSearch.displayName = "@raikou/spotlight/SpotlightSearch";

// src/SpotlightActionsList.tsx
import React23, { useEffect as useEffect8, useId as useId2 } from "react";
import {
  factory as factory8,
  useProps as useProps10
} from "@raikou/core";

// ../components/ScrollArea/src/ScrollArea.tsx
import React22, { useState as useState8 } from "react";
import {
  Box as Box9,
  factory as factory7,
  useProps as useProps9,
  useStyles as useStyles7,
  rem as rem5,
  createVarsResolver as createVarsResolver6
} from "@raikou/core";

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
import React17 from "react";

// ../components/ScrollArea/src/ScrollArea.context.ts
var [ScrollAreaProvider, useScrollAreaContext] = createSafeContext(
  "ScrollArea.Root component was not found in tree"
);

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
import React13, { useRef as useRef3, useState as useState3, forwardRef as forwardRef4 } from "react";
import { useDirection } from "@raikou/core";

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarX.tsx
import React11, { forwardRef as forwardRef2, useRef, useState as useState2, useEffect as useEffect3 } from "react";
import { useMergedRef as useMergedRef2 } from "@raikou/hooks";

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.tsx
import React10, { useEffect as useEffect2, forwardRef } from "react";
import {
  useMergedRef,
  useCallbackRef as useCallbackRef2,
  useDebounceCallback
} from "@raikou/hooks";

// ../components/ScrollArea/src/use-resize-observer.ts
import { useIsomorphicEffect, useCallbackRef } from "@raikou/hooks";
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useIsomorphicEffect(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
    return void 0;
  }, [element, handleResize]);
}

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.context.ts
var [ScrollbarProvider, useScrollbarContext] = createSafeContext(
  "ScrollAreaScrollbar was not found in tree"
);

// ../components/ScrollArea/src/utils/is-scrolling-within-scrollbar-bounds.ts
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}

// ../components/ScrollArea/src/utils/get-thumb-ratio.tsx
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}

// ../components/ScrollArea/src/utils/get-thumb-size.tsx
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}

// ../components/ScrollArea/src/utils/compose-event-handlers.ts
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// ../components/ScrollArea/src/utils/to-int.ts
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}

// ../components/ScrollArea/src/utils/linear-scale.ts
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}

// ../components/ScrollArea/src/utils/get-thumb-offset-from-scroll.ts
function clamp2(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp2(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}

// ../components/ScrollArea/src/utils/get-scroll-position-from-pointer.ts
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}

// ../components/ScrollArea/src/utils/add-unlinked-scroll-listener.tsx
function addUnlinkedScrollListener(node, handler = () => {
}) {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
}

// ../components/ScrollArea/src/ScrollAreaScrollbar/Scrollbar.tsx
var Scrollbar = forwardRef(
  (props, forwardedRef) => {
    const _a = props, {
      sizes,
      hasThumb,
      onThumbChange,
      onThumbPointerUp,
      onThumbPointerDown,
      onThumbPositionChange,
      onDragScroll,
      onWheelScroll,
      onResize
    } = _a, scrollbarProps = __objRest(_a, [
      "sizes",
      "hasThumb",
      "onThumbChange",
      "onThumbPointerUp",
      "onThumbPointerDown",
      "onThumbPositionChange",
      "onDragScroll",
      "onWheelScroll",
      "onResize"
    ]);
    const context = useScrollAreaContext();
    const [scrollbar, setScrollbar] = React10.useState(
      null
    );
    const composeRefs = useMergedRef(
      forwardedRef,
      (node) => setScrollbar(node)
    );
    const rectRef = React10.useRef(null);
    const prevWebkitUserSelectRef = React10.useRef("");
    const { viewport } = context;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = useCallbackRef2(onWheelScroll);
    const handleThumbPositionChange = useCallbackRef2(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    const handleDragScroll = (event) => {
      if (rectRef.current) {
        const x = event.clientX - rectRef.current.left;
        const y = event.clientY - rectRef.current.top;
        onDragScroll({ x, y });
      }
    };
    useEffect2(() => {
      const handleWheel = (event) => {
        const element = event.target;
        const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
        if (isScrollbarWheel)
          handleWheelScroll(event, maxScrollPos);
      };
      document.addEventListener("wheel", handleWheel, { passive: false });
      return () => document.removeEventListener("wheel", handleWheel, {
        passive: false
      });
    }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
    useEffect2(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ React10.createElement(
      ScrollbarProvider,
      {
        value: {
          scrollbar,
          hasThumb,
          onThumbChange: useCallbackRef2(onThumbChange),
          onThumbPointerUp: useCallbackRef2(onThumbPointerUp),
          onThumbPositionChange: handleThumbPositionChange,
          onThumbPointerDown: useCallbackRef2(onThumbPointerDown)
        }
      },
      /* @__PURE__ */ React10.createElement(
        "div",
        __spreadProps(__spreadValues({}, scrollbarProps), {
          ref: composeRefs,
          style: __spreadValues({ position: "absolute" }, scrollbarProps.style),
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(
            props.onPointerMove,
            handleDragScroll
          ),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            rectRef.current = null;
          })
        })
      )
    );
  }
);
Scrollbar.displayName = "@raikou/Scrollbar";

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarX.tsx
var ScrollAreaScrollbarX = forwardRef2((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const ctx = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = useState2();
  const ref = useRef(null);
  const composeRefs = useMergedRef2(forwardedRef, ref, ctx.onScrollbarXChange);
  useEffect3(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ React11.createElement(
    Scrollbar,
    __spreadProps(__spreadValues({
      "data-orientation": "horizontal"
    }, others), {
      ref: composeRefs,
      sizes,
      style: __spreadProps(__spreadValues({}, style), {
        ["--sa-thumb-width"]: `${getThumbSize(sizes)}px`
      }),
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (ctx.viewport) {
          const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && ctx.viewport && computedStyle) {
          onSizesChange({
            content: ctx.viewport.scrollWidth,
            viewport: ctx.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    })
  );
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollbarY.tsx
import React12, { forwardRef as forwardRef3, useEffect as useEffect4, useRef as useRef2 } from "react";
import { useMergedRef as useMergedRef3 } from "@raikou/hooks";
var ScrollAreaScrollbarY = forwardRef3((props, forwardedRef) => {
  const _a = props, { sizes, onSizesChange, style } = _a, others = __objRest(_a, ["sizes", "onSizesChange", "style"]);
  const context = useScrollAreaContext();
  const [computedStyle, setComputedStyle] = React12.useState();
  const ref = useRef2(null);
  const composeRefs = useMergedRef3(
    forwardedRef,
    ref,
    context.onScrollbarYChange
  );
  useEffect4(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ React12.createElement(
    Scrollbar,
    __spreadProps(__spreadValues({}, others), {
      "data-orientation": "vertical",
      ref: composeRefs,
      sizes,
      style: __spreadValues({
        ["--sa-thumb-height"]: `${getThumbSize(sizes)}px`
      }, style),
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    })
  );
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.tsx
var ScrollAreaScrollbarVisible = forwardRef4((props, forwardedRef) => {
  const _a = props, { orientation = "vertical" } = _a, scrollbarProps = __objRest(_a, ["orientation"]);
  const { dir } = useDirection();
  const context = useScrollAreaContext();
  const thumbRef = useRef3(null);
  const pointerOffsetRef = useRef3(0);
  const [sizes, setSizes] = useState3({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = __spreadProps(__spreadValues({}, scrollbarProps), {
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => {
      thumbRef.current = thumb;
    },
    onThumbPointerUp: () => {
      pointerOffsetRef.current = 0;
    },
    onThumbPointerDown: (pointerPos) => {
      pointerOffsetRef.current = pointerPos;
    }
  });
  const getScrollPosition = (pointerPos, direction) => getScrollPositionFromPointer(
    pointerPos,
    pointerOffsetRef.current,
    sizes,
    direction
  );
  if (orientation === "horizontal") {
    return /* @__PURE__ */ React13.createElement(
      ScrollAreaScrollbarX,
      __spreadProps(__spreadValues({}, commonProps), {
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes, dir);
            thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
          }
        }
      })
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ React13.createElement(
      ScrollAreaScrollbarY,
      __spreadProps(__spreadValues({}, commonProps), {
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport)
            context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport)
            context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      })
    );
  }
  return null;
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarHover.tsx
import React15, { forwardRef as forwardRef6, useEffect as useEffect5, useState as useState5 } from "react";

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.tsx
import React14, { forwardRef as forwardRef5, useState as useState4 } from "react";
import { useDebounceCallback as useDebounceCallback2 } from "@raikou/hooks";
var ScrollAreaScrollbarAuto = forwardRef5((props, ref) => {
  const context = useScrollAreaContext();
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const [visible, setVisible] = useState4(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback2(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  if (forceMount || visible) {
    return /* @__PURE__ */ React14.createElement(
      ScrollAreaScrollbarVisible,
      __spreadProps(__spreadValues({
        "data-state": visible ? "visible" : "hidden"
      }, scrollbarProps), {
        ref
      })
    );
  }
  return null;
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarHover.tsx
var ScrollAreaScrollbarHover = forwardRef6(
  (props, ref) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const [visible, setVisible] = useState5(false);
    useEffect5(() => {
      const { scrollArea } = context;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
      return void 0;
    }, [context.scrollArea, context.scrollHideDelay]);
    if (forceMount || visible) {
      return /* @__PURE__ */ React15.createElement(
        ScrollAreaScrollbarAuto,
        __spreadProps(__spreadValues({
          "data-state": visible ? "visible" : "hidden"
        }, scrollbarProps), {
          ref
        })
      );
    }
    return null;
  }
);

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.tsx
import React16, { forwardRef as forwardRef7, useEffect as useEffect6, useState as useState6 } from "react";
import { useDebounceCallback as useDebounceCallback3 } from "@raikou/hooks";
var ScrollAreaScrollbarScroll = forwardRef7((props, red) => {
  const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
  const context = useScrollAreaContext();
  const isHorizontal = props.orientation === "horizontal";
  const [state, setState] = useState6("hidden");
  const debounceScrollEnd = useDebounceCallback3(() => setState("idle"), 100);
  useEffect6(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(
        () => setState("hidden"),
        context.scrollHideDelay
      );
      return () => window.clearTimeout(hideTimer);
    }
    return void 0;
  }, [state, context.scrollHideDelay]);
  useEffect6(() => {
    const { viewport } = context;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          setState("scrolling");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
    return void 0;
  }, [context.viewport, isHorizontal, debounceScrollEnd]);
  if (forceMount || state !== "hidden") {
    return /* @__PURE__ */ React16.createElement(
      ScrollAreaScrollbarVisible,
      __spreadProps(__spreadValues({
        "data-state": state === "hidden" ? "hidden" : "visible"
      }, scrollbarProps), {
        ref: red,
        onPointerEnter: composeEventHandlers(
          props.onPointerEnter,
          () => setState("interacting")
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          () => setState("idle")
        )
      })
    );
  }
  return null;
});

// ../components/ScrollArea/src/ScrollAreaScrollbar/ScrollAreaScrollbar.tsx
var ScrollAreaScrollbar = React17.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { forceMount } = _a, scrollbarProps = __objRest(_a, ["forceMount"]);
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    React17.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ React17.createElement(ScrollAreaScrollbarHover, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "scroll" ? /* @__PURE__ */ React17.createElement(ScrollAreaScrollbarScroll, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "auto" ? /* @__PURE__ */ React17.createElement(ScrollAreaScrollbarAuto, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef, forceMount })) : context.type === "always" ? /* @__PURE__ */ React17.createElement(ScrollAreaScrollbarVisible, __spreadProps(__spreadValues({}, scrollbarProps), { ref: forwardedRef })) : null;
  }
);

// ../components/ScrollArea/src/ScrollAreaCorner/ScrollAreaCorner.tsx
import React18 from "react";
var Corner = React18.forwardRef(
  (props, ref) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const ctx = useScrollAreaContext();
    const [width, setWidth] = React18.useState(0);
    const [height, setHeight] = React18.useState(0);
    const hasSize = Boolean(width && height);
    useResizeObserver(ctx.scrollbarX, () => {
      var _a2;
      const h = ((_a2 = ctx.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
      ctx.onCornerHeightChange(h);
      setHeight(h);
    });
    useResizeObserver(ctx.scrollbarY, () => {
      var _a2;
      const w = ((_a2 = ctx.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
      ctx.onCornerWidthChange(w);
      setWidth(w);
    });
    return hasSize ? /* @__PURE__ */ React18.createElement("div", __spreadProps(__spreadValues({}, others), { ref, style: __spreadProps(__spreadValues({}, style), { width, height }) })) : null;
  }
);
var ScrollAreaCorner = React18.forwardRef((props, ref) => {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ React18.createElement(Corner, __spreadProps(__spreadValues({}, props), { ref })) : null;
});

// ../components/ScrollArea/src/ScrollAreaRoot/ScrollAreaRoot.tsx
import React19, { useState as useState7, forwardRef as forwardRef8 } from "react";
import { useMergedRef as useMergedRef4 } from "@raikou/hooks";
import { Box as Box7, useProps as useProps8 } from "@raikou/core";
var defaultProps8 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var ScrollAreaRoot = forwardRef8(
  (_props, ref) => {
    const props = useProps8("ScrollAreaRoot", defaultProps8, _props);
    const _a = props, { type, scrollHideDelay } = _a, others = __objRest(_a, ["type", "scrollHideDelay"]);
    const [scrollArea, setScrollArea] = useState7(null);
    const [viewport, setViewport] = useState7(null);
    const [content, setContent] = useState7(null);
    const [scrollbarX, setScrollbarX] = useState7(null);
    const [scrollbarY, setScrollbarY] = useState7(null);
    const [cornerWidth, setCornerWidth] = useState7(0);
    const [cornerHeight, setCornerHeight] = useState7(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = useState7(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = useState7(false);
    const rootRef = useMergedRef4(ref, (node) => setScrollArea(node));
    return /* @__PURE__ */ React19.createElement(
      ScrollAreaProvider,
      {
        value: {
          type,
          scrollHideDelay,
          scrollArea,
          viewport,
          onViewportChange: setViewport,
          content,
          onContentChange: setContent,
          scrollbarX,
          onScrollbarXChange: setScrollbarX,
          scrollbarXEnabled,
          onScrollbarXEnabledChange: setScrollbarXEnabled,
          scrollbarY,
          onScrollbarYChange: setScrollbarY,
          scrollbarYEnabled,
          onScrollbarYEnabledChange: setScrollbarYEnabled,
          onCornerWidthChange: setCornerWidth,
          onCornerHeightChange: setCornerHeight
        }
      },
      /* @__PURE__ */ React19.createElement(
        Box7,
        __spreadProps(__spreadValues({}, others), {
          ref: rootRef,
          __vars: {
            "--sa-corner-width": `${cornerWidth}px`,
            "--sa-corner-height": `${cornerHeight}px`
          }
        })
      )
    );
  }
);
ScrollAreaRoot.displayName = "@raikou/core/ScrollAreaRoot";

// ../components/ScrollArea/src/ScrollAreaViewport/ScrollAreaViewport.tsx
import React20, { forwardRef as forwardRef9 } from "react";
import { useMergedRef as useMergedRef5 } from "@raikou/hooks";
import { Box as Box8 } from "@raikou/core";
var ScrollAreaViewport = forwardRef9((_a, ref) => {
  var _b = _a, { children, style } = _b, others = __objRest(_b, ["children", "style"]);
  const ctx = useScrollAreaContext();
  const rootRef = useMergedRef5(ref, ctx.onViewportChange);
  return /* @__PURE__ */ React20.createElement(
    Box8,
    __spreadProps(__spreadValues({}, others), {
      ref: rootRef,
      style: __spreadValues({
        overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden"
      }, style)
    }),
    /* @__PURE__ */ React20.createElement(
      "div",
      {
        style: { minWidth: "100%", display: "table" },
        ref: ctx.onContentChange
      },
      children
    )
  );
});
ScrollAreaViewport.displayName = "@raikou/core/ScrollAreaViewport";

// ../components/ScrollArea/src/ScrollAreaThumb/ScrollAreaThumb.tsx
import React21, { forwardRef as forwardRef10, useRef as useRef4, useEffect as useEffect7 } from "react";
import { useDebounceCallback as useDebounceCallback4, useMergedRef as useMergedRef6 } from "@raikou/hooks";
var Thumb = forwardRef10(
  (props, forwardedRef) => {
    const _a = props, { style } = _a, others = __objRest(_a, ["style"]);
    const scrollAreaContext = useScrollAreaContext();
    const scrollbarContext = useScrollbarContext();
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useMergedRef6(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = useRef4();
    const debounceScrollEnd = useDebounceCallback4(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    useEffect7(() => {
      const { viewport } = scrollAreaContext;
      if (viewport) {
        const handleScroll2 = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(
              viewport,
              onThumbPositionChange
            );
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
      return void 0;
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ React21.createElement(
      "div",
      __spreadProps(__spreadValues({
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
      }, others), {
        ref: composedRef,
        style: __spreadValues({
          width: "var(--sa-thumb-width)",
          height: "var(--sa-thumb-height)"
        }, style),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          (event) => {
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({ x, y });
          }
        ),
        onPointerUp: composeEventHandlers(
          props.onPointerUp,
          scrollbarContext.onThumbPointerUp
        )
      })
    );
  }
);
var ScrollAreaThumb = React21.forwardRef((props, forwardedRef) => {
  const _a = props, { forceMount } = _a, thumbProps = __objRest(_a, ["forceMount"]);
  const scrollbarContext = useScrollbarContext();
  if (forceMount || scrollbarContext.hasThumb) {
    return /* @__PURE__ */ React21.createElement(Thumb, __spreadValues({ ref: forwardedRef }, thumbProps));
  }
  return null;
});

// ../components/ScrollArea/src/ScrollArea.tsx
var defaultProps9 = {
  scrollHideDelay: 1e3,
  type: "hover"
};
var varsResolver6 = createVarsResolver6(
  (_, { scrollbarSize }) => ({
    root: {
      "--scrollarea-scrollbar-size": rem5(scrollbarSize)
    }
  })
);
var ScrollArea = factory7((_props, ref) => {
  const props = useProps9("ScrollArea", defaultProps9, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "scrollbarSize",
    "vars",
    "type",
    "scrollHideDelay",
    "viewportProps",
    "viewportRef",
    "onScrollPositionChange",
    "children",
    "offsetScrollbars"
  ]);
  const [scrollbarHovered, setScrollbarHovered] = useState8(false);
  const getStyles2 = useStyles7({
    name: "ScrollArea",
    props,
    classes: {
      root: "scrollArea-root",
      viewport: "scrollArea-viewport",
      viewportInner: "scrollArea-viewportInner",
      scrollbar: "scrollArea-scrollbar",
      thumb: "scrollArea-thumb",
      corner: "scrollArea-corner"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6
  });
  return /* @__PURE__ */ React22.createElement(
    ScrollAreaRoot,
    __spreadValues(__spreadValues({
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref
    }, getStyles2("root")), others),
    /* @__PURE__ */ React22.createElement(
      ScrollAreaViewport,
      __spreadProps(__spreadValues(__spreadValues({}, viewportProps), getStyles2("viewport")), {
        ref: viewportRef,
        "data-offset-scrollbars": offsetScrollbars || void 0,
        onScroll: typeof onScrollPositionChange === "function" ? ({ currentTarget }) => onScrollPositionChange({
          x: currentTarget.scrollLeft,
          y: currentTarget.scrollTop
        }) : void 0
      }),
      children
    ),
    /* @__PURE__ */ React22.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles2("scrollbar")), {
        orientation: "horizontal",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ React22.createElement(ScrollAreaThumb, __spreadValues({}, getStyles2("thumb")))
    ),
    /* @__PURE__ */ React22.createElement(
      ScrollAreaScrollbar,
      __spreadProps(__spreadValues({}, getStyles2("scrollbar")), {
        orientation: "vertical",
        "data-hidden": type === "never" || void 0,
        forceMount: true,
        onMouseEnter: () => setScrollbarHovered(true),
        onMouseLeave: () => setScrollbarHovered(false)
      }),
      /* @__PURE__ */ React22.createElement(ScrollAreaThumb, __spreadValues({}, getStyles2("thumb")))
    ),
    /* @__PURE__ */ React22.createElement(
      ScrollAreaCorner,
      __spreadProps(__spreadValues({}, getStyles2("corner")), {
        "data-hovered": scrollbarHovered || void 0,
        "data-hidden": type === "never" || void 0
      })
    )
  );
});
ScrollArea.displayName = "@raikou/core/ScrollArea";
var ScrollAreaAutosize = factory7((props, ref) => {
  const _a = useProps9("ScrollAreaAutosize", defaultProps9, props), {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    style,
    vars
  } = _a, others = __objRest(_a, [
    "children",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "variant",
    "viewportProps",
    "style",
    "vars"
  ]);
  return /* @__PURE__ */ React22.createElement(Box9, __spreadProps(__spreadValues({}, others), { ref, style: [{ display: "flex" }, style] }), /* @__PURE__ */ React22.createElement(Box9, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ React22.createElement(
    ScrollArea,
    {
      classNames,
      styles,
      scrollHideDelay,
      scrollbarSize,
      type,
      dir,
      offsetScrollbars,
      viewportRef,
      onScrollPositionChange,
      unstyled,
      variant,
      viewportProps,
      vars
    },
    children
  )));
});
ScrollAreaAutosize.displayName = "@raikou/core/ScrollAreaAutosize";
ScrollArea.Autosize = ScrollAreaAutosize;

// src/SpotlightActionsList.tsx
var defaultProps10 = {};
var SpotlightActionsList = factory8(
  (props, ref) => {
    const _a = useProps10("SpotlightActionsList", defaultProps10, props), {
      className,
      style,
      id,
      children,
      vars,
      classNames,
      styles
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "id",
      "children",
      "vars",
      "classNames",
      "styles"
    ]);
    const ctx = useSpotlightContext();
    const generatedId = `raikou-${useId2().replace(/:/g, "")}`;
    const listId = id || generatedId;
    useEffect8(() => {
      spotlightActions.setListId(listId, ctx.store);
      return () => spotlightActions.setListId("", ctx.store);
    }, []);
    return /* @__PURE__ */ React23.createElement(
      ScrollArea.Autosize,
      __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("actionsList", {
        className,
        style,
        classNames,
        styles
      })), {
        ref,
        type: "scroll",
        scrollbarSize: "var(--spotlight-actions-list-padding)",
        offsetScrollbars: "y",
        id: listId
      }), others),
      children
    );
  }
);
SpotlightActionsList.displayName = "@raikou/spotlight/SpotlightActionsList";

// src/SpotlightAction.tsx
import React28 from "react";
import {
  Box as Box13,
  factory as factory10,
  useProps as useProps15
} from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React24 from "react";
import {
  Box as Box10,
  useProps as useProps11,
  useStyles as useStyles8,
  polymorphicFactory as polymorphicFactory2
} from "@raikou/core";
var defaultProps11 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory2(
  (_props, ref) => {
    const props = useProps11("UnstyledButton", defaultProps11, _props);
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
    const getStyles2 = useStyles8({
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
    return /* @__PURE__ */ React24.createElement(
      Box10,
      __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.displayName = "@raikou/core/UnstyledButton";

// ../components/Highlight/src/Highlight.tsx
import React27 from "react";
import {
  polymorphicFactory as polymorphicFactory4,
  useProps as useProps14
} from "@raikou/core";

// ../components/Text/src/Text.tsx
import React25 from "react";
import {
  Box as Box11,
  polymorphicFactory as polymorphicFactory3,
  useStyles as useStyles9,
  useProps as useProps12,
  getGradient,
  createVarsResolver as createVarsResolver7,
  getFontSize as getFontSize6,
  getLineHeight
} from "@raikou/core";
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps12 = {
  inherit: false
};
var varsResolver7 = createVarsResolver7(
  (theme, { variant, lineClamp, gradient, size }) => ({
    root: {
      "--text-fz": getFontSize6(size),
      "--text-lh": getLineHeight(size),
      "--text-gradient": variant === "gradient" ? getGradient(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0
    }
  })
);
var Text = polymorphicFactory3((_props, ref) => {
  const props = useProps12("Text", defaultProps12, _props);
  const _a = props, {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size
  } = _a, others = __objRest(_a, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]);
  const getStyles2 = useStyles9({
    name: ["Text", __staticSelector],
    props,
    classes: {
      root: "text-root"
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7
  });
  return /* @__PURE__ */ React25.createElement(
    Box11,
    __spreadValues(__spreadProps(__spreadValues({}, getStyles2("root", { focusable: true })), {
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size
    }), others)
  );
});
Text.displayName = "@raikou/core/Text";

// ../components/Mark/src/Mark.tsx
import React26 from "react";
import {
  Box as Box12,
  factory as factory9,
  useProps as useProps13,
  useStyles as useStyles10,
  createVarsResolver as createVarsResolver8
} from "@raikou/core";

// ../components/Mark/src/get-mark-color.ts
import { parseThemeColor } from "@raikou/core";
function getMarkColor({
  color,
  theme,
  defaultShade
}) {
  const parsed = parseThemeColor({ color, theme });
  if (!parsed.isThemeColor) {
    return color;
  }
  if (parsed.shade === void 0) {
    return `var(--raikou-color-${parsed.color}-${defaultShade})`;
  }
  return `var(${parsed.variable})`;
}

// ../components/Mark/src/Mark.tsx
var defaultProps13 = {
  color: "yellow"
};
var varsResolver8 = createVarsResolver8((theme, { color }) => ({
  root: {
    "--mark-bg-dark": getMarkColor({ color, theme, defaultShade: 5 }),
    "--mark-bg-light": getMarkColor({ color, theme, defaultShade: 2 })
  }
}));
var Mark = factory9((_props, ref) => {
  const props = useProps13("Mark", defaultProps13, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    variant
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "variant"
  ]);
  const getStyles2 = useStyles10({
    name: "Mark",
    props,
    className,
    style,
    classes: {
      root: "mark-root"
    },
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8
  });
  return /* @__PURE__ */ React26.createElement(
    Box12,
    __spreadValues(__spreadValues({
      component: "mark",
      ref,
      variant
    }, getStyles2("root")), others)
  );
});
Mark.displayName = "@raikou/core/Mark";

// ../components/Highlight/src/highlighter/highlighter.ts
function escapeRegex(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
}
function highlighter(value, _highlight) {
  if (_highlight == null) {
    return [{ chunk: value, highlighted: false }];
  }
  const highlight = Array.isArray(_highlight) ? _highlight.map(escapeRegex) : escapeRegex(_highlight);
  const shouldHighlight = Array.isArray(highlight) ? highlight.filter((part) => part.trim().length > 0).length > 0 : highlight.trim() !== "";
  if (!shouldHighlight) {
    return [{ chunk: value, highlighted: false }];
  }
  const matcher = typeof highlight === "string" ? highlight.trim() : highlight.filter((part) => part.trim().length !== 0).map((part) => part.trim()).sort((a, b) => b.length - a.length).join("|");
  const re = new RegExp(`(${matcher})`, "gi");
  const chunks = value.split(re).map((part) => ({ chunk: part, highlighted: re.test(part) })).filter(({ chunk }) => chunk);
  return chunks;
}

// ../components/Highlight/src/Highlight.tsx
var defaultProps14 = {};
var Highlight = polymorphicFactory4((props, ref) => {
  const _a = useProps14("Highlight", defaultProps14, props), { unstyled, children, highlight, highlightStyles, color } = _a, others = __objRest(_a, ["unstyled", "children", "highlight", "highlightStyles", "color"]);
  const highlightChunks = highlighter(children, highlight);
  return /* @__PURE__ */ React27.createElement(
    Text,
    __spreadProps(__spreadValues({
      unstyled,
      ref
    }, others), {
      __staticSelector: "Highlight"
    }),
    highlightChunks.map(
      ({ chunk, highlighted }, i) => highlighted ? /* @__PURE__ */ React27.createElement(
        Mark,
        {
          unstyled,
          key: i,
          color,
          style: highlightStyles,
          "data-highlight": chunk
        },
        chunk
      ) : /* @__PURE__ */ React27.createElement("span", { key: i }, chunk)
    )
  );
});
Highlight.displayName = "@raikou/core/Highlight";

// src/SpotlightAction.tsx
var defaultProps15 = {
  dimmedSections: true,
  highlightQuery: false
};
var SpotlightAction = factory10(
  (_props, ref) => {
    const props = useProps15("SpotlightAction", defaultProps15, _props);
    const _a = props, {
      className,
      style,
      classNames,
      styles,
      id,
      description,
      label,
      leftSection,
      rightSection,
      children,
      dimmedSections,
      highlightQuery,
      highlightColor,
      closeSpotlightOnTrigger,
      onClick,
      onMouseDown,
      keywords,
      vars
    } = _a, others = __objRest(_a, [
      "className",
      "style",
      "classNames",
      "styles",
      "id",
      "description",
      "label",
      "leftSection",
      "rightSection",
      "children",
      "dimmedSections",
      "highlightQuery",
      "highlightColor",
      "closeSpotlightOnTrigger",
      "onClick",
      "onMouseDown",
      "keywords",
      "vars"
    ]);
    const ctx = useSpotlightContext();
    const stylesApi = { classNames, styles };
    const labelNode = highlightQuery && typeof label === "string" ? /* @__PURE__ */ React28.createElement(
      Highlight,
      __spreadValues({
        component: "span",
        highlight: ctx.query,
        color: highlightColor
      }, ctx.getStyles("actionLabel", stylesApi)),
      label
    ) : /* @__PURE__ */ React28.createElement("span", __spreadValues({}, ctx.getStyles("actionLabel", stylesApi)), label);
    return /* @__PURE__ */ React28.createElement(
      UnstyledButton,
      __spreadProps(__spreadValues(__spreadValues({
        ref,
        "data-action": true
      }, ctx.getStyles("action", __spreadValues({ className, style }, stylesApi))), others), {
        onMouseDown: (event) => {
          event.preventDefault();
          onMouseDown == null ? void 0 : onMouseDown(event);
        },
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          if (closeSpotlightOnTrigger != null ? closeSpotlightOnTrigger : ctx.closeOnActionTrigger) {
            spotlightActions.close(ctx.store);
          }
        },
        tabIndex: -1
      }),
      children || /* @__PURE__ */ React28.createElement(React28.Fragment, null, leftSection && /* @__PURE__ */ React28.createElement(
        Box13,
        __spreadValues({
          component: "span",
          mod: { position: "left", dimmed: dimmedSections }
        }, ctx.getStyles("actionSection", stylesApi)),
        leftSection
      ), /* @__PURE__ */ React28.createElement("span", __spreadValues({}, ctx.getStyles("actionBody", stylesApi)), labelNode, /* @__PURE__ */ React28.createElement("span", __spreadValues({}, ctx.getStyles("actionDescription", stylesApi)), description)), rightSection && /* @__PURE__ */ React28.createElement(
        Box13,
        __spreadValues({
          component: "span",
          mod: { position: "right", dimmed: dimmedSections }
        }, ctx.getStyles("actionSection", stylesApi)),
        rightSection
      ))
    );
  }
);
SpotlightAction.displayName = "@raikou/spotlight/SpotlightAction";

// src/SpotlightEmpty.tsx
import React29 from "react";
import {
  Box as Box14,
  factory as factory11,
  useProps as useProps16
} from "@raikou/core";
var defaultProps16 = {};
var SpotlightEmpty = factory11((props, ref) => {
  const _a = useProps16(
    "SpotlightEmpty",
    defaultProps16,
    props
  ), { className, style, classNames, styles } = _a, others = __objRest(_a, ["className", "style", "classNames", "styles"]);
  const ctx = useSpotlightContext();
  return /* @__PURE__ */ React29.createElement(
    Box14,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("empty", { classNames, styles, className, style })), others)
  );
});
SpotlightEmpty.displayName = "@raikou/spotlight/SpotlightEmpty";

// src/SpotlightFooter.tsx
import React30 from "react";
import {
  Box as Box15,
  factory as factory12,
  useProps as useProps17
} from "@raikou/core";
var defaultProps17 = {};
var SpotlightFooter = factory12((props, ref) => {
  const _a = useProps17(
    "SpotlightFooter",
    defaultProps17,
    props
  ), { className, style, classNames, styles } = _a, others = __objRest(_a, ["className", "style", "classNames", "styles"]);
  const ctx = useSpotlightContext();
  return /* @__PURE__ */ React30.createElement(
    Box15,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("footer", { className, classNames, style, styles })), others)
  );
});
SpotlightFooter.displayName = "@raikou/spotlight/SpotlightFooter";

// src/SpotlightActionsGroup.tsx
import React31 from "react";
import {
  Box as Box16,
  factory as factory13,
  useProps as useProps18
} from "@raikou/core";
var defaultProps18 = {};
var SpotlightActionsGroup = factory13(
  (props, ref) => {
    const _a = useProps18("SpotlightActionsGroup", defaultProps18, props), { className, style, styles, classNames, label, children } = _a, others = __objRest(_a, ["className", "style", "styles", "classNames", "label", "children"]);
    const ctx = useSpotlightContext();
    return /* @__PURE__ */ React31.createElement(
      Box16,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("actionsGroup", {
        className,
        style,
        classNames,
        styles
      })), {
        ref
      }), others), {
        __vars: { "--spotlight-label": `'${label}'` }
      }),
      children
    );
  }
);
SpotlightActionsGroup.displayName = "@raikou/core/SpotlightActionsGroup";

// src/SpotlightRoot.tsx
import React62 from "react";
import {
  factory as factory22,
  useProps as useProps31,
  useStyles as useStyles15,
  getDefaultZIndex as getDefaultZIndex5,
  resolveClassNames,
  useRaikouTheme as useRaikouTheme2,
  resolveStyles,
  rem as rem11
} from "@raikou/core";

// ../components/Modal/src/Modal.tsx
import React61 from "react";
import { factory as factory21, useProps as useProps30, getDefaultZIndex as getDefaultZIndex4 } from "@raikou/core";

// ../components/Modal/src/ModalRoot.tsx
import React54 from "react";
import {
  factory as factory14,
  useProps as useProps23,
  useStyles as useStyles14,
  createVarsResolver as createVarsResolver12,
  getRadius as getRadius5,
  getDefaultZIndex as getDefaultZIndex3,
  getSize as getSize3,
  rem as rem9
} from "@raikou/core";

// ../components/ModalBase/src/ModalBase.tsx
import React40, { forwardRef as forwardRef14 } from "react";

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
import { __assign as __assign4 } from "tslib";
import * as React37 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
import { __assign as __assign3, __rest as __rest2 } from "tslib";
import * as React33 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.23_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../../../node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.23_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js
import { useState as useState9 } from "react";
function useCallbackRef3(initialValue, callback) {
  var ref = useState9(function() {
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
  return useCallbackRef3(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
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
import * as React32 from "react";
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React32.createElement(Target, __assign2({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React33.forwardRef(function(props, parentRef) {
  var ref = React33.useRef(null);
  var _a = React33.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest2(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign3(__assign3({}, rest), callbacks);
  return React33.createElement(
    React33.Fragment,
    null,
    enabled && React33.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React33.cloneElement(React33.Children.only(children), __assign3(__assign3({}, containerProps), { ref: containerRef })) : React33.createElement(Container, __assign3({}, containerProps, { className, ref: containerRef }), children)
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

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
import { __spreadArray } from "tslib";
import * as React36 from "react";

// ../../../node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
import * as React35 from "react";

// ../../../node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.23_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
import * as React34 from "react";

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
    React34.useEffect(function() {
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
  var gap = React35.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React35.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
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

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
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
  } while (current && current !== document.body);
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

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
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
  var shouldPreventQueue = React36.useRef([]);
  var touchStartRef = React36.useRef([0, 0]);
  var activeAxis = React36.useRef();
  var id = React36.useState(idCounter++)[0];
  var Style2 = React36.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React36.useRef(props);
  React36.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React36.useEffect(function() {
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
  var shouldCancelEvent = React36.useCallback(function(event, parent) {
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
  var shouldPrevent = React36.useCallback(function(_event) {
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
  var shouldCancel = React36.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React36.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React36.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React36.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React36.useEffect(function() {
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
  return React36.createElement(
    React36.Fragment,
    null,
    inert ? React36.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React36.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../../../node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.23_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React37.forwardRef(function(props, ref) {
  return React37.createElement(RemoveScroll, __assign4({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../components/ModalBase/src/ModalBase.tsx
import {
  Box as Box17,
  getDefaultZIndex,
  getShadow,
  getSpacing
} from "@raikou/core";

// ../components/Portal/src/Portal.tsx
import React38, { useRef as useRef7, useState as useState12, forwardRef as forwardRef13 } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect as useIsomorphicEffect2, assignRef as assignRef2 } from "@raikou/hooks";
import { useProps as useProps19 } from "@raikou/core";
function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" "));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
var defaultProps19 = {};
var Portal = forwardRef13((props, ref) => {
  const _a = useProps19(
    "Portal",
    defaultProps19,
    props
  ), { children, target } = _a, others = __objRest(_a, ["children", "target"]);
  const [mounted, setMounted] = useState12(false);
  const nodeRef = useRef7(null);
  useIsomorphicEffect2(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    assignRef2(ref, nodeRef.current);
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
  return createPortal(/* @__PURE__ */ React38.createElement(React38.Fragment, null, children), nodeRef.current);
});
Portal.displayName = "@raikou/core/Portal";

// ../components/Portal/src/OptionalPortal.tsx
import React39 from "react";
function OptionalPortal(_a) {
  var _b = _a, {
    withinPortal = true,
    children
  } = _b, others = __objRest(_b, [
    "withinPortal",
    "children"
  ]);
  if (withinPortal) {
    return /* @__PURE__ */ React39.createElement(Portal, __spreadValues({}, others), children);
  }
  return /* @__PURE__ */ React39.createElement(React39.Fragment, null, children);
}
OptionalPortal.displayName = "@raikou/core/OptionalPortal";

// ../components/ModalBase/src/ModalBase.context.ts
var [ModalBaseProvider, useModalBaseContext] = createSafeContext(
  "ModalBase component was not found in tree"
);

// ../components/ModalBase/src/use-modal.ts
import { useState as useState14 } from "react";
import { useId as useId3, useWindowEvent, useFocusReturn } from "@raikou/hooks";

// ../components/ModalBase/src/use-lock-scroll.ts
import { useState as useState13, useEffect as useEffect11, useRef as useRef8 } from "react";
import { useReducedMotion } from "@raikou/hooks";
function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = useState13(opened);
  const timeout = useRef8();
  const reduceMotion = useReducedMotion();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  useEffect11(() => {
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
  closeOnEscape,
  onClose,
  returnFocus
}) {
  const _id = useId3(id);
  const [titleMounted, setTitleMounted] = useState14(false);
  const [bodyMounted, setBodyMounted] = useState14(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  useWindowEvent("keydown", (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  });
  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });
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
var ModalBase = forwardRef14(
  (_a, ref) => {
    var _b = _a, {
      keepMounted,
      opened,
      onClose,
      id,
      transitionProps,
      trapFocus,
      closeOnEscape,
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
      closeOnEscape,
      onClose,
      returnFocus
    });
    return /* @__PURE__ */ React40.createElement(OptionalPortal, __spreadProps(__spreadValues({}, portalProps), { withinPortal }), /* @__PURE__ */ React40.createElement(
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
          closeOnEscape,
          zIndex
        }
      },
      /* @__PURE__ */ React40.createElement(Combination_default, { enabled: shouldLockScroll && lockScroll }, /* @__PURE__ */ React40.createElement(
        Box17,
        __spreadProps(__spreadValues({
          ref
        }, others), {
          __vars: __spreadProps(__spreadValues({}, __vars), {
            "--mb-z-index": (zIndex || getDefaultZIndex("modal")).toString(),
            "--mb-shadow": getShadow(shadow),
            "--mb-padding": getSpacing(padding)
          })
        }),
        children
      ))
    ));
  }
);
ModalBase.displayName = "@raikou/core/ModalBase";

// ../components/ModalBase/src/ModalBaseBody.tsx
import React41, { forwardRef as forwardRef15 } from "react";

// ../../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// ../components/ModalBase/src/ModalBaseBody.tsx
import { Box as Box18 } from "@raikou/core";

// ../components/ModalBase/src/use-modal-body-id.ts
import { useEffect as useEffect12 } from "react";
function useModalBodyId() {
  const ctx = useModalBaseContext();
  useEffect12(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

// ../components/ModalBase/src/ModalBaseBody.tsx
var ModalBaseBody = forwardRef15(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    const bodyId = useModalBodyId();
    return /* @__PURE__ */ React41.createElement(
      Box18,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        id: bodyId,
        className: clsx_default("modalBase-body", className)
      })
    );
  }
);
ModalBaseBody.displayName = "@raikou/core/ModalBaseBody";

// ../components/ModalBase/src/ModalBaseCloseButton.tsx
import React44, { forwardRef as forwardRef17 } from "react";

// ../components/CloseButton/src/CloseIcon.tsx
import React42, { forwardRef as forwardRef16 } from "react";
var CloseIcon = forwardRef16(
  (_a, ref) => {
    var _b = _a, { size = "var(--cb-icon-size, 70%)", style } = _b, others = __objRest(_b, ["size", "style"]);
    return /* @__PURE__ */ React42.createElement(
      "svg",
      __spreadValues({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: __spreadProps(__spreadValues({}, style), { width: size, height: size }),
        ref
      }, others),
      /* @__PURE__ */ React42.createElement(
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
import React43 from "react";
import {
  polymorphicFactory as polymorphicFactory5,
  useProps as useProps20,
  rem as rem6,
  getSize as getSize2,
  getRadius as getRadius2,
  createVarsResolver as createVarsResolver9,
  useStyles as useStyles11
} from "@raikou/core";
var defaultProps20 = {
  variant: "subtle",
  size: "md"
};
var varsResolver9 = createVarsResolver9(
  (_, { size, radius, iconSize }) => ({
    root: {
      "--cb-size": getSize2(size, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : getRadius2(radius),
      "--cb-icon-size": rem6(iconSize)
    }
  })
);
var CloseButton = polymorphicFactory5(
  (_props, ref) => {
    const props = useProps20("CloseButton", defaultProps20, _props);
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
    const getStyles2 = useStyles11({
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
      varsResolver: varsResolver9
    });
    return /* @__PURE__ */ React43.createElement(
      UnstyledButton,
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, others), {
        unstyled,
        variant,
        disabled,
        mod: { disabled: disabled || dataDisabled }
      }), getStyles2("root", { variant, active: true })),
      /* @__PURE__ */ React43.createElement(CloseIcon, null),
      children
    );
  }
);
CloseButton.displayName = "@raikou/core/CloseButton";

// ../components/ModalBase/src/ModalBaseCloseButton.tsx
var ModalBaseCloseButton = forwardRef17((_a, ref) => {
  var _b = _a, { className, onClick } = _b, others = __objRest(_b, ["className", "onClick"]);
  const ctx = useModalBaseContext();
  return /* @__PURE__ */ React44.createElement(
    CloseButton,
    __spreadProps(__spreadValues({
      ref
    }, others), {
      onClick: (event) => {
        ctx.onClose();
        onClick == null ? void 0 : onClick(event);
      },
      className: clsx_default("modalBase-close", className)
    })
  );
});
ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";

// ../components/ModalBase/src/ModalBaseContent.tsx
import React48, { forwardRef as forwardRef18 } from "react";

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
import React45 from "react";

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
import { useState as useState15, useEffect as useEffect13, useRef as useRef9 } from "react";
import { useReducedMotion as useReducedMotion2, useDidUpdate } from "@raikou/hooks";
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
  const shouldReduceMotion = useReducedMotion2();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState15(
    reduceMotion ? 0 : duration
  );
  const [transitionStatus, setStatus] = useState15(
    mounted ? "entered" : "exited"
  );
  const timeoutRef = useRef9(-1);
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
  useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);
  useEffect13(() => () => window.clearTimeout(timeoutRef.current), []);
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
    return mounted ? /* @__PURE__ */ React45.createElement(React45.Fragment, null, children({})) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ React45.createElement(React45.Fragment, null, children(
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
import { cloneElement as cloneElement2 } from "react";
import { useFocusTrap, useMergedRef as useMergedRef7 } from "@raikou/hooks";
import { isElement } from "@raikou/core";
function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef7(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement(children)) {
    return children;
  }
  return cloneElement2(children, { [refProp]: ref });
}
FocusTrap.displayName = "@raikou/core/FocusTrap";

// ../components/Paper/src/Paper.tsx
import React47 from "react";
import {
  Box as Box19,
  polymorphicFactory as polymorphicFactory6,
  useProps as useProps21,
  useStyles as useStyles12,
  getRadius as getRadius3,
  getShadow as getShadow2,
  createVarsResolver as createVarsResolver10
} from "@raikou/core";
var defaultProps21 = {};
var varsResolver10 = createVarsResolver10(
  (_, { radius, shadow }) => ({
    root: {
      "--paper-radius": radius === void 0 ? void 0 : getRadius3(radius),
      "--paper-shadow": getShadow2(shadow)
    }
  })
);
var Paper = polymorphicFactory6((_props, ref) => {
  const props = useProps21("Paper", defaultProps21, _props);
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
  const getStyles2 = useStyles12({
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
    varsResolver: varsResolver10
  });
  return /* @__PURE__ */ React47.createElement(
    Box19,
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
var ModalBaseContent = forwardRef18(
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
    return /* @__PURE__ */ React48.createElement(
      Transition,
      __spreadValues(__spreadValues({
        mounted: ctx.opened,
        transition: "pop"
      }, ctx.transitionProps), transitionProps),
      (transitionStyles) => /* @__PURE__ */ React48.createElement(
        "div",
        __spreadProps(__spreadValues({}, innerProps), {
          className: clsx_default("modalBase-inner", innerProps.className)
        }),
        /* @__PURE__ */ React48.createElement(FocusTrap, { active: ctx.opened && ctx.trapFocus }, /* @__PURE__ */ React48.createElement(
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
            className: clsx_default("modalBase-content", className)
          }),
          others.children
        ))
      )
    );
  }
);
ModalBaseContent.displayName = "@raikou/core/ModalBaseContent";

// ../components/ModalBase/src/ModalBaseHeader.tsx
import React49, { forwardRef as forwardRef19 } from "react";
import { Box as Box20 } from "@raikou/core";
var ModalBaseHeader = forwardRef19(
  (_a, ref) => {
    var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React49.createElement(Box20, __spreadValues({ ref, className: clsx_default("modalBase-header", className) }, others));
  }
);
ModalBaseHeader.displayName = "@raikou/core/ModalBaseHeader";

// ../components/ModalBase/src/ModalBaseOverlay.tsx
import React51, { forwardRef as forwardRef20 } from "react";

// ../components/Overlay/src/Overlay.tsx
import React50 from "react";
import {
  Box as Box21,
  polymorphicFactory as polymorphicFactory7,
  useProps as useProps22,
  useStyles as useStyles13,
  createVarsResolver as createVarsResolver11,
  rgba,
  getDefaultZIndex as getDefaultZIndex2,
  getRadius as getRadius4,
  rem as rem8
} from "@raikou/core";
var defaultProps22 = {
  zIndex: getDefaultZIndex2("modal")
};
var varsResolver11 = createVarsResolver11(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && rgba(color || "#000", backgroundOpacity != null ? backgroundOpacity : 0.6) || void 0,
      "--overlay-filter": blur ? `blur(${rem8(blur)})` : void 0,
      "--overlay-radius": radius === void 0 ? void 0 : getRadius4(radius),
      "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
    }
  })
);
var Overlay = polymorphicFactory7((_props, ref) => {
  const props = useProps22("Overlay", defaultProps22, _props);
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
  const getStyles2 = useStyles13({
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
    varsResolver: varsResolver11
  });
  return /* @__PURE__ */ React50.createElement(Box21, __spreadValues(__spreadProps(__spreadValues({ ref }, getStyles2("root")), { mod: { center, fixed } }), others), children);
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
var ModalBaseOverlay = forwardRef20((_a, ref) => {
  var _b = _a, { onClick, transitionProps, style } = _b, others = __objRest(_b, ["onClick", "transitionProps", "style"]);
  const ctx = useModalBaseContext();
  const transition = useModalTransition(transitionProps);
  return /* @__PURE__ */ React51.createElement(Transition, __spreadProps(__spreadValues({ mounted: ctx.opened }, transition), { transition: "fade" }), (transitionStyles) => /* @__PURE__ */ React51.createElement(
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
import React52, { forwardRef as forwardRef21 } from "react";
import { Box as Box22 } from "@raikou/core";

// ../components/ModalBase/src/use-modal-title-id.ts
import { useEffect as useEffect14 } from "react";
function useModalTitle() {
  const ctx = useModalBaseContext();
  useEffect14(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

// ../components/ModalBase/src/ModalBaseTitle.tsx
var ModalBaseTitle = forwardRef21((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest(_b, ["className"]);
  const id = useModalTitle();
  return /* @__PURE__ */ React52.createElement(
    Box22,
    __spreadProps(__spreadValues({
      component: "h2",
      ref,
      className: clsx_default("modalBase-title", className)
    }, others), {
      id
    })
  );
});
ModalBaseTitle.displayName = "@raikou/core/ModalBaseTitle";

// ../components/ModalBase/src/NativeScrollArea.tsx
import React53 from "react";
function NativeScrollArea({ children }) {
  return /* @__PURE__ */ React53.createElement(React53.Fragment, null, children);
}

// ../components/Modal/src/Modal.context.ts
var [ModalProvider, useModalContext] = createSafeContext(
  "Modal component was not found in tree"
);

// ../components/Modal/src/ModalRoot.tsx
var defaultProps23 = {
  __staticSelector: "Modal",
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex3("modal"),
  transitionProps: { duration: 200, transition: "pop" },
  yOffset: "5dvh"
};
var varsResolver12 = createVarsResolver12(
  (_, { radius, size, yOffset, xOffset }) => ({
    root: {
      "--modal-radius": radius === void 0 ? void 0 : getRadius5(radius),
      "--modal-size": getSize3(size, "modal-size"),
      "--modal-y-offset": rem9(yOffset),
      "--modal-x-offset": rem9(xOffset)
    }
  })
);
var ModalRoot = factory14((_props, ref) => {
  const props = useProps23("ModalRoot", defaultProps23, _props);
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
  const getStyles2 = useStyles14({
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
    varsResolver: varsResolver12
  });
  return /* @__PURE__ */ React54.createElement(ModalProvider, { value: { yOffset, scrollAreaComponent, getStyles: getStyles2 } }, /* @__PURE__ */ React54.createElement(
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
import React55 from "react";
import {
  factory as factory15,
  useProps as useProps24
} from "@raikou/core";
var defaultProps24 = {};
var ModalBody = factory15((_props, ref) => {
  const props = useProps24("ModalBody", defaultProps24, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React55.createElement(
    ModalBaseBody,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("body", { classNames, style, styles, className })), others)
  );
});
ModalBody.displayName = "@raikou/core/ModalBody";

// ../components/Modal/src/ModalCloseButton.tsx
import React56 from "react";
import {
  factory as factory16,
  useProps as useProps25
} from "@raikou/core";
var defaultProps25 = {};
var ModalCloseButton = factory16(
  (_props, ref) => {
    const props = useProps25("ModalCloseButton", defaultProps25, _props);
    const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
    const ctx = useModalContext();
    return /* @__PURE__ */ React56.createElement(
      ModalBaseCloseButton,
      __spreadValues(__spreadValues({
        ref
      }, ctx.getStyles("close", { classNames, style, styles, className })), others)
    );
  }
);
ModalCloseButton.displayName = "@raikou/core/ModalCloseButton";

// ../components/Modal/src/ModalOverlay.tsx
import React57 from "react";
import {
  factory as factory17,
  useProps as useProps26
} from "@raikou/core";
var defaultProps26 = {};
var ModalOverlay = factory17((_props, ref) => {
  const props = useProps26("ModalOverlay", defaultProps26, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React57.createElement(
    ModalBaseOverlay,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("overlay", { classNames, style, styles, className })), others)
  );
});
ModalOverlay.displayName = "@raikou/core/ModalOverlay";

// ../components/Modal/src/ModalContent.tsx
import React58 from "react";
import {
  factory as factory18,
  useProps as useProps27,
  rem as rem10
} from "@raikou/core";
var defaultProps27 = {};
var ModalContent = factory18((_props, ref) => {
  const props = useProps27("ModalContent", defaultProps27, _props);
  const _a = props, { classNames, className, style, styles, vars, children } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars", "children"]);
  const ctx = useModalContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return /* @__PURE__ */ React58.createElement(
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
    /* @__PURE__ */ React58.createElement(Scroll, { style: { maxHeight: `calc(100vh - (${rem10(ctx.yOffset)} * 2))` } }, children)
  );
});
ModalContent.displayName = "@raikou/core/ModalContent";

// ../components/Modal/src/ModalTitle.tsx
import React59 from "react";
import {
  factory as factory19,
  useProps as useProps28
} from "@raikou/core";
var defaultProps28 = {};
var ModalTitle = factory19((_props, ref) => {
  const props = useProps28("ModalTitle", defaultProps28, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React59.createElement(
    ModalBaseTitle,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("title", { classNames, style, styles, className })), others)
  );
});
ModalTitle.displayName = "@raikou/core/ModalTitle";

// ../components/Modal/src/ModalHeader.tsx
import React60 from "react";
import {
  factory as factory20,
  useProps as useProps29
} from "@raikou/core";
var defaultProps29 = {};
var ModalHeader = factory20((_props, ref) => {
  const props = useProps29("ModalHeader", defaultProps29, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useModalContext();
  return /* @__PURE__ */ React60.createElement(
    ModalBaseHeader,
    __spreadValues(__spreadValues({
      ref
    }, ctx.getStyles("header", { classNames, style, styles, className })), others)
  );
});
ModalHeader.displayName = "@raikou/core/ModalHeader";

// ../components/Modal/src/Modal.tsx
var defaultProps30 = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex4("modal"),
  transitionProps: { duration: 200, transition: "pop" },
  withOverlay: true,
  withCloseButton: true
};
var Modal = factory21((_props, ref) => {
  const _a = useProps30("Modal", defaultProps30, _props), {
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
  return /* @__PURE__ */ React61.createElement(ModalRoot, __spreadValues({ ref, radius }, others), withOverlay && /* @__PURE__ */ React61.createElement(ModalOverlay, __spreadValues({}, overlayProps)), /* @__PURE__ */ React61.createElement(ModalContent, { radius }, hasHeader && /* @__PURE__ */ React61.createElement(ModalHeader, null, title && /* @__PURE__ */ React61.createElement(ModalTitle, null, title), withCloseButton && /* @__PURE__ */ React61.createElement(ModalCloseButton, __spreadValues({}, closeButtonProps))), /* @__PURE__ */ React61.createElement(ModalBody, null, children)));
});
Modal.displayName = "@raikou/core/Modal";
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;

// src/SpotlightRoot.tsx
import { useDidUpdate as useDidUpdate2, useHotkeys } from "@raikou/hooks";

// src/get-hotkeys.ts
function getHotkeys(hotkeys, store) {
  if (!hotkeys) {
    return [];
  }
  const open = () => spotlightActions.open(store);
  if (Array.isArray(hotkeys)) {
    return hotkeys.map((hotkey) => [hotkey, open]);
  }
  return [[hotkeys, open]];
}

// src/SpotlightRoot.tsx
var defaultProps31 = {
  size: 600,
  yOffset: 80,
  zIndex: getDefaultZIndex5("max"),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: "pop" },
  store: spotlightStore,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: "mod + K",
  maxHeight: 400,
  scrollable: false
};
var SpotlightRoot = factory22((_props, ref) => {
  const props = useProps31("SpotlightRoot", defaultProps31, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    store,
    children,
    query,
    onQueryChange,
    transitionProps,
    clearQueryOnClose,
    shortcut,
    tagsToIgnore,
    triggerOnContentEditable,
    disabled,
    onSpotlightOpen,
    onSpotlightClose,
    forceOpened,
    closeOnActionTrigger,
    maxHeight,
    scrollable
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "store",
    "children",
    "query",
    "onQueryChange",
    "transitionProps",
    "clearQueryOnClose",
    "shortcut",
    "tagsToIgnore",
    "triggerOnContentEditable",
    "disabled",
    "onSpotlightOpen",
    "onSpotlightClose",
    "forceOpened",
    "closeOnActionTrigger",
    "maxHeight",
    "scrollable"
  ]);
  const theme = useRaikouTheme2();
  const { opened, query: storeQuery } = useSpotlight(store);
  const _query = query || storeQuery;
  const setQuery2 = (q) => {
    onQueryChange == null ? void 0 : onQueryChange(q);
    spotlightActions.setQuery(q, store);
  };
  const getStyles2 = useStyles15({
    name: "Spotlight",
    classes: {
      root: "spotlight-root",
      content: "spotlight-content",
      body: "spotlight-body",
      search: "spotlight-search",
      actionsList: "spotlight-actionsList",
      action: "spotlight-action",
      actionBody: "spotlight-actionBody",
      actionSection: "spotlight-actionSection",
      actionLabel: "spotlight-actionLabel",
      actionDescription: "spotlight-actionDescription",
      empty: "spotlight-empty",
      footer: "spotlight-footer",
      actionsGroup: "spotlight-actionsGroup"
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  useHotkeys(
    getHotkeys(shortcut, store),
    tagsToIgnore,
    triggerOnContentEditable
  );
  useDidUpdate2(() => {
    opened ? onSpotlightOpen == null ? void 0 : onSpotlightOpen() : onSpotlightClose == null ? void 0 : onSpotlightClose();
  }, [opened]);
  if (disabled) {
    return null;
  }
  return /* @__PURE__ */ React62.createElement(
    SpotlightProvider,
    {
      value: {
        getStyles: getStyles2,
        query: _query,
        setQuery: setQuery2,
        store,
        closeOnActionTrigger
      }
    },
    /* @__PURE__ */ React62.createElement(
      Modal,
      __spreadProps(__spreadValues({
        ref
      }, others), {
        withCloseButton: false,
        opened: opened || !!forceOpened,
        padding: 0,
        onClose: () => spotlightActions.close(store),
        className,
        style,
        classNames: resolveClassNames({
          theme,
          classNames: [
            {
              root: "spotlight-root",
              content: "spotlight-content",
              body: "spotlight-body",
              search: "spotlight-search",
              actionsList: "spotlight-actionsList",
              action: "spotlight-action",
              actionBody: "spotlight-actionBody",
              actionSection: "spotlight-actionSection",
              actionLabel: "spotlight-actionLabel",
              actionDescription: "spotlight-actionDescription",
              empty: "spotlight-empty",
              footer: "spotlight-footer",
              actionsGroup: "spotlight-actionsGroup"
            },
            classNames
          ],
          props,
          stylesCtx: void 0
        }),
        styles: resolveStyles({ theme, styles, props, stylesCtx: void 0 }),
        transitionProps: __spreadProps(__spreadValues({}, transitionProps), {
          onExited: () => {
            var _a2;
            clearQueryOnClose && setQuery2("");
            spotlightActions.clearSpotlightState(
              { clearQuery: clearQueryOnClose },
              store
            );
            (_a2 = transitionProps == null ? void 0 : transitionProps.onExited) == null ? void 0 : _a2.call(transitionProps);
          }
        }),
        __vars: {
          "--spotlight-max-height": scrollable ? rem11(maxHeight) : void 0
        },
        __staticSelector: "Spotlight",
        "data-scrollable": scrollable || void 0
      }),
      children
    )
  );
});
SpotlightRoot.displayName = "@raikou/spotlight/SpotlightRoot";

// src/default-spotlight-filter.ts
function getKeywords(keywords) {
  if (Array.isArray(keywords)) {
    return keywords.map((keyword) => keyword.trim()).join(",").toLowerCase().trim();
  }
  if (typeof keywords === "string") {
    return keywords.toLowerCase().trim();
  }
  return "";
}
function getFlatActions(data) {
  return data.reduce((acc, item) => {
    if ("actions" in item) {
      return [...acc, ...item.actions.map((action) => __spreadProps(__spreadValues({}, action), { group: item.group }))];
    }
    return [...acc, item];
  }, []);
}
function flatActionsToGroups(data) {
  const groups = {};
  const result = [];
  data.forEach((action) => {
    if (action.group) {
      if (!groups[action.group]) {
        groups[action.group] = { pushed: false, data: { group: action.group, actions: [] } };
      }
      groups[action.group].data.actions.push(action);
      if (!groups[action.group].pushed) {
        groups[action.group].pushed = true;
        result.push(groups[action.group].data);
      }
    } else {
      result.push(action);
    }
  });
  return result;
}
var defaultSpotlightFilter = (_query, data) => {
  const query = _query.trim().toLowerCase();
  const priorityMatrix = [[], []];
  const flatActions = getFlatActions(data);
  flatActions.forEach((item) => {
    var _a, _b;
    if ((_a = item.label) == null ? void 0 : _a.toLowerCase().includes(query)) {
      priorityMatrix[0].push(item);
    } else if (((_b = item.description) == null ? void 0 : _b.toLowerCase().includes(query)) || getKeywords(item.keywords).includes(query)) {
      priorityMatrix[1].push(item);
    }
  });
  return flatActionsToGroups(priorityMatrix.flat());
};

// src/limit-actions.ts
function limitActions(actions, limit) {
  const result = [];
  if (!Array.isArray(actions)) {
    return [];
  }
  for (let i = 0; i < actions.length; i += 1) {
    const item = actions[i];
    if (result.length >= limit) {
      return result;
    }
    if (isActionsGroup(item)) {
      result.push({
        group: item.group,
        actions: limitActions(item.actions, limit - result.length)
      });
    }
    if (!isActionsGroup(item)) {
      result.push(item);
    }
  }
  return result;
}

// src/Spotlight.tsx
var defaultProps32 = {
  size: 600,
  yOffset: 80,
  limit: Infinity,
  zIndex: getDefaultZIndex6("max"),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: "pop" },
  store: spotlightStore,
  filter: defaultSpotlightFilter,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: "mod + K",
  highlightQuery: false
};
var Spotlight = factory23((_props, ref) => {
  const props = useProps32("Spotlight", defaultProps32, _props);
  const _a = props, {
    searchProps,
    filter,
    query,
    onQueryChange,
    actions,
    nothingFound,
    highlightQuery,
    limit
  } = _a, others = __objRest(_a, [
    "searchProps",
    "filter",
    "query",
    "onQueryChange",
    "actions",
    "nothingFound",
    "highlightQuery",
    "limit"
  ]);
  const [_query, setQuery2] = useUncontrolled({
    value: query,
    defaultValue: "",
    finalValue: "",
    onChange: onQueryChange
  });
  const filteredActions = limitActions(filter(_query, actions), limit).map(
    (item) => {
      if (isActionsGroup(item)) {
        const items = item.actions.map((_a2) => {
          var _b = _a2, { id } = _b, actionData = __objRest(_b, ["id"]);
          return /* @__PURE__ */ React63.createElement(
            SpotlightAction,
            __spreadValues({
              key: id,
              highlightQuery
            }, actionData)
          );
        });
        return /* @__PURE__ */ React63.createElement(SpotlightActionsGroup, { key: item.group, label: item.group }, items);
      }
      return /* @__PURE__ */ React63.createElement(
        SpotlightAction,
        __spreadValues({
          key: item.id,
          highlightQuery
        }, item)
      );
    }
  );
  return /* @__PURE__ */ React63.createElement(
    SpotlightRoot,
    __spreadProps(__spreadValues({}, others), {
      query: _query,
      onQueryChange: setQuery2,
      ref
    }),
    /* @__PURE__ */ React63.createElement(SpotlightSearch, __spreadValues({}, searchProps)),
    /* @__PURE__ */ React63.createElement(SpotlightActionsList, null, filteredActions, filteredActions.length === 0 && nothingFound && /* @__PURE__ */ React63.createElement(SpotlightEmpty, null, nothingFound))
  );
});
Spotlight.displayName = "@raikou/spotlight/Spotlight";
Spotlight.Search = SpotlightSearch;
Spotlight.ActionsList = SpotlightActionsList;
Spotlight.Action = SpotlightAction;
Spotlight.Empty = SpotlightEmpty;
Spotlight.ActionsGroup = SpotlightActionsGroup;
Spotlight.Footer = SpotlightFooter;
Spotlight.Root = SpotlightRoot;
Spotlight.open = spotlight.open;
Spotlight.close = spotlight.close;
Spotlight.toggle = spotlight.toggle;
export {
  Spotlight,
  SpotlightAction,
  SpotlightActionsGroup,
  SpotlightActionsList,
  SpotlightEmpty,
  SpotlightFooter,
  SpotlightSearch,
  closeSpotlight,
  createSpotlight,
  createSpotlightStore,
  isActionsGroup,
  openSpotlight,
  spotlight,
  toggleSpotlight,
  useSpotlight
};
