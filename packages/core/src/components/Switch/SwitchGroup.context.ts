import { createContext, useContext } from 'react';
import { RaikouSize } from '../../core';

interface SwitchGroupContextValue {
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size: RaikouSize | (string & {}) | undefined;
}

const SwitchGroupContext = createContext<SwitchGroupContextValue | null>(null);
export const SwitchGroupProvider = SwitchGroupContext.Provider;
export const useSwitchGroupContext = () => useContext(SwitchGroupContext);
