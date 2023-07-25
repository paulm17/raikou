import type { RaikouColorScheme } from "../theme.types";
import type { RaikouColorSchemeManager } from "./types";
import { isRaikouColorScheme } from "./is-raikou-color-scheme";

export interface LocalStorageColorSchemeManagerOptions {
  /** Local storage key used to retrieve value with `localStorage.getItem(key)`, `raikou-color-scheme` by default */
  key?: string;
}

export function localStorageColorSchemeManager({
  key = "raikou-color-scheme",
}: LocalStorageColorSchemeManagerOptions = {}): RaikouColorSchemeManager {
  let handleStorageEvent: (event: StorageEvent) => void;

  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }

      try {
        return (
          (window.localStorage.getItem(key) as RaikouColorScheme) ||
          defaultValue
        );
      } catch {
        return defaultValue;
      }
    },

    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          "[@raikou/core] Local storage color scheme manager was unable to save color scheme.",
          error
        );
      }
    },

    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isRaikouColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };

      window.addEventListener("storage", handleStorageEvent);
    },

    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },

    clear: () => {
      window.localStorage.removeItem(key);
    },
  };
}
