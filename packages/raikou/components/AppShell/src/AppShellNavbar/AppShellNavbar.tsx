import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { useStore } from "../store";

export type AppShellNavbarStylesNames = "navbar";

export interface AppShellNavbarProps
  extends BoxProps,
    StylesApiProps<AppShellNavbarFactory>,
    ElementProps<"div"> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Component `z-index`, by default inherited from the `AppShell` */
  zIndex?: React.CSSProperties["zIndex"];
}

export type AppShellNavbarFactory = Factory<{
  props: AppShellNavbarProps;
  ref: HTMLElement;
  stylesNames: AppShellNavbarStylesNames;
}>;

const defaultProps: Partial<AppShellNavbarProps> = {};

export const AppShellNavbar = factory<AppShellNavbarFactory>((_props, ref) => {
  const props = useProps("AppShellNavbar", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    ...others
  } = props;
  const ctx = useStore.getState();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="nav"
      ref={ref}
      mod={{ "with-border": withBorder ?? ctx.withBorder }}
      {...ctx.getStyles("navbar", { className, classNames, styles, style })}
      {...others}
      __vars={{
        "--app-shell-navbar-z-index": `calc(${zIndex ?? ctx.zIndex} + 1)`,
      }}
    />
  );
});

AppShellNavbar.displayName = "@raikou/core/AppShellNavbar";
