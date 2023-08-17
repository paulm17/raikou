import { tests } from "@raikou/tests";
import {
  CodeHighlightTabs,
  CodeHighlightTabsProps,
  CodeHighlightTabsStylesNames,
} from "./CodeHighlightTabs";

const defaultProps: CodeHighlightTabsProps = {
  code: [
    { fileName: "Demo.tsx", language: "tsx", code: "test-tsx" },
    { fileName: "Demo.module.css", language: "css", code: "test-css" },
  ],
};

describe("@raikou/code-highlight/CodeHighlightTabs", () => {
  tests.itSupportsSystemProps<
    CodeHighlightTabsProps,
    CodeHighlightTabsStylesNames
  >({
    component: CodeHighlightTabs,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    refType: HTMLDivElement,
    displayName: "@raikou/core/CodeHighlightTabs",
    stylesApiSelectors: [
      "root",
      "code",
      "codeWrapper",
      "control",
      "controls",
      "file",
      "files",
      "header",
      "pre",
      "showCodeButton",
    ],
  });
});
