module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".simpleGrid-root": {
      display: "grid",
      "grid-template-columns": "repeat(var(--sg-cols), minmax(0, 1fr))",
      gap: "var(--sg-spacing-y) var(--sg-spacing-x)",
    },
  });
};
