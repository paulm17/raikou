import { colorsTuple } from '../../color-functions';
import { RaikouColor, RaikouColorsTuple } from '../../theme.types';

interface VirtualColorInput {
  dark: RaikouColor;
  light: RaikouColor;
  name: string;
}

type VirtualColor = RaikouColorsTuple & {
  'raikou-virtual-color': true;
  name: string;
  dark: RaikouColor;
  light: RaikouColor;
};

export function virtualColor(input: VirtualColorInput): RaikouColorsTuple {
  const result = colorsTuple(
    Array.from({ length: 10 }).map((_, i) => `var(--raikou-color-${input.name}-${i})`)
  );

  Object.defineProperty(result, 'raikou-virtual-color', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: true,
  });

  Object.defineProperty(result, 'dark', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.dark,
  });

  Object.defineProperty(result, 'light', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.light,
  });

  Object.defineProperty(result, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.name,
  });

  return result;
}

export function isVirtualColor(value: unknown): value is VirtualColor {
  return !!value && typeof value === 'object' && 'raikou-virtual-color' in value;
}
