module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".center-root": {
      display: "var(--center-display, flex)",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
