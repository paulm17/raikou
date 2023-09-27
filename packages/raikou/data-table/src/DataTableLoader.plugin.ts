module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dataTableLoader-root": {
      zIndex: "3",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      pointerEvents: "none",
      opacity: "0",
      transition: "opacity 0.15s ease",
      background: "rgb(var(--raikou-datatable-loader-root) / 75%)",
    },
    ".dataTableLoader-fetching": {
      pointerEvents: "all",
      opacity: "1",
    },
  });
};
