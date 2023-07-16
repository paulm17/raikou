module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".center-root": {
      display: "var(--center-display)",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
