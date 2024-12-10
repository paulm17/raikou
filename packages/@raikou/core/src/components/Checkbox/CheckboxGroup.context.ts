import { createContext, useContext } from 'react';
import { RaikouSize } from '../../core';

interface CheckboxGroupContextValue {
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  size: RaikouSize | (string & {}) | undefined;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);
export const CheckboxGroupProvider = CheckboxGroupContext.Provider;
export const useCheckboxGroupContext = () => useContext(CheckboxGroupContext);
