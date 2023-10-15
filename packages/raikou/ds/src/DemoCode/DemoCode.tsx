import React from "react";
import {
  CodeHighlightTabs,
  CodeHighlightTabsCode,
} from "@raikou/code-highlight";
import { TypeScriptIcon, CssIcon } from "../Icons";

export function getFileIcon(fileName: string) {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return <TypeScriptIcon size={18} />;
  }
  if (fileName.endsWith(".css")) {
    return <CssIcon size={18} />;
  }
  return null;
}

export interface DemoCodeProps {
  code?: string | CodeHighlightTabsCode | CodeHighlightTabsCode[];
  defaultExpanded?: boolean;
}

export function DemoCode({ code, defaultExpanded = true }: DemoCodeProps) {
  const _code: CodeHighlightTabsCode | CodeHighlightTabsCode[] | undefined =
    typeof code === "string"
      ? { code, fileName: "Demo.tsx", language: "tsx" }
      : code;
  return (
    <>
      {_code && (
        <CodeHighlightTabs
          code={_code}
          className="demoCode-code"
          getFileIcon={getFileIcon}
          withExpandButton
          defaultExpanded={defaultExpanded}
        />
      )}
    </>
  );
}
