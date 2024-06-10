import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, RaikouColor, RaikouRadius, Factory, CompoundStylesApiProps } from '@raikou/core';
import React from 'react';

type PaginationRootStylesNames = "root" | "control" | "dots";
type PaginationRootCssVariables = {
    root: "--pagination-control-size" | "--pagination-control-radius" | "--pagination-control-fz" | "--pagination-active-bg";
};
interface PaginationRootProps extends BoxProps, StylesApiProps<PaginationRootFactory>, ElementProps<"div", "value" | "onChange"> {
    /** `height` and `min-width` of controls, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
    /** Total number of pages, must be an integer */
    total: number;
    /** Active page for controlled component, must be an integer in [0, total] interval */
    value?: number;
    /** Active page for uncontrolled component, must be an integer in [0, total] interval */
    defaultValue?: number;
    /** Called when page changes */
    onChange?: (value: number) => void;
    /** Determines whether all controls should be disabled, `false` by default */
    disabled?: boolean;
    /** Number of siblings displayed on the left/right side of the selected page, `1` by default */
    siblings?: number;
    /** Number of elements visible on the left/right edges, `1` by default */
    boundaries?: number;
    /** Key of `theme.colors`, active item color, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Called when next page control is clicked */
    onNextPage?: () => void;
    /** Called when previous page control is clicked */
    onPreviousPage?: () => void;
    /** Called when first page control is clicked */
    onFirstPage?: () => void;
    /** Called when last page control is clicked */
    onLastPage?: () => void;
    /** Additional props passed down to controls */
    getItemProps?: (page: number) => Record<string, any>;
    /** Determines whether active item text color should depend on `background-color` of the indicator. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
}
type PaginationRootFactory = Factory<{
    props: PaginationRootProps;
    ref: HTMLDivElement;
    stylesNames: PaginationRootStylesNames;
    vars: PaginationRootCssVariables;
}>;
declare const PaginationRoot: _raikou_core.RaikouComponent<{
    props: PaginationRootProps;
    ref: HTMLDivElement;
    stylesNames: PaginationRootStylesNames;
    vars: PaginationRootCssVariables;
}>;

type PaginationControlStylesNames = "control";
interface PaginationControlProps extends BoxProps, CompoundStylesApiProps<PaginationControlFactory>, ElementProps<"button"> {
    /** Determines whether control should have active styles */
    active?: boolean;
    /** Determines whether control should have padding, true by default */
    withPadding?: boolean;
}
type PaginationControlFactory = Factory<{
    props: PaginationControlProps;
    ref: HTMLButtonElement;
    stylesNames: PaginationControlStylesNames;
    compound: true;
}>;
declare const PaginationControl: _raikou_core.RaikouComponent<{
    props: PaginationControlProps;
    ref: HTMLButtonElement;
    stylesNames: PaginationControlStylesNames;
    compound: true;
}>;

interface _PaginationIconProps extends React.ComponentPropsWithoutRef<'svg'> {
    path: string;
}
type PaginationIconProps = Omit<_PaginationIconProps, 'path'>;
type PaginationIcon = React.FC<PaginationIconProps>;

type PaginationDotsStylesNames = "dots";
interface PaginationDotsProps extends BoxProps, CompoundStylesApiProps<PaginationDotsFactory>, ElementProps<"div"> {
    /** Custom dots icon component, must accept svg element props and size prop */
    icon?: React.FC<PaginationIconProps>;
}
type PaginationDotsFactory = Factory<{
    props: PaginationDotsProps;
    ref: HTMLDivElement;
    stylesNames: PaginationDotsStylesNames;
    compound: true;
}>;
declare const PaginationDots: _raikou_core.RaikouComponent<{
    props: PaginationDotsProps;
    ref: HTMLDivElement;
    stylesNames: PaginationDotsStylesNames;
    compound: true;
}>;

interface PaginationEdgeProps extends BoxProps {
    icon?: React.FC<PaginationIconProps>;
}
declare const PaginationNext: (<C = "button">(props: C extends React.ElementType<any> ? PaginationEdgeProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof PaginationEdgeProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : PaginationEdgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(PaginationEdgeProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof PaginationEdgeProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (PaginationEdgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & Record<string, never>;
declare const PaginationPrevious: (<C = "button">(props: C extends React.ElementType<any> ? PaginationEdgeProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof PaginationEdgeProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : PaginationEdgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(PaginationEdgeProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof PaginationEdgeProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (PaginationEdgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & Record<string, never>;
declare const PaginationFirst: (<C = "button">(props: C extends React.ElementType<any> ? PaginationEdgeProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof PaginationEdgeProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : PaginationEdgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(PaginationEdgeProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof PaginationEdgeProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (PaginationEdgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & Record<string, never>;
declare const PaginationLast: (<C = "button">(props: C extends React.ElementType<any> ? PaginationEdgeProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof PaginationEdgeProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : PaginationEdgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(PaginationEdgeProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof PaginationEdgeProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (PaginationEdgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & Record<string, never>;

interface PaginationItemsProps {
    /** Dots icon component */
    dotsIcon?: PaginationIcon;
}
declare function PaginationItems({ dotsIcon }: PaginationItemsProps): React.JSX.Element;
declare namespace PaginationItems {
    var displayName: string;
}

type PaginationStylesNames = PaginationRootStylesNames;
type PaginationCssVariables = PaginationRootCssVariables;
interface PaginationProps extends PaginationRootProps {
    /** Determines whether first/last controls should be rendered, false by default */
    withEdges?: boolean;
    /** Determines whether next/previous controls should be rendered, true by default */
    withControls?: boolean;
    /** Adds props to next/previous/first/last controls */
    getControlProps?: (control: "first" | "previous" | "last" | "next") => Record<string, any>;
    /** Next control icon component */
    nextIcon?: PaginationIcon;
    /** Previous control icon component */
    previousIcon?: PaginationIcon;
    /** Last control icon component */
    lastIcon?: PaginationIcon;
    /** First control icon component */
    firstIcon?: PaginationIcon;
    /** Dots icon component */
    dotsIcon?: PaginationIcon;
    /** Key of `theme.spacing`, gap between controls, `8` by default */
    gap?: RaikouSize | (string & {}) | number;
}
type PaginationFactory = Factory<{
    props: PaginationProps;
    ref: HTMLDivElement;
    stylesNames: PaginationStylesNames;
    vars: PaginationCssVariables;
    staticComponents: {
        Root: typeof PaginationRoot;
        Control: typeof PaginationControl;
        Dots: typeof PaginationDots;
        First: typeof PaginationFirst;
        Last: typeof PaginationLast;
        Next: typeof PaginationNext;
        Previous: typeof PaginationPrevious;
        Items: typeof PaginationItems;
    };
}>;
declare const Pagination: _raikou_core.RaikouComponent<{
    props: PaginationProps;
    ref: HTMLDivElement;
    stylesNames: PaginationStylesNames;
    vars: PaginationCssVariables;
    staticComponents: {
        Root: typeof PaginationRoot;
        Control: typeof PaginationControl;
        Dots: typeof PaginationDots;
        First: typeof PaginationFirst;
        Last: typeof PaginationLast;
        Next: typeof PaginationNext;
        Previous: typeof PaginationPrevious;
        Items: typeof PaginationItems;
    };
}>;

export { Pagination, PaginationControl, type PaginationControlProps, type PaginationCssVariables, PaginationDots, type PaginationDotsProps, type PaginationEdgeProps, type PaginationFactory, PaginationFirst, PaginationItems, type PaginationItemsProps, PaginationLast, PaginationNext, PaginationPrevious, type PaginationProps, PaginationRoot, type PaginationRootProps, type PaginationStylesNames };
