"use client";

import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { suppressNextjsWarning } from "./suppress-nextjs-warning";
import { RaikouColorScheme } from "./theme.types";
import { RaikouThemeOverride } from "../../theme/src";

export interface RaikouProviderProps {
  theme: RaikouThemeOverride;

  /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `auto` by default */
  defaultColorScheme?: RaikouColorScheme;

  /** Store theme in local storage */
  themeStorageKey?: string;

  /** Your application */
  children?: React.ReactNode;
}

suppressNextjsWarning();

export function ThemeProvider({
  theme,
  defaultColorScheme,
  themeStorageKey = "raikou-color-scheme",
  children,
}: RaikouProviderProps) {
  if (typeof window !== "undefined") {
    (window as any)["raikou_theme"] = theme;
  }

  return (
    <NextThemeProvider
      storageKey={themeStorageKey}
      themes={["light", "dark"]}
      attribute={`data-${themeStorageKey}`}
      enableColorScheme={false}
      forcedTheme={defaultColorScheme ? defaultColorScheme : undefined}
    >
      {children}
    </NextThemeProvider>
  );
}
