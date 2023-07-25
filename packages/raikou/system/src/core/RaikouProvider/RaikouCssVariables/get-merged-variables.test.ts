import { getMergedVariables } from "./get-merged-variables";
import { DEFAULT_THEME } from "../default-theme";
import {
  defaultCssVariablesResolver,
  CSSVariablesResolver,
} from "./default-css-variables-resolver";

const defaultVariables = defaultCssVariablesResolver(DEFAULT_THEME);

describe("@raikou/core/get-merged-variables", () => {
  it("returns default variables if no generator provided", () => {
    expect(getMergedVariables({ theme: DEFAULT_THEME })).toEqual(
      defaultVariables
    );
    expect(
      getMergedVariables({ theme: DEFAULT_THEME, generator: undefined })
    ).toEqual(defaultVariables);
  });

  it("merges default and provider variables", () => {
    const generator: CSSVariablesResolver = (theme) => ({
      variables: {
        "--raikou-color-red": theme.colors.red[5],
      },
      light: {
        "--raikou-color-blue": theme.colors.blue[5],
      },
      dark: {
        "--raikou-color-orange": theme.colors.orange[5],
      },
    });

    expect(getMergedVariables({ theme: DEFAULT_THEME, generator })).toEqual({
      variables: {
        ...defaultVariables.variables,
        "--raikou-color-red": DEFAULT_THEME.colors.red[5],
      },

      light: {
        ...defaultVariables.light,
        "--raikou-color-blue": DEFAULT_THEME.colors.blue[5],
      },

      dark: {
        ...defaultVariables.dark,
        "--raikou-color-orange": DEFAULT_THEME.colors.orange[5],
      },
    });
  });
});
