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
import { pickCalendarProps } from "../Calendar";
import { useDatesInput } from "../../hooks";
import {
  YearPicker,
  YearPickerBaseProps,
  YearPickerStylesNames,
} from "../YearPicker";
import { DatePickerType } from "../../types";
import { getDefaultClampedDate } from "../../utils";
import { PickerInputBase, DateInputSharedProps } from "../PickerInputBase";

export type YearPickerInputStylesNames =
  | __InputStylesNames
  | YearPickerStylesNames;

export interface YearPickerInputProps<Type extends DatePickerType = "default">
  extends BoxProps,
    DateInputSharedProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerInputFactory> {
  /** Dayjs format to display input value, "YYYY" by default  */
  valueFormat?: string;
}

export type YearPickerInputFactory = Factory<{
  props: YearPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: YearPickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<YearPickerInputProps> = {
  type: "default",
  valueFormat: "YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover",
  size: "sm",
};

type YearPickerInputComponent = (<Type extends DatePickerType = "default">(
  props: YearPickerInputProps<Type> & {
    ref?: React.ForwardedRef<HTMLButtonElement>;
  },
) => JSX.Element) & {
  displayName?: string;
} & RaikouComponentStaticProperties<YearPickerInputFactory>;

export const YearPickerInput: YearPickerInputComponent =
  factory<YearPickerInputFactory>((_props, ref) => {
    const props = useProps("YearPickerInput", defaultProps, _props);
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
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } =
      useResolvedStylesApi<YearPickerInputFactory>({
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
        __staticSelector="YearPickerInput"
      >
        <YearPicker
          {...calendarProps}
          size={size}
          variant={variant}
          type={type}
          value={_value}
          defaultDate={
            Array.isArray(_value)
              ? _value[0] || getDefaultClampedDate({ maxDate, minDate })
              : _value || getDefaultClampedDate({ maxDate, minDate })
          }
          onChange={setValue}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          __staticSelector="YearPickerInput"
          __stopPropagation={dropdownType === "popover"}
          minDate={minDate}
          maxDate={maxDate}
        />
      </PickerInputBase>
    );
  }) as any;

YearPickerInput.classes = { ...PickerInputBase.classes, ...YearPicker.classes };
YearPickerInput.displayName = "@raikou/dates/YearPickerInput";
