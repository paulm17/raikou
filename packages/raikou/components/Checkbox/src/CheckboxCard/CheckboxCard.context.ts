import { createOptionalContext } from "../../../_utils";

export interface CheckboxCardContextValue {
  checked: boolean;
}

export const [CheckboxCardProvider, useCheckboxCardContext] =
  createOptionalContext<CheckboxCardContextValue>();
