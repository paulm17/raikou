import * as _raikou_core from '@raikou/core';
import { BoxProps, CompoundStylesApiProps, ElementProps, Factory, StylesApiProps, RaikouRadius, RaikouThemeComponent } from '@raikou/core';
import React from 'react';

type AccordionControlStylesNames = "control" | "chevron" | "label" | "itemTitle" | "icon";
interface AccordionControlProps extends BoxProps, CompoundStylesApiProps<AccordionControlFactory>, ElementProps<"button"> {
    /** Disables control button */
    disabled?: boolean;
    /** Custom chevron icon */
    chevron?: React.ReactNode;
    /** Control label */
    children?: React.ReactNode;
    /** Icon displayed next to the label */
    icon?: React.ReactNode;
}
type AccordionControlFactory = Factory<{
    props: AccordionControlProps;
    ref: HTMLButtonElement;
    stylesNames: AccordionControlStylesNames;
    compound: true;
}>;
declare const AccordionControl: _raikou_core.RaikouComponent<{
    props: AccordionControlProps;
    ref: HTMLButtonElement;
    stylesNames: AccordionControlStylesNames;
    compound: true;
}>;

type AccordionPanelStylesNames = "panel" | "content";
interface AccordionPanelProps extends BoxProps, CompoundStylesApiProps<AccordionPanelFactory>, ElementProps<"div", "onTransitionEnd"> {
}
type AccordionPanelFactory = Factory<{
    props: AccordionPanelProps;
    ref: HTMLDivElement;
    stylesNames: AccordionPanelStylesNames;
    compound: true;
}>;
declare const AccordionPanel: _raikou_core.RaikouComponent<{
    props: AccordionPanelProps;
    ref: HTMLDivElement;
    stylesNames: AccordionPanelStylesNames;
    compound: true;
}>;

type AccordionItemStylesNames = "item";
interface AccordionItemProps extends BoxProps, CompoundStylesApiProps<AccordionItemFactory>, ElementProps<"div"> {
    /** Value that is used to manage accordion state */
    value: string;
}
type AccordionItemFactory = Factory<{
    props: AccordionItemProps;
    ref: HTMLDivElement;
    stylesNames: AccordionItemStylesNames;
    compound: true;
}>;
declare const AccordionItem: _raikou_core.RaikouComponent<{
    props: AccordionItemProps;
    ref: HTMLDivElement;
    stylesNames: AccordionItemStylesNames;
    compound: true;
}>;

interface AccordionChevronProps extends React.ComponentPropsWithoutRef<"svg"> {
    /** Controls `width` and `height` of the icon, `16` by default */
    size?: number | string;
}
declare function AccordionChevron({ style, size, ...others }: AccordionChevronProps): React.JSX.Element;
declare namespace AccordionChevron {
    var displayName: string;
}

type AccordionValue<Multiple extends boolean> = Multiple extends true ? string[] : string | null;
type AccordionHeadingOrder = 2 | 3 | 4 | 5 | 6;
type AccordionChevronPosition = 'left' | 'right';

type AccordionStylesNames = "root" | "content" | "item" | "panel" | "icon" | "chevron" | "label" | "itemTitle" | "control";
type AccordionVariant = "default" | "contained" | "filled" | "separated";
type AccordionCssVariables = {
    root: "--accordion-transition-duration" | "--accordion-chevron-size" | "--accordion-radius";
};
interface AccordionProps<Multiple extends boolean = false> extends BoxProps, StylesApiProps<AccordionFactory>, ElementProps<"div", "value" | "defaultValue" | "onChange"> {
    /** Determines whether multiple items can be opened at a time, `false` by default */
    multiple?: Multiple;
    /** Value for controlled component */
    value?: AccordionValue<Multiple>;
    /** Default value for uncontrolled component */
    defaultValue?: AccordionValue<Multiple>;
    /** Called when value changes */
    onChange?(value: AccordionValue<Multiple>): void;
    /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
    loop?: boolean;
    /** Transition duration in ms, `200` by default */
    transitionDuration?: number;
    /** Determines whether chevron rotation should be disabled, `false` by default */
    disableChevronRotation?: boolean;
    /** Position of the chevron relative to the item label, `right` by default */
    chevronPosition?: AccordionChevronPosition;
    /** Size of the chevron icon container, `24` by default */
    chevronSize?: number | string;
    /** Heading order, has no effect on visuals */
    order?: AccordionHeadingOrder;
    /** Custom chevron icon that will be used in all items */
    chevron?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: RaikouRadius;
}
type AccordionFactory = Factory<{
    props: AccordionProps;
    ref: HTMLDivElement;
    stylesNames: AccordionStylesNames;
    vars: AccordionCssVariables;
    variant: AccordionVariant;
}>;
declare function Accordion<Multiple extends boolean = false>(_props: AccordionProps<Multiple>): React.JSX.Element;
declare namespace Accordion {
    var extend: (c: _raikou_core.ExtendsRootComponent<{
        props: AccordionProps<false>;
        ref: HTMLDivElement;
        stylesNames: AccordionStylesNames;
        vars: AccordionCssVariables;
        variant: AccordionVariant;
    }>) => RaikouThemeComponent;
    var displayName: string;
    var Item: _raikou_core.RaikouComponent<{
        props: AccordionItemProps;
        ref: HTMLDivElement;
        stylesNames: "item";
        compound: true;
    }>;
    var Panel: _raikou_core.RaikouComponent<{
        props: AccordionPanelProps;
        ref: HTMLDivElement;
        stylesNames: AccordionPanelStylesNames;
        compound: true;
    }>;
    var Control: _raikou_core.RaikouComponent<{
        props: AccordionControlProps;
        ref: HTMLButtonElement;
        stylesNames: AccordionControlStylesNames;
        compound: true;
    }>;
    var Chevron: typeof AccordionChevron;
}

export { Accordion, AccordionChevron, AccordionChevronProps, AccordionControl, AccordionControlProps, AccordionCssVariables, AccordionFactory, AccordionHeadingOrder, AccordionItem, AccordionItemProps, AccordionPanel, AccordionPanelProps, AccordionProps, AccordionStylesNames, AccordionValue, AccordionVariant };
