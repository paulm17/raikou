import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  PolymorphicFactory,
} from "@raikou/core";
import { useStore } from "../store";

export type AppShellSectionStylesNames = "section";

export interface AppShellSectionProps
  extends BoxProps,
    StylesApiProps<AppShellSectionFactory> {
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
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      grow,
      ...others
    } = props;
    const ctx = useStore.getState();

    return (
      <Box
        ref={ref}
        mod={{ grow }}
        {...ctx.getStyles("section", { className, style, classNames, styles })}
        {...others}
      />
    );
  },
);

AppShellSection.displayName = "@raikou/core/AppShellSection";
