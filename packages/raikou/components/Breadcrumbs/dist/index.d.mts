import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSpacing, Factory } from '@raikou/core';
import React from 'react';

type BreadcrumbsStylesNames = "root" | "separator" | "breadcrumb";
type BreadcrumbsVariant = string;
type BreadcrumbsCssVariables = {
    root: "--bc-separator-margin";
};
interface BreadcrumbsProps extends BoxProps, StylesApiProps<BreadcrumbsFactory>, ElementProps<"div"> {
    /** Separator between children, `'/'` by default */
    separator?: React.ReactNode;
    /** Controls spacing between separator and breadcrumb, `'xs'` by default */
    separatorMargin?: RaikouSpacing | (string & {}) | number;
    /** React nodes that should be separated with `separator` */
    children: React.ReactNode;
}
type BreadcrumbsFactory = Factory<{
    props: BreadcrumbsProps;
    ref: HTMLDivElement;
    stylesNames: BreadcrumbsStylesNames;
    vars: BreadcrumbsCssVariables;
    variant: BreadcrumbsVariant;
}>;
declare const Breadcrumbs: _raikou_core.RaikouComponent<{
    props: BreadcrumbsProps;
    ref: HTMLDivElement;
    stylesNames: BreadcrumbsStylesNames;
    vars: BreadcrumbsCssVariables;
    variant: BreadcrumbsVariant;
}>;

export { Breadcrumbs, BreadcrumbsCssVariables, BreadcrumbsFactory, BreadcrumbsProps, BreadcrumbsStylesNames, BreadcrumbsVariant };
