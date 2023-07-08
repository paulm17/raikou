import React from "react";
import { render, tests, screen } from "@raikou/tests";
import {
  Breadcrumbs,
  BreadcrumbsProps,
  BreadcrumbsStylesNames,
} from "./Breadcrumbs";

const defaultProps: BreadcrumbsProps = {
  children: [<div key="1">1</div>, <div key="2">2</div>, <div key="3">3</div>],
};

describe("@raikou/core/Breadcrumbs", () => {
  tests.itSupportsSystemProps<BreadcrumbsProps, BreadcrumbsStylesNames>({
    component: Breadcrumbs,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Breadcrumbs",
    stylesApiSelectors: ["root", "breadcrumb", "separator"],
  });

  it("renders correct amount of children and separators", () => {
    const { container } = render(<Breadcrumbs {...defaultProps} />);
    expect(
      container.querySelectorAll(".raikou-Breadcrumbs-breadcrumb")
    ).toHaveLength(3);
    expect(
      container.querySelectorAll(".raikou-Breadcrumbs-separator")
    ).toHaveLength(2);
  });

  it("accepts separator from props", () => {
    render(<Breadcrumbs separator="test-separator" {...defaultProps} />);
    expect(screen.getAllByText("test-separator")).toHaveLength(2);
  });

  it("allows to set child className", () => {
    render(
      <Breadcrumbs>
        <button type="button" className="test-class">
          test-label
        </button>
      </Breadcrumbs>
    );

    expect(screen.getByRole("button")).toHaveClass("test-class");
  });
});
