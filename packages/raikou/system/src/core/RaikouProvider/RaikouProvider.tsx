import React from "react";
import { ThemeProvider } from "next-themes";
import { suppressNextjsWarning } from "./suppress-nextjs-warning";
import { RaikouCssVariables, CSSVariablesResolver } from "./RaikouCssVariables";
import type { RaikouColorScheme, RaikouThemeOverride } from "./theme.types";
import { RaikouClasses } from "./RaikouClasses";
import { mergeRaikouTheme } from "./merge-raikou-theme";
import { DEFAULT_THEME } from "./default-theme";
import useStore from "@raikou/global-store";

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
  getStyleNonce?: () => string;

  /** Function to generate CSS variables based on theme object */
  cssVariablesResolver?: CSSVariablesResolver;

  /** Store theme in local storage */
  themeStorageKey?: string;

  /** Your application */
  children?: React.ReactNode;
}

suppressNextjsWarning();

export function RaikouProvider({
  theme,
  defaultColorScheme,
  cssVariablesSelector = ":root",
  withCssVariables = true,
  getStyleNonce,
  cssVariablesResolver,
  themeStorageKey = "raikou-color-scheme",
  children,
}: RaikouProviderProps) {
  let mergedTheme = mergeRaikouTheme(DEFAULT_THEME, theme);

  // Generate default "blue" color if no primary color is provided
  if (theme === undefined || (theme && !theme.hasOwnProperty("colors"))) {
    mergedTheme.colors = {
      blue: [
        "#eef3ff",
        "#dce4f5",
        "#b9c7e2",
        "#94a8d0",
        "#748dc1",
        "#5f7cb8",
        "#5474b4",
        "#44639f",
        "#39588f",
        "#2d4b81",
      ],
    };
  }

  if (typeof window !== "undefined") {
    (window as any)["raikou_theme"] = theme;
  } else {
    useStore.setState(theme as any);
  }

  return (
    <ThemeProvider
      storageKey={themeStorageKey}
      themes={["light", "dark"]}
      attribute={`data-${themeStorageKey}`}
      enableColorScheme={false}
      forcedTheme={defaultColorScheme ? defaultColorScheme : undefined}
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
