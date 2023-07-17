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
import { useAppShellContext } from "../AppShell.context";

export type AppShellFooterStylesNames = "footer";
export type AppShellFooterVariant = string;
export type AppShellFooterCssVariables = {
  root: "--test";
};

export interface AppShellFooterProps
  extends BoxProps,
    StylesApiProps<AppShellFooterFactory>,
    ElementProps<"footer"> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Component `z-index`, by default inherited from the `AppShell` */
  zIndex?: React.CSSProperties["zIndex"];
}

export type AppShellFooterFactory = Factory<{
  props: AppShellFooterProps;
  ref: HTMLElement;
  stylesNames: AppShellFooterStylesNames;
  vars: AppShellFooterCssVariables;
  variant: AppShellFooterVariant;
}>;

const defaultProps: Partial<AppShellFooterProps> = {};

export const AppShellFooter = factory<AppShellFooterFactory>((_props, ref) => {
  const props = useProps("AppShellFooter", defaultProps, _props);
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
  const ctx = useAppShellContext();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="footer"
      ref={ref}
      mod={{ "with-border": withBorder ?? ctx.withBorder }}
      {...ctx.getStyles("footer", { className, classNames, styles, style })}
      {...others}
      __vars={{
        "--app-shell-footer-z-index": (zIndex ?? ctx.zIndex)?.toString(),
      }}
    />
  );
});

AppShellFooter.displayName = "@raikou/core/AppShellFooter";
