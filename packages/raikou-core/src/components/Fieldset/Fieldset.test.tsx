import React from "react";
import { render, tests, screen } from "@raikou/tests";
import { Fieldset, FieldsetProps, FieldsetStylesNames } from "./Fieldset";

const defaultProps: FieldsetProps = {
  legend: "test-legend",
};

describe("@raikou/core/Fieldset", () => {
  tests.itSupportsSystemProps<FieldsetProps, FieldsetStylesNames>({
    component: Fieldset,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLFieldSetElement,
    displayName: "@raikou/core/Fieldset",
    stylesApiSelectors: ["root", "legend"],
  });

  it("renders given label", () => {
    render(<Fieldset {...defaultProps} legend="test-legend" />);
    expect(screen.getByText("test-legend")).toBeInTheDocument();
  });
});
