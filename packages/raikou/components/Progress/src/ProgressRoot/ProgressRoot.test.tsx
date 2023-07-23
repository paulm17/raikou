import { tests } from "@raikou/tests";
import {
  ProgressRoot,
  ProgressRootProps,
  ProgressRootStylesNames,
} from "./ProgressRoot";

const defaultProps: ProgressRootProps = {};

describe("@raikou/core/ProgressRoot", () => {
  tests.itSupportsSystemProps<ProgressRootProps, ProgressRootStylesNames>({
    component: ProgressRoot,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ProgressRoot",
    stylesApiSelectors: ["root"],
    stylesApiName: "Progress",
  });
});
