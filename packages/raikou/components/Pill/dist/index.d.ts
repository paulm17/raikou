import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, Factory, RaikouRadius } from '@raikou/core';
import React from 'react';

type PillGroupStylesNames = "group";
type PillGroupCssVariables = {
    group: "--pg-gap";
};
interface PillGroupProps extends BoxProps, StylesApiProps<PillGroupFactory>, ElementProps<"div"> {
    /** Controls spacing between pills, by default controlled by `size` */
    gap?: RaikouSize | (string & {}) | number;
    /** Controls size of the child `Pill` components and gap between them, `'sm'` by default */
    size?: RaikouSize | (string & {});
    /** Determines whether child `Pill` components should be disabled */
    disabled?: boolean;
}
type PillGroupFactory = Factory<{
    props: PillGroupProps;
    ref: HTMLDivElement;
    stylesNames: PillGroupStylesNames;
    vars: PillGroupCssVariables;
    ctx: {
        size: RaikouSize | (string & {});
    };
}>;
declare const PillGroup: _raikou_core.RaikouComponent<{
    props: PillGroupProps;
    ref: HTMLDivElement;
    stylesNames: PillGroupStylesNames;
    vars: PillGroupCssVariables;
    ctx: {
        size: RaikouSize | (string & {});
    };
}>;

type PillStylesNames = "root" | "label" | "remove";
type PillVariant = "default" | "contrast";
type PillCssVariables = {
    root: "--pill-fz" | "--pill-radius" | "--pill-height";
};
interface PillProps extends BoxProps, StylesApiProps<PillFactory>, ElementProps<"div"> {
    /** Controls pill `font-size` and `padding`, `'sm'` by default */
    size?: RaikouSize;
    /** Determines whether the remove button should be displayed, `false` by default */
    withRemoveButton?: boolean;
    /** Called when the remove button is clicked */
    onRemove?(): void;
    /** Props passed down to the remove button */
    removeButtonProps?: React.ComponentPropsWithoutRef<"button">;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `'xl'` by default. */
    radius?: RaikouRadius | (string & {}) | number;
    /** If pill is disabled it has higher contrast to be visible on the disabled input background and the remove button is hidden */
    disabled?: boolean;
}
type PillFactory = Factory<{
    props: PillProps;
    ref: HTMLDivElement;
    stylesNames: PillStylesNames;
    vars: PillCssVariables;
    variant: PillVariant;
    ctx: {
        size: RaikouSize | (string & {});
    };
    staticComponents: {
        Group: typeof PillGroup;
    };
}>;
declare const Pill: _raikou_core.RaikouComponent<{
    props: PillProps;
    ref: HTMLDivElement;
    stylesNames: PillStylesNames;
    vars: PillCssVariables;
    variant: PillVariant;
    ctx: {
        size: RaikouSize | (string & {});
    };
    staticComponents: {
        Group: typeof PillGroup;
    };
}>;

export { Pill, PillCssVariables, PillFactory, PillGroup, PillGroupCssVariables, PillGroupFactory, PillGroupProps, PillGroupStylesNames, PillProps, PillStylesNames, PillVariant };
