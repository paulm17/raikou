import React from "react";
import { render, tests } from "@raikou/tests";
import {
  CodeHighlight,
  CodeHighlightProps,
  CodeHighlightStylesNames,
} from "./CodeHighlight";

const defaultProps: CodeHighlightProps = {
  code: "test-code",
};

describe("@raikou/code-highlight/CodeHighlight", () => {
  tests.itSupportsSystemProps<CodeHighlightProps, CodeHighlightStylesNames>({
    component: CodeHighlight,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/CodeHighlight",
    stylesApiSelectors: ["root", "code", "copy", "pre"],
  });

  it("renders copy button based on withCopyButton prop", () => {
    const { container, rerender } = render(
      <CodeHighlight {...defaultProps} withCopyButton />,
    );
    expect(
      container.querySelector(".raikou-CodeHighlight-copy"),
    ).toBeInTheDocument();

    rerender(<CodeHighlight {...defaultProps} withCopyButton={false} />);
    expect(
      container.querySelector(".raikou-CodeHighlight-copy"),
    ).not.toBeInTheDocument();
  });
});
