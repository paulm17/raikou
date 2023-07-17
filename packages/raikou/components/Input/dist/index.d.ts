import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, Factory, RaikouRadius, PolymorphicFactory } from '@raikou/core';
import * as react from 'react';
import react__default from 'react';

type InputLabelStylesNames = "label" | "required";
type InputLabelVariant = string;
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
    variant: InputLabelVariant;
}>;
declare const InputLabel: _raikou_core.RaikouComponent<{
    props: InputLabelProps;
    ref: HTMLLabelElement;
    stylesNames: InputLabelStylesNames;
    vars: InputLabelCssVariables;
    variant: InputLabelVariant;
}>;

type InputErrorStylesNames = "error";
type InputErrorVariant = string;
type InputErrorCssVariables = {
    error: "--input-error-size";
};
interface InputErrorProps extends BoxProps, StylesApiProps<InputErrorFactory>, ElementProps<"div"> {
    __staticSelector?: string;
    /** Controls error `font-size`, `'sm'` by default */
    size?: RaikouSize | (string & {});
}
type InputErrorFactory = Factory<{
    props: InputErrorProps;
    ref: HTMLParagraphElement;
    stylesNames: InputErrorStylesNames;
    vars: InputErrorCssVariables;
    variant: InputErrorVariant;
}>;
declare const InputError: _raikou_core.RaikouComponent<{
    props: InputErrorProps;
    ref: HTMLParagraphElement;
    stylesNames: InputErrorStylesNames;
    vars: InputErrorCssVariables;
    variant: InputErrorVariant;
}>;

type InputDescriptionStylesNames = "description";
type InputDescriptionVariant = string;
type InputDescriptionCssVariables = {
    description: "--input-description-size";
};
interface InputDescriptionProps extends BoxProps, StylesApiProps<InputDescriptionFactory>, ElementProps<"div"> {
    __staticSelector?: string;
    /** Controls description `font-size`, `'sm'` by default */
    size?: RaikouSize | (string & {});
}
type InputDescriptionFactory = Factory<{
    props: InputDescriptionProps;
    ref: HTMLParagraphElement;
    stylesNames: InputDescriptionStylesNames;
    vars: InputDescriptionCssVariables;
    variant: InputDescriptionVariant;
}>;
declare const InputDescription: _raikou_core.RaikouComponent<{
    props: InputDescriptionProps;
    ref: HTMLParagraphElement;
    stylesNames: InputDescriptionStylesNames;
    vars: InputDescriptionCssVariables;
    variant: InputDescriptionVariant;
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
    label?: react__default.ReactNode;
    /** Contents of `Input.Description` component, if not set, description is not rendered. */
    description?: react__default.ReactNode;
    /** Contents of `Input.Error` component, if not set, error is not rendered. */
    error?: react__default.ReactNode;
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
    inputContainer?(children: react__default.ReactNode): react__default.ReactNode;
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
    leftSection?: react__default.ReactNode;
    /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height */
    leftSectionWidth?: react__default.CSSProperties["width"];
    /** Props added to the `leftSection` element */
    leftSectionProps?: react__default.ComponentPropsWithoutRef<"div">;
    /** Sets `pointer-events` styles on the `leftSection` element, `'none'` by default */
    leftSectionPointerEvents?: react__default.CSSProperties["pointerEvents"];
    /** Content section rendered on the right side of the input */
    rightSection?: react__default.ReactNode;
    /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height */
    rightSectionWidth?: react__default.CSSProperties["width"];
    /** Props added to the `rightSection` element */
    rightSectionProps?: react__default.ComponentPropsWithoutRef<"div">;
    /** Sets `pointer-events` styles on the `rightSection` element, `'none'` by default */
    rightSectionPointerEvents?: react__default.CSSProperties["pointerEvents"];
    /** Props added to the root element of the `Input` component */
    wrapperProps?: react__default.ComponentPropsWithoutRef<"div">;
    /** Sets `required` attribute on the `input` element */
    required?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius | (string & {}) | number;
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
    error?: react__default.ReactNode;
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
declare const Input: (<C = "input">(props: C extends react__default.ElementType<any> ? InputProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, react__default.PropsWithoutRef<react__default.ComponentProps<C>>>, "component" | keyof InputProps> & {
    ref?: (C extends infer T ? T extends C ? T extends react__default.ElementType<any> ? react__default.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : InputProps & {
    component: react__default.ElementType<any>;
}) => react__default.ReactElement<any, string | react__default.JSXElementConstructor<any>>) & Omit<react__default.FunctionComponent<(InputProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof InputProps> & {
    ref?: any;
}) | (InputProps & {
    component: react__default.ElementType<any>;
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
    classes: Record<InputStylesNames, string>;
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
declare function useInputProps<T extends BaseProps, U extends Partial<T>>(component: string, defaultProps: U, _props: T): Omit<T & { [Key in Extract<keyof T, never>]-?: {}[Key] | NonNullable<T[Key]>; }, "label" | "style" | "required" | "className" | "id" | "__staticSelector" | "size" | "unstyled" | "variant" | "classNames" | "styles" | "vars" | "description" | "error" | "__stylesApiProps" | "withAsterisk" | "labelProps" | "descriptionProps" | "errorProps" | "inputContainer" | "inputWrapperOrder" | "wrapperProps"> & {
    classNames: Partial<Record<string, string>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, string>>) | undefined;
    styles: Partial<Record<string, react.CSSProperties>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, react.CSSProperties>>) | undefined;
    unstyled: boolean | undefined;
    wrapperProps: {
        children?: react.ReactNode;
        slot?: string | undefined;
        style: _raikou_core.RaikouStyleProp;
        title?: string | undefined;
        key?: react.Key | null | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        autoFocus?: boolean | undefined;
        className: string | undefined;
        contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: (boolean | "true" | "false") | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        placeholder?: string | undefined;
        spellCheck?: (boolean | "true" | "false") | undefined;
        tabIndex?: number | undefined;
        translate?: "yes" | "no" | undefined;
        radioGroup?: string | undefined;
        role?: react.AriaRole | undefined;
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
        inputMode?: "text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
        is?: string | undefined;
        'aria-activedescendant'?: string | undefined;
        'aria-atomic'?: (boolean | "true" | "false") | undefined;
        'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
        'aria-busy'?: (boolean | "true" | "false") | undefined;
        'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
        'aria-colcount'?: number | undefined;
        'aria-colindex'?: number | undefined;
        'aria-colspan'?: number | undefined;
        'aria-controls'?: string | undefined;
        'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
        'aria-describedby'?: string | undefined;
        'aria-details'?: string | undefined;
        'aria-disabled'?: (boolean | "true" | "false") | undefined;
        'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
        'aria-errormessage'?: string | undefined;
        'aria-expanded'?: (boolean | "true" | "false") | undefined;
        'aria-flowto'?: string | undefined;
        'aria-grabbed'?: (boolean | "true" | "false") | undefined;
        'aria-haspopup'?: boolean | "dialog" | "menu" | "grid" | "true" | "false" | "listbox" | "tree" | undefined;
        'aria-hidden'?: (boolean | "true" | "false") | undefined;
        'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
        'aria-keyshortcuts'?: string | undefined;
        'aria-label'?: string | undefined;
        'aria-labelledby'?: string | undefined;
        'aria-level'?: number | undefined;
        'aria-live'?: "off" | "assertive" | "polite" | undefined;
        'aria-modal'?: (boolean | "true" | "false") | undefined;
        'aria-multiline'?: (boolean | "true" | "false") | undefined;
        'aria-multiselectable'?: (boolean | "true" | "false") | undefined;
        'aria-orientation'?: "horizontal" | "vertical" | undefined;
        'aria-owns'?: string | undefined;
        'aria-placeholder'?: string | undefined;
        'aria-posinset'?: number | undefined;
        'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
        'aria-readonly'?: (boolean | "true" | "false") | undefined;
        'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        'aria-required'?: (boolean | "true" | "false") | undefined;
        'aria-roledescription'?: string | undefined;
        'aria-rowcount'?: number | undefined;
        'aria-rowindex'?: number | undefined;
        'aria-rowspan'?: number | undefined;
        'aria-selected'?: (boolean | "true" | "false") | undefined;
        'aria-setsize'?: number | undefined;
        'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
        'aria-valuemax'?: number | undefined;
        'aria-valuemin'?: number | undefined;
        'aria-valuenow'?: number | undefined;
        'aria-valuetext'?: string | undefined;
        dangerouslySetInnerHTML?: {
            __html: string | TrustedHTML;
        } | undefined;
        onCopy?: react.ClipboardEventHandler<HTMLDivElement> | undefined;
        onCopyCapture?: react.ClipboardEventHandler<HTMLDivElement> | undefined;
        onCut?: react.ClipboardEventHandler<HTMLDivElement> | undefined;
        onCutCapture?: react.ClipboardEventHandler<HTMLDivElement> | undefined;
        onPaste?: react.ClipboardEventHandler<HTMLDivElement> | undefined;
        onPasteCapture?: react.ClipboardEventHandler<HTMLDivElement> | undefined;
        onCompositionEnd?: react.CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionEndCapture?: react.CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionStart?: react.CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionStartCapture?: react.CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionUpdate?: react.CompositionEventHandler<HTMLDivElement> | undefined;
        onCompositionUpdateCapture?: react.CompositionEventHandler<HTMLDivElement> | undefined;
        onFocus?: react.FocusEventHandler<HTMLDivElement> | undefined;
        onFocusCapture?: react.FocusEventHandler<HTMLDivElement> | undefined;
        onBlur?: react.FocusEventHandler<HTMLDivElement> | undefined;
        onBlurCapture?: react.FocusEventHandler<HTMLDivElement> | undefined;
        onChange?: react.FormEventHandler<HTMLDivElement> | undefined;
        onChangeCapture?: react.FormEventHandler<HTMLDivElement> | undefined;
        onBeforeInput?: react.FormEventHandler<HTMLDivElement> | undefined;
        onBeforeInputCapture?: react.FormEventHandler<HTMLDivElement> | undefined;
        onInput?: react.FormEventHandler<HTMLDivElement> | undefined;
        onInputCapture?: react.FormEventHandler<HTMLDivElement> | undefined;
        onReset?: react.FormEventHandler<HTMLDivElement> | undefined;
        onResetCapture?: react.FormEventHandler<HTMLDivElement> | undefined;
        onSubmit?: react.FormEventHandler<HTMLDivElement> | undefined;
        onSubmitCapture?: react.FormEventHandler<HTMLDivElement> | undefined;
        onInvalid?: react.FormEventHandler<HTMLDivElement> | undefined;
        onInvalidCapture?: react.FormEventHandler<HTMLDivElement> | undefined;
        onLoad?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onLoadCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onError?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onErrorCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onKeyDown?: react.KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyDownCapture?: react.KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyPress?: react.KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyPressCapture?: react.KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyUp?: react.KeyboardEventHandler<HTMLDivElement> | undefined;
        onKeyUpCapture?: react.KeyboardEventHandler<HTMLDivElement> | undefined;
        onAbort?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onAbortCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlay?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayThrough?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onCanPlayThroughCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onDurationChange?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onDurationChangeCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onEmptied?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onEmptiedCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onEncrypted?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onEncryptedCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onEnded?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onEndedCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedData?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedDataCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedMetadata?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onLoadedMetadataCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onLoadStart?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onLoadStartCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onPause?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onPauseCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onPlay?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onPlayCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onPlaying?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onPlayingCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onProgress?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onProgressCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onRateChange?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onRateChangeCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onResize?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onResizeCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onSeeked?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onSeekedCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onSeeking?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onSeekingCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onStalled?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onStalledCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onSuspend?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onSuspendCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onTimeUpdate?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onTimeUpdateCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onVolumeChange?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onVolumeChangeCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onWaiting?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onWaitingCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onAuxClick?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onAuxClickCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onClick?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onClickCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onContextMenu?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onContextMenuCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onDoubleClick?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onDoubleClickCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onDrag?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragCapture?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragEnd?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragEndCapture?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragEnter?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragEnterCapture?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragExit?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragExitCapture?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragLeave?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragLeaveCapture?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragOver?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragOverCapture?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragStart?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDragStartCapture?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDrop?: react.DragEventHandler<HTMLDivElement> | undefined;
        onDropCapture?: react.DragEventHandler<HTMLDivElement> | undefined;
        onMouseDown?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseDownCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseEnter?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseLeave?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseMove?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseMoveCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOut?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOutCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOver?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseOverCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUp?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUpCapture?: react.MouseEventHandler<HTMLDivElement> | undefined;
        onSelect?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onSelectCapture?: react.ReactEventHandler<HTMLDivElement> | undefined;
        onTouchCancel?: react.TouchEventHandler<HTMLDivElement> | undefined;
        onTouchCancelCapture?: react.TouchEventHandler<HTMLDivElement> | undefined;
        onTouchEnd?: react.TouchEventHandler<HTMLDivElement> | undefined;
        onTouchEndCapture?: react.TouchEventHandler<HTMLDivElement> | undefined;
        onTouchMove?: react.TouchEventHandler<HTMLDivElement> | undefined;
        onTouchMoveCapture?: react.TouchEventHandler<HTMLDivElement> | undefined;
        onTouchStart?: react.TouchEventHandler<HTMLDivElement> | undefined;
        onTouchStartCapture?: react.TouchEventHandler<HTMLDivElement> | undefined;
        onPointerDown?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerDownCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerMove?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerMoveCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerUp?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerUpCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerCancel?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerCancelCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerEnter?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerEnterCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerLeave?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerLeaveCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOver?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOverCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOut?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onPointerOutCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onGotPointerCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onGotPointerCaptureCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onLostPointerCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onLostPointerCaptureCapture?: react.PointerEventHandler<HTMLDivElement> | undefined;
        onScroll?: react.UIEventHandler<HTMLDivElement> | undefined;
        onScrollCapture?: react.UIEventHandler<HTMLDivElement> | undefined;
        onWheel?: react.WheelEventHandler<HTMLDivElement> | undefined;
        onWheelCapture?: react.WheelEventHandler<HTMLDivElement> | undefined;
        onAnimationStart?: react.AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationStartCapture?: react.AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationEnd?: react.AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationEndCapture?: react.AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationIteration?: react.AnimationEventHandler<HTMLDivElement> | undefined;
        onAnimationIterationCapture?: react.AnimationEventHandler<HTMLDivElement> | undefined;
        onTransitionEnd?: react.TransitionEventHandler<HTMLDivElement> | undefined;
        onTransitionEndCapture?: react.TransitionEventHandler<HTMLDivElement> | undefined;
        label: react.ReactNode;
        description: react.ReactNode;
        error: react.ReactNode;
        required: boolean | undefined;
        classNames: Partial<Record<string, string>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, string>>) | undefined;
        __staticSelector: string | undefined;
        __stylesApiProps: Record<string, any>;
        errorProps: Record<string, any> | undefined;
        labelProps: Record<string, any> | undefined;
        descriptionProps: Record<string, any> | undefined;
        unstyled: boolean | undefined;
        styles: Partial<Record<string, react.CSSProperties>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, react.CSSProperties>>) | undefined;
        size: _raikou_core.RaikouSize | (string & {}) | undefined;
        inputContainer: ((children: react.ReactNode) => react.ReactNode) | undefined;
        inputWrapperOrder: ("input" | "label" | "description" | "error")[] | undefined;
        withAsterisk: boolean | undefined;
        variant: string | undefined;
    } & BoxProps;
    inputProps: {
        required: boolean | undefined;
        classNames: Partial<Record<string, string>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, string>>) | undefined;
        styles: Partial<Record<string, react.CSSProperties>> | ((theme: _raikou_core.RaikouTheme, props: any, ctx: unknown) => Partial<Record<string, react.CSSProperties>>) | undefined;
        unstyled: boolean | undefined;
        size: _raikou_core.RaikouSize | (string & {}) | undefined;
        __staticSelector: string | undefined;
        __stylesApiProps: Record<string, any>;
        error: react.ReactNode;
        variant: string | undefined;
    };
};

declare const useInputWrapperContext: () => any;

export { Input, InputCssVariables, InputDescription, InputDescriptionCssVariables, InputDescriptionFactory, InputDescriptionProps, InputDescriptionStylesNames, InputDescriptionVariant, InputError, InputErrorCssVariables, InputErrorFactory, InputErrorProps, InputErrorStylesNames, InputErrorVariant, InputFactory, InputLabel, InputLabelCssVariables, InputLabelFactory, InputLabelProps, InputLabelStylesNames, InputLabelVariant, InputPlaceholder, InputPlaceholderFactory, InputPlaceholderProps, InputPlaceholderStylesNames, InputPlaceholderVariant, InputProps, InputStylesNames, InputVariant, InputWrapper, InputWrapperFactory, InputWrapperProps, InputWrapperStylesNames, __BaseInputProps, __InputProps, __InputStylesNames, __InputWrapperProps, useInputProps, useInputWrapperContext };
