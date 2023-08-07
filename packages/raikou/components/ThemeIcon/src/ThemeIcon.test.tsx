import { tests } from "@raikou/tests";
import { ThemeIcon, ThemeIconProps, ThemeIconStylesNames } from "./ThemeIcon";

const defaultProps: ThemeIconProps = {};

describe("@raikou/core/ThemeIcon", () => {
  tests.itSupportsSystemProps<ThemeIconProps, ThemeIconStylesNames>({
    component: ThemeIcon,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ThemeIcon",
    stylesApiSelectors: ["root"],
  });
});
