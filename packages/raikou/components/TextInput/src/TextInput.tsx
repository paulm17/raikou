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

export interface TextInputProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<TextInputFactory>,
    ElementProps<"input", "size"> {}

export type TextInputFactory = Factory<{
  props: TextInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<TextInputProps> = {};

export const TextInput = factory<TextInputFactory>((props, ref) => {
  const _props = useProps("TextInput", defaultProps, props);

  return (
    <InputBase
      component="input"
      ref={ref}
      {..._props}
      __staticSelector="TextInput"
    />
  );
});

TextInput.displayName = "@raikou/core/TextInput";
