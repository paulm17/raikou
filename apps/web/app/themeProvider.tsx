"use client";
import React, { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface themeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: themeProviderProps) {
  return (
    <NextThemeProvider attribute="data-raikou-color-scheme">
      {children}
    </NextThemeProvider>
  );
}

export default ThemeProvider;
