import React from "react";
import { render, tests, screen } from "@raikou/tests";
import { VisuallyHidden } from "../VisuallyHidden";
import { Burger, BurgerProps, BurgerStylesNames } from "./Burger";

const defaultProps: BurgerProps = {};

describe("@raikou/core/Burger", () => {
  tests.axe([
    <Burger aria-label="test" />,
    <Burger>
      <VisuallyHidden>test</VisuallyHidden>
    </Burger>,
  ]);

  tests.itSupportsSystemProps<BurgerProps, BurgerStylesNames>({
    component: Burger,
    props: defaultProps,
    styleProps: true,
    extend: true,
    children: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: "@raikou/core/Burger",
    stylesApiSelectors: ["root"],
  });

  it("sets data-opened attribute based on opened prop", () => {
    const { rerender } = render(<Burger opened />);
    expect(screen.getByRole("button").firstChild).toHaveAttribute(
      "data-opened",
      "true"
    );

    rerender(<Burger opened={false} />);
    expect(screen.getByRole("button").firstChild).not.toHaveAttribute(
      "data-opened"
    );
  });
});
