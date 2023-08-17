import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';
import React from 'react';

type CodeHighlightTabsStylesNames = "root" | "code" | "codeWrapper" | "showCodeButton" | "pre" | "controls" | "control" | "header" | "file" | "files" | "fileIcon";
type CodeHighlightTabsCssVariables = {
    root: "--ch-max-collapsed-height";
};
interface CodeHighlightTabsCode {
    language?: string;
    code: string;
    fileName?: string;
    icon?: React.ReactNode;
}
interface CodeHighlightTabsProps extends BoxProps, StylesApiProps<CodeHighlightTabsFactory>, ElementProps<"div"> {
    /** Code to highlight with meta data (file name and icon) */
    code: CodeHighlightTabsCode | CodeHighlightTabsCode[];
    /** Default active tab index */
    defaultActiveTab?: number;
    /** Index of controlled active tab state */
    activeTab?: number;
    /** Called when tab changes */
    onTabChange?(tab: number): void;
    /** Determines whether header with file names and copy button should be rendered, `true` by default */
    withHeader?: boolean;
    /** Copy tooltip label, `'Copy code'` by default */
    copyLabel?: string;
    /** Copied tooltip label, `'Copied'` by default */
    copiedLabel?: string;
    /** Function that returns icon based on file name */
    getFileIcon?(fileName: string): React.ReactNode;
    /** `max-height` of code in collapsed state */
    maxCollapsedHeight?: React.CSSProperties["maxHeight"];
    /** Controlled expanded state */
    expanded?: boolean;
    /** Uncontrolled expanded state initial value */
    defaultExpanded?: boolean;
    /** Called when expanded state changes */
    onExpandedChange?(expanded: boolean): void;
    /** Expand button label and tooltip, `'Expand code'` by default */
    expandCodeLabel?: string;
    /** Collapse button label and tooltip, `'Collapse code'` by default */
    collapseCodeLabel?: string;
    /** Determines whether to show the expand button, `false` by default */
    withExpandButton?: boolean;
}
type CodeHighlightTabsFactory = Factory<{
    props: CodeHighlightTabsProps;
    ref: HTMLDivElement;
    stylesNames: CodeHighlightTabsStylesNames;
}>;
declare const CodeHighlightTabs: _raikou_core.RaikouComponent<{
    props: CodeHighlightTabsProps;
    ref: HTMLDivElement;
    stylesNames: CodeHighlightTabsStylesNames;
}>;

type CodeHighlightStylesNames = "root" | "code" | "pre" | "copy";
interface CodeHighlightProps extends BoxProps, StylesApiProps<CodeHighlightFactory>, ElementProps<"div"> {
    /** Code to highlight */
    code: string;
    /** Code language, `'tsx'` by default */
    language?: string;
    /** Determines whether copy button should be displayed, `true` by default */
    withCopyButton?: boolean;
    /** Copy tooltip label, `'Copy code'` by default */
    copyLabel?: string;
    /** Copied tooltip label, `'Copied'` by default */
    copiedLabel?: string;
    /** Determines whether code should be highlighted only after component is mounted to the dom (disables code highlight on server), `false` by default */
    highlightOnClient?: boolean;
}
type CodeHighlightFactory = Factory<{
    props: CodeHighlightProps;
    ref: HTMLDivElement;
    stylesNames: CodeHighlightStylesNames;
}>;
declare const CodeHighlight: _raikou_core.RaikouComponent<{
    props: CodeHighlightProps;
    ref: HTMLDivElement;
    stylesNames: CodeHighlightStylesNames;
}>;

type InlineCodeHighlightStylesNames = "code";
interface InlineCodeHighlightProps extends BoxProps, StylesApiProps<InlineCodeHighlightFactory>, ElementProps<"div"> {
    /** Code to highlight */
    code: string;
    /** Code language, `'tsx'` by default */
    language?: string;
}
type InlineCodeHighlightFactory = Factory<{
    props: InlineCodeHighlightProps;
    ref: HTMLElement;
    stylesNames: InlineCodeHighlightStylesNames;
}>;
declare const InlineCodeHighlight: _raikou_core.RaikouComponent<{
    props: InlineCodeHighlightProps;
    ref: HTMLElement;
    stylesNames: InlineCodeHighlightStylesNames;
}>;

export { CodeHighlight, CodeHighlightFactory, CodeHighlightProps, CodeHighlightStylesNames, CodeHighlightTabs, CodeHighlightTabsCode, CodeHighlightTabsCssVariables, CodeHighlightTabsFactory, CodeHighlightTabsProps, CodeHighlightTabsStylesNames, InlineCodeHighlight, InlineCodeHighlightFactory, InlineCodeHighlightProps, InlineCodeHighlightStylesNames };
