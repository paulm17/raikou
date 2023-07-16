import React from "react";
import { factory, ElementProps, useProps, Factory } from "@raikou/core";
import { InputBase, InputBaseProps } from "../../InputBase/src";
import { __InputStylesNames } from "../../Input/src";
import {
  ComboboxData,
  getParsedComboboxData,
  ComboboxChevron,
} from "../../Combobox/src";
import { NativeSelectOption } from "./NativeSelectOption";

export interface NativeSelectProps
  extends InputBaseProps,
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
  size: "sm",
  rightSectionPointerEvents: "none",
};

export const NativeSelect = factory<NativeSelectFactory>((props, ref) => {
  const { data, children, size, error, rightSection, ...others } = useProps(
    "NativeSelect",
    defaultProps,
    props
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
        rightSection || <ComboboxChevron size={size!} error={error} />
      }
    >
      {children || options}
    </InputBase>
  );
});

NativeSelect.classes = InputBase.classes;
NativeSelect.displayName = "@raikou/core/NativeSelect";
