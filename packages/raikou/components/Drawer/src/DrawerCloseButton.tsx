import React from "react";
import { StylesApiProps, factory, useProps, Factory } from "@raikou/core";
import {
  ModalBaseCloseButton,
  ModalBaseCloseButtonProps,
} from "../../ModalBase/src";
import { useDrawerContext } from "./Drawer.context";

export type DrawerCloseButtonStylesNames = "close";

export interface DrawerCloseButtonProps
  extends ModalBaseCloseButtonProps,
    StylesApiProps<DrawerCloseButtonFactory> {}

export type DrawerCloseButtonFactory = Factory<{
  props: DrawerCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: DrawerCloseButtonStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerCloseButtonProps> = {};

export const DrawerCloseButton = factory<DrawerCloseButtonFactory>(
  (_props, ref) => {
    const props = useProps("DrawerCloseButton", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, ...others } =
      props;

    const ctx = useDrawerContext();

    return (
      <ModalBaseCloseButton
        ref={ref}
        {...ctx.getStyles("close", { classNames, style, styles, className })}
        {...others}
      />
    );
  }
);

DrawerCloseButton.displayName = "@raikou/core/DrawerCloseButton";
