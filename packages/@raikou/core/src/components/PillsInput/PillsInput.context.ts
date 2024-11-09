import { createOptionalContext, RaikouSize } from '../../core';
import { InputVariant } from '../Input';

export interface PillsInputContextValue {
  fieldRef: React.MutableRefObject<HTMLInputElement | undefined>;
  size: RaikouSize | (string & {});
  disabled: boolean | undefined;
  hasError: boolean | undefined;
  variant: InputVariant | (string & {}) | undefined;
}

export const [PillsInputProvider, usePillsInputContext] =
  createOptionalContext<PillsInputContextValue>();
