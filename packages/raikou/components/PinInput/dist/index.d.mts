import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSpacing, RaikouRadius, RaikouSize, Factory } from '@raikou/core';
import React from 'react';

type PinInputStylesNames = "root" | "pinInput" | "input";
type PinInputCssVariables = {
    root: "--pin-input-size";
};
interface PinInputProps extends BoxProps, StylesApiProps<PinInputFactory>, ElementProps<"div", "onChange"> {
    /** Hidden input name attribute */
    name?: string;
    /** Hidden input form attribute */
    form?: string;
    /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem, `'md'` by default */
    gap?: RaikouSpacing | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Controls inputs `width` and `height`, `'sm'` by default */
    size?: RaikouSize;
    /** If set, the first input is focused when component is mounted, `false` by default */
    autoFocus?: boolean;
    /** Controlled component value */
    value?: string;
    /** Uncontrolled component default value */
    defaultValue?: string;
    /** Called when value changes */
    onChange?(value: string): void;
    /** Called when all inputs have value */
    onComplete?(value: string): void;
    /** Inputs placeholder, `'○'` by default */
    placeholder?: string;
    /** Determines whether focus should be moved automatically to the next input once filled, `true` by default */
    manageFocus?: boolean;
    /** Determines whether `autocomplete="one-time-code"` attribute should be set on all inputs, `true` by default */
    oneTimeCode?: boolean;
    /** Base id used for all inputs, generated randomly by default */
    id?: string;
    /** Disables all inputs */
    disabled?: boolean;
    /** Adds error styles to all inputs */
    error?: boolean;
    /** Allowed values, `'alphanumeric'` by default */
    type?: "alphanumeric" | "number" | RegExp;
    /** Changes input type to `"password"`, `false` by default */
    mask?: boolean;
    /** Number of input boxes, `4` by default */
    length?: number;
    /** Determines whether input content can be edited */
    readOnly?: boolean;
    /** Inputs `type` attribute, inferred from the `type` prop if not specified */
    inputType?: React.HTMLInputTypeAttribute;
    /** `inputmode` attribute, inferred from the `type` prop if not specified */
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    /** `aria-label` for the inputs */
    ariaLabel?: string;
}
type PinInputFactory = Factory<{
    props: PinInputProps;
    ref: HTMLInputElement;
    stylesNames: PinInputStylesNames;
    vars: PinInputCssVariables;
}>;
declare const PinInput: _raikou_core.RaikouComponent<{
    props: PinInputProps;
    ref: HTMLInputElement;
    stylesNames: PinInputStylesNames;
    vars: PinInputCssVariables;
}>;

export { PinInput, PinInputFactory, PinInputProps, PinInputStylesNames };
