import { tests } from "@raikou/tests";
import {
  RingProgress,
  RingProgressProps,
  RingProgressStylesNames,
} from "./RingProgress";

const defaultProps: RingProgressProps = {
  size: 100,
  label: "test",
  sections: [{ value: 20, color: "orange" }],
};

describe("@raikou/core/RingProgress", () => {
  tests.itSupportsSystemProps<RingProgressProps, RingProgressStylesNames>({
    component: RingProgress,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/RingProgress",
    stylesApiSelectors: ["root", "svg", "curve", "label"],
  });
});
