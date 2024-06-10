import React from "react";
import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
} from "@raikou/core";
import { InputBase } from "../../InputBase/src";
import { __BaseInputProps, __InputStylesNames } from "../../Input/src";
import {
  ComboboxData,
  getParsedComboboxData,
  ComboboxChevron,
} from "../../Combobox/src";
import { NativeSelectOption } from "./NativeSelectOption";

export interface NativeSelectProps
  extends BoxProps,
    Omit<__BaseInputProps, "pointer">,
    StylesApiProps<NativeSelectFactory>,
    ElementProps<"select", "size"> {
  /** Data used to render options, can be replaced with `children` */
  data?: ComboboxData;
}

export type NativeSelectFactory = Factory<{
  props: NativeSelectProps;
  ref: HTMLSelectElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<NativeSelectProps> = {
  rightSectionPointerEvents: "none",
};

export const NativeSelect = factory<NativeSelectFactory>((props, ref) => {
  const { data, children, size, error, rightSection, ...others } = useProps(
    "NativeSelect",
    defaultProps,
    props,
  );

  const options = getParsedComboboxData(data).map((item, index) => (
    <NativeSelectOption key={index} data={item} />
  ));

  return (
    <InputBase
      component="select"
      ref={ref}
      {...others}
      __staticSelector="NativeSelect"
      size={size}
      pointer
      error={error}
      rightSection={
        rightSection || <ComboboxChevron size={size} error={error} />
      }
    >
      {children || options}
    </InputBase>
  );
});

NativeSelect.displayName = "@raikou/core/NativeSelect";
