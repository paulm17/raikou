import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    "@keyframes indicator-pulse": {
      "0%": {
        opacity: "0.6",
        boxShadow: `0 0 ${rem("0.5px")} 0 var(--indicator-color)`,
      },

      "100%": {
        opacity: "0",
        boxShadow: `0 0 ${rem("0.5px")} ${rem("4.4px")} var(--indicator-color)`,
      },
    },

    ".indicator-root": {
      position: "relative",
      display: "var(--_indicator-display, block)",

      "&[data-inline]": {
        "--_indicator-display": "inline-block",
      },
    },

    ".indicator-indicator": {
      position: "absolute",
      top: "var(--indicator-top)",
      left: "var(--indicator-left)",
      right: "var(--indicator-right)",
      bottom: "var(--indicator-bottom)",
      transform:
        "translate(var(--indicator-translate-x), var(--indicator-translate-y))",
      minWidth: "var(--indicator-size)",
      height: "var(--indicator-size)",
      borderRadius: `var(--indicator-radius, ${rem("1000px")})`,
      zIndex: "var(--indicator-z-index, 200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "var(--raikou-font-size-xs)",
      paddingLeft: "var(--_indicator-padding, 0)",
      paddingRight: "var(--_indicator-padding, 0)",
      backgroundColor: "var(--indicator-color)",
      border: "var(--_indicator-border)",
      color: "var(--raikou-color-white)",
      whiteSpace: "nowrap",

      "&::before": {
        content: '""',
        position: "absolute",
        inset: "0",
        backgroundColor: "var(--indicator-color)",
        borderRadius: `var(--indicator-radius, ${rem("1000px")})`,
        zIndex: "-1",
      },

      "&[data-with-label]": {
        "--_indicator-padding": "calc(var(--raikou-spacing-xs) / 2)",
      },

      "&[data-with-border]": {
        "--_indicator-border": `${rem("2px")} solid var(--raikou-color-body)`,
      },

      "&[data-processing]": {
        "&::before": {
          animation: "indicator-pulse 1000ms linear infinite",
        },
      },
    },
  });
};
