import { tests } from "@raikou/tests";
import {
  ScrollArea,
  ScrollAreaProps,
  ScrollAreaStylesNames,
} from "./ScrollArea";

const defaultProps: ScrollAreaProps = {
  type: "always",
  children: "test",
};

describe("@raikou/core/ScrollArea", () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ScrollArea",
    stylesApiSelectors: ["root", "viewport"],
  });
});

describe("@raikou/core/ScrollAreaAutosize", () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea.Autosize,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/ScrollAreaAutosize",
  });
});
