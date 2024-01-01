import * as _tiptap_core from '@tiptap/core';
import * as _tiptap_extension_link from '@tiptap/extension-link';
import * as _raikou_core from '@raikou/core';
import { BoxProps, CompoundStylesApiProps, ElementProps, Factory, StylesApiProps, RaikouRadius, RaikouShadow, RaikouSize, GetStylesApi } from '@raikou/core';
import React$1 from 'react';
import { Editor } from '@tiptap/react';

declare const Link: _tiptap_core.Mark<_tiptap_extension_link.LinkOptions, any>;

interface RichTextEditorLabels {
    /** RichTextEditor.Bold control aria-label */
    boldControlLabel: string;
    /** RichTextEditor.Hr control aria-label */
    hrControlLabel: string;
    /** RichTextEditor.Italic control aria-label */
    italicControlLabel: string;
    /** RichTextEditor.Underline control aria-label */
    underlineControlLabel: string;
    /** RichTextEditor.Strike control aria-label */
    strikeControlLabel: string;
    /** RichTextEditor.ClearFormatting control aria-label */
    clearFormattingControlLabel: string;
    /** RichTextEditor.Link control aria-label */
    linkControlLabel: string;
    /** RichTextEditor.Unlink control aria-label */
    unlinkControlLabel: string;
    /** RichTextEditor.BulletList control aria-label */
    bulletListControlLabel: string;
    /** RichTextEditor.OrderedList control aria-label */
    orderedListControlLabel: string;
    /** RichTextEditor.H1 control aria-label */
    h1ControlLabel: string;
    /** RichTextEditor.H2 control aria-label */
    h2ControlLabel: string;
    /** RichTextEditor.H3 control aria-label */
    h3ControlLabel: string;
    /** RichTextEditor.H4 control aria-label */
    h4ControlLabel: string;
    /** RichTextEditor.H5 control aria-label */
    h5ControlLabel: string;
    /** RichTextEditor.H6 control aria-label */
    h6ControlLabel: string;
    /** RichTextEditor.Blockquote control aria-label */
    blockquoteControlLabel: string;
    /** RichTextEditor.AlignLeft control aria-label */
    alignLeftControlLabel: string;
    /** RichTextEditor.AlignCenter control aria-label */
    alignCenterControlLabel: string;
    /** RichTextEditor.AlignRight control aria-label */
    alignRightControlLabel: string;
    /** RichTextEditor.AlignJustify control aria-label */
    alignJustifyControlLabel: string;
    /** RichTextEditor.Code control aria-label */
    codeControlLabel: string;
    /** RichTextEditor.CodeBlock control aria-label */
    codeBlockControlLabel: string;
    /** RichTextEditor.Subscript control aria-label */
    subscriptControlLabel: string;
    /** RichTextEditor.Superscript control aria-label */
    superscriptControlLabel: string;
    /** RichTextEditor.ColorPicker control aria-label */
    colorPickerControlLabel: string;
    /** RichTextEditor.UnsetColor control aria-label */
    unsetColorControlLabel: string;
    /** RichTextEditor.Highlight control aria-label */
    highlightControlLabel: string;
    /** A function go get RichTextEditor.Color control aria-label based on color that control applies */
    colorControlLabel: (color: string) => string;
    /** aria-label for link editor url input */
    linkEditorInputLabel: string;
    /** placeholder for link editor url input */
    linkEditorInputPlaceholder: string;
    /** Content of external button tooltip in link editor when the link was chosen to open in a new tab */
    linkEditorExternalLink: string;
    /** Content of external button tooltip in link editor when the link was chosen to open in the same tab */
    linkEditorInternalLink: string;
    /** Save button content in link editor */
    linkEditorSave: string;
    /** Cancel button title text in color picker control */
    colorPickerCancel: string;
    /** Clear button title text in color picker control */
    colorPickerClear: string;
    /** Color picker button title text in color picker control */
    colorPickerColorPicker: string;
    /** Palette button title text in color picker control */
    colorPickerPalette: string;
    /** Save button title text in color picker control */
    colorPickerSave: string;
    /** aria-label for color palette colors */
    colorPickerColorLabel: (color: string) => string;
}
declare const DEFAULT_LABELS: RichTextEditorLabels;

type RichTextEditorToolbarStylesNames = "toolbar";
interface RichTextEditorToolbarProps extends BoxProps, CompoundStylesApiProps<RichTextEditorToolbarFactory>, ElementProps<"div"> {
    /** Determines whether `position: sticky` styles should be added to the toolbar, `false` by default */
    sticky?: boolean;
    /** Sets top style to offset elements with fixed position, `0` by default */
    stickyOffset?: React$1.CSSProperties["top"];
}
type RichTextEditorToolbarFactory = Factory<{
    props: RichTextEditorToolbarProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorToolbarStylesNames;
    compound: true;
}>;
declare const RichTextEditorToolbar: _raikou_core.RaikouComponent<{
    props: RichTextEditorToolbarProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorToolbarStylesNames;
    compound: true;
}>;

type RichTextEditorControlsGroupStylesNames = "controlsGroup";
interface RichTextEditorControlsGroupProps extends BoxProps, CompoundStylesApiProps<RichTextEditorControlsGroupFactory>, ElementProps<"div"> {
}
type RichTextEditorControlsGroupFactory = Factory<{
    props: RichTextEditorControlsGroupProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorControlsGroupStylesNames;
    compound: true;
}>;
declare const RichTextEditorControlsGroup: _raikou_core.RaikouComponent<{
    props: RichTextEditorControlsGroupProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorControlsGroupStylesNames;
    compound: true;
}>;

type RichTextEditorContentStylesNames = "root";
interface RichTextEditorContentProps extends BoxProps, CompoundStylesApiProps<RichTextEditorContentFactory>, ElementProps<"div"> {
}
type RichTextEditorContentFactory = Factory<{
    props: RichTextEditorContentProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorContentStylesNames;
    compound: true;
}>;
declare const RichTextEditorContent: _raikou_core.RaikouComponent<{
    props: RichTextEditorContentProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorContentStylesNames;
    compound: true;
}>;

type RichTextEditorControlStylesNames = "control";
interface RichTextEditorControlProps extends BoxProps, CompoundStylesApiProps<RichTextEditorControlFactory>, ElementProps<"button"> {
    /** Determines whether the control should have active state, false by default */
    active?: boolean;
    /** Determines whether the control can be interacted with, set `false` to make the control to act as a label */
    interactive?: boolean;
}
type RichTextEditorControlFactory = Factory<{
    props: RichTextEditorControlProps;
    ref: HTMLButtonElement;
    stylesNames: RichTextEditorControlStylesNames;
    compound: true;
}>;
declare const RichTextEditorControl: _raikou_core.RaikouComponent<{
    props: RichTextEditorControlProps;
    ref: HTMLButtonElement;
    stylesNames: RichTextEditorControlStylesNames;
    compound: true;
}>;
interface RichTextEditorControlBaseProps extends RichTextEditorControlProps {
    icon?: React$1.FC<{
        style: React$1.CSSProperties;
    }>;
}

declare const BoldControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const ItalicControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const UnderlineControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const StrikeThroughControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const ClearFormattingControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const UnlinkControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const BulletListControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const OrderedListControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const H1Control: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const H2Control: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const H3Control: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const H4Control: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const H5Control: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const H6Control: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const BlockquoteControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlignLeftControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlignRightControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlignCenterControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlignJustifyControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SubscriptControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SuperscriptControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CodeControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CodeBlockControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const HighlightControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const HrControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const UnsetColorControl: React$1.ForwardRefExoticComponent<RichTextEditorControlBaseProps & React$1.RefAttributes<HTMLButtonElement>>;

interface RaikouTransitionStyles {
    common?: React$1.CSSProperties;
    in: React$1.CSSProperties;
    out: React$1.CSSProperties;
    transitionProperty: React$1.CSSProperties["transitionProperty"];
}
type RaikouTransitionName = "fade" | "skew-up" | "skew-down" | "rotate-right" | "rotate-left" | "slide-down" | "slide-up" | "slide-right" | "slide-left" | "scale-y" | "scale-x" | "scale" | "pop" | "pop-top-left" | "pop-top-right" | "pop-bottom-left" | "pop-bottom-right";
type RaikouTransition = RaikouTransitionName | RaikouTransitionStyles;

interface TransitionProps {
    /** If set element will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
    keepMounted?: boolean;
    /** Transition name or object */
    transition?: RaikouTransition;
    /** Transition duration in ms, `250` by default */
    duration?: number;
    /** Exit transition duration in ms, `250` by default */
    exitDuration?: number;
    /** Transition timing function, `theme.transitionTimingFunction` by default */
    timingFunction?: string;
    /** Determines whether component should be mounted to the DOM */
    mounted: boolean;
    /** Render function with transition styles argument */
    children: (styles: React$1.CSSProperties) => JSX.Element;
    /** Called when exit transition ends */
    onExited?: () => void;
    /** Called when exit transition starts */
    onExit?: () => void;
    /** Called when enter transition starts */
    onEnter?: () => void;
    /** Called when enter transition ends */
    onEntered?: () => void;
}
type TransitionOverride = Partial<Omit<TransitionProps, "mounted">>;

type FloatingPlacement = 'end' | 'start';
type FloatingSide = 'top' | 'right' | 'bottom' | 'left';
type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
type ArrowPosition = 'center' | 'side';
interface FloatingAxesOffsets {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number | null;
}

interface PortalProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React$1.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

type PopoverWidth = "target" | React.CSSProperties["width"];
interface PopoverMiddlewares {
    shift: boolean;
    flip: boolean;
    inline?: boolean;
    size?: boolean;
}

type PopoverStylesNames = "dropdown" | "arrow";
type PopoverCssVariables = {
    dropdown: "--popover-radius" | "--popover-shadow";
};
interface __PopoverProps {
    /** Dropdown position relative to the target element, `'bottom'` by default */
    position?: FloatingPosition;
    /** Offset of the dropdown element, `8` by default */
    offset?: number | FloatingAxesOffsets;
    /** Called when dropdown position changes */
    onPositionChange?: (position: FloatingPosition) => void;
    /** `useEffect` dependencies to force update dropdown position, `[]` by default */
    positionDependencies?: any[];
    /** Called when dropdown closes */
    onClose?: () => void;
    /** Called when dropdown opens */
    onOpen?: () => void;
    /** If set dropdown will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
    keepMounted?: boolean;
    /** Props passed down to the `Transition` component that used to animate dropdown presence, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
    transitionProps?: TransitionOverride;
    /** Dropdown width, or `'target'` to make dropdown width the same as target element, `'max-content'` by default */
    width?: PopoverWidth;
    /** Floating ui middlewares to configure position handling, `{ flip: true, shift: true, inline: false }` by default */
    middlewares?: PopoverMiddlewares;
    /** Determines whether component should have an arrow, `false` by default */
    withArrow?: boolean;
    /** Arrow size in px, `7` by default */
    arrowSize?: number;
    /** Arrow offset in px, `5` by default */
    arrowOffset?: number;
    /** Arrow `border-radius` in px, `0` by default */
    arrowRadius?: number;
    /** Arrow position */
    arrowPosition?: ArrowPosition;
    /** Determines whether dropdown should be rendered within the `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Props to pass down to the `Portal` when `withinPortal` is true */
    portalProps?: Omit<PortalProps, "children">;
    /** Dropdown `z-index`, `300` by default */
    zIndex?: React$1.CSSProperties["zIndex"];
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
    shadow?: RaikouShadow;
    /** If set, popover dropdown will not be rendered */
    disabled?: boolean;
    /** Determines whether focus should be automatically returned to control when dropdown closes, `false` by default */
    returnFocus?: boolean;
}
interface PopoverProps extends __PopoverProps, StylesApiProps<PopoverFactory> {
    __staticSelector?: string;
    /** `Popover.Target` and `Popover.Dropdown` components */
    children?: React$1.ReactNode;
    /** Initial opened state for uncontrolled component */
    defaultOpened?: boolean;
    /** Controlled dropdown opened state */
    opened?: boolean;
    /** Called with current state when dropdown opens or closes */
    onChange?: (opened: boolean) => void;
    /** Determines whether dropdown should be closed on outside clicks, `true` by default */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Determines whether focus should be trapped within dropdown, `false` by default */
    trapFocus?: boolean;
    /** Determines whether dropdown should be closed when `Escape` key is pressed, `true` by default */
    closeOnEscape?: boolean;
    /** id base to create accessibility connections */
    id?: string;
    /** Determines whether dropdown and target elements should have accessible roles, `true` by default */
    withRoles?: boolean;
}
type PopoverFactory = Factory<{
    props: PopoverProps;
    stylesNames: PopoverStylesNames;
    vars: PopoverCssVariables;
}>;

type RichTextEditorLinkControlStylesNames = "control" | "linkEditor" | "linkEditorDropdown" | "linkEditorSave" | "linkEditorInput" | "linkEditorExternalControl";
interface RichTextEditorLinkControlProps extends BoxProps, Omit<RichTextEditorControlBaseProps, "classNames" | "styles" | "vars">, CompoundStylesApiProps<RichTextEditorLinkControlFactory> {
    /** Props passed down to Popover component */
    popoverProps?: Partial<PopoverProps>;
    /** Determines whether external link control tooltip should be disabled, `false` by default */
    disableTooltips?: boolean;
    /** Initial state for determining whether the link should be an external, `false` by default */
    initialExternal?: boolean;
}
type RichTextEditorLinkControlFactory = Factory<{
    props: RichTextEditorLinkControlProps;
    ref: HTMLButtonElement;
    stylesNames: RichTextEditorLinkControlStylesNames;
    compound: true;
}>;
declare const RichTextEditorLinkControl: _raikou_core.RaikouComponent<{
    props: RichTextEditorLinkControlProps;
    ref: HTMLButtonElement;
    stylesNames: RichTextEditorLinkControlStylesNames;
    compound: true;
}>;

type ColorFormat = 'hex' | 'hexa' | 'rgba' | 'rgb' | 'hsl' | 'hsla';

type ColorPickerStylesNames = "wrapper" | "preview" | "body" | "sliders" | "slider" | "sliderOverlay" | "thumb" | "saturation" | "saturationOverlay" | "swatches" | "swatch";
type ColorPickerCssVariables = {
    wrapper: "--cp-preview-size" | "--cp-width" | "--cp-body-spacing" | "--cp-swatch-size" | "--cp-thumb-size" | "--cp-saturation-height";
};
interface __ColorPickerProps {
    /** Controlled component value */
    value?: string;
    /** Uncontrolled component default value */
    defaultValue?: string;
    /** Called when color changes */
    onChange?: (value: string) => void;
    /** Called when user stops dragging or changes value with arrow keys */
    onChangeEnd?: (value: string) => void;
    /** Color format, `'hex'` by default */
    format?: ColorFormat;
    /** Determines whether color picker should be displayed, `true` by default */
    withPicker?: boolean;
    /** Color swatches */
    swatches?: string[];
    /** Number of swatches displayed in one row, `7` by default */
    swatchesPerRow?: number;
    /** Controls size of hue, alpha and saturation sliders, `'md'` by default */
    size?: RaikouSize | (string & {});
}
interface ColorPickerProps extends BoxProps, __ColorPickerProps, StylesApiProps<ColorPickerFactory>, ElementProps<"div", "onChange" | "value" | "defaultValue"> {
    __staticSelector?: string;
    /** Determines whether component should take 100% width of its container, `false` by default */
    fullWidth?: boolean;
    /** Determines whether interactive elements should be focusable, `true` by default */
    focusable?: boolean;
    /** Saturation slider `aria-label` */
    saturationLabel?: string;
    /** Hue slider `aria-label` */
    hueLabel?: string;
    /** Alpha slider `aria-label` */
    alphaLabel?: string;
    /** Called when one of the color swatches is clicked */
    onColorSwatchClick?: (color: string) => void;
}
type ColorPickerFactory = Factory<{
    props: ColorPickerProps;
    ref: HTMLDivElement;
    stylesNames: ColorPickerStylesNames;
    vars: ColorPickerCssVariables;
}>;

interface RichTextEditorColorPickerControlProps extends BoxProps, ElementProps<"button"> {
    /** Props added to Popover component */
    popoverProps?: Partial<PopoverProps>;
    /** Props added to ColorPicker component */
    colorPickerProps?: Partial<ColorPickerProps>;
    /** List of colors that the user can choose from */
    colors: string[];
}
declare const RichTextEditorColorPickerControl: React$1.ForwardRefExoticComponent<RichTextEditorColorPickerControlProps & React$1.RefAttributes<HTMLButtonElement>>;

interface RichTextEditorColorControlProps extends BoxProps, ElementProps<"button"> {
    /** Color that will be set as text color, for example #ef457e */
    color: string;
}
declare const RichTextEditorColorControl: React$1.ForwardRefExoticComponent<RichTextEditorColorControlProps & React$1.RefAttributes<HTMLButtonElement>>;

type RichTextEditorStylesNames = "linkEditorSave" | "linkEditorDropdown" | "root" | "content" | "typographyStylesProvider" | "control" | "controlsGroup" | "toolbar" | "linkEditor" | "linkEditorInput" | "linkEditorExternalControl";
interface RichTextEditorProps extends BoxProps, StylesApiProps<RichTextEditorFactory>, ElementProps<"div"> {
    /** Tiptap editor instance */
    editor: Editor | null;
    /** Determines whether code highlight styles should be added, `true` by default */
    withCodeHighlightStyles?: boolean;
    /** Determines whether typography styles should be added, `true` by default */
    withTypographyStyles?: boolean;
    /** Labels that are used in controls */
    labels?: Partial<RichTextEditorLabels>;
    /** Child editor components */
    children: React$1.ReactNode;
}
type RichTextEditorFactory = Factory<{
    props: RichTextEditorProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorStylesNames;
    staticComponents: {
        Content: typeof RichTextEditorContent;
        Control: typeof RichTextEditorControl;
        Toolbar: typeof RichTextEditorToolbar;
        ControlsGroup: typeof RichTextEditorControlsGroup;
        Bold: typeof BoldControl;
        Italic: typeof ItalicControl;
        Strikethrough: typeof StrikeThroughControl;
        Underline: typeof UnderlineControl;
        ClearFormatting: typeof ClearFormattingControl;
        H1: typeof H1Control;
        H2: typeof H2Control;
        H3: typeof H3Control;
        H4: typeof H4Control;
        H5: typeof H5Control;
        H6: typeof H6Control;
        BulletList: typeof BulletListControl;
        OrderedList: typeof OrderedListControl;
        Link: typeof RichTextEditorLinkControl;
        Unlink: typeof UnlinkControl;
        Blockquote: typeof BlockquoteControl;
        AlignLeft: typeof AlignLeftControl;
        AlignRight: typeof AlignRightControl;
        AlignCenter: typeof AlignCenterControl;
        AlignJustify: typeof AlignJustifyControl;
        Superscript: typeof SuperscriptControl;
        Subscript: typeof SubscriptControl;
        Code: typeof CodeControl;
        CodeBlock: typeof CodeBlockControl;
        ColorPicker: typeof RichTextEditorColorPickerControl;
        Color: typeof RichTextEditorColorControl;
        Highlight: typeof HighlightControl;
        Hr: typeof HrControl;
        UnsetColor: typeof UnsetColorControl;
    };
}>;
declare const RichTextEditor: _raikou_core.RaikouComponent<{
    props: RichTextEditorProps;
    ref: HTMLDivElement;
    stylesNames: RichTextEditorStylesNames;
    staticComponents: {
        Content: typeof RichTextEditorContent;
        Control: typeof RichTextEditorControl;
        Toolbar: typeof RichTextEditorToolbar;
        ControlsGroup: typeof RichTextEditorControlsGroup;
        Bold: typeof BoldControl;
        Italic: typeof ItalicControl;
        Strikethrough: typeof StrikeThroughControl;
        Underline: typeof UnderlineControl;
        ClearFormatting: typeof ClearFormattingControl;
        H1: typeof H1Control;
        H2: typeof H2Control;
        H3: typeof H3Control;
        H4: typeof H4Control;
        H5: typeof H5Control;
        H6: typeof H6Control;
        BulletList: typeof BulletListControl;
        OrderedList: typeof OrderedListControl;
        Link: typeof RichTextEditorLinkControl;
        Unlink: typeof UnlinkControl;
        Blockquote: typeof BlockquoteControl;
        AlignLeft: typeof AlignLeftControl;
        AlignRight: typeof AlignRightControl;
        AlignCenter: typeof AlignCenterControl;
        AlignJustify: typeof AlignJustifyControl;
        Superscript: typeof SuperscriptControl;
        Subscript: typeof SubscriptControl;
        Code: typeof CodeControl;
        CodeBlock: typeof CodeBlockControl;
        ColorPicker: typeof RichTextEditorColorPickerControl;
        Color: typeof RichTextEditorColorControl;
        Highlight: typeof HighlightControl;
        Hr: typeof HrControl;
        UnsetColor: typeof UnsetColorControl;
    };
}>;

interface RichTextEditorContext {
    getStyles: GetStylesApi<RichTextEditorFactory>;
    editor: Editor | null;
    labels: RichTextEditorLabels;
    withCodeHighlightStyles: boolean | undefined;
    withTypographyStyles: boolean | undefined;
}
declare const useRichTextEditorContext: () => RichTextEditorContext;

export { AlignCenterControl, AlignJustifyControl, AlignLeftControl, AlignRightControl, BlockquoteControl, BoldControl, BulletListControl, ClearFormattingControl, CodeBlockControl, CodeControl, DEFAULT_LABELS, H1Control, H2Control, H3Control, H4Control, H5Control, H6Control, HighlightControl, HrControl, ItalicControl, Link, OrderedListControl, RichTextEditor, RichTextEditorColorControl, type RichTextEditorColorControlProps, RichTextEditorColorPickerControl, RichTextEditorContent, type RichTextEditorContentProps, RichTextEditorControl, type RichTextEditorControlProps, RichTextEditorControlsGroup, type RichTextEditorControlsGroupProps, type RichTextEditorFactory, type RichTextEditorLabels, RichTextEditorLinkControl, type RichTextEditorLinkControlProps, type RichTextEditorProps, type RichTextEditorStylesNames, type RichTextEditorToolbarProps, StrikeThroughControl, SubscriptControl, SuperscriptControl, UnderlineControl, UnlinkControl, UnsetColorControl, useRichTextEditorContext };
