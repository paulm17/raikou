import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".navLink-root.navLink-root": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: `${rem("8px")} var(--raikou-spacing-sm)`,
      userSelect: "none",
      background: "var(--_nav-link-bg)",
      color: "var(--_nav-link-color)",
      opacity: "var(--_nav-link-opacity, 1)",
      pointerEvents: "var(--_nav-link-pointer-events, auto)",

      "@media (hover: hover)": {
        "&:hover": {
          '[data-raikou-color-scheme="light"] &': {
            "--_nav-link-bg": "var(--raikou-nav-link-bg-hover)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_nav-link-bg": "var(--raikou-nav-link-bg-active)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          '[data-raikou-color-scheme="light"] &': {
            "--_nav-link-bg": "var(--raikou-nav-link-bg-hover)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_nav-link-bg": "var(--raikou-nav-link-bg-active)",
          },
        },
      },

      "&[data-disabled]": {
        "--_nav-link-opacity": "0.4",
        "--_nav-link-pointer-events": "none",
      },

      "&[data-active]": {
        "--_nav-link-bg": "var(--nl-bg)",
        "--_nav-link-color": "var(--nl-color)",

        "@media (hover: hover)": {
          "&:hover": {
            "--_nav-link-bg": "var(--nl-hover)",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "--_nav-link-bg": "var(--nl-hover)",
          },
        },

        ".description": {
          "--_description-opacity": "0.9",
          "--_description-color": "var(--nl-color)",
        },
      },
    },

    ".navLink-section": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "var(--_section-ml)",
      marginRight: "var(--_section-mr)",
      transition: "transform 150ms ease",
      transform: "var(--_section-transform, none)",

      "& > svg": {
        display: "block",
      },

      "&[data-position='left']": {
        "--_section-ml": "0",
        "--_section-mr": "var(--raikou-spacing-sm)",

        '[dir="rtl"] &': {
          "--_section-ml": "var(--raikou-spacing-sm)",
          "--_section-mr": "0",
        },
      },

      "&[data-position='right']": {
        "--_section-ml": "var(--raikou-spacing-sm)",
        "--_section-mr": "0",

        '[dir="rtl"] &': {
          "--_section-ml": "0",
          "--_section-mr": "var(--raikou-spacing-sm)",
        },
      },

      "&[data-rotate]": {
        "--_section-transform": "rotate(90deg)",
      },
    },

    ".navLink-label": {
      fontSize: "var(--raikou-font-size-sm)",
    },

    ".navLink-body": {
      flex: "1",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "var(--_body-white-space, auto)",

      "&[data-no-wrap]": {
        "--_body-white-space": "nowrap",
      },
    },

    ".navLink-description": {
      display: "block",
      fontSize: "var(--raikou-font-size-xs)",
      opacity: "var(--_description-opacity, 1)",
      color: "var(--_description-color, var(--raikou-color-dimmed))",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "var(--_body-white-space, auto)",
    },

    ".navLink-children": {
      paddingLeft: "var(--_children-pl, var(--nl-offset))",
      paddingRight: "var(--_children-pr, 0)",

      '[dir="rtl"] &': {
        "--_children-pl": "0",
        "--_children-pr": "var(--nl-offset)",
      },
    },

    ".navLink-chevron": {
      transform: "rotate(-90deg)",
    },
  });
};
