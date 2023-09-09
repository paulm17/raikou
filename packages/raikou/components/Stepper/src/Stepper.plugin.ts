import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".stepper-root": {
      "--stepper-icon-size-xs": rem("34px"),
      "--stepper-icon-size-sm": rem("36px"),
      "--stepper-icon-size-md": rem("42px"),
      "--stepper-icon-size-lg": rem("48px"),
      "--stepper-icon-size-xl": rem("52px"),
    },

    ".stepper-steps": {
      display: "flex",
      flexWrap: "var(--_steps-wrap, nowrap)",
      gap: "var(--_steps-gap)",
      alignItems: "var(--_steps-align-items, center)",
      flexDirection: "var(--_steps-direction)",

      "&[data-wrap]": {
        "--_steps-wrap": "wrap",
        "--_steps-gap": "var(--raikou-spacing-md) 0",
      },

      '&[data-orientation="vertical"]': {
        "--_steps-direction": "column",

        '&[data-icon-position="left"]': {
          "--_steps-align-items": "flex-start",
        },

        '&[data-icon-position="right"]': {
          "--_steps-align-items": "flex-end",
        },
      },

      '&[data-orientation="horizontal"]': {
        "--_steps-direction": "row",
      },
    },

    ".stepper-separator": {
      "--_separator-offset": "calc(var(--stepper-icon-size) / 2 - rem(1px))",

      transition: "background-color 150ms ease",
      flex: "1",
      height: "var(--_separator-height)",
      width: "var(--_separator-width)",
      marginLeft: "var(--_separator-ml)",
      marginRight: "var(--_separator-mr)",
      marginTop: "var(--_separator-mt)",
      marginBottom: "var(--_separator-mb)",
      backgroundColor: "var(--_separator-bg)",

      '[data-raikou-color-scheme="light"] &': {
        "--_separator-bg": "var(--raikou-stepper-separator-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_separator-bg": "var(--raikou-stepper-separator-bg)",
      },

      "&[data-active]": {
        "--_separator-bg": "var(--stepper-color)",
      },

      '&[data-orientation="horizontal"]': {
        "--_separator-height": rem("2px"),
        "--_separator-ml": "var(--raikou-spacing-md)",
        "--_separator-mr": "var(--raikou-spacing-md)",
        "--_separator-mt": "0",
        "--_separator-mb": "0",
      },

      '&[data-orientation="vertical"]': {
        "--_separator-width": rem("2px"),
        "--_separator-mt": "calc(var(--raikou-spacing-xs) / 2)",
        "--_separator-mb": `calc(var(--raikou-spacing-xs) - ${rem("2px")})`,

        '&[data-icon-position="left"]': {
          "--_separator-ml": "var(--_separator-offset)",
          "--_separator-mr": "0",

          '[dir="rtl"] &': {
            "--_separator-ml": "0",
            "--_separator-mr": "var(--_separator-offset)",
          },
        },

        '&[data-icon-position="right"]': {
          "--_separator-ml": "0",
          "--_separator-mr": "var(--_separator-offset)",

          '[dir="rtl"] &': {
            "--_separator-ml": "var(--_separator-offset)",
            "--_separator-mr": "0",
          },
        },
      },
    },

    ".stepper-content": {
      paddingTop: "var(--stepper-content-padding)",
    },

    ".stepper-step": {
      "--_step-color": "var(--step-color, var(--stepper-color))",
      display: "flex",
      flexDirection: "var(--_step-direction)",
      cursor: "var(--_step-cursor, default)",

      "&[data-allow-click]": {
        "--_step-cursor": "pointer",
      },

      '&[data-icon-position="left"]': {
        "--_step-direction": "row",
      },

      '&[data-icon-position="right"]': {
        "--_step-direction": "row-reverse",
      },
    },

    '[data-orientation="horizontal"] .stepper-step': {
      flexDirection: "var(--_step-direction)",
      alignItems: "center",
    },

    '[data-orientation="vertical"] .stepper-step': {
      "--_separator-spacing": "calc(var(--raikou-spacing-xs) / 2)",

      justifyContent: "flex-start",
      minHeight:
        "calc(var(--stepper-icon-size) + var(--raikou-spacing-xl) + var(--_separator-spacing))",
      marginTop: "var(--_step-mt, var(--_separator-spacing))",
      overflow: "hidden",

      "&:first-of-type": {
        "--_step-mt": "0",
      },

      "&:last-of-type .stepper-verticalSeparator": {
        display: "none",
      },
    },

    ".stepper-stepWrapper": {
      position: "relative",
    },

    ".stepper-verticalSeparator": {
      top: "calc(var(--stepper-icon-size) + var(--_separator-spacing))",
      left: "calc(var(--stepper-icon-size) / 2)",
      height: "100vh",
      position: "absolute",
      borderLeft: `${rem("2px")} solid var(--_separator-border-color)`,

      '[data-raikou-color-scheme="light"] &': {
        "--_separator-border-color":
          "var(--raikou-stepper-separator-border-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_separator-border-color":
          "var(--raikou-stepper-separator-border-color)",
      },

      "[data-raikou-color-scheme] &[data-active]": {
        "--_separator-border-color": "var(--stepper-color)",
      },
    },

    ".stepper-stepIcon": {
      height: "var(--stepper-icon-size)",
      width: "var(--stepper-icon-size)",
      minHeight: "var(--stepper-icon-size)",
      minWidth: "var(--stepper-icon-size)",
      borderRadius: "var(--stepper-radius)",
      fontSize: "var(--stepper-fz)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      fontWeight: "bold",
      transition: "background-color 150ms ease, border-color 150ms ease",
      backgroundColor: "var(--_step-icon-bg)",
      border: `${rem("2px")} solid var(--_step-icon-border-color)`,
      color: "var(--_step-icon-color)",

      '[data-raikou-color-scheme="light"] &': {
        "--_step-icon-bg": "var(--raikou-stepper-step-icon-bg)",
        "--_step-icon-border-color":
          "var(--raikou-stepper-step-icon-border-color)",
        "--_step-icon-color": "var(--raikou-stepper-step-icon-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_step-icon-bg": "var(--raikou-stepper-step-icon-bg)",
        "--_step-icon-border-color":
          "var(--raikou-stepper-step-icon-border-color)",
        "--_step-icon-color": "var(--raikou-stepper-step-icon-color)",
      },

      "[data-raikou-color-scheme] &[data-progress]": {
        "--_step-icon-border-color": "var(--_step-color)",
      },

      "[data-raikou-color-scheme] &[data-completed]": {
        "--_step-icon-color": "var(--raikou-color-white)",
        "--_step-icon-bg": "var(--_step-color)",
        "--_step-icon-border-color": "var(--_step-color)",
      },
    },

    ".stepper-stepCompletedIcon": {
      position: "absolute",
      inset: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--raikou-color-white)",
    },

    ".stepper-stepBody": {
      display: "flex",
      flexDirection: "column",
      marginLeft: "var(--_step-body-ml)",
      marginRight: "var(--_step-body-mr)",
      marginTop: "var(--_step-body-mt)",
      textAlign: "var(--_step-body-ta)",

      '&[data-icon-position="left"]': {
        "--_step-body-ta": "left",
        "--_step-body-ml": "var(--raikou-spacing-sm)",

        '[dir="rtl"] &': {
          "--_step-body-ta": "right",
          "--_step-body-ml": "0",
          "--_step-body-mr": "var(--raikou-spacing-sm)",
        },
      },

      '&[data-icon-position="right"]': {
        "--_step-body-ta": "right",
        "--_step-body-mr": "var(--raikou-spacing-sm)",

        '[dir="rtl"] &': {
          "--_step-body-ta": "left",
          "--_step-body-ml": "var(--raikou-spacing-sm)",
          "--_step-body-mr": "0",
        },
      },
    },

    ".stepper-stepLabel": {
      fontWeight: "500",
      fontSize: "var(--stepper-fz)",
      lineHeight: "1",
    },

    ".stepper-stepDescription": {
      marginTop: "calc(var(--stepper-spacing) / 3)",
      marginBottom: "calc(var(--stepper-spacing) / 3)",
      fontSize: "calc(var(--stepper-fz) - rem(2px))",
      lineHeight: "1",
      color: "var(--raikou-color-dimmed)",
    },
  });
};
