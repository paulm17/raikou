module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".backgroundImage-root": {
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "block",
      width: "100%",
      border: 0,
      textDecoration: "none",
      borderRadius: "var(--bi-radius)",
    },
  });
};
