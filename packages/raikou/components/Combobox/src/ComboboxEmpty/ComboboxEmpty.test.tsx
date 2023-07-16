import { tests, createContextContainer } from "@raikou/tests";
import { Combobox } from "../Combobox";
import {
  ComboboxEmpty,
  ComboboxEmptyProps,
  ComboboxEmptyStylesNames,
} from "./ComboboxEmpty";

const TestContainer = createContextContainer(ComboboxEmpty, Combobox, {
  withinPortal: false,
});

const defaultProps: ComboboxEmptyProps = {};

describe("@raikou/core/ComboboxEmpty", () => {
  tests.itSupportsSystemProps<ComboboxEmptyProps, ComboboxEmptyStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ComboboxEmpty",
    stylesApiSelectors: ["empty"],
    stylesApiName: "Combobox",
    selector: ".raikou-Combobox-empty",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxEmpty,
    props: defaultProps,
    error: "Combobox component was not found in tree",
  });
});
