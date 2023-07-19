module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".anchor-root": {
      color: "var(--raikou-color-anchor)",
      textDecoration: "var(--_text-decoration, none) !important",
      appearance: "none",
      border: "none",
      display: "inline",
      padding: "0",
      margin: "0",
      backgroundColor: "transparent",
      cursor: "pointer",

      '&[data-underline="hover"]': {
        "@media (hover: hover)": {
          "&:hover": {
            "--_text-decoration": "underline",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "--_text-decoration": "underline",
          },
        },
      },

      '&[data-underline="always"]': {
        "--_text-decoration": "underline",
      },
    },
  });
};
