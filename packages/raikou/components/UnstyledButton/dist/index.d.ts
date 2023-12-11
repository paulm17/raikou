import * as _raikou_core from '@raikou/core';
import { BoxComponentProps, StylesApiProps, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type UnstyledButtonStylesNames = "root";
interface UnstyledButtonProps extends Omit<BoxComponentProps, "vars" | "variant">, StylesApiProps<UnstyledButtonFactory> {
    __staticSelector?: string;
}
type UnstyledButtonFactory = PolymorphicFactory<{
    props: UnstyledButtonProps;
    stylesNames: UnstyledButtonStylesNames;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
}>;
declare const UnstyledButton: (<C = "button">(props: C extends React.ElementType<any> ? UnstyledButtonProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof UnstyledButtonProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : UnstyledButtonProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(UnstyledButtonProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof UnstyledButtonProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (UnstyledButtonProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: UnstyledButtonProps;
    stylesNames: UnstyledButtonStylesNames;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { UnstyledButton, type UnstyledButtonFactory, type UnstyledButtonProps, type UnstyledButtonStylesNames };
