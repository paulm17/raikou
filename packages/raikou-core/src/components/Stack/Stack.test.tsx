import { tests } from "@raikou/tests";
import { Stack, StackProps, StackStylesNames } from "./Stack";

const defaultProps: StackProps = {};

describe("@raikou/core/Stack", () => {
  tests.itSupportsSystemProps<StackProps, StackStylesNames>({
    component: Stack,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Stack",
    stylesApiSelectors: ["root"],
  });
});
