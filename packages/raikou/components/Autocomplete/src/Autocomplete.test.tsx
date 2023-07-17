import React from "react";
import {
  tests,
  inputDefaultProps,
  inputStylesApiSelectors,
} from "@raikou/tests";
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteStylesNames,
} from "./Autocomplete";

const defaultProps: AutocompleteProps = {
  ...inputDefaultProps,
  data: ["test-1", "test-2"],
};

describe("@raikou/core/Autocomplete", () => {
  tests.axe([
    <Autocomplete aria-label="test-label" data={["test-1", "test-2"]} />,
    <Autocomplete label="test-label" data={["test-1", "test-2"]} />,
    <Autocomplete label="test-label" error data={["test-1", "test-2"]} />,
    <Autocomplete
      label="test-label"
      error="test-error"
      id="test"
      data={["test-1", "test-2"]}
    />,
    <Autocomplete
      label="test-label"
      description="test-description"
      data={["test-1", "test-2"]}
    />,
  ]);

  tests.itSupportsSystemProps<AutocompleteProps, AutocompleteStylesNames>({
    component: Autocomplete,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLInputElement,
    displayName: "@raikou/core/Autocomplete",
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<AutocompleteProps>({
    component: Autocomplete,
    props: defaultProps,
    selector: "input",
  });
});
