import { createOptionalContext, RaikouSize } from '../../core';

export interface PillGroupContextValue {
  size: RaikouSize | (string & {}) | undefined;
  disabled: boolean | undefined;
}

export const [PillGroupProvider, usePillGroupContext] =
  createOptionalContext<PillGroupContextValue>();
