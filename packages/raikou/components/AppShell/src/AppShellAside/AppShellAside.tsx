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

export type AppShellAsideStylesNames = "aside";

export interface AppShellAsideProps
  extends BoxProps,
    StylesApiProps<AppShellAsideFactory>,
    ElementProps<"aside"> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Component `z-index`, by default inherited from the `AppShell` */
  zIndex?: React.CSSProperties["zIndex"];
}

export type AppShellAsideFactory = Factory<{
  props: AppShellAsideProps;
  ref: HTMLElement;
  stylesNames: AppShellAsideStylesNames;
}>;

const defaultProps: Partial<AppShellAsideProps> = {};

export const AppShellAside = factory<AppShellAsideFactory>((_props, ref) => {
  const props = useProps("AppShellAside", defaultProps, _props);
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
      component="aside"
      ref={ref}
      mod={{ "with-border": withBorder ?? ctx.withBorder }}
      {...ctx.getStyles("aside", { className, classNames, styles, style })}
      {...others}
      __vars={{
        "--app-shell-aside-z-index": `calc(${zIndex ?? ctx.zIndex} + 1)`,
      }}
    />
  );
});

AppShellAside.displayName = "@raikou/core/AppShellAside";
AppShellAside.classes = classes;
