import React from 'react';

interface PortalProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}
declare const Portal: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<HTMLDivElement>>;

interface OptionalPortalProps extends PortalProps {
    /** Determines whether children should be rendered inside `<Portal />` */
    withinPortal?: boolean;
}
declare function OptionalPortal({ withinPortal, children, ...others }: OptionalPortalProps): React.JSX.Element;
declare namespace OptionalPortal {
    var displayName: string;
}

export { OptionalPortal, type OptionalPortalProps, Portal, type PortalProps };
