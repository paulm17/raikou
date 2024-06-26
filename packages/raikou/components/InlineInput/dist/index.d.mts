import React from 'react';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, Factory } from '@raikou/core';

declare const InlineInputClasses: any;
type InlineInputStylesNames = "root" | "body" | "labelWrapper" | "label" | "description" | "error";
interface InlineInputProps extends BoxProps, StylesApiProps<InlineInputFactory>, ElementProps<"div"> {
    __staticSelector: string;
    __stylesApiProps: Record<string, any>;
    label: React.ReactNode;
    description: React.ReactNode;
    id: string;
    disabled: boolean | undefined;
    error: React.ReactNode;
    size: RaikouSize | (string & {}) | undefined;
    labelPosition?: "left" | "right";
    bodyElement?: any;
    labelElement?: any;
}
type InlineInputFactory = Factory<{
    props: any;
    stylesNames: InlineInputStylesNames;
}>;
declare const InlineInput: React.ForwardRefExoticComponent<InlineInputProps & React.RefAttributes<HTMLDivElement>>;

export { InlineInput, InlineInputClasses, type InlineInputStylesNames };
