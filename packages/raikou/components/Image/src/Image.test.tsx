import React from "react";
import { render, tests, screen } from "@raikou/tests";
import { Image, ImageProps, ImageStylesNames } from "./Image";

const defaultProps: ImageProps = {};

describe("@raikou/core/Image", () => {
  tests.itSupportsSystemProps<ImageProps, ImageStylesNames>({
    component: Image,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLImageElement,
    displayName: "@raikou/core/Image",
    stylesApiSelectors: ["root"],
  });

  it("sets data-fallback attribute if image cannot be loaded", () => {
    const { rerender } = render(<Image src={null} fallbackSrc="test" />);
    expect(screen.getByRole("img")).toHaveAttribute("data-fallback", "true");

    rerender(<Image src="test" fallbackSrc="test" />);
    expect(screen.getByRole("img")).not.toHaveAttribute("data-fallback");
  });
});
