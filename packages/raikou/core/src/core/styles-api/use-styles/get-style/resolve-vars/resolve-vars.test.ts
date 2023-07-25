import { DEFAULT_THEME, RaikouTheme } from "../../../../RaikouProvider";
import { resolveVars } from "./resolve-vars";

const themeWithVars: RaikouTheme = {
  ...DEFAULT_THEME,
  components: {
    Test: {
      vars: (theme: any, props: any, stylesCtx: any) => ({
        root: {
          "--theme": theme.colors.red[0],
          "--prop": props["data-prop"],
          "--ctx": stylesCtx?.["data-ctx"],
        },
      }),
    },
  },
};

describe("@raikou/core/resolve-vars", () => {
  it("resolves vars from varsResolver", () => {
    expect(
      resolveVars({
        vars: undefined,
        themeName: ["Test"],
        varsResolver: (theme, props, stylesCtx) => ({
          root: {
            "--theme": theme.colors.red[0],
            "--prop": props["data-prop"],
            "--ctx": stylesCtx?.["data-ctx"],
          },
        }),
        selector: "root",
        theme: DEFAULT_THEME,
        props: { "data-prop": "red" },
        stylesCtx: { "data-ctx": "pink" },
      }),
    ).toStrictEqual({
      "--theme": DEFAULT_THEME.colors.red[0],
      "--prop": "red",
      "--ctx": "pink",
    });
  });

  it("resolves vars from vars", () => {
    expect(
      resolveVars({
        varsResolver: undefined,
        themeName: ["Test"],
        vars: (theme, props, stylesCtx) => ({
          root: {
            "--theme": theme.colors.red[0],
            "--prop": props["data-prop"],
            "--ctx": stylesCtx?.["data-ctx"],
          },
        }),
        selector: "root",
        theme: DEFAULT_THEME,
        props: { "data-prop": "red" },
        stylesCtx: { "data-ctx": "pink" },
      }),
    ).toStrictEqual({
      "--theme": DEFAULT_THEME.colors.red[0],
      "--prop": "red",
      "--ctx": "pink",
    });
  });

  it("resolves vars from theme", () => {
    expect(
      resolveVars({
        varsResolver: undefined,
        vars: undefined,
        themeName: ["Test"],
        selector: "root",
        theme: themeWithVars,
        props: { "data-prop": "red" },
        stylesCtx: { "data-ctx": "pink" },
      }),
    ).toStrictEqual({
      "--theme": themeWithVars.colors.red[0],
      "--prop": "red",
      "--ctx": "pink",
    });
  });
});
