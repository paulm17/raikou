import React from "react";
import { render, tests, createContextContainer } from "@raikou/tests";
import {
  AppShellAside,
  AppShellAsideProps,
  AppShellAsideStylesNames,
} from "./AppShellAside";
import { AppShell } from "../../AppShell";

const TestContainer = createContextContainer(AppShellAside, AppShell, {});

const defaultProps: AppShellAsideProps = {};

describe("@raikou/core/AppShellAside", () => {
  tests.itSupportsSystemProps<AppShellAsideProps, AppShellAsideStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: "@raikou/core/AppShellAside",
    stylesApiSelectors: ["aside"],
    selector: ".raikou-AppShell-aside",
    stylesApiName: "AppShell",
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: AppShellAside,
    props: defaultProps,
    error: "AppShell was not found in tree",
  });

  it("sets data-with-border attribute based on withBorder prop", () => {
    const { container, rerender } = render(<TestContainer withBorder />);
    expect(container.querySelector(".raikou-AppShell-aside")).toHaveAttribute(
      "data-with-border",
      "true"
    );

    rerender(<TestContainer withBorder={false} />);
    expect(
      container.querySelector(".raikou-AppShell-aside")
    ).not.toHaveAttribute("data-with-border");
  });
});
