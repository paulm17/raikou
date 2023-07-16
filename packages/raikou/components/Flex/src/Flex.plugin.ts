module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".flex-root": {
      display: "flex",
      gap: "var(--flex-gap)",
      alignItems: "var(--flex-align)",
      justifyContent: "var(--flex-justify)",
      flexFlow: "var(--flex-direction) var(--flex-wrap)",
    },
  });
};
