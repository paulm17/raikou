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
  RaikouSpacing,
  getDefaultZIndex,
} from "@raikou/core";
import { AppShellNavbar } from "./AppShellNavbar/AppShellNavbar";
import { AppShellHeader } from "./AppShellHeader/AppShellHeader";
import { AppShellFooter } from "./AppShellFooter/AppShellFooter";
import { AppShellAside } from "./AppShellAside/AppShellAside";
import { AppShellMain } from "./AppShellMain/AppShellMain";
import { AppShellSection } from "./AppShellSection/AppShellSection";
import { AppShellMediaStyles } from "./AppShellMediaStyles/AppShellMediaStyles";
import {
  AppShellAsideConfiguration,
  AppShellHeaderConfiguration,
  AppShellNavbarConfiguration,
  AppShellFooterConfiguration,
  AppShellResponsiveSize,
} from "./AppShell.types";
import { useStore } from "./store";
import classes from "./AppShell.module.css";

export type AppShellStylesNames =
  | "root"
  | "navbar"
  | "main"
  | "header"
  | "footer"
  | "aside"
  | "section";

export type AppShellCssVariables = {
  root:
    | "--app-shell-transition-duration"
    | "--app-shell-transition-timing-function";
};

export interface AppShellProps
  extends BoxProps,
    StylesApiProps<AppShellFactory>,
    ElementProps<"div"> {
  /** Determines whether associated components should have a border, `true` by default */
  withBorder?: boolean;

  /** Controls padding of the main section, `0` by default. !important!: use `padding` prop instead of `p`. */
  padding?: RaikouSpacing | AppShellResponsiveSize;

  /** AppShell.Navbar configuration, controls width, breakpoints and collapsed state. Required if you use AppShell.Navbar component. */
  navbar?: AppShellNavbarConfiguration;

  /** AppShell.Aside configuration, controls width, breakpoints and collapsed state. Required if you use AppShell.Aside component. */
  aside?: AppShellAsideConfiguration;

  /** AppShell.Header configuration, controls height, offset and collapsed state. Required if you use AppShell.Header component. */
  header?: AppShellHeaderConfiguration;

  /** AppShell.Footer configuration, controls height, offset and collapsed state. Required if you use AppShell.Footer component. */
  footer?: AppShellFooterConfiguration;

  /** Duration of all transitions in ms, `200` by default */
  transitionDuration?: number;

  /** Timing function of all transitions, `ease` by default */
  transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];

  /** `z-index` of all associated elements, `200` by default */
  zIndex?: React.CSSProperties["zIndex"];

  /** Determines how Navbar/Aside are arranged relative to Header/Footer, `default` by default */
  layout?: "default" | "alt";

  /** If set, Navbar, Aside, Header and Footer components be hidden */
  disabled?: boolean;

  /** Determines whether Header and Footer components should include styles to offset scrollbars. Based on `react-remove-scroll`. `true` by default */
  offsetScrollbars?: boolean;
}

export type AppShellFactory = Factory<{
  props: AppShellProps;
  ref: HTMLDivElement;
  stylesNames: AppShellStylesNames;
  vars: AppShellCssVariables;
  staticComponents: {
    Navbar: typeof AppShellNavbar;
    Header: typeof AppShellHeader;
    Main: typeof AppShellMain;
    Aside: typeof AppShellAside;
    Footer: typeof AppShellFooter;
    Section: typeof AppShellSection;
  };
}>;

const defaultProps: Partial<AppShellProps> = {
  withBorder: true,
  offsetScrollbars: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  zIndex: getDefaultZIndex("app"),
};

const varsResolver = createVarsResolver<AppShellFactory>(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--app-shell-transition-duration": `${transitionDuration}ms`,
      "--app-shell-transition-timing-function": transitionTimingFunction,
    },
  }),
);

export const AppShell = factory<AppShellFactory>((_props, ref) => {
  const props = useProps("AppShell", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    layout,
    disabled,
    aside,
    footer,
    offsetScrollbars,
    ...others
  } = props;

  const getStyles = useStyles<AppShellFactory>({
    name: "AppShell",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  useStore.update((state) => {
    state.getStyles = getStyles;
    state.withBorder = withBorder;
    state.zIndex = zIndex;
    state.disabled = disabled;
    state.offsetScrollbars = offsetScrollbars;
  });

  return (
    <>
      <div id="appshell-style">
        <AppShellMediaStyles
          navbar={navbar}
          header={header}
          aside={aside}
          footer={footer}
          padding={padding}
        />
      </div>
      <Box
        ref={ref}
        {...getStyles("root")}
        mod={{ layout, disabled }}
        {...others}
      />
    </>
  );
});

AppShell.displayName = "@raikou/core/AppShell";
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;
AppShell.classes = classes;
