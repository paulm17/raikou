import { tests } from "@raikou/tests";
import {
  PaginationRoot,
  PaginationRootProps,
  PaginationRootStylesNames,
} from "./PaginationRoot";

const defaultProps: PaginationRootProps = {
  total: 10,
};

describe("@raikou/core/PaginationRoot", () => {
  tests.itSupportsSystemProps<PaginationRootProps, PaginationRootStylesNames>({
    component: PaginationRoot,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/PaginationRoot",
    stylesApiSelectors: ["root"],
    stylesApiName: "Pagination",
  });
});
