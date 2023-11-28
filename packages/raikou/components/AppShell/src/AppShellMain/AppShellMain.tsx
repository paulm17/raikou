import React from "react";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { useStore } from "../store";
import classes from "../AppShell.module.css";

export type AppShellMainStylesNames = "main";

export interface AppShellMainProps
  extends BoxProps,
    CompoundStylesApiProps<AppShellMainFactory>,
    ElementProps<"main"> {}

export type AppShellMainFactory = Factory<{
  props: AppShellMainProps;
  ref: HTMLElement;
  stylesNames: AppShellMainStylesNames;
  compound: true;
}>;

const defaultProps: Partial<AppShellMainProps> = {};

export const AppShellMain = factory<AppShellMainFactory>((_props, ref) => {
  const props = useProps("AppShellMain", defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useStore.getState();

  return (
    <Box
      component="main"
      ref={ref}
      {...ctx.getStyles("main", { className, style, classNames, styles })}
      {...others}
    />
  );
});

AppShellMain.displayName = "@raikou/core/AppShellMain";
AppShellMain.classes = classes;
