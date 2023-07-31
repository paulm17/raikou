module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".image-root": {
      display: "block",
      objectFit: "var(--image-object-fit, cover)",
      width: "100%",
      borderRadius: "var(--image-radius, 0)",
    },
  });
};
