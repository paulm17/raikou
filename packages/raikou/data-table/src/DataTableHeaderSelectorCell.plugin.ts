module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableHeaderSelectorCell-root": {
      "--shadow-gradient-alpha": "0.05",
      position: "sticky",
      width: "0",
      left: "0",
      background: "inherit",
    },
    ".dataTableHeaderSelectorCell-root:after": {
      content: '""',
      position: "absolute",
      top: "0",
      right: "var(--raikou-spacing-sm)",
      bottom: "0",
      width: "var(--raikou-spacing-sm)",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.15s ease",
      borderLeft:
        "1px solid var(--raikou-datatable-header-selectorcell-border-left)",
      background: "var(--raikou-datatable-header-selectorcell-background)",
    },
    ".dataTableHeaderSelectorCell-shadowVisible:after": {
      opacity: "1",
    },
    ".dataTableHeaderSelectorCell-checkboxInput": {
      cursor: "pointer",
    },
  });
};
