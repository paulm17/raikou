import type { RippleType } from "./use-ripple";
import type { FC } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { HTMLNextUIProps } from "./types";
export interface RippleProps extends HTMLNextUIProps<"span"> {
    ripples: RippleType[];
    color?: string;
    motionProps?: HTMLMotionProps<"span">;
    style?: React.CSSProperties;
    onClear: (key: React.Key) => void;
}
declare const Ripple: FC<RippleProps>;
export default Ripple;
