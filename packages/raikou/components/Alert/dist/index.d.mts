import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouRadius, RaikouColor, Factory } from '@raikou/core';
import React from 'react';

type AlertStylesNames = "root" | "body" | "label" | "title" | "icon" | "wrapper" | "message" | "closeButton";
type AlertVariant = "filled" | "light" | "outline" | "default" | "transparent" | "white";
type AlertCssVariables = {
    root: "--alert-radius" | "--alert-bg" | "--alert-color" | "--alert-bd";
};
interface AlertProps extends BoxProps, StylesApiProps<AlertFactory>, ElementProps<"div", "title"> {
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: RaikouColor;
    /** Alert title */
    title?: React.ReactNode;
    /** Icon displayed next to the title */
    icon?: React.ReactNode;
    /** Determines whether close button should be displayed, `false` by default */
    withCloseButton?: boolean;
    /** Called when the close button is clicked */
    onClose?: () => void;
    /** Close button `aria-label` */
    closeButtonLabel?: string;
    /** Determines whether text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
}
type AlertFactory = Factory<{
    props: AlertProps;
    ref: HTMLDivElement;
    stylesNames: AlertStylesNames;
    vars: AlertCssVariables;
    variant: AlertVariant;
}>;
declare const Alert: _raikou_core.RaikouComponent<{
    props: AlertProps;
    ref: HTMLDivElement;
    stylesNames: AlertStylesNames;
    vars: AlertCssVariables;
    variant: AlertVariant;
}>;

export { Alert, type AlertCssVariables, type AlertFactory, type AlertProps, type AlertStylesNames, type AlertVariant };
