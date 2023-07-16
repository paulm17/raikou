import { tests } from "@raikou/tests";
import {
  AspectRatio,
  AspectRatioProps,
  AspectRatioStylesNames,
} from "./AspectRatio";

const defaultProps: AspectRatioProps = {};

describe("@raikou/core/AspectRatio", () => {
  tests.itSupportsSystemProps<AspectRatioProps, AspectRatioStylesNames>({
    component: AspectRatio,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/AspectRatio",
    stylesApiSelectors: ["root"],
  });
});
