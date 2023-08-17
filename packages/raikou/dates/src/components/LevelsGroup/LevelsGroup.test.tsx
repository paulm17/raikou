import { tests } from "@raikou/tests";
import {
  LevelsGroup,
  LevelsGroupProps,
  LevelsGroupStylesNames,
} from "./LevelsGroup";

const defaultProps: LevelsGroupProps = {};

describe("@raikou/dates/LevelsGroup", () => {
  tests.itSupportsSystemProps<LevelsGroupProps, LevelsGroupStylesNames>({
    component: LevelsGroup,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/dates/LevelsGroup",
    stylesApiSelectors: ["levelsGroup"],
  });
});
