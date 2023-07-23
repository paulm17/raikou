module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".ringProgress-root": {
      position: "relative",
      width: "var(--rp-size)",
      height: "var(--rp-size)",
      minWidth: "var(--rp-size)",
      minHeight: "var(--rp-size)",
    },

    ".ringProgress-svg": {
      width: "var(--rp-size)",
      height: "var(--rp-size)",
      minWidth: "var(--rp-size)",
      minHeight: "var(--rp-size)",
      transform: "rotate(-90deg)",
    },

    ".ringProgress-curve": {
      stroke: "var(--curve-color, var(--_curve-root-color))",

      '[data-raikou-color-scheme="light"] &': {
        "--_curve-root-color": "var(--raikou-color-gray-2)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_curve-root-color": "var(--raikou-color-dark-4)",
      },
    },

    ".ringProgress-label": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "var(--rp-label-offset)",
      left: "var(--rp-label-offset)",
    },
  });
};
