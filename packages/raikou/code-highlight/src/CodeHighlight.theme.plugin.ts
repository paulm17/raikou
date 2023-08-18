module.exports = function ({ addComponents }: any) {
  addComponents({
    ".codeHighlight-theme": {
      color: "var(--_color)",
      background: "var(--_background)",

      '[data-raikou-color-scheme="light"] &': {
        "--_color": "var(--codehighlight-theme-color)",
        "--_background": "var(--codehighlight-theme-background)",
        "--code-comment-color": "var(--codehighlight-theme-code-comment-color)",
        "--code-keyword-color": "var(--codehighlight-theme-code-keyword-color)",
        "--code-tag-color": "var(--codehighlight-theme-code-tag-color)",
        "--code-literal-color": "var(--codehighlight-theme-code-literal-color)",
        "--code-string-color": "var(--codehighlight-theme-code-string-color)",
        "--code-variable-color":
          "var(--codehighlight-theme-code-variable-color)",
        "--code-class-color": "var(--codehighlight-theme-code-class-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_color": "var(--codehighlight-theme-color)",
        "--_background": "var(--codehighlight-theme-background)",
        "--code-comment-color": "var(--codehighlight-theme-code-comment-color)",
        "--code-keyword-color": "var(--codehighlight-theme-code-keyword-color)",
        "--code-tag-color": "var(--codehighlight-theme-code-tag-color)",
        "--code-literal-color": "var(--codehighlight-theme-code-literal-color)",
        "--code-string-color": "var(--codehighlight-theme-code-string-color)",
        "--code-variable-color":
          "var(--codehighlight-theme-code-variable-color)",
        "--code-class-color": "var(--codehighlight-theme-code-class-color)",
      },

      ".hljs-comment, .hljs-quote": {
        fontStyle: "italic",
        color: "var(--code-comment-color)",
      },

      ".hljs-doctag, .hljs-formula, .hljs-keyword": {
        color: "var(--code-keyword-color)",
      },

      ".hljs-deletion, .hljs-name, .hljs-section, .hljs-selector-tag, .hljs-subst":
        {
          color: "var(--code-tag-color)",
        },

      ".hljs-literal": {
        color: "var(--code-literal-color)",
      },

      ".hljs-addition, .hljs-attribute, .hljs-meta .hljs-string, .hljs-regexp, .hljs-string":
        {
          color: "var(--code-string-color)",
        },

      ".hljs-attr, .hljs-number, .hljs-selector-attr, .hljs-selector-class, .hljs-selector-pseudo, .hljs-template-variable, .hljs-type, .hljs-variable":
        {
          color: "var(--code-variable-color)",
        },

      ".hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-id, .hljs-symbol, .hljs-title, .hljs-built_in, .hljs-class .hljs-title, .hljs-title.class_":
        {
          color: "var(--code-class-color)",
        },

      ".hljs-emphasis": {
        fontStyle: "italic",
      },

      ".hljs-strong": {
        fontWeight: "700",
      },

      ".hljs-link": {
        textDecoration: "underline",
      },
    },
  });
};
