import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-calendarHeader": {
      "--dch-control-size-xs": rem("30px"),
      "--dch-control-size-sm": rem("36px"),
      "--dch-control-size-md": rem("42px"),
      "--dch-control-size-lg": rem("48px"),
      "--dch-control-size-xl": rem("54px"),

      display: "flex",
      maxWidth: `calc(var(--dch-control-size) * 7 + ${rem("7px")})`,
      marginBottom: "var(--raikou-spacing-xs)",
    },

    ".dates-calendarHeaderLevel, .dates-calendarHeaderControl": {
      height: "var(--dch-control-size)",
      borderRadius: "var(--raikou-radius-default)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
      backgroundColor: "var(--_control-bg)",
      opacity: "var(--_control-opacity, 1)",
      cursor: "var(--_control-cursor, pointer)",

      "@media (hover: hover)": {
        "&:hover": {
          "&:not([data-disabled], :disabled)": {
            '[data-raikou-color-scheme="light"] &': {
              "--_control-bg": "var(--raikou-color-gray-0)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_control-bg": "var(--raikou-color-dark-5)",
            },
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&:not([data-disabled], :disabled)": {
            '[data-raikou-color-scheme="light"] &': {
              "--_control-bg": "var(--raikou-color-gray-0)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_control-bg": "var(--raikou-color-dark-5)",
            },
          },
        },
      },

      "&:disabled, &[data-disabled]": {
        "--_control-opacity": "0.2",
        "--_control-cursor": "not-allowed",
      },
    },

    ".dates-calendarHeaderControl": {
      width: "var(--dch-control-size)",
    },

    ".dates-calendarHeaderLevel": {
      flex: "1",
      fontSize: "var(--dch-fz)",
      fontWeight: "500",
      textTransform: "capitalize",
    },

    ".dates-calendarHeaderControlIcon": {
      width: "60%",
      height: "60%",
      transform: "var(--_chevron-transform)",

      '&[data-direction="next"]': {
        "--_chevron-transform": "rotate(270deg)",

        '[dir="rtl"] &': {
          "--_chevron-transform": "rotate(90deg)",
        },
      },

      '&[data-direction="previous"]': {
        "--_chevron-transform": "rotate(90deg)",

        '[dir="rtl"] &': {
          "--_chevron-transform": "rotate(270deg)",
        },
      },
    },
  });
};
