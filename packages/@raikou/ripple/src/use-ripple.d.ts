import React from "react";
export type RippleType = {
    key: React.Key;
    x: number;
    y: number;
    size: number;
};
export interface UseRippleProps {
}
export declare function useRipple(props?: UseRippleProps): {
    ripples: RippleType[];
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClear: (key: React.Key) => void;
};
export type UseRippleReturn = ReturnType<typeof useRipple>;
