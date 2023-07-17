import { tests, createContextContainer } from "@raikou/tests";
import { AccordionItem } from "../AccordionItem/AccordionItem";
import {
  AccordionControl,
  AccordionControlProps,
  AccordionControlStylesNames,
} from "./AccordionControl";
import { Accordion } from "../Accordion";

const defaultProps: AccordionControlProps = {
  icon: "$",
};

const _ContextContainer = createContextContainer(
  AccordionControl,
  AccordionItem,
  {
    value: "test",
  }
);
const ContextContainer = createContextContainer(
  _ContextContainer,
  Accordion,
  {}
);

describe("@raikou/core/AccordionControl", () => {
  tests.itSupportsSystemProps<
    AccordionControlProps,
    AccordionControlStylesNames
  >({
    component: ContextContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: "@raikou/core/AccordionControl",
    stylesApiSelectors: ["control", "chevron", "label", "icon"],
    stylesApiName: "Accordion",
    selector: ".raikou-Accordion-control",
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError(
    {
      component: AccordionControl,
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
