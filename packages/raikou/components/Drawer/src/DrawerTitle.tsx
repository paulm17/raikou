import React from "react";
import {
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
} from "@raikou/core";
import { ModalBaseTitle, ModalBaseTitleProps } from "../../ModalBase/src";
import { useDrawerContext } from "./Drawer.context";

export type DrawerTitleStylesNames = "title";

export interface DrawerTitleProps
  extends ModalBaseTitleProps,
    CompoundStylesApiProps<DrawerTitleFactory> {}

export type DrawerTitleFactory = Factory<{
  props: DrawerTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: DrawerTitleStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerTitleProps> = {};

export const DrawerTitle = factory<DrawerTitleFactory>((_props, ref) => {
  const props = useProps("DrawerTitle", defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseTitle
      ref={ref}
      {...ctx.getStyles("title", { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerTitle.displayName = "@raikou/core/DrawerTitle";
