import React from "react";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { useRichTextEditorContext } from "../RichTextEditor.context";

export type RichTextEditorControlsGroupStylesNames = "controlsGroup";
export interface RichTextEditorControlsGroupProps
  extends BoxProps,
    CompoundStylesApiProps<RichTextEditorControlsGroupFactory>,
    ElementProps<"div"> {}

export type RichTextEditorControlsGroupFactory = Factory<{
  props: RichTextEditorControlsGroupProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorControlsGroupStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorControlsGroupProps> = {};

export const RichTextEditorControlsGroup =
  factory<RichTextEditorControlsGroupFactory>((_props, ref) => {
    const props = useProps("RichTextEditorControlsGroup", defaultProps, _props);
    const { classNames, className, style, styles, vars, ...others } = props;
    const ctx = useRichTextEditorContext();
    return (
      <Box
        ref={ref}
        {...ctx.getStyles("controlsGroup", {
          className,
          style,
          styles,
          classNames,
        })}
        {...others}
      />
    );
  });

RichTextEditorControlsGroup.displayName =
  "@raikou/tiptap/RichTextEditorControlsGroup";
