import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  RaikouSize,
  getFontSize,
  getSpacing,
} from "@raikou/core";
import type { DayOfWeek } from "../../types";
import { useDatesContext } from "../DatesProvider";
import { getWeekdayNames } from "./get-weekdays-names/get-weekdays-names";

export type WeekdaysRowStylesNames = "weekday" | "weekdaysRow";
export type WeekdaysRowCssVariables = {
  weekdaysRow: "--wr-fz" | "--wr-spacing";
};

export interface WeekdaysRowProps
  extends BoxProps,
    StylesApiProps<WeekdaysRowFactory>,
    ElementProps<"tr"> {
  __staticSelector?: string;

  /** Controls size */
  size?: RaikouSize;

  /** dayjs locale, defaults to value defined in DatesProvider */
  locale?: string;

  /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** dayjs format to get weekday name, defaults to "dd" */
  weekdayFormat?: string | ((date: Date) => React.ReactNode);

  /** Choose cell type that will be used to render weekdays, defaults to th */
  cellComponent?: "td" | "th";
}

export type WeekdaysRowFactory = Factory<{
  props: WeekdaysRowProps;
  ref: HTMLTableRowElement;
  stylesNames: WeekdaysRowStylesNames;
  vars: WeekdaysRowCssVariables;
}>;

const defaultProps: Partial<WeekdaysRowProps> = {};

const varsResolver = createVarsResolver<WeekdaysRowFactory>((_, { size }) => ({
  weekdaysRow: {
    "--wr-fz": getFontSize(size),
    "--wr-spacing": getSpacing(size),
  },
}));

export const WeekdaysRow = factory<WeekdaysRowFactory>((_props, ref) => {
  const props = useProps("WeekdaysRow", defaultProps, _props);
  const {
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
    __staticSelector,
    ...others
  } = props;

  const getStyles = useStyles<WeekdaysRowFactory>({
    name: __staticSelector || "WeekdaysRow",
    classes: {
      weekday: "dates-weekday",
      weekdaysRow: "",
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "weekdaysRow",
  });

  const ctx = useDatesContext();

  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
  }).map((weekday, index) => (
    <CellComponent key={index} {...getStyles("weekday")}>
      {weekday}
    </CellComponent>
  ));

  return (
    <Box component="tr" ref={ref} {...getStyles("weekdaysRow")} {...others}>
      {weekdays}
    </Box>
  );
});

WeekdaysRow.displayName = "@raikou/dates/WeekdaysRow";
