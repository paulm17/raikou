import React from "react";
import { render, tests } from "@raikou/tests";
import { Text, TextProps, TextStylesNames } from "./Text";

const defaultProps: TextProps = {};

describe("@raikou/core/Text", () => {
  tests.itSupportsSystemProps<TextProps, TextStylesNames>({
    component: Text,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLParagraphElement,
    displayName: "@raikou/core/Text",
    stylesApiSelectors: ["root"],
  });

  it("sets data-truncate attribute based on truncate prop", () => {
    const { container, rerender } = render(<Text truncate="start" />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-truncate",
      "start"
    );

    rerender(<Text truncate="end" />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-truncate",
      "end"
    );

    rerender(<Text truncate />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-truncate",
      "end"
    );

    rerender(<Text />);
    expect(container.querySelector(".raikou-Text-root")).not.toHaveAttribute(
      "data-truncate"
    );
  });

  it("sets data-variant attribute based on variant prop", () => {
    const { container, rerender } = render(<Text variant="text" />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-variant",
      "text"
    );

    rerender(<Text variant="gradient" />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-variant",
      "gradient"
    );

    rerender(<Text />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-variant",
      "text"
    );
  });

  it("sets data-inline attribute based on inline prop", () => {
    const { container, rerender } = render(<Text inline />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-inline"
    );

    rerender(<Text />);
    expect(container.querySelector(".raikou-Text-root")).not.toHaveAttribute(
      "data-inline"
    );
  });

  it("sets data-inherit attribute based on inherit prop", () => {
    const { container, rerender } = render(<Text inherit />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-inherit"
    );

    rerender(<Text inherit={false} />);
    expect(container.querySelector(".raikou-Text-root")).not.toHaveAttribute(
      "data-inherit"
    );
  });

  it("sets data-line-clamp attribute based on lineClamp prop", () => {
    const { container, rerender } = render(<Text lineClamp={3} />);
    expect(container.querySelector(".raikou-Text-root")).toHaveAttribute(
      "data-line-clamp"
    );

    rerender(<Text />);
    expect(container.querySelector(".raikou-Text-root")).not.toHaveAttribute(
      "data-line-clamp"
    );
  });

  it("changes root element to span if span prop is set", () => {
    const { container } = render(<Text span />);
    expect(
      container.querySelector(".raikou-Text-root")!.nodeName.toLowerCase()
    ).toBe("span");
  });
});
