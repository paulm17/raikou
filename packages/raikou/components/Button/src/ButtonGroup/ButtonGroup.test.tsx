import React from "react";
import { tests, render, screen } from "@raikou/tests";
import {
  ButtonGroup,
  ButtonGroupProps,
  ButtonGroupStylesNames,
} from "./ButtonGroup";

const defaultProps: ButtonGroupProps = {};

describe("@raikou/core/ButtonGroup", () => {
  tests.itSupportsSystemProps<ButtonGroupProps, ButtonGroupStylesNames>({
    component: ButtonGroup,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ButtonGroup",
    stylesApiSelectors: ["root"],
  });

  it("adds data-orientation attribute to root element based on orientation prop", () => {
    render(<ButtonGroup orientation="vertical" />);
    expect(screen.getByRole("group")).toHaveAttribute(
      "data-orientation",
      "vertical"
    );
  });
});
