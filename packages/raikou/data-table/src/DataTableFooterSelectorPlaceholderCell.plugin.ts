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
      right: "-var(--mantine-spacing-sm)",
      bottom: "0",
      width: "var(--mantine-spacing-sm)",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.15s ease",
      '[data-raikou-color-scheme="light"] &': {
        color: "--raikou-color-white",
        borderLeft: "1px solid var(--mantine-color-gray-3)",

        background:
          "linear-gradient(to right, rgba(var(--mantine-color-black) / 0.05), rgba(var(--mantine-color-black) / 0)), linear-gradient(to right, rgba(var(--mantine-color-black) / 0.05), rgba(var(--mantine-color-black) / 0) 30%)",
      },
      '[data-raikou-color-scheme="dark"] &': {
        borderLeft: "1px solid var(--mantine-color-dark-4)",
        background:
          "linear-gradient(to right, rgba(var(--mantine-color-black) / 0.5), rgba(var(--mantine-color-black) / 0)), linear-gradient(to right, rgba(var(--mantine-color-black) / 0.5), rgba(var(--mantine-color-black) / 0) 30%)",
      },
    },
    ".dataTableFooterSelectorPlaceholderCell-shadowVisible:after": {
      opacity: "1",
    },
  });
};
