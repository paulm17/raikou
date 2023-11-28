module.exports = function ({ addComponents }: any) {
  addComponents({
    "dataTableFooterSelectorPlaceholderCell-root": {
      position: "sticky",
      width: "0",
      left: "0",
      background: "inherit",
    },
    "dataTableFooterSelectorPlaceholderCell-root:after": {
      content: '""',
      position: "absolute",
      top: "0",
      right: "-var(--raikou-spacing-sm)",
      bottom: "0",
      width: "var(--raikou-spacing-sm)",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.15s ease",
      borderLeft:
        "1px solid var(--raikou-datatable-footer-selector-placeholdercell-root)",
      '[data-raikou-color-scheme="light"] &': {
        color: "--raikou-color-white",
        background:
          "linear-gradient(to right, rgba(var(--raikou-color-black) / 0.05), rgba(var(--raikou-color-black) / 0)), linear-gradient(to right, rgba(var(--raikou-color-black) / 0.05), rgba(var(--raikou-color-black) / 0) 30%)",
      },
      '[data-raikou-color-scheme="dark"] &': {
        background:
          "linear-gradient(to right, rgba(var(--raikou-color-black) / 0.5), rgba(var(--raikou-color-black) / 0)), linear-gradient(to right, rgba(var(--raikou-color-black) / 0.5), rgba(var(--raikou-color-black) / 0) 30%)",
      },
    },
    ".dataTableFooterSelectorPlaceholderCell-shadowVisible:after": {
      opacity: "1",
    },
  });
};
