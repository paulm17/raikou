import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  rem,
  useProps,
} from '@Raikou/core';
import { useRichTextEditorContext } from '../RichTextEditor.context';

export type RichTextEditorToolbarStylesNames = 'toolbar';

export interface RichTextEditorToolbarProps
  extends BoxProps,
    CompoundStylesApiProps<RichTextEditorToolbarFactory>,
    ElementProps<'div'> {
  /** Determines whether `position: sticky` styles should be added to the toolbar, `false` by default */
  sticky?: boolean;

  /** Sets top style to offset elements with fixed position, `0` by default */
  stickyOffset?: React.CSSProperties['top'];
}

export type RichTextEditorToolbarFactory = Factory<{
  props: RichTextEditorToolbarProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorToolbarStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorToolbarProps> = {};

export const RichTextEditorToolbar = factory<RichTextEditorToolbarFactory>((_props, ref) => {
  const props = useProps('RichTextEditorToolbar', defaultProps, _props);
  const { classNames, className, style, styles, vars, sticky, stickyOffset, mod, ...others } =
    props;
  const ctx = useRichTextEditorContext();

  return (
    <Box
      ref={ref}
      mod={[{ sticky }, mod]}
      {...ctx.getStyles('toolbar', { className, style, styles, classNames })}
      {...others}
      __vars={{ '--rte-sticky-offset': rem(stickyOffset) }}
    />
  );
});

RichTextEditorToolbar.displayName = '@Raikou/tiptap/RichTextEditorToolbar';