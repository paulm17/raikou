import React from "react";
import { StylesApiProps, factory, useProps, Factory } from "@raikou/core";
import {
  ModalBaseContent,
  ModalBaseContentProps,
  NativeScrollArea,
} from "../../ModalBase/src";
import { useDrawerContext } from "./Drawer.context";

export type DrawerContentStylesNames = "content" | "inner";

export interface DrawerContentProps
  extends ModalBaseContentProps,
    StylesApiProps<DrawerContentFactory> {}

export type DrawerContentFactory = Factory<{
  props: DrawerContentProps;
  ref: HTMLDivElement;
  stylesNames: DrawerContentStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerContentProps> = {};

export const DrawerContent = factory<DrawerContentFactory>((_props, ref) => {
  const props = useProps("DrawerContent", defaultProps, _props);
  const { classNames, className, style, styles, vars, children, ...others } =
    props;

  const ctx = useDrawerContext();
  const Scroll: React.FC<any> = ctx.scrollAreaComponent || NativeScrollArea;

  return (
    <ModalBaseContent
      {...ctx.getStyles("content", { className, style, styles, classNames })}
      innerProps={ctx.getStyles("inner", {
        className,
        style,
        styles,
        classNames,
      })}
      ref={ref}
      {...others}
    >
      <Scroll style={{ height: "100vh" }}>{children}</Scroll>
    </ModalBaseContent>
  );
});

DrawerContent.displayName = "@raikou/core/DrawerContent";
