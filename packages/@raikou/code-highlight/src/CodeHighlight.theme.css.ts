import { css } from '@stylefusion/react';

export const CodeHighlightThemeStyle = css(({ theme }: any) => ({
  color: 'var(--code-text-color)',
  background: 'var(--code-background)',

  ...theme.applyStyles('where-light', {
    '--code-text-color': theme.colors.gray[7],
    '--code-background': theme.colors.gray[0],
    '--code-comment-color': theme.colors.gray[6],
    '--code-keyword-color': theme.colors.violet[8],
    '--code-tag-color': theme.colors.red[9],
    '--code-literal-color': theme.colors.blue[6],
    '--code-string-color': theme.colors.blue[9],
    '--code-variable-color': theme.colors.lime[9],
    '--code-class-color': theme.colors.orange[9],
  }),

  ...theme.applyStyles('where-dark', {
    '--code-text-color': theme.colors.dark[1],
    '--code-background': theme.colors.dark[8],
    '--code-comment-color': theme.colors.dark[3],
    '--code-keyword-color': theme.colors.violet[3],
    '--code-tag-color': theme.colors.yellow[4],
    '--code-literal-color': theme.colors.blue[4],
    '--code-string-color': theme.colors.green[6],
    '--code-variable-color': theme.colors.blue[2],
    '--code-class-color': theme.colors.orange[5],
  }),

  '& :global(.hljs-comment), & :global(.hljs-quote)': {
    fontStyle: 'italic',
    color: 'var(--code-comment-color)',
  },

  '& :global(.hljs-doctag), & :global(.hljs-formula), & :global(.hljs-keyword)': {
    color: 'var(--code-keyword-color)',
  },

  '& :global(.hljs-deletion), & :global(.hljs-name), & :global(.hljs-section), & :global(.hljs-selector-tag), & :global(.hljs-subst)':
    {
      color: 'var(--code-tag-color)',
    },

  '& :global(.hljs-literal)': {
    color: 'var(--code-literal-color)',
  },

  '& :global(.hljs-addition), & :global(.hljs-attribute), & :global(.hljs-meta .hljs-string), & :global(.hljs-regexp), & :global(.hljs-string)':
    {
      color: 'var(--code-string-color)',
    },

  [`
    & :global(.hljs-attr), 
    & :global(.hljs-number), 
    & :global(.hljs-selector-attr), 
    & :global(.hljs-selector-class), 
    & :global(.hljs-selector-pseudo), 
    & :global(.hljs-template-variable), 
    & :global(.hljs-type), 
    & :global(.hljs-variable)
  `]: {
    color: 'var(--code-variable-color)',
  },

  [`
    & :global(.hljs-bullet), 
    & :global(.hljs-link), 
    & :global(.hljs-meta), 
    & :global(.hljs-selector-id), 
    & :global(.hljs-symbol), 
    & :global(.hljs-title), 
    & :global(.hljs-built_in), 
    & :global(.hljs-class .hljs-title), 
    & :global(.hljs-title.class_)
  `]: {
    color: 'var(--code-class-color)',
  },

  '& :global(.hljs-emphasis)': {
    fontStyle: 'italic',
  },

  '& :global(.hljs-strong)': {
    fontWeight: '700',
  },

  '& :global(.hljs-link)': {
    textDecoration: 'underline',
  },
}));
