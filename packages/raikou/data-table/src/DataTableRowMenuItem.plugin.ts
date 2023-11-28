module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableRowMenuItem-root": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      paddingTop: "calc(var(--raikou-spacing-sm) / 2)",
      paddingBottom: "calc(var(--raikou-spacing-sm) / 2)",
      paddingLeft: "var(--raikou-spacing-sm)",
      paddingRight: "var(--raikou-spacing-sm)",
      transition: "background 0.15s ease",
      "& [disabled]": {
        cursor: "not-allowed",
        color: "var(--raikou-datatable-rowmenuitem-disabled-color)",
      },
      "&:hover:not([disabled])": {
        background:
          "rgba(var(--raikou-datatable-rowmenuitem-disabled-hover), 0.25)",
      },
      "&:active:not([disabled])": {
        background:
          "rgba(var(--raikou-datatable-rowmenuitem-disabled-active), 0.5)",
      },
    },
    ".dataTableRowMenuItem-icon": {
      fontSize: "0",
      marginRight: "var(--spacing-xs)",
    },
    ".dataTableRowMenuItem-title": {
      whiteSpace: "nowrap",
    },
  });
};
