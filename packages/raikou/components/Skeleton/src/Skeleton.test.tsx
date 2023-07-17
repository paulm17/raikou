import React from "react";
import { render, tests } from "@raikou/tests";
import { Skeleton, SkeletonProps, SkeletonStylesNames } from "./Skeleton";

const defaultProps: SkeletonProps = {};

describe("@raikou/core/Skeleton", () => {
  tests.itSupportsSystemProps<SkeletonProps, SkeletonStylesNames>({
    component: Skeleton,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Skeleton",
    stylesApiSelectors: ["root"],
  });

  it("sets data-visible attribute based on visible prop", () => {
    const { rerender, container } = render(<Skeleton visible={false} />);
    expect(
      container.querySelector(".raikou-Skeleton-root")
    ).not.toHaveAttribute("data-visible");

    rerender(<Skeleton visible />);
    expect(container.querySelector(".raikou-Skeleton-root")).toHaveAttribute(
      "data-visible"
    );
  });

  it("sets data-animate attribute based on animate prop", () => {
    const { rerender, container } = render(<Skeleton animate={false} />);
    expect(
      container.querySelector(".raikou-Skeleton-root")
    ).not.toHaveAttribute("data-animate");

    rerender(<Skeleton animate />);
    expect(container.querySelector(".raikou-Skeleton-root")).toHaveAttribute(
      "data-animate"
    );
  });
});
