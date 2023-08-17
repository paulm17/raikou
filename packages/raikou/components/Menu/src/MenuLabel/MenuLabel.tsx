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

export type MenuLabelStylesNames = "label";

export interface MenuLabelProps
  extends BoxProps,
    StylesApiProps<MenuLabelFactory>,
    ElementProps<"div"> {}

export type MenuLabelFactory = Factory<{
  props: MenuLabelProps;
  ref: HTMLDivElement;
  stylesNames: MenuLabelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<MenuLabelProps> = {};

export const MenuLabel = factory<MenuLabelFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, ...others } =
    useProps("MenuLabel", defaultProps, props);
  const ctx = useMenuContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles("label", { className, style, styles, classNames })}
      {...others}
    />
  );
});

MenuLabel.displayName = "@raikou/core/MenuLabel";
