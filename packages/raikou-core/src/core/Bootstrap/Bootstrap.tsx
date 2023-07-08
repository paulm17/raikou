import "./styles/css-reset.css";
import "./styles/global-styles.css";
import "./styles/default-css-variables.css";
import React from "react";
import { suppressNextjsWarning } from "./suppress-nextjs-warning";
import { RaikouCssVariables, CSSVariablesResolver } from "./RaikouCssVariables";
import type { RaikouColorScheme, RaikouThemeOverride } from "./theme.types";
import {
  localStorageColorSchemeManager,
  RaikouColorSchemeManager,
} from "./color-scheme-managers";
import { mergeRaikouTheme } from "./merge-raikou-theme";
import { DEFAULT_THEME } from "./default-theme";

export interface BootstrapProps {
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

  /** A prefix for components static classes (for example {selector}-Text-root), `raikou` by default */
  classNamesPrefix?: string;

  /** Function to generate nonce attribute added to all generated `<style />` tags */
  getStyleNonce?(): string;

  /** Function to generate CSS variables based on theme object */
  cssVariablesResolver?: CSSVariablesResolver;

  /** Your application */
  children?: React.ReactNode;
}

export function Bootstrap({
  theme,
  children,
  getStyleNonce,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "raikou",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "auto",
  getRootElement = undefined,
  cssVariablesResolver,
}: BootstrapProps) {
  const mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);

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
