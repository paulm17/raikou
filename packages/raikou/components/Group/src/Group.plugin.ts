module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".group-root": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "var(--group-wrap, wrap)",
      justifyContent: "var(--group-justify)",
      alignItems: "var(--group-align)",
      gap: "var(--group-gap)",

      "&[data-grow]": {
        "& > *": {
          flexGrow: "1",
          maxWidth: "var(--group-child-width)",
        },
      },
    },
  });
};
