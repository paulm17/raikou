import { createContextContainer, tests } from "@raikou/tests";
import {
  MenuDropdown,
  MenuDropdownProps,
  MenuDropdownStylesNames,
} from "./MenuDropdown";
import { Menu } from "../Menu";

const TestContainer = createContextContainer(MenuDropdown, Menu, {
  opened: true,
  withinPortal: false,
});

const defaultProps: MenuDropdownProps = {};

describe("@raikou/core/MenuDropdown", () => {
  tests.itSupportsSystemProps<MenuDropdownProps, MenuDropdownStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/MenuDropdown",
    stylesApiSelectors: ["dropdown"],
    stylesApiName: "Menu",
    compound: true,
    providerStylesApi: false,
  });
});
