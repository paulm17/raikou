import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".accordion-panel": {
      wordBreak: "break-word",
    },

    ".accordion-content": {
      padding: "var(--raikou-spacing-md)",
      paddingTop: "calc(var(--raikou-spacing-xs) / 2)",
    },

    ".accordion-itemTitle": {
      margin: "0",
      padding: "0",
    },

    ".accordion-control": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "var(--_control-flex-direction, row-reverse)",
      paddingRight: "var(--_control-padding-right, var(--raikou-spacing-md))",
      paddingLeft: "var(--_control-padding-left, var(--raikou-spacing-md))",
      textAlign: "left",
      color: "var(--_control-color)",
      opacity: "var(--_control-opacity, 1)",
      cursor: "var(--_control-cursor, pointer)",
      backgroundColor: "var(--_control-background-color, transparent)",

      '&[data-chevron-position="left"]': {
        "--_control-flex-direction": "row",
        "--_control-padding-left": "0",
      },

      '[dir="rtl"] &': {
        '&[data-chevron-position="left"]': {
          "--_control-padding-left": "var(--raikou-spacing-md)",
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_control-color": "var(--raikou-color-black)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_control-color": "var(--raikou-color-dark-0)",
      },

      "&:disabled, &[data-disabled]": {
        "--_control-opacity": "0.4",
        "--_control-cursor": "not-allowed",
      },
    },

    ".accordion-root[data-variant='default'] .accordion-control, .accordion-root[data-variant='contained'] .accordion-control":
      {
        "&:not(:disabled, [data-disabled])": {
          "@media (hover: hover)": {
            "&:hover": {
              '[data-raikou-color-scheme="light"] &': {
                "--_control-background-color": "var(--raikou-color-gray-0)",
              },

              '[data-raikou-color-scheme="dark"] &': {
                "--_control-background-color": "var(--raikou-color-dark-6)",
              },
            },
          },
          "@media (hover: none)": {
            "&:active": {
              '[data-raikou-color-scheme="light"] &': {
                "--_control-background-color": "var(--raikou-color-gray-0)",
              },

              '[data-raikou-color-scheme="dark"] &': {
                "--_control-background-color": "var(--raikou-color-dark-6)",
              },
            },
          },
        },
      },

    ".accordion-label": {
      color: "inherit",
      fontWeight: "400",
      flex: "1",
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingTop: "var(--raikou-spacing-sm)",
      paddingBottom: "var(--raikou-spacing-sm)",
    },

    ".accordion-chevron": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      transition: "transform var(--accordion-transition-duration) ease",
      marginRight: "var(--_chevron-margin-right)",
      marginLeft: "var(--_chevron-margin-left)",
      width: "var(--accordion-chevron-size)",
      minWidth: "var(--accordion-chevron-size)",
      transform: "var(--_chevron-transform, rotate(0deg))",

      "&[data-rotate]": {
        "--_chevron-transform": "rotate(180deg)",
      },

      '&[data-position="left"]': {
        "--_chevron-margin-right": "var(--raikou-spacing-md)",
        "--_chevron-margin-left": "var(--raikou-spacing-md)",
      },

      '&[data-position="right"]': {
        "--_chevron-margin-left": "0",
      },

      '[dir="rtl"] &': {
        '&[data-position="left"]': {
          "--_chevron-margin-right": "0",
          "--_chevron-margin-left": "var(--raikou-spacing-md)",
        },

        '&[data-position="right"]': {
          "--_chevron-margin-right": "var(--raikou-spacing-md)",
          "--_chevron-margin-left": "0",
        },
      },
    },

    ".accordion-icon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "var(--_icon-margin-right, var(--raikou-spacing-sm))",
      marginLeft: "var(--_icon-margin-left, 0)",

      '&[data-chevron-position="left"]': {
        "--_icon-margin-right": "0",
        "--_icon-margin-left": "var(--raikou-spacing-lg)",
      },

      '[dir="rtl"] &': {
        '&[data-chevron-position="left"]': {
          "--_icon-margin-right": "var(--raikou-spacing-lg)",
          "--_icon-margin-left": "0",
        },

        '&[data-chevron-position="right"]': {
          "--_icon-margin-right": "0",
          "--_icon-margin-left": "var(--raikou-spacing-sm)",
        },
      },
    },

    ".accordion-item": {
      backgroundColor: "var(--_item-bg)",

      '[data-raikou-color-scheme="light"] &': {
        "--_item-border-color": "var(--raikou-color-gray-3)",
        "--_item-filled-color": "var(--raikou-color-gray-0)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_item-border-color": "var(--raikou-color-dark-4)",
        "--_item-filled-color": "var(--raikou-color-dark-6)",
      },
    },

    ".accordion-root[data-variant='default'] .accordion-item": {
      borderBottom: `${rem("1px")} solid var(--_item-border-color)`,
    },

    ".accordion-root[data-variant='contained'] .accordion-item": {
      border: `${rem("1px")} solid var(--_item-border-color)`,
      transition: "background-color 150ms ease",

      "&[data-active]": {
        "--_item-bg": "var(--_item-filled-color)",
      },

      "&:first-of-type": {
        borderTopLeftRadius: "var(--accordion-radius)",
        borderTopRightRadius: "var(--accordion-radius)",

        "& > [data-accordion-control]": {
          borderTopLeftRadius: "var(--accordion-radius)",
          borderTopRightRadius: "var(--accordion-radius)",
        },
      },

      "&:last-of-type": {
        borderBottomLeftRadius: "var(--accordion-radius)",
        borderBottomRightRadius: "var(--accordion-radius)",

        "& > [data-accordion-control]": {
          borderBottomLeftRadius: "var(--accordion-radius)",
          borderBottomRightRadius: "var(--accordion-radius)",
        },
      },

      "& + &": {
        borderTop: "0",
      },
    },

    ".accordion-root[data-variant='filled'] .accordion-item": {
      borderRadius: "var(--accordion-radius)",

      "&[data-active]": {
        "--_item-bg": "var(--_item-filled-color)",
      },
    },

    ".accordion-root[data-variant='separated'] .accordion-item": {
      "--_item-bg": "var(--_item-filled-color)",

      borderRadius: "var(--accordion-radius)",
      border: `${rem("1px")} solid var(--__item-border-color, transparent)`,
      transition: "background-color 150ms ease",

      "&[data-active]": {
        "--__item-border-color": "var(--_item-border-color)",

        '[data-raikou-color-scheme="light"] &': {
          "--_item-bg": "var(--raikou-color-white)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_item-bg": "var(--raikou-color-dark-7)",
        },
      },

      "& + &": {
        marginTop: "var(--raikou-spacing-md)",
      },
    },
  });
};
