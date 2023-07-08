import { tests } from "@raikou/tests";
import { Mark, MarkProps, MarkStylesNames } from "./Mark";

const defaultProps: MarkProps = {};

describe("@raikou/core/Mark", () => {
  tests.itSupportsSystemProps<MarkProps, MarkStylesNames>({
    component: Mark,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLElement,
    displayName: "@raikou/core/Mark",
    stylesApiSelectors: ["root"],
  });
});
