import React from "react";
import { tests, render, screen } from "@raikou/tests";
import {
  ActionIconGroup,
  ActionIconGroupProps,
  ActionIconGroupStylesNames,
} from "./ActionIconGroup";

const defaultProps: ActionIconGroupProps = {};

describe("@raikou/core/ActionIconGroup", () => {
  tests.itSupportsSystemProps<ActionIconGroupProps, ActionIconGroupStylesNames>(
    {
      component: ActionIconGroup,
      props: defaultProps,
      styleProps: true,
      children: true,
      extend: true,
      size: true,
      variant: true,
      classes: true,
      refType: HTMLDivElement,
      displayName: "@raikou/core/ActionIconGroup",
      stylesApiSelectors: ["root"],
    }
  );

  it("adds data-orientation attribute to root element based on orientation prop", () => {
    render(<ActionIconGroup orientation="vertical" />);
    expect(screen.getByRole("group")).toHaveAttribute(
      "data-orientation",
      "vertical"
    );
  });
});
