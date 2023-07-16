import React from "react";
import { render, tests } from "@raikou/tests";
import { TextStylesNames } from "../Text";
import { Highlight, HighlightProps } from "./Highlight";

const defaultProps: HighlightProps = {
  children: "test",
  highlight: "t",
};

describe("@raikou/core/Highlight", () => {
  tests.itSupportsSystemProps<HighlightProps, TextStylesNames>({
    component: Highlight,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    refType: HTMLParagraphElement,
    displayName: "@raikou/core/Highlight",
    stylesApiSelectors: ["root"],
  });

  it("highlights correct value", () => {
    const { container } = render(<Highlight highlight="he">Hello</Highlight>);
    expect(container.querySelector("mark")!.textContent).toBe("He");
  });
});
