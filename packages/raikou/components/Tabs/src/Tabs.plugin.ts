import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".tabs-root": {
      display: "var(--_tabs-display)",
      flexDirection: "var(--_tabs-flex-direction)",

      "--_tab-justify": "flex-start",
      "--_list-direction": "row",
      "--_panel-grow": "unset",
      "--_tabs-display": "block",
      "--_tabs-flex-direction": "row",
      "--_list-border-width": rem(0),
      "--_list-border-size": "0 0 var(--_list-border-width) 0",
      "--_list-gap": "unset",

      "--_list-line-bottom": 0,
      "--_list-line-top": "unset",
      "--_list-line-left": 0,
      "--_list-line-right": 0,

      "--_tab-radius": "var(--tabs-radius) var(--tabs-radius) 0 0",
      "--_tab-border-width": "0 0 var(--_list-border-width) 0",

      "&[data-inverted]": {
        "--_list-line-bottom": "unset",
        "--_list-line-top": 0,
        "--_tab-radius": "0 0 var(--tabs-radius) var(--tabs-radius)",
        "--_tab-border-width": "var(--_list-border-width) 0 0 0",

        "& .list--default::before": {
          top: 0,
          bottom: "unset",
        },
      },

      "&[data-orientation='vertical']": {
        "--_list-line-left": "unset",
        "--_list-line-right": 0,
        "--_list-line-top": 0,
        "--_list-line-bottom": 0,
        "--_list-border-size": "0 var(--_list-border-width) 0 0",
        "--_tab-border-width": "0 var(--_list-border-width) 0 0",
        "--_tab-radius": "var(--tabs-radius) 0 0 var(--tabs-radius)",
        "--_list-direction": "column",
        "--_panel-grow": 1,
        "--_tabs-display": "flex",

        '[dir="rtl"] &': {
          "--_list-line-left": 0,
          "--_list-line-right": "unset",
          "--_list-border-size": "0 0 0 var(--_list-border-width)",
          "--_tab-border-width": "0 0 0 var(--_list-border-width)",
          "--_tab-radius": "0 var(--tabs-radius) var(--tabs-radius) 0",
        },

        "&[data-placement='right']": {
          "--_tabs-flex-direction": "row-reverse",
          "--_list-line-left": 0,
          "--_list-line-right": "unset",
          "--_list-border-size": "0 0 0 var(--_list-border-width)",
          "--_tab-border-width": "0 0 0 var(--_list-border-width)",
          "--_tab-radius": "0 var(--tabs-radius) var(--tabs-radius) 0",

          '[dir="rtl"] &': {
            "--_list-line-left": "unset",
            "--_list-line-right": 0,
            "--_list-border-size": "0 var(--_list-border-width) 0 0",
            "--_tab-border-width": "0 var(--_list-border-width) 0 0",
            "--_tab-radius": "var(--tabs-radius) 0 0 var(--tabs-radius)",
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_tab-border-color": "var(--raikou-color-gray-3)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_tab-border-color": "var(--raikou-color-dark-4)",
      },

      "&[data-orientation='horizontal']": {
        "--_tab-justify": "center",
      },

      "&[data-variant='default']": {
        " --_list-border-width": rem("2px"),

        '[data-raikou-color-scheme="light"] &': {
          "--_tab-hover-color": "var(--raikou-color-gray-0)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_tab-hover-color": "var(--raikou-color-dark-6)",
        },
      },

      "&[data-variant='outline']": {
        "--_list-border-width": rem("1px"),
      },

      "&[data-variant='pills']": {
        "--_list-gap": "calc(var(--raikou-spacing-sm) / 2)",

        '[data-raikou-color-scheme="light"] &': {
          "--_tab-hover-color": "var(--raikou-color-gray-0)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_tab-hover-color": "var(--raikou-color-dark-6)",
        },
      },
    },

    ".tabs-list": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "var(--tabs-justify, flex-start)",
      flexDirection: "var(--_list-direction)",
      gap: "var(--_list-gap)",

      "--_tab-grow": "unset",

      "&[data-grow]": {
        "--_tab-grow": 1,
      },
    },

    ".tabs-panel": {
      flexGrow: "var(--_panel-grow)",
    },

    ".tabs-tab": {
      position: "relative",
      padding: "var(--raikou-spacing-xs) var(--raikou-spacing-md)",
      fontSize: "var(--raikou-font-size-sm)",
      whiteSpace: "nowrap",
      zIndex: 0,
      display: "flex",
      alignItems: "center",
      lineHeight: 1,
      userSelect: "none",
      flexGrow: "var(--_tab-grow)",
      justifyContent: "var(--_tab-justify)",

      "&:disabled, &[data-disabled]": {
        opacity: "0.5",
        cursor: "not-allowed",
      },

      "&:focus": {
        zIndex: 1,
      },
    },

    ".tabs-tabSection": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "var(--_tab-section-margin-left, 0)",
      marginRight: "var(--_tab-section-margin-right, 0)",

      "&[data-position='left']": {
        "&:not(:only-child)": {
          "--_tab-section-margin-right": "var(--raikou-spacing-xs)",

          '[dir="rtl"] &': {
            "--_tab-section-margin-right": "0rem",
            "--_tab-section-margin-left": "var(--raikou-spacing-xs)",
          },
        },
      },

      "&[data-position='right']": {
        "&:not(:only-child)": {
          "--_tab-section-margin-left": "var(--raikou-spacing-xs)",

          '[dir="rtl"] &': {
            "--_tab-section-margin-left": "0rem",
            "--_tab-section-margin-right": "var(--raikou-spacing-xs)",
          },
        },
      },
    },

    /*************************************** default variant ***************************************/
    ".tabs-list--default": {
      position: "relative",

      "&::before": {
        content: '""',
        position: "absolute",
        borderColor: "var(--_tab-border-color)",
        borderWidth: "var(--_list-border-size)",
        borderStyle: "solid",
        bottom: "var(--_list-line-bottom)",
        left: "var(--_list-line-left)",
        right: "var(--_list-line-right)",
        top: "var(--_list-line-top)",
      },
    },

    ".tabs-tab--default": {
      borderRadius: "var(--_tab-radius)",
      borderWidth: "var(--_tab-border-width)",
      borderStyle: "solid",
      borderColor: "var(--__tab-border-color)",
      backgroundColor: "var(--_tab-bg)",

      "--__tab-border-color": "transparent",
      "--_tab-bg": "transparent",

      "&[data-active]": {
        "--__tab-border-color": "var(--tabs-color)",
      },

      "@media (hover: hover)": {
        "&:hover": {
          "--_tab-bg": "var(--_tab-hover-color)",

          "&:not([data-active])": {
            "--__tab-border-color": "var(--_tab-border-color)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "--_tab-bg": "var(--_tab-hover-color)",

          "&:not([data-active])": {
            "--__tab-border-color": "var(--_tab-border-color)",
          },
        },
      },

      "&:disabled, &[data-disabled]": {
        "@media (hover: hover)": {
          "&:hover": {
            "--_tab-bg": "transparent",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "--_tab-bg": "transparent",
          },
        },
      },
    },

    /*************************************** outline variant ***************************************/
    ".tabs-list--outline": {
      position: "relative",

      "&::before": {
        content: '""',
        position: "absolute",
        borderColor: "var(--_tab-border-color)",
        borderWidth: "var(--_list-border-size)",
        borderStyle: "solid",
        bottom: "var(--_list-line-bottom)",
        left: "var(--_list-line-left)",
        right: "var(--_list-line-right)",
        top: "var(--_list-line-top)",
      },
    },

    ".tabs-tab--outline": {
      border: `${rem("1px")} solid transparent`,
      borderTopColor: "var(--_tab-border-top-color)",
      borderBottomColor: "var(--_tab-border-bottom-color)",
      borderLeftColor: "var(--_tab-border-left-color)",
      borderRightColor: "var(--_tab-border-right-color)",
      borderRadius: "var(--_tab-radius)",

      "--_tab-border-bottom-color": "transparent",
      "--_tab-border-top-color": "transparent",
      "--_tab-border-right-color": "transparent",
      "--_tab-border-left-color": "transparent",

      "&[data-active]": {
        "--_tab-border-top-color": "var(--_tab-border-color)",
        "--_tab-border-left-color": "var(--_tab-border-color)",
        "--_tab-border-right-color": "var(--_tab-border-color)",
        "--_tab-border-bottom-color": "var(--raikou-color-body)",

        "&[data-inverted]": {
          "--_tab-border-bottom-color": "var(--_tab-border-color)",
          "--_tab-border-top-color": "var(--raikou-color-body)",
        },

        "&[data-orientation='vertical']": {
          "&[data-placement='left']": {
            "--_tab-border-right-color": "var(--raikou-color-body)",
            "--_tab-border-left-color": "var(--_tab-border-color)",
            "--_tab-border-bottom-color": "var(--_tab-border-color)",

            '[dir="rtl"] &': {
              "--_tab-border-right-color": "var(--_tab-border-color)",
              "--_tab-border-left-color": "var(--raikou-color-body)",
            },
          },

          "&[data-placement='right']": {
            "--_tab-border-left-color": "var(--raikou-color-body)",
            "--_tab-border-right-color": "var(--_tab-border-color)",
            "--_tab-border-bottom-color": "var(--_tab-border-color)",

            '[dir="rtl"] &': {
              "--_tab-border-left-color": "var(--_tab-border-color)",
              "--_tab-border-right-color": "var(--raikou-color-body)",
            },
          },
        },
      },
    },

    /*************************************** pills variant ***************************************/
    ".tabs-tab--pills": {
      borderRadius: "var(--tabs-radius)",
      backgroundColor: "var(--_tab-bg)",
      color: "var(--_tab-color)",

      "--_tab-bg": "transparent",
      "--_tab-color": "inherit",

      "&:not([data-disabled])": {
        "@media (hover: hover)": {
          "&:hover": {
            "--_tab-bg": "var(--_tab-hover-color)",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "--_tab-bg": "var(--_tab-hover-color)",
          },
        },
      },

      "&[data-active][data-active]": {
        "--_tab-bg": "var(--tabs-color)",
        "--_tab-color": "var(--raikou-color-white)",

        "@media (hover: hover)": {
          "&:hover": {
            "--_tab-bg": "var(--tabs-color)",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "--_tab-bg": "var(--tabs-color)",
          },
        },
      },
    },
  });
};
