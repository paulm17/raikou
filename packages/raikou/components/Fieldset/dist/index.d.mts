import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouRadius, Factory } from '@raikou/core';
import React from 'react';

type FieldsetStylesNames = "root" | "legend";
type FieldsetVariant = "default" | "filled" | "unstyled";
type FieldsetCSSVariables = {
    root: "--fieldset-radius";
};
interface FieldsetProps extends BoxProps, StylesApiProps<FieldsetFactory>, ElementProps<"fieldset"> {
    /** Fieldset legend */
    legend?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
}
type FieldsetFactory = Factory<{
    props: FieldsetProps;
    ref: HTMLFieldSetElement;
    stylesNames: FieldsetStylesNames;
    vars: FieldsetCSSVariables;
    variant: FieldsetVariant;
}>;
declare const Fieldset: _raikou_core.RaikouComponent<{
    props: FieldsetProps;
    ref: HTMLFieldSetElement;
    stylesNames: FieldsetStylesNames;
    vars: FieldsetCSSVariables;
    variant: FieldsetVariant;
}>;

export { Fieldset, FieldsetFactory, FieldsetProps, FieldsetStylesNames, FieldsetVariant };
