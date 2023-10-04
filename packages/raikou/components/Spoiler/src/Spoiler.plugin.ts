import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".spoiler-root": {
      position: "relative",
      marginBottom: "var(--_spoiler-margin-bottom)",

      "&[data-has-spoiler]": {
        "--_spoiler-margin-bottom": rem("24px"),
      },
    },
    ".spoiler-content": {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      transition: "max-height var(--spoiler-transition-duration, 200ms) ease",
    },
    ".spoiler-control": {
      position: "absolute",
      left: "0",
      top: "100%",
      height: rem("24px"),
    },
  });
};
