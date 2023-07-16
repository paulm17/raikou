import { tests } from "@raikou/tests";
import { Title, TitleProps, TitleStylesNames } from "./Title";

const defaultProps: TitleProps = {};

describe("@raikou/core/Title", () => {
  tests.itSupportsSystemProps<TitleProps, TitleStylesNames>({
    component: Title,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLHeadingElement,
    displayName: "@raikou/core/Title",
    stylesApiSelectors: ["root"],
  });
});
