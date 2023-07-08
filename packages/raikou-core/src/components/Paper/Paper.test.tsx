import React from "react";
import { render, tests } from "@raikou/tests";
import { Paper, PaperProps, PaperStylesNames } from "./Paper";

const defaultProps: PaperProps = {};

describe("@raikou/core/Paper", () => {
  tests.itSupportsSystemProps<PaperProps, PaperStylesNames>({
    component: Paper,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Paper",
    stylesApiSelectors: ["root"],
  });

  it("sets data-with-border attribute when withBorder props is set", () => {
    const { rerender, container } = render(
      <Paper {...defaultProps} withBorder />
    );
    expect(container.querySelector("div")).toHaveAttribute("data-with-border");
    rerender(<Paper {...defaultProps} withBorder={false} />);
    expect(container.querySelector("div")).not.toHaveAttribute(
      "data-with-border"
    );
  });
});
