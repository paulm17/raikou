import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  TypographyStylesProvider,
} from '@mantine/core';
import { EditorContent } from '@tiptap/react';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import classes from '../RichTextEditor.module.css';

export type RichTextEditorContentStylesNames = 'root';
export interface RichTextEditorContentProps
  extends BoxProps,
    StylesApiProps<RichTextEditorContentFactory>,
    ElementProps<'div'> {}

export type RichTextEditorContentFactory = Factory<{
  props: RichTextEditorContentProps;
  ref: HTMLDivElement;
  stylesNames: RichTextEditorContentStylesNames;
  compound: true;
}>;

const defaultProps: Partial<RichTextEditorContentProps> = {};

export const RichTextEditorContent = factory<RichTextEditorContentFactory>((_props, ref) => {
  const props = useProps('RichTextEditorContent', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;
  const ctx = useRichTextEditorContext();

  if (ctx.withTypographyStyles) {
    return (
      <TypographyStylesProvider
        {...ctx.getStyles('typographyStylesProvider', { className, style, styles, classNames })}
        ref={ref}
      >
        <Box
          component={EditorContent}
          editor={ctx.editor}
          {...ctx.getStyles('content', { classNames, styles })}
          {...others}
        />
      </TypographyStylesProvider>
    );
  }

  return (
    <Box
      component={EditorContent}
      editor={ctx.editor}
      {...ctx.getStyles('content', { classNames, styles, className, style })}
      {...others}
    />
  );
});

RichTextEditorContent.classes = classes;
RichTextEditorContent.displayName = '@mantine/tiptap/RichTextEditorContent';
