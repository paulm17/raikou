import * as _raikou_core from '@raikou/core';
import { BoxProps } from '@raikou/core';
import React from 'react';

interface CollapseProps extends BoxProps, Omit<React.ComponentPropsWithoutRef<"div">, keyof BoxProps> {
    /** Opened state */
    in: boolean;
    /** Called each time transition ends */
    onTransitionEnd?: () => void;
    /** Transition duration in ms, `200` by default */
    transitionDuration?: number;
    /** Transition timing function, default value is `ease` */
    transitionTimingFunction?: string;
    /** Determines whether opacity should be animated, `true` by default */
    animateOpacity?: boolean;
}
declare const Collapse: _raikou_core.RaikouComponent<{
    props: CollapseProps;
    ref: HTMLDivElement;
}>;

export { Collapse, type CollapseProps };
