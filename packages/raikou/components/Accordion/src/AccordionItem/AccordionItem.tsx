import React from "react";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { useAccordionContext } from "../Accordion.context";
import { AccordionItemProvider } from "../AccordionItem.context";
import classes from "../Accordion.module.css";

export type AccordionItemStylesNames = "item";

export interface AccordionItemProps
  extends BoxProps,
    CompoundStylesApiProps<AccordionItemFactory>,
    ElementProps<"div"> {
  /** Value that is used to manage accordion state */
  value: string;
}

export type AccordionItemFactory = Factory<{
  props: AccordionItemProps;
  ref: HTMLDivElement;
  stylesNames: AccordionItemStylesNames;
  compound: true;
}>;

const defaultProps: Partial<AccordionItemProps> = {};

export const AccordionItem = factory<AccordionItemFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, value, mod, ...others } =
    useProps("AccordionItem", defaultProps, props);
  const ctx = useAccordionContext();

  return (
    <AccordionItemProvider value={{ value }}>
      <Box
        ref={ref}
        mod={[{ active: ctx.isItemActive(value) }, mod]}
        {...ctx.getStyles("item", {
          className,
          classNames,
          styles,
          style,
          variant: ctx.variant,
        })}
        {...others}
      />
    </AccordionItemProvider>
  );
});

AccordionItem.displayName = "@raikou/core/AccordionItem";
AccordionItem.classes = classes;
