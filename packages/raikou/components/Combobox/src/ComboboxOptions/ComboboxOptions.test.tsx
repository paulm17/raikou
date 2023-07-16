import { tests, createContextContainer } from "@raikou/tests";
import { Combobox } from "../Combobox";
import {
  ComboboxOptions,
  ComboboxOptionsProps,
  ComboboxOptionsStylesNames,
} from "./ComboboxOptions";

const TestContainer = createContextContainer(ComboboxOptions, Combobox, {
  withinPortal: false,
});

const defaultProps: ComboboxOptionsProps = {};

describe("@raikou/core/ComboboxOptions", () => {
  tests.itSupportsSystemProps<ComboboxOptionsProps, ComboboxOptionsStylesNames>(
    {
      component: TestContainer,
      props: defaultProps,
      styleProps: true,
      children: true,
      extend: true,
      variant: true,
      size: true,
      classes: true,
      refType: HTMLDivElement,
      displayName: "@raikou/core/ComboboxOptions",
      stylesApiSelectors: ["options"],
      stylesApiName: "Combobox",
      selector: ".raikou-Combobox-options",
      compound: true,
      providerStylesApi: false,
    }
  );

  tests.itThrowsContextError({
    component: ComboboxOptions,
    props: defaultProps,
    error: "Combobox component was not found in tree",
  });
});
