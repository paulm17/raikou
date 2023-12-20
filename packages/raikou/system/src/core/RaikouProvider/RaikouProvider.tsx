import React from "react";
import { ThemeProvider } from "next-themes";
import { suppressNextjsWarning } from "./suppress-nextjs-warning";
import type { RaikouColorScheme } from "./theme.types";
import { RaikouThemeOverride } from "../../../../core/src";

export interface RaikouProviderProps {
  /** Theme override object */
  theme?: RaikouThemeOverride;

  /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `auto` by default */
  defaultColorScheme?: RaikouColorScheme;

  /** Store theme in local storage */
  themeStorageKey?: string;

  /** Your application */
  children?: React.ReactNode;
}

suppressNextjsWarning();

export function RaikouProvider({
  theme,
  defaultColorScheme,
  themeStorageKey = "raikou-color-scheme",
  children,
}: RaikouProviderProps) {
  // set client state
  if (typeof window !== "undefined") {
    (window as any)["raikou_theme"] = theme;
  }

  return (
    <ThemeProvider
      storageKey={themeStorageKey}
      themes={["light", "dark"]}
      attribute={`data-${themeStorageKey}`}
      enableColorScheme={false}
      forcedTheme={defaultColorScheme ? defaultColorScheme : undefined}
    >
      {children}
    </ThemeProvider>
  );
}
