import * as _raikou_core from '@raikou/core';
import { StylesApiProps, Factory, BoxProps, ElementProps, RaikouSize, RaikouRadius, CompoundStylesApiProps, RaikouColor } from '@raikou/core';

type ProgressRootStylesNames = "root" | "section" | "label";
type ProgressRootCssVariables = {
    root: "--progress-size" | "--progress-radius";
};
interface __ProgressRootProps extends BoxProps, ElementProps<"div"> {
    /** Controls track height, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
}
interface ProgressRootProps extends __ProgressRootProps, StylesApiProps<ProgressRootFactory> {
}
type ProgressRootFactory = Factory<{
    props: ProgressRootProps;
    ref: HTMLDivElement;
    stylesNames: ProgressRootStylesNames;
    vars: ProgressRootCssVariables;
}>;
declare const ProgressRoot: _raikou_core.RaikouComponent<{
    props: ProgressRootProps;
    ref: HTMLDivElement;
    stylesNames: ProgressRootStylesNames;
    vars: ProgressRootCssVariables;
}>;

type ProgressSectionStylesNames = "section";
interface ProgressSectionProps extends BoxProps, CompoundStylesApiProps<ProgressSectionFactory>, ElementProps<"div"> {
    /** Value of the section in 0–100 range  */
    value: number;
    /** Determines whether `aria-*` props should be added to the root element, `true` by default */
    withAria?: boolean;
    /** Key of `theme.colors` or any valid CSS value, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Determines whether the section should have stipes, `false` by default */
    striped?: boolean;
    /** Determines whether the sections stripes should be animated, if set, `striped` prop is ignored, `false` by default */
    animated?: boolean;
}
type ProgressSectionFactory = Factory<{
    props: ProgressSectionProps;
    ref: HTMLDivElement;
    stylesNames: ProgressSectionStylesNames;
    compound: true;
}>;
declare const ProgressSection: _raikou_core.RaikouComponent<{
    props: ProgressSectionProps;
    ref: HTMLDivElement;
    stylesNames: ProgressSectionStylesNames;
    compound: true;
}>;

type ProgressLabelStylesNames = "label";
interface ProgressLabelProps extends BoxProps, CompoundStylesApiProps<ProgressLabelFactory>, ElementProps<"div"> {
}
type ProgressLabelFactory = Factory<{
    props: ProgressLabelProps;
    ref: HTMLDivElement;
    stylesNames: ProgressLabelStylesNames;
    compound: true;
}>;
declare const ProgressLabel: _raikou_core.RaikouComponent<{
    props: ProgressLabelProps;
    ref: HTMLDivElement;
    stylesNames: ProgressLabelStylesNames;
    compound: true;
}>;

type ProgressStylesNames = ProgressRootStylesNames;
interface ProgressProps extends __ProgressRootProps, StylesApiProps<ProgressFactory> {
    /** Value of the progress */
    value: number;
    /** Key of `theme.colors` or any valid CSS value, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Determines whether the section should have stipes, `false` by default */
    striped?: boolean;
    /** Determines whether the sections stripes should be animated, if set, `striped` prop is ignored, `false` by default */
    animated?: boolean;
}
type ProgressFactory = Factory<{
    props: ProgressProps;
    ref: HTMLDivElement;
    stylesNames: ProgressStylesNames;
    vars: ProgressRootCssVariables;
    staticComponents: {
        Section: typeof ProgressSection;
        Root: typeof ProgressRoot;
        Label: typeof ProgressLabel;
    };
}>;
declare const Progress: _raikou_core.RaikouComponent<{
    props: ProgressProps;
    ref: HTMLDivElement;
    stylesNames: ProgressStylesNames;
    vars: ProgressRootCssVariables;
    staticComponents: {
        Section: typeof ProgressSection;
        Root: typeof ProgressRoot;
        Label: typeof ProgressLabel;
    };
}>;

export { Progress, type ProgressFactory, ProgressLabel, type ProgressLabelProps, type ProgressProps, ProgressRoot, type ProgressRootProps, ProgressSection, type ProgressSectionProps, type ProgressStylesNames };
