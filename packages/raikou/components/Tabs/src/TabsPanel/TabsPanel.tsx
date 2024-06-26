import React from "react";
import {
  Box,
  BoxProps,
  useProps,
  factory,
  ElementProps,
  CompoundStylesApiProps,
  Factory,
} from "@raikou/core";
import { useTabsContext } from "../Tabs.context";

export type TabsPanelStylesNames = "panel";

export interface TabsPanelProps
  extends BoxProps,
    CompoundStylesApiProps<TabsPanelFactory>,
    ElementProps<"div"> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated control */
  value: string;
}

export type TabsPanelFactory = Factory<{
  props: TabsPanelProps;
  ref: HTMLDivElement;
  stylesNames: TabsPanelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TabsPanelProps> = {};

export const TabsPanel = factory<TabsPanelFactory>((_props, ref) => {
  const props = useProps("TabsPanel", defaultProps, _props);
  const {
    children,
    className,
    value,
    classNames,
    styles,
    style,
    mod,
    ...others
  } = props;

  const ctx = useTabsContext();

  const active = ctx.value === value;
  const content = ctx.keepMounted ? children : active ? children : null;

  return (
    <Box
      {...others}
      {...ctx.getStyles("panel", {
        className,
        classNames,
        styles,
        style: [style, !active ? { display: "none" } : undefined],
        props,
      })}
      ref={ref}
      mod={[{ orientation: ctx.orientation }, mod]}
      role="tabpanel"
      id={ctx.getPanelId(value)}
      aria-labelledby={ctx.getTabId(value)}
    >
      {content}
    </Box>
  );
});

TabsPanel.displayName = "@raikou/core/TabsPanel";
