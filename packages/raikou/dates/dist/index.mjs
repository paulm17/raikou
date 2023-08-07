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

// src/components/DatesProvider/DatesProvider.tsx
import React, { createContext } from "react";
var DATES_PROVIDER_DEFAULT_SETTINGS = {
  locale: "en",
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: "\u2013"
};
var DatesProviderContext = createContext(DATES_PROVIDER_DEFAULT_SETTINGS);
function DatesProvider({ settings, children }) {
  return /* @__PURE__ */ React.createElement(DatesProviderContext.Provider, { value: __spreadValues(__spreadValues({}, DATES_PROVIDER_DEFAULT_SETTINGS), settings) }, children);
}

// src/components/DatesProvider/use-dates-context.ts
import { useContext, useCallback } from "react";
function useDatesContext() {
  const ctx = useContext(DatesProviderContext);
  const getLocale = useCallback((input) => input || ctx.locale, [ctx.locale]);
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
import React8 from "react";
import {
  Box as Box3,
  factory as factory3,
  useProps as useProps4,
  useStyles as useStyles2,
  createVarsResolver,
  getFontSize,
  getSpacing
} from "@raikou/core";
import dayjs6 from "dayjs";

// src/components/Month/Day/Day.tsx
import React6 from "react";
import {
  factory,
  useProps as useProps2
} from "@raikou/core";

// ../components/UnstyledButton/src/UnstyledButton.tsx
import React3 from "react";
import {
  Box,
  useProps,
  useStyles,
  polymorphicFactory
} from "@raikou/core";
var defaultProps = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps, _props);
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
        root: "unstyled-button-root"
      },
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ React3.createElement(
      Box,
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
import dayjs from "dayjs";

// ../components/_utils/create-safe-context/create-safe-context.tsx
import React4, { createContext as createContext2, useContext as useContext2 } from "react";
function createSafeContext(errorMessage) {
  const Context = createContext2(null);
  const useSafeContext = () => {
    const ctx = useContext2(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ React4.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// ../components/_utils/create-optional-context/create-optional-context.tsx
import React5, { createContext as createContext3, useContext as useContext3 } from "react";

// ../components/_utils/use-hovered/use-hovered.ts
import { useState } from "react";

// src/components/Month/Month.context.ts
var [MonthProvider, useMonthContext] = createSafeContext(
  "Month component was not found in tree"
);

// src/components/Month/Day/Day.tsx
var defaultProps2 = {
  tabIndex: 0,
  size: "sm"
};
var Day = factory((_props, ref) => {
  const props = useProps2("Day", defaultProps2, _props);
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
  return /* @__PURE__ */ React6.createElement(
    UnstyledButton,
    __spreadValues(__spreadProps(__spreadValues({}, ctx.getStyles("day", { className, style })), {
      component: isStatic ? "div" : "button",
      ref,
      disabled,
      "data-today": dayjs(date).isSame(/* @__PURE__ */ new Date(), "day") || void 0,
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
import dayjs4 from "dayjs";

// src/components/Month/is-after-min-date/is-after-min-date.ts
import dayjs2 from "dayjs";
function isAfterMinDate(date, minDate) {
  return minDate instanceof Date ? dayjs2(date).isAfter(dayjs2(minDate).subtract(1, "day"), "day") : true;
}

// src/components/Month/is-before-max-date/is-before-max-date.ts
import dayjs3 from "dayjs";
function isBeforeMaxDate(date, maxDate) {
  return maxDate instanceof Date ? dayjs3(date).isBefore(dayjs3(maxDate).add(1, "day"), "day") : true;
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
  const currentDate = enabledDates.find((date) => dayjs4().isSame(date, "date"));
  if (currentDate) {
    return currentDate;
  }
  return enabledDates[0];
}

// src/components/Month/WeekdaysRow/WeekdaysRow.tsx
import React7 from "react";
import {
  Box as Box2,
  factory as factory2,
  useProps as useProps3
} from "@raikou/core";

// src/components/Month/WeekdaysRow/get-weekdays-names/get-weekdays-names.ts
import dayjs5 from "dayjs";
function getWeekdayNames({
  locale,
  format = "dd",
  firstDayOfWeek = 1
}) {
  const baseDate = dayjs5().day(firstDayOfWeek);
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    if (typeof format === "string") {
      labels.push(dayjs5(baseDate).add(i, "days").locale(locale).format(format));
    } else {
      labels.push(format(dayjs5(baseDate).add(i, "days").toDate()));
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
var WeekdaysRow = factory2((_props, ref) => {
  const props = useProps3("WeekdaysRow", defaultProps3, _props);
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
  }).map((weekday, index) => /* @__PURE__ */ React7.createElement(CellComponent, __spreadValues({ key: index }, ctx.getStyles("weekday")), weekday));
  return /* @__PURE__ */ React7.createElement(Box2, __spreadValues(__spreadValues({ component: "tr", ref }, ctx.getStyles("weekdaysRow")), others), weekdays);
});
WeekdaysRow.displayName = "@raikou/core/WeekdaysRow";

// src/components/Month/Month.tsx
var defaultProps4 = {
  size: "sm",
  withCellSpacing: true
};
var varsResolver = createVarsResolver((theme, { size }) => {
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
      "--month-fz": getFontSize(size),
      "--month-spacing": getSpacing(size),
      "--day-selected-bg": selectedColors.background,
      "--day-selected-color": selectedColors.color,
      "--day-selected-bg-hover": selectedColors.hover,
      "--day-range-bg": rangeColors.hover,
      "--day-range-bg-hover": rangeColors.background
    }
  };
});
var Month = factory3((_props, ref) => {
  const props = useProps4("Month", defaultProps4, _props);
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
  const getStyles = useStyles2({
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
      const ariaLabel = (getDayAriaLabel == null ? void 0 : getDayAriaLabel(date)) || dayjs6(date).locale(locale || ctx.locale).format("D MMMM YYYY");
      const dayProps = getDayProps == null ? void 0 : getDayProps(date);
      const isDateInTabOrder = dayjs6(date).isSame(dateInTabOrder, "date");
      return /* @__PURE__ */ React8.createElement(
        "td",
        __spreadProps(__spreadValues({
          key: date.toString()
        }, getStyles("monthCell")), {
          "data-with-spacing": withCellSpacing || void 0
        }),
        /* @__PURE__ */ React8.createElement(
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
    return /* @__PURE__ */ React8.createElement("tr", __spreadValues({ key: rowIndex }, getStyles("monthRow")), cells);
  });
  return /* @__PURE__ */ React8.createElement(MonthProvider, { value: { getStyles } }, /* @__PURE__ */ React8.createElement(Box3, __spreadValues(__spreadProps(__spreadValues({ component: "table" }, getStyles("month")), { ref }), others), !hideWeekdays && /* @__PURE__ */ React8.createElement("thead", __spreadValues({}, getStyles("monthThead")), /* @__PURE__ */ React8.createElement(
    WeekdaysRow,
    {
      locale,
      firstDayOfWeek,
      weekdayFormat
    }
  )), /* @__PURE__ */ React8.createElement("tbody", __spreadValues({}, getStyles("monthTbody")), rows)));
});
Month.displayName = "@raikou/dates/Month";
export {
  DATES_PROVIDER_DEFAULT_SETTINGS,
  DatesProvider,
  HiddenDatesInput,
  Month,
  getEndOfWeek,
  getMonthDays,
  getStartOfWeek,
  isSameMonth,
  useDatesContext
};
