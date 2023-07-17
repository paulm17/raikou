import { tests, createContextContainer } from "@raikou/tests";
import {
  AccordionItem,
  AccordionItemProps,
  AccordionItemStylesNames,
} from "./AccordionItem";
import { Accordion } from "../Accordion";

const defaultProps: AccordionItemProps = {
  value: "test",
};

const ContextContainer = createContextContainer(AccordionItem, Accordion, {});

describe("@raikou/core/AccordionItem", () => {
  tests.itSupportsSystemProps<AccordionItemProps, AccordionItemStylesNames>({
    component: ContextContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/AccordionItem",
    stylesApiSelectors: ["item"],
    stylesApiName: "Accordion",
    selector: ".raikou-Accordion-item",
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError({
    component: AccordionItem,
    props: defaultProps,
    error: "Accordion component was not found in the tree",
  });
});
