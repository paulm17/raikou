import React from "react";
import {
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
} from "@raikou/core";
import {
  ModalBaseCloseButton,
  ModalBaseCloseButtonProps,
} from "../../ModalBase/src";
import { useModalContext } from "./Modal.context";

export type ModalCloseButtonStylesNames = "close";

export interface ModalCloseButtonProps
  extends ModalBaseCloseButtonProps,
    CompoundStylesApiProps<ModalCloseButtonFactory> {}

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
    const { classNames, className, style, styles, vars, ...others } = props;

    const ctx = useModalContext();

    return (
      <ModalBaseCloseButton
        ref={ref}
        {...ctx.getStyles("close", { classNames, style, styles, className })}
        {...others}
      />
    );
  },
);

ModalCloseButton.displayName = "@raikou/core/ModalCloseButton";
