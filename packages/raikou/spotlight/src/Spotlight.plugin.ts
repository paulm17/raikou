import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".spotlight-root": {
      "&[data-scrollable]": {
        "--_spotlight-content-height": "100%",
      },
    },

    ".spotlight-content": {
      overflow: "hidden",
      height: "var(--_spotlight-content-height, auto)",
      maxHeight: "var(--spotlight-max-height)",
    },

    ".spotlight-body": {
      display: "flex",
      flexDirection: "column",
      height: "var(--_spotlight-content-height, auto)",
    },

    ".spotlight-search": {
      border: "0",
      backgroundColor: "transparent",
    },

    ".spotlight-actionsList": {
      /* Used in child ScrollArea */
      "--spotlight-actions-list-padding": rem("4px"),

      borderTop: `${rem("1px")} solid var(--_actions-list-border)`,
      flex: "1",
      padding: "var(--spotlight-actions-list-padding)",
      maxHeight: `calc(100% - ${rem("3.125rem")})`,
      marginRight:
        "var(--_actions-list-mr, calc(var(--spotlight-actions-list-padding) * -1))",
      marginLeft: "var(--_actions-list-ml, 0)",

      '[dir="rtl"] &': {
        "--_actions-list-mr": "0",
        "--_actions-list-ml":
          "calc(var(--spotlight-actions-list-padding) * -1)",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_actions-list-border": "var(--raikou-color-gray-2)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_actions-list-border": "var(--raikou-color-dark-4)",
      },
    },

    ".spotlight-action": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: `${rem("7px")} var(--raikou-spacing-md)`,
      borderRadius: "var(--raikou-radius-default)",
      backgroundColor: "var(--_action-bg, transparent)",
      color: "var(--_action-color, inherit)",
      textAlign: "var(--_action-text-align, left)",

      '[dir="rtl"] &': {
        "--_action-text-align": "right",
      },

      "&:not([data-selected])": {
        "@media (hover: hover)": {
          "&:hover": {
            '[data-raikou-color-scheme="light"] &': {
              "--_action-bg": "var(--raikou-color-gray-0)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_action-bg": "var(--raikou-color-dark-6)",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            '[data-raikou-color-scheme="light"] &': {
              "--_action-bg": "var(--raikou-color-gray-0)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_action-bg": "var(--raikou-color-dark-6)",
            },
          },
        },
      },

      "&[data-selected]": {
        "--_action-bg": "var(--raikou-color-primary)",
        "--_action-color": "var(--raikou-color-white)",
        "--_action-description-color": "var(--raikou-color-white)",
        "--_action-description-opacity": "0.7",
      },
    },

    ".spotlight-actionBody": {
      flex: "1",
    },

    ".spotlight-actionSection": {
      marginLeft: "var(--_action-section-ml)",
      marginRight: "var(--_action-section-mr)",
      opacity: "var(--_action-section-opacity, 1)",
      color: "var(--_action-section-color, inherit)",

      "&[data-dimmed]": {
        "--_action-section-opacity": "var(--_action-description-opacity, 1)",
        "--_action-section-color":
          "var(--_action-description-color, var(--raikou-color-dimmed))",
      },

      '&[data-position="left"]': {
        "--_action-section-mr": "var(--raikou-spacing-md)",
      },

      '&[data-position="right"]': {
        "--_action-section-ml": "var(--raikou-spacing-md)",
      },
    },

    ".spotlight-actionLabel": {
      display: "block",
    },

    ".spotlight-actionDescription": {
      display: "block",
      fontSize: "var(--raikou-font-size-xs)",
      opacity: "var(--_action-description-opacity, 1)",
      color: "var(--_action-description-color, var(--raikou-color-dimmed))",
    },

    ".spotlight-empty": {
      color: "var(--raikou-color-dimmed)",
      padding: "var(--raikou-spacing-md)",
      textAlign: "center",
    },

    ".spotlight-footer": {
      padding: `var(--raikou-spacing-xs) calc(var(--raikou-spacing-md) + ${rem(
        "4px",
      )})`,
      borderTop: `${rem("1px")} solid var(--_footer-border)`,

      '[data-raikou-color-scheme="light"] &': {
        "--_footer-border": "var(--raikou-color-gray-2)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_footer-border": "var(--raikou-color-dark-4)",
      },
    },

    ".spotlight-actionsGroup": {
      display: "var(--_display, flex)",
      flexDirection: "column",
      marginTop: "var(--raikou-spacing-md)",

      "&::before": {
        content: "var(--spotlight-label)",
        textTransform: "uppercase",
        fontSize: "var(--raikou-font-size-xs)",
        fontWeight: "700",
        color: "var(--raikou-color-dimmed)",
        paddingLeft: "var(--_actions-group-pl, var(--raikou-spacing-md))",
        paddingRight: "var(--_actions-group-pr, 0)",
      },

      '[dir="rtl"] &': {
        "--_actions-group-pl": "0",
        "--_actions-group-pr": "var(--raikou-spacing-md)",
      },

      "&:empty": {
        "--_display": "none",
      },
    },
  });
};
