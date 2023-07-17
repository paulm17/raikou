import React, { useRef } from "react";
import { factory, ElementProps, useProps, Factory } from "@raikou/core";
import { __InputStylesNames } from "../../Input/src";
import { InputBase, InputBaseProps } from "../../InputBase/src";
import { PillsInputProvider } from "./PillsInput.context";
import { PillsInputField } from "./PillsInputField/PillsInputField";

export interface PillsInputProps
  extends InputBaseProps,
    ElementProps<"div", "size"> {}

export type PillsInputFactory = Factory<{
  props: PillsInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
  staticComponents: {
    Field: typeof PillsInputField;
  };
}>;

const defaultProps: Partial<PillsInputProps> = {
  size: "sm",
};

export const PillsInput = factory<PillsInputFactory>((_props, ref) => {
  const props = useProps("PillsInput", defaultProps, _props);
  const {
    children,
    onMouseDown,
    onClick,
    size,
    disabled,
    __staticSelector,
    error,
    variant,
    ...others
  } = props;

  const fieldRef = useRef<HTMLInputElement>();

  return (
    <PillsInputProvider
      value={{ fieldRef, size: size!, disabled, hasError: !!error, variant }}
    >
      <InputBase
        size={size}
        error={error}
        variant={variant}
        component="div"
        ref={ref}
        onMouseDown={(event) => {
          event.preventDefault();
          onMouseDown?.(event);
          fieldRef.current?.focus();
        }}
        onClick={(event) => {
          event.preventDefault();
          onClick?.(event);
          fieldRef.current?.focus();
        }}
        {...others}
        multiline
        disabled={disabled}
        __staticSelector={__staticSelector || "PillsInput"}
        withAria={false}
      >
        {children}
      </InputBase>
    </PillsInputProvider>
  );
});

PillsInput.displayName = "@raikou/core/PillsInput";
PillsInput.Field = PillsInputField;
