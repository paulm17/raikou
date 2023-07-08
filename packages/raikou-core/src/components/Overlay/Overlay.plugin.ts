module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".overlay-root": {
      inset: 0,
      position: "var(--_overlay-position, absolute)",
      background: "var(--overlay-bg)",
      backdropFilter: "var(--overlay-filter)",
      borderRadius: "var(--overlay-radius)",
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
