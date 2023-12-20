import { convertCssVariables } from "./convert-css-variables";

const result = [
  ".raikou-test{--raikou-color-white: #fff;--raikou-color-black: #000;}",
  '.raikou-test[data-raikou-color-scheme="dark"]{--raikou-color-filled: red;}',
  '.raikou-test[data-raikou-color-scheme="light"]{--raikou-color-filled: blue;}',
];

describe("@raikou/core/convert-css-variables", () => {
  it("converts object to css variables string", () => {
    expect(
      convertCssVariables(
        {
          variables: {
            "--raikou-color-white": "#fff",
            "--raikou-color-black": "#000",
          },

          dark: {
            "--raikou-color-filled": "red",
          },

          light: {
            "--raikou-color-filled": "blue",
          },
        },
        ".raikou-test"
      )
    ).toBe(result.join(""));
  });
});
