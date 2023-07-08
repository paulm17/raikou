module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".mark-root": {
      backgroundColor: "var(--_mark-bg)",
      color: "var(--raikou-color-black)",

      '[data-raikou-color-scheme="light"] &': {
        "--_mark-bg": "var(--mark-bg-light)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_mark-bg": "var(--mark-bg-dark)",
      },
    },
  });
};
