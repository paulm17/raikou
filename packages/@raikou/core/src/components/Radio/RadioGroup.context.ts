import { createOptionalContext, RaikouSize } from '../../core';

interface RadioGroupContextValue {
  size: RaikouSize | undefined;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  name: string;
}

export const [RadioGroupProvider, useRadioGroupContext] =
  createOptionalContext<RadioGroupContextValue>();
