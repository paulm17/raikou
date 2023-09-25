import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".appshell-root": {
      "&[data-resizing]": {
        "--app-shell-transition-duration": "0ms !important",
      },

      "&[data-disabled]": {
        "--app-shell-header-offset": "0px !important",
        "--app-shell-navbar-offset": "0px !important",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_app-shell-border-color": "var(--raikou-app-shell-border-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_app-shell-border-color": "var(--raikou-app-shell-border-color)",
      },
    },

    ".appshell-navbar, .appshell-aside, .appshell-header, .appshell-main, .appshell-footer":
      {
        "transition-duration": "var(--app-shell-transition-duration)",
        "transition-timing-function":
          "var(--app-shell-transition-timing-function)",
      },

    ".appshell-navbar, .appshell-aside": {
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      top: "var(--_section-top, var(--app-shell-header-offset, 0px))",
      height:
        "var(--_section-height, calc(100dvh - var(--app-shell-header-offset, 0px) - var(--app-shell-footer-offset, 0px)))",
      backgroundColor: "var(--raikou-color-body)",
      transitionProperty: "transform, top, height",

      '[data-layout="alt"] &': {
        "--_section-top": "0px",
        "--_section-height": "100dvh",
      },
    },

    ".appshell-navbar": {
      left: "var(--_navbar-left, 0px)",
      right: "var(--_navbar-right)",
      width: "var(--app-shell-navbar-width)",
      borderRight: "var(--_navbar-border-right)",
      borderLeft: "var(--_navbar-border-left)",
      transitionProperty: "transform, top, height",
      transform: "var(--_navbar-transform, var(--app-shell-navbar-transform))",
      zIndex: "var(--app-shell-navbar-z-index)",

      "&[data-with-border]": {
        "--_navbar-border-right": `${rem(
          "1px",
        )} solid var(--_app-shell-border-color)`,

        '[dir="rtl"] &': {
          "--_navbar-border-right": "none",
          "--_navbar-border-left": `${rem(
            "1px",
          )} solid var(--_app-shell-border-color)`,
        },
      },

      '[dir="rtl"] &': {
        "--_navbar-left": "auto",
        "--_navbar-right": "0px",
        "--_navbar-transform": "var(--app-shell-navbar-transform-rtl)",
      },
    },

    ".appshell-aside": {
      left: "var(--_aside-left)",
      right: "var(--_aside-right, 0px)",
      width: "var(--app-shell-aside-width)",
      borderRight: "var(--_aside-border-right)",
      borderLeft: "var(--_aside-border-left)",
      transform: "var(--_aside-transform, var(--app-shell-aside-transform))",
      zIndex: "var(--app-shell-aside-z-index)",

      "&[data-with-border]": {
        "--_aside-border-left": `${rem(
          "1px",
        )} solid var(--_app-shell-border-color)`,

        '[dir="rtl"] &': {
          "--_aside-border-left": "none",
          "--_aside-border-right": `${rem(
            "1px",
          )} solid var(--_app-shell-border-color)`,
        },
      },

      '[dir="rtl"] &': {
        "--_aside-left": "0px",
        "--_aside-right": "auto",
        "--_aside-transform": "var(--app-shell-aside-transform-rtl)",
      },
    },

    ".appshell-main": {
      paddingLeft:
        "var(--_main-padding-left, calc(var(--app-shell-navbar-offset, 0px) + var(--app-shell-padding)))",
      paddingRight:
        "var(--_main-padding-right, calc(var(--app-shell-aside-offset, 0px) + var(--app-shell-padding)))",
      paddingTop:
        "calc(var(--app-shell-header-offset, 0px) + var(--app-shell-padding))",
      paddingBottom:
        "calc(var(--app-shell-footer-offset, 0px) + var(--app-shell-padding))",
      minHeight: "100dvh",
      transitionProperty: "padding",

      '[dir="rtl"] &': {
        "--_main-padding-left":
          "calc(var(--app-shell-aside-offset, 0px) + var(--app-shell-padding))",
        "--_main-padding-right":
          "calc(var(--app-shell-navbar-offset, 0px) + var(--app-shell-padding))",
      },
    },

    ".appshell-header, .appshell-footer": {
      position: "fixed",
      left: "var(--_section-left, 0px)",
      right: "var(--_section-right, 0px)",
      transitionProperty: "transform, left, right",
      backgroundColor: "var(--raikou-color-body)",

      '[data-layout="alt"] &': {
        "--_section-left": "var(--app-shell-navbar-offset, 0px)",

        '[dir="rtl"] &': {
          "--_section-right": "var(--app-shell-navbar-offset, 0px)",
          "--_section-left": "0px",
        },
      },
    },

    ".appshell-header": {
      top: "0",
      height: "var(--app-shell-header-height)",
      backgroundColor: "var(--raikou-color-body)",
      borderBottom: "var(--_header-border-bottom)",
      transform: "var(--app-shell-header-transform)",
      zIndex: "var(--app-shell-header-z-index)",

      "&[data-with-border]": {
        "--_header-border-bottom": `${rem(
          "1px",
        )} solid var(--_app-shell-border-color)`,
      },
    },

    ".appshell-footer": {
      bottom: "0",
      height: "var(--app-shell-footer-height)",
      borderTop: "var(--_footer-border-top)",
      transform: "var(--app-shell-footer-transform)",
      zIndex: "var(--app-shell-footer-z-index)",

      "&[data-with-border]": {
        "--_footer-border-top": `${rem(
          "1px",
        )} solid var(--_app-shell-border-color)`,
      },
    },

    ".appshell-section": {
      flexGrow: "var(--_section-grow, 0)",

      "&[data-grow]": {
        "--_section-grow": "1",
      },
    },
  });
};
