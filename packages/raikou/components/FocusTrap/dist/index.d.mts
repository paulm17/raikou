import React from 'react';

interface FocusTrapProps {
    /** Element at which focus should be trapped, should support ref prop */
    children: any;
    /** Determines whether focus should be trapped within child element */
    active?: boolean;
    /** Prop that should be used to access component ref */
    refProp?: string;
}
declare function FocusTrap({ children, active, refProp, }: FocusTrapProps): React.ReactElement;
declare namespace FocusTrap {
    var displayName: string;
    var InitialFocus: typeof FocusTrapInitialFocus;
}
declare function FocusTrapInitialFocus(props: React.ComponentPropsWithoutRef<"span">): React.JSX.Element;
declare namespace FocusTrapInitialFocus {
    var displayName: string;
}

export { FocusTrap, type FocusTrapProps };
