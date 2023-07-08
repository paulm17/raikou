import { tests, createContextContainer } from "@raikou/tests";
import { Combobox } from "../Combobox";
import {
  ComboboxSearch,
  ComboboxSearchProps,
  ComboboxSearchStylesNames,
} from "./ComboboxSearch";

const TestContainer = createContextContainer(ComboboxSearch, Combobox, {
  withinPortal: false,
});

const defaultProps: ComboboxSearchProps = {
  leftSection: "$",
};

describe("@raikou/core/ComboboxSearch", () => {
  tests.itSupportsSystemProps<ComboboxSearchProps, ComboboxSearchStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLInputElement,
    displayName: "@raikou/core/ComboboxSearch",
    stylesApiSelectors: ["input", "section", "wrapper"],
    stylesApiName: "Combobox",
    selector: ".raikou-Combobox-wrapper",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxSearch,
    props: defaultProps,
    error: "Combobox component was not found in tree",
  });

  tests.itSupportsFocusEvents({
    component: TestContainer,
    props: defaultProps,
    selector: ".raikou-Combobox-input",
  });
});
