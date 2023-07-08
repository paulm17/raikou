import { tests } from "@raikou/tests";
import { Container, ContainerProps, ContainerStylesNames } from "./Container";

const defaultProps: ContainerProps = {};

describe("@raikou/core/Container", () => {
  tests.itSupportsSystemProps<ContainerProps, ContainerStylesNames>({
    component: Container,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/Container",
    stylesApiSelectors: ["root"],
  });
});
