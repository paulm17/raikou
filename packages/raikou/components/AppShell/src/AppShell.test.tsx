import React from "react";
import { tests, render } from "@raikou/tests";
import { AppShell, AppShellProps, AppShellStylesNames } from "./AppShell";

const defaultProps: AppShellProps = {};

describe("@raikou/core/AppShell", () => {
  tests.itSupportsSystemProps<AppShellProps, AppShellStylesNames>({
    component: AppShell,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/AppShell",
    stylesApiSelectors: ["root"],
  });

  it("sets data-layout attribute based on layout prop", () => {
    const { container } = render(<AppShell layout="alt" />);
    expect(container.querySelector(".mantine-AppShell-root")).toHaveAttribute(
      "data-layout",
      "alt",
    );
  });

  it("sets data-disabled attribute based on disabled prop", () => {
    const { container, rerender } = render(<AppShell disabled />);
    expect(container.querySelector(".mantine-AppShell-root")).toHaveAttribute(
      "data-disabled",
    );

    rerender(<AppShell disabled={false} />);
    expect(
      container.querySelector(".mantine-AppShell-root"),
    ).not.toHaveAttribute("data-disabled");
  });
});
