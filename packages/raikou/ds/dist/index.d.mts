import React from 'react';
import { CodeHighlightTabsCode } from '@raikou/code-highlight';

declare const meta: {
    docsLink: string;
    uiLink: string;
    discordLink: string;
    twitterLink: string;
    npmLink: string;
    discordColor: string;
    twitterColor: string;
    gitHubLinks: {
        raikou: string;
        raikouUi: string;
        discussions: string;
        organization: string;
        releases: string;
    };
};

interface DiscordIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    size?: number | string;
}
declare function DiscordIcon({ size, style, ...others }: DiscordIconProps): React.JSX.Element;

interface TwitterIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    size?: number | string;
}
declare function TwitterIcon({ size, style, ...others }: TwitterIconProps): React.JSX.Element;

interface GithubIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    size?: number | string;
}
declare function GithubIcon({ size, style, ...others }: GithubIconProps): React.JSX.Element;

interface NpmIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    size?: number | string;
}
declare function NpmIcon({ size, style, ...others }: NpmIconProps): React.JSX.Element;

interface YarnIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    size?: number | string;
}
declare function YarnIcon({ size, style, ...others }: YarnIconProps): React.JSX.Element;

interface TypeScriptIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    size?: number | string;
}
declare function TypeScriptIcon({ size, style, ...others }: TypeScriptIconProps): React.JSX.Element;

interface TypeScriptCircleIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    size?: number | string;
}
declare function TypeScriptCircleIcon({ size, style, ...others }: TypeScriptCircleIconProps): React.JSX.Element;

interface CssIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    size?: number | string;
}
declare function CssIcon({ size, style, ...others }: CssIconProps): React.JSX.Element;

interface DemoAreaProps {
    children?: React.ReactNode;
    withPadding?: boolean;
    centered?: boolean;
    maxWidth?: number | string;
    minHeight?: number | string;
    dimmed?: boolean;
    striped?: boolean;
}

declare function getFileIcon(fileName: string): React.JSX.Element | null;
interface DemoCodeProps {
    code?: string | CodeHighlightTabsCode | CodeHighlightTabsCode[];
    defaultExpanded?: boolean;
}

interface CodeDemoProps extends DemoCodeProps, DemoAreaProps {
}

type ConfiguratorControl<Type extends string, Params extends Record<string, any>> = {
    type: Type;
    prop: string;
    libraryValue: any;
} & Params;

type ConfiguratorBooleanControlOptions = ConfiguratorControl<"boolean", {
    initialValue: boolean;
}>;

interface SelectDataItem {
    label: string;
    value: string;
}
type SelectData = (string | SelectDataItem)[];

type ConfiguratorSegmentedControlOptions = ConfiguratorControl<"segmented", {
    data: SelectData;
    initialValue: string;
}>;

type ConfiguratorColorControlOptions = ConfiguratorControl<"color", {
    initialValue: string;
}>;

type ConfiguratorStringControlOptions = ConfiguratorControl<"string", {
    initialValue: string;
}>;

type ConfiguratorSelectControlOptions = ConfiguratorControl<"select", {
    data: SelectData;
    initialValue: string;
}>;

type ConfiguratorSizeControlOptions = ConfiguratorControl<"size", {
    initialValue: string;
}>;

type ConfiguratorNumberControlOptions = ConfiguratorControl<"number", {
    initialValue: number;
    min?: number;
    max?: number;
    step?: number;
}>;

type ConfiguratorControlOptions = ConfiguratorBooleanControlOptions | ConfiguratorSegmentedControlOptions | ConfiguratorColorControlOptions | ConfiguratorStringControlOptions | ConfiguratorSelectControlOptions | ConfiguratorSizeControlOptions | ConfiguratorNumberControlOptions;
interface ConfiguratorDemoProps extends DemoAreaProps {
    code: string | ((props: Record<string, any>) => string);
    controls: ConfiguratorControlOptions[];
}

interface StylesApiDemoProps extends DemoAreaProps {
    data: {
        selectors: Record<string, string>;
    };
    code: string;
}

interface DemoComponent {
    component: React.FC<any>;
}
type RaikouDemo = ({
    type: "code";
} & DemoComponent & CodeDemoProps) | ({
    type: "configurator";
} & DemoComponent & ConfiguratorDemoProps) | ({
    type: "styles-api";
} & DemoComponent & StylesApiDemoProps);
interface DemoProps {
    data: RaikouDemo;
}
declare function Demo({ data }: DemoProps): React.JSX.Element | null;

export { ConfiguratorControlOptions, CssIcon, Demo, DiscordIcon, GithubIcon, NpmIcon, RaikouDemo, TwitterIcon, TypeScriptCircleIcon, TypeScriptIcon, YarnIcon, getFileIcon as getCodeFileIcon, meta };
