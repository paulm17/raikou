module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableRow-withPointerCursor": {
      cursor: "pointer",
    },
    ".dataTableRow-selected": {
      "&&": {
        "tr&": {
          background: "var(--raikou-datatable-row-selected-tr)",
        },
        "table[data-striped] tbody &:nth-of-type(odd)": {
          background: "var(--raikou-datatable-row-selected-tbody)",
        },
      },
    },
    ".dataTableRow-contextMenuVisible": {
      "&&": {
        "tr&": {
          background: "var(--raikou-datatable-row-context-menu-tr)",
        },
        "table[data-striped] tbody &:nth-of-type(odd)": {
          background: "var(--raikou-datatable-row-context-menu-tbody)",
        },
      },
    },
  });
};
