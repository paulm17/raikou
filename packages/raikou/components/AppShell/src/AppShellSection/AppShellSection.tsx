import React from "react";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  polymorphicFactory,
  useProps,
  PolymorphicFactory,
} from "@raikou/core";
import { useStore } from "../store";
import classes from "../AppShell.module.css";

export type AppShellSectionStylesNames = "section";

export interface AppShellSectionProps
  extends BoxProps,
    CompoundStylesApiProps<AppShellSectionFactory> {
  /** Determines whether the section should take all available space, `false` by default */
  grow?: boolean;
}

export type AppShellSectionFactory = PolymorphicFactory<{
  props: AppShellSectionProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: AppShellSectionStylesNames;
  compound: true;
}>;

const defaultProps: Partial<AppShellSectionProps> = {};

export const AppShellSection = polymorphicFactory<AppShellSectionFactory>(
  (_props, ref) => {
    const props = useProps("AppShellSection", defaultProps, _props);
    const { classNames, className, style, styles, vars, grow, mod, ...others } =
      props;
    const ctx = useStore.getState();

    return (
      <Box
        ref={ref}
        mod={[{ grow }, mod]}
        {...ctx.getStyles("section", { className, style, classNames, styles })}
        {...others}
      />
    );
  },
);

AppShellSection.displayName = "@raikou/core/AppShellSection";
AppShellSection.classes = classes;
