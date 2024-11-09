export type As<Props = any> = React.ElementType<Props>;
/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
    as?: As;
};
export type HTMLNextUIProps<T extends As = "div", OmitKeys extends keyof any = never> = Omit<PropsOf<T>, "ref" | "color" | "slot" | "size" | "defaultChecked" | "defaultValue" | OmitKeys> & {
    as?: As;
};
