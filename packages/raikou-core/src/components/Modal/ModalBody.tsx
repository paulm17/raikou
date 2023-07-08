import React from "react";
import { StylesApiProps, factory, useProps, Factory } from "../../core";
import { ModalBaseBody, ModalBaseBodyProps } from "../ModalBase";
import { useModalContext } from "./Modal.context";

export type ModalBodyStylesNames = "body";

export interface ModalBodyProps
  extends ModalBaseBodyProps,
    StylesApiProps<ModalBodyFactory> {}

export type ModalBodyFactory = Factory<{
  props: ModalBodyProps;
  ref: HTMLDivElement;
  stylesNames: ModalBodyStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ModalBodyProps> = {};

export const ModalBody = factory<ModalBodyFactory>((_props, ref) => {
  const props = useProps("ModalBody", defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } =
    props;

  const ctx = useModalContext();

  return (
    <ModalBaseBody
      ref={ref}
      {...ctx.getStyles("body", { classNames, style, styles, className })}
      {...others}
    />
  );
});

// ModalBody.classes = classes;
ModalBody.displayName = "@raikou/core/ModalBody";
