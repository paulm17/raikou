import React from "react";
import { RaikouDemo, TypeScriptIcon, CssIcon } from "@raikou/ds";
import { CodeHighlightTabs } from "@raikou/code-highlight";

const tsxCode = `
function Button() {
  return <button>Click me</button>;
}
`;

const cssCode = `
.button {
  background-color: transparent;
  color: var(--raikou-color-blue-9);
}
`;

const code = `
import { CodeHighlightTabs } from '@raikou/code-highlight';
import { TypeScriptIcon, CssIcon } from '@raikou/ds';

const tsxCode = \`${tsxCode}\`;

const cssCode = \`${cssCode}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith(".css")) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      code={[
        {
          fileName: "Button.tsx",
          code: tsxCode,
          language: "tsx",
        },
        {
          fileName: "Button.module.css",
          code: cssCode,
          language: "scss",
        },
      ]}
    />
  );
}

export const tabsGetIcons: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
