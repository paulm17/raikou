import React from "react";
import { useUncontrolled } from "@raikou/hooks";
import { factory, useProps, RaikouSize, Factory } from "@raikou/core";
import {
  InputWrapperStylesNames,
  Input,
  InputWrapperProps,
} from "../../../Input/src";
import { SwitchGroupProvider } from "../SwitchGroup.context";
import { InputsGroupFieldset } from "../../../InputsGroupFieldset/src";

export type SwitchGroupStylesNames = InputWrapperStylesNames;

export interface SwitchGroupProps extends Omit<InputWrapperProps, "onChange"> {
  /** `Switch` components */
  children: React.ReactNode;

  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?(value: string[]): void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: Record<string, any>;

  /** Controls size of the `Input.Wrapper`, `'sm'` by default */
  size?: RaikouSize | (string & {});
}

export type SwitchGroupFactory = Factory<{
  props: SwitchGroupProps;
  ref: HTMLDivElement;
  stylesNames: SwitchGroupStylesNames;
}>;

const defaultProps: Partial<SwitchGroupProps> = {};

export const SwitchGroup = factory<SwitchGroupFactory>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    size,
    wrapperProps,
    children,
    ...others
  } = useProps("SwitchGroup", defaultProps, props);

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
        : [..._value, itemValue],
    );
  };

  return (
    <SwitchGroupProvider
      value={{ value: _value, onChange: handleChange, size }}
    >
      <Input.Wrapper
        size={size}
        ref={ref}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="SwitchGroup"
      >
        <InputsGroupFieldset role="group">{children}</InputsGroupFieldset>
      </Input.Wrapper>
    </SwitchGroupProvider>
  );
});

SwitchGroup.displayName = "@raikou/core/SwitchGroup";
