import React from "react";
import { render, tests, userEvent, screen } from "@raikou/tests";
import { Dialog, DialogProps, DialogStylesNames } from "./Dialog";

const defaultProps: DialogProps = {
  opened: true,
  withinPortal: false,
  withCloseButton: true,
  children: "test-dialog",
  transitionProps: { duration: 0, transition: "fade" },
};

describe("@raikou/core/Dialog", () => {
  tests.itSupportsSystemProps<DialogProps, DialogStylesNames>({
    component: Dialog,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Dialog",
    stylesApiSelectors: ["root", "closeButton"],
    selector: ".raikou-Dialog-root",
  });

  it("calls onClose when the close button is clicked", async () => {
    const spy = jest.fn();
    render(<Dialog opened withCloseButton onClose={spy} />);
    await userEvent.click(screen.getByRole("button"));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
