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

function Demo() {
  const tsIcon = <TypeScriptIcon size={18} />;
  const cssIcon = <CssIcon size={18} />;

  return (
    <CodeHighlightTabs
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
          icon: tsIcon,
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
          icon: cssIcon,
        },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <CodeHighlightTabs
      code={[
        {
          fileName: "Button.tsx",
          code: tsxCode,
          language: "tsx",
          icon: <TypeScriptIcon size={18} />,
        },
        {
          fileName: "Button.module.css",
          code: cssCode,
          language: "scss",
          icon: <CssIcon size={18} />,
        },
      ]}
    />
  );
}

export const tabsIcons: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
