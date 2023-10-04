module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTablePagination-root": {
      background: "var(--raikou-datatable-pagination-root)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--spacing-xs)",
    },
    // "@media (min-width: var(--raikou-breakpoint-sm))": {
    //   ".dataTablePagination-root": {
    //     flexDirection: "row",
    //   },
    // },
    ".dataTablePagination-text": {
      flex: "1 1 auto",
    },
    ".dataTablePagination-pagination": {
      opacity: "1",
      transition: "opacity 0.15s ease",
    },
    ".dataTablePagination-paginationFetching": {
      opacity: "0",
    },
  });
};
