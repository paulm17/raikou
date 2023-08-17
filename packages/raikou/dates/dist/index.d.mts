import react from 'react';
import * as _raikou_core from '@raikou/core';
import { RaikouRadius, RaikouSize, BoxProps, StylesApiProps, PolymorphicFactory, ElementProps, Factory, RaikouShadow, RaikouSpacing, RaikouComponentStaticProperties, RaikouColor, RaikouGradient } from '@raikou/core';
import { useDisclosure } from '@raikou/hooks';

type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type CalendarLevel = 'month' | 'year' | 'decade';
interface ControlKeydownPayload {
    cellIndex: number;
    rowIndex: number;
    date: Date;
}

interface ControlsGroupSettings {
    /** Called when control is clicked with event and date */
    __onControlClick?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when mouse enters control with event and date, used for ranges */
    __onControlMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when any keydown event is registered on control, used for arrows navigation */
    __onControlKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>, payload: ControlKeydownPayload): void;
    /** Assigns ref of every control based on its position in the table, used for arrows navigation */
    __getControlRef?(rowIndex: number, cellIndex: number, node: HTMLButtonElement): void;
    /** Minimum possible date */
    minDate?: Date;
    /** Maximum possible date */
    maxDate?: Date;
    /** dayjs locale, defaults to value defined in DatesProvider */
    locale?: string;
}

type DateValue = Date | null;
type DatesRangeValue = [DateValue, DateValue];
type DatePickerType = 'default' | 'multiple' | 'range';
type DatePickerValue<Type extends DatePickerType = 'default'> = Type extends 'range' ? DatesRangeValue : Type extends 'multiple' ? Date[] : DateValue;

interface PickerBaseProps<Type extends DatePickerType = 'default'> {
    /** Picker type: range, multiple or default */
    type?: DatePickerType | Type;
    /** Value for controlled component */
    value?: DatePickerValue<Type>;
    /** Default value for uncontrolled component */
    defaultValue?: DatePickerValue<Type>;
    /** Called when value changes */
    onChange?(value: DatePickerValue<Type>): void;
    /** Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" */
    allowDeselect?: Type extends 'default' ? boolean : never;
    /** Determines whether single year can be selected as range, applicable only when type="range" */
    allowSingleDateInRange?: Type extends 'range' ? boolean : never;
}

interface DatesProviderValue {
    locale: string;
    firstDayOfWeek: DayOfWeek;
    weekendDays: DayOfWeek[];
    labelSeparator: string;
}
type DatesProviderSettings = Partial<DatesProviderValue>;
declare const DATES_PROVIDER_DEFAULT_SETTINGS: DatesProviderValue;
interface DatesProviderProps {
    settings: DatesProviderSettings;
    children: react.ReactNode;
}
declare function DatesProvider({ settings, children }: DatesProviderProps): react.JSX.Element;

declare function useDatesContext(): {
    getLocale: (input?: string) => string;
    getFirstDayOfWeek: (input?: DayOfWeek) => DayOfWeek;
    getWeekendDays: (input?: DayOfWeek[]) => DayOfWeek[];
    getLabelSeparator: (input?: string) => string;
    locale: string;
    firstDayOfWeek: DayOfWeek;
    weekendDays: DayOfWeek[];
    labelSeparator: string;
};

type HiddenDatesInputValue = DatesRangeValue | DateValue | DateValue[];
interface HiddenDatesInputProps {
    value: HiddenDatesInputValue;
    type: DatePickerType;
    name: string | undefined;
    form: string | undefined;
}
declare function HiddenDatesInput({ value, type, name, form, }: HiddenDatesInputProps): react.JSX.Element;
declare namespace HiddenDatesInput {
    var displayName: string;
}

type InputLabelStylesNames = "label" | "required";

type InputErrorStylesNames = "error";

type InputDescriptionStylesNames = "description";

type InputWrapperStylesNames = "root" | InputLabelStylesNames | InputDescriptionStylesNames | InputErrorStylesNames;
interface __InputWrapperProps {
    /** Contents of `Input.Label` component, if not set, label is not rendered. */
    label?: react.ReactNode;
    /** Contents of `Input.Description` component, if not set, description is not rendered. */
    description?: react.ReactNode;
    /** Contents of `Input.Error` component, if not set, error is not rendered. */
    error?: react.ReactNode;
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
    inputContainer?(children: react.ReactNode): react.ReactNode;
    /** Controls order of the elements, `['label', 'description', 'input', 'error']` by default */
    inputWrapperOrder?: ("label" | "input" | "description" | "error")[];
}

interface __BaseInputProps extends __InputWrapperProps, __InputProps {
}
type __InputStylesNames = InputStylesNames | InputWrapperStylesNames;
type InputStylesNames = "input" | "wrapper" | "section";
type InputVariant = "default" | "filled" | "unstyled";
interface __InputProps {
    /** Content section rendered on the left side of the input */
    leftSection?: react.ReactNode;
    /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height */
    leftSectionWidth?: react.CSSProperties["width"];
    /** Props added to the `leftSection` element */
    leftSectionProps?: react.ComponentPropsWithoutRef<"div">;
    /** Sets `pointer-events` styles on the `leftSection` element, `'none'` by default */
    leftSectionPointerEvents?: react.CSSProperties["pointerEvents"];
    /** Content section rendered on the right side of the input */
    rightSection?: react.ReactNode;
    /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height */
    rightSectionWidth?: react.CSSProperties["width"];
    /** Props added to the `rightSection` element */
    rightSectionProps?: react.ComponentPropsWithoutRef<"div">;
    /** Sets `pointer-events` styles on the `rightSection` element, `'none'` by default */
    rightSectionPointerEvents?: react.CSSProperties["pointerEvents"];
    /** Props added to the root element of the `Input` component */
    wrapperProps?: react.ComponentPropsWithoutRef<"div">;
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

interface InputBaseProps extends BoxProps, __BaseInputProps, StylesApiProps<InputBaseFactory> {
    __staticSelector?: string;
    __stylesApiProps?: Record<string, any>;
    /** Props passed to the root element (`Input.Wrapper` component) */
    wrapperProps?: Record<string, any>;
    /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
    multiline?: boolean;
    /** Determines whether `aria-` and other accessibility attributes should be added to the input, `true` by default */
    withAria?: boolean;
}
type InputBaseFactory = PolymorphicFactory<{
    props: InputBaseProps;
    defaultRef: HTMLInputElement;
    defaultComponent: "input";
    stylesNames: __InputStylesNames;
    variant: InputVariant;
}>;

interface TimeInputProps extends InputBaseProps, ElementProps<"input", "size"> {
    /** Determines whether seconds input should be rendered */
    withSeconds?: boolean;
}
type TimeInputFactory = Factory<{
    props: TimeInputProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
}>;
declare const TimeInput: _raikou_core.RaikouComponent<{
    props: TimeInputProps;
    ref: HTMLInputElement;
    stylesNames: __InputStylesNames;
}>;

type DayStylesNames = "day";
type DayCssVariables = {
    day: "--day-size";
};
interface DayProps extends BoxProps, StylesApiProps<DayFactory>, ElementProps<"button"> {
    __staticSelector?: string;
    /** Determines which element should be used as root, `'button'` by default, `'div'` if static prop is set */
    static?: boolean;
    /** Date that should be displayed */
    date: Date;
    /** Control width and height of the day, `'sm'` by default */
    size?: RaikouSize;
    /** Determines whether the day should be considered to be a weekend, `false` by default */
    weekend?: boolean;
    /** Determines whether the day is outside of the current month, `false` by default */
    outside?: boolean;
    /** Determines whether the day is selected, `false` by default */
    selected?: boolean;
    /** Determines whether the day should not de displayed, `false` by default */
    hidden?: boolean;
    /** Determines whether the day is selected in range, `false` by default */
    inRange?: boolean;
    /** Determines whether the day is first in range selection, `false` by default */
    firstInRange?: boolean;
    /** Determines whether the day is last in range selection, `false` by default */
    lastInRange?: boolean;
    /** Controls day value rendering */
    renderDay?(date: Date): react.ReactNode;
}
type DayFactory = Factory<{
    props: DayProps;
    ref: HTMLButtonElement;
    stylesNames: DayStylesNames;
    vars: DayCssVariables;
}>;
declare const Day: _raikou_core.RaikouComponent<{
    props: DayProps;
    ref: HTMLButtonElement;
    stylesNames: DayStylesNames;
    vars: DayCssVariables;
}>;

type WeekdaysRowStylesNames = "weekday" | "weekdaysRow";
type WeekdaysRowCssVariables = {
    weekdaysRow: "--wr-fz" | "--wr-spacing";
};
interface WeekdaysRowProps extends BoxProps, StylesApiProps<WeekdaysRowFactory>, ElementProps<"tr"> {
    __staticSelector?: string;
    /** Controls size */
    size?: RaikouSize;
    /** dayjs locale, defaults to value defined in DatesProvider */
    locale?: string;
    /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
    firstDayOfWeek?: DayOfWeek;
    /** dayjs format to get weekday name, defaults to "dd" */
    weekdayFormat?: string | ((date: Date) => react.ReactNode);
    /** Choose cell type that will be used to render weekdays, defaults to th */
    cellComponent?: "td" | "th";
}
type WeekdaysRowFactory = Factory<{
    props: WeekdaysRowProps;
    ref: HTMLTableRowElement;
    stylesNames: WeekdaysRowStylesNames;
    vars: WeekdaysRowCssVariables;
}>;
declare const WeekdaysRow: _raikou_core.RaikouComponent<{
    props: WeekdaysRowProps;
    ref: HTMLTableRowElement;
    stylesNames: WeekdaysRowStylesNames;
    vars: WeekdaysRowCssVariables;
}>;

declare function getEndOfWeek(date: Date, firstDayOfWeek?: DayOfWeek): Date;

declare function getStartOfWeek(date: Date, firstDayOfWeek?: DayOfWeek): Date;

declare function getMonthDays(month: Date, firstDayOfWeek?: DayOfWeek): Date[][];

declare function isSameMonth(date: Date, comparison: Date): boolean;

type MonthStylesNames = "month" | "weekday" | "weekdaysRow" | "monthRow" | "month" | "monthThead" | "monthTbody" | "monthCell" | DayStylesNames;
interface MonthSettings {
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Called when day is clicked with click event and date */
    __onDayClick?(event: react.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when mouse enters day */
    __onDayMouseEnter?(event: react.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when any keydown event is registered on day, used for arrows navigation */
    __onDayKeyDown?(event: react.KeyboardEvent<HTMLButtonElement>, payload: ControlKeydownPayload): void;
    /** Assigns ref of every day based on its position in the table, used for arrows navigation */
    __getDayRef?(rowIndex: number, cellIndex: number, node: HTMLButtonElement): void;
    /** dayjs locale, defaults to value defined in DatesProvider */
    locale?: string;
    /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
    firstDayOfWeek?: DayOfWeek;
    /** dayjs format for weekdays names, defaults to "dd" */
    weekdayFormat?: string | ((date: Date) => react.ReactNode);
    /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider */
    weekendDays?: DayOfWeek[];
    /** Adds props to Day component based on date */
    getDayProps?(date: Date): Omit<Partial<DayProps>, "classNames" | "styles" | "vars">;
    /** Callback function to determine whether the day should be disabled */
    excludeDate?(date: Date): boolean;
    /** Minimum possible date */
    minDate?: Date;
    /** Maximum possible date */
    maxDate?: Date;
    /** Controls day value rendering */
    renderDay?(date: Date): react.ReactNode;
    /** Determines whether outside dates should be hidden, defaults to false */
    hideOutsideDates?: boolean;
    /** Determines whether weekdays row should be hidden, defaults to false */
    hideWeekdays?: boolean;
    /** Assigns aria-label to days based on date */
    getDayAriaLabel?(date: Date): string;
    /** Controls size */
    size?: RaikouSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}
interface MonthProps extends BoxProps, MonthSettings, StylesApiProps<MonthFactory>, ElementProps<"div"> {
    __staticSelector?: string;
    /** Month to display */
    month: Date;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
type MonthFactory = Factory<{
    props: MonthProps;
    ref: HTMLTableElement;
    stylesNames: MonthStylesNames;
}>;
declare const Month: _raikou_core.RaikouComponent<{
    props: MonthProps;
    ref: HTMLTableElement;
    stylesNames: MonthStylesNames;
}>;

type PickerControlStylesNames = "pickerControl";
type PickerControlCssVariables = {
    pickerControl: "--dpc-size" | "--dpc-fz";
};
interface PickerControlProps extends BoxProps, StylesApiProps<PickerControlFactory>, ElementProps<"button"> {
    __staticSelector?: string;
    /** Control children */
    children?: react.ReactNode;
    /** Determines whether control should be disabled */
    disabled?: boolean;
    /** Determines whether control should have selected styles */
    selected?: boolean;
    /** Determines whether control is selected in range */
    inRange?: boolean;
    /** Determines whether control is first in range selection */
    firstInRange?: boolean;
    /** Determines whether control is last in range selection */
    lastInRange?: boolean;
    /** Component size */
    size?: RaikouSize;
}
type PickerControlFactory = Factory<{
    props: PickerControlProps;
    ref: HTMLButtonElement;
    stylesNames: PickerControlStylesNames;
    vars: PickerControlCssVariables;
}>;
declare const PickerControl: _raikou_core.RaikouComponent<{
    props: PickerControlProps;
    ref: HTMLButtonElement;
    stylesNames: PickerControlStylesNames;
    vars: PickerControlCssVariables;
}>;

type YearsListStylesNames = "yearsListControl" | "yearsList" | "yearsListCell" | "yearsListRow";
interface YearsListSettings extends ControlsGroupSettings {
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** dayjs format for years list, `'YYYY'` by default  */
    yearsListFormat?: string;
    /** Adds props to year picker control based on date */
    getYearControlProps?(date: Date): Partial<PickerControlProps>;
    /** Component size */
    size?: RaikouSize;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}
interface YearsListProps extends BoxProps, YearsListSettings, StylesApiProps<YearsListFactory>, ElementProps<"table"> {
    __staticSelector?: string;
    /** Decade for which years list should be displayed */
    decade: Date;
}
type YearsListFactory = Factory<{
    props: YearsListProps;
    ref: HTMLTableElement;
    stylesNames: YearsListStylesNames;
}>;
declare const YearsList: _raikou_core.RaikouComponent<{
    props: YearsListProps;
    ref: HTMLTableElement;
    stylesNames: YearsListStylesNames;
}>;

type MonthsListStylesNames = "monthsList" | "monthsListCell" | "monthsListRow" | "monthsListControl";
interface MonthsListSettings extends ControlsGroupSettings {
    /** dayjs format for months list  */
    monthsListFormat?: string;
    /** Adds props to month picker control based on date */
    getMonthControlProps?(date: Date): Partial<PickerControlProps>;
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Determines whether controls should be separated by spacing, true by default */
    withCellSpacing?: boolean;
}
interface MonthsListProps extends BoxProps, MonthsListSettings, StylesApiProps<MonthsListFactory>, ElementProps<"table"> {
    __staticSelector?: string;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Year for which months list should be displayed */
    year: Date;
    /** Component size */
    size?: RaikouSize;
}
type MonthsListFactory = Factory<{
    props: MonthsListProps;
    ref: HTMLTableElement;
    stylesNames: MonthsListStylesNames;
}>;
declare const MonthsList: _raikou_core.RaikouComponent<{
    props: MonthsListProps;
    ref: HTMLTableElement;
    stylesNames: MonthsListStylesNames;
}>;

type CalendarHeaderStylesNames = "calendarHeader" | "calendarHeaderControl" | "calendarHeaderLevel" | "calendarHeaderControlIcon";
type CalendarHeaderCssVariables = {
    calendarHeader: "--dch-control-size" | "--dch-fz";
};
interface CalendarHeaderSettings {
    __preventFocus?: boolean;
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Change next icon */
    nextIcon?: react.ReactNode;
    /** Change previous icon */
    previousIcon?: react.ReactNode;
    /** aria-label for next button */
    nextLabel?: string;
    /** aria-label for previous button */
    previousLabel?: string;
    /** Called when next button is clicked */
    onNext?(): void;
    /** Called when previous button is clicked */
    onPrevious?(): void;
    /** Called when level button is clicked */
    onLevelClick?(): void;
    /** Determines whether next control should be disabled, defaults to true */
    nextDisabled?: boolean;
    /** Determines whether previous control should be disabled, defaults to true */
    previousDisabled?: boolean;
    /** Determines whether next level button should be enabled, defaults to true */
    hasNextLevel?: boolean;
    /** Determines whether next control should be rendered, defaults to true */
    withNext?: boolean;
    /** Determines whether previous control should be rendered, defaults to true */
    withPrevious?: boolean;
    /** Component size */
    size?: RaikouSize;
}
interface CalendarHeaderProps extends BoxProps, CalendarHeaderSettings, StylesApiProps<CalendarHeaderFactory>, ElementProps<"div"> {
    __staticSelector?: string;
    /** Label displayed between next and previous buttons */
    label: react.ReactNode;
    /** aria-label for level control */
    levelControlAriaLabel?: string;
}
type CalendarHeaderFactory = Factory<{
    props: CalendarHeaderProps;
    ref: HTMLDivElement;
    stylesNames: CalendarHeaderStylesNames;
    vars: CalendarHeaderCssVariables;
}>;
declare const CalendarHeader: _raikou_core.RaikouComponent<{
    props: CalendarHeaderProps;
    ref: HTMLDivElement;
    stylesNames: CalendarHeaderStylesNames;
    vars: CalendarHeaderCssVariables;
}>;

type DecadeLevelStylesNames = YearsListStylesNames | CalendarHeaderStylesNames;
interface DecadeLevelBaseSettings extends YearsListSettings {
    /** dayjs label format to display decade label or a function that returns decade label based on date value, defaults to "YYYY" */
    decadeLabelFormat?: string | ((startOfDecade: Date, endOfDecade: Date) => react.ReactNode);
}
interface DecadeLevelSettings extends DecadeLevelBaseSettings, Omit<CalendarHeaderSettings, "onLevelClick" | "hasNextLevel"> {
}
interface DecadeLevelProps extends BoxProps, DecadeLevelSettings, Omit<StylesApiProps<DecadeLevelFactory>, "classNames" | "styles">, ElementProps<"div"> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, react.CSSProperties>>;
    __staticSelector?: string;
    /** Decade that is currently displayed */
    decade: Date;
    /** aria-label for change level control */
    levelControlAriaLabel?: string;
}
type DecadeLevelFactory = Factory<{
    props: DecadeLevelProps;
    ref: HTMLDivElement;
    stylesNames: DecadeLevelStylesNames;
}>;
declare const DecadeLevel: _raikou_core.RaikouComponent<{
    props: DecadeLevelProps;
    ref: HTMLDivElement;
    stylesNames: DecadeLevelStylesNames;
}>;

type YearLevelStylesNames = MonthsListStylesNames | CalendarHeaderStylesNames;
interface YearLevelBaseSettings extends MonthsListSettings {
    /** dayjs label format to display year label or a function that returns year label based on year value, defaults to "YYYY" */
    yearLabelFormat?: string | ((year: Date) => react.ReactNode);
}
interface YearLevelSettings extends YearLevelBaseSettings, CalendarHeaderSettings {
}
interface YearLevelProps extends BoxProps, YearLevelSettings, Omit<StylesApiProps<YearLevelFactory>, "classNames" | "styles">, ElementProps<"div"> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, react.CSSProperties>>;
    __staticSelector?: string;
    /** Year that is currently displayed */
    year: Date;
    /** aria-label for change level control */
    levelControlAriaLabel?: string;
}
type YearLevelFactory = Factory<{
    props: YearLevelProps;
    ref: HTMLDivElement;
    stylesNames: YearLevelStylesNames;
}>;
declare const YearLevel: _raikou_core.RaikouComponent<{
    props: YearLevelProps;
    ref: HTMLDivElement;
    stylesNames: YearLevelStylesNames;
}>;

type MonthLevelStylesNames = MonthStylesNames | CalendarHeaderStylesNames;
interface MonthLevelBaseSettings extends MonthSettings {
    /** dayjs label format to display month label or a function that returns month label based on month value, defaults to "MMMM YYYY" */
    monthLabelFormat?: string | ((month: Date) => react.ReactNode);
}
interface MonthLevelSettings extends MonthLevelBaseSettings, CalendarHeaderSettings {
}
interface MonthLevelProps extends BoxProps, MonthLevelSettings, Omit<StylesApiProps<MonthLevelFactory>, "classNames" | "styles">, ElementProps<"div"> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, react.CSSProperties>>;
    __staticSelector?: string;
    /** Month that is currently displayed */
    month: Date;
    /** aria-label for change level control */
    levelControlAriaLabel?: string;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
type MonthLevelFactory = Factory<{
    props: MonthLevelProps;
    ref: HTMLDivElement;
    stylesNames: MonthLevelStylesNames;
}>;
declare const MonthLevel: _raikou_core.RaikouComponent<{
    props: MonthLevelProps;
    ref: HTMLDivElement;
    stylesNames: MonthLevelStylesNames;
}>;

type LevelsGroupStylesNames = "levelsGroup";
interface LevelsGroupProps extends BoxProps, StylesApiProps<LevelsGroupFactory>, ElementProps<"div"> {
    __staticSelector?: string;
    size?: RaikouSize;
}
type LevelsGroupFactory = Factory<{
    props: LevelsGroupProps;
    ref: HTMLDivElement;
    stylesNames: LevelsGroupStylesNames;
}>;
declare const LevelsGroup: _raikou_core.RaikouComponent<{
    props: LevelsGroupProps;
    ref: HTMLDivElement;
    stylesNames: LevelsGroupStylesNames;
}>;

type DecadeLevelGroupStylesNames = LevelsGroupStylesNames | DecadeLevelStylesNames;
interface DecadeLevelGroupProps extends BoxProps, Omit<StylesApiProps<DecadeLevelGroupFactory>, "classNames" | "styles">, Omit<DecadeLevelSettings, "withPrevious" | "withNext" | "__onControlKeyDown" | "__getControlRef">, ElementProps<"div"> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, react.CSSProperties>>;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Decade that is currently displayed */
    decade: Date;
    /** Function that returns level control aria-label based on year date */
    levelControlAriaLabel?: ((decade: Date) => string) | string;
}
type DecadeLevelGroupFactory = Factory<{
    props: DecadeLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: DecadeLevelGroupStylesNames;
}>;
declare const DecadeLevelGroup: _raikou_core.RaikouComponent<{
    props: DecadeLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: DecadeLevelGroupStylesNames;
}>;

type YearLevelGroupStylesNames = YearLevelStylesNames | LevelsGroupStylesNames;
interface YearLevelGroupProps extends BoxProps, Omit<YearLevelSettings, "withPrevious" | "withNext" | "__onControlKeyDown" | "__getControlRef">, Omit<StylesApiProps<YearLevelGroupFactory>, "classNames" | "styles">, ElementProps<"div"> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, react.CSSProperties>>;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Year that is currently displayed */
    year: Date;
    /** Function that returns level control aria-label based on year date */
    levelControlAriaLabel?: ((year: Date) => string) | string;
}
type YearLevelGroupFactory = Factory<{
    props: YearLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: YearLevelGroupStylesNames;
}>;
declare const YearLevelGroup: _raikou_core.RaikouComponent<{
    props: YearLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: YearLevelGroupStylesNames;
}>;

type MonthLevelGroupStylesNames = MonthLevelStylesNames | LevelsGroupStylesNames;
interface MonthLevelGroupProps extends BoxProps, Omit<MonthLevelSettings, "withPrevious" | "withNext" | "__onDayKeyDown" | "__getDayRef">, Omit<StylesApiProps<MonthLevelGroupFactory>, "classNames" | "styles">, ElementProps<"div"> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, react.CSSProperties>>;
    __staticSelector?: string;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Month that is currently displayed */
    month: Date;
    /** Function that returns level control aria-label based on month date */
    levelControlAriaLabel?: ((month: Date) => string) | string;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
type MonthLevelGroupFactory = Factory<{
    props: MonthLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: MonthLevelGroupStylesNames;
}>;
declare const MonthLevelGroup: _raikou_core.RaikouComponent<{
    props: MonthLevelGroupProps;
    ref: HTMLDivElement;
    stylesNames: MonthLevelGroupStylesNames;
}>;

interface RaikouTransitionStyles {
    common?: react.CSSProperties;
    in: react.CSSProperties;
    out: react.CSSProperties;
    transitionProperty: react.CSSProperties["transitionProperty"];
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
    children(styles: react.CSSProperties): JSX.Element;
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

interface PortalProps extends react.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: react.ReactNode;
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
    zIndex?: react.CSSProperties["zIndex"];
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
    shadow?: RaikouShadow | (string & {});
    /** If set, popover dropdown will not be rendered */
    disabled?: boolean;
    /** Determines whether focus should be automatically returned to control when dropdown closes, `false` by default */
    returnFocus?: boolean;
}
interface PopoverProps extends __PopoverProps, StylesApiProps<PopoverFactory> {
    __staticSelector?: string;
    /** `Popover.Target` and `Popover.Dropdown` components */
    children?: react.ReactNode;
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

interface ModalBaseProps extends BoxProps, ElementProps<"div", "title"> {
    /** If set modal/drawer will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
    keepMounted?: boolean;
    /** Determines whether modal/drawer is opened */
    opened: boolean;
    /** Called when modal/drawer is closed */
    onClose(): void;
    /** Id used to connect modal/drawer with body and title */
    id?: string;
    /** Determines whether scroll should be locked when `opened={true}`, `true` by default */
    lockScroll?: boolean;
    /** Determines whether focus should be trapped, `true` by default */
    trapFocus?: boolean;
    /** Determines whether the component should be rendered inside `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Props passed down to the Portal component when `withinPortal` is set */
    portalProps?: Omit<PortalProps, "children">;
    /** Modal/drawer content */
    children?: react.ReactNode;
    /** Determines whether the modal/drawer should be closed when user clicks on the overlay, `true` by default */
    closeOnClickOutside?: boolean;
    /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'pop' }` by default */
    transitionProps?: TransitionOverride;
    /** Determines whether `onClose` should be called when user presses the escape key, `true` by default */
    closeOnEscape?: boolean;
    /** Determines whether focus should be returned to the last active element when `onClose` is called, `true` by default */
    returnFocus?: boolean;
    /** `z-index` CSS property of the root element, `200` by default */
    zIndex?: react.CSSProperties["zIndex"];
    /** Key of `theme.shadows` or any valid CSS box-shadow value, 'xl' by default */
    shadow?: RaikouShadow | (string & {});
    /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding, `'md'` by default */
    padding?: RaikouSpacing | (string & {}) | number;
    /** Controls width of the content area, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
}

interface ModalBaseCloseButtonProps extends BoxProps, ElementProps<"button"> {
}

type OverlayStylesNames = "root";
type OverlayCssVariables = {
    root: "--overlay-bg" | "--overlay-filter" | "--overlay-radius" | "--overlay-z-index";
};
interface OverlayProps extends BoxProps, StylesApiProps<OverlayFactory> {
    /** Controls overlay `background-color` opacity 0–1, disregarded when `gradient` prop is set, `0.6` by default */
    backgroundOpacity?: number;
    /** Overlay `background-color`, `#000` by default */
    color?: react.CSSProperties["backgroundColor"];
    /** Overlay background blur, `0` by default */
    blur?: number | string;
    /** Changes overlay to gradient. If set, `color` prop is ignored */
    gradient?: string;
    /** Overlay z-index, `200` by default */
    zIndex?: react.CSSProperties["zIndex"];
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Content inside overlay */
    children?: react.ReactNode;
    /** Determines whether content inside overlay should be vertically and horizontally centered, `false` by default */
    center?: boolean;
    /** Determines whether overlay should have fixed position instead of absolute, `false` by default */
    fixed?: boolean;
}
type OverlayFactory = PolymorphicFactory<{
    props: OverlayProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: OverlayStylesNames;
    vars: OverlayCssVariables;
}>;

interface ModalBaseOverlayProps extends Omit<OverlayProps, "styles" | "classNames" | "variant" | "vars">, ElementProps<"div", "color"> {
    /** Props passed down to the `Transition` component */
    transitionProps?: TransitionOverride;
}

type ModalBaseStylesNames = 'body' | 'header' | 'title' | 'overlay' | 'root' | 'content' | 'close' | 'inner';

type ScrollAreaComponent = React.FC<any>;

type ModalRootStylesNames = ModalBaseStylesNames;
type ModalRootCssVariables = {
    root: "--modal-radius" | "--modal-size" | "--modal-y-offset" | "--modal-x-offset";
};
interface ModalRootProps extends StylesApiProps<ModalRootFactory>, ModalBaseProps {
    __staticSelector?: string;
    /** Top/bottom modal offset, `5vh` by default */
    yOffset?: react.CSSProperties["marginTop"];
    /** Left/right modal offset, `5vw` by default */
    xOffset?: react.CSSProperties["marginLeft"];
    /** Scroll area component, native `div` element by default */
    scrollAreaComponent?: ScrollAreaComponent;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Determines whether the modal should be centered vertically, `false` by default */
    centered?: boolean;
    /** Determines whether the modal should take the entire screen, `false` by default */
    fullScreen?: boolean;
}
type ModalRootFactory = Factory<{
    props: ModalRootProps;
    ref: HTMLDivElement;
    stylesNames: ModalRootStylesNames;
    vars: ModalRootCssVariables;
    compound: true;
}>;

interface ModalProps extends ModalRootProps {
    __staticSelector?: string;
    /** Modal title */
    title?: react.ReactNode;
    /** Determines whether the overlay should be rendered, `true` by default */
    withOverlay?: boolean;
    /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
    overlayProps?: ModalBaseOverlayProps;
    /** Modal content */
    children?: react.ReactNode;
    /** Determines whether the close button should be rendered, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: ModalBaseCloseButtonProps;
}

type PickerInputBaseStylesNames = __InputStylesNames;
interface DateInputSharedProps extends Omit<__BaseInputProps, "size">, ElementProps<"button", "defaultValue" | "value" | "onChange" | "type"> {
    /** Determines whether dropdown should be closed when date is selected, not applicable when type="multiple", true by default */
    closeOnChange?: boolean;
    /** Type of dropdown, defaults to popover */
    dropdownType?: "popover" | "modal";
    /** Props passed down to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, "children">>;
    /** Props passed down to Modal component */
    modalProps?: Partial<Omit<ModalProps, "children">>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props passed down to clear button */
    clearButtonProps?: react.ComponentPropsWithoutRef<"button">;
    /** Determines whether the user can modify the value */
    readOnly?: boolean;
    /** Determines whether dates value should be sorted before onChange call, only applicable when type="multiple", true by default */
    sortDates?: boolean;
    /** Separator between range value */
    labelSeparator?: string;
}
interface PickerInputBaseProps extends BoxProps, DateInputSharedProps, Omit<StylesApiProps<PickerInputBaseFactory>, "classNames" | "styles"> {
    classNames?: Partial<Record<string, string>>;
    styles?: Partial<Record<string, react.CSSProperties>>;
    __staticSelector?: string;
    children: react.ReactNode;
    formattedValue: string | null | undefined;
    dropdownHandlers: ReturnType<typeof useDisclosure>[1];
    dropdownOpened: boolean;
    onClear(): void;
    shouldClear: boolean;
    value: HiddenDatesInputValue;
    type: DatePickerType;
    size: RaikouSize;
}
type PickerInputBaseFactory = Factory<{
    props: PickerInputBaseProps;
    ref: HTMLButtonElement;
    stylesNames: PickerInputBaseStylesNames;
    variant: InputVariant;
}>;
declare const PickerInputBase: _raikou_core.RaikouComponent<{
    props: PickerInputBaseProps;
    ref: HTMLButtonElement;
    stylesNames: PickerInputBaseStylesNames;
    variant: InputVariant;
}>;

type CalendarStylesNames = MonthLevelGroupStylesNames | YearLevelGroupStylesNames | DecadeLevelGroupStylesNames;
interface CalendarAriaLabels {
    monthLevelControl?: string;
    yearLevelControl?: string;
    nextMonth?: string;
    previousMonth?: string;
    nextYear?: string;
    previousYear?: string;
    nextDecade?: string;
    previousDecade?: string;
}
type OmittedSettings = "onNext" | "onPrevious" | "onLevelClick" | "withNext" | "withPrevious" | "nextDisabled" | "previousDisabled";
interface CalendarSettings extends Omit<DecadeLevelSettings, OmittedSettings>, Omit<YearLevelSettings, OmittedSettings>, Omit<MonthLevelSettings, OmittedSettings> {
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Called when level changes */
    onLevelChange?(level: CalendarLevel): void;
    /** Called when user clicks year on decade level */
    onYearSelect?(date: Date): void;
    /** Called when user clicks month on year level */
    onMonthSelect?(date: Date): void;
    /** Called when mouse enters year control */
    onYearMouseEnter?(event: react.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when mouse enters month control */
    onMonthMouseEnter?(event: react.MouseEvent<HTMLButtonElement>, date: Date): void;
}
interface CalendarBaseProps {
    __staticSelector?: string;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Determines whether date should be updated when year control is clicked */
    __updateDateOnYearSelect?: boolean;
    /** Determines whether date should be updated when month control is clicked */
    __updateDateOnMonthSelect?: boolean;
    /** Initial date that is displayed, used for uncontrolled component */
    defaultDate?: Date;
    /** Date that is displayed, used for controlled component */
    date?: Date;
    /** Called when date changes */
    onDateChange?(date: Date): void;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns */
    columnsToScroll?: number;
    /** aria-label attributes for controls on different levels */
    ariaLabels?: CalendarAriaLabels;
    /** Called when next decade button is clicked */
    onNextDecade?(date: Date): void;
    /** Called when previous decade button is clicked */
    onPreviousDecade?(date: Date): void;
    /** Called when next year button is clicked */
    onNextYear?(date: Date): void;
    /** Called when previous year button is clicked */
    onPreviousYear?(date: Date): void;
    /** Called when next month button is clicked */
    onNextMonth?(date: Date): void;
    /** Called when previous month button is clicked */
    onPreviousMonth?(date: Date): void;
}
interface CalendarProps extends BoxProps, CalendarSettings, CalendarBaseProps, StylesApiProps<CalendarFactory>, ElementProps<"div"> {
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Min level that user can go down to (decade, year, month), defaults to month */
    minLevel?: CalendarLevel;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
type CalendarFactory = Factory<{
    props: CalendarProps;
    ref: HTMLDivElement;
    stylesNames: CalendarStylesNames;
}>;
declare const Calendar: _raikou_core.RaikouComponent<{
    props: CalendarProps;
    ref: HTMLDivElement;
    stylesNames: CalendarStylesNames;
}>;

declare function pickCalendarProps<T extends Record<string, any>>(props: T): {
    calendarProps: {
        maxLevel: any;
        minLevel: any;
        defaultLevel: any;
        level: any;
        onLevelChange: any;
        nextIcon: any;
        previousIcon: any;
        date: any;
        defaultDate: any;
        onDateChange: any;
        numberOfColumns: any;
        columnsToScroll: any;
        ariaLabels: any;
        onYearSelect: any;
        onMonthSelect: any;
        onYearMouseEnter: any;
        onMonthMouseEnter: any;
        onNextMonth: any;
        onPreviousMonth: any;
        onNextYear: any;
        onPreviousYear: any;
        onNextDecade: any;
        onPreviousDecade: any;
        withCellSpacing: any;
        __updateDateOnYearSelect: any;
        __updateDateOnMonthSelect: any;
        firstDayOfWeek: any;
        weekdayFormat: any;
        weekendDays: any;
        getDayProps: any;
        excludeDate: any;
        renderDay: any;
        hideOutsideDates: any;
        hideWeekdays: any;
        getDayAriaLabel: any;
        monthLabelFormat: any;
        monthsListFormat: any;
        getMonthControlProps: any;
        yearLabelFormat: any;
        yearsListFormat: any;
        getYearControlProps: any;
        decadeLabelFormat: any;
        allowSingleDateInRange: any;
        allowDeselect: any;
        minDate: any;
        maxDate: any;
        locale: any;
    };
    others: Omit<T, "locale" | "firstDayOfWeek" | "weekendDays" | "date" | "renderDay" | "weekdayFormat" | "getDayProps" | "excludeDate" | "minDate" | "maxDate" | "hideOutsideDates" | "hideWeekdays" | "getDayAriaLabel" | "withCellSpacing" | "yearsListFormat" | "getYearControlProps" | "monthsListFormat" | "getMonthControlProps" | "nextIcon" | "previousIcon" | "decadeLabelFormat" | "yearLabelFormat" | "monthLabelFormat" | "numberOfColumns" | "defaultLevel" | "level" | "onLevelChange" | "onYearSelect" | "onMonthSelect" | "onYearMouseEnter" | "onMonthMouseEnter" | "maxLevel" | "minLevel" | "__updateDateOnYearSelect" | "__updateDateOnMonthSelect" | "defaultDate" | "onDateChange" | "columnsToScroll" | "ariaLabels" | "onNextDecade" | "onPreviousDecade" | "onNextYear" | "onPreviousYear" | "onNextMonth" | "onPreviousMonth" | "allowSingleDateInRange" | "allowDeselect">;
};

type YearPickerStylesNames = DecadeLevelGroupStylesNames;
interface YearPickerBaseProps<Type extends DatePickerType = "default"> extends PickerBaseProps<Type>, DecadeLevelBaseSettings, Omit<CalendarBaseProps, "onNextYear" | "onPreviousYear" | "onNextMonth" | "onPreviousMonth"> {
}
interface YearPickerProps<Type extends DatePickerType = "default"> extends BoxProps, YearPickerBaseProps<Type>, StylesApiProps<YearPickerFactory>, ElementProps<"div", "onChange" | "value" | "defaultValue"> {
    /** Called when year is selected */
    onYearSelect?(date: Date): void;
}
type YearPickerFactory = Factory<{
    props: YearPickerProps;
    ref: HTMLDivElement;
    stylesNames: YearPickerStylesNames;
}>;
type YearPickerComponent = (<Type extends DatePickerType = "default">(props: YearPickerProps<Type>) => JSX.Element) & {
    displayName?: string;
} & RaikouComponentStaticProperties<YearPickerFactory>;
declare const YearPicker: YearPickerComponent;

type MonthPickerStylesNames = DecadeLevelGroupStylesNames | YearLevelGroupStylesNames;
type MonthPickerLevel = Exclude<CalendarLevel, "month">;
interface MonthPickerBaseProps<Type extends DatePickerType = "default"> extends PickerBaseProps<Type>, DecadeLevelBaseSettings, YearLevelBaseSettings, Omit<CalendarBaseProps, "onNextMonth" | "onPreviousMonth"> {
    /** Max level that user can go up to (decade, year), defaults to decade */
    maxLevel?: MonthPickerLevel;
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: MonthPickerLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: MonthPickerLevel;
    /** Called when level changes */
    onLevelChange?(level: MonthPickerLevel): void;
}
interface MonthPickerProps<Type extends DatePickerType = "default"> extends BoxProps, MonthPickerBaseProps<Type>, StylesApiProps<MonthPickerFactory>, ElementProps<"div", "onChange" | "value" | "defaultValue"> {
    /** Called when month is selected */
    onMonthSelect?(date: Date): void;
}
type MonthPickerFactory = Factory<{
    props: MonthPickerProps;
    ref: HTMLDivElement;
    stylesNames: MonthPickerStylesNames;
}>;
type MonthPickerComponent = (<Type extends DatePickerType = "default">(props: MonthPickerProps<Type>) => JSX.Element) & {
    displayName?: string;
} & RaikouComponentStaticProperties<MonthPickerFactory>;
declare const MonthPicker: MonthPickerComponent;

type DatePickerStylesNames = CalendarStylesNames;
interface DatePickerBaseProps<Type extends DatePickerType = "default"> extends PickerBaseProps<Type>, DecadeLevelBaseSettings, YearLevelBaseSettings, MonthLevelBaseSettings, CalendarBaseProps, CalendarSettings {
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Called when level changes */
    onLevelChange?(level: CalendarLevel): void;
}
interface DatePickerProps<Type extends DatePickerType = "default"> extends BoxProps, DatePickerBaseProps<Type>, StylesApiProps<DatePickerFactory>, ElementProps<"div", "onChange" | "value" | "defaultValue"> {
}
type DatePickerFactory = Factory<{
    props: DatePickerProps;
    ref: HTMLDivElement;
    stylesNames: DatePickerStylesNames;
}>;
type DatePickerComponent = (<Type extends DatePickerType = "default">(props: DatePickerProps<Type>) => JSX.Element) & {
    displayName?: string;
} & RaikouComponentStaticProperties<DatePickerFactory>;
declare const DatePicker: DatePickerComponent;

type DateInputStylesNames = __InputStylesNames | CalendarStylesNames;
interface DateInputProps extends BoxProps, Omit<__BaseInputProps, "size">, CalendarBaseProps, DecadeLevelSettings, YearLevelSettings, MonthLevelSettings, StylesApiProps<DateInputFactory>, ElementProps<"input", "size" | "value" | "defaultValue" | "onChange"> {
    /** Parses user input to convert it to Date object */
    dateParser?: (value: string) => Date | null;
    /** Value for controlled component */
    value?: DateValue;
    /** Default value for uncontrolled component */
    defaultValue?: DateValue;
    /** Called when value changes */
    onChange?(value: DateValue): void;
    /** Props added to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, "children">>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props added to clear button */
    clearButtonProps?: react.ComponentPropsWithoutRef<"button">;
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
    /** Determines whether input value should be reverted to last known valid value on blur, true by default */
    fixOnBlur?: boolean;
    /** Determines whether value can be deselected when the user clicks on the selected date in the calendar (only when clearable prop is set), defaults to true if clearable prop is set, false otherwise */
    allowDeselect?: boolean;
    /** Determines whether time (hours, minutes, seconds and milliseconds) should be preserved when new date is picked, true by default */
    preserveTime?: boolean;
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Called when level changes */
    onLevelChange?(level: CalendarLevel): void;
}
type DateInputFactory = Factory<{
    props: DateInputProps;
    ref: HTMLInputElement;
    stylesNames: DateInputStylesNames;
    variant: InputVariant;
}>;
declare const DateInput: _raikou_core.RaikouComponent<{
    props: DateInputProps;
    ref: HTMLInputElement;
    stylesNames: DateInputStylesNames;
    variant: InputVariant;
}>;

type RaikouLoaderComponent = react.ForwardRefExoticComponent<react.HTMLAttributes<any> & react.RefAttributes<any>>;
type RaikouLoadersRecord = Partial<Record<"bars" | "dots" | "oval" | (string & {}), RaikouLoaderComponent>>;
type RaikouLoader = keyof RaikouLoadersRecord;

type LoaderStylesNames = "root";
type LoaderCssVariables = {
    root: "--loader-size" | "--loader-color";
};
interface LoaderProps extends BoxProps, StylesApiProps<LoaderFactory>, Omit<react.ComponentPropsWithoutRef<"svg">, keyof BoxProps> {
    /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: RaikouColor;
    /** Loader type, key of `loaders` prop, default value is `'oval'` */
    type?: RaikouLoader;
    /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
    loaders?: RaikouLoadersRecord;
}
type LoaderFactory = Factory<{
    props: LoaderProps;
    ref: HTMLSpanElement;
    stylesNames: LoaderStylesNames;
    vars: LoaderCssVariables;
    staticComponents: {
        defaultLoaders: typeof defaultLoaders;
    };
}>;
declare const defaultLoaders: RaikouLoadersRecord;

type ActionIconGroupStylesNames = "group";
type ActionIconGroupCssVariables = {
    group: "--ai-border-width";
};
interface ActionIconGroupProps extends BoxProps, StylesApiProps<ActionIconGroupFactory> {
    /** `ActionIcon` components only */
    children?: react.ReactNode;
    /** Controls group orientation, `'horizontal'` by default */
    orientation?: "horizontal" | "vertical";
    /** `border-width` of the child `ActionIcon` components. Default value in `1` */
    borderWidth?: number | string;
}
type ActionIconGroupFactory = Factory<{
    props: ActionIconGroupProps;
    ref: HTMLDivElement;
    stylesNames: ActionIconGroupStylesNames;
    vars: ActionIconGroupCssVariables;
}>;
declare const ActionIconGroup: _raikou_core.RaikouComponent<{
    props: ActionIconGroupProps;
    ref: HTMLDivElement;
    stylesNames: ActionIconGroupStylesNames;
    vars: ActionIconGroupCssVariables;
}>;

type ActionIconVariant = "filled" | "light" | "outline" | "transparent" | "white" | "subtle" | "default" | "gradient";
type ActionIconStylesNames = "root" | "loader";
type ActionIconCssVariables = {
    root: "--ai-radius" | "--ai-size" | "--ai-bg" | "--ai-hover" | "--ai-color" | "--ai-bd";
};
interface ActionIconProps extends BoxProps, StylesApiProps<ActionIconFactory> {
    "data-disabled"?: boolean;
    __staticSelector?: string;
    /** Determines whether `Loader` component should be displayed instead of the `children`, `false` by default */
    loading?: boolean;
    /** Props added to the `Loader` component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps;
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: RaikouRadius | (string & {}) | number;
    /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: RaikouGradient;
    /** Sets `disabled` and `data-disabled` attributes on the button element */
    disabled?: boolean;
    /** Icon displayed inside the button */
    children?: react.ReactNode;
}
type ActionIconFactory = PolymorphicFactory<{
    props: ActionIconProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: ActionIconStylesNames;
    variant: ActionIconVariant;
    vars: ActionIconCssVariables;
    staticComponents: {
        Group: typeof ActionIconGroup;
    };
}>;

type DateTimePickerStylesNames = "timeWrapper" | "timeInput" | "submitButton" | PickerInputBaseStylesNames | CalendarStylesNames;
interface DateTimePickerProps extends BoxProps, Omit<DateInputSharedProps, "classNames" | "styles" | "closeOnChange" | "size">, Omit<CalendarBaseProps, "defaultDate">, Omit<CalendarSettings, "onYearMouseEnter" | "onMonthMouseEnter">, StylesApiProps<DateTimePickerFactory> {
    /** Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default  */
    valueFormat?: string;
    /** Controlled component value */
    value?: DateValue;
    /** Default value for uncontrolled component */
    defaultValue?: DateValue;
    /** Called when value changes */
    onChange?(value: DateValue): void;
    /** TimeInput component props */
    timeInputProps?: TimeInputProps & {
        ref?: react.ComponentPropsWithRef<"input">["ref"];
    };
    /** Props passed down to the submit button */
    submitButtonProps?: ActionIconProps & react.ComponentPropsWithoutRef<"button">;
    /** Determines whether seconds input should be rendered */
    withSeconds?: boolean;
}
type DateTimePickerFactory = Factory<{
    props: DateTimePickerProps;
    ref: HTMLButtonElement;
    stylesNames: DateTimePickerStylesNames;
    variant: InputVariant;
}>;
declare const DateTimePicker: _raikou_core.RaikouComponent<{
    props: DateTimePickerProps;
    ref: HTMLButtonElement;
    stylesNames: DateTimePickerStylesNames;
    variant: InputVariant;
}>;

type YearPickerInputStylesNames = __InputStylesNames | YearPickerStylesNames;
interface YearPickerInputProps<Type extends DatePickerType = "default"> extends BoxProps, DateInputSharedProps, YearPickerBaseProps<Type>, StylesApiProps<YearPickerInputFactory> {
    /** Dayjs format to display input value, "YYYY" by default  */
    valueFormat?: string;
}
type YearPickerInputFactory = Factory<{
    props: YearPickerInputProps;
    ref: HTMLButtonElement;
    stylesNames: YearPickerInputStylesNames;
    variant: InputVariant;
}>;
type YearPickerInputComponent = (<Type extends DatePickerType = "default">(props: YearPickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
} & RaikouComponentStaticProperties<YearPickerInputFactory>;
declare const YearPickerInput: YearPickerInputComponent;

type MonthPickerInputStylesNames = __InputStylesNames | MonthPickerStylesNames;
interface MonthPickerInputProps<Type extends DatePickerType = "default"> extends BoxProps, DateInputSharedProps, MonthPickerBaseProps<Type>, StylesApiProps<MonthPickerInputFactory> {
    /** Dayjs format to display input value, "MMMM YYYY" by default  */
    valueFormat?: string;
}
type MonthPickerInputFactory = Factory<{
    props: MonthPickerInputProps;
    ref: HTMLButtonElement;
    stylesNames: MonthPickerInputStylesNames;
    variant: InputVariant;
}>;
type MonthPickerInputComponent = (<Type extends DatePickerType = "default">(props: MonthPickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
} & RaikouComponentStaticProperties<MonthPickerInputFactory>;
declare const MonthPickerInput: MonthPickerInputComponent;

type DatePickerInputStylesNames = __InputStylesNames | CalendarStylesNames;
interface DatePickerInputProps<Type extends DatePickerType = "default"> extends BoxProps, DateInputSharedProps, DatePickerBaseProps<Type>, StylesApiProps<DatePickerInputFactory> {
    /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
    valueFormat?: string;
}
type DatePickerInputFactory = Factory<{
    props: DatePickerInputProps;
    ref: HTMLButtonElement;
    stylesNames: DatePickerInputStylesNames;
    variant: InputVariant;
}>;
type DatePickerInputComponent = (<Type extends DatePickerType = "default">(props: DatePickerInputProps<Type>) => JSX.Element) & {
    displayName?: string;
} & RaikouComponentStaticProperties<DatePickerInputFactory>;
declare const DatePickerInput: DatePickerInputComponent;

export { Calendar, CalendarAriaLabels, CalendarBaseProps, CalendarFactory, CalendarHeader, CalendarHeaderCssVariables, CalendarHeaderFactory, CalendarHeaderProps, CalendarHeaderSettings, CalendarHeaderStylesNames, CalendarLevel, CalendarProps, CalendarSettings, CalendarStylesNames, ControlKeydownPayload, ControlsGroupSettings, DATES_PROVIDER_DEFAULT_SETTINGS, DateInput, DateInputFactory, DateInputProps, DateInputSharedProps, DateInputStylesNames, DatePicker, DatePickerBaseProps, DatePickerFactory, DatePickerInput, DatePickerInputFactory, DatePickerInputProps, DatePickerInputStylesNames, DatePickerProps, DatePickerStylesNames, DatePickerType, DatePickerValue, DateTimePicker, DateTimePickerFactory, DateTimePickerProps, DateTimePickerStylesNames, DateValue, DatesProvider, DatesProviderProps, DatesProviderSettings, DatesRangeValue, Day, DayCssVariables, DayFactory, DayOfWeek, DayProps, DayStylesNames, DecadeLevel, DecadeLevelBaseSettings, DecadeLevelFactory, DecadeLevelGroup, DecadeLevelGroupFactory, DecadeLevelGroupProps, DecadeLevelGroupStylesNames, DecadeLevelProps, DecadeLevelSettings, DecadeLevelStylesNames, HiddenDatesInput, HiddenDatesInputProps, HiddenDatesInputValue, LevelsGroup, LevelsGroupFactory, LevelsGroupProps, LevelsGroupStylesNames, Month, MonthFactory, MonthLevel, MonthLevelBaseSettings, MonthLevelFactory, MonthLevelGroup, MonthLevelGroupFactory, MonthLevelGroupProps, MonthLevelGroupStylesNames, MonthLevelProps, MonthLevelSettings, MonthLevelStylesNames, MonthPicker, MonthPickerBaseProps, MonthPickerFactory, MonthPickerInput, MonthPickerInputFactory, MonthPickerInputProps, MonthPickerInputStylesNames, MonthPickerProps, MonthPickerStylesNames, MonthProps, MonthSettings, MonthStylesNames, MonthsList, MonthsListFactory, MonthsListProps, MonthsListSettings, MonthsListStylesNames, PickerBaseProps, PickerControl, PickerControlCssVariables, PickerControlFactory, PickerControlProps, PickerControlStylesNames, PickerInputBase, PickerInputBaseFactory, PickerInputBaseProps, PickerInputBaseStylesNames, TimeInput, TimeInputFactory, TimeInputProps, WeekdaysRow, WeekdaysRowCssVariables, WeekdaysRowFactory, WeekdaysRowProps, WeekdaysRowStylesNames, YearLevel, YearLevelBaseSettings, YearLevelFactory, YearLevelGroup, YearLevelGroupFactory, YearLevelGroupProps, YearLevelGroupStylesNames, YearLevelProps, YearLevelSettings, YearLevelStylesNames, YearPicker, YearPickerBaseProps, YearPickerFactory, YearPickerInput, YearPickerInputFactory, YearPickerInputProps, YearPickerInputStylesNames, YearPickerProps, YearPickerStylesNames, YearsList, YearsListFactory, YearsListProps, YearsListSettings, YearsListStylesNames, getEndOfWeek, getMonthDays, getStartOfWeek, isSameMonth, pickCalendarProps, useDatesContext };
