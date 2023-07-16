import React from "react";
import { StylesApiProps, factory, useProps, Factory } from "@raikou/core";
import {
  ModalBaseCloseButton,
  ModalBaseCloseButtonProps,
} from "../../ModalBase/src";
import { useModalContext } from "./Modal.context";

export type ModalCloseButtonStylesNames = "close";

export interface ModalCloseButtonProps
  extends ModalBaseCloseButtonProps,
    StylesApiProps<ModalCloseButtonFactory> {}

export type ModalCloseButtonFactory = Factory<{
  props: ModalCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: ModalCloseButtonStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ModalCloseButtonProps> = {};

export const ModalCloseButton = factory<ModalCloseButtonFactory>(
  (_props, ref) => {
    const props = useProps("ModalCloseButton", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, ...others } =
      props;

    const ctx = useModalContext();

    return (
      <ModalBaseCloseButton
        ref={ref}
        {...ctx.getStyles("close", { classNames, style, styles, className })}
        {...others}
      />
    );
  }
);

// ModalCloseButton.classes = classes;
ModalCloseButton.displayName = "@raikou/core/ModalCloseButton";
