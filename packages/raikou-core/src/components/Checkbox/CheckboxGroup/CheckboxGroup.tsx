import React from "react";
import { useUncontrolled } from "@raikou/hooks";
import { factory, useProps, RaikouSize, Factory } from "../../../core";
import { InputWrapperStylesNames, Input, InputWrapperProps } from "../../Input";
import { CheckboxGroupProvider } from "../CheckboxGroup.context";

export type CheckboxGroupStylesNames = InputWrapperStylesNames;
export type CheckboxGroupVariant = string;

export interface CheckboxGroupProps
  extends Omit<InputWrapperProps, "onChange"> {
  /** `Checkbox` components */
  children: React.ReactNode;

  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?(value: string[]): void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: React.ComponentPropsWithoutRef<"div">;

  /** Controls size of the `Input.Wrapper`, `'sm'` by default */
  size?: RaikouSize | (string & {});
}

export type CheckboxGroupFactory = Factory<{
  props: CheckboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: CheckboxGroupStylesNames;
}>;

const defaultProps: Partial<CheckboxGroupProps> = {};

export const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    size,
    wrapperProps,
    children,
    ...others
  } = useProps("CheckboxGroup", defaultProps, props);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const itemValue = event.currentTarget.value;
    setValue(
      _value.includes(itemValue)
        ? _value.filter((item) => item !== itemValue)
        : [..._value, itemValue]
    );
  };

  return (
    <CheckboxGroupProvider
      value={{ value: _value, onChange: handleChange, size }}
    >
      <Input.Wrapper
        size={size}
        ref={ref}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="CheckboxGroup"
      >
        {children}
      </Input.Wrapper>
    </CheckboxGroupProvider>
  );
});

CheckboxGroup.classes = Input.Wrapper.classes;
CheckboxGroup.displayName = "@raikou/core/CheckboxGroup";
