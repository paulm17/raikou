import React from "react";
import { render, tests } from "@raikou/tests";
import {
  ColorSwatch,
  ColorSwatchProps,
  ColorSwatchStylesNames,
} from "./ColorSwatch";

const defaultProps: ColorSwatchProps = {
  color: "#000",
  children: "$$",
  withShadow: true,
};

describe("@raikou/core/ColorSwatch", () => {
  tests.axe([
    <ColorSwatch
      color="#000"
      component="button"
      type="button"
      aria-label="test-color"
    />,
    <ColorSwatch color="#000" component="button" type="button">
      test-color
    </ColorSwatch>,
  ]);

  tests.itSupportsSystemProps<ColorSwatchProps, ColorSwatchStylesNames>({
    component: ColorSwatch,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ColorSwatch",
    stylesApiSelectors: [
      "root",
      "alphaOverlay",
      "childrenOverlay",
      "colorOverlay",
      "shadowOverlay",
    ],
  });

  it("renders shadow overlay only when withShadow is true", () => {
    const { container, rerender } = render(
      <ColorSwatch {...defaultProps} withShadow={false} />
    );
    expect(
      container.querySelector(".raikou-ColorSwatch-shadowOverlay")
    ).not.toBeInTheDocument();

    rerender(<ColorSwatch {...defaultProps} withShadow />);
    expect(
      container.querySelector(".raikou-ColorSwatch-shadowOverlay")
    ).toBeInTheDocument();
  });
});
