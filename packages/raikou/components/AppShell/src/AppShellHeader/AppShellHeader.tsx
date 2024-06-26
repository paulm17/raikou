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
import classes from "../AppShell.module.css";
import { RemoveScroll } from "react-remove-scroll";
import cx from "clsx";

export type AppShellHeaderStylesNames = "header";
export type AppShellHeaderVariant = string;
export type AppShellHeaderCssVariables = {
  root: "--test";
};

export interface AppShellHeaderProps
  extends BoxProps,
    StylesApiProps<AppShellHeaderFactory>,
    ElementProps<"header"> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Component `z-index`, by default inherited from the `AppShell` */
  zIndex?: React.CSSProperties["zIndex"];
}

export type AppShellHeaderFactory = Factory<{
  props: AppShellHeaderProps;
  ref: HTMLElement;
  stylesNames: AppShellHeaderStylesNames;
  vars: AppShellHeaderCssVariables;
  variant: AppShellHeaderVariant;
}>;

const defaultProps: Partial<AppShellHeaderProps> = {};

export const AppShellHeader = factory<AppShellHeaderFactory>((_props, ref) => {
  const props = useProps("AppShellHeader", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useStore.getState();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="header"
      ref={ref}
      mod={[{ "with-border": withBorder ?? ctx.withBorder }, mod]}
      {...ctx.getStyles("header", {
        className: cx(
          { [RemoveScroll.classNames.zeroRight]: ctx.offsetScrollbars },
          className,
        ),
        classNames,
        styles,
        style,
      })}
      {...others}
      __vars={{
        "--app-shell-header-z-index": (zIndex ?? ctx.zIndex)?.toString(),
      }}
    />
  );
});

AppShellHeader.displayName = "@raikou/core/AppShellHeader";
AppShellHeader.classes = classes;
