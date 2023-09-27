module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableDivider-root": {
      height: "1",
      '[data-raikou-color-scheme="light"] &': {
        background: "--raikou-color-gray-1",
      },
      '[data-raikou-color-scheme="dark"] &': {
        background: "--raikou-color-dark-5",
      },
    },
  });
};
