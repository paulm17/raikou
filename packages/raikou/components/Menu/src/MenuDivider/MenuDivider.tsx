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
import { useMenuContext } from "../Menu.context";

export type MenuDividerStylesNames = "divider";

export interface MenuDividerProps
  extends BoxProps,
    StylesApiProps<MenuDividerFactory>,
    ElementProps<"div"> {}

export type MenuDividerFactory = Factory<{
  props: MenuDividerProps;
  ref: HTMLDivElement;
  stylesNames: MenuDividerStylesNames;
  compound: true;
}>;

const defaultProps: Partial<MenuDividerProps> = {};

export const MenuDivider = factory<MenuDividerFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, ...others } =
    useProps("MenuDivider", defaultProps, props);
  const ctx = useMenuContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles("divider", { className, style, styles, classNames })}
      {...others}
    />
  );
});

MenuDivider.displayName = "@raikou/core/MenuDivider";
