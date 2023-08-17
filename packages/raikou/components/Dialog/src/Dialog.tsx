import React from "react";
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  RaikouSize,
  getSize,
} from "@raikou/core";
import { Affix, AffixBaseProps } from "../../Affix/src";
import { Paper, PaperBaseProps } from "../../Paper/src";
import { Transition, TransitionOverride } from "../../Transition/src";
import { CloseButton } from "../../CloseButton/src";

export type DialogStylesNames = "root" | "closeButton";
export type DialogCssVariables = {
  root: "--dialog-size";
};

// @ts-ignore
export interface DialogProps
  extends BoxProps,
    AffixBaseProps,
    PaperBaseProps,
    StylesApiProps<DialogFactory>,
    ElementProps<"div"> {
  /** If set dialog will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
  keepMounted?: boolean;

  /** Determines whether the close button should be displayed, `true` by default */
  withCloseButton?: boolean;

  /** Called when the close button is clicked */
  onClose?(): void;

  /** Dialog content */
  children?: React.ReactNode;

  /** Opened state */
  opened: boolean;

  /** Overrides default transition, `{ transition: 'pop-top-right', duration: 200 }` by default */
  transitionProps?: TransitionOverride;

  /** Controls `width` of the dialog, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;
}

export type DialogFactory = Factory<{
  props: DialogProps;
  ref: HTMLDivElement;
  stylesNames: DialogStylesNames;
  vars: DialogCssVariables;
}>;

const defaultProps: Partial<DialogProps> = {
  shadow: "md",
  p: "md",
  withBorder: false,
  size: "md",
  transitionProps: { transition: "pop-top-right", duration: 200 },
  position: {
    bottom: 30,
    right: 30,
  },
};

const varsResolver = createVarsResolver<DialogFactory>((_, { size }) => ({
  root: {
    "--dialog-size": getSize(size, "dialog-size"),
  },
}));

export const Dialog = factory<DialogFactory>((_props, ref) => {
  const props = useProps("Dialog", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    zIndex,
    position,
    keepMounted,
    opened,
    transitionProps,
    withCloseButton,
    withinPortal,
    children,
    onClose,
    portalProps,
    ...others
  } = props;

  const getStyles = useStyles<DialogFactory>({
    name: "Dialog",
    classes: {
      root: "dialog-root",
      closeButton: "dialog-closeButton",
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
    <Affix
      zIndex={zIndex}
      position={position}
      ref={ref}
      withinPortal={withinPortal}
      portalProps={portalProps}
    >
      <Transition
        keepMounted={keepMounted}
        mounted={opened}
        {...transitionProps}
      >
        {(transitionStyles) => (
          <Paper
            unstyled={unstyled}
            {...getStyles("root", { style: transitionStyles })}
            {...others}
          >
            {withCloseButton && (
              <CloseButton onClick={onClose} {...getStyles("closeButton")} />
            )}
            {children as any}
          </Paper>
        )}
      </Transition>
    </Affix>
  );
});

Dialog.displayName = "@raikou/core/Dialog";
