import { tests } from "@raikou/tests";
import { Affix, AffixProps, AffixStylesNames } from "./Affix";

const defaultProps: AffixProps = {
  withinPortal: false,
};

describe("@raikou/core/Affix", () => {
  tests.itSupportsSystemProps<AffixProps, AffixStylesNames>({
    component: Affix,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Affix",
    stylesApiSelectors: ["root"],
  });
});
