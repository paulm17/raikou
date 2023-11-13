import React from "react";
import { useId, useUncontrolled } from "@raikou/hooks";
import {
  Box,
  BoxProps,
  RaikouColor,
  RaikouRadius,
  StylesApiProps,
  factory,
  useProps,
  getSafeId,
  useStyles,
  ElementProps,
  getRadius,
  getThemeColor,
  createVarsResolver,
  Factory,
} from "@raikou/core";
import { TabsProvider } from "./Tabs.context";
import { TabsList, TabsListStylesNames } from "./TabsList/TabsList";
import { TabsPanel, TabsPanelStylesNames } from "./TabsPanel/TabsPanel";
import { TabsTab, TabsTabStylesNames } from "./TabsTab/TabsTab";

export type TabsStylesNames =
  | "root"
  | TabsListStylesNames
  | TabsPanelStylesNames
  | TabsTabStylesNames;

export type TabsVariant = "default" | "outline" | "pills";
export type TabsCssVariables = {
  root: "--tabs-color" | "--tabs-radius";
};

export interface TabsProps
  extends BoxProps,
    StylesApiProps<TabsFactory>,
    ElementProps<"div", "defaultValue" | "value" | "onChange"> {
  /** Default value for uncontrolled component */
  defaultValue?: string | null;

  /** Value for controlled component */
  value?: string | null;

  /** Called when value changes */
  onChange?: (value: string | null) => void;

  /** Tabs orientation, `'horizontal'` by default */
  orientation?: "vertical" | "horizontal";

  /** `Tabs.List` placement relative to `Tabs.Panel`, applicable only when `orientation="vertical"`, `'left'` by default */
  placement?: "left" | "right";

  /** Base id, used to generate ids to connect labels with controls, generated randomly by default */
  id?: string;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** Determines whether tab should be activated with arrow key press, `true` by default */
  activateTabWithKeyboard?: boolean;

  /** Determines whether tab can be deactivated, `false` by default */
  allowTabDeactivation?: boolean;

  /** Tabs content */
  children: React.ReactNode;

  /** Changes colors of `Tabs.Tab` components when variant is `pills` or `default`, does nothing for other variants */
  color?: RaikouColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius;

  /** Determines whether tabs should have inverted styles, `false` by default */
  inverted?: boolean;

  /** If set to `false`, `Tabs.Panel` content will be unmounted when the associated tab is not active, `true` by default */
  keepMounted?: boolean;
}

export type TabsFactory = Factory<{
  props: TabsProps;
  ref: HTMLDivElement;
  variant: TabsVariant;
  stylesNames: TabsStylesNames;
  vars: TabsCssVariables;
  staticComponents: {
    Tab: typeof TabsTab;
    Panel: typeof TabsPanel;
    List: typeof TabsList;
  };
}>;

const VALUE_ERROR =
  "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value";

const defaultProps: Partial<TabsProps> = {
  keepMounted: true,
  orientation: "horizontal",
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: "default",
  placement: "left",
};

const varsResolver = createVarsResolver<TabsFactory>(
  (theme, { radius, color }) => ({
    root: {
      "--tabs-radius": getRadius(radius),
      "--tabs-color": getThemeColor(color, theme),
    },
  }),
);

export const Tabs = factory<TabsFactory>((_props, ref) => {
  const props = useProps("Tabs", defaultProps, _props);
  const {
    defaultValue,
    value,
    onChange,
    orientation,
    children,
    loop,
    id,
    activateTabWithKeyboard,
    allowTabDeactivation,
    variant,
    color,
    radius,
    inverted,
    placement,
    keepMounted,
    classNames,
    styles,
    unstyled,
    className,
    style,
    vars,
    ...others
  } = props;

  const uid = useId(id);

  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const getStyles = useStyles<TabsFactory>({
    name: "Tabs",
    props,
    classes: {
      root: "tabs-root",
      list: "tabs-list",
      panel: "tabs-panel",
      tab: "tabs-tab",
      tabSection: "tabs-tabSection",
      tabLabel: "tabs-tabLabel",
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <TabsProvider
      value={{
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId(`${uid}-tab`, VALUE_ERROR),
        getPanelId: getSafeId(`${uid}-panel`, VALUE_ERROR),
        onChange: setCurrentTab,
        allowTabDeactivation,
        variant,
        color,
        radius,
        inverted,
        keepMounted,
        unstyled,
        getStyles,
      }}
    >
      <Box
        ref={ref}
        id={uid}
        variant={variant}
        mod={{
          orientation,
          inverted: orientation === "horizontal" && inverted,
          placement: orientation === "vertical" && placement,
        }}
        {...getStyles("root")}
        {...others}
      >
        {children}
      </Box>
    </TabsProvider>
  );
});

Tabs.displayName = "@raikou/core/Tabs";
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;
