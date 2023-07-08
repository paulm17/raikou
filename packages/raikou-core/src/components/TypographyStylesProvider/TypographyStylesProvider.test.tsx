import { tests } from "@raikou/tests";
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
  TypographyStylesProviderStylesNames,
} from "./TypographyStylesProvider";

const defaultProps: TypographyStylesProviderProps = {};

describe("@raikou/core/TypographyStylesProvider", () => {
  tests.itSupportsSystemProps<
    TypographyStylesProviderProps,
    TypographyStylesProviderStylesNames
  >({
    component: TypographyStylesProvider,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/TypographyStylesProvider",
    stylesApiSelectors: ["root"],
  });
});
