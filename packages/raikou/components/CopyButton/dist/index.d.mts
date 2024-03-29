import React from 'react';

interface CopyButtonProps {
    /** Children callback, provides current status and copy function as an argument */
    children: (payload: {
        copied: boolean;
        copy: () => void;
    }) => React.ReactNode;
    /** Value that will be copied to the clipboard when the button is clicked */
    value: string;
    /** Copied status timeout in ms, `1000` by default */
    timeout?: number;
}
declare function CopyButton(props: CopyButtonProps): React.JSX.Element;
declare namespace CopyButton {
    var displayName: string;
}

export { CopyButton, type CopyButtonProps };
