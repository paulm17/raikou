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
  DATES_PROVIDER_DEFAULT_SETTINGS: () => DATES_PROVIDER_DEFAULT_SETTINGS,
  DatesProvider: () => DatesProvider,
  HiddenDatesInput: () => HiddenDatesInput,
  Month: () => Month,
  getEndOfWeek: () => getEndOfWeek,
  getMonthDays: () => getMonthDays,
  getStartOfWeek: () => getStartOfWeek,
  isSameMonth: () => isSameMonth,
  useDatesContext: () => useDatesContext
});
module.exports = __toCommonJS(src_exports);

// src/components/DatesProvider/DatesProvider.tsx
var import_react = __toESM(require("react"));
var DATES_PROVIDER_DEFAULT_SETTINGS = {
  locale: "en",
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: "\u2013"
};
var DatesProviderContext = (0, import_react.createContext)(DATES_PROVIDER_DEFAULT_SETTINGS);
function DatesProvider({ settings, children }) {
  return /* @__PURE__ */ import_react.default.createElement(DatesProviderContext.Provider, { value: __spreadValues(__spreadValues({}, DATES_PROVIDER_DEFAULT_SETTINGS), settings) }, children);
}

// src/components/DatesProvider/use-dates-context.ts
var import_react2 = require("react");
function useDatesContext() {
  const ctx = (0, import_react2.useContext)(DatesProviderContext);
  const getLocale = (0, import_react2.useCallback)((input) => input || ctx.locale, [ctx.locale]);
  const getFirstDayOfWeek = (0, import_react2.useCallback)(
    (input) => typeof input === "number" ? input : ctx.firstDayOfWeek,
    [ctx.firstDayOfWeek]
  );
  const getWeekendDays = (0, import_react2.useCallback)(
    (input) => Array.isArray(input) ? input : ctx.weekendDays,
    [ctx.weekendDays]
  );
  const getLabelSeparator = (0, import_react2.useCallback)(
    (input) => typeof input === "string" ? input : ctx.labelSeparator,
    [ctx.labelSeparator]
  );
  return __spreadProps(__spreadValues({}, ctx), {
    getLocale,
    getFirstDayOfWeek,
    getWeekendDays,
    getLabelSeparator
  });
}

// src/components/HiddenDatesInput/HiddenDatesInput.tsx
var import_react3 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react3.default.createElement(
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
function getMonthDays(month, firstDayOfWeek = 1) {
  const currentMonth = month.getMonth();
  const startOfMonth = new Date(month.getFullYear(), currentMonth, 1);
  const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);
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
var import_react10 = __toESM(require("react"));
var import_core4 = require("@raikou/core");
var import_dayjs6 = __toESM(require("dayjs"));

// src/components/Month/Day/Day.tsx
var import_react8 = __toESM(require("react"));
var import_core2 = require("@raikou/core");

// ../components/UnstyledButton/src/UnstyledButton.tsx
var import_react4 = __toESM(require("react"));
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
        root: "unstyled-button-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react4.default.createElement(
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

// src/components/Month/Day/Day.tsx
var import_dayjs = __toESM(require("dayjs"));

// ../components/_utils/create-safe-context/create-safe-context.tsx
var import_react5 = __toESM(require("react"));
function createSafeContext(errorMessage) {
  const Context = (0, import_react5.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react5.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react5.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
var import_react6 = __toESM(require("react"));

// ../components/_utils/use-hovered/use-hovered.ts
var import_react7 = require("react");

// src/components/Month/Month.context.ts
var [MonthProvider, useMonthContext] = createSafeContext(
  "Month component was not found in tree"
);

// src/components/Month/Day/Day.tsx
var defaultProps2 = {
  tabIndex: 0,
  size: "sm"
};
var Day = (0, import_core2.factory)((_props, ref) => {
  const props = (0, import_core2.useProps)("Day", defaultProps2, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    date,
    radius,
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
    static: isStatic,
    variant,
    size
  } = _a, others = __objRest(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "date",
    "radius",
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
    "static",
    "variant",
    "size"
  ]);
  const ctx = useMonthContext();
  return /* @__PURE__ */ import_react8.default.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("day", { className, style })), {
      component: isStatic ? "div" : "button",
      ref,
      disabled,
      "data-today": (0, import_dayjs.default)(date).isSame(/* @__PURE__ */ new Date(), "day") || void 0,
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

// src/components/Month/get-date-in-tab-order/get-date-in-tab-order.ts
var import_dayjs4 = __toESM(require("dayjs"));

// src/components/Month/is-after-min-date/is-after-min-date.ts
var import_dayjs2 = __toESM(require("dayjs"));
function isAfterMinDate(date, minDate) {
  return minDate instanceof Date ? (0, import_dayjs2.default)(date).isAfter((0, import_dayjs2.default)(minDate).subtract(1, "day"), "day") : true;
}

// src/components/Month/is-before-max-date/is-before-max-date.ts
var import_dayjs3 = __toESM(require("dayjs"));
function isBeforeMaxDate(date, maxDate) {
  return maxDate instanceof Date ? (0, import_dayjs3.default)(date).isBefore((0, import_dayjs3.default)(maxDate).add(1, "day"), "day") : true;
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
  const currentDate = enabledDates.find((date) => (0, import_dayjs4.default)().isSame(date, "date"));
  if (currentDate) {
    return currentDate;
  }
  return enabledDates[0];
}

// src/components/Month/WeekdaysRow/WeekdaysRow.tsx
var import_react9 = __toESM(require("react"));
var import_core3 = require("@raikou/core");

// src/components/Month/WeekdaysRow/get-weekdays-names/get-weekdays-names.ts
var import_dayjs5 = __toESM(require("dayjs"));
function getWeekdayNames({
  locale,
  format = "dd",
  firstDayOfWeek = 1
}) {
  const baseDate = (0, import_dayjs5.default)().day(firstDayOfWeek);
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    if (typeof format === "string") {
      labels.push((0, import_dayjs5.default)(baseDate).add(i, "days").locale(locale).format(format));
    } else {
      labels.push(format((0, import_dayjs5.default)(baseDate).add(i, "days").toDate()));
    }
  }
  return labels;
}

// src/components/Month/WeekdaysRow/WeekdaysRow.tsx
var defaultProps3 = {
  weekdayFormat: "dd",
  cellComponent: "th",
  size: "sm"
};
var WeekdaysRow = (0, import_core3.factory)((_props, ref) => {
  const props = (0, import_core3.useProps)("WeekdaysRow", defaultProps3, _props);
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
    variant,
    size
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
    "variant",
    "size"
  ]);
  const datesCtx = useDatesContext();
  const ctx = useMonthContext();
  const weekdays = getWeekdayNames({
    locale: datesCtx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: datesCtx.getFirstDayOfWeek(firstDayOfWeek)
  }).map((weekday, index) => /* @__PURE__ */ import_react9.default.createElement(CellComponent, __spreadValues({ key: index }, ctx.getStyles("weekday")), weekday));
  return /* @__PURE__ */ import_react9.default.createElement(import_core3.Box, __spreadValues(__spreadValues({ component: "tr", ref }, ctx.getStyles("weekdaysRow")), others), weekdays);
});
WeekdaysRow.displayName = "@raikou/core/WeekdaysRow";

// src/components/Month/Month.tsx
var defaultProps4 = {
  size: "sm",
  withCellSpacing: true
};
var varsResolver = (0, import_core4.createVarsResolver)((theme, { size }) => {
  const selectedColors = theme.variantColorResolver({
    color: theme.primaryColor,
    theme,
    variant: "filled"
  });
  const rangeColors = theme.variantColorResolver({
    color: theme.primaryColor,
    theme,
    variant: "light"
  });
  return {
    month: {
      "--month-fz": (0, import_core4.getFontSize)(size),
      "--month-spacing": (0, import_core4.getSpacing)(size),
      "--day-selected-bg": selectedColors.background,
      "--day-selected-color": selectedColors.color,
      "--day-selected-bg-hover": selectedColors.hover,
      "--day-range-bg": rangeColors.hover,
      "--day-range-bg-hover": rangeColors.background
    }
  };
});
var Month = (0, import_core4.factory)((_props, ref) => {
  const props = (0, import_core4.useProps)("Month", defaultProps4, _props);
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
    size,
    variant
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
    "size",
    "variant"
  ]);
  const getStyles = (0, import_core4.useStyles)({
    name: "Month",
    classes: {
      month: "month-month",
      monthCell: "month-monthCell",
      weekday: "month-weekday",
      day: "month-day"
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
  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth(date, month);
      const ariaLabel = (getDayAriaLabel == null ? void 0 : getDayAriaLabel(date)) || (0, import_dayjs6.default)(date).locale(locale || ctx.locale).format("D MMMM YYYY");
      const dayProps = getDayProps == null ? void 0 : getDayProps(date);
      const isDateInTabOrder = (0, import_dayjs6.default)(date).isSame(dateInTabOrder, "date");
      return /* @__PURE__ */ import_react10.default.createElement(
        "td",
        __spreadProps(__spreadValues({
          key: date.toString()
        }, getStyles("monthCell")), {
          "data-with-spacing": withCellSpacing || void 0
        }),
        /* @__PURE__ */ import_react10.default.createElement(
          Day,
          __spreadProps(__spreadValues({
            "data-raikou-stop-propagation": __stopPropagation || void 0,
            renderDay,
            date,
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
    return /* @__PURE__ */ import_react10.default.createElement("tr", __spreadValues({ key: rowIndex }, getStyles("monthRow")), cells);
  });
  return /* @__PURE__ */ import_react10.default.createElement(MonthProvider, { value: { getStyles } }, /* @__PURE__ */ import_react10.default.createElement(import_core4.Box, __spreadValues(__spreadProps(__spreadValues({ component: "table" }, getStyles("month")), { ref }), others), !hideWeekdays && /* @__PURE__ */ import_react10.default.createElement("thead", __spreadValues({}, getStyles("monthThead")), /* @__PURE__ */ import_react10.default.createElement(
    WeekdaysRow,
    {
      locale,
      firstDayOfWeek,
      weekdayFormat
    }
  )), /* @__PURE__ */ import_react10.default.createElement("tbody", __spreadValues({}, getStyles("monthTbody")), rows)));
});
Month.displayName = "@raikou/dates/Month";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DATES_PROVIDER_DEFAULT_SETTINGS,
  DatesProvider,
  HiddenDatesInput,
  Month,
  getEndOfWeek,
  getMonthDays,
  getStartOfWeek,
  isSameMonth,
  useDatesContext
});
