module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".spoiler-root": {
      position: "relative",
    },
    ".spoiler-content": {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "max-height var(--spoiler-transition-duration, 200ms) ease",
    },
  });
};
