import { tests, createContextContainer } from "@raikou/tests";
import { AccordionItem } from "../AccordionItem/AccordionItem";
import {
  AccordionPanel,
  AccordionPanelProps,
  AccordionPanelStylesNames,
} from "./AccordionPanel";
import { Accordion } from "../Accordion";

const defaultProps: AccordionPanelProps = {};

const _ContextContainer = createContextContainer(
  AccordionPanel,
  AccordionItem,
  { value: "test" }
);
const ContextContainer = createContextContainer(
  _ContextContainer,
  Accordion,
  {}
);

describe("@raikou/core/AccordionPanel", () => {
  tests.itSupportsSystemProps<AccordionPanelProps, AccordionPanelStylesNames>({
    component: ContextContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/AccordionPanel",
    stylesApiSelectors: ["panel", "content"],
    stylesApiName: "Accordion",
    selector: ".raikou-Accordion-panel",
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError(
    {
      component: AccordionPanel,
      props: defaultProps,
      error: "Accordion.Item component was not found in the tree",
    },
    "throws error when rendered outside of Accordion.Item context"
  );

  tests.itThrowsContextError(
    {
      component: _ContextContainer,
      props: defaultProps,
      error: "Accordion component was not found in the tree",
    },
    "throws error when rendered outside of Accordion context"
  );
});
