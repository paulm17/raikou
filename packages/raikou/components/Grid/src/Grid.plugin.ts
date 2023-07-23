module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".grid-root": {
      overflow: "hidden",
    },

    ".grid-inner": {
      width: "calc(100% + var(--grid-gutter))",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "var(--grid-justify)",
      alignItems: "var(--grid-align)",
      margin: "calc(var(--grid-gutter) / -2)",
    },

    ".grid-col": {
      flexShrink: "0",
      order: "var(--col-order)",
      flexBasis: "var(--col-flex-basis)",
      width: "var(--col-width)",
      maxWidth: "var(--col-max-width)",
      flexGrow: "var(--col-flex-grow, 0)",
      marginLeft: "var(--_col-ml, var(--col-offset, 0))",
      marginRight: "var(--_col-mr, 0)",
      padding: "calc(var(--grid-gutter) / 2)",

      '[dir="rtl"] &': {
        "--_col-ml": "0",
        "--_col-mr": "var(--col-offset, 0)",
      },
    },
  });
};
