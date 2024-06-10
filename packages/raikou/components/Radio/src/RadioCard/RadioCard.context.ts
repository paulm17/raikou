import { createOptionalContext } from "../../../_utils";

export interface RadioCardContextValue {
  checked: boolean;
}

export const [RadioCardProvider, useRadioCardContext] =
  createOptionalContext<RadioCardContextValue>();
