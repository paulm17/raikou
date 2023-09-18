module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".overlay-root": {
      inset: "0",
      position: "var(--_overlay-position, absolute)",
      background: "var(--overlay-bg, rgba(0, 0, 0, 0.6))",
      backdropFilter: "var(--overlay-filter)",
      borderRadius: "var(--overlay-radius, 0)",
      zIndex: "var(--overlay-z-index)",

      "&[data-fixed]": {
        "--_overlay-position": "fixed",
      },

      "&[data-center]": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  });
};
