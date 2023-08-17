module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-timeWrapper": {
      display: "flex",
      alignItems: "stretch",
      marginTop: "var(--raikou-spacing-md)",
    },

    ".dates-timeInput": {
      flex: "1",
      marginRight: "var(--_mr, var(--raikou-spacing-md))",
      marginLeft: "var(--_ml, 0)",

      '[dir="rtl"] &': {
        "--_mr": "0",
        "--_ml": "var(--raikou-spacing-md)",
      },
    },
  });
};
