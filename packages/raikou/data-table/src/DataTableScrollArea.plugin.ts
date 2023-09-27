module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableScrollArea-root": {
      flex: "1 1 100%",
    },
    ".dataTableScrollArea-scrollbar": {
      '&[data-state="visible"]': { background: "transparent" },
      "div:before": { pointerEvents: "none" },
    },
    ".dataTableScrollArea-corner": {
      background: "transparent",
    },
    ".dataTableScrollArea-thumb": {
      zIndex: "3",
    },
    ".dataTableScrollArea-shadow": {
      position: "absolute",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity .15s ease",
    },
    ".dataTableScrollArea-topShadow": {
      zIndex: "2",
      left: "0",
      right: "0",
      height: "var(--raikou-spacing-sm)",
    },
    ".dataTableScrollArea-leftShadow": {
      zIndex: "3",
      top: "0",
      left: "0",
      bottom: "0",
      width: "var(--raikou-spacing-sm)",
    },
    ".dataTableScrollArea-rightShadow": {
      zIndex: "2",
      top: "0",
      bottom: "0",
      right: "0",
      width: "var(--raikou-spacing-sm)",
    },
    ".dataTableScrollArea-bottomShadow": {
      zIndex: "2",
      left: "0",
      right: "0",
      height: "var(--raikou-spacing-sm)",
    },
    ".dataTableScrollArea-shadowVisible": {
      opacity: "1",
    },
  });
};
