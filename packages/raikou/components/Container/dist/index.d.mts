import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, Factory } from '@raikou/core';

type ContainerStylesNames = "root";
type ContainerCssVariables = {
    root: "--container-size";
};
interface ContainerProps extends BoxProps, StylesApiProps<ContainerFactory>, ElementProps<"div"> {
    /** Sets `max-width` of the container, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
    /** Determines whether the container should take 100% of its parent width. If set, `size` prop is ignored. `false` by default. */
    fluid?: boolean;
}
type ContainerFactory = Factory<{
    props: ContainerProps;
    ref: HTMLDivElement;
    stylesNames: ContainerStylesNames;
    vars: ContainerCssVariables;
}>;
declare const Container: _raikou_core.RaikouComponent<{
    props: ContainerProps;
    ref: HTMLDivElement;
    stylesNames: ContainerStylesNames;
    vars: ContainerCssVariables;
}>;

export { Container, type ContainerCssVariables, type ContainerFactory, type ContainerProps, type ContainerStylesNames };
