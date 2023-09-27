module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableRowExpansion-cell": {
      "&&": {
        borderBottomWidth: "0",
        padding: "0",
      },
    },
    ".dataTableRowCell-expandedCell": {
      "&&": {
        borderBottomWidth: "1",
      },
    },
  });
};
