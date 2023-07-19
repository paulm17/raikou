import { createSafeContext } from "../../_utils";

interface AccordionItemContext {
  value: string;
}

export const [AccordionItemProvider, useAccordionItemContext] =
  createSafeContext<AccordionItemContext>(
    "Accordion.Item component was not found in the tree"
  );
