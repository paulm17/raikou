import type { RaikouColorScheme } from '../theme.types';

export function isRaikouColorScheme(value: unknown): value is RaikouColorScheme {
  return value === 'auto' || value === 'dark' || value === 'light';
}
