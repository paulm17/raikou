import { tests, createContextContainer } from "@raikou/tests";
import { GridCol, GridColProps, GridColStylesNames } from "./GridCol";
import { Grid } from "../Grid";

const TestContainer = createContextContainer(GridCol, Grid, {});

const defaultProps: GridColProps = {};

describe("@raikou/core/GridCol", () => {
  tests.itSupportsSystemProps<GridColProps, GridColStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/GridCol",
    stylesApiSelectors: ["col"],
    stylesApiName: "Grid",
    selector: ".raikou-Grid-col",
    compound: true,
    providerStylesApi: false,
  });
});
