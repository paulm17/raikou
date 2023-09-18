import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".numberInput-controls": {
      "--ni-chevron-size-xs": rem("10px"),
      "--ni-chevron-size-sm": rem("14px"),
      "--ni-chevron-size-md": rem("16px"),
      "--ni-chevron-size-lg": rem("18px"),
      "--ni-chevron-size-xl": rem("20px"),
      "--ni-chevron-size": "var(--ni-chevron-size-sm)",

      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: `calc(var(--_input-height) - ${rem("2px")})`,
      maxWidth: "calc(var(--ni-chevron-size) * 1.7)",
      marginLeft: "var(--_controls-ml, auto)",
      marginRight: "var(--_controls-mr, 0)",

      '[dir="rtl"] &': {
        "--_controls-ml": "0",
        "--_controls-mr": "auto",
      },
    },

    ".numberInput-control.numberInput-control": {
      "--_control-bd": `${rem("1px")} solid var(--_input-bd)`,
      "--_control-radius": `calc(var(--_input-radius) - ${rem("1px")})`,

      flex: "0 0 50%",
      width: "100%",
      padding: "0",
      height: `calc(var(--_input-height) / 2 - ${rem("1px")})`,
      borderLeft: "var(--_control-bdl, var(--_control-bd))",
      borderRight: "var(--_control-bdr, none)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--raikou-color-text)",
      backgroundColor: "var(--_control-bg, transparent)",
      pointerEvents: "var(--_control-pointer-events, auto)",
      opacity: "var(--_control-opacity, 1)",

      "&:disabled": {
        "--_control-pointer-events": "none",
        "--_control-opacity": "0.4",
      },

      '[dir="rtl"] &': {
        "--_control-bdl": "none",
        "--_control-bdr": "var(--_control-bd)",
      },

      "@media (hover: hover)": {
        "&:hover": {
          '[data-raikou-color-scheme="light"] &': {
            "--_control-bg": "var(--raikou-numberinput-control-hover-bg)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_control-bg": "var(--raikou-numberinput-control-hover-bg)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          '[data-raikou-color-scheme="light"] &': {
            "--_control-bg": "var(--raikou-numberinput-control-active-bg)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_control-bg": "var(--raikou-numberinput-control-active-bg)",
          },
        },
      },

      "&:first-of-type": {
        borderBottom: `${rem("0.5px")} solid var(--_input-bd)`,
        borderRadius: "0 var(--_control-radius) 0 0",

        '[dir="rtl"] &': {
          borderRadius: "var(--_control-radius) 0 0 0",
        },
      },

      "&:last-of-type": {
        borderTop: `${rem("0.5px")} solid var(--_input-bd)`,
        borderRadius: "0 0 var(--_control-radius) 0",

        '[dir="rtl"] &': {
          borderRadius: "0 0 0 var(--_control-radius)",
        },
      },
    },
  });
};
