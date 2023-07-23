import React from "react";
import { tests } from "@raikou/tests";
import { Grid, GridProps, GridStylesNames } from "./Grid";
import { GridCol } from "./GridCol/GridCol";

const defaultProps: GridProps = {
  children: <Grid.Col span={12}>test</Grid.Col>,
};

describe("@raikou/core/Grid", () => {
  tests.itSupportsSystemProps<GridProps, GridStylesNames>({
    component: Grid,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Grid",
    stylesApiSelectors: ["root", "inner", "col"],
  });

  it("exposes Grid.Col component", () => {
    expect(Grid.Col).toBe(GridCol);
  });
});
