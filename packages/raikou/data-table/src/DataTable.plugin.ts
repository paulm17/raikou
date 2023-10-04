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
    ".dataTable-root thead tr th, .dataTable-root thead tr td": {
      borderRight: "none",
    },
    ".dataTable-root thead tr th": {
      borderBottom: "0.0625rem solid var(--raikou-datatable-root-th)",
      textAlign: "left",
      fontWeight: "bold",
      color: "rgb(193, 194, 197)",
      padding: "0.4375rem 0.625rem",
      fontSize: "0.875rem",
    },
    ".dataTable-root tbody tr td": {
      borderTop: "0.0625rem solid var(--raikou-datatable-root-td)",
      padding: "0.4375rem 0.625rem",
      fontSize: "0.875rem",
    },
    ".dataTable-root tbody tr:first-of-type td": {
      borderTop: "none",
    },
    ".dataTable-root .lastRowBorderBottomVisible tbody tr:last-of-type td": {
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
    ".dataTable-tableWithBorder": {
      border: "1px solid rgb(var(--raikou-datatable-root-tablewith-border))",
    },
    ".dataTable-tableWithColumnBorders th:not(:first-of-type), .dataTable-tableWithColumnBorders td:not(:first-of-type)":
      {
        borderLeft:
          "1px solid rgb(var(--raikou-datatable-root-table-column-borders) / 65%)",
      },
    ".dataTable-tableWithColumnBordersAndSelectableRecords thead tr + tr th": {
      borderLeft:
        "1px solid rgb(var(--raikou-datatable-root-table-column-borders-and-selectable-records) / 65%)",
    },
    ".dataTable-verticalAlignmentTop td": {
      verticalAlign: "top",
    },
    ".dataTable-verticalAlignmentBottom td": {
      verticalAlign: "bottom",
    },
  });
};
