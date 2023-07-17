import { tests, createContextContainer } from "@raikou/tests";
import {
  PaginationDots,
  PaginationDotsProps,
  PaginationDotsStylesNames,
} from "./PaginationDots";
import { PaginationRoot } from "../PaginationRoot/PaginationRoot";

const TestContainer = createContextContainer(PaginationDots, PaginationRoot, {
  total: 10,
});

const defaultProps: PaginationDotsProps = {};

describe("@raikou/core/PaginationDots", () => {
  tests.itSupportsSystemProps<PaginationDotsProps, PaginationDotsStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/PaginationDots",
    stylesApiSelectors: ["dots"],
    stylesApiName: "Pagination",
    compound: true,
    providerStylesApi: false,
    selector: ".raikou-Pagination-dots",
  });

  tests.itThrowsContextError({
    component: PaginationDots,
    props: defaultProps,
    error: "Pagination.Root component was not found in tree",
  });
});
