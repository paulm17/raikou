import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".text-root": {
      "-webkit-tap-highlight-color": "transparent",
      textDecoration: "none",
      fontSize: "var(--text-fz)",
      lineHeight: "var(--text-lh)",
      fontWeight: "normal",
      margin: "0",
      padding: "0",
      color: "var(--text-color)",

      "&[data-truncate]": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },

      '&[data-truncate="start"]': {
        direction: "rtl",
        textAlign: "right",

        '[dir="rtl"] &': {
          direction: "ltr",
          textAlign: "left",
        },
      },

      '&[data-variant="gradient"]': {
        backgroundImage: "var(--text-gradient)",
        backgroundClip: "text",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      },

      "&[data-line-clamp]": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": "var(--text-line-clamp)",
        "-webkit-box-orient": "vertical",
      },

      "&[data-inherit]": {
        lineHeight: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
      },

      "&[data-inline]": {
        "--_text-line-height": "1",
      },
    },
  });
};
