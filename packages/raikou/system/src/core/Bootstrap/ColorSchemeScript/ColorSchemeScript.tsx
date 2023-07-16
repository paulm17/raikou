import React from "react";
import type { RaikouColorScheme } from "../theme.types";

export interface ColorSchemeScriptProps
  extends React.ComponentPropsWithoutRef<"script"> {
  defaultColorScheme?: RaikouColorScheme;
  localStorageKey?: string;
}

const getScript = ({
  defaultColorScheme,
  localStorageKey,
}: Pick<ColorSchemeScriptProps, "defaultColorScheme" | "localStorageKey">) => `
  try {
    var colorScheme = window.localStorage.getItem('${localStorageKey}') || '${defaultColorScheme}';
    var computedColorScheme = colorScheme !== 'auto' ? colorScheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-raikou-color-scheme', computedColorScheme);
  } catch (e) {}
`;

export function ColorSchemeScript({
  defaultColorScheme = "auto",
  localStorageKey = "raikou-color-scheme",
  ...others
}: ColorSchemeScriptProps) {
  return (
    <script
      {...others}
      data-raikou-script
      dangerouslySetInnerHTML={{
        __html: getScript({ defaultColorScheme, localStorageKey }),
      }}
    />
  );
}
