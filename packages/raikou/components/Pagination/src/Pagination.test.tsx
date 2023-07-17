import React from "react";
import { render, tests } from "@raikou/tests";
import {
  Pagination,
  PaginationProps,
  PaginationStylesNames,
} from "./Pagination";

const defaultProps: PaginationProps = {
  total: 10,
  getControlProps: () => ({ "aria-label": "test-label" }),
};

describe("@raikou/core/Pagination", () => {
  tests.axe([<Pagination {...defaultProps} />]);

  tests.itSupportsSystemProps<PaginationProps, PaginationStylesNames>({
    component: Pagination,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Pagination",
    stylesApiSelectors: ["root", "control", "dots"],
  });

  it("renders nothing if total value is negative", () => {
    const { container } = render(<Pagination total={-10} />);
    expect(container.querySelectorAll("*:not(style)")).toHaveLength(0);
  });

  it("renders nothing if total value is zero", () => {
    const { container } = render(<Pagination total={0} />);
    expect(container.querySelectorAll("*:not(style)")).toHaveLength(0);
  });
});
