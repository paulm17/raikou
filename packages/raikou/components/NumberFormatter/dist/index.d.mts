import * as _raikou_core from '@raikou/core';
import { Factory, RaikouThemeComponent } from '@raikou/core';
import React from 'react';

interface NumberFormatterProps extends React.ComponentPropsWithoutRef<"span"> {
    /** Value to format */
    value?: number | string;
    /** Determines whether negative values are allowed, `true` by default */
    allowNegative?: boolean;
    /** Limits the number of digits that are displayed after the decimal point, by default there is no limit */
    decimalScale?: number;
    /** Character used as a decimal separator, `'.'` by default */
    decimalSeparator?: string;
    /** If set, 0s are added after `decimalSeparator` to match given `decimalScale`. `false` by default */
    fixedDecimalScale?: boolean;
    /** Prefix added before the value */
    prefix?: string;
    /** Suffix added after the value */
    suffix?: string;
    /** Defines the thousand grouping style */
    thousandsGroupStyle?: "thousand" | "lakh" | "wan" | "none";
    /** A character used to separate thousands, `','` by default */
    thousandSeparator?: string | boolean;
}
type NumberFormatterFactory = Factory<{
    props: NumberFormatterProps;
    ref: HTMLDivElement;
}>;
declare function NumberFormatter(_props: NumberFormatterProps): React.JSX.Element | null;
declare namespace NumberFormatter {
    var extend: (c: _raikou_core.ExtendsRootComponent<{
        props: NumberFormatterProps;
        ref: HTMLDivElement;
    }>) => RaikouThemeComponent;
    var displayName: string;
}

export { NumberFormatter, NumberFormatterFactory, NumberFormatterProps };
