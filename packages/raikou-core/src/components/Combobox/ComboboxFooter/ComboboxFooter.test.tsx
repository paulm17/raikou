import { tests, createContextContainer } from "@raikou/tests";
import { Combobox } from "../Combobox";
import {
  ComboboxFooter,
  ComboboxFooterProps,
  ComboboxFooterStylesNames,
} from "./ComboboxFooter";

const TestContainer = createContextContainer(ComboboxFooter, Combobox, {
  withinPortal: false,
});

const defaultProps: ComboboxFooterProps = {};

describe("@raikou/core/ComboboxFooter", () => {
  tests.itSupportsSystemProps<ComboboxFooterProps, ComboboxFooterStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ComboboxFooter",
    stylesApiSelectors: ["footer"],
    stylesApiName: "Combobox",
    selector: ".raikou-Combobox-footer",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxFooter,
    props: defaultProps,
    error: "Combobox component was not found in tree",
  });
});
