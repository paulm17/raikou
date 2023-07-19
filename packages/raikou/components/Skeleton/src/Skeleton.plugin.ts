module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    "@keyframes skeleton-fade": {
      "0%, 100%": {
        opacity: "0.4",
      },

      "50%": {
        opacity: "1",
      },
    },

    ".skeleton-root": {
      height: "var(--skeleton-height)",
      width: "var(--skeleton-width)",
      borderRadius: "var(--skeleton-radius)",
      position: "relative",
      transform: "translateZ(0)",
      "-webkit-transform": "translateZ(0)",

      "&[data-animate]::after": {
        animation: "skeleton-fade 1500ms linear infinite",
      },

      "&[data-visible]": {
        overflow: "hidden",

        "&::before": {
          position: "absolute",
          content: '""',
          inset: "0",
          zIndex: "10",
          backgroundColor: "var(--raikou-color-body)",
        },

        "&::after": {
          position: "absolute",
          content: '""',
          inset: "0",
          zIndex: "11",

          '[data-raikou-color-scheme="light"] &': {
            backgroundColor: "var(--raikou-color-gray-3)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            backgroundColor: "var(--raikou-color-dark-4)",
          },
        },
      },
    },
  });
};
