import cx from 'clsx';
import hljs from 'highlight.js';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@raikou/core';
import { CodeHighlightCodeStyle } from './CodeHighlight.css';
import { CodeHighlightThemeStyle } from './CodeHighlight.theme.css';

export type InlineCodeHighlightStylesNames = 'code';

export interface InlineCodeHighlightProps
  extends BoxProps,
    StylesApiProps<InlineCodeHighlightFactory>,
    ElementProps<'div'> {
  /** Code to highlight */
  code: string;

  /** Code language, `'tsx'` by default */
  language?: string;
}

export type InlineCodeHighlightFactory = Factory<{
  props: InlineCodeHighlightProps;
  ref: HTMLElement;
  stylesNames: InlineCodeHighlightStylesNames;
}>;

const defaultProps: Partial<InlineCodeHighlightProps> = {
  language: 'tsx',
};

export const InlineCodeHighlight = factory<InlineCodeHighlightFactory>((_props, ref) => {
  const props = useProps('InlineCodeHighlight', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, code, language, ...others } = props;

  const getStyles = useStyles<InlineCodeHighlightFactory>({
    name: 'InlineCodeHighlight',
    props,
    classes: {
      code: cx(CodeHighlightCodeStyle, CodeHighlightThemeStyle),
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'code',
  });

  const highlighted = hljs.highlight(code.trim(), { language: language! }).value;

  return (
    <Box
      {...getStyles('code')}
      component="code"
      ref={ref}
      {...others}
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
});

InlineCodeHighlight.displayName = '@raikou/core/InlineCodeHighlight';
