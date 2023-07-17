import React from "react";
import { render, tests, createContextContainer } from "@raikou/tests";
import {
  AppShellNavbar,
  AppShellNavbarProps,
  AppShellNavbarStylesNames,
} from "./AppShellNavbar";
import { AppShell } from "../AppShell";

const TestContainer = createContextContainer(AppShellNavbar, AppShell, {});

const defaultProps: AppShellNavbarProps = {};

describe("@raikou/core/AppShellNavbar", () => {
  tests.itSupportsSystemProps<AppShellNavbarProps, AppShellNavbarStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: "@raikou/core/AppShellNavbar",
    stylesApiSelectors: ["navbar"],
    selector: ".raikou-AppShell-navbar",
    stylesApiName: "AppShell",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellNavbar,
    props: defaultProps,
    error: "AppShell was not found in tree",
  });

  it("sets data-with-border attribute based on withBorder prop", () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector(".raikou-AppShell-navbar")).toHaveAttribute(
      "data-with-border",
      "true"
    );

    rerender(<TestContainer withBorder={false} />);
    expect(
      container.querySelector(".raikou-AppShell-navbar")
    ).not.toHaveAttribute("data-with-border");
  });
});
