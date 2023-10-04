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
  FORM_INDEX: () => FORM_INDEX,
  Form: () => Form,
  createFormContext: () => createFormContext,
  hasLength: () => hasLength,
  isEmail: () => isEmail,
  isInRange: () => isInRange,
  isNotEmpty: () => isNotEmpty,
  joiResolver: () => joiResolver,
  matches: () => matches,
  matchesField: () => matchesField,
  superstructResolver: () => superstructResolver,
  useForm: () => useForm,
  yupResolver: () => yupResolver,
  zodResolver: () => zodResolver
});
module.exports = __toCommonJS(src_exports);

// src/use-form.ts
var import_react = require("react");
var import_fast_deep_equal = __toESM(require("fast-deep-equal"));

// src/get-input-on-change/get-input-on-change.ts
function getInputOnChange(setValue) {
  return (val) => {
    if (!val) {
      setValue(val);
    } else if (typeof val === "function") {
      setValue(val);
    } else if (typeof val === "object" && "nativeEvent" in val) {
      const { currentTarget } = val;
      if (currentTarget instanceof HTMLInputElement) {
        if (currentTarget.type === "checkbox") {
          setValue(currentTarget.checked);
        } else {
          setValue(currentTarget.value);
        }
      } else if (currentTarget instanceof HTMLTextAreaElement || currentTarget instanceof HTMLSelectElement) {
        setValue(currentTarget.value);
      }
    } else {
      setValue(val);
    }
  };
}

// src/paths/get-splitted-path.ts
function getSplittedPath(path) {
  if (typeof path !== "string") {
    return [];
  }
  return path.split(".");
}

// src/paths/get-path.ts
function getPath(path, values) {
  const splittedPath = getSplittedPath(path);
  if (splittedPath.length === 0 || typeof values !== "object" || values === null) {
    return void 0;
  }
  let value = values[splittedPath[0]];
  for (let i = 1; i < splittedPath.length; i += 1) {
    if (value === void 0) {
      break;
    }
    value = value[splittedPath[i]];
  }
  return value;
}

// src/paths/set-path.ts
var import_full = require("klona/full");
function setPath(path, value, values) {
  const splittedPath = getSplittedPath(path);
  if (splittedPath.length === 0) {
    return values;
  }
  const cloned = (0, import_full.klona)(values);
  if (splittedPath.length === 1) {
    cloned[splittedPath[0]] = value;
    return cloned;
  }
  let val = cloned[splittedPath[0]];
  for (let i = 1; i < splittedPath.length - 1; i += 1) {
    if (val === void 0) {
      return cloned;
    }
    val = val[splittedPath[i]];
  }
  val[splittedPath[splittedPath.length - 1]] = value;
  return cloned;
}

// src/paths/reorder-path.ts
function reorderPath(path, { from, to }, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  const cloned = [...currentValue];
  const item = currentValue[from];
  cloned.splice(from, 1);
  cloned.splice(to, 0, item);
  return setPath(path, cloned, values);
}

// src/paths/insert-path.ts
function insertPath(path, value, index, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  const cloned = [...currentValue];
  cloned.splice(typeof index === "number" ? index : cloned.length, 0, value);
  return setPath(path, cloned, values);
}

// src/paths/remove-path.ts
function removePath(path, index, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  return setPath(
    path,
    currentValue.filter((_, itemIndex) => itemIndex !== index),
    values
  );
}

// src/filter-errors/filter-errors.ts
function filterErrors(errors) {
  if (errors === null || typeof errors !== "object") {
    return {};
  }
  return Object.keys(errors).reduce((acc, key) => {
    const errorValue = errors[key];
    if (errorValue !== void 0 && errorValue !== null && errorValue !== false) {
      acc[key] = errorValue;
    }
    return acc;
  }, {});
}

// src/validate/validate-values.ts
function getValidationResults(errors) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}
function validateRulesRecord(rules, values, path = "", errors = {}) {
  if (typeof rules !== "object" || rules === null) {
    return errors;
  }
  return Object.keys(rules).reduce((acc, ruleKey) => {
    const rule = rules[ruleKey];
    const rulePath = `${path === "" ? "" : `${path}.`}${ruleKey}`;
    const value = getPath(rulePath, values);
    let arrayValidation = false;
    if (typeof rule === "function") {
      acc[rulePath] = rule(value, values, rulePath);
    }
    if (typeof rule === "object" && Array.isArray(value)) {
      arrayValidation = true;
      value.forEach(
        (_item, index) => validateRulesRecord(rule, values, `${rulePath}.${index}`, acc)
      );
    }
    if (typeof rule === "object" && typeof value === "object" && value !== null) {
      if (!arrayValidation) {
        validateRulesRecord(rule, values, rulePath, acc);
      }
    }
    return acc;
  }, errors);
}
function validateValues(validate, values) {
  if (typeof validate === "function") {
    return getValidationResults(validate(values));
  }
  return getValidationResults(validateRulesRecord(validate, values));
}

// src/validate/validate-field-value.ts
function validateFieldValue(path, rules, values) {
  if (typeof path !== "string") {
    return { hasError: false, error: null };
  }
  const results = validateValues(rules, values);
  const pathInError = Object.keys(results.errors).find(
    (errorKey) => path.split(".").every((pathPart, i) => pathPart === errorKey.split(".")[i])
  );
  return { hasError: !!pathInError, error: pathInError ? results.errors[pathInError] : null };
}

// src/form-index.ts
var FORM_INDEX = "__MANTINE_FORM_INDEX__";

// src/validate/should-validate-on-change.ts
function shouldValidateOnChange(path, validateInputOnChange) {
  if (!validateInputOnChange) {
    return false;
  }
  if (typeof validateInputOnChange === "boolean") {
    return validateInputOnChange;
  }
  if (Array.isArray(validateInputOnChange)) {
    return validateInputOnChange.includes(path.replace(/[.][0-9]/g, `.${FORM_INDEX}`));
  }
  return false;
}

// src/get-status/get-status.ts
function getStatus(status, path) {
  const paths = Object.keys(status);
  if (typeof path === "string") {
    const nestedPaths = paths.filter((statusPath) => statusPath.startsWith(`${path}.`));
    return status[path] || nestedPaths.some((statusPath) => status[statusPath]) || false;
  }
  return paths.some((statusPath) => status[statusPath]);
}

// src/lists/clear-list-state.ts
function clearListState(field, state) {
  if (state === null || typeof state !== "object") {
    return {};
  }
  const clone = __spreadValues({}, state);
  Object.keys(state).forEach((errorKey) => {
    if (errorKey.includes(`${String(field)}.`)) {
      delete clone[errorKey];
    }
  });
  return clone;
}

// src/lists/change-error-indices.ts
function getIndexFromKeyAfterPath(key, path) {
  const split = key.substring(path.length + 1).split(".")[0];
  return parseInt(split, 10);
}
function changeErrorIndices(path, index, errors, change) {
  if (index === void 0) {
    return errors;
  }
  const pathString = `${String(path)}`;
  let clearedErrors = errors;
  if (change === -1) {
    clearedErrors = clearListState(`${pathString}.${index}`, clearedErrors);
  }
  const cloned = __spreadValues({}, clearedErrors);
  const changedKeys = /* @__PURE__ */ new Set();
  Object.entries(clearedErrors).filter(([key]) => {
    if (!key.startsWith(`${pathString}.`)) {
      return false;
    }
    const currIndex = getIndexFromKeyAfterPath(key, pathString);
    if (Number.isNaN(currIndex)) {
      return false;
    }
    return currIndex >= index;
  }).forEach(([key, value]) => {
    const currIndex = getIndexFromKeyAfterPath(key, pathString);
    const newKey = key.replace(
      `${pathString}.${currIndex}`,
      `${pathString}.${currIndex + change}`
    );
    cloned[newKey] = value;
    changedKeys.add(newKey);
    if (!changedKeys.has(key)) {
      delete cloned[key];
    }
  });
  return cloned;
}

// src/lists/reorder-errors.ts
function reorderErrors(path, { from, to }, errors) {
  const oldKeyStart = `${path}.${from}`;
  const newKeyStart = `${path}.${to}`;
  const clone = __spreadValues({}, errors);
  Object.keys(errors).every((key) => {
    let oldKey;
    let newKey;
    if (key.startsWith(oldKeyStart)) {
      oldKey = key;
      newKey = key.replace(oldKeyStart, newKeyStart);
    }
    if (key.startsWith(newKeyStart)) {
      oldKey = key.replace(newKeyStart, oldKeyStart);
      newKey = key;
    }
    if (oldKey && newKey) {
      const value1 = clone[oldKey];
      const value2 = clone[newKey];
      value2 === void 0 ? delete clone[oldKey] : clone[oldKey] = value2;
      value1 === void 0 ? delete clone[newKey] : clone[newKey] = value1;
      return false;
    }
    return true;
  });
  return clone;
}

// src/use-form.ts
function useForm({
  initialValues = {},
  initialErrors = {},
  initialDirty = {},
  initialTouched = {},
  clearInputErrorOnChange = true,
  validateInputOnChange = false,
  validateInputOnBlur = false,
  transformValues = (values) => values,
  validate: rules
} = {}) {
  const [touched, setTouched] = (0, import_react.useState)(initialTouched);
  const [dirty, setDirty] = (0, import_react.useState)(initialDirty);
  const [values, _setValues] = (0, import_react.useState)(initialValues);
  const [errors, _setErrors] = (0, import_react.useState)(filterErrors(initialErrors));
  const valuesSnapshot = (0, import_react.useRef)(initialValues);
  const setValuesSnapshot = (_values) => {
    valuesSnapshot.current = _values;
  };
  const resetTouched = (0, import_react.useCallback)(() => setTouched({}), []);
  const resetDirty = (_values) => {
    const newSnapshot = _values ? __spreadValues(__spreadValues({}, values), _values) : values;
    setValuesSnapshot(newSnapshot);
    setDirty({});
  };
  const setErrors = (0, import_react.useCallback)(
    (errs) => _setErrors(
      (current) => filterErrors(typeof errs === "function" ? errs(current) : errs)
    ),
    []
  );
  const clearErrors = (0, import_react.useCallback)(() => _setErrors({}), []);
  const reset = (0, import_react.useCallback)(() => {
    _setValues(initialValues);
    clearErrors();
    setValuesSnapshot(initialValues);
    setDirty({});
    resetTouched();
  }, []);
  const setFieldError = (0, import_react.useCallback)(
    (path, error) => setErrors((current) => __spreadProps(__spreadValues({}, current), { [path]: error })),
    []
  );
  const clearFieldError = (0, import_react.useCallback)(
    (path) => setErrors((current) => {
      if (typeof path !== "string") {
        return current;
      }
      const clone = __spreadValues({}, current);
      delete clone[path];
      return clone;
    }),
    []
  );
  const clearFieldDirty = (0, import_react.useCallback)(
    (path) => setDirty((current) => {
      if (typeof path !== "string") {
        return current;
      }
      const result = clearListState(path, current);
      delete result[path];
      return result;
    }),
    []
  );
  const setFieldValue = (0, import_react.useCallback)((path, value) => {
    const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);
    clearFieldDirty(path);
    setTouched((currentTouched) => __spreadProps(__spreadValues({}, currentTouched), { [path]: true }));
    _setValues((current) => {
      const result = setPath(path, value, current);
      if (shouldValidate) {
        const validationResults = validateFieldValue(path, rules, result);
        validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
      }
      return result;
    });
    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);
  const setValues = (0, import_react.useCallback)((payload) => {
    _setValues((currentValues) => {
      const valuesPartial = typeof payload === "function" ? payload(currentValues) : payload;
      return __spreadValues(__spreadValues({}, currentValues), valuesPartial);
    });
    clearInputErrorOnChange && clearErrors();
  }, []);
  const reorderListItem = (0, import_react.useCallback)(
    (path, payload) => {
      clearFieldDirty(path);
      _setValues((current) => reorderPath(path, payload, current));
      _setErrors((errs) => reorderErrors(path, payload, errs));
    },
    []
  );
  const removeListItem = (0, import_react.useCallback)((path, index) => {
    clearFieldDirty(path);
    _setValues((current) => removePath(path, index, current));
    _setErrors((errs) => changeErrorIndices(path, index, errs, -1));
  }, []);
  const insertListItem = (0, import_react.useCallback)(
    (path, item, index) => {
      clearFieldDirty(path);
      _setValues((current) => insertPath(path, item, index, current));
      _setErrors((errs) => changeErrorIndices(path, index, errs, 1));
    },
    []
  );
  const validate = (0, import_react.useCallback)(() => {
    const results = validateValues(rules, values);
    _setErrors(results.errors);
    return results;
  }, [values, rules]);
  const validateField = (0, import_react.useCallback)(
    (path) => {
      const results = validateFieldValue(path, rules, values);
      results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
      return results;
    },
    [values, rules]
  );
  const getInputProps = (path, { type = "input", withError = true, withFocus = true } = {}) => {
    const onChange = getInputOnChange(
      (value) => setFieldValue(path, value)
    );
    const payload = { onChange };
    if (withError) {
      payload.error = errors[path];
    }
    if (type === "checkbox") {
      payload.checked = getPath(path, values);
    } else {
      payload.value = getPath(path, values);
    }
    if (withFocus) {
      payload.onFocus = () => setTouched((current) => __spreadProps(__spreadValues({}, current), { [path]: true }));
      payload.onBlur = () => {
        if (shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue(path, rules, values);
          validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
        }
      };
    }
    return payload;
  };
  const onSubmit = (handleSubmit, handleValidationFailure) => (event) => {
    event == null ? void 0 : event.preventDefault();
    const results = validate();
    if (results.hasErrors) {
      handleValidationFailure == null ? void 0 : handleValidationFailure(results.errors, values, event);
    } else {
      handleSubmit == null ? void 0 : handleSubmit(transformValues(values), event);
    }
  };
  const getTransformedValues = (input) => transformValues(input || values);
  const onReset = (0, import_react.useCallback)((event) => {
    event.preventDefault();
    reset();
  }, []);
  const isDirty = (path) => {
    if (path) {
      const overriddenValue = getPath(path, dirty);
      if (typeof overriddenValue === "boolean") {
        return overriddenValue;
      }
      const sliceOfValues = getPath(path, values);
      const sliceOfInitialValues = getPath(path, valuesSnapshot.current);
      return !(0, import_fast_deep_equal.default)(sliceOfValues, sliceOfInitialValues);
    }
    const isOverridden = Object.keys(dirty).length > 0;
    if (isOverridden) {
      return getStatus(dirty);
    }
    return !(0, import_fast_deep_equal.default)(values, valuesSnapshot.current);
  };
  const isTouched = (0, import_react.useCallback)(
    (path) => getStatus(touched, path),
    [touched]
  );
  const isValid = (0, import_react.useCallback)(
    (path) => path ? !validateFieldValue(path, rules, values).hasError : !validateValues(rules, values).hasErrors,
    [values, rules]
  );
  return {
    values,
    errors,
    setValues,
    setInitialValues: setValuesSnapshot,
    setErrors,
    setFieldValue,
    setFieldError,
    clearFieldError,
    clearErrors,
    reset,
    validate,
    validateField,
    reorderListItem,
    removeListItem,
    insertListItem,
    getInputProps,
    onSubmit,
    onReset,
    isDirty,
    isTouched,
    setTouched,
    setDirty,
    resetTouched,
    resetDirty,
    isValid,
    getTransformedValues
  };
}

// src/FormProvider/FormProvider.tsx
var import_react2 = __toESM(require("react"));
function createFormContext() {
  const FormContext = (0, import_react2.createContext)(null);
  function FormProvider({ form, children }) {
    return /* @__PURE__ */ import_react2.default.createElement(FormContext.Provider, { value: form }, children);
  }
  function useFormContext() {
    const ctx = (0, import_react2.useContext)(FormContext);
    if (!ctx) {
      throw new Error("useFormContext was called outside of FormProvider context");
    }
    return ctx;
  }
  return [FormProvider, useFormContext, useForm];
}

// src/Form/Form.tsx
var import_react3 = __toESM(require("react"));
var Form = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { form, onSubmit, onReset } = _b, others = __objRest(_b, ["form", "onSubmit", "onReset"]);
    return /* @__PURE__ */ import_react3.default.createElement(
      "form",
      __spreadProps(__spreadValues({}, others), {
        onSubmit: form.onSubmit(typeof onSubmit === "function" ? onSubmit : () => {
        }),
        onReset: (event) => {
          onReset == null ? void 0 : onReset(event);
          form.onReset(event);
        },
        ref
      })
    );
  }
);

// src/validators/is-not-empty/is-not-empty.ts
function isNotEmpty(error) {
  const _error = error || true;
  return (value) => {
    if (typeof value === "string") {
      return value.trim().length > 0 ? null : _error;
    }
    if (Array.isArray(value)) {
      return value.length > 0 ? null : _error;
    }
    if (value === null || value === void 0) {
      return _error;
    }
    if (value === false) {
      return _error;
    }
    return null;
  };
}

// src/validators/matches/matches.ts
function matches(regexp, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value !== "string") {
      return _error;
    }
    return regexp.test(value) ? null : _error;
  };
}

// src/validators/is-email/is-email.ts
function isEmail(error) {
  return matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, error);
}

// src/validators/has-length/has-length.ts
function isLengthValid(payload, value) {
  if (typeof payload === "number") {
    return value.length === payload;
  }
  const { max, min } = payload;
  let valid = true;
  if (typeof max === "number" && value.length > max) {
    valid = false;
  }
  if (typeof min === "number" && value.length < min) {
    valid = false;
  }
  return valid;
}
function hasLength(payload, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value === "string") {
      return isLengthValid(payload, value.trim()) ? null : _error;
    }
    if (typeof value === "object" && value !== null && "length" in value) {
      return isLengthValid(payload, value) ? null : _error;
    }
    return _error;
  };
}

// src/validators/is-in-range/is-in-range.ts
function isInRange({ min, max }, error) {
  const _error = error || true;
  return (value) => {
    if (typeof value !== "number") {
      return _error;
    }
    let valid = true;
    if (typeof min === "number" && value < min) {
      valid = false;
    }
    if (typeof max === "number" && value > max) {
      valid = false;
    }
    return valid ? null : _error;
  };
}

// src/validators/matches-field/matches-field.ts
function matchesField(field, error) {
  const _error = error || true;
  return (value, values) => {
    if (!values || !(field in values)) {
      return _error;
    }
    return value === values[field] ? null : _error;
  };
}

// src/resolvers/zod-resolver/zod-resolver.ts
function zodResolver(schema) {
  return (values) => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      return {};
    }
    const results = {};
    parsed.error.errors.forEach((error) => {
      results[error.path.join(".")] = error.message;
    });
    return results;
  };
}

// src/resolvers/superstruct-resolver/superstruct-resolver.ts
function superstructResolver(schema) {
  function structValidation(values) {
    const formErrors = {};
    const [err] = schema.validate(values);
    if (!err) {
      return formErrors;
    }
    err.failures().forEach((fieldFailure) => {
      const fieldName = fieldFailure.path.join(" ");
      formErrors[fieldFailure.path.join(".")] = `${fieldName}: ${fieldFailure.message}`;
    });
    return formErrors;
  }
  return structValidation;
}

// src/resolvers/yup-resolver/yup-resolver.ts
function yupResolver(schema) {
  const _schema = schema;
  return (values) => {
    try {
      _schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (_yupError) {
      const yupError = _yupError;
      const results = {};
      yupError.inner.forEach((error) => {
        results[error.path.replaceAll("[", ".").replaceAll("]", "")] = error.message;
      });
      return results;
    }
  };
}

// src/resolvers/joi-resolver/joi-resolver.ts
function joiResolver(schema, options) {
  const _schema = schema;
  return (values) => {
    const parsed = _schema.validate(values, __spreadValues({ abortEarly: false }, options));
    if (!parsed.error) {
      return {};
    }
    const results = {};
    parsed.error.details.forEach((error) => {
      results[error.path.join(".")] = error.message;
    });
    return results;
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FORM_INDEX,
  Form,
  createFormContext,
  hasLength,
  isEmail,
  isInRange,
  isNotEmpty,
  joiResolver,
  matches,
  matchesField,
  superstructResolver,
  useForm,
  yupResolver,
  zodResolver
});
