import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  RaikouRadius,
  RaikouColor,
  getRadius,
  getThemeColor,
} from "@raikou/core";
import { Loader } from "../../Loader/src";
import { Text } from "../../Text/src";
import { CloseButton } from "../../CloseButton/src";

export type NotificationStylesNames =
  | "root"
  | "icon"
  | "loader"
  | "body"
  | "title"
  | "description"
  | "closeButton";
export type NotificationCssVariables = {
  root: "--notification-radius" | "--notification-color";
};

export interface NotificationProps
  extends BoxProps,
    StylesApiProps<NotificationFactory>,
    ElementProps<"div", "title"> {
  variant?: string;

  /** Called when close button is clicked */
  onClose?(): void;

  /** Controls notification line or icon color, key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius;

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

export type NotificationFactory = Factory<{
  props: NotificationProps;
  ref: HTMLDivElement;
  stylesNames: NotificationStylesNames;
  vars: NotificationCssVariables;
}>;

const defaultProps: Partial<NotificationProps> = {
  withCloseButton: true,
};

const varsResolver = createVarsResolver<NotificationFactory>(
  (theme, { radius, color }) => ({
    root: {
      "--notification-radius": getRadius(radius),
      "--notification-color": getThemeColor(color, theme),
    },
  }),
);

export const Notification = factory<NotificationFactory>((_props, ref) => {
  const props = useProps("Notification", defaultProps, _props);
  const {
    className,
    color,
    radius,
    loading,
    withCloseButton,
    withBorder,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    style,
    styles,
    unstyled,
    variant,
    vars,
    ...others
  } = props;

  const getStyles = useStyles<NotificationFactory>({
    name: "Notification",
    classes: {
      root: "notification-root",
      icon: "notification-icon",
      loader: "notification-loader",
      body: "notification-body",
      title: "notification-title",
      description: "notification-description",
      closeButton: "notification-close-button",
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box
      {...getStyles("root")}
      mod={{
        "data-with-icon": !!icon || loading,
        "data-with-border": withBorder,
      }}
      ref={ref}
      variant={variant}
      {...others}
      role="alert"
    >
      {icon && !loading && <div {...getStyles("icon")}>{icon}</div>}
      {loading && <Loader size={28} color={color} {...getStyles("loader")} />}

      <div {...getStyles("body")}>
        {title && (
          <Text {...getStyles("title")} size="sm" fw={500}>
            {title}
          </Text>
        )}

        <Text
          {...getStyles("description")}
          color="dimmed"
          mod={{
            "data-with-title": !!title,
          }}
          size="sm"
        >
          {children}
        </Text>
      </div>

      {withCloseButton && (
        <CloseButton
          iconSize={16}
          color="gray"
          {...closeButtonProps}
          onClick={onClose}
          {...getStyles("closeButton")}
        />
      )}
    </Box>
  );
});

Notification.displayName = "@raikou/core/Notification";
