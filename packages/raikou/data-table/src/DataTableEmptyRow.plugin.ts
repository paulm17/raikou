module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableEmptyRow-root": {
      "&&": {
        background: "transparent",
        "&:last-of-type td": {
          borderBbottom: "none",
        },
      },
    },
  });
};
