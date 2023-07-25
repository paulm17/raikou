import "./global.css";
import React from "react";
import { suppressNextjsWarning } from "./suppress-nextjs-warning";
import { RaikouCssVariables, CSSVariablesResolver } from "./RaikouCssVariables";
import type { RaikouColorScheme, RaikouThemeOverride } from "./theme.types";
import {
  localStorageColorSchemeManager,
  RaikouColorSchemeManager,
} from "./color-scheme-managers";
import { useProviderColorScheme } from "./use-raikou-color-scheme";
import { mergeRaikouTheme } from "./merge-raikou-theme";
import { DEFAULT_THEME } from "./default-theme";

export interface RaikouProviderProps {
  /** Theme override object */
  theme?: RaikouThemeOverride;

  /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
  colorSchemeManager?: RaikouColorSchemeManager;

  /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `auto` by default */
  defaultColorScheme?: RaikouColorScheme;

  /** CSS selector to which CSS variables should be added, `:root` by default */
  cssVariablesSelector?: string;

  /** Determines whether theme CSS variables should be added to given `cssVariablesSelector`, `true` by default */
  withCssVariables?: boolean;

  /** Function to resolve root element to set `data-raikou-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  getRootElement?(): HTMLElement | undefined;

  /** Function to generate nonce attribute added to all generated `<style />` tags */
  getStyleNonce?(): string;

  /** Function to generate CSS variables based on theme object */
  cssVariablesResolver?: CSSVariablesResolver;

  /** Your application */
  children?: React.ReactNode;
}

suppressNextjsWarning();

export function RaikouProvider({
  theme,
  children,
  getStyleNonce,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "auto",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
}: RaikouProviderProps) {
  useProviderColorScheme({
    defaultColorScheme,
    manager: colorSchemeManager,
    getRootElement,
  });

  let mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);

  if (typeof window !== "undefined") {
    if (theme && Object.keys(theme as any).length) {
      const storage = localStorage.getItem("raikou-theme");

      if (storage === null) {
        localStorage.setItem("raikou-theme", JSON.stringify(theme));
      } else {
        const res = localStorage.getItem("raikou-theme");
        const themeStr = JSON.stringify(theme);

        if (themeStr !== res) {
          localStorage.setItem("raikou-theme", JSON.stringify(themeStr));
        }
      }
    } else {
      const storage = localStorage.getItem("raikou-theme");

      if (storage !== null) {
        localStorage.removeItem("raikou-theme");
      }
    }
  }

  return (
    <>
      {withCssVariables && (
        <RaikouCssVariables
          theme={mergedTheme}
          cssVariablesSelector={cssVariablesSelector}
          getStyleNonce={getStyleNonce}
          cssVariablesResolver={cssVariablesResolver}
        />
      )}
      {children}
    </>
  );
}
