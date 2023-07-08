import { tests, createContextContainer } from "@raikou/tests";
import { PopoverDropdown, PopoverDropdownProps } from "./PopoverDropdown";
import { Popover } from "../Popover";

const defaultProps: PopoverDropdownProps = {};

const TestContainer = createContextContainer(PopoverDropdown, Popover, {
  opened: true,
  withArrow: true,
  withinPortal: false,
});

describe("@raikou/core/PopoverDropdown", () => {
  tests.itSupportsSystemProps<PopoverDropdownProps>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/PopoverDropdown",
    stylesApiName: "Popover",
    stylesApiSelectors: ["dropdown", "arrow"],
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: PopoverDropdown,
    props: defaultProps,
    error: "Popover component was not found in the tree",
  });
});
