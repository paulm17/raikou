import { RaikouThemeOverride } from '../theme.types';
import { deepMerge } from '../../utils';

export function mergeThemeOverrides(...overrides: RaikouThemeOverride[]): RaikouThemeOverride {
  return overrides.reduce((acc, override) => deepMerge(acc, override), {});
}
