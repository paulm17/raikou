import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".nProgress-root": {
      position: "fixed",
      top: "0",
      right: "0",
      left: "0",
      zIndex: "var(--nprogress-z-index)",
      backgroundColor: "transparent",
      transition: "opacity 150ms ease",
      transitionDelay: "50ms",
      opacity: "var(--_nprogress-opacity, 0)",
      overflow: "visible",

      "&[data-mounted]": {
        "--_nprogress-opacity": "1",
      },
    },

    ".nProgress-section": {
      position: "relative",
      transition: "width 150ms ease",
      overflow: "visible",

      "&::before": {
        content: "''",
        position: "absolute",
        width: rem("100px"),
        height: "var(--progress-size)",
        top: "0",
        right: "1px",
        transform: "rotate(4deg) translateY(-4px)",
        boxShadow:
          "0 0 10px var(--progress-section-color), 0 0 5px var(--progress-section-color)",
      },
    },
  });
};
