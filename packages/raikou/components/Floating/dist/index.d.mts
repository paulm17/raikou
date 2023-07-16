import React$1 from 'react';

interface UseDelayedHoverInput {
    open(): void;
    close(): void;
    openDelay: number;
    closeDelay: number;
}
declare function useDelayedHover({ open, close, openDelay, closeDelay }: UseDelayedHoverInput): {
    openDropdown: () => void;
    closeDropdown: () => void;
};

type FloatingPlacement = 'end' | 'start';
type FloatingSide = 'top' | 'right' | 'bottom' | 'left';
type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
type ArrowPosition = 'center' | 'side';
interface FloatingAxesOffsets {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number | null;
}

interface Payload {
    opened: boolean | undefined;
    floating: {
        update(): void;
        refs: {
            floating: React.MutableRefObject<any>;
            reference: React.MutableRefObject<any>;
        };
    };
    positionDependencies: any[];
    position: FloatingPosition;
}
declare function useFloatingAutoUpdate({ opened, floating, position, positionDependencies, }: Payload): void;

declare function getFloatingPosition(dir: 'rtl' | 'ltr', position: FloatingPosition): FloatingPosition;

interface FloatingArrowProps extends React$1.ComponentPropsWithoutRef<"div"> {
    position: FloatingPosition;
    arrowSize: number;
    arrowOffset: number;
    arrowRadius: number;
    arrowPosition: ArrowPosition;
    arrowX: number;
    arrowY: number;
    visible: boolean | undefined;
}
declare const FloatingArrow: React$1.ForwardRefExoticComponent<FloatingArrowProps & React$1.RefAttributes<HTMLDivElement>>;

export { ArrowPosition, FloatingArrow, FloatingAxesOffsets, FloatingPlacement, FloatingPosition, FloatingSide, getFloatingPosition, useDelayedHover, useFloatingAutoUpdate };
