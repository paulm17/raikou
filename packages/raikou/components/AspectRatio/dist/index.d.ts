import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';

type AspectRatioStylesNames = "root";
type AspectRatioVariant = string;
type AspectRatioCssVariables = {
    root: "--ar-ratio";
};
interface AspectRatioProps extends BoxProps, StylesApiProps<AspectRatioFactory>, ElementProps<"div"> {
    /** Aspect ratio, e.g. `16 / 9`, `4 / 3`, `1920 / 1080`, `1` by default */
    ratio?: number;
}
type AspectRatioFactory = Factory<{
    props: AspectRatioProps;
    ref: HTMLDivElement;
    stylesNames: AspectRatioStylesNames;
    vars: AspectRatioCssVariables;
    variant: AspectRatioVariant;
}>;
declare const AspectRatio: _raikou_core.RaikouComponent<{
    props: AspectRatioProps;
    ref: HTMLDivElement;
    stylesNames: AspectRatioStylesNames;
    vars: AspectRatioCssVariables;
    variant: AspectRatioVariant;
}>;

export { AspectRatio, AspectRatioCssVariables, AspectRatioFactory, AspectRatioProps, AspectRatioStylesNames, AspectRatioVariant };
