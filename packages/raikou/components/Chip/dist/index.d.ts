import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouRadius, RaikouSize, RaikouColor, Factory } from '@raikou/core';
import React from 'react';

interface ChipGroupProps<T extends boolean = false> {
    /** Allow multiple values to be selected at a time */
    multiple?: T;
    /** Controlled component value */
    value?: T extends true ? string[] : string | null;
    /** Uncontrolled component initial value */
    defaultValue?: T extends true ? string[] : string | null;
    /** Called when value changes */
    onChange?(value: T extends true ? string[] : string): void;
    /** <Chip /> components */
    children?: React.ReactNode;
}
declare function ChipGroup<T extends boolean>(props: ChipGroupProps<T>): JSX.Element;
declare namespace ChipGroup {
    var displayName: string;
}

type ChipStylesNames = "root" | "input" | "iconWrapper" | "checkIcon" | "label";
type ChipVariant = "outline" | "filled" | "light";
type ChipCssVariables = {
    root: "--chip-fz" | "--chip-size" | "--chip-icon-size" | "--chip-padding" | "--chip-checked-padding" | "--chip-radius" | "--chip-bg" | "--chip-hover" | "--chip-color" | "--chip-bd" | "--chip-spacing";
};
interface ChipProps extends BoxProps, StylesApiProps<ChipFactory>, ElementProps<"input", "size" | "onChange"> {
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Controls various properties, `'sm'` by default */
    size?: RaikouSize;
    /** Chip input type */
    type?: "radio" | "checkbox";
    /** Chip label */
    children: React.ReactNode;
    /** Checked state for controlled component */
    checked?: boolean;
    /** Default checked state for uncontrolled component */
    defaultChecked?: boolean;
    /** Calls when checked state changes */
    onChange?(checked: boolean): void;
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` */
    color?: RaikouColor;
    /** Static id to bind input with label */
    id?: string;
    /** Props passed down to the wrapper element */
    wrapperProps?: Record<string, any>;
    /** Replaces default icon */
    icon?: React.ReactNode;
}
type ChipFactory = Factory<{
    props: ChipProps;
    ref: HTMLInputElement;
    stylesNames: ChipStylesNames;
    vars: ChipCssVariables;
    variant: ChipVariant;
    staticComponents: {
        Group: typeof ChipGroup;
    };
}>;
declare const Chip: _raikou_core.RaikouComponent<{
    props: ChipProps;
    ref: HTMLInputElement;
    stylesNames: ChipStylesNames;
    vars: ChipCssVariables;
    variant: ChipVariant;
    staticComponents: {
        Group: typeof ChipGroup;
    };
}>;

export { Chip, ChipCssVariables, ChipFactory, ChipGroup, ChipGroupProps, ChipProps, ChipStylesNames, ChipVariant };
