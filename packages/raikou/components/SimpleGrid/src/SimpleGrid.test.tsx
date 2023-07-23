import { tests } from "@raikou/tests";
import {
  SimpleGrid,
  SimpleGridProps,
  SimpleGridStylesNames,
} from "./SimpleGrid";

const defaultProps: SimpleGridProps = {};

describe("@raikou/core/SimpleGrid", () => {
  tests.itSupportsSystemProps<SimpleGridProps, SimpleGridStylesNames>({
    component: SimpleGrid,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/SimpleGrid",
    stylesApiSelectors: ["root"],
  });
});
