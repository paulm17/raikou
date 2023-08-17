module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".unstyled-button-root": {
      backgroundColor: "transparent",
      cursor: "pointer",
      border: "0",
      padding: "0",
      appearance: "none",
      fontSize: "var(--raikou-font-size-md)",
      textAlign: "left",
      textDecoration: "none",
      color: "inherit",
      touchAction: "manipulation",
      "-webkit-tap-highlight-color": "transparent",
    },
  });
};
