import React from "react";
import {
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  rem,
} from "@raikou/core";
import {
  ModalBaseContent,
  ModalBaseContentProps,
  NativeScrollArea,
} from "../../ModalBase/src";
import { useModalContext } from "./Modal.context";
import classes from "./Modal.module.css";

export type ModalContentStylesNames = "content" | "inner";

export interface ModalContentProps
  extends ModalBaseContentProps,
    CompoundStylesApiProps<ModalContentFactory> {}

export type ModalContentFactory = Factory<{
  props: ModalContentProps;
  ref: HTMLDivElement;
  stylesNames: ModalContentStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ModalContentProps> = {};

export const ModalContent = factory<ModalContentFactory>((_props, ref) => {
  const props = useProps("ModalContent", defaultProps, _props);
  const { classNames, className, style, styles, vars, children, ...others } =
    props;

  const ctx = useModalContext();
  // @ts-ignore
  const Scroll: React.FC<any> = ctx.scrollAreaComponent || NativeScrollArea;

  return (
    <ModalBaseContent
      {...ctx.getStyles("content", { className, style, styles, classNames })}
      innerProps={ctx.getStyles("inner", {
        className,
        style,
        styles,
        classNames,
      })}
      data-full-screen={ctx.fullScreen || undefined}
      data-modal-content
      ref={ref}
      {...others}
    >
      <Scroll
        style={{
          maxHeight: ctx.fullScreen
            ? "100dvh"
            : `calc(100dvh - (${rem(ctx.yOffset)} * 2))`,
        }}
      >
        {children}
      </Scroll>
    </ModalBaseContent>
  );
});

ModalContent.classes = classes;
ModalContent.displayName = "@raikou/core/ModalContent";
