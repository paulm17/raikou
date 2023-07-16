import { tests, createContextContainer } from "@raikou/tests";
import { Combobox } from "../Combobox";
import {
  ComboboxHeader,
  ComboboxHeaderProps,
  ComboboxHeaderStylesNames,
} from "./ComboboxHeader";

const TestContainer = createContextContainer(ComboboxHeader, Combobox, {
  withinPortal: false,
});

const defaultProps: ComboboxHeaderProps = {};

describe("@raikou/core/ComboboxHeader", () => {
  tests.itSupportsSystemProps<ComboboxHeaderProps, ComboboxHeaderStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ComboboxHeader",
    stylesApiSelectors: ["header"],
    stylesApiName: "Combobox",
    selector: ".raikou-Combobox-header",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxHeader,
    props: defaultProps,
    error: "Combobox component was not found in tree",
  });
});
