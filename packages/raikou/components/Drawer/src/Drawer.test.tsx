import React from "react";
import { createContextContainer, render, tests } from "@raikou/tests";
import { Drawer, DrawerProps, DrawerStylesNames } from "./Drawer";
import { DrawerBody, DrawerBodyProps } from "./DrawerBody";
import { DrawerCloseButton, DrawerCloseButtonProps } from "./DrawerCloseButton";
import { DrawerContent, DrawerContentProps } from "./DrawerContent";
import { DrawerHeader, DrawerHeaderProps } from "./DrawerHeader";
import { DrawerOverlay, DrawerOverlayProps } from "./DrawerOverlay";
import { DrawerRoot, DrawerRootProps } from "./DrawerRoot";
import { DrawerTitle, DrawerTitleProps } from "./DrawerTitle";

const defaultProps: DrawerProps = {
  opened: true,
  onClose: () => {},
  title: "test-title",
  withinPortal: false,
};

const createDrawerContextContainer = (component: any) =>
  createContextContainer(component, DrawerRoot, defaultProps);

const BodyContainer = createDrawerContextContainer(DrawerBody);
const CloseButtonContainer = createDrawerContextContainer(DrawerCloseButton);
const ContentContainer = createDrawerContextContainer(DrawerContent);
const HeaderContainer = createDrawerContextContainer(DrawerHeader);
const OverlayContainer = createDrawerContextContainer(DrawerOverlay);
const TitleContainer = createDrawerContextContainer(DrawerTitle);

describe("@raikou/core/Drawer", () => {
  tests.itSupportsSystemProps<DrawerProps, DrawerStylesNames>({
    component: Drawer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Drawer",
    stylesApiSelectors: [
      "root",
      "body",
      "close",
      "content",
      "header",
      "inner",
      "overlay",
      "title",
    ],
    selector: ".raikou-Drawer-root",
    variantSelector: ".raikou-Drawer-root",
    sizeSelector: ".raikou-Drawer-root",
  });

  it("does not render overlay when withOverlay is false", () => {
    const { container, rerender } = render(
      <Drawer {...defaultProps} withOverlay={false} />
    );
    expect(
      container.querySelector(".raikou-Drawer-overlay")
    ).not.toBeInTheDocument();

    rerender(<Drawer {...defaultProps} withOverlay />);
    expect(
      container.querySelector(".raikou-Drawer-overlay")
    ).toBeInTheDocument();
  });

  it("does not render header if title and withCloseButton are not provided", () => {
    const { container, rerender } = render(
      <Drawer {...defaultProps} title={null} withCloseButton />
    );
    expect(
      container.querySelector(".raikou-Drawer-header")
    ).toBeInTheDocument();

    rerender(
      <Drawer {...defaultProps} withCloseButton={false} title="test-title" />
    );
    expect(
      container.querySelector(".raikou-Drawer-header")
    ).toBeInTheDocument();

    rerender(<Drawer {...defaultProps} withCloseButton={false} title={null} />);
    expect(
      container.querySelector(".raikou-Drawer-header")
    ).not.toBeInTheDocument();
  });

  it("renders given title", () => {
    const { container } = render(
      <Drawer {...defaultProps} title="test-title" />
    );
    expect(container.querySelector(".raikou-Drawer-title")).toHaveTextContent(
      "test-title"
    );
  });

  it("exposes compound components", () => {
    expect(Drawer.Root).toBe(DrawerRoot);
    expect(Drawer.Overlay).toBe(DrawerOverlay);
    expect(Drawer.Content).toBe(DrawerContent);
    expect(Drawer.Body).toBe(DrawerBody);
    expect(Drawer.Header).toBe(DrawerHeader);
    expect(Drawer.Title).toBe(DrawerTitle);
    expect(Drawer.CloseButton).toBe(DrawerCloseButton);
  });
});

describe("@raikou/core/DrawerRoot", () => {
  tests.itSupportsSystemProps<DrawerRootProps, "root">({
    component: DrawerRoot,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/DrawerRoot",
    stylesApiSelectors: ["root"],
    selector: ".raikou-Drawer-root",
    variantSelector: ".raikou-Drawer-root",
    sizeSelector: ".raikou-Drawer-root",
    stylesApiName: "Drawer",
  });
});

describe("@raikou/core/DrawerBody", () => {
  tests.itSupportsSystemProps<DrawerBodyProps>({
    component: BodyContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/DrawerBody",
    selector: ".raikou-Drawer-body",
    variantSelector: ".raikou-Drawer-body",
    sizeSelector: ".raikou-Drawer-body",
  });
});

describe("@raikou/core/DrawerCloseButton", () => {
  tests.itSupportsSystemProps<DrawerCloseButtonProps>({
    component: CloseButtonContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: "@raikou/core/DrawerCloseButton",
    selector: ".raikou-Drawer-close",
    variantSelector: ".raikou-Drawer-close",
    sizeSelector: ".raikou-Drawer-close",
  });
});

describe("@raikou/core/DrawerContent", () => {
  tests.itSupportsSystemProps<DrawerContentProps>({
    component: ContentContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLElement,
    displayName: "@raikou/core/DrawerContent",
    selector: ".raikou-Drawer-content",
    variantSelector: ".raikou-Drawer-content",
    sizeSelector: ".raikou-Drawer-content",
  });
});

describe("@raikou/core/DrawerHeader", () => {
  tests.itSupportsSystemProps<DrawerHeaderProps>({
    component: HeaderContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/DrawerHeader",
    selector: ".raikou-Drawer-header",
    variantSelector: ".raikou-Drawer-header",
    sizeSelector: ".raikou-Drawer-header",
  });
});

describe("@raikou/core/DrawerOverlay", () => {
  tests.itSupportsSystemProps<DrawerOverlayProps>({
    component: OverlayContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/DrawerOverlay",
    selector: ".raikou-Drawer-overlay",
    variantSelector: ".raikou-Drawer-overlay",
    sizeSelector: ".raikou-Drawer-overlay",
  });
});

describe("@raikou/core/DrawerTitle", () => {
  tests.itSupportsSystemProps<DrawerTitleProps>({
    component: TitleContainer,
    props: {},
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLHeadingElement,
    displayName: "@raikou/core/DrawerTitle",
    selector: ".raikou-Drawer-title",
    variantSelector: ".raikou-Drawer-title",
    sizeSelector: ".raikou-Drawer-title",
  });
});
