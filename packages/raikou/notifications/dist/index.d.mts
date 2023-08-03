import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, RaikouRadius, Factory } from '@raikou/core';
import React$1 from 'react';
import { RaikouStore } from '@raikou/store';

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
    icon?: React$1.ReactNode;
    /** Notification title, displayed before body */
    title?: React$1.ReactNode;
    /** Notification body, place main text here */
    children?: React$1.ReactNode;
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

interface NotificationData extends Omit<NotificationProps, "onClose"> {
    /** Notification id, can be used to close or update notification */
    id?: string;
    /** Notification message, required for all notifications */
    message: React.ReactNode;
    /** Determines whether notification should be closed automatically,
     *  number is auto close timeout in ms, overrides `autoClose` from `Notifications`
     * */
    autoClose?: boolean | number;
    /** Called when notification closes */
    onClose?(props: NotificationData): void;
    /** Called when notification opens */
    onOpen?(props: NotificationData): void;
}
interface NotificationsState {
    notifications: NotificationData[];
    queue: NotificationData[];
    limit: number;
}
type NotificationsStore = RaikouStore<NotificationsState>;
declare const createNotificationsStore: () => RaikouStore<NotificationsState>;
declare const notificationsStore: RaikouStore<NotificationsState>;
declare const useNotifications: (store?: NotificationsStore) => NotificationsState;
declare function updateNotificationsState(store: NotificationsStore, update: (notifications: NotificationData[]) => NotificationData[]): void;
declare function showNotification(notification: NotificationData, store?: NotificationsStore): string;
declare function hideNotification(id: string, store?: NotificationsStore): string;
declare function updateNotification(notification: NotificationData, store?: NotificationsStore): string | undefined;
declare function cleanNotifications(store?: NotificationsStore): void;
declare function cleanNotificationsQueue(store?: NotificationsStore): void;
declare const notifications: {
    readonly show: typeof showNotification;
    readonly hide: typeof hideNotification;
    readonly update: typeof updateNotification;
    readonly clean: typeof cleanNotifications;
    readonly cleanQueue: typeof cleanNotificationsQueue;
    readonly updateState: typeof updateNotificationsState;
};

interface PortalProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React$1.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

type NotificationsStylesNames = "root" | "notification";
type NotificationsCssVariables = {
    root: "--notifications-z-index" | "--notifications-top" | "--notifications-right" | "--notifications-left" | "--notifications-left" | "--notifications-transform" | "--notifications-container-width";
};
interface NotificationsProps extends BoxProps, StylesApiProps<NotificationsFactory>, ElementProps<"div"> {
    /** Notifications position, `'bottom-right'` by default */
    position?: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center";
    /** Auto close timeout for all notifications in ms, `false` to disable auto close, can be overwritten for individual notifications in `notifications.show` function, `4000` by defualt */
    autoClose?: number | false;
    /** Notification transition duration in ms, `250` by default */
    transitionDuration?: number;
    /** Notification width, cannot exceed 100%, `440` by default */
    containerWidth?: number | string;
    /** Notification `max-height`, used for transitions, `200` by default */
    notificationMaxHeight?: number | string;
    /** Maximum number of notifications displayed at a time, other new notifications will be added to queue, `5` by default */
    limit?: number;
    /** Notifications container z-index, `400` by default */
    zIndex?: React$1.CSSProperties["zIndex"];
    /** Props passed down to the `Portal` component */
    portalProps?: Omit<PortalProps, "children">;
    /** Store for notifications state, can be used to create multiple instances of notifications system in your application */
    store?: NotificationsStore;
    /** Determines whether notifications container should be rendered inside `Portal`, `true` by default */
    withinPortal?: boolean;
}
type NotificationsFactory = Factory<{
    props: NotificationsProps;
    ref: HTMLDivElement;
    stylesNames: NotificationsStylesNames;
    vars: NotificationsCssVariables;
    staticComponents: {
        show: typeof notifications.show;
        hide: typeof notifications.hide;
        update: typeof notifications.update;
        clean: typeof notifications.clean;
        cleanQueue: typeof notifications.cleanQueue;
        updateState: typeof notifications.updateState;
    };
}>;
declare const Notifications: _raikou_core.RaikouComponent<{
    props: NotificationsProps;
    ref: HTMLDivElement;
    stylesNames: NotificationsStylesNames;
    vars: NotificationsCssVariables;
    staticComponents: {
        show: typeof notifications.show;
        hide: typeof notifications.hide;
        update: typeof notifications.update;
        clean: typeof notifications.clean;
        cleanQueue: typeof notifications.cleanQueue;
        updateState: typeof notifications.updateState;
    };
}>;

export { NotificationData, Notifications, NotificationsCssVariables, NotificationsFactory, NotificationsProps, NotificationsState, NotificationsStore, NotificationsStylesNames, cleanNotifications, cleanNotificationsQueue, createNotificationsStore, hideNotification, notifications, notificationsStore, showNotification, updateNotification, updateNotificationsState, useNotifications };
