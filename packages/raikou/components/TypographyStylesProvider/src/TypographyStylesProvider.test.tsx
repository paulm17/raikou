import { tests } from "@raikou/tests";
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
  TypographyStylesProviderStylesNames,
} from "./TypographyStylesProvider";

const defaultProps: TypographyStylesProviderProps = {};

describe("@mantine/core/TypographyStylesProvider", () => {
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
    displayName: "@mantine/core/TypographyStylesProvider",
    stylesApiSelectors: ["root"],
  });
});
