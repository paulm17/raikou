import React from "react";
import {
  StylesApiProps,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  getDefaultZIndex,
  getSize,
} from "../../core";
import { RaikouTransition } from "../Transition";
import { ModalBaseProps, ModalBase, ModalBaseStylesNames } from "../ModalBase";
import { DrawerProvider, ScrollAreaComponent } from "./Drawer.context";
// import classes from "./Drawer.module.css";

type DrawerPosition = "bottom" | "left" | "right" | "top";

export type DrawerRootStylesNames = ModalBaseStylesNames;
export type DrawerRootVariant = string;
export type DrawerRootCssVariables = {
  root:
    | "--drawer-size"
    | "--drawer-flex"
    | "--drawer-height"
    | "--drawer-align"
    | "--drawer-justify";
};

export interface DrawerRootProps
  extends StylesApiProps<DrawerRootFactory>,
    ModalBaseProps {
  /** Scroll area component, native `div` element by default */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Side of the screen on which drawer will be opened, `'left'` by default */
  position?: DrawerPosition;
}

export type DrawerRootFactory = Factory<{
  props: DrawerRootProps;
  ref: HTMLDivElement;
  stylesNames: DrawerRootStylesNames;
  vars: DrawerRootCssVariables;
  variant: DrawerRootVariant;
  compound: true;
}>;

const transitions: Record<DrawerPosition, RaikouTransition> = {
  top: "slide-down",
  bottom: "slide-up",
  left: "slide-right",
  right: "slide-left",
};

const defaultProps: Partial<DrawerRootProps> = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
  position: "left",
};

const varsResolver = createVarsResolver<DrawerRootFactory>(
  (_, { position, size }) => ({
    root: {
      "--drawer-size": getSize(size, "drawer-size"),
      "--drawer-flex":
        position === "left" || position === "right"
          ? "0 0 var(--drawer-size)"
          : "0 0 100%",
      "--drawer-height":
        position === "left" || position === "right"
          ? "100%"
          : "var(--drawer-size)",
      "--drawer-align": position === "bottom" ? "flex-end" : "flex-start",
      "--drawer-justify": position === "right" ? "flex-end" : "flex-start",
    },
  })
);

export const DrawerRoot = factory<DrawerRootFactory>((_props, ref) => {
  const props = useProps("DrawerRoot", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    scrollAreaComponent,
    position,
    transitionProps,
    ...others
  } = props;

  const getStyles = useStyles<DrawerRootFactory>({
    name: "Drawer",
    classes: {
      root: "drawer-root",
      title: "drawer-title",
      content: "drawer-content",
      overlay: "drawer-overlay",
      body: "drawer-body",
      header: "drawer-header",
      inner: "drawer-inner",
      close: "drawer-close",
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <DrawerProvider value={{ scrollAreaComponent, getStyles }}>
      <ModalBase
        ref={ref}
        {...getStyles("root")}
        transitionProps={{
          transition: transitions[position!],
          ...transitionProps,
        }}
        {...others}
      />
    </DrawerProvider>
  );
});

// DrawerRoot.classes = classes;
DrawerRoot.displayName = "@raikou/core/DrawerRoot";
