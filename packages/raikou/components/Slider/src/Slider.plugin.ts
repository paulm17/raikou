import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".slider-root": {
      "--slider-size-xs": rem("4px"),
      "--slider-size-sm": rem("6px"),
      "--slider-size-md": rem("8px"),
      "--slider-size-lg": rem("10px"),
      "--slider-size-xl": rem("12px"),

      "--slider-size": "var(--slider-size-md)",
      "--slider-radius": rem("1000px"),
      "--slider-color": "var(--raikou-primary-color-filled)",

      "-webkit-tap-highlight-color": "transparent",
      outline: "none",
      height: "calc(var(--slider-size) * 2)",
      paddingLeft: "var(--slider-size)",
      paddingRight: "var(--slider-size)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      touchAction: "none",
      position: "relative",

      '[data-raikou-color-scheme="light"] &': {
        "--slider-track-bg": "var(--raikou-slider-track-bg)",
        "--slider-track-disabled-bg": "var(--raikou-slider-track-disabled-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--slider-track-bg": "var(--raikou-slider-track-bg)",
        "--slider-track-disabled-bg": "var(--raikou-slider-track-disabled-bg)",
      },
    },

    ".slider-label": {
      position: "absolute",
      top: rem("-36px"),
      backgroundColor: "var(--_label-bg)",
      fontSize: "var(--raikou-font-size-xs)",
      color: "var(--raikou-color-white)",
      padding: "calc(var(--raikou-spacing-xs) / 2)",
      borderRadius: "var(--raikou-radius-sm)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      userSelect: "none",
      touchAction: "none",

      '[data-raikou-color-scheme="light"] &': {
        "--_label-bg": "var(--raikou-slider-label-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_label-bg": "var(--raikou-slider-label-bg)",
      },
    },

    ".slider-thumb": {
      position: "absolute",
      display: "var(--_thumb-display, flex)",
      height: "var(--slider-thumb-size)",
      width: "var(--slider-thumb-size)",
      backgroundColor: "var(--_thumb-bg)",
      border: `${rem("4px")} solid var(--_thumb-bd)`,
      color: "var(--_thumb-bd)",
      transform: "var(--_thumb-transform, translate(-50%, -50%))",
      top: "50%",
      cursor: "pointer",
      borderRadius: "var(--slider-radius)",
      alignItems: "center",
      justifyContent: "center",
      transition: "box-shadow 100ms ease, transform 100ms ease",
      zIndex: "3",
      userSelect: "none",
      touchAction: "none",
      boxShadow: "var(--_thumb-box-shadow, none)",
      outlineOffset: rem("2px"),
      left: "var(--slider-thumb-offset)",

      '[dir="rtl"] &': {
        left: "auto",
        right: "calc(var(--slider-thumb-offset) - var(--slider-thumb-size))",
      },

      "fieldset:disabled &, &[data-disabled]": {
        "--_thumb-display": "none",
      },

      "&[data-dragging]": {
        "--_thumb-transform": "translate(-50%, -50%) scale(1.05)",
        "--_thumb-box-shadow": "var(--raikou-shadow-sm)",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_thumb-bd": "var(--raikou-slider-thumb-bd)",
        "--_thumb-bg": "var(--raikou-slider-thumb-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_thumb-bd": "var(--raikou-slider-thumb-bd)",
        "--_thumb-bg": "var(--raikou-slider-thumb-bg)",
      },
    },

    ".slider-trackContainer": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "calc(var(--slider-size) * 2)",
      cursor: "var(--_track-cursor, pointer)",

      "fieldset:disabled &, &[data-disabled]": {
        "--_track-cursor": "not-allowed",
      },
    },

    ".slider-track": {
      position: "relative",
      width: "100%",
      height: "var(--slider-size)",

      "&[data-inverted]:not([data-disabled])": {
        "--_track-bg": "var(--slider-color)",
      },

      "fieldset:disabled &[data-inverted], &[data-inverted][data-disabled]": {
        "--_track-bg": "var(--slider-track-disabled-bg)",
      },

      "&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        bottom: "0",
        borderRadius: "var(--slider-radius)",
        right: "calc(var(--slider-size) * -1)",
        left: "calc(var(--slider-size) * -1)",
        backgroundColor: "var(--_track-bg, var(--slider-track-bg))",
        zIndex: "0",
      },
    },

    ".slider-bar": {
      position: "absolute",
      zIndex: "1",
      top: "0",
      bottom: "0",
      backgroundColor: "var(--_bar-bg, var(--slider-color))",
      borderRadius: "var(--slider-radius)",
      width: "var(--slider-bar-width)",
      left: "var(--slider-bar-offset)",

      '[dir="rtl"] &': {
        left: "auto",
        right: "var(--slider-bar-offset)",
      },

      "&[data-inverted]": {
        "--_bar-bg": "var(--slider-track-bg)",
      },

      "fieldset:disabled &:not([data-inverted]), &[data-disabled]:not([data-inverted])":
        {
          "--_bar-bg": "var(--_bar-disabled-bg)",
        },

      '[data-raikou-color-scheme="light"] &': {
        "--_bar-disabled-bg": "var(--raikou-slider-bar-disabled-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_bar-disabled-bg": "var(--raikou-slider-bar-disabled-bg)",
      },
    },

    ".slider-markWrapper": {
      position: "absolute",
      left: "calc(var(--mark-offset) - var(--slider-size) / 2)",
      top: "0",
      zIndex: "2",
      height: "0",
      pointerEvents: "none",

      '[dir="rtl"] &': {
        left: "unset",
        right: "calc(var(--mark-offset) - var(--slider-size) / 2)",
      },
    },

    ".slider-mark": {
      border: `${rem("2px")} solid var(--_mark-bd)`,
      height: "var(--slider-size)",
      width: "var(--slider-size)",
      borderRadius: rem("1000px"),
      transform: "translateX((calc(var(--slider-size) / -2)))",
      backgroundColor: "var(--_mark-bg, var(--raikou-color-white))",
      pointerEvents: "none",

      "&[data-filled]": {
        "[data-raikou-color-scheme] &": {
          "--_mark-bd": "var(--slider-color)",
        },

        "&[data-disabled]": {
          '[data-raikou-color-scheme="light"] &': {
            "--_mark-bd": "var(--raikou-slider-mark-disabled-bd)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_mark-bd": "var(--raikou-slider-mark-disabled-bd)",
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_mark-bd": "var(--raikou-slider-mark-bd)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_mark-bd": "var(--raikou-slider-mark-bd)",
      },
    },

    ".slider-markLabel": {
      transform:
        "translate(calc(-50% + var(--slider-size) / 2), calc(var(--raikou-spacing-xs) / 2))",
      fontSize: "var(--raikou-font-size-sm)",
      color: "var(--_mark-label-color)",
      whiteSpace: "nowrap",
      cursor: "pointer",
      userSelect: "none",

      '[data-raikou-color-scheme="light"] &': {
        "--_mark-label-color": "var(--raikou-slider-mark-label-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_mark-label-color": "var(--raikou-slider-mark-label-color)",
      },
    },
  });
};
