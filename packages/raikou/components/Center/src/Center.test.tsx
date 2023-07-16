import React from "react";
import { tests } from "@raikou/tests";
import { Center, CenterProps, CenterStylesNames } from "./Center";

const defaultProps: CenterProps = {
  children: <div />,
};

describe("@raikou/core/Center", () => {
  tests.itSupportsSystemProps<CenterProps, CenterStylesNames>({
    component: Center,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Center",
    stylesApiSelectors: ["root"],
  });
});
