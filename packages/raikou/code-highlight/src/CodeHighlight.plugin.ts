import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".codeHighlight-code": {
      display: "inline-block",
      padding: `${rem("1px")} ${rem("3px")}`,
      fontSize: rem("13px"),
      borderRadius: "var(--raikou-radius-xs)",
      lineHeight: "var(--_code-line-height, var(--raikou-line-height))",
      fontFamily: "var(--raikou-font-family-monospace)",
    },

    ".codeHighlight-pre": {
      display: "block",
      padding: "var(--raikou-spacing-xs) var(--raikou-spacing-md)",
      margin: "0",
      "--_code-line-height": "1.7",
    },

    ".codeHighlight-header": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },

    ".codeHighlight-controls": {
      display: "flex",
      marginTop: rem("7px"),
      marginRight: rem("7px"),
    },

    ".codeHighlight-copy, .codeHighlight-control": {
      backgroundColor: "transparent",
      opacity: "0.8",
      margin: "0",
      color: "var(--raikou-color-dimmed)",

      "@media (hover: hover)": {
        "&:hover": {
          opacity: "1",
        },
      },
      "@media (hover: none)": {
        "&:active": {
          opacity: "1",
        },
      },
      "@media (max-width: 40em)": {
        display: "none",
      },
    },

    ".codeHighlight-copy": {
      position: "absolute",
      top: rem("5px"),
      right: rem("5px"),
      zIndex: "1",
    },

    ".codeHighlight-file": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "var(--raikou-font-size-xs)",
      gap: rem("7px"),
      padding: `${rem("7px")} ${rem("12px")}`,
      fontFamily: "var(--raikou-font-family-monospace)",
      fontWeight: "700",
      lineHeight: "1",
      userSelect: "none",
      cursor: "var(--_file-cursor)",
      border: `${rem("1px")} solid var(--_file-bd)`,
      borderTop: "0",
      borderLeft: "0",
      color: "var(--_file-color)",
      opacity: "var(--_file-opacity)",
      backgroundColor: "var(--_file-bg)",
      whiteSpace: "nowrap",
      margin: "0",

      "@media (hover: hover)": {
        "&:hover": {
          "--_file-opacity": "1",
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "--_file-opacity": "1",
        },
      },

      "&:last-of-type": {
        borderBottomRightRadius: "var(--raikou-radius-sm)",
      },

      "&:only-child": {
        "--_file-cursor": "default",
      },

      "&[data-active]": {
        "--_file-opacity": "1",
        "--_file-color": "var(--_file-active-color) !important",
        "--_file-bg": "var(--_file-active-bg)",
      },

      "--_file-opacity": "0.8",
      "--_file-cursor": "pointer",

      '[data-raikou-color-scheme="light"] &': {
        "--_file-color": "var(--codehighlight-file-color)",
        "--_file-bd": "var(--codehighlight-file-bd)",
        "--_file-active-bg": "var(--codehighlight-file-active-bg)",
        "--_file-active-color": "var(--codehighlight-file-active-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_file-color": "var(--codehighlight-file-color)",
        "--_file-bd": "var(--codehighlight-file-bd)",
        "--_file-active-bg": "var(--codehighlight-file-active-bg)",
        "--_file-active-color": "var(--codehighlight-file-active-color)",
      },
    },

    ".codeHighlight-files": {
      display: "flex",
    },

    ".codeHighlight-codeWrapper": {
      maxHeight: "var(--ch-max-collapsed-height)",
      overflow: "hidden",
      position: "relative",

      "&::before": {
        content: '""',
        zIndex: "100",
        position: "absolute",
        inset: "0",
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(0deg, var(--_background) 16%, rgba(0, 0, 0, 0) 100%)",
        borderRadius: `calc(var(--raikou-radius-md) - ${rem("1px")})`,
      },

      "&[data-expanded]": {
        maxHeight: "none",

        "&::before": {
          display: "none",
        },
      },
    },

    ".codeHighlight-showCodeButton": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "var(--raikou-font-size-sm)",
      color: "var(--raikou-color-anchor)",
      width: "100%",
      textAlign: "center",
      zIndex: "101",
      paddingTop: "var(--raikou-spacing-xs)",
      paddingBottom: "var(--raikou-spacing-xs)",

      "&[data-hidden]": {
        display: "none",
      },
    },

    ".codeHighlight-root": {
      marginTop: "0",
      position: "relative",

      "&[data-collapsed] :global(.mantine-ScrollArea-viewport > div)": {
        display: "block !important",
      },
    },

    ".codeHighlight-fileIcon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0",

      "& > svg": {
        display: "block",
      },
    },
  });
};
