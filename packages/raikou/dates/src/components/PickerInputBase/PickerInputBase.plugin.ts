module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-pickerInput-input": {
      cursor: "var(--_cursor, pointer)",
      lineHeight: "unset",

      "&[data-read-only]": {
        "--_cursor": "default",
      },
    },
  });
};
