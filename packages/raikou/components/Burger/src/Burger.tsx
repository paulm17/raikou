import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  RaikouSize,
  RaikouColor,
  getThemeColor,
  getSize,
} from "@raikou/core";
import { UnstyledButton } from "../../UnstyledButton/src";

export type BurgerStylesNames = "root" | "burger";

export type BurgerCssVariables = {
  root:
    | "--burger-color"
    | "--burger-size"
    | "--burger-transition-duration"
    | "--burger-transition-timing-function";
};

export interface BurgerProps
  extends BoxProps,
    StylesApiProps<BurgerFactory>,
    ElementProps<"button"> {
  /** Controls burger `width` and `height`, numbers are converted to rem, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.colors` of any valid CSS value, by default `theme.white` in dark color scheme and `theme.black` in light */
  color?: RaikouColor;

  /** State of the burger, when `true` burger is transformed into X, `false` by default */
  opened?: boolean;

  /** `transition-duration` property value in ms, `300` by default */
  transitionDuration?: number;

  /** `transition-timing-function` property value, `'ease'` by default  */
  transitionTimingFunction?: string;
}

export type BurgerFactory = Factory<{
  props: BurgerProps;
  ref: HTMLButtonElement;
  stylesNames: BurgerStylesNames;
  vars: BurgerCssVariables;
}>;

const defaultProps: Partial<BurgerProps> = {
  size: "md",
  transitionDuration: 300,
  transitionTimingFunction: "ease",
};

const varsResolver = createVarsResolver<BurgerFactory>(
  (theme, { color, size, transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--burger-color": color ? getThemeColor(color, theme) : undefined,
      "--burger-size": getSize(size, "burger-size"),
      "--burger-transition-duration": `${transitionDuration}ms`,
      "--burger-transition-timing-function": transitionTimingFunction,
    },
  })
);

export const Burger = factory<BurgerFactory>((_props, ref) => {
  const props = useProps("Burger", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    children,
    transitionDuration,
    transitionTimingFunction,
    ...others
  } = props;

  const getStyles = useStyles<BurgerFactory>({
    name: "Burger",
    classes: {
      root: "burger-root",
      burger: "burger-burger",
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
    <UnstyledButton {...getStyles("root")} ref={ref} {...others}>
      <Box mod={["reduce-motion", { opened }]} {...getStyles("burger")} />
      {children}
    </UnstyledButton>
  );
});

Burger.displayName = "@raikou/core/Burger";
