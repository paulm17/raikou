module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".breadcrumbs-root": {
      display: "flex",
      alignItems: "center",
    },

    ".breadcrumbs-breadcrumb": {
      lineHeight: "1",
      whiteSpace: "nowrap",
      "-webkit-tap-highlight-color": "transparent",
    },

    ".breadcrumbs-separator": {
      marginLeft: "var(--bc-separator-margin)",
      marginRight: "var(--bc-separator-margin)",
      color: "var(--_separator-color)",
      lineHeight: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      '[data-raikou-color-scheme="light"] &': {
        "--_separator-color": "var(--raikou-breadcrumbs-separator-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_separator-color": "var(--raikou-breadcrumbs-separator-color)",
      },
    },
  });
};
