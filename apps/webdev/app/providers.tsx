"use client";

import { ThemeProvider } from "@raikou/color-scheme";

export function Providers({ theme, children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
