import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  rem,
} from "@raikou/core";
import { useRichTextEditorContext } from "../RichTextEditor.context";

export type RichTextEditorToolbarStylesNames = "toolbar";

export interface RichTextEditorToolbarProps
  extends BoxProps,
    StylesApiProps<RichTextEditorToolbarFactory>,
    ElementProps<"div"> {
  /** Determines whether `position: sticky` styles should be added to the toolbar, `false` by default */
  sticky?: boolean;

  /** Sets top style to offset elements with fixed position, `0` by default */
  stickyOffset?: React.CSSProperties["top"];
}

export type RichTextEditorToolbarFactory = Factory<{
  props: RichTextEditorToolbarProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorToolbarStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorToolbarProps> = {};

export const RichTextEditorToolbar = factory<RichTextEditorToolbarFactory>(
  (_props, ref) => {
    const props = useProps("RichTextEditorToolbar", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      sticky,
      stickyOffset,
      ...others
    } = props;
    const ctx = useRichTextEditorContext();

    return (
      <Box
        ref={ref}
        mod={{ sticky }}
        {...ctx.getStyles("toolbar", { className, style, styles, classNames })}
        {...others}
        __vars={{ "--rte-sticky-offset": rem(stickyOffset) }}
      />
    );
  },
);

RichTextEditorToolbar.displayName = "@raikou/tiptap/RichTextEditorToolbar";
