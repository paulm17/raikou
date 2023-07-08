import { cssVariablesObjectToString } from "./css-variables-object-to-string";

describe("@raikou/core/css-variables-object-to-string", () => {
  it("converts object to css variables string", () => {
    expect(
      cssVariablesObjectToString({
        "--raikou-color-white": "#fff",
        "--raikou-color-black": "#000",
      })
    ).toBe("--raikou-color-white: #fff;--raikou-color-black: #000;");
  });
});
