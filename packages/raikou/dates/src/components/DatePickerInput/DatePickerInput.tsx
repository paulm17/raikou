import React from "react";
import {
  BoxProps,
  StylesApiProps,
  factory,
  useProps,
  useResolvedStylesApi,
  Factory,
  RaikouComponentStaticProperties,
} from "@raikou/core";
import {
  InputVariant,
  __InputStylesNames,
} from "../../../../components/Input/src";
import { CalendarStylesNames, pickCalendarProps } from "../Calendar";
import { useDatesInput } from "../../hooks";
import { DatePicker, DatePickerBaseProps } from "../DatePicker";
import { DatePickerType } from "../../types";
import { getDefaultClampedDate } from "../../utils";
import { PickerInputBase, DateInputSharedProps } from "../PickerInputBase";

export type DatePickerInputStylesNames =
  | __InputStylesNames
  | CalendarStylesNames;

export interface DatePickerInputProps<Type extends DatePickerType = "default">
  extends BoxProps,
    DateInputSharedProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerInputFactory> {
  /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
  valueFormat?: string;
}

export type DatePickerInputFactory = Factory<{
  props: DatePickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: DatePickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<DatePickerInputProps> = {
  type: "default",
  valueFormat: "MMMM D, YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover",
  size: "sm",
};

type DatePickerInputComponent = (<Type extends DatePickerType = "default">(
  props: DatePickerInputProps<Type>,
) => JSX.Element) & {
  displayName?: string;
} & RaikouComponentStaticProperties<DatePickerInputFactory>;

export const DatePickerInput: DatePickerInputComponent =
  factory<DatePickerInputFactory>((_props, ref) => {
    const props = useProps("DatePickerInput", defaultProps, _props);
    const {
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
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      defaultDate,
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } =
      useResolvedStylesApi<DatePickerInputFactory>({
        classNames,
        styles,
        props,
      });

    const { calendarProps, others } = pickCalendarProps(rest);

    const {
      _value,
      setValue,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClear,
      shouldClear,
    } = useDatesInput({
      type: type as any,
      value,
      defaultValue,
      onChange: onChange as any,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
    });

    const _defaultDate = Array.isArray(_value)
      ? _value[0] || defaultDate
      : _value || defaultDate;

    return (
      <PickerInputBase
        formattedValue={formattedValue}
        dropdownOpened={dropdownOpened}
        dropdownHandlers={dropdownHandlers}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        ref={ref}
        onClear={onClear}
        shouldClear={shouldClear}
        value={_value}
        size={size!}
        variant={variant}
        dropdownType={dropdownType}
        {...others}
        type={type as any}
        __staticSelector="DatePickerInput"
      >
        <DatePicker
          {...calendarProps}
          size={size}
          variant={variant}
          type={type}
          value={_value}
          defaultDate={
            _defaultDate || getDefaultClampedDate({ maxDate, minDate })
          }
          onChange={setValue}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          __staticSelector="DatePickerInput"
          __stopPropagation={dropdownType === "popover"}
          minDate={minDate}
          maxDate={maxDate}
        />
      </PickerInputBase>
    );
  }) as any;

DatePickerInput.classes = { ...PickerInputBase.classes, ...DatePicker.classes };
DatePickerInput.displayName = "@raikou/dates/DatePickerInput";
