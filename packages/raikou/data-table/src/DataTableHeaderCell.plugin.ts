module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTable-sortableColumnHeader": {
      cursor: "pointer",
      transition: "background .15s ease",
      "&:hover:not(:has(button:hover))": {
        background: "var(--raikou-datatable-sortable-column-header-border)",
      },
    },
    ".dataTable-sortableColumnHeaderGroup.dataTable-sortableColumnHeaderGroup":
      {
        gap: "0.25em",
      },
    ".dataTable-columnHeaderText": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    ".dataTable-sortableColumnHeaderText": {
      minWidth: "0",
      flexGrow: "1",
    },
    ".dataTable-sortableColumnHeaderIcon": {
      transition: "transform .15s ease",
    },
    ".dataTable-sortableColumnHeaderIconRotated": {
      transform: "rotate3d(0, 0, 1, 180deg)",
    },
    ".dataTable-sortableColumnHeaderUnsortedIcon": {
      color: "var(--raikou-datatable-sortable-column-header-icon-color)",
      transition: "color .15s ease",
      "th:hover &": {
        color:
          "var(--raikou-datatable-sortable-column-header-icon-color-hover)",
      },
    },
  });
};
