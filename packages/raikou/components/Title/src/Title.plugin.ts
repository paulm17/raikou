module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".title-root": {
      margin: 0,
      fontWeight: "var(--title-fw)",
      fontSize: "var(--title-fz)",
      lineHeight: "var(--title-lh)",
      fontFamily: "var(--raikou-font-family-headings)",
    },
  });
};
