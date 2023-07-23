import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    "@keyframes stripes-animation": {
      "0%": {
        backgroundPosition: "0 0",
      },

      "100%": {
        backgroundPosition: `${rem("40px")} 0`,
      },
    },

    ".progress-root": {
      "--progress-size-xs": rem("3px"),
      "--progress-size-sm": rem("5px"),
      "--progress-size-md": rem("8px"),
      "--progress-size-lg": rem("12px"),
      "--progress-size-xl": rem("16px"),

      position: "relative",
      height: "var(--progress-size)",
      borderRadius: "var(--progress-radius)",
      overflow: "hidden",
      backgroundColor: "var(--_track-bg)",
      display: "flex",

      '[data-raikou-color-scheme="light"] &': {
        "--_track-bg": "var(--mantine-color-gray-2)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_track-bg": "var(--mantine-color-dark-4)",
      },
    },

    ".progress-section": {
      backgroundColor: "var(--progress-section-color)",
      height: "100%",
      width: "var(--progress-section-width)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "var(--_section-radius)",
      backgroundSize: `${rem("20px")} ${rem("20px")}`,
      backgroundImage: "var(--_section-gradient)",
      animation: "var(--_section-animation)",

      "&[data-striped]": {
        "--_section-gradient": `linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        )`,
      },

      "&[data-animated]": {
        "--_section-animation": "stripes-animation 1s linear infinite",
      },

      "&:last-of-type": {
        "--_section-radius":
          "0 var(--progress-radius) var(--progress-radius) 0",

        '[dir="rtl"] &': {
          "--_section-radius":
            "var(--progress-radius) 0 0 var(--progress-radius)",
        },
      },

      "&:first-of-type": {
        "--_section-radius":
          "var(--progress-radius) 0 0 var(--progress-radius)",

        '[dir="rtl"] &': {
          "--_section-radius":
            "0 var(--progress-radius) var(--progress-radius) 0",
        },
      },
    },

    ".progress-label": {
      color: "var(--mantine-color-white)",
      fontWeight: "bold",
      userSelect: "none",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      fontSize: `min(calc(var(--progress-size) * 0.65), ${rem("18px")})`,
      lineHeight: "1",
      paddingLeft: rem("4px"),
      paddingRight: rem("4px"),
    },
  });
};
