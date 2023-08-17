module.exports = function ({ addComponents }: any) {
  addComponents({
    ".codeHighlight-theme": {
      color: "var(--_color)",
      background: "var(--_background)",

      '[data-raikou-color-scheme="light"] &': {
        "--_color": "var(--raikou-color-gray-7)",
        "--_background": "var(--raikou-color-gray-0)",
        "--code-comment-color": "var(--raikou-color-gray-6)",
        "--code-keyword-color": "var(--raikou-color-violet-8)",
        "--code-tag-color": "var(--raikou-color-red-9)",
        "--code-literal-color": "var(--raikou-color-blue-6)",
        "--code-string-color": "var(--raikou-color-blue-9)",
        "--code-variable-color": "var(--raikou-color-lime-9)",
        "--code-class-color": "var(--raikou-color-orange-9)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_color": "var(--raikou-color-dark-1)",
        "--_background": "var(--raikou-color-dark-8)",
        "--code-comment-color": "var(--raikou-color-dark-3)",
        "--code-keyword-color": "var(--raikou-color-violet-3)",
        "--code-tag-color": "var(--raikou-color-yellow-4)",
        "--code-literal-color": "var(--raikou-color-blue-4)",
        "--code-string-color": "var(--raikou-color-green-6)",
        "--code-variable-color": "var(--raikou-color-blue-2)",
        "--code-class-color": "var(--raikou-color-orange-5)",
      },

      ":global(.hljs-comment), :global(.hljs-quote)": {
        fontStyle: "italic",
        color: "var(--code-comment-color)",
      },

      ":global(.hljs-doctag), :global(.hljs-formula), :global(.hljs-keyword)": {
        color: "var(--code-keyword-color)",
      },

      ":global(.hljs-deletion), :global(.hljs-name), :global(.hljs-section), :global(.hljs-selector-tag), :global(.hljs-subst)":
        {
          color: "var(--code-tag-color)",
        },

      ":global(.hljs-literal)": {
        color: "var(--code-literal-color)",
      },

      ":global(.hljs-addition), :global(.hljs-attribute), :global(.hljs-meta .hljs-string), :global(.hljs-regexp), :global(.hljs-string)":
        {
          color: "var(--code-string-color)",
        },

      ":global(.hljs-attr), :global(.hljs-number), :global(.hljs-selector-attr), :global(.hljs-selector-class), :global(.hljs-selector-pseudo), :global(.hljs-template-variable), :global(.hljs-type), :global(.hljs-variable)":
        {
          color: "var(--code-variable-color)",
        },

      ":global(.hljs-bullet), :global(.hljs-link), :global(.hljs-meta), :global(.hljs-selector-id), :global(.hljs-symbol), :global(.hljs-title), :global(.hljs-built_in), :global(.hljs-class .hljs-title), :global(.hljs-title.class_)":
        {
          color: "var(--code-class-color)",
        },

      ":global(.hljs-emphasis)": {
        fontStyle: "italic",
      },

      ":global(.hljs-strong)": {
        fontWeight: "700",
      },

      ":global(.hljs-link)": {
        textDecoration: "underline",
      },
    },
  });
};
