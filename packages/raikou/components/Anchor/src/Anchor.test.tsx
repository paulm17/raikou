import React from "react";
import { render, tests } from "@raikou/tests";
import { Anchor, AnchorProps, AnchorStylesNames } from "./Anchor";

const defaultProps: AnchorProps = {};

describe("@raikou/core/Anchor", () => {
  tests.itSupportsSystemProps<AnchorProps, AnchorStylesNames>({
    component: Anchor,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLAnchorElement,
    displayName: "@raikou/core/Anchor",
    stylesApiSelectors: ["root"],
  });

  it("sets data-underline attribute based on underline prop", () => {
    const { container, rerender } = render(
      <Anchor underline="always" data-test />
    );
    expect(container.querySelector("[data-test]")).toHaveAttribute(
      "data-underline",
      "always"
    );

    rerender(<Anchor underline="hover" data-test />);
    expect(container.querySelector("[data-test]")).toHaveAttribute(
      "data-underline",
      "hover"
    );

    rerender(<Anchor underline="never" data-test />);
    expect(container.querySelector("[data-test]")).toHaveAttribute(
      "data-underline",
      "never"
    );

    rerender(<Anchor data-test />);
    expect(container.querySelector("[data-test]")).toHaveAttribute(
      "data-underline",
      "hover"
    );
  });
});
