module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableHeader-root": {
      zIndex: "2",
      position: "sticky",
      top: "0",
      background: "var(--raikou-datatable-header-root)",
    },
  });
};
