import { tests, createContextContainer } from "@raikou/tests";
import { ListItem, ListItemProps, ListItemStylesNames } from "./ListItem";
import { List } from "../List";

const TestContainer = createContextContainer(ListItem, List, {});

const defaultProps: ListItemProps = {
  icon: "$",
};

describe("@raikou/core/ListItem", () => {
  tests.itSupportsSystemProps<ListItemProps, ListItemStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLLIElement,
    displayName: "@raikou/core/ListItem",
    stylesApiSelectors: ["item", "itemIcon", "itemLabel", "itemWrapper"],
    selector: "li",
    providerStylesApi: false,
    compound: true,
    stylesApiName: "List",
  });
});
