import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, RaikouRadius, Factory } from '@raikou/core';
import React from 'react';

type NotificationStylesNames = "root" | "icon" | "loader" | "body" | "title" | "description" | "closeButton";
type NotificationCssVariables = {
    root: "--notification-radius" | "--notification-color";
};
interface NotificationProps extends BoxProps, StylesApiProps<NotificationFactory>, ElementProps<"div", "title"> {
    variant?: string;
    /** Called when close button is clicked */
    onClose?(): void;
    /** Controls notification line or icon color, key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Notification icon, replaces color line */
    icon?: React.ReactNode;
    /** Notification title, displayed before body */
    title?: React.ReactNode;
    /** Notification body, place main text here */
    children?: React.ReactNode;
    /** Replaces colored line or icon with Loader component */
    loading?: boolean;
    /** Determines whether notification should have a border, `false` by default */
    withBorder?: boolean;
    /** Determines whether close button should be visible, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: Record<string, any>;
}
type NotificationFactory = Factory<{
    props: NotificationProps;
    ref: HTMLDivElement;
    stylesNames: NotificationStylesNames;
    vars: NotificationCssVariables;
}>;
declare const Notification: _raikou_core.RaikouComponent<{
    props: NotificationProps;
    ref: HTMLDivElement;
    stylesNames: NotificationStylesNames;
    vars: NotificationCssVariables;
}>;

export { Notification, NotificationCssVariables, NotificationFactory, NotificationProps, NotificationStylesNames };
