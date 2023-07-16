module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".stack-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "var(--stack-align)",
      justifyContent: "var(--stack-justify)",
      gap: "var(--stack-gap)",
    },
  });
};
