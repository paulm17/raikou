import React from "react";
import { render, tests, createContextContainer } from "@raikou/tests";
import { Combobox } from "../Combobox";
import {
  ComboboxDropdown,
  ComboboxDropdownProps,
  ComboboxDropdownStylesNames,
} from "./ComboboxDropdown";

const TestContainer = createContextContainer(ComboboxDropdown, Combobox, {
  withinPortal: false,
});

const defaultProps: ComboboxDropdownProps = {};

describe("@raikou/core/ComboboxDropdown", () => {
  tests.itSupportsSystemProps<
    ComboboxDropdownProps,
    ComboboxDropdownStylesNames
  >({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ComboboxDropdown",
    stylesApiSelectors: ["dropdown"],
    stylesApiName: "Combobox",
    selector: ".raikou-Combobox-dropdown",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: ComboboxDropdown,
    props: defaultProps,
    error: "Combobox component was not found in tree",
  });

  it("sets data-hidden attribute based on hidden prop", () => {
    const { container, rerender } = render(
      <TestContainer hidden>test</TestContainer>
    );
    expect(
      container.querySelector(".raikou-Combobox-dropdown")
    ).toHaveAttribute("data-hidden");

    rerender(<TestContainer hidden={false}>test</TestContainer>);
    expect(
      container.querySelector(".raikou-Combobox-dropdown")
    ).not.toHaveAttribute("data-hidden");
  });
});
