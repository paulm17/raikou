import { tests } from "@raikou/tests";
import { PillGroup, PillGroupProps, PillGroupStylesNames } from "./PillGroup";

const defaultProps: PillGroupProps = {};

describe("@raikou/core/PillGroup", () => {
  tests.itSupportsSystemProps<PillGroupProps, PillGroupStylesNames>({
    component: PillGroup,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/PillGroup",
    stylesApiSelectors: ["group"],
  });
});
