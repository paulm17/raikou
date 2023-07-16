import React from 'react';

interface VisuallyHiddenProps extends React.ComponentPropsWithoutRef<"span"> {
}
declare function VisuallyHidden({ className, ...others }: VisuallyHiddenProps): JSX.Element;
declare namespace VisuallyHidden {
    var displayName: string;
}

export { VisuallyHidden, VisuallyHiddenProps };
