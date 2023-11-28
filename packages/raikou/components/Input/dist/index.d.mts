import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, Factory, RaikouRadius, PolymorphicFactory, GetStylesApi } from '@raikou/core';
import * as React from 'react';
import React__default from 'react';

type InputLabelStylesNames = "label" | "required";
type InputLabelCssVariables = {
    label: "--input-asterisk-color" | "--input-label-size";
};
interface InputLabelProps extends BoxProps, StylesApiProps<InputLabelFactory>, ElementProps<"label"> {
    __staticSelector?: string;
    /** Determines whether required asterisk should be displayed  */
    required?: boolean;
    /** Controls label `font-size`, `'sm'` by default */
    size?: RaikouSize | (string & {});
    /** Root element of the label, `'label'` by default */
    labelElement?: "label" | "div";
}
type InputLabelFactory = Factory<{
    props: InputLabelProps;
    ref: HTMLLabelElement;
    stylesNames: InputLabelStylesNames;
    vars: InputLabelCssVariables;
}>;
declare const InputLabel: _raikou_core.RaikouComponent<{
    props: InputLabelProps;
    ref: HTMLLabelElement;
    stylesNames: InputLabelStylesNames;
    vars: InputLabelCssVariables;
}>;

type InputErrorStylesNames = "error";
type InputErrorCssVariables = {
    error: "--input-error-size";
};
interface InputErrorProps extends BoxProps, StylesApiProps<InputErrorFactory>, ElementProps<"div"> {
    __staticSelector?: string;
    __inheritStyles?: boolean;
    /** Controls error `font-size`, `'sm'` by default */
    size?: RaikouSize | (string & {});
}
type InputErrorFactory = Factory<{
    props: InputErrorProps;
    ref: HTMLParagraphElement;
    stylesNames: InputErrorStylesNames;
    vars: InputErrorCssVariables;
}>;
declare const InputError: _raikou_core.RaikouComponent<{
    props: InputErrorProps;
    ref: HTMLParagraphElement;
    stylesNames: InputErrorStylesNames;
    vars: InputErrorCssVariables;
}>;

type InputDescriptionStylesNames = "description";
type InputDescriptionCssVariables = {
    description: "--input-description-size";
};
interface InputDescriptionProps extends BoxProps, StylesApiProps<InputDescriptionFactory>, ElementProps<"div"> {
    __staticSelector?: string;
    __inheritStyles?: boolean;
    /** Controls description `font-size`, `'sm'` by default */
    size?: RaikouSize | (string & {});
}
type InputDescriptionFactory = Factory<{
    props: InputDescriptionProps;
    ref: HTMLParagraphElement;
    stylesNames: InputDescriptionStylesNames;
    vars: InputDescriptionCssVariables;
}>;
declare const InputDescription: _raikou_core.RaikouComponent<{
    props: InputDescriptionProps;
    ref: HTMLParagraphElement;
    stylesNames: InputDescriptionStylesNames;
    vars: InputDescriptionCssVariables;
}>;

type InputPlaceholderStylesNames = "placeholder";
type InputPlaceholderVariant = string;
interface InputPlaceholderProps extends BoxProps, StylesApiProps<InputPlaceholderFactory>, ElementProps<"span"> {
    __staticSelector?: string;
}
type InputPlaceholderFactory = Factory<{
    props: InputPlaceholderProps;
    ref: HTMLSpanElement;
    stylesNames: InputPlaceholderStylesNames;
    variant: InputPlaceholderVariant;
}>;
declare const InputPlaceholder: _raikou_core.RaikouComponent<{
    props: InputPlaceholderProps;
    ref: HTMLSpanElement;
    stylesNames: InputPlaceholderStylesNames;
    variant: InputPlaceholderVariant;
}>;

type InputWrapperCssVariables = InputLabelCssVariables & InputErrorCssVariables & InputDescriptionCssVariables;
type InputWrapperStylesNames = "root" | InputLabelStylesNames | InputDescriptionStylesNames | InputErrorStylesNames;
interface __InputWrapperProps {
    /** Contents of `Input.Label` component, if not set, label is not rendered. */
    label?: React__default.ReactNode;
    /** Contents of `Input.Description` component, if not set, description is not rendered. */
    description?: React__default.ReactNode;
    /** Contents of `Input.Error` component, if not set, error is not rendered. */
    error?: React__default.ReactNode;
    /** Adds required attribute to the input and a red asterisk on the right side of label, `false` by default */
    required?: boolean;
    /** Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input, `false` by default */
    withAsterisk?: boolean;
    /** Props passed down to the `Input.Label` component */
    labelProps?: Record<string, any>;
    /** Props passed down to the `Input.Description` component */
    descriptionProps?: Record<string, any>;
    /** Props passed down to the `InputError` component */
    errorProps?: Record<string, any>;
    /** Input container component, defaults to `React.Fragment` */
    inputContainer?: (children: React__default.ReactNode) => React__default.ReactNode;
    /** Controls order of the elements, `['label', 'description', 'input', 'error']` by default */
    inputWrapperOrder?: ("label" | "input" | "description" | "error")[];
}
interface InputWrapperProps extends __InputWrapperProps, BoxProps, StylesApiProps<InputWrapperFactory>, ElementProps<"div"> {
    __staticSelector?: string;
    /** Props passed to Styles API context, replaces Input.Wrapper props */
    __stylesApiProps?: Record<string, any>;
    /** Static id used as base to generate `aria-` attributes, by default generates random id */
    id?: string;
    /** Controls size of `Input.Label`, `Input.Description` and `Input.Error` components */
    size?: RaikouSize | (string & {});
    /** `Input.Label` root element, `'label'` by default */
    labelElement?: "label" | "div";
}
type InputWrapperFactory = Factory<{
    props: InputWrapperProps;
    ref: HTMLDivElement;
    stylesNames: InputWrapperStylesNames;
    vars: InputWrapperCssVariables;
}>;
declare const InputWrapper: _raikou_core.RaikouComponent<{
    props: InputWrapperProps;
    ref: HTMLDivElement;
    stylesNames: InputWrapperStylesNames;
    vars: InputWrapperCssVariables;
}>;

interface __BaseInputProps extends __InputWrapperProps, __InputProps {
}
type __InputStylesNames = InputStylesNames | InputWrapperStylesNames;
type InputStylesNames = "input" | "wrapper" | "section";
type InputVariant = "default" | "filled" | "unstyled";
type InputCssVariables = {
    wrapper: "--input-height" | "--input-fz" | "--input-radius" | "--input-left-section-width" | "--input-right-section-width" | "--input-left-section-pointer-events" | "--input-right-section-pointer-events" | "--input-padding-y" | "--input-margin-top" | "--input-margin-bottom";
};
interface InputStylesCtx {
    offsetTop: boolean | undefined;
    offsetBottom: boolean | undefined;
}
interface __InputProps {
    /** Content section rendered on the left side of the input */
    leftSection?: React__default.ReactNode;
    /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height */
    leftSectionWidth?: React__default.CSSProperties["width"];
    /** Props added to the `leftSection` element */
    leftSectionProps?: React__default.ComponentPropsWithoutRef<"div">;
    /** Sets `pointer-events` styles on the `leftSection` element, `'none'` by default */
    leftSectionPointerEvents?: React__default.CSSProperties["pointerEvents"];
    /** Content section rendered on the right side of the input */
    rightSection?: React__default.ReactNode;
    /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height */
    rightSectionWidth?: React__default.CSSProperties["width"];
    /** Props added to the `rightSection` element */
    rightSectionProps?: React__default.ComponentPropsWithoutRef<"div">;
    /** Sets `pointer-events` styles on the `rightSection` element, `'none'` by default */
    rightSectionPointerEvents?: React__default.CSSProperties["pointerEvents"];
    /** Props added to the root element of the `Input` component */
    wrapperProps?: Record<string, any>;
    /** Sets `required` attribute on the `input` element */
    required?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Sets `disabled` attribute on the `input` element */
    disabled?: boolean;
    /** Controls input `height` and horizontal `padding`, `'sm'` by default */
    size?: RaikouSize | (string & {});
    /** Determines whether the input should have `cursor: pointer` style, `false` by default */
    pointer?: boolean;
    /** Determines whether the input should have red border and text color when `error` prop is set, `true` by default */
    withErrorStyles?: boolean;
}
interface InputProps extends BoxProps, __InputProps, StylesApiProps<InputFactory> {
    __staticSelector?: string;
    /** Props passed to Styles API context, replaces `Input.Wrapper` props */
    __stylesApiProps?: Record<string, any>;
    /** Determines whether the input should have error styles and `aria-invalid` attribute */
    error?: React__default.ReactNode;
    /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
    multiline?: boolean;
    /** Input element id */
    id?: string;
    /** Determines whether `aria-` and other accessibility attributes should be added to the input, `true` by default */
    withAria?: boolean;
}
type InputFactory = PolymorphicFactory<{
    props: InputProps;
    defaultRef: HTMLInputElement;
    defaultComponent: "input";
    stylesNames: InputStylesNames;
    variant: InputVariant;
    vars: InputCssVariables;
    ctx: InputStylesCtx;
    staticComponents: {
        Label: typeof InputLabel;
        Error: typeof InputError;
        Description: typeof InputDescription;
        Placeholder: typeof InputPlaceholder;
        Wrapper: typeof InputWrapper;
    };
}>;
declare const Input: (<C = "input">(props: C extends React__default.ElementType<any> ? InputProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React__default.PropsWithoutRef<React__default.ComponentProps<C>>>, "component" | keyof InputProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React__default.ElementType<any> ? React__default.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : InputProps & {
    component: React__default.ElementType<any>;
    renderRoot?(props: any): any;
}) => React__default.ReactElement<any, string | React__default.JSXElementConstructor<any>>) & Omit<React__default.FunctionComponent<(InputProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof InputProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (InputProps & {
    component: React__default.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: InputProps;
    defaultRef: HTMLInputElement;
    defaultComponent: "input";
    stylesNames: InputStylesNames;
    variant: InputVariant;
    vars: InputCssVariables;
    ctx: InputStylesCtx;
    staticComponents: {
        Label: typeof InputLabel;
        Error: typeof InputError;
        Description: typeof InputDescription;
        Placeholder: typeof InputPlaceholder;
        Wrapper: typeof InputWrapper;
    };
}> & {
    classes: Record<string, string>;
} & {
    Label: typeof InputLabel;
    Error: typeof InputError;
    Description: typeof InputDescription;
    Placeholder: typeof InputPlaceholder;
    Wrapper: typeof InputWrapper;
};

interface BaseProps extends __BaseInputProps, BoxProps, StylesApiProps<{
    props: any;
    stylesNames: string;
}> {
    __staticSelector?: string;
    __stylesApiProps?: Record<string, any>;
    id?: string;
}
declare function useInputProps<T extends BaseProps, U extends Partial<T>>(component: string, defaultProps: U, _props: T): Omit<T & { [Key in Extract<keyof T, never>]-?: {}[Key] | NonNullable<T[Key]>; }, "label" | "style" | "error" | "required" | "className" | "id" | "__staticSelector" | "size" | "unstyled" | "variant" | "classNames" | "styles" | "vars" | "description" | "__stylesApiProps" | "withAsterisk" | "labelProps" | "descriptionProps" | "errorProps" | "inputContainer" | "inputWrapperOrder" | "wrapperProps"> & {
    classNames: Partial<Record<string, string>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, string>>) | undefined;
    styles: Partial<Record<string, React.CSSProperties>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, React.CSSProperties>>) | undefined;
    unstyled: boolean | undefined;
    wrapperProps: {
        label: React.ReactNode;
        description: React.ReactNode;
        error: React.ReactNode;
        required: boolean | undefined;
        classNames: Partial<Record<string, string>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, string>>) | undefined;
        className: string | undefined;
        __staticSelector: string | undefined;
        __stylesApiProps: Record<string, any>;
        errorProps: Record<string, any> | undefined;
        labelProps: Record<string, any> | undefined;
        descriptionProps: Record<string, any> | undefined;
        unstyled: boolean | undefined;
        styles: Partial<Record<string, React.CSSProperties>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, React.CSSProperties>>) | undefined;
        size: _raikou_core.RaikouSize | (string & {}) | undefined;
        style: _raikou_core.RaikouStyleProp;
        inputContainer: ((children: React.ReactNode) => React.ReactNode) | undefined;
        inputWrapperOrder: ("input" | "label" | "error" | "description")[] | undefined;
        withAsterisk: boolean | undefined;
        variant: string | undefined;
        id: string | undefined;
    } & BoxProps;
    inputProps: {
        required: boolean | undefined;
        classNames: Partial<Record<string, string>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, string>>) | undefined;
        styles: Partial<Record<string, React.CSSProperties>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, React.CSSProperties>>) | undefined;
        unstyled: boolean | undefined;
        size: _raikou_core.RaikouSize | (string & {}) | undefined;
        __staticSelector: string | undefined;
        __stylesApiProps: Record<string, any>;
        error: React.ReactNode;
        variant: string | undefined;
    };
};

interface InputWrapperContextValue {
    offsetTop: boolean;
    offsetBottom: boolean;
    describedBy: string | undefined;
    inputId: string | undefined;
    labelId: string | undefined;
    getStyles: GetStylesApi<InputWrapperFactory> | null;
}
declare const useInputWrapperContext: () => InputWrapperContextValue | null;

export { Input, InputCssVariables, InputDescription, InputDescriptionCssVariables, InputDescriptionFactory, InputDescriptionProps, InputDescriptionStylesNames, InputError, InputErrorCssVariables, InputErrorFactory, InputErrorProps, InputErrorStylesNames, InputFactory, InputLabel, InputLabelCssVariables, InputLabelFactory, InputLabelProps, InputLabelStylesNames, InputPlaceholder, InputPlaceholderFactory, InputPlaceholderProps, InputPlaceholderStylesNames, InputProps, InputStylesNames, InputVariant, InputWrapper, InputWrapperFactory, InputWrapperProps, InputWrapperStylesNames, __BaseInputProps, __InputProps, __InputStylesNames, __InputWrapperProps, useInputProps, useInputWrapperContext };
