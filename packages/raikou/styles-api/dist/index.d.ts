import { EmptyObject } from 'type-fest';
import { FactoryPayload, TransformVars, StylesApiProps, Factory, RaikouRadius, RaikouShadow } from '@raikou/core';
import { AccordionFactory, AffixFactory, AutocompleteFactory, AvatarFactory, AvatarGroupFactory, BurgerFactory, CheckboxFactory, CheckboxGroupFactory, ChipFactory, ColorInputFactory, ColorPickerFactory, ComboboxFactory, ComboboxLikeStylesNames, DialogFactory, DrawerFactory, FileInputFactory, InputFactory, InputWrapperFactory, InputBaseFactory, JsonInputFactory, LoadingOverlayFactory, MenuFactory, ModalFactory, MultiSelectFactory, NativeSelectFactory, NavLinkFactory, NumberInputFactory, OverlayFactory, PaginationFactory, PasswordInputFactory, PillFactory, PillGroupFactory, PillsInputFactory, PillsInputFieldFactory, PinInputFactory, PopoverFactory as PopoverFactory$1, ProgressFactory, RadioFactory, RadioGroupFactory, RatingFactory, RingProgressFactory, ScrollAreaFactory, SegmentedControlFactory, SelectFactory, SliderFactory, SpoilerFactory, StepperFactory, SwitchFactory, SwitchGroupFactory, TabsFactory, TagsInputFactory, TextareaFactory, TextInputFactory, TooltipFactory, TypographyStylesProviderFactory } from '@raikou/client';
import { ActionIconFactory, ActionIconGroupFactory, AlertFactory, AnchorFactory, AppShellFactory, AspectRatioFactory, BackgroundImageFactory, BadgeFactory, BlockquoteFactory, BreadcrumbsFactory, ButtonFactory, ButtonGroupFactory, CardFactory, CenterFactory, CloseButtonFactory, CodeFactory, ColorSwatchFactory, ContainerFactory, DividerFactory, FieldsetFactory, FlexFactory, GridFactory, GroupFactory, HighlightFactory, ImageFactory, IndicatorFactory, KbdFactory, ListFactory, LoaderFactory, MarkFactory, NotificationFactory, PaperFactory, SimpleGridFactory, SkeletonFactory, StackFactory, TableFactory, TextFactory, ThemeIconFactory, TimelineFactory, TitleFactory, UnstyledButtonFactory } from '@raikou/server';
import { CarouselFactory } from '@raikou/carousel';
import { CodeHighlightTabsFactory, InlineCodeHighlightFactory, CodeHighlightFactory } from '@raikou/code-highlight';
import { MonthFactory, CalendarHeaderFactory, DecadeLevelGroupFactory, YearLevelGroupFactory, MonthLevelGroupFactory, CalendarFactory, YearPickerFactory, MonthPickerFactory, DatePickerFactory, YearPickerInputFactory, MonthPickerInputFactory, DatePickerInputFactory, DateInputFactory, DateTimePickerFactory, TimeInputFactory } from '@raikou/dates';
import { DropzoneFactory, DropzoneFullScreenFactory } from '@raikou/dropzone';
import React$1 from 'react';
import { NotificationsFactory } from '@raikou/notifications';
import { RichTextEditorFactory } from '@raikou/tiptap';
import { SpotlightFactory } from '@raikou/spotlight';

interface Modifier<StylesNames extends string> {
    modifier: string;
    selector: StylesNames | StylesNames[];
    condition?: string;
    value?: string;
}
interface Selectors<Factory extends FactoryPayload> {
    selectors: Factory["stylesNames"] extends string ? Record<Factory["stylesNames"], string> : never;
}
interface Vars<Factory extends FactoryPayload> {
    vars: TransformVars<Factory>;
}
interface Modifiers<Factory extends FactoryPayload> {
    modifiers?: Factory["stylesNames"] extends string ? Modifier<Factory["stylesNames"]>[] : never;
}
type StylesApiData<Factory extends FactoryPayload> = (Factory["stylesNames"] extends string ? Selectors<Factory> : EmptyObject) & Vars<Factory["vars"]> & (Factory["stylesNames"] extends string ? Modifiers<Factory> : EmptyObject);

declare const AccordionStylesApi: StylesApiData<AccordionFactory>;

declare const ActionIconStylesApi: StylesApiData<ActionIconFactory>;
declare const ActionIconGroupStylesApi: StylesApiData<ActionIconGroupFactory>;

declare const AffixStylesApi: StylesApiData<AffixFactory>;

declare const AlertStylesApi: StylesApiData<AlertFactory>;

declare const AnchorStylesApi: StylesApiData<AnchorFactory>;

declare const AppShellStylesApi: StylesApiData<AppShellFactory>;

declare const AspectRatioStylesApi: StylesApiData<AspectRatioFactory>;

declare const AutocompleteStylesApi: StylesApiData<AutocompleteFactory>;

declare const AvatarStylesApi: StylesApiData<AvatarFactory>;
declare const AvatarGroupStylesApi: StylesApiData<AvatarGroupFactory>;

declare const BackgroundImageStylesApi: StylesApiData<BackgroundImageFactory>;

declare const BadgeStylesApi: StylesApiData<BadgeFactory>;

declare const BlockquoteStylesApi: StylesApiData<BlockquoteFactory>;

declare const BreadcrumbsStylesApi: StylesApiData<BreadcrumbsFactory>;

declare const BurgerStylesApi: StylesApiData<BurgerFactory>;

declare const ButtonStylesApi: StylesApiData<ButtonFactory>;
declare const ButtonGroupStylesApi: StylesApiData<ButtonGroupFactory>;

declare const CardStylesApi: StylesApiData<CardFactory>;

declare const CarouselStylesApi: StylesApiData<CarouselFactory>;

declare const CenterStylesApi: StylesApiData<CenterFactory>;

declare const CheckboxStylesApi: StylesApiData<CheckboxFactory>;
declare const CheckboxGroupStylesApi: StylesApiData<CheckboxGroupFactory>;

declare const ChipStylesApi: StylesApiData<ChipFactory>;

declare const CloseButtonStylesApi: StylesApiData<CloseButtonFactory>;

declare const CodeStylesApi: StylesApiData<CodeFactory>;

declare const CodeHighlightTabsStylesApi: StylesApiData<CodeHighlightTabsFactory>;
declare const InlineCodeHighlightStylesApi: StylesApiData<InlineCodeHighlightFactory>;
declare const CodeHighlightStylesApi: StylesApiData<CodeHighlightFactory>;

declare const ColorInputStylesApi: StylesApiData<ColorInputFactory>;

declare const ColorPickerStylesApi: StylesApiData<ColorPickerFactory>;

declare const ColorSwatchStylesApi: StylesApiData<ColorSwatchFactory>;

declare const ComboboxStylesApi: StylesApiData<ComboboxFactory>;
declare const ComboboxLikeSelectors: Record<ComboboxLikeStylesNames, string>;

declare const ContainerStylesApi: StylesApiData<ContainerFactory>;

declare const MonthStylesApi: StylesApiData<MonthFactory>;
declare const CalendarHeaderStylesApi: StylesApiData<CalendarHeaderFactory>;
declare const DecadeLevelGroupStylesApi: StylesApiData<DecadeLevelGroupFactory>;
declare const YearLevelGroupStylesApi: StylesApiData<YearLevelGroupFactory>;
declare const MonthLevelGroupStylesApi: StylesApiData<MonthLevelGroupFactory>;
declare const CalendarStylesApi: StylesApiData<CalendarFactory>;
declare const YearPickerStylesApi: StylesApiData<YearPickerFactory>;
declare const MonthPickerStylesApi: StylesApiData<MonthPickerFactory>;
declare const DatePickerStylesApi: StylesApiData<DatePickerFactory>;
declare const YearPickerInputStylesApi: StylesApiData<YearPickerInputFactory>;
declare const MonthPickerInputStylesApi: StylesApiData<MonthPickerInputFactory>;
declare const DatePickerInputStylesApi: StylesApiData<DatePickerInputFactory>;
declare const DateInputStylesApi: StylesApiData<DateInputFactory>;
declare const DateTimePickerStylesApi: StylesApiData<DateTimePickerFactory>;
declare const TimeInputStylesApi: StylesApiData<TimeInputFactory>;

declare const DialogStylesApi: StylesApiData<DialogFactory>;

declare const DividerStylesApi: StylesApiData<DividerFactory>;

declare const DrawerStylesApi: StylesApiData<DrawerFactory>;

declare const DropzoneStylesApi: StylesApiData<DropzoneFactory>;
declare const DropzoneFullScreenStylesApi: StylesApiData<DropzoneFullScreenFactory>;

declare const FieldsetStylesApi: StylesApiData<FieldsetFactory>;

declare const FileInputStylesApi: StylesApiData<FileInputFactory>;

declare const FlexStylesApi: StylesApiData<FlexFactory>;

declare const GridStylesApi: StylesApiData<GridFactory>;

declare const GroupStylesApi: StylesApiData<GroupFactory>;

declare const HighlightStylesApi: StylesApiData<HighlightFactory>;

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
    children(styles: React$1.CSSProperties): JSX.Element;
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

type PopoverWidth = 'target' | React.CSSProperties['width'];
interface PopoverMiddlewares {
    shift: boolean;
    flip: boolean;
    inline?: boolean;
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
    onPositionChange?(position: FloatingPosition): void;
    /** `useEffect` dependencies to force update dropdown position, `[]` by default */
    positionDependencies?: any[];
    /** Called when dropdown closes */
    onClose?(): void;
    /** Called when dropdown opens */
    onOpen?(): void;
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
    onChange?(opened: boolean): void;
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

declare const HoverCardStylesApi: StylesApiData<{
    props: PopoverProps;
    stylesNames: PopoverStylesNames;
    vars: {
        dropdown: "--popover-radius" | "--popover-shadow";
    };
}>;

declare const ImageStylesApi: StylesApiData<ImageFactory>;

declare const IndicatorStylesApi: StylesApiData<IndicatorFactory>;

declare const InputStylesApi: StylesApiData<InputFactory>;
declare const InputWrapperStylesApi: StylesApiData<InputWrapperFactory>;

declare const InputBaseStylesApi: StylesApiData<InputBaseFactory>;

declare const JsonInputStylesApi: StylesApiData<JsonInputFactory>;

declare const KbdStylesApi: StylesApiData<KbdFactory>;

declare const ListStylesApi: StylesApiData<ListFactory>;

declare const LoaderStylesApi: StylesApiData<LoaderFactory>;

declare const LoadingOverlayStylesApi: StylesApiData<LoadingOverlayFactory>;

declare const MarkStylesApi: StylesApiData<MarkFactory>;

declare const MenuStylesApi: StylesApiData<MenuFactory>;

declare const ModalStylesApi: StylesApiData<ModalFactory>;

declare const MultiSelectStylesApi: StylesApiData<MultiSelectFactory>;

declare const NativeSelectStylesApi: StylesApiData<NativeSelectFactory>;

declare const NavLinkStylesApi: StylesApiData<NavLinkFactory>;

declare const NotificationStylesApi: StylesApiData<NotificationFactory>;

declare const NumberInputStylesApi: StylesApiData<NumberInputFactory>;

declare const NotificationsStylesApi: StylesApiData<NotificationsFactory>;

declare const OverlayStylesApi: StylesApiData<OverlayFactory>;

declare const PaginationStylesApi: StylesApiData<PaginationFactory>;

declare const PaperStylesApi: StylesApiData<PaperFactory>;

declare const PasswordInputStylesApi: StylesApiData<PasswordInputFactory>;

declare const PillStylesApi: StylesApiData<PillFactory>;
declare const PillGroupStylesApi: StylesApiData<PillGroupFactory>;

declare const PillsInputStylesApi: StylesApiData<PillsInputFactory>;
declare const PillsInputFieldStylesApi: StylesApiData<PillsInputFieldFactory>;

declare const PinInputStylesApi: StylesApiData<PinInputFactory>;

declare const PopoverStylesApi: StylesApiData<PopoverFactory$1>;

declare const ProgressStylesApi: StylesApiData<ProgressFactory>;

declare const RadioStylesApi: StylesApiData<RadioFactory>;
declare const RadioGroupStylesApi: StylesApiData<RadioGroupFactory>;

declare const RatingStylesApi: StylesApiData<RatingFactory>;

declare const RichTextEditorStylesApi: StylesApiData<RichTextEditorFactory>;

declare const RingProgressStylesApi: StylesApiData<RingProgressFactory>;

declare const ScrollAreaStylesApi: StylesApiData<ScrollAreaFactory>;

declare const SegmentedControlStylesApi: StylesApiData<SegmentedControlFactory>;

declare const SelectStylesApi: StylesApiData<SelectFactory>;

declare const SimpleGridStylesApi: StylesApiData<SimpleGridFactory>;

declare const SkeletonStylesApi: StylesApiData<SkeletonFactory>;

declare const SliderStylesApi: StylesApiData<SliderFactory>;

declare const SpoilerStylesApi: StylesApiData<SpoilerFactory>;

declare const SpotlightStylesApi: StylesApiData<SpotlightFactory>;

declare const StackStylesApi: StylesApiData<StackFactory>;

declare const StepperStylesApi: StylesApiData<StepperFactory>;

declare const SwitchStylesApi: StylesApiData<SwitchFactory>;
declare const SwitchGroupStylesApi: StylesApiData<SwitchGroupFactory>;

declare const TabsStylesApi: StylesApiData<TabsFactory>;

declare const TagsInputStylesApi: StylesApiData<TagsInputFactory>;

declare const TableStylesApi: StylesApiData<TableFactory>;

declare const TextStylesApi: StylesApiData<TextFactory>;

declare const TextareaStylesApi: StylesApiData<TextareaFactory>;

declare const TextInputStylesApi: StylesApiData<TextInputFactory>;

declare const ThemeIconStylesApi: StylesApiData<ThemeIconFactory>;

declare const TimelineStylesApi: StylesApiData<TimelineFactory>;

declare const TitleStylesApi: StylesApiData<TitleFactory>;

declare const TooltipStylesApi: StylesApiData<TooltipFactory>;

declare const TypographyStylesProviderStylesApi: StylesApiData<TypographyStylesProviderFactory>;

declare const UnstyledButtonStylesApi: StylesApiData<UnstyledButtonFactory>;

export { AccordionStylesApi, ActionIconGroupStylesApi, ActionIconStylesApi, AffixStylesApi, AlertStylesApi, AnchorStylesApi, AppShellStylesApi, AspectRatioStylesApi, AutocompleteStylesApi, AvatarGroupStylesApi, AvatarStylesApi, BackgroundImageStylesApi, BadgeStylesApi, BlockquoteStylesApi, BreadcrumbsStylesApi, BurgerStylesApi, ButtonGroupStylesApi, ButtonStylesApi, CalendarHeaderStylesApi, CalendarStylesApi, CardStylesApi, CarouselStylesApi, CenterStylesApi, CheckboxGroupStylesApi, CheckboxStylesApi, ChipStylesApi, CloseButtonStylesApi, CodeHighlightStylesApi, CodeHighlightTabsStylesApi, CodeStylesApi, ColorInputStylesApi, ColorPickerStylesApi, ColorSwatchStylesApi, ComboboxLikeSelectors, ComboboxStylesApi, ContainerStylesApi, DateInputStylesApi, DatePickerInputStylesApi, DatePickerStylesApi, DateTimePickerStylesApi, DecadeLevelGroupStylesApi, DialogStylesApi, DividerStylesApi, DrawerStylesApi, DropzoneFullScreenStylesApi, DropzoneStylesApi, FieldsetStylesApi, FileInputStylesApi, FlexStylesApi, GridStylesApi, GroupStylesApi, HighlightStylesApi, HoverCardStylesApi, ImageStylesApi, IndicatorStylesApi, InlineCodeHighlightStylesApi, InputBaseStylesApi, InputStylesApi, InputWrapperStylesApi, JsonInputStylesApi, KbdStylesApi, ListStylesApi, LoaderStylesApi, LoadingOverlayStylesApi, MarkStylesApi, MenuStylesApi, ModalStylesApi, Modifier, Modifiers, MonthLevelGroupStylesApi, MonthPickerInputStylesApi, MonthPickerStylesApi, MonthStylesApi, MultiSelectStylesApi, NativeSelectStylesApi, NavLinkStylesApi, NotificationStylesApi, NotificationsStylesApi, NumberInputStylesApi, OverlayStylesApi, PaginationStylesApi, PaperStylesApi, PasswordInputStylesApi, PillGroupStylesApi, PillStylesApi, PillsInputFieldStylesApi, PillsInputStylesApi, PinInputStylesApi, PopoverStylesApi, ProgressStylesApi, RadioGroupStylesApi, RadioStylesApi, RatingStylesApi, RichTextEditorStylesApi, RingProgressStylesApi, ScrollAreaStylesApi, SegmentedControlStylesApi, SelectStylesApi, Selectors, SimpleGridStylesApi, SkeletonStylesApi, SliderStylesApi, SpoilerStylesApi, SpotlightStylesApi, StackStylesApi, StepperStylesApi, StylesApiData, SwitchGroupStylesApi, SwitchStylesApi, TableStylesApi, TabsStylesApi, TagsInputStylesApi, TextInputStylesApi, TextStylesApi, TextareaStylesApi, ThemeIconStylesApi, TimeInputStylesApi, TimelineStylesApi, TitleStylesApi, TooltipStylesApi, TypographyStylesProviderStylesApi, UnstyledButtonStylesApi, Vars, YearLevelGroupStylesApi, YearPickerInputStylesApi, YearPickerStylesApi };
