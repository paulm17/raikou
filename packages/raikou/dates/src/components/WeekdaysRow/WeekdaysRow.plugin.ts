module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-weekday": {
      color: "var(--raikou-color-dimmed)",
      fontWeight: "normal",
      fontSize: "var(--wr-fz)",
      textTransform: "capitalize",
      paddingBottom: "calc(var(--wr-spacing) / 2)",
    },
  });
};
