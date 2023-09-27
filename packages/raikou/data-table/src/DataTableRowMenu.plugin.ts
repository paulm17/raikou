module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableRowMenu-root": {
      position: "fixed",
      overflow: "hidden",
      transition: "all .15s ease",
      border: "1px solid var(--raikou-datatable-rowmenu-root)",
    },
  });
};
