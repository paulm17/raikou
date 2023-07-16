module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".paper-root": {
      outline: 0,
      "-webkit-tap-highlight-color": "transparent",
      display: "block",
      touchAction: "manipulation",
      textDecoration: "none",
      borderRadius: "var(--paper-radius)",
      boxShadow: "var(--paper-shadow)",
      backgroundColor: "var(--raikou-color-body)",
      border:
        "var(--_paper-border-width, 0) solid var(--_paper-border-color, transparent)",

      "&[data-with-border]": {
        "--_paper-border-width": "1px",

        '[data-raikou-color-scheme="light"] &': {
          "--_paper-border-color": "var(--raikou-color-gray-3)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_paper-border-color": "var(--raikou-color-dark-4)",
        },
      },
    },
  });
};
