import { RaikouSize } from "@raikou/core";
import { createOptionalContext } from "../../_utils";

export interface PillGroupContextValue {
  size: RaikouSize | (string & {}) | undefined;
  disabled: boolean | undefined;
}

export const [PillGroupProvider, usePillGroupContext] =
  createOptionalContext<PillGroupContextValue>();
