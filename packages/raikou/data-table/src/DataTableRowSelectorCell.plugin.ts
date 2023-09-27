module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableRowSelectorCell-root": {
      position: "sticky",
      zIndex: "1",
      width: "0",
      left: "0",
      background: "inherit",
    },
    ".dataTableRowSelectorCell-root:after": {
      content: '""',
      position: "absolute",
      top: "0",
      right: "-px(var(--raikou-spacing-sm))",
      bottom: "0",
      width: "var(--raikou-spacing-sm)",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity .15s ease",
    },
    ".dataTableRowSelectorCell-withRightShadow": {
      "&::after": {
        opacity: "1",
      },
    },
    ".dataTableRowSelectorCell-checkbox": {
      cursor: "pointer",
    },
  });
};
