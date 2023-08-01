import { createContextContainer, tests } from "@raikou/tests";
import {
  MenuDivider,
  MenuDividerProps,
  MenuDividerStylesNames,
} from "./MenuDivider";
import { Menu } from "../Menu";

const TestContainer = createContextContainer(MenuDivider, Menu, {
  opened: true,
});

const defaultProps: MenuDividerProps = {};

describe("@raikou/core/MenuDivider", () => {
  tests.itSupportsSystemProps<MenuDividerProps, MenuDividerStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/MenuDivider",
    stylesApiSelectors: ["divider"],
    stylesApiName: "Menu",
    compound: true,
    providerStylesApi: false,
  });
});
