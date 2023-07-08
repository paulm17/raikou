import { tests } from "@raikou/tests";
import { Kbd, KbdProps, KbdStylesNames } from "./Kbd";

const defaultProps: KbdProps = {};

describe("@raikou/core/Kbd", () => {
  tests.itSupportsSystemProps<KbdProps, KbdStylesNames>({
    component: Kbd,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: "@raikou/core/Kbd",
    stylesApiSelectors: ["root"],
  });
});
