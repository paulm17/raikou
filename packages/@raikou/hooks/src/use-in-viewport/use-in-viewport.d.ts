export declare function useInViewport<T extends HTMLElement>(): {
    ref: (node: T | null) => void;
    inViewport: boolean;
};
