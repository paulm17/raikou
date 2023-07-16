import React from "react";
import { wait, render, screen, userEvent } from "@raikou/tests";
import { FocusTrap } from "./FocusTrap";

describe("@raikou/core/FocusTrap", () => {
  it("traps focus at given node", async () => {
    render(
      <FocusTrap>
        <div>
          <input />
          <button type="button">Button</button>
        </div>
      </FocusTrap>
    );

    await wait(10);
    expect(screen.getByRole("textbox")).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole("textbox")).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole("button")).toHaveFocus();
  });

  it("does not trap focus if active is false", async () => {
    render(
      <FocusTrap active={false}>
        <div>
          <input />
          <button type="button">Button</button>
        </div>
      </FocusTrap>
    );

    await wait(10);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole("textbox")).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole("button")).toHaveFocus();

    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it("manages aria-hidden attributes", () => {
    const adjacentDiv = document.createElement("div");
    adjacentDiv.setAttribute("data-testid", "adjacent");
    document.body.appendChild(adjacentDiv);

    const { rerender } = render(
      <FocusTrap active>
        <div />
      </FocusTrap>
    );

    const adjacent = screen.getByTestId("adjacent");
    expect(adjacent).toHaveAttribute("aria-hidden", "true");

    rerender(
      <FocusTrap active={false}>
        <div />
      </FocusTrap>
    );

    expect(adjacent).not.toHaveAttribute("aria-hidden");
  });

  it("has correct displayName", () => {
    expect(FocusTrap.displayName).toBe("@raikou/core/FocusTrap");
  });
});
