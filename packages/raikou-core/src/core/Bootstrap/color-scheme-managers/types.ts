import type { RaikouColorScheme } from '../theme.types';

export interface RaikouColorSchemeManager {
  /** Function to retrieve color scheme value from external storage, for example window.localStorage */
  get(defaultValue: RaikouColorScheme): RaikouColorScheme;

  /** Function to set color scheme value in external storage, for example window.localStorage */
  set(value: RaikouColorScheme): void;

  /** Function to subscribe to color scheme changes triggered by external events */
  subscribe(onUpdate: (colorScheme: RaikouColorScheme) => void): void;

  /** Function to unsubscribe from color scheme changes triggered by external events */
  unsubscribe(): void;

  /** Function to clear value from external storage */
  clear(): void;
}
