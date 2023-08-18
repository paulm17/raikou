import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".rte-root": {
      position: "relative",
      border: `${rem("1px")} solid var(--_root-bd)`,
      borderRadius: "var(--raikou-radius-default)",

      '[data-raikou-color-scheme="light"] &': {
        "--_root-bd": "var(--raikou-rte-root-bd)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_root-bd": "var(--raikou-rte-root-bd)",
      },
    },

    ".rte-typographyStylesProvider": {
      padding: "0",
      margin: "0",

      "& li > p": {
        margin: "0",
      },

      "& ul li, & ol li": {
        marginTop: rem("2px"),
      },

      "& p": {
        marginBottom: rem("7px"),
      },

      "& h1, & h2, & h3, & h4, & h5, & h6, & p": {
        marginTop: 0,
      },
    },

    ".rte-content": {
      backgroundColor: "var(--raikou-color-body)",
      borderRadius: "var(--raikou-radius-default)",

      ".ProseMirror": {
        outline: "0",
        padding: "var(--raikou-spacing-md)",
      },

      ".ProseMirror > *:last-child": {
        marginBottom: "0",
      },

      ".ProseMirror p.is-editor-empty:first-of-type::before": {
        content: "attr(data-placeholder)",
        pointerEvents: "none",
        userSelect: "none",
        float: "left",
        height: "0",
        color: "var(--raikou-color-placeholder)",
      },

      pre: {
        backgroundColor: "var(--_code-bg)",
        color: "var(--_code-color)",
        fontFamily: "var(--raikou-font-family-monospace)",
        borderRadius: "var(--raikou-radius-default)",
        padding: "var(--raikou-spacing-md) var(--raikou-spacing-xl)",

        code: {
          background: "none !important",
          backgroundColor: "red",
          color: "inherit",
          fontSize: "var(--raikou-font-size-sm)",
          padding: "0",
        },

        ".hljs-comment, .hljs-quote": {
          color: "var(--_code-color-comment)",
        },

        ".hljs-variable, .hljs-template-variable, .hljs-attribute, .hljs-tag, .hljs-regexp, .hljs-link, .hljs-name, .hljs-selector-id, .hljs-selector-class":
          {
            color: "var(--_code-color-var)",
          },

        ".hljs-number, .hljs-meta, .hljs-built_in, .hljs-builtin-name, .hljs-literal, .hljs-type, .hljs-params":
          {
            color: "var(--_code-color-number)",
          },

        ".hljs-string, .hljs-symbol, .hljs-bullet": {
          color: "var(--_code-color-var)",
        },

        ".hljs-title, .hljs-section": {
          color: "var(--_code-color-title)",
        },

        ".hljs-keyword, .hljs-selector-tag": {
          color: "var(--_code-color-keyword)",
        },

        ".hljs-emphasis": {
          fontStyle: "italic",
        },

        ".hljs-strong": {
          fontWeight: "700",
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_code-bg": "var(--raikou-rte-code-bg)",
        "--_code-color": "var(--raikou-rte-code-color)",
        "--_code-color-comment": "var(--raikou-rte-code-color-comment)",
        "--_code-color-var": "var(--raikou-rte-code-color-var)",
        "--_code-color-number": "var(--raikou-rte-code-color-number)",
        "--_code-color-title": "var(--raikou-rte-code-color-title)",
        "--_code-color-keyword": "var(--raikou-rte-code-color-keyword)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_code-bg": "var(--raikou-rte-code-bg)",
        "--_code-color": "var(--raikou-rte-code-color)",
        "--_code-color-comment": "var(--raikou-rte-code-color-comment)",
        "--_code-color-var": "var(--raikou-rte-code-color-var)",
        "--_code-color-number": "var(--raikou-rte-code-color-number)",
        "--_code-color-title": "var(--raikou-rte-code-color-title)",
        "--_code-color-keyword": "var(--raikou-rte-code-color-keyword)",
      },
    },

    ".rte-linkEditorDropdown": {
      backgroundColor: "var(--raikou-color-body)",
    },

    ".rte-control": {
      backgroundColor: "var(--_control-bg)",
      color: "var(--_control-color)",
      minWidth: rem("26px"),
      height: rem("26px"),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `${rem("1px")} solid var(--_control-bd)`,
      borderRadius: "var(--raikou-radius-default)",
      cursor: "var(--_control-cursor, default)",

      "&[data-interactive]": {
        "--_control-cursor": "pointer",

        "@media (hover: hover)": {
          "&:hover": {
            '[data-raikou-color-scheme="light"] &': {
              "--_control-bg": "var(--raikou-rte-control-interactive-bg-hover)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_control-bg": "var(--raikou-rte-control-interactive-bg-hover)",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            '[data-raikou-color-scheme="light"] &': {
              "--_control-bg":
                "var(--raikou-rte-control-interactive-bg-active)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_control-bg":
                "var(--raikou-rte-control-interactive-bg-active)",
            },
          },
        },
      },

      "[data-raikou-color-scheme] &[data-active]": {
        "--_control-bg": "var(--raikou-primary-color-light)",
        "--_control-color": "var(--raikou-primary-color-light-color)",

        "@media (hover: hover)": {
          "&:hover": {
            "--_control-bg": "var(--raikou-primary-color-light-hover)",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "--_control-bg": "var(--raikou-primary-color-light-hover)",
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_control-bg": "var(--raikou-rte-control-interactive-bg)",
        "--_control-bd": "var(--raikou-rte-control-interactive-bd)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_control-bg": "var(--raikou-rte-control-interactive-bg)",
        "--_control-bd": "var(--raikou-rte-control-interactive-bd)",
      },
    },

    ".rte-controlsGroup": {
      display: "flex",
      backgroundColor: "var(--raikou-color-body)",

      "& [data-rich-text-editor-control]": {
        borderRadius: "0",

        "&:not(:last-of-type)": {
          borderRight: "0",
        },

        "&:last-of-type": {
          borderTopRightRadius: "var(--raikou-radius-default)",
          borderBottomRightRadius: "var(--raikou-radius-default)",
        },

        "&:first-of-type": {
          borderTopLeftRadius: "var(--raikou-radius-default)",
          borderBottomLeftRadius: "var(--raikou-radius-default)",
        },
      },
    },

    ".rte-linkEditor": {
      display: "flex",
    },

    ".rte-linkEditorInput": {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      borderRight: "0",
    },

    ".rte-linkEditorExternalControl": {
      backgroundColor: "var(--_control-bg)",
      border: `${rem("1px")} solid var(--_control-bd)`,
      color: "var(--_control-color, var(--raikou-color-text))",
      height: rem("24px"),
      width: rem("24px"),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "var(--raikou-radius-default)",

      "[data-raikou-color-scheme] &[data-active]": {
        "--_control-bg": "var(--raikou-primary-color-light)",
        "--_control-color": "var(--raikou-primary-color-filled)",

        "@media (hover: hover)": {
          "&:hover": {
            "--_control-bg": "var(--raikou-primary-color-light-hover)",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "--_control-bg": "var(--raikou-primary-color-light-hover)",
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_control-bg": "var(--raikou-rte-control-active-bg)",
        "--_control-bd": "var(--raikou-rte-control-active-bd)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_control-bg": "var(--raikou-rte-control-active-bg)",
        "--_control-bd": "var(--raikou-rte-control-active-bd)",
      },
    },

    ".rte-linkEditorSave": {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },

    ".rte-toolbar": {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--raikou-spacing-sm)",
      position: "var(--_toolbar-position, static)",
      top: "var(--rte-sticky-offset, 0)",
      backgroundColor: "var(--raikou-color-body)",
      zIndex: "1",
      borderTopRightRadius: "var(--raikou-radius-default)",
      borderTopLeftRadius: "var(--raikou-radius-default)",
      borderBottom: `${rem("1px")} solid var(--_toolbar-bd)`,
      padding: "var(--raikou-spacing-xs) var(--raikou-spacing-md)",

      '[data-raikou-color-scheme="light"] &': {
        "--_toolbar-bd": "var(--raikou-rte-control-toolbar-bd)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_toolbar-bd": "var(--raikou-rte-control-toolbar-bd)",
      },

      "&[data-sticky]": {
        "--_toolbar-position": "sticky",
      },
    },
  });
};
