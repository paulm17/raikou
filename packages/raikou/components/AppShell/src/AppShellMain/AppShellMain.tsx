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

export type AppShellMainStylesNames = "main";

export interface AppShellMainProps
  extends BoxProps,
    StylesApiProps<AppShellMainFactory>,
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
  const { classNames, className, style, styles, unstyled, vars, ...others } =
    props;
  const ctx = useAppShellContext();

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
