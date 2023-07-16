import { tests } from "@raikou/tests";
import {
  AvatarGroup,
  AvatarGroupProps,
  AvatarGroupStylesNames,
} from "./AvatarGroup";

const defaultProps: AvatarGroupProps = {};

describe("@raikou/core/AvatarGroup", () => {
  tests.itSupportsSystemProps<AvatarGroupProps, AvatarGroupStylesNames>({
    component: AvatarGroup,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/AvatarGroup",
    stylesApiSelectors: ["root"],
  });
});
