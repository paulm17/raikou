import React from "react";
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { Collapse } from "../../../Collapse/src";
import { useAccordionContext } from "../Accordion.context";
import { useAccordionItemContext } from "../AccordionItem.context";

export type AccordionPanelStylesNames = "panel" | "content";

export interface AccordionPanelProps
  extends BoxProps,
    StylesApiProps<AccordionPanelFactory>,
    ElementProps<"div", "onTransitionEnd"> {}

export type AccordionPanelFactory = Factory<{
  props: AccordionPanelProps;
  ref: HTMLDivElement;
  stylesNames: AccordionPanelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<AccordionPanelProps> = {};

export const AccordionPanel = factory<AccordionPanelFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    ...others
  } = useProps("AccordionPanel", defaultProps, props);

  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();

  return (
    <Collapse
      ref={ref}
      {...ctx.getStyles("panel", { className, classNames, style, styles })}
      {...others}
      in={ctx.isItemActive(value)}
      transitionDuration={ctx.transitionDuration}
      role="region"
      id={ctx.getRegionId(value)}
      aria-labelledby={ctx.getControlId(value)}
    >
      <div {...ctx.getStyles("content", { classNames, styles })}>
        {children}
      </div>
    </Collapse>
  );
});

AccordionPanel.displayName = "@raikou/core/AccordionPanel";
