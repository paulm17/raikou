import React from "react";
import { tests, render } from "@raikou/tests";
import {
  UnstyledButton,
  UnstyledButtonProps,
  UnstyledButtonStylesNames,
} from "./UnstyledButton";

const defaultProps: UnstyledButtonProps = {};

describe("@raikou/core/UnstyledButton", () => {
  tests.axe([
    <UnstyledButton aria-label="test" />,
    <UnstyledButton>test</UnstyledButton>,
  ]);

  tests.itSupportsFocusEvents<UnstyledButtonProps>({
    component: UnstyledButton,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<UnstyledButtonProps, UnstyledButtonStylesNames>({
    component: UnstyledButton,
    props: defaultProps,
    polymorphic: true,
    size: true,
    variant: true,
    styleProps: true,
    children: true,
    extend: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: "@raikou/core/UnstyledButton",
    stylesApiSelectors: ["root"],
  });

  it('adds type="button" to root element if component="button"', () => {
    const { container: buttonContainer } = render(
      <UnstyledButton component="button" />
    );
    expect(buttonContainer.querySelector("button")).toHaveAttribute(
      "type",
      "button"
    );

    const { container: divContainer } = render(
      <UnstyledButton component="div" />
    );
    expect(divContainer.querySelector("div")).not.toHaveAttribute("type");
  });
});
