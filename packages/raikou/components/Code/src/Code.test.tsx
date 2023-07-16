import React from "react";
import { render, tests, screen } from "@raikou/tests";
import { Code, CodeProps, CodeStylesNames } from "./Code";

const defaultProps: CodeProps = {};

describe("@raikou/core/Code", () => {
  tests.itSupportsSystemProps<CodeProps, CodeStylesNames>({
    component: Code,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLElement,
    displayName: "@raikou/core/Code",
    stylesApiSelectors: ["root"],
  });

  it("renders code element for inline code and pre element for block", () => {
    const { rerender } = render(<Code {...defaultProps}>inline-code</Code>);
    expect(screen.getByText("inline-code").nodeName).toBe("CODE");

    rerender(
      <Code {...defaultProps} block>
        block-code
      </Code>
    );
    expect(screen.getByText("block-code").nodeName).toBe("PRE");
  });
});
