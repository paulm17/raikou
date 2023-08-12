module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dropZone-root": {
      position: "relative",
      backgroundColor: "var(--_dropzone-bg)",
      border: `rem(1px) dashed var(--_dropzone-border-color)`,
      color: "var(--_dropzone-color, var(--raikou-color-text))",
      padding: "var(--raikou-spacing-md)",
      borderRadius: "var(--dropzone-radius)",
      cursor: "var(--_dropzone-cursor, pointer)",
      userSelect: "none",
      transition: "background-color 100ms ease, border-color 100ms ease",

      "&[data-loading], &:not([data-activate-on-click])": {
        "--_dropzone-cursor": "default",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_dropzone-bg": "var(--raikou-color-white)",
        "--_dropzone-border-color": "var(--raikou-color-gray-4)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_dropzone-bg": "var(--raikou-color-dark-6)",
        "--_dropzone-border-color": "var(--raikou-color-dark-4)",
      },

      "@media (hover: hover)": {
        "&:hover": {
          "&[data-activate-on-click]:not([data-loading])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_dropzone-bg": "var(--raikou-color-gray-0)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_dropzone-bg": "var(--raikou-color-dark-5)",
            },
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&[data-activate-on-click]:not([data-loading])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_dropzone-bg": "var(--raikou-color-gray-0)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_dropzone-bg": "var(--raikou-color-dark-5)",
            },
          },
        },
      },

      "&[data-accept]": {
        "--_dropzone-bg": "var(--dropzone-accept-bg)",
        "--_dropzone-border-color": "var(--dropzone-accept-bg)",
        "--_dropzone-color": "var(--dropzone-accept-color)",
      },

      "&[data-reject]": {
        "--_dropzone-bg": "var(--dropzone-reject-bg)",
        "--_dropzone-border-color": "var(--dropzone-reject-bg)",
        "--_dropzone-color": "var(--dropzone-reject-color)",
      },
    },

    ".dropZone-inner": {
      pointerEvents: "var(--_dropzone-inner-pointer-events, all)",
      userSelect: "none",

      "&[data-disable-pointer-events]": {
        "--_dropzone-inner-pointer-events": "none",
      },
    },

    ".dropZone-fullScreen": {
      position: "fixed",
      inset: "0",
      backgroundColor: "var(--raikou-color-body)",
      display: "flex",
      flexDirection: "column",
      padding: "var(--raikou-spacing-xs)",
      transition: "opacity 100ms ease",

      "& .dropzone": {
        flex: "1",
      },
    },
  });
};