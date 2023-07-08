module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".aspectRatio-root": {
      position: "relative",
      maxWidth: "100%",

      "&::before": {
        content: '""',
        height: 0,
        display: "block",
        paddingBottom: "calc((1 / var(--ar-ratio)) * 100%)",
      },

      "&::after": {
        content: '""',
        display: "table",
        clear: "both",
      },

      "& > *:not(style)": {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      "& > img, & > video": {
        objectFit: "cover",
      },
    },
  });
};
