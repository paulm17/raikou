import React from "react";
import { InlineStyles, useRaikouTheme } from "@raikou/core";
import type { AppShellProps } from "../AppShell";
import { getVariables } from "./get-variables/get-variables";

interface AppShellMediaStylesProps {
  navbar: AppShellProps["navbar"] | undefined;
  header: AppShellProps["header"] | undefined;
  aside: AppShellProps["aside"] | undefined;
  footer: AppShellProps["footer"] | undefined;
  padding: AppShellProps["padding"] | undefined;
}

export function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding,
}: AppShellMediaStylesProps) {
  const theme = useRaikouTheme();
  // const ctx = useRaikouContext();
  const { media, baseStyles } = getVariables({
    navbar,
    header,
    footer,
    aside,
    padding,
    theme,
  });
  return <InlineStyles media={media} styles={baseStyles} selector=":root" />;
}
