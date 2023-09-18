module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".group-root": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "var(--group-wrap, wrap)",
      justifyContent: "var(--group-justify, flex-start)",
      alignItems: "var(--group-align, center)",
      gap: "var(--group-gap, var(--mantine-spacing-md)",

      "&[data-grow]": {
        "& > *": {
          flexGrow: "1",
          maxWidth: "var(--group-child-width)",
        },
      },
    },
  });
};
