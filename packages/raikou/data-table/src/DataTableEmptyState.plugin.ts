module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableEmptyState-root": {
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      flexDirection: "column",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.15s ease",
      color: "var(--raikou-datatable-empty-state-root)",
    },
    ".dataTableEmptyState-active": {
      opacity: "1",
    },
    ".dataTableEmptyState-standardIcon": {
      fontSize: "0",
      borderRadius: "50%",
      padding: "var(--spacing-xs)",
    },
  });
};
