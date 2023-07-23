import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';
import React from 'react';

interface PortalProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

type AffixStylesNames = "root";
type AffixCssVariables = {
    root: "--affix-z-index" | "--affix-top" | "--affix-left" | "--affix-bottom" | "--affix-right";
};
interface AffixProps extends BoxProps, StylesApiProps<AffixFactory>, ElementProps<"div"> {
    /** Root element `z-index` property, `200` by default */
    zIndex?: React.CSSProperties["zIndex"];
    /** Determines whether component should be rendered within portal, `true` by default */
    withinPortal?: boolean;
    /** Props to pass down to the `Portal` component when `withinPortal` is set */
    portalProps?: Omit<PortalProps, "children">;
    /** Affix position on screen, defaults value is `{ bottom: 0, right: 0 }` */
    position?: {
        top?: string | number;
        left?: string | number;
        bottom?: string | number;
        right?: string | number;
    };
}
type AffixFactory = Factory<{
    props: AffixProps;
    ref: HTMLDivElement;
    stylesNames: AffixStylesNames;
    vars: AffixCssVariables;
}>;
declare const Affix: _raikou_core.RaikouComponent<{
    props: AffixProps;
    ref: HTMLDivElement;
    stylesNames: AffixStylesNames;
    vars: AffixCssVariables;
}>;

export { Affix, AffixCssVariables, AffixFactory, AffixProps, AffixStylesNames };
