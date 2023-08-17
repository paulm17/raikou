import { RaikouSize } from "@raikou/core";
import { createOptionalContext } from "../../_utils";

interface RadioGroupContextValue {
  size: RaikouSize | undefined;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  name: string;
}

export const [RadioGroupProvider, useRadioGroupContext] =
  createOptionalContext<RadioGroupContextValue>();
