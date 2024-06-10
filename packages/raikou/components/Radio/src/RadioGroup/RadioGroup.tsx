import React from "react";
import { useId, useUncontrolled } from "@raikou/hooks";
import { factory, useProps, RaikouSize, Factory } from "@raikou/core";
import {
  InputWrapperStylesNames,
  Input,
  InputWrapperProps,
} from "../../../Input/src";
import { RadioGroupProvider } from "../RadioGroup.context";
import { InputsGroupFieldset } from "../../../InputsGroupFieldset/src";

export type RadioGroupStylesNames = InputWrapperStylesNames;

// @ts-ignore
export interface RadioGroupProps extends Omit<InputWrapperProps, "onChange"> {
  /** `Radio` components */
  children: React.ReactNode;

  /** Controlled component value */
  value?: string | null;

  /** Default value for uncontrolled component */
  defaultValue?: string | null;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: Record<string, any>;

  /** Controls size of the `Input.Wrapper`, `'sm'` by default */
  size?: RaikouSize;

  /** Name attribute of child radio inputs */
  name?: string;

  /** If set, value cannot be changed */
  readOnly?: boolean;
}

export type RadioGroupFactory = Factory<{
  props: RadioGroupProps;
  ref: HTMLDivElement;
  stylesNames: RadioGroupStylesNames;
}>;

const defaultProps: Partial<RadioGroupProps> = {};

export const RadioGroup = factory<RadioGroupFactory>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    size,
    wrapperProps,
    children,
    name,
    readOnly,
    ...others
  } = useProps("RadioGroup", defaultProps, props);

  const _name = useId(name);

  const [_value, setValue] = useUncontrolled({
    value: value as string,
    defaultValue: defaultValue as string,
    finalValue: "",
    onChange,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | string) =>
    !readOnly &&
    setValue(typeof event === "string" ? event : event.currentTarget.value);

  return (
    <RadioGroupProvider
      value={{ value: _value, onChange: handleChange, size, name: _name }}
    >
      <Input.Wrapper
        size={size}
        ref={ref}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="RadioGroup"
      >
        <InputsGroupFieldset role="radiogroup">{children}</InputsGroupFieldset>
      </Input.Wrapper>
    </RadioGroupProvider>
  );
});

RadioGroup.displayName = "@raikou/core/RadioGroup";
