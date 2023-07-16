import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory, BoxComponentProps, PolymorphicFactory, RaikouColor, RaikouRadius } from '@raikou/core';
import React from 'react';

type TabsListStylesNames = "list";
interface TabsListProps extends BoxProps, StylesApiProps<TabsListFactory>, ElementProps<"div"> {
    /** `Tabs.Tab` components */
    children: React.ReactNode;
    /** Determines whether tabs should take all available space, `false` by default */
    grow?: boolean;
    /** Tabs alignment, `flex-start` by default */
    justify?: React.CSSProperties["justifyContent"];
}
type TabsListFactory = Factory<{
    props: TabsListProps;
    ref: HTMLDivElement;
    stylesNames: TabsListStylesNames;
    compound: true;
}>;
declare const TabsList: _raikou_core.RaikouComponent<{
    props: TabsListProps;
    ref: HTMLDivElement;
    stylesNames: TabsListStylesNames;
    compound: true;
}>;

type TabsPanelStylesNames = "panel";
interface TabsPanelProps extends BoxProps, StylesApiProps<TabsPanelFactory>, ElementProps<"div"> {
    /** Panel content */
    children: React.ReactNode;
    /** Value of associated control */
    value: string;
}
type TabsPanelFactory = Factory<{
    props: TabsPanelProps;
    ref: HTMLDivElement;
    stylesNames: TabsPanelStylesNames;
    compound: true;
}>;
declare const TabsPanel: _raikou_core.RaikouComponent<{
    props: TabsPanelProps;
    ref: HTMLDivElement;
    stylesNames: TabsPanelStylesNames;
    compound: true;
}>;

type UnstyledButtonStylesNames = "root";
interface UnstyledButtonProps extends Omit<BoxComponentProps, "vars" | "variant">, StylesApiProps<UnstyledButtonFactory> {
    __staticSelector?: string;
}
type UnstyledButtonFactory = PolymorphicFactory<{
    props: UnstyledButtonProps;
    stylesNames: UnstyledButtonStylesNames;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
}>;

type TabsTabStylesNames = "tab" | "tabSection" | "tabLabel";
interface TabsTabProps extends Omit<UnstyledButtonProps, "classNames" | "styles" | "vars">, StylesApiProps<TabsTabFactory>, ElementProps<"button"> {
    /** Value of associated panel */
    value: string;
    /** Tab label */
    children?: React.ReactNode;
    /** Content displayed on the right side of the label, for example, icon */
    rightSection?: React.ReactNode;
    /** Content displayed on the left side of the label, for example, icon */
    leftSection?: React.ReactNode;
    /** Key of `theme.colors` or any valid CSS color, controls control color based on `variant` */
    color?: RaikouColor;
}
type TabsTabFactory = Factory<{
    props: TabsTabProps;
    ref: HTMLButtonElement;
    stylesNames: TabsTabStylesNames;
    compound: true;
}>;
declare const TabsTab: _raikou_core.RaikouComponent<{
    props: TabsTabProps;
    ref: HTMLButtonElement;
    stylesNames: TabsTabStylesNames;
    compound: true;
}>;

type TabsStylesNames = "root" | TabsListStylesNames | TabsPanelStylesNames | TabsTabStylesNames;
type TabsVariant = "default" | "outline" | "pills";
type TabsCssVariables = {
    root: "--tabs-color" | "--tabs-radius";
};
interface TabsProps extends BoxProps, StylesApiProps<TabsFactory>, ElementProps<"div", "defaultValue" | "value" | "onChange"> {
    /** Default value for uncontrolled component */
    defaultValue?: string | null;
    /** Value for controlled component */
    value?: string | null;
    /** Called when value changes */
    onChange?(value: string | null): void;
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
    radius?: RaikouRadius | number | (string & {});
    /** Determines whether tabs should have inverted styles, `false` by default */
    inverted?: boolean;
    /** If set to `false`, `Tabs.Panel` content will be unmounted when the associated tab is not active, `true` by default */
    keepMounted?: boolean;
}
type TabsFactory = Factory<{
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
declare const Tabs: _raikou_core.RaikouComponent<{
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

export { Tabs, TabsCssVariables, TabsFactory, TabsList, TabsListProps, TabsListStylesNames, TabsPanel, TabsPanelProps, TabsPanelStylesNames, TabsProps, TabsStylesNames, TabsTab, TabsTabProps, TabsTabStylesNames, TabsVariant };
