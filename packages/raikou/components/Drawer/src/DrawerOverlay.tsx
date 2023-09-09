import React from "react";
import {
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
} from "@raikou/core";
import { ModalBaseOverlay, ModalBaseOverlayProps } from "../../ModalBase/src";
import { useDrawerContext } from "./Drawer.context";

export type DrawerOverlayStylesNames = "overlay";

export interface DrawerOverlayProps
  extends ModalBaseOverlayProps,
    CompoundStylesApiProps<DrawerOverlayFactory> {}

export type DrawerOverlayFactory = Factory<{
  props: DrawerOverlayProps;
  ref: HTMLDivElement;
  stylesNames: DrawerOverlayStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerOverlayProps> = {};

export const DrawerOverlay = factory<DrawerOverlayFactory>((_props, ref) => {
  const props = useProps("DrawerOverlay", defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseOverlay
      ref={ref}
      {...ctx.getStyles("overlay", { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerOverlay.displayName = "@raikou/core/DrawerOverlay";
