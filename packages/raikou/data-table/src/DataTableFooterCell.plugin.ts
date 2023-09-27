module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableFooterCell-noWrap": {
      whiteSpace: "nowrap",
    },
    ".dataTableFooterCell-ellipsis": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  });
};
