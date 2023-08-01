import { createContextContainer, tests } from "@raikou/tests";
import { MenuLabel, MenuLabelProps, MenuLabelStylesNames } from "./MenuLabel";
import { Menu } from "../Menu";

const TestContainer = createContextContainer(MenuLabel, Menu, { opened: true });

const defaultProps: MenuLabelProps = {};

describe("@raikou/core/MenuLabel", () => {
  tests.itSupportsSystemProps<MenuLabelProps, MenuLabelStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/MenuLabel",
    stylesApiSelectors: ["label"],
    stylesApiName: "Menu",
    compound: true,
    providerStylesApi: false,
  });
});
