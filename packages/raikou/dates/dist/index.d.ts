import React$1 from 'react';
import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouRadius, RaikouSize, Factory } from '@raikou/core';

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
    children: React$1.ReactNode;
}
declare function DatesProvider({ settings, children }: DatesProviderProps): React$1.JSX.Element;

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
    name: string;
    form: string;
}
declare function HiddenDatesInput({ value, type, name, form, }: HiddenDatesInputProps): React$1.JSX.Element;
declare namespace HiddenDatesInput {
    var displayName: string;
}

declare function getEndOfWeek(date: Date, firstDayOfWeek?: DayOfWeek): Date;

declare function getStartOfWeek(date: Date, firstDayOfWeek?: DayOfWeek): Date;

declare function getMonthDays(month: Date, firstDayOfWeek?: DayOfWeek): Date[][];

declare function isSameMonth(date: Date, comparison: Date): boolean;

interface DayProps extends BoxProps, StylesApiProps<DayFactory>, ElementProps<"button", "type"> {
    __staticSelector?: string;
    /** Determines which element should be used as root, `'button'` by default, `'div'` if static prop is set */
    static?: boolean;
    /** Date that should be displayed */
    date: Date;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius | (string & {}) | number;
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
    renderDay?(date: Date): React$1.ReactNode;
}
type DayFactory = Factory<{
    props: DayProps;
    ref: HTMLButtonElement;
    compound: true;
}>;

type MonthStylesNames = "month" | "weekday" | "weekdaysRow" | "day" | "monthRow" | "monthThead" | "monthTbody" | "monthCell";
type MonthCssVariables = {
    month: "--month-fz" | "--month-spacing" | "--day-selected-bg" | "--day-selected-bg-hover" | "--day-selected-color" | "--day-range-bg" | "--day-range-bg-hover";
};
interface MonthSettings {
    /** Determines whether propagation for Escape key should be stopped */
    __stopPropagation?: boolean;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Called when day is clicked with click event and date */
    __onDayClick?(event: React$1.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when mouse enters day */
    __onDayMouseEnter?(event: React$1.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when any keydown event is registered on day, used for arrows navigation */
    __onDayKeyDown?(event: React$1.KeyboardEvent<HTMLButtonElement>, payload: ControlKeydownPayload): void;
    /** Assigns ref of every day based on its position in the table, used for arrows navigation */
    __getDayRef?(rowIndex: number, cellIndex: number, node: HTMLButtonElement): void;
    /** dayjs locale, defaults to value defined in DatesProvider */
    locale?: string;
    /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
    firstDayOfWeek?: DayOfWeek;
    /** dayjs format for weekdays names, defaults to "dd" */
    weekdayFormat?: string | ((date: Date) => React$1.ReactNode);
    /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider */
    weekendDays?: DayOfWeek[];
    /** Adds props to Day component based on date */
    getDayProps?(date: Date): Partial<DayProps>;
    /** Callback function to determine whether the day should be disabled */
    excludeDate?(date: Date): boolean;
    /** Minimum possible date */
    minDate?: Date;
    /** Maximum possible date */
    maxDate?: Date;
    /** Controls day value rendering */
    renderDay?(date: Date): React$1.ReactNode;
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
    vars: MonthCssVariables;
}>;
declare const Month: _raikou_core.RaikouComponent<{
    props: MonthProps;
    ref: HTMLTableElement;
    stylesNames: MonthStylesNames;
    vars: MonthCssVariables;
}>;

export { CalendarLevel, ControlKeydownPayload, ControlsGroupSettings, DATES_PROVIDER_DEFAULT_SETTINGS, DatePickerType, DatePickerValue, DateValue, DatesProvider, DatesProviderProps, DatesProviderSettings, DatesRangeValue, DayOfWeek, HiddenDatesInput, HiddenDatesInputProps, HiddenDatesInputValue, Month, MonthCssVariables, MonthFactory, MonthProps, MonthSettings, MonthStylesNames, PickerBaseProps, getEndOfWeek, getMonthDays, getStartOfWeek, isSameMonth, useDatesContext };
