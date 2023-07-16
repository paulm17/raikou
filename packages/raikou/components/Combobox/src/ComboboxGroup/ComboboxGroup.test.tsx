import { tests, createContextContainer } from "@raikou/tests";
import { Combobox } from "../Combobox";
import {
  ComboboxGroup,
  ComboboxGroupProps,
  ComboboxGroupStylesNames,
} from "./ComboboxGroup";

const TestContainer = createContextContainer(ComboboxGroup, Combobox, {
  withinPortal: false,
});

const defaultProps: ComboboxGroupProps = {
  label: "test-label",
};

describe("@raikou/core/ComboboxGroup", () => {
  tests.itSupportsSystemProps<ComboboxGroupProps, ComboboxGroupStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ComboboxGroup",
    stylesApiSelectors: ["group", "groupLabel"],
    stylesApiName: "Combobox",
    selector: ".raikou-Combobox-group",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxGroup,
    props: defaultProps,
    error: "Combobox component was not found in tree",
  });
});
