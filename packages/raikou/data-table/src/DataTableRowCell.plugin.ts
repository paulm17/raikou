module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableRowCell-withPointerCursor": {
      cursor: "pointer",
    },
    ".dataTableRowCell-noWrap": {
      whiteSpace: "nowrap",
    },
    ".dataTableRowCell-ellipsis": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  });
};
