import "./global.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import { suppressNextjsWarning } from "./suppress-nextjs-warning";
import { RaikouCssVariables, CSSVariablesResolver } from "./RaikouCssVariables";
import type { RaikouColorScheme, RaikouThemeOverride } from "./theme.types";
import { RaikouClasses } from "./RaikouClasses";
import { mergeRaikouTheme } from "./merge-raikou-theme";
import { DEFAULT_THEME } from "./default-theme";

export interface RaikouProviderProps {
  /** Theme override object */
  theme?: RaikouThemeOverride;

  /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `auto` by default */
  defaultColorScheme?: RaikouColorScheme;

  /** CSS selector to which CSS variables should be added, `:root` by default */
  cssVariablesSelector?: string;

  /** Determines whether theme CSS variables should be added to given `cssVariablesSelector`, `true` by default */
  withCssVariables?: boolean;

  /** Function to generate nonce attribute added to all generated `<style />` tags */
  getStyleNonce?(): string;

  /** Function to generate CSS variables based on theme object */
  cssVariablesResolver?: CSSVariablesResolver;

  /** Store theme in local storage */
  themeStorageKey?: string;

  /** All the available themes */
  themeNames?: string[];

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
  cssVariablesResolver,
  themeStorageKey = "raikou-color-scheme",
  themeNames = ["light", "dark"],
}: RaikouProviderProps) {
  let mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);

  if (typeof window !== "undefined") {
    (window as any)["raikou_theme"] = theme;
  }

  // don't include system, next-theme already includes it
  const defaultThemes = ["light", "dark"];
  const mergeThemes = [...themeNames, ...defaultThemes];
  const allThemeNames = Array.from(new Set(mergeThemes));

  return (
    <ThemeProvider
      storageKey={themeStorageKey}
      themes={allThemeNames}
      attribute="data-raikou-color-scheme"
      enableColorScheme={false}
    >
      {withCssVariables && (
        <RaikouCssVariables
          theme={mergedTheme}
          cssVariablesSelector={cssVariablesSelector}
          getStyleNonce={getStyleNonce}
          cssVariablesResolver={cssVariablesResolver}
        />
      )}
      <RaikouClasses theme={mergedTheme} nonce={getStyleNonce} />
      {children}
    </ThemeProvider>
  );
}
