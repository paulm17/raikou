module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTable-root": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    ".dataTable-root tr": {
      backgroundColor: "var(--raikou-datatable-root-tr)",
    },
    ".dataTable-root thead tr th": {
      backgroundBottomColor: "var(--raikou-datatable-root-th)",
    },
    ".dataTable-root tbody tr td": {
      backgroundTopColor: "var(--raikou-datatable-root-td)",
    },
    ".dataTable-root.lastRowBorderBottomVisible tbody tr:last-of-type td": {
      borderBottom:
        "1px solid rgb(var(--raikou-datatable-root-lastrow-border) / 65%)",
    },
    ".dataTable-textSelectionDisabled": {
      userSelect: "none",
    },
    ".dataTable-table": {
      borderCollapse: "separate",
      borderSpacing: "0",
    },
    ".dataTable-root-tableWithBorder": {
      border: "1px solid rgb(var(--raikou-datatable-root-tablewith-border))",
    },
    ".dataTable-root-tableWithColumnBorders th:not(:first-of-type), .dataTable-tableWithColumnBorders td:not(:first-of-type)":
      {
        borderLeft:
          "1px solid rgb(var(--raikou-datatable-root-table-column-borders) / 65%))",
      },
    ".dataTable-root-tableWithColumnBordersAndSelectableRecords thead tr + tr th":
      {
        borderLeft:
          "1px solid rgb(var(--raikou-datatable-root-table-column-borders-and-selectable-records) / 65%))",
      },
    ".dataTable-root-verticalAlignmentTop td": {
      verticalAlign: "top",
    },
    ".dataTable-root-verticalAlignmentBottom td": {
      verticalAlign: "bottom",
    },
  });
};
