import { rem } from "@raikou/core";

const group = function ({ addComponents }: any) {
  addComponents({
    ".loader-root": {
      "--loader-size-xs": rem("18px"),
      "--loader-size-sm": rem("22px"),
      "--loader-size-md": rem("36px"),
      "--loader-size-lg": rem("44px"),
      "--loader-size-xl": rem("58px"),
      "--loader-size": "var(--loader-size-md)",
      "--loader-color": "var(--raikou-primary-color-filled)",
    },
    "@keyframes bars-loader-animation": {
      "0%": {
        transform: "scale(0.6)",
        opacity: "0",
      },
      "50%, 100%": {
        transform: "scale(1)",
      },
    },
    ".bars-loader": {
      position: "relative",
      width: "var(--loader-size)",
      height: "var(--loader-size)",
      display: "flex",
      gap: "calc(var(--loader-size) / 5)",
    },
    ".bar": {
      flex: "1",
      background: "var(--loader-color)",
      animation:
        "bars-loader-animation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite",
      borderRadius: "rem(2px)",

      "&:nth-of-type(1)": {
        animationDelay: "-240ms",
      },

      "&:nth-of-type(2)": {
        animationDelay: "-120ms",
      },

      "&:nth-of-type(3)": {
        animationDelay: "0",
      },
    },
    "@keyframes loader-dots-animation": {
      "0%, 100%": {
        transform: "scale(1)",
        opacity: "1",
      },
      "50%": {
        transform: "scale(0.6)",
        opacity: "0.5",
      },
    },
    ".dots-loader": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "calc(var(--loader-size) / 10)",
      position: "relative",
      width: "var(--loader-size)",
      height: "var(--loader-size)",
    },
    ".dot": {
      width: "calc(var(--loader-size) / 3 - var(--loader-size) / 15)",
      height: "calc(var(--loader-size) / 3 - var(--loader-size) / 15)",
      borderRadius: "50%",
      background: "var(--loader-color)",
      animation: "loader-dots-animation 0.8s linear infinite",

      "&:nth-child(2)": {
        animationDelay: "-400ms",
      },
    },
    "@keyframes oval-loader-animation": {
      "0%": {
        transform: "rotate(0deg)",
      },

      "100%": {
        transform: "rotate(360deg)",
      },
    },
    ".oval-loader": {
      display: "inline-block",
      width: "var(--loader-size)",
      height: "var(--loader-size)",

      "&::after": {
        content: '""',
        display: "block",
        width: "var(--loader-size)",
        height: "var(--loader-size)",
        borderRadius: rem("10000px"),
        borderWidth: "calc(var(--loader-size) / 8)",
        borderStyle: "solid",
        borderColor:
          "var(--loader-color) var(--loader-color) var(--loader-color) transparent",
        animation: "oval-loader-animation 1.2s linear infinite",
      },
    },
    ".progress-loader": {
      display: "flex",
      svg: {
        width: "var(--loader-size)",
        height: "var(--loader-size)",
        stroke: "var(--loader-color)",
      },
    },
  });
};
module.exports = group;
