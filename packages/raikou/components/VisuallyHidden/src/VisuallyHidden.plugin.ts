module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".visuallyHidden-root": {
      border: "0",
      clip: "rect(0 0 0 0)",
      height: "1px",
      width: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      whiteSpace: "nowrap",
    },
  });
};
