import * as _raikou_core from '@raikou/core';
import { BoxProps, CompoundStylesApiProps, ElementProps, RaikouColor, Factory, StylesApiProps, RaikouSpacing, RaikouSize, RaikouRadius } from '@raikou/core';
import React from 'react';

type StepperStepStylesNames = "step" | "stepLoader" | "verticalSeparator" | "stepWrapper" | "stepIcon" | "stepCompletedIcon" | "stepBody" | "stepLabel" | "stepDescription";
interface StepperStepProps extends BoxProps, CompoundStylesApiProps<StepperStepFactory>, ElementProps<"button"> {
    /** Step index, controlled by Stepper component **/
    step?: number;
    /** Step state, controlled by Stepper component */
    state?: "stepInactive" | "stepProgress" | "stepCompleted";
    /** Key of `theme.colors`, by default controlled by Stepper component */
    color?: RaikouColor;
    /** Determines whether the icon should be displayed */
    withIcon?: boolean;
    /** Step icon, defaults to step index + 1 when rendered within Stepper */
    icon?: React.ReactNode | StepFragmentComponent;
    /** Step icon displayed when step is completed */
    completedIcon?: React.ReactNode | StepFragmentComponent;
    /** Step icon displayed when step is in progress */
    progressIcon?: React.ReactNode | StepFragmentComponent;
    /** Step label, render after icon */
    label?: React.ReactNode | StepFragmentComponent;
    /** Step description */
    description?: React.ReactNode | StepFragmentComponent;
    /** Icon wrapper size */
    iconSize?: number;
    /** Icon position relative to step body, controlled by Stepper component */
    iconPosition?: "right" | "left";
    /** Indicates loading state of the step */
    loading?: boolean;
    /** Set to false to disable clicks on step */
    allowStepClick?: boolean;
    /** Should step selection be allowed */
    allowStepSelect?: boolean;
    /** Static selector base */
    __staticSelector?: string;
    /** Component orientation */
    orientation?: "vertical" | "horizontal";
}
type StepperStepFactory = Factory<{
    props: StepperStepProps;
    ref: HTMLButtonElement;
    stylesNames: StepperStepStylesNames;
    compound: true;
}>;
declare const StepperStep: _raikou_core.RaikouComponent<{
    props: StepperStepProps;
    ref: HTMLButtonElement;
    stylesNames: StepperStepStylesNames;
    compound: true;
}>;

interface StepperCompletedProps {
    /** Label content */
    children: React.ReactNode;
}
declare const StepperCompleted: React.FC<StepperCompletedProps>;

type StepFragmentComponent = React.FC<{
    step: number;
}>;
type StepperStylesNames = "root" | "separator" | "steps" | "content" | "step" | "stepLoader" | "verticalSeparator" | "stepWrapper" | "stepIcon" | "stepCompletedIcon" | "stepBody" | "stepLabel" | "stepDescription";
type StepperCssVariables = {
    root: "--stepper-color" | "--stepper-icon-size" | "--stepper-content-padding" | "--stepper-radius" | "--stepper-fz" | "--stepper-spacing";
};
interface StepperProps extends BoxProps, StylesApiProps<StepperFactory>, ElementProps<"div"> {
    /** <Stepper.Step /> components */
    children: React.ReactNode;
    /** Called when step is clicked */
    onStepClick?: (stepIndex: number) => void;
    /** Index of the active step */
    active: number;
    /** Step icon, default value is step index + 1 */
    icon?: React.ReactNode | StepFragmentComponent;
    /** Step icon displayed when step is completed, check icon by default */
    completedIcon?: React.ReactNode | StepFragmentComponent;
    /** Step icon displayed when step is in progress, default value is step index + 1 */
    progressIcon?: React.ReactNode | StepFragmentComponent;
    /** Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Controls size of the step icon, by default icon size is inferred from `size` prop */
    iconSize?: number | string;
    /** Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content */
    contentPadding?: RaikouSpacing;
    /** Stepper orientation, `'horizontal'` by default */
    orientation?: "vertical" | "horizontal";
    /** Icon position relative to the step body, `'left'` by default */
    iconPosition?: "right" | "left";
    /** Controls size of various Stepper elements */
    size?: RaikouSize;
    /** Key of `theme.radius` or any valid CSS value to set steps border-radius, `"xl"` by default */
    radius?: RaikouRadius;
    /** Determines whether next steps can be selected, `true` by default **/
    allowNextStepsSelect?: boolean;
    /** Determines whether steps should wrap to the next line if no space is available, `true` by default */
    wrap?: boolean;
}
type StepperFactory = Factory<{
    props: StepperProps;
    ref: HTMLDivElement;
    stylesNames: StepperStylesNames;
    vars: StepperCssVariables;
    staticComponents: {
        Step: typeof StepperStep;
        Completed: typeof StepperCompleted;
    };
}>;
declare const Stepper: _raikou_core.RaikouComponent<{
    props: StepperProps;
    ref: HTMLDivElement;
    stylesNames: StepperStylesNames;
    vars: StepperCssVariables;
    staticComponents: {
        Step: typeof StepperStep;
        Completed: typeof StepperCompleted;
    };
}>;

export { StepFragmentComponent, Stepper, StepperCompleted, StepperCompletedProps, StepperCssVariables, StepperFactory, StepperProps, StepperStep, StepperStepProps, StepperStylesNames };
