import React from "react";
import { CodeHighlightTabsCode } from "@raikou/code-highlight";
import { CodeDemo } from "./CodeDemo";

export default { title: "DS/CodeDemo" };

const reactCode = `import React from 'react';
import { RaikouLogoRounded } from './RaikouLogoRounded';
import { RaikouLogoText } from './RaikouLogoText';
import { LogoProps } from './use-raikou-logo-colors';

export interface RaikouLogoProps extends LogoProps {
  type?: 'mark' | 'full';
}

export function RaikouLogo({ type, ...others }: RaikouLogoProps) {
  if (type === 'mark') {
    return <RaikouLogoRounded {...others} />;
  }

  return <RaikouLogoText {...others} />;
}
`;

const cssCode = `.code {
  display: inline-block;
  padding: rem(2px) rem(4px);
  font-size: rem(13px);
  border-radius: var(--raikou-radius-xs);
  line-height: var(--raikou-line-height);
  font-family: var(--raikou-font-family-monospace);
}

.pre {
  display: block;
  padding: var(--raikou-spacing-md);
  line-height: 1.7;
  margin: 0;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.copy {
  background-color: transparent;
  opacity: 0.8;
  margin: 0;
  margin-top: rem(7px);
  margin-right: rem(7px);

  @mixin hover {
    opacity: 1;
  }

  @media (max-width: 40em) {
    display: none;
  }
}`;

const code: CodeHighlightTabsCode[] = [
  { language: "tsx", code: reactCode, fileName: "Demo.tsx" },
  { language: "css", code: cssCode, fileName: "Demo.module.css" },
];

function DemoComponent() {
  return <div style={{ background: "pink" }}>Hello</div>;
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CodeDemo code={code} centered maxWidth={400} defaultExpanded={false}>
        <DemoComponent />
      </CodeDemo>
    </div>
  );
}
