import React, { createRef } from "react";
import { render, tests } from "@raikou/tests";
import { Chip, ChipProps, ChipStylesNames } from "./Chip";

const defaultProps: ChipProps = {
  value: "test-value",
  children: "test-chip",
  checked: true,
};

describe("@raikou/core/Chip", () => {
  tests.axe([<Chip {...defaultProps} />]);

  tests.itSupportsSystemProps<ChipProps, ChipStylesNames>({
    component: Chip,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLInputElement,
    displayName: "@raikou/core/Chip",
    stylesApiSelectors: ["root", "iconWrapper", "checkIcon", "input", "label"],
  });

  tests.itSupportsFocusEvents({
    component: Chip,
    props: defaultProps,
    selector: "input",
  });

  it("displays check icon when checked prop is true", () => {
    const { rerender, container } = render(<Chip {...defaultProps} checked />);
    expect(container.querySelectorAll(".raikou-Chip-checkIcon")).toHaveLength(
      1,
    );

    rerender(<Chip {...defaultProps} checked={false} />);
    expect(container.querySelectorAll(".raikou-Chip-checkIcon")).toHaveLength(
      0,
    );
  });

  it("supports rootRef", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Chip {...defaultProps} rootRef={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
