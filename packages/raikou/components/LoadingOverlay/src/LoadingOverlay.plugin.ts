module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".loadingOverlay-root": {
      position: "absolute",
      inset: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      zIndex: "var(--lo-z-index)",
    },

    ".loadingOverlay-loader": {
      position: "relative",
      zIndex: "calc(var(--lo-z-index) + 1)",
    },

    ".loadingOverlay-overlay": {
      zIndex: "var(--lo-z-index)",

      "&[data-dark]": {
        '[data-raikou-color-scheme="light"] &': {
          display: "none",
        },
      },

      "&[data-light]": {
        '[data-raikou-color-scheme="dark"] &': {
          display: "none",
        },
      },
    },
  });
};
