import { createSafeContext } from '../../core';
import { TransitionOverride } from '../Transition';

interface ModalBaseContextValue {
  titleMounted: boolean;
  bodyMounted: boolean;
  setTitleMounted(value: boolean): void;
  setBodyMounted(value: boolean): void;
  getTitleId(): string;
  getBodyId(): string;
  transitionProps: Partial<TransitionOverride> | undefined;
  zIndex: React.CSSProperties['zIndex'];

  opened: boolean;
  onClose(): void;

  closeOnEscape: boolean | undefined;
  trapFocus: boolean | undefined;
  closeOnClickOutside: boolean | undefined;
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContextValue>(
  'ModalBase component was not found in tree'
);
